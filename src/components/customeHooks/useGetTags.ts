import { useEffect } from "react";
import { fetchTags } from "../../util/fetchTags.ts";
import { MockTagsRepository } from "../../repository/tags/tagsRepository.ts";
import json from "../../mockData/tags.json"
import { useDispatch } from "react-redux";
import { setTags } from "../../redux/tagsSlice.ts";
import useLoadingData from "./useLoadingData.ts";
import useErrorData from "./useErrorData.ts";

const useGetTags = (): {error: boolean, loading: boolean} => {
    const { error, setError } = useErrorData();
    const { loading, setLoading } = useLoadingData();
    const dispatch = useDispatch();
    const tagsRepo = new MockTagsRepository(json);
    useEffect(() => {
        setError(false);
        setLoading(true);
        fetchTags(tagsRepo)
            .then((tags) => dispatch(setTags(tags)))
            .catch((error) => {
                console.error(error)
                setError(true);})
            .finally(() => setLoading(false));

    }, [dispatch, tagsRepo, setLoading]);

    return {error, loading}
}

export default useGetTags;