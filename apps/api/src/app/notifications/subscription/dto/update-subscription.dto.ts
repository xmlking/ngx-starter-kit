import { ArrayNotEmpty, ArrayUnique } from 'class-validator';

export class UpdateSubscriptionDto {
  @ArrayNotEmpty()
  @ArrayUnique()
  topics: string[];
}
