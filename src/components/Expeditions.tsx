import React from "react";
import { useLenis } from 'lenis/react';
import canyon2 from "../assets/canyon_2.png";
import aiCampfire from "../assets/ai_campfire.webp";
import aiEverest from "../assets/ai_everest.webp";

type ExpeditionProps = {
    image: string;
    imageAlt: string;
    heading: React.ReactNode;
    description: string;
};

const Expedition: React.FC<ExpeditionProps> = ({ image, imageAlt, heading, description }) => {
    const lenis = useLenis();

    const handleBookingClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const targetElement = document.querySelector("#booking") as HTMLElement;
        if (targetElement && lenis) {
            lenis.scrollTo(targetElement);
        } else if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="wp-block-columns expedition">
            <div className="wp-block-column picture">
                <figure className="wp-block-image">
                    <img decoding="async" src={image} alt={imageAlt} />
                </figure>
            </div>
            <div className="wp-block-column content">
                <h2 className="wp-block-heading">{heading}</h2>
                <p>{description}</p>
                <div className="wp-block-buttons">
                    <div className="wp-block-button">
                        <a className="wp-block-button__link wp-element-button" href="/#booking" onClick={handleBookingClick}>
                            Book your adventure
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

const expeditionsData: ExpeditionProps[] = [
    {
        image: canyon2,
        imageAlt: "Man standing on the edge of a summit",
        heading: (
            <>
                Travel Beyond Borders,
                <br />
                conquer the limits
            </>
        ),
        description:
            "Step into a world where adventure knows no limits, and each mountain trek takes you further into uncharted territories. With Summit Seekers, experience the exhilaration of overcoming new challenges and discovering hidden gems of the wilderness.",
    },
    {
        image: aiCampfire,
        imageAlt: "Two men in warm jackets on a green summit",
        heading: (
            <>
                Embrace the Thrill,
                <br />
                Honor the Wilderness
            </>
        ),
        description: "Join us in a thrilling adventure that balances adrenaline with a deep respect for the natural world. Our commitment is to leave no trace behind, ensuring that the wild’s pristine beauty is preserved for future adventurers.",
    },
    {
        image: aiEverest,
        imageAlt: "Mountain expedition group conquering a summit",
        heading: (
            <>
                Ascend to Greatness,
                <br />
                Join Our Community
            </>
        ),
        description:
            "Elevate your mountain experiences with Summit Seekers, where every expedition is more than just a climb – it’s a journey towards personal greatness. As part of our community, you’ll find like-minded adventurers sharing passion for the peaks.",
    },
];

const Expeditions = () => (
    <>
        {expeditionsData.map((exp, idx) => (
            <Expedition key={idx} {...exp} />
        ))}
    </>
);

export default Expeditions;
