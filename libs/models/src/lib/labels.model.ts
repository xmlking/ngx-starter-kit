import { EnvironmentType } from './environment-type.enum';
import { ZoneType } from './zone-type.enum';

export interface Labels {
  env: EnvironmentType;
  zone: ZoneType;
  name?: string;
}
