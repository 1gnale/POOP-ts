import { MockPoemRepository } from "../repository/poemRepository.ts";
import { Poem } from "../types";
import prototype from "../components/prototype/prototype.json";

export const fetchPoem = async (setPoemCallBack: (poems: Poem[]) => void) => {
    const mockPoemRepository = new MockPoemRepository(prototype)
    const poems = await mockPoemRepository.getPoems()
    setPoemCallBack(poems);
}