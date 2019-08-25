import { Column, CreateDateColumn, Entity, ManyToOne } from 'typeorm';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

import { Base } from '../../core/entities/base';
import { Image as IImage, ImageType } from '@ngx-starter-kit/models';
import { User } from '../user.entity';

@Entity('image')
export class Image extends Base implements IImage {
  @ApiModelProperty({ type: String, minLength: 1, maxLength: 100 })
  @Column({ length: 100 })
  title: string;

  @ApiModelProperty({ type: String, enum: ImageType, default: ImageType.Profile })
  @Column({ type: 'enum', enum: ImageType, default: ImageType.Profile })
  @IsEnum(ImageType)
  type: ImageType;

  @ApiModelProperty({ type: User })
  @ManyToOne(type => User, user => user.images, { onDelete: 'CASCADE', nullable: false })
  user: User;

  @ApiModelProperty({ type: 'string', format: 'date-time', example: '2018-11-21T06:20:32.232Z' })
  @CreateDateColumn({ type: 'timestamptz' })
  createdAt?: Date;

  @ApiModelPropertyOptional({ type: String })
  @IsOptional()
  @Transform(value => value.toString('base64'), { toPlainOnly: true })
  @Column({ type: 'bytea', nullable: true })
  data?: Buffer;

  @ApiModelPropertyOptional({ type: String })
  @IsOptional()
  @Column({ nullable: true })
  checksum?: string;

  @ApiModelPropertyOptional({ type: String })
  @IsOptional()
  @Column({ nullable: true })
  mimeType?: string;

  @ApiModelPropertyOptional({ type: Number })
  @IsOptional()
  @Column({ nullable: true })
  size?: number;

  @ApiModelPropertyOptional({ type: String, maxLength: 500 })
  @IsOptional()
  @Column({ length: 500, nullable: true })
  url?: string;
}
