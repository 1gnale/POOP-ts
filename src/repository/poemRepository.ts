import { IPoemRepository } from "./IPoemRepository";

export class MockPoemRepository implements IPoemRepository {
  private data: any;

  constructor(data: any) {
    this.data = data;
  }

  async getPoems() {
    return this.data;
  }
}