import { MockPoemRepository } from "../repository/poemRepository.ts";
import { Poem } from "../types";

export const fetchPoem = async (setPoemCallBack: (poems: Poem[]) => void) => {
    const mockPoemRepository = new MockPoemRepository()
    const poems = await mockPoemRepository.getPoems()
    setPoemCallBack(poems);
}