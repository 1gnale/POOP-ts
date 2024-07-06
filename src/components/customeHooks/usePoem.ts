import { useEffect, useState } from "react";
import { fetchPoem } from "../../util/fetchPoem.ts";
import { Poem } from "../../types"

const useGetPoems = (): Poem[] => {
    const [poem, setPoem] = useState<Poem[]>([]);
    useEffect(() => {
        fetchPoem(setPoem);
    }, []);
    return poem;
}

export default useGetPoems;