import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { posts } from "../data/adventures";

const Adventure = () => {
    const { slug } = useParams();
    const adventure = posts.find((post) => post.slug === slug);

    if (!adventure) {
        return (
            <>
                <Navbar />
                <main>
                    <h2>Adventure not found</h2>
                </main>
            </>
        );
    }

    return (
        <>
            <Navbar />
            <main className="adventure">
                <div className="adventure-image">
                    <img src={adventure.imagePath} alt={adventure.title} />
                </div>
                <div className="adventure-content">
                    <p className="meta">{adventure.meta?.footnotes}</p>
                    <h2>{adventure.title}</h2>
                    {Array.isArray(adventure.content) ? adventure.content.map((para, i) => <p key={i}>{para}</p>) : <p>{adventure.content}</p>}
                </div>
            </main>
        </>
    );
};

export default Adventure;
