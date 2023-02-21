import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <span className="name"><em>Josue Carreon</em></span>
            <nav className="site-menu">
                <Link to="/">HOME</Link>
                <Link to="/About">ABOUT</Link>
                <Link to="/Portfolio">PORTFOLIO</Link>
            </nav>
        </header>
    )
};

export default Header;