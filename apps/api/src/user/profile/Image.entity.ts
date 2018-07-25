import {Entity, Column, PrimaryGeneratedColumn, ObjectID, ObjectIdColumn} from 'typeorm';

// TODO: https://github.com/nicolaspearson/salespal/blob/master/backend/src/controllers/StockImageController.ts
// TODO: https://github.com/mkatrenik/assignar
// TODO: https://steemit.com/utopian-io/@morningtundra/storing-and-retreiving-images-in-mongodb-with-nodejs

@Entity()
export class Image {
  @ObjectIdColumn() id: ObjectID;

  @Column({ length: 200 })
  title: string;

  @Column({ name: 'image', type: 'binary' })
  image: any; // Buffer;

  @Column()
  type: ImageType;

  // contentType?
  // size?
}

export enum ImageType {
  Profile,
  Icon,
  Avatar,
}
