import reactLogo from "../assets/react.svg";

export default function Navbar() {
    return (
        <header className="head">
            <div className="head-inside">
                <img src={reactLogo} alt="react logo" />
                <h1 className="head-text">ReactFacts</h1>
            </div>

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
