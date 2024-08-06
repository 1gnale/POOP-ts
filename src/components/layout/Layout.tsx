import Header from "../header/Header.tsx";
import Footer from "../footer/Footer.tsx";
import DesktopCardPoemContainer from "../desktopCardPoemContainer/DesktopCardPoemContainer.tsx";
import MobileCardPoemContainer from "../mobileCardPoemContainer/MobileCardPoemContainer.tsx";
import useGetAllData from "../customeHooks/useGetAllData.ts";
import useScreenSize from "../customeHooks/useScreenSize.ts";
import Loader from "../loader/Loader.tsx";
import { Poem } from "../../types";
import React from "react";
import { useAppSelector } from "../../redux/reduxTypedHooks.ts";

const Layout: React.FunctionComponent = () => {
    const screenSize: number = useScreenSize();
    const { error, loading } = useGetAllData();
    const poems: Poem[] = useAppSelector((state) => state.poems.poems);

    if (loading) {
        return (
            <div className="">
                <Loader />
            </div>
        )
    }

    if (error) {
        return <div className="error-message">Error: something went wrong</div>;
    }

    return (
        <>
            <Header />
            <div className="bg-amber-100 mt-24 dark:bg-slate-700">
                {
                    screenSize > 960 ?
                        <DesktopCardPoemContainer poems={poems} />
                        :
                        <MobileCardPoemContainer poems={poems} />
                }
                <Footer />
            </div>
        </>
    );
};

export default Layout;