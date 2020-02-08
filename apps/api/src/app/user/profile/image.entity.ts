import { ApiProperty } from '@nestjs/swagger';
import { Image as IImage, ImageType } from '@ngx-starter-kit/models';
import { Transform } from 'class-transformer';
import { IsEnum, IsOptional, Length, MaxLength } from 'class-validator';
import { Column, CreateDateColumn, Entity, ManyToOne } from 'typeorm';
import { Base } from '../../core/entities/base';
import { User } from '../user.entity';

@Entity('image')
export class Image extends Base implements IImage {
  @Length(1, 100)
  @Column({ length: 100 })
  title: string;

  @Column({ type: 'enum', enum: ImageType, default: ImageType.Profile })
  @IsEnum(ImageType)
  type: ImageType;

  @ManyToOne(
    type => User,
    user => user.images,
    { onDelete: 'CASCADE', nullable: false },
  )
  user: User;

  @ApiProperty({ type: 'string', format: 'date-time', example: '2018-11-21T06:20:32.232Z' })
  @CreateDateColumn({ type: 'timestamptz' })
  createdAt?: Date;

  @IsOptional()
  @Transform(value => value.toString('base64'), { toPlainOnly: true })
  @Column({ type: 'bytea', nullable: true })
  data?: Buffer;

  @IsOptional()
  @Column({ nullable: true })
  checksum?: string;

  @IsOptional()
  @Column({ nullable: true })
  mimeType?: string;

  @IsOptional()
  @Column({ nullable: true })
  size?: number;

  @IsOptional()
  @MaxLength(500)
  @Column({ length: 500, nullable: true })
  url?: string;
}
