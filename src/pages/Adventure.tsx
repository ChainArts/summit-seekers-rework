import { NavLink } from "react-router-dom";
import adventureImg from "../assets/ai_tianzi_mountains.webp";
import Navbar from "../components/Navbar";

const adventure = {
    image: adventureImg,
    title: "Zhangjiajie National forest",
    footnotes: "China, Hunan Province",
    content: <><p>Step into a world where adventure knows no limits, and each mountain trek takes you further into uncharted.</p><p>Step into a world where adventure knows no limits, and each mountain trek takes you further into uncharted territories. With Summit Seekers, experience the exhilaration of overcoming new challenges and discovering hidden gems of the wilderness. Our journeys are designed to push your boundaries, physically and spiritually, connecting you deeply with the raw beauty of nature.</p></>,
};

export default function Adventure() {
    return (
        <>
            <Navbar />
            <main className="adventure">
                <div className="adventure-image">
                    <img src={adventure.image} alt={adventure.title} />
                </div>
                <div className="adventure-content">
                    <p className="meta">{adventure.footnotes}</p>
                    <h2>{adventure.title}</h2>
                    {adventure.content}
                    <div className="wp-block-buttons">
                        <div className="wp-block-button">
                            <NavLink className="wp-block-button__link"to="/#adventure">Back to Adventures</NavLink>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
