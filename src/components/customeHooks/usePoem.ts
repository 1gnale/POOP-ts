import { useEffect, useState } from "react";
import { fetchPoem } from "../../util/fetchPoem.ts";
import { Poem } from "../../types"
import { MockPoemRepository } from "../../repository/poemRepository.ts";
import json from "../../mockData/data.json"

const useGetPoems = (): Poem[] => {
    const poemRepo = new MockPoemRepository(json);
    const [poem, setPoem] = useState<Poem[]>([]);
    useEffect(() => {
        fetchPoem(setPoem, poemRepo);
    }, []);
    return poem;
}

export default useGetPoems;