import {Entity} from "@nx-starter-kit/shared";

export class Account implements Entity {
  constructor(
    public id:number = 0,
    public name?: string,
    public gender?: Gender,
    public age?: number,
    public address?: Address
  ) {}
}

export class Address {
  constructor(
    public state? : string,
    public city?: string,
  ) {}
}

export enum Gender {
  male = 'make' ,
  female = 'female'
}
