import React from "react";

const Footer: React.FC = () => (
    <footer>
        <div className="continents">
            <div>
                <p>Europe</p>
                <ul>
                    <li>
                        <a href="https://de.wikipedia.org/wiki/Mont_Blanc">Mont Blanc</a>
                    </li>
                    <li>
                        <a href="https://de.wikipedia.org/wiki/Elbrus">Elbrus</a>
                    </li>
                </ul>
            </div>
            <div>
                <p>Africa</p>
                <ul>
                    <li>
                        <a href="https://de.wikipedia.org/wiki/Kilimandscharo">Kilimanjaro</a>
                    </li>
                    <li>
                        <a href="https://de.wikipedia.org/wiki/Nationalpark_Mount_Kenya">Mount Kenya</a>
                    </li>
                </ul>
            </div>
            <div>
                <p>Asia</p>
                <ul>
                    <li>
                        <a href="https://de.wikipedia.org/wiki/Mount_Everest">Mount Everest</a>
                    </li>
                    <li>
                        <a href="https://de.wikipedia.org/wiki/Fuji_(Vulkan)">Mount Fuji</a>
                    </li>
                </ul>
            </div>
            <div>
                <p>North America</p>
                <ul>
                    <li>
                        <a href="https://de.wikipedia.org/wiki/Denali">Denali</a>
                    </li>
                    <li>
                        <a href="https://de.wikipedia.org/wiki/Mount_Logan">Mount Logan</a>
                    </li>
                </ul>
            </div>
            <div>
                <p>South America</p>
                <ul>
                    <li>
                        <a href="https://de.wikipedia.org/wiki/Aconcagua">Aconcagua</a>
                    </li>
                    <li>
                        <a href="https://de.wikipedia.org/wiki/Chimborazo">Chimborazo</a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="contact">
            <p className="follow">New Adventure Story</p>
            <div className="follow-content">
                <p>Bla bla</p>
            </div>
            <ul className="footer-menu"></ul>
        </div>
    </footer>
);

export default Footer;
