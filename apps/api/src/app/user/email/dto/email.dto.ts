import { IsString } from 'class-validator';

export class EmailDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly name?: string;

  @IsString()
  readonly comments?: string;
}
