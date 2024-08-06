import React from "react";
import { Poem } from "../../types";
import DesktopCard from "../desktopCard/DesktopCard.tsx";
import Prototype from "../prototype/prototype.tsx";
import TagSelect from "../TagSelect/TagSelect.tsx";
import { useAppSelector } from "../../redux/reduxTypedHooks.ts";
import { Tags } from "../../types";
interface DesktopCardPoemContainerProps {
    poems: Poem[];
}

interface OptionType {
    value: string;
    label: string;
}


const DesktopCardPoemContainer: React.FC<DesktopCardPoemContainerProps> = ({ poems }) => {
    const tags : Tags[] = useAppSelector((state) => state.tags.tags);
    const options: OptionType[] = tags.map((tag) => {
        return {
            value: tag.id.toString(),
            label: tag.name
        }
    });

    return (
        <div>
            <div className="p-8 desktopCardPoemContainer gap-x-32 gap-y-16 grid grid-cols-2 place-items-center">
            <div className="col-span-full flex w-2/3 justify-center">
                    <TagSelect data={options} className="w-full" />
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