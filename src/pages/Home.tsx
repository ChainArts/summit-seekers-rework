import About from "../components/About";
import Carousel from "../components/Carousel";
import Expeditions from "../components/Expeditions";
import HeaderParallax from "../components/HeaderParallax";
import IconGrid from "../components/IconGrid";
import Navbar from "../components/Navbar";
import { posts } from "../data/adventures";
import BookingGrid from "../components/BookingGrid";



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
            <BookingGrid />
            <h1 id="expeditions" className="wp-block-heading has-text-align-center">
                Expeditions
            </h1>
            <Expeditions />
            <h1 id="adventure" className="wp-block-heading has-text-align-center">
                Adventure
            </h1>
            <p className="has-text-align-center">Dive into our collection of Adventure Stories around the world, where each tale is a thrilling testament to the spirit of exploration and the transformative power of the mountains.</p>
            <Carousel posts={posts} />
            <div className="wp-block-buttons">
                <div className="wp-block-button">
                    <a className="wp-block-button__link" href="#booking">Book your Adventure</a>
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
