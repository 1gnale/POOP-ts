import Header from "../header/Header.tsx";
import Footer from "../footer/Footer.tsx";
import DesktopCardPoemContainer from "../desktopCardPoemContainer/DesktopCardPoemContainer.tsx";
import MobileCardPoemContainer from "../mobileCardPoemContainer/MobileCardPoemContainer.tsx";
import useGetPoems from "../customeHooks/useGetPoem.ts";
import useScreenSize from "../customeHooks/useScreenSize.ts";
import Loader from "../loader/Loader.tsx";
import { Poem } from "../../types";
import React from "react";
import { useAppSelector } from "../../redux/reduxTypedHooks.ts";

const Layout: React.FunctionComponent = () => {
    const screenSize: number = useScreenSize();
    useGetPoems();
    const poems: Poem[] = useAppSelector((state) => state.poems.poems);
    return (
        <>
            <Header />
            <div className="bg-amber-100 mt-24 dark:bg-slate-700">
                {
                    screenSize > 960 ?
                        poems.length === 0 ?
                            <Loader />
                            :
                            <DesktopCardPoemContainer poems={poems} />
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