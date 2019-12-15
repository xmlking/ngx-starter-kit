import { Requests as IRequests } from '@ngx-starter-kit/models';
import { IsNotEmpty, IsNumber, IsOptional, Max, Min } from 'class-validator';

export class Requests implements IRequests {
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

  @IsNumber()
  @IsOptional()
  @Min(0)
  @Max(25)
  gpu: number;
}
