import { NextFunction, Request, Response } from 'express';
import { nanoid } from 'nanoid';
import multer, { diskStorage } from 'multer';
import mime from 'mime-types';
import { MiddlewareInterface } from './middleware.interface.js';
import HttpError from '../errors/http-error.js';
import { StatusCodes } from 'http-status-codes';

export class UploadFileMiddleware implements MiddlewareInterface {
  constructor(
    private uploadDirectory: string,
    private fieldName: string,
  ) {}

  public async execute(req: Request, res: Response, next: NextFunction): Promise<void> {
    const storage = diskStorage({
      destination: this.uploadDirectory,
      filename: (_req, file, callback) => {
        const extension = mime.extension(file.mimetype);
        const filename = nanoid();
        callback(null, `${filename}.${extension}`);
      }
    });

    const uploadSingleFileMiddleware = multer({
      storage: storage,
      fileFilter: function (_req, file, cb){
        const filetypes = /jpeg|jpg|png/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test((file.originalname).toLowerCase());
        if (mimetype && extname) {
          return cb(null, true);
        }
        cb(new HttpError(
          StatusCodes.BAD_REQUEST,
          'File should be end with any one of the following extensions: jpg, jpeg, png'));
      }
    })
      .single(this.fieldName);

    uploadSingleFileMiddleware(req, res, next);
  }
}
