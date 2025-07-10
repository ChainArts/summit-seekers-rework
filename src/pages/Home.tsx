import About from "../components/About";
import Carousel, { type CarouselPost } from "../components/Carousel";
import Expeditions from "../components/Expeditions";
import HeaderParallax from "../components/HeaderParallax";
import IconGrid from "../components/IconGrid";
import Navbar from "../components/Navbar";
import aiTianzi from "../assets/ai_tianzi_mountains.webp";
import aiAlps from "../assets/ai_alps.webp";
import aiCanyon from "../assets/ai_canyon.webp";

const posts: CarouselPost[] = [
    {
        id: 1,
        imagePath: aiAlps,
        alt: "Alps",
        link: "/adventure/alps",
        title: "Alps",
        meta: { footnotes: "Austria, Carinthia" },
    },
    {
        id: 2,
        imagePath: aiCanyon,
        alt: "Grand Canyon",
        link: "/adventure/grand-canyon",
        title: "Grand Canyon",
        meta: { footnotes: "USA, Arizona" },
    },
    {
        id: 3,
        imagePath: aiTianzi,
        alt: "Sample 1",
        link: "/adventure/zhangjiajie",
        title: "Zhangjiajie National Forest",
        meta: { footnotes: "China, Hunan Province" },
    },
];

const Home = () => {
    return (
        <main className="home">
            <HeaderParallax />
            <Navbar />
            <h2 className="wp-block-heading has-text-align-center contain">Elevate Your Adventure, Conquer the Summits Responsibly.</h2>
            <p className="has-text-align-center contain">
                Welcome to Summit Seekers, where your passion for adventure meets the majesty of the mountains. Under the guidance of Andrew Clarke, we invite you to embark on thrilling expeditions that honor the beauty of nature.
            </p>
            <IconGrid />
            <h1 id="expeditions" className="wp-block-heading has-text-align-center">
                Expeditions
            </h1>
            <Expeditions />
            <h1 id="adventure" className="wp-block-heading has-text-align-center">
                Adventure
            </h1>
            <p className="has-text-align-center">Dive into our collection of Adventure Stories around the world, where each tale is a thrilling testament to the spirit of exploration and the transformative power of the mountains.</p>
            <Carousel posts={posts} />
            <div className="wp-block-buttons is-content-justification-center is-layout-flex wp-container-core-buttons-layout-4 wp-block-buttons-is-layout-flex">
                <div className="wp-block-button">
                    <a className="wp-block-button__link wp-element-button">Book your Adventure</a>
                </div>
            </div>
            <h1 id="about" className="wp-block-heading">
                About me
            </h1>
            <About />
        </main>
    );
};

export default Home;
