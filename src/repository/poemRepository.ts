import { IPoemRepository } from "./IPoemRepository";
import { Poem } from "../types";

export class MockPoemRepository implements IPoemRepository {
  private data: Poem[];

  constructor(data: Poem[]) {
    this.data = data;
  }

  async getPoems() {
    return this.data;
  }
}