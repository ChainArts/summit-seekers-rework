import aiAndrew from "../assets/ai_andrew.webp";

const About = () => (
    <div className="wp-block-columns contain about">
        <div className="wp-block-column" style={{ flexBasis: "66.66%" }}>
            <h2 className="wp-block-heading">Hi, I’m Andrew Clarke</h2>
            <p>I’m the founder and guiding spirit of Summit Seekers. As an avid adventure enthusiast, my journey has always been about more than just conquering mountains. It’s about fostering a sustainable and respectful relationship with the wild.</p>
            <p>
                Over the years, scaling some of the most formidable peaks across the globe, I’ve not only sharpened my climbing skills but also deepened my commitment to environmental stewardship. My experiences in the great outdoors have shaped a
                profound respect for nature and a dedication to responsible adventuring.
            </p>
        </div>
        <div className="wp-block-column" style={{ flexBasis: "33.33%" }}>
            <figure className="wp-block-image">
                <img decoding="async" src={aiAndrew} alt="Andrew Clarke"/>
            </figure>
        </div>
    </div>
);

export default About;
