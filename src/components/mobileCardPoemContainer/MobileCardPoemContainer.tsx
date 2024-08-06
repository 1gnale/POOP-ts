import React from "react";
import { useSwipeable } from 'react-swipeable';
import MobileCard from "../mobileCard/mobileCard";
import Prototype from "../prototype/prototype";
import { Poem } from "../../types";
import usePoemIndex from "../customeHooks/usePoemIndex.ts";
import { scrollToTop } from "../../util/scrollToTop.ts";
import TagSelect from "../TagSelect/TagSelect.tsx";
import { useAppSelector } from "../../redux/reduxTypedHooks.ts";
import { Tags } from "../../types";

interface MobileCardPoemContainerProps {
  poems: Poem[];
}

interface OptionType {
  value: string;
  label: string;
}

const MobileCardPoemContainer: React.FC<MobileCardPoemContainerProps> = ({ poems }) => {
  const { currentPoemIndex, nextPoem, prevPoem } = usePoemIndex(poems);

  const tags : Tags[] = useAppSelector((state) => state.tags.tags);
    const options: OptionType[] = tags.map((tag) => {
        return {
            value: tag.id.toString(),
            label: tag.name
        }
    });

  const handlers = useSwipeable({
    onSwipedLeft: () => nextPoem(),
    onSwipedRight: () => prevPoem(),
    onSwiped: () => scrollToTop(),
    preventScrollOnSwipe: true,
    trackMouse: true
  });

  const poem = poems[currentPoemIndex];



  return (
    <div {...handlers} className="h-3/4 relative justify-center flex flex-wrap p-2">
      <TagSelect data={options} className="w-full sm:w-2/3 mb-7" />
        <MobileCard title={poem.title}>
          <Prototype poem={poem.text} />
        </MobileCard>
    </div>
  );
}

export default MobileCardPoemContainer;