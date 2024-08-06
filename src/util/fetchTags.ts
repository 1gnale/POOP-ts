import { ITagsRepository } from "../repository/tags/ITagsRepository.ts";
import { Tags } from "../types";

export const fetchTags = async (tagsRepo: ITagsRepository) => {
    try {
        const tags: Tags[] = await tagsRepo.getTags()
        return tags
    }
    catch (error) {
        console.error(error);
        return [];
    }
}