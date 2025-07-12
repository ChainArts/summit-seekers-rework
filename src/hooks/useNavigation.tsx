import { useLenis } from "lenis/react";
import { useLocation, useNavigate } from "react-router-dom";

export const useNavigation = () => {
    const lenis = useLenis();
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, url: string, closeMenu?: () => void) => {
        e.preventDefault();
        
        // Close menu if provided (for burger menu)
        if (closeMenu) {
            closeMenu();
        }

        // Parse the URL
        const urlParts = url.split("#");
        const targetPath = urlParts[0] || "/";
        const targetHash = urlParts[1] || "";

        if (url === "/#") {
            if (location.pathname === "/") {
                // Already on homepage - clear hash and scroll to top
                navigate("/", { replace: true });
                setTimeout(() => {
                    if (lenis) {
                        lenis.scrollTo(0);
                    } else {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                }, 30);
            } else {
                navigate("/");
            }
            return;
        }

        if (location.pathname !== targetPath) {
            if (targetHash) {
                navigate(`${targetPath}#${targetHash}`);
            } else {
                navigate(targetPath);
            }
            return;
        }

        // Same page navigation - handle scrolling to sections
        if (!targetHash || targetHash === "") {
            // Clear any existing hash and scroll to top
            navigate(location.pathname, { replace: true });
            setTimeout(() => {
                if (lenis) {
                    lenis.scrollTo(0);
                } else {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }
            }, 30);
        } else {
            // Update URL with hash
            navigate(`${location.pathname}#${targetHash}`, { replace: true });
            setTimeout(() => {
                const targetElement = document.querySelector(`#${targetHash}`) as HTMLElement;
                if (targetElement && lenis) {
                    lenis.scrollTo(targetElement);
                } else if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth" });
                }
            }, 30);
        }
    };

    return { handleNavigation };
};