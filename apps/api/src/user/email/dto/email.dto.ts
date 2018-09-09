import { IsString, IsEmail, IsNotEmpty, Length } from 'class-validator';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class EmailDto {
  @ApiModelProperty({ type: String })
  @IsString()
  readonly title: string;

  @ApiModelPropertyOptional({ type: String })
  @IsString()
  readonly name?: string;

  @ApiModelPropertyOptional({ type: String })
  @IsString()
  readonly comments?: string;
}
