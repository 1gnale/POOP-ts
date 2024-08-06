import { useEffect } from "react";
import { fetchPoem } from "../../util/fetchPoem.ts";
import { MockPoemRepository } from "../../repository/poemRepository.ts";
import json from "../../mockData/data.json"
import { useDispatch } from "react-redux";
import { setPoems } from "../../redux/poemsSlice.ts";
import useLoadingData from "./useLoadingData.ts";
import useErrorData from "./useErrorData.ts";




const useGetPoems = (): { error: boolean; loading: boolean; } => {
    const dispatch = useDispatch();
    const { error, setError } = useErrorData();
    const { loading, setLoading } = useLoadingData();
    const poemRepo = new MockPoemRepository(json);

    useEffect(() => {
        setError(false);
        setLoading(true);
        fetchPoem(poemRepo)
            .then((poems) => dispatch(setPoems(poems)))
            .catch((error) => {console.error(error)
                setError(true);
            })
            .finally(() => setLoading(false));
    }, [dispatch, poemRepo, setLoading]);

    return {error, loading}
};

export default useGetPoems;