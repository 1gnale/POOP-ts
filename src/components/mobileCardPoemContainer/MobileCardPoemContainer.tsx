import React from "react";
import { useSwipeable } from 'react-swipeable';
import MobileCard from "../mobileCard/mobileCard";
import Prototype from "../prototype/prototype";
import { Poem } from "../../types";
import usePoemIndex from "../customeHooks/usePoemIndex.ts";
import { scrollToTop } from "../../util/scrollToTop.ts";
import TagSelect from "../TagSelect/TagSelect.tsx";

interface MobileCardPoemContainerProps {
  poems: Poem[];
}

interface OptionType {
  value: string;
  label: string;
}

const MobileCardPoemContainer: React.FC<MobileCardPoemContainerProps> = ({ poems }) => {
  const { currentPoemIndex, nextPoem, prevPoem } = usePoemIndex(poems);

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
      <TagSelect defaultOption={exampleWords[0]} data={exampleWords} className="w-full sm:w-2/3 mb-7" />
        <MobileCard title={poem.title}>
          <Prototype poem={poem.text} />
        </MobileCard>
    </div>
  );
}

export default MobileCardPoemContainer;