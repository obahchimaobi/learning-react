import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { Fragment } from "react";
import "./main.css"

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <Fragment>
        <Navbar />
        <Main />
    </Fragment>
)
