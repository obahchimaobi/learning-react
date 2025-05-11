import { createRoot } from "react-dom/client";
import reactLogo from "./assets/react.svg";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement);

function Header() {
    return (
        <header>
            <img src={reactLogo} alt="react logo" />
        </header>
    )
}

function Main() {
    return (
        <main>
            <h1>Reasons I'm excited to learn react</h1>

            <ol>
                <li>React is a popular library</li>
                <li>I can get a high paying frontend job with react</li>
            </ol>
        </main>
    )
}

function Footer() {
    return (
        <footer>
            0 20xx development. All rights reserved
        </footer>
    )
}

root.render(
    <>
        <Header />
        <Main />
        <Footer />
    </>
)
