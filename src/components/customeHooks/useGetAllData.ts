import useGetPoems from "./useGetPoems.ts";
import useGetTags from "./useGetTags.ts";

const useGetAllData = (): { loading: boolean; error: boolean; } => {
    const {error: errorPoems, loading: loadingPoems} = useGetPoems();
    const {error: errorTags, loading: loadingTags} = useGetTags();

    const loading = loadingPoems || loadingTags;
    const error = errorPoems || errorTags;

    return {loading, error};
}

export default useGetAllData;
