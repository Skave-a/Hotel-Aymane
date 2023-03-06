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