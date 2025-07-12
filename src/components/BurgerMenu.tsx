import { motion, AnimatePresence, cubicBezier } from "framer-motion";
import { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import { useLenis } from "lenis/react";
import { menu } from "../data/menu";
import { useNavigation } from "../hooks/useNavigation";

const menuVariants = {
    hidden: {
        x: "100vw",
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: cubicBezier(0.14, 0.8, 0.4, 1),
        },
    },
    exit: {
        x: "-100vw",
        opacity: 0,
        transition: {
            duration: 0.5,
            ease: cubicBezier(0.14, 0.8, 0.4, 1),
        },
    },
};

const ulVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.05,
            ease: cubicBezier(0.14, 0.8, 0.4, 1),
        },
    },
};

const liVariants = {
    hidden: {
        opacity: 0,
        x: "5rem",
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            ease: cubicBezier(0.14, 0.8, 0.4, 1),
            duration: 0.8,
        },
    },
};

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const lenis = useLenis();
    const { handleNavigation } = useNavigation();

    useEffect(() => {
        if (isOpen) {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

            if (lenis) {
                lenis.stop();
            }
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        } else {
            if (lenis) {
                lenis.start();
            }
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
        }
        return () => {
            if (lenis) {
                lenis.start();
            }
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
        };
    }, [isOpen, lenis]);

    const handleMenuClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
        handleNavigation(e, url, () => setIsOpen(false));
    };

    return (
        <>
            <motion.div className="burger" onClick={() => setIsOpen(!isOpen)}>
                <div className={isOpen ? "menu-toggle-icon menu-toggle-open" : "menu-toggle-icon menu-toggle-closed"}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <div className="burger-styling">
                    <div className={`corner left-top ${isOpen ? "white" : ""}`}></div>
                    <div className={`corner left-bottom ${isOpen ? "white" : ""}`}></div>
                    <div className={`corner right-top ${isOpen ? "white" : ""}`}></div>
                    <div className={`corner right-bottom ${isOpen ? "white" : ""}`}></div>
                </div>
            </motion.div>
            <AnimatePresence mode="wait">
                {isOpen && (
                    <motion.nav className="menu-overlay" variants={menuVariants} initial="hidden" animate="visible" exit="exit">
                        <motion.ul variants={ulVariants}>
                            <motion.li key={1} variants={liVariants}>
                                <motion.a href="/#" onClick={(e) => handleMenuClick(e, "/#")}>
                                    <motion.img src={logo} alt="logo" />
                                </motion.a>
                            </motion.li>
                            {menu.map((item) => (
                                <motion.li key={item.id} variants={liVariants}>
                                    <motion.a href={item.url} onClick={(e) => handleMenuClick(e, item.url)}>
                                        {item.title}
                                    </motion.a>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </>
    );
};

export default BurgerMenu;
