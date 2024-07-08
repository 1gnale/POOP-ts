import { IPoemRepository } from "../repository/IPoemRepository.ts";
import { Poem } from "../types";

export const fetchPoem = async (setPoemCallBack: (poems: Poem[]) => void, poemRepo: IPoemRepository) => {
    try {
        const poems = await poemRepo.getPoems()
        setPoemCallBack(poems);
    }
    catch (error) {
        setPoemCallBack([]);
        console.error(error);
    }
}