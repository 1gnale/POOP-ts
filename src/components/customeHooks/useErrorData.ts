import { useState } from "react";

const useErrorData = (): { error: boolean; setError: React.Dispatch<React.SetStateAction<boolean>> } => {
    const [error, setError] = useState<boolean>(false);

    return { error, setError };
}

export default useErrorData;