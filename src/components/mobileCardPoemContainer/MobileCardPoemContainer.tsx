import React from "react";
import { useSwipeable } from 'react-swipeable';
import MobileCard from "../mobileCard/mobileCard";
import Prototype from "../prototype/prototype";
import { Poem } from "../../types";
import usePoemIndex from "../customeHooks/usePoemIndex.ts";

interface MobileCardPoemContainerProps {
  poems: Poem[];
}

const MobileCardPoemContainer: React.FC<MobileCardPoemContainerProps> = ({ poems }) => {
  const { currentPoemIndex, nextPoem, prevPoem } = usePoemIndex(poems);

  const handlers = useSwipeable({
    onSwipedLeft: () => nextPoem(),
    onSwipedRight: () => prevPoem(),
    preventScrollOnSwipe: true,
    trackMouse: true
  });

  const poem = poems[currentPoemIndex];

  return (
    <div {...handlers} className="h-3/4 aspect-w-2 aspect-h-3 relative justify-center flex">
        <MobileCard title={poem.title}>
          <Prototype poem={poem.text} />
        </MobileCard>
    </div>
  );
}

export default MobileCardPoemContainer;