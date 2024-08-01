import { IPoemRepository } from "../repository/IPoemRepository.ts";
import { Poem } from "../types";

export const fetchPoem = async (poemRepo: IPoemRepository) => {
    try {
        const poems: Poem[] = await poemRepo.getPoems()
        return poems
    }
    catch (error) {
        console.error(error);
        return [];
    }
}