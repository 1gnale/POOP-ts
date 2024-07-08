import React from "react";
import { Poem } from "../../types";
import DesktopCard from "../desktopCard/DesktopCard.tsx";
import Prototype from "../prototype/prototype.tsx";

interface DesktopCardPoemContainerProps {
    poem: Poem;
}


const DesktopCardPoemContainer: React.FC<DesktopCardPoemContainerProps> = ({poem}) => {
    return (
        <div className="desktopCardPoemContainer">
            <DesktopCard title={poem.title}>
                <Prototype poem={poem.text} />
            </DesktopCard>
        </div>
    )
}

export default DesktopCardPoemContainer;