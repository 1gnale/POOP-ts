import Header from "../header/Header.tsx";
import Footer from "../footer/Footer.tsx";
import DesktopCardPoemContainer from "../desktopCardPoemContainer/DesktopCardPoemContainer.tsx";
import MobileCardPoemContainer from "../mobileCardPoemContainer/MobileCardPoemContainer.tsx";
import useGetPoems from "../customeHooks/usePoem.ts";
import useScreenSize from "../customeHooks/useScreenSize.ts";
import Loader from "../loader/Loader.tsx";
import { Poem } from "../../types";
import React from "react";

const Layout: React.FunctionComponent = () => {
    const screenSize: number = useScreenSize();
    const poems: Poem[] = useGetPoems();

    return (
        <>
            <Header />
            <div className="bg-amber-100 mt-20 dark:bg-slate-700">
                {
                    screenSize > 960 ?
                        poems.length === 0 ?
                            <Loader />
                            : <DesktopCardPoemContainer poems={poems} />
                        :
                        poems.length === 0 ?
                            <Loader />
                            :
                            <MobileCardPoemContainer poems={poems} />
                }
                <Footer />
            </div>
        </>
    );
}

export default Layout;