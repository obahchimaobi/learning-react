import { createRoot } from "react-dom/client"
import reactLogo from "./assets/react.svg"

const root = createRoot(document.getElementById("root"))
root.render(
    <>
        <img src={reactLogo} alt="" />

        <h1>FUN FACTS ABOUT REACT</h1>
        <ul>
            <li>Was first releases in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars on GitHub</li>
            <li>Is maintained by Meta</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </>
)
