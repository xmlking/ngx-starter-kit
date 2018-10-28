import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// TODO: https://github.com/nicolaspearson/salespal/blob/master/backend/src/controllers/StockImageController.ts
// TODO: https://github.com/mkatrenik/assignar
// TODO: https://steemit.com/utopian-io/@morningtundra/storing-and-retreiving-images-in-mongodb-with-nodejs

@Entity('image')
export class Image {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 200 })
  title: string;

  @Column('bytea')
  image: any;

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
