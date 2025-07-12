import adventureIcon from "../assets/adventure-icon.svg";
import guidesIcon from "../assets/guides-icon.svg";
import campingIcon from "../assets/camping-icon.svg";


const IconGrid = () => (
    <div className="icon-grid">
        <div>
            <div className="wp-block-image is-style-default">
                <figure>
                    <img src={adventureIcon} alt="Adventure Icon" style={{ aspectRatio: 1, objectFit: "contain", width: "50px" }} />
                </figure>
            </div>
            <h3 className="wp-block-heading has-text-align-center">Adventures</h3>
            <p className="has-text-align-center">Discover thrilling journeys and breathtaking landscapes around the world.</p>
        </div>

        <div>
            <div className="wp-block-image">
                <figure>
                    <img src={guidesIcon} alt="Guides Icon" style={{ aspectRatio: 1, objectFit: "contain", width: "50px" }} />
                </figure>
            </div>
            <h3 className="wp-block-heading has-text-align-center">Guides</h3>
            <p className="has-text-align-center">Trust our experienced guides for a safe and inspiring adventure.</p>
        </div>

        <div>
            <div className="wp-block-image">
                <figure>
                    <img src={campingIcon} alt="Camping Icon" style={{ aspectRatio: 1, objectFit: "contain", width: "auto", height: "50px" }} />
                </figure>
            </div>
            <h3 className="wp-block-heading has-text-align-center">Camping</h3>
            <p className="has-text-align-center">Sleep under starlit skies and deepen your connection with the natural world.</p>
        </div>
    </div>
);

export default IconGrid;
