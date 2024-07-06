import Header from "../header/Header.tsx";
import Footer from "../footer/Footer.tsx";
import Prototype from "../prototype/prototype.tsx";
import Card from "../card/Card.tsx";
import useGetPoems from "../customeHooks/usePoem.ts";
import { Poem } from "../../types";
import React from "react";

const Layout: React.FunctionComponent = () => {
    const poems: Poem[] = useGetPoems();
    console.log(poems);

    return (
        <div>
            <Header />
            {poems.map((poem, index) => (
                <Card key={index}>
                    <Prototype poem={poem.text} />
                </Card>
            ))}
            <Footer />
        </div>
    );
}

export default Layout;