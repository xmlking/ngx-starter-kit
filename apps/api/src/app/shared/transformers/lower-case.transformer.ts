import { ValueTransformer } from 'typeorm';

export class LowerCaseTransformer implements ValueTransformer {
  to(entityValue: string) {
    return entityValue.toLocaleLowerCase();
  }
  from(databaseValue: string) {
    return databaseValue;
  }
}
