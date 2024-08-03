import { ITagsRepository } from "./ITagsRepository";
import { Tags } from "../../types";

export class MockTagsRepository implements ITagsRepository {
  private data: Tags[];

  constructor(data: Tags[]) {
    this.data = data;
  }

  async getTags() {
    return this.data;
  }
}