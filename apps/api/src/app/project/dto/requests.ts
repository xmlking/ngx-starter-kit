import { IsNotEmpty, IsNumber, IsOptional, Max, Min } from 'class-validator';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { Requests as IRequests } from '@ngx-starter-kit/models';

export class Requests implements IRequests {
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

  @ApiModelPropertyOptional({ type: Number, minimum: 0, maximum: 25, default: 5 })
  @IsNumber()
  @IsOptional()
  @Min(0)
  @Max(25)
  gpu: number;
}
