import reactLogo from "./assets/react.svg";

export default function Header() {
    return (
        <header className="head">
            <img src={reactLogo} alt="react logo" />

            <nav>
                <ul className="navList">
                    <li className="navListItems">Pricing</li>
                    <li className="navListItems">About</li>
                    <li className="navListItems">Contact</li>
                </ul>
            </nav>
        </header>
    )
}
