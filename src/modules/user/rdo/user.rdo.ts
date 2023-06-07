import { Expose } from 'class-transformer';

export default class UserRdo {
  @Expose()
  public email!: string ;

  @Expose()
  public avatarPath!: string;

  @Expose()
  public name!: string;

  @Expose()
  public isPro!: string;

  @Expose()
  public password!: string;
}
