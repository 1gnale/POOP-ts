import { useState } from 'react';
import { Poem } from '../../types';

const usePoemIndex = (poems: Poem[]) => {
    const [currentPoemIndex, setCurrentPoemIndex] = useState<number>(0);

    const nextPoem = () => {
        setCurrentPoemIndex((prevIndex: number) => (prevIndex + 1) % poems.length);
    };

    const prevPoem = () => {
        setCurrentPoemIndex((prevIndex: number) => (prevIndex - 1 + poems.length) % poems.length);
    };

    return { currentPoemIndex, nextPoem, prevPoem };
}

export default usePoemIndex;