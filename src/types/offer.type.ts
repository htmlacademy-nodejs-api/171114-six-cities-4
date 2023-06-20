import { City } from './city.enum';
import { FeatureType } from './feature-type.enum';
import { OfferType } from './offer-type.enum';
import { User } from './user.type';

export type Offer = {
  title: string;
  description: string;
  city:	City;
  previewImage: string;
  images: string[];
  isPremium: boolean;
  type: OfferType;
  bedroomsNumber: number;
  maxAdultsNumber: number;
  price: number;
  features: string[];
  host: User;
  latitude: number;
  longitude: number;
}
