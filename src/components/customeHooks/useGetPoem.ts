import { useEffect } from "react";
import { fetchPoem } from "../../util/fetchPoem.ts";
import { MockPoemRepository } from "../../repository/poemRepository.ts";
import json from "../../mockData/data.json"
import { useDispatch } from "react-redux";
import { setPoems } from "../../redux/poemsSlice.ts";



const useGetPoems = (): void => {
    const dispatch = useDispatch();
    const poemRepo = new MockPoemRepository(json);
    useEffect(() => {
        fetchPoem(poemRepo)
            .then((poems) => dispatch(setPoems(poems)))
            .catch((error) => console.error(error));

    }, []);
}

export default useGetPoems;