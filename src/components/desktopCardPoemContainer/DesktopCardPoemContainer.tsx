import React from "react";
import { Poem } from "../../types";
import DesktopCard from "../desktopCard/DesktopCard.tsx";
import Prototype from "../prototype/prototype.tsx";

interface DesktopCardPoemContainerProps {
    poems: Poem[];
}


const DesktopCardPoemContainer: React.FC<DesktopCardPoemContainerProps> = ({poems}) => {
    return (
        <div className="desktopCardPoemContainer">
            {
                poems.map((poem: Poem, idx: number) => {
                    return (
                        <DesktopCard key={idx} title={poem.title}>
                            <Prototype poem={poem.text} />
                        </DesktopCard>
                    )
                })
            }
        </div>
    )
}

export default DesktopCardPoemContainer;