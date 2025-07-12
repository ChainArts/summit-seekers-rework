import { useState, useEffect } from "react";
import { motion, cubicBezier } from "motion/react";
import useMousePos from "./useMousePos";
import { LiaAngleRightSolid } from "react-icons/lia";
import { useLocation } from "react-router-dom";

const CustomCursor = () => {
    //Init as early as possible
    const location = useLocation();
    const { x, y } = useMousePos();
    const [isHovered, setIsHovered] = useState<React.ReactNode>(null);
    const [cursorText, setCursorText] = useState<React.ReactNode>(null);

    // State to track hover state

    const handleHoverStart = () => {
        setIsHovered(true);
        // Add logic to update cursor text when hovering starts
        setCursorText(<LiaAngleRightSolid />);
    };

    const handleHoverEnd = () => {
        setIsHovered(false);
        // Add logic to clear cursor text when hovering ends
        setCursorText(null);
    };

    useEffect(() => {
        handleHoverEnd(); // Reset hover state on location change
        const delay = setTimeout(() => {
            const anchors = document.querySelectorAll("a, .wp-block-button, .cursor-anchor");

            anchors.forEach((anchor) => {
                anchor.addEventListener("mouseenter", handleHoverStart);
                anchor.addEventListener("mouseleave", handleHoverEnd);
            });

            return () => {
                // Cleanup event listeners on unmount
                anchors.forEach((anchor) => {
                    anchor.removeEventListener("mouseenter", handleHoverStart);
                    anchor.removeEventListener("mouseleave", handleHoverEnd);
                });
            };
        }, 1000);
        return () => clearTimeout(delay);
    }, [location.pathname]);

    return (
        <motion.div
            className={`custom-cursor ${isHovered ? "hovered" : ""}`}
            animate={{
                translateX: `${x}px`,
                translateY: `${y}px`,
            }}
            transition={{
                type: "tween",
                ease: cubicBezier(0.14, 0.8, 0.4, 1),
                duration: 0.4,
            }}
        >
            <div className="cursor-bubble">
                <div className="cursor-box">
                    <div className="corner left-top"></div>
                    <div className="corner left-bottom"></div>
                    <div className="corner right-top"></div>
                    <div className="corner right-bottom"></div>
                </div>
                <div className="cursor-text" id="cursor-text">
                    {cursorText}
                </div>
            </div>
        </motion.div>
    );
};

export default CustomCursor;
