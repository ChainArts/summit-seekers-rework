import adventureIcon from "../assets/adventure-icon.svg";
import guidesIcon from "../assets/guides-icon.svg";
import campingIcon from "../assets/camping-icon.svg";


const IconGrid = () => (
    <div className="wp-block-columns icon-grid is-layout-flex wp-container-core-columns-layout-1 wp-block-columns-is-layout-flex">
        <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
            <div className="wp-block-image is-style-default">
                <figure className="aligncenter size-full is-resized">
                    <img src={adventureIcon} alt="Adventure Icon" className="wp-image-159" style={{ aspectRatio: 1, objectFit: "contain", width: "50px" }} />
                </figure>
            </div>
            <h3 className="wp-block-heading has-text-align-center">Adventures</h3>
            <p className="has-text-align-center">Discover thrilling journeys and breathtaking landscapes around the world.</p>
        </div>

        <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
            <div className="wp-block-image">
                <figure className="aligncenter size-full is-resized">
                    <img src={guidesIcon} alt="Guides Icon" className="wp-image-160" style={{ aspectRatio: 1, objectFit: "contain", width: "50px" }} />
                </figure>
            </div>
            <h3 className="wp-block-heading has-text-align-center">Guides</h3>
            <p className="has-text-align-center">Trust our experienced guides for a safe and inspiring adventure.</p>
        </div>

        <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
            <div className="wp-block-image">
                <figure className="aligncenter size-full is-resized">
                    <img src={campingIcon} alt="Camping Icon" className="wp-image-161" style={{ aspectRatio: 1, objectFit: "contain", width: "auto", height: "50px" }} />
                </figure>
            </div>
            <h3 className="wp-block-heading has-text-align-center">Camping</h3>
            <p className="has-text-align-center">Sleep under starlit skies and deepen your connection with the natural world.</p>
        </div>
    </div>
);

export default IconGrid;
