import { Location } from '../../../types/location.type';

export default class CreateOfferDto {
  public title!: string;
  public description!: string;
  public postDate!: Date;
  public city!:	string;
  public previewImage!: string;
  public images!: string[];
  public isPremium!: boolean;
  public isFavorite!: boolean;
  public rating!: number;
  public type!: string;
  public bedroomsNumber!: number;
  public maxAdultsNumber!: number;
  public price!: number;
  public features!: string[];
  public hostId!: string;
  public location!: Omit<Location, 'zoom'>;
}
