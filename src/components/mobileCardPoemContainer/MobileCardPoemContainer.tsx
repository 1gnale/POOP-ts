import React from "react";
import MobileCard from "../mobileCard/mobileCard";
import Prototype from "../prototype/prototype";
import { Poem } from "../../types";
import usePoemIndex from "../customeHooks/usePoemIndex.ts";

interface MobileCardPoemContainerProps {
    poems: Poem[];
}

const MobileCardPoemContainer: React.FC<MobileCardPoemContainerProps> = ({ poems }) => {
    const { currentPoemIndex, nextPoem, prevPoem } = usePoemIndex(poems);

    const poem = poems[currentPoemIndex];
    return (
        <div>
            <button onClick={prevPoem}>Anterior</button>
            <button onClick={nextPoem}>Siguiente</button>
            <MobileCard title={poem.title}>
                <Prototype poem={poem.text} />
            </MobileCard>
        </div>

    );
}

export default MobileCardPoemContainer;