import { NavLink } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import { menu } from "../data/menu";
import { useNavigation } from "../hooks/useNavigation";

const Header = () => {
    const { handleNavigation } = useNavigation();
    
    return (
        <header>
            <nav id="site-navigation" className="desktop-nav">
                <ul>
                    <li>
                        <NavLink to="/#" onClick={(e) => handleNavigation(e, "/#")}>
                            Summit Seekers
                        </NavLink>
                    </li>
                    {menu.map((item) => (
                        <li key={item.id}>
                            <NavLink to={item.url} onClick={(e) => handleNavigation(e, item.url)}>
                                {item.title}
                            </NavLink>
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
