import { ReactElement } from "react";

export interface IHero {
  children: ReactElement;
  hero: string;
}

export interface IBanner {
  children: ReactElement;
  title: string;
  subtitle: string;
}

export interface IdefaultValue {
  rooms: IRoom[],
  sortedRooms: IRoom[],
  featuredRooms: IRoom[],
  loading: boolean,
  getRoom: (slug: string) => IR,
}

export interface IImg {
    fields: {
      file: {
        url: string,
      }
    }
}

export interface Ifields {
  name: string,
    slug: string,
    type: string,
    price: number,
    size: number,
    capacity: number,
    pets: boolean,
    breakfast: boolean,
    featured: boolean,
    description: string,
    extras: string[],
    images: IImg[],
}

export interface IRoom {
  sys: {
    id: string,
  },
  fields: Ifields,
}

export interface IR {
  name: string,
    slug: string,
    type: string,
    price: number,
    size: number,
    capacity: number,
    pets: boolean,
    breakfast: boolean,
    featured: boolean,
    description: string,
    extras: string[],
    images: string[],
    id: string,
}

export interface IRooms {
  room: IRoom;
}