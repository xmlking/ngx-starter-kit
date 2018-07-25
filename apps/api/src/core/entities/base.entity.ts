import {ObjectID, ObjectIdColumn} from 'typeorm';

import {Transform} from 'class-transformer';
import toHexString from './toHexString';
import {ApiModelPropertyOptional} from '@xmlking/swagger';

export abstract class Base {

  @ApiModelPropertyOptional()
  @Transform(toHexString, {toPlainOnly: true})
  @ObjectIdColumn() id: ObjectID;
}
