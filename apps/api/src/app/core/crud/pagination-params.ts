import { Transform } from 'class-transformer';
import { IsOptional, Max, Min } from 'class-validator';

export enum OrderType {
  DESC = 'DESC',
  ASC = 'ASC',
}

/**
 * Describes generic pagination params
 */
export abstract class PaginationParams<T> {
  /**
   * Pagination limit
   */
  @IsOptional()
  @Min(0)
  @Max(50)
  @Transform((val: string) => parseInt(val, 10))
  readonly take ? = 10;

  /**
   * Pagination offset
   */
  @IsOptional()
  @Min(0)
  @Transform((val: string) => parseInt(val, 10))
  readonly skip ? = 0;

  /**
   * OrderBy
   */
  @IsOptional()
  abstract readonly order?: { [P in keyof T]?: OrderType };
}
