import { IsEnum } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export enum EnvironmentType {
  Prod,
  NonProd,
}
export enum ZoneType {
  DMZ,
  Core,
}

export enum DCType {
  CLUSTER1,
  CLUSTER2,
  CLUSTER3,
  CLUSTER4,
}

export class Labels {
  @ApiModelProperty({ enum: ['Prod', 'NonProd'] })
  @IsEnum(EnvironmentType)
  env: EnvironmentType;

  @ApiModelProperty({ required: false, enum: ['Core', 'DMZ'] })
  @IsEnum(ZoneType)
  zone?: ZoneType;

  @ApiModelProperty({ required: false, enum: ['CLUSTER1', 'CLUSTER2', 'CLUSTER3', 'CLUSTER4'] })
  @IsEnum(DCType)
  dc?: DCType;
}
