import { IsNotEmpty, IsNumber, Max, Min } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { Limits as ILimits } from '@ngx-starter-kit/models';

export class Limits implements ILimits {
  @ApiModelProperty({ type: Number, minimum: 0, maximum: 10156, default: 1 })
  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Max(10156)
  cpu: number;

  @ApiModelProperty({ type: Number, minimum: 0, maximum: 10720, default: 1 })
  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Max(10720)
  memory: number;
}
