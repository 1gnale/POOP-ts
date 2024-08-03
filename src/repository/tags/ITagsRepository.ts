import { Tags } from "../../types";

export interface ITagsRepository {
    getTags(): Promise<Tags[]>;
  }