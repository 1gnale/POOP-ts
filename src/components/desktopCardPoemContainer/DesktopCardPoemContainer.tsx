import React from "react";
import { Poem } from "../../types";
import DesktopCard from "../desktopCard/DesktopCard.tsx";
import Prototype from "../prototype/prototype.tsx";
import TagSelect from "../TagSelect/TagSelect.tsx";

interface DesktopCardPoemContainerProps {
    poems: Poem[];
}

interface OptionType {
    value: string;
    label: string;
}


const DesktopCardPoemContainer: React.FC<DesktopCardPoemContainerProps> = ({ poems }) => {
    const exampleWords: OptionType[] = [
        { value: 'example1', label: 'example1' },
        { value: 'example2', label: 'example2' },
        { value: 'example3', label: 'example3' },
        { value: 'example4', label: 'example4' },
        { value: 'example5', label: 'example5' },
        { value: 'example6', label: 'example6' },
        { value: 'example7', label: 'example7' },
        { value: 'example8', label: 'example8' },
        { value: 'example9', label: 'example9' },
        { value: 'example10', label: 'example10' },
        { value: 'example11', label: 'example11' },
    ];

    return (
        <div>
            <div className="p-8 desktopCardPoemContainer gap-x-32 gap-y-16 grid grid-cols-2 place-items-center">
            <div className="col-span-full flex w-2/3 justify-center border border-red-400">
                    <TagSelect data={exampleWords} defaultOption={exampleWords[0]} className="w-full" />
                </div>
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
        </div>
    )
}

export default DesktopCardPoemContainer;