import { Limits as ILimits } from '@ngx-starter-kit/models';
import { IsNotEmpty, IsNumber, Max, Min } from 'class-validator';

export class Limits implements ILimits {
  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Max(10156)
  cpu = 1;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Max(10720)
  memory = 1;
}
