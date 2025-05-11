import { createRoot } from "react-dom/client";
import { Fragment } from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import "./main.css";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement);

root.render(

    <Fragment>
        <Header />
        <MainContent />
        <Footer />
    </Fragment>
)
