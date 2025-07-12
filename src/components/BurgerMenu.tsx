import { motion, AnimatePresence, cubicBezier } from "framer-motion";
import { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import { useLenis } from 'lenis/react';


const menuVariants = {
    hidden: {
        x: "100vw",
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: cubicBezier(.14, .8, .4, 1),
        }
    },
    exit: {
        x: "-100vw",
        opacity: 0,
        transition: {
            duration: 0.5,
            ease: cubicBezier(.14, .8, .4, 1)
        }
    }
}

const ulVariants = {
    hidden: {opacity: 0},
    visible: { opacity: 1,
        transition: {
            duration: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.05,
            ease: cubicBezier(.14, .8, .4, 1),
            
        }
    }
}

const liVariants = {
    hidden: {
        opacity: 0,
        x: "5rem"
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            ease: cubicBezier(.14, .8, .4, 1),
            duration: 0.8
        }
    }
}


const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const lenis = useLenis();
    const menu = [
        { id: 1, title: "Booking", url: "/#booking" },
        { id: 2, title: "Expeditions", url: "/#expeditions" },
        { id: 3, title: "Adventure", url: "/#adventure" },
        { id: 4, title: "About", url: "/#about" }
    ];

    // Effect to handle scroll prevention when menu is open
    useEffect(() => {
        if (isOpen) {
            // Get scrollbar width before hiding it
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            
            // Stop Lenis scrolling
            if (lenis) {
                lenis.stop();
            }
            // Prevent body scroll and hide scrollbar, compensate for scrollbar width
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        } else {
            // Re-enable Lenis scrolling
            if (lenis) {
                lenis.start();
            }
            // Restore body scroll and remove padding
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        }

        // Cleanup function to restore scroll when component unmounts
        return () => {
            if (lenis) {
                lenis.start();
            }
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        };
    }, [isOpen, lenis]);

    const handleMenuClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
        e.preventDefault();
        setIsOpen(false);
        
        if (url === "/#") {
            if (lenis) {
                lenis.scrollTo(0);
            } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        } else {
            // Remove the leading slash and hash for section targeting
            const targetId = url.replace(/^\/#/, "#");
            const targetElement = document.querySelector(targetId) as HTMLElement;
            if (targetElement && lenis) {
                lenis.scrollTo(targetElement);
            } else if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        }
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
                                    <motion.a href={item.url} onClick={(e) => handleMenuClick(e, item.url)}>{item.title}</motion.a>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </>
    );
}

export default BurgerMenu;