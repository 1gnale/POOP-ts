import Header from "../header/Header.tsx";
import Footer from "../footer/Footer.tsx";
import DesktopCardPoemContainer from "../desktopCardPoemContainer/DesktopCardPoemContainer.tsx";
import MobileCardPoemContainer from "../mobileCardPoemContainer/MobileCardPoemContainer.tsx";
import useGetPoems from "../customeHooks/usePoem.ts";
import useScreenSize from "../customeHooks/useScreenSize.ts";
import { Poem } from "../../types";
import React from "react";

const Layout: React.FunctionComponent = () => {
    const screenSize: number = useScreenSize();
    const poems: Poem[] = useGetPoems();

    return (
        <div>
            <Header />
            {
                screenSize > 960 ?
                    poems.map((poem: Poem, idx: number) => (
                        <DesktopCardPoemContainer key={idx} poem={poem} />
                    )) :
                        poems.length === 0 ?
                                <h1>TODO - LOADER</h1>
                            :           
                        <MobileCardPoemContainer poems={poems} />
            }
            <Footer />
        </div>
    );
}

export default Layout;