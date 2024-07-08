import { Poem } from "../types";

export interface IPoemRepository {
    getPoems(): Promise<Poem[]>;
  }