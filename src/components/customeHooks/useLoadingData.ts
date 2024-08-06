import { useState } from "react";

const useLoadingData = (): { loading: boolean; setLoading: React.Dispatch<React.SetStateAction<boolean>> } => {
    const [loading, setLoading] = useState<boolean>(true);

    return { loading, setLoading };
}

export default useLoadingData;