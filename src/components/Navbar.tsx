import { NavLink, useLocation } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    // Example menu items; replace with your actual menu data or CMS integration
    const menu = [
        { id: 1, title: "Booking", url: "#booking" },
        { id: 2, title: "Expeditions", url: "#expeditions" },
        { id: 3, title: "Adventure", url: "#adventure" },
        { id: 4, title: "About", url: "#about" }
    ];

    const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (isHomePage) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <header>
            <nav id="site-navigation" className="desktop-nav">
                <ul>
                    <li>
                        <NavLink to={isHomePage ? "#" : "/"} onClick={handleHomeClick}>
                            Summit Seekers
                        </NavLink>
                    </li>
                    {menu.map((item) => (
                        <li key={item.url}>
                            <a href={item.url} className={location.pathname === item.url ? "active" : ""}>
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <div id="burger-menu-hook" className="mobile-nav">
                <BurgerMenu />
            </div>
        </header>
    );
};

export default Header;
