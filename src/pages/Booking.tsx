import Navbar from "../components/Navbar";
import { bookings } from "../data/bookings";
import { useParams } from "react-router-dom";

// Helper to format dates
const formatBookingDates = (startStr: string, endStr: string) => {
    const start = new Date(startStr);
    const end = new Date(endStr);

    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
        return "Invalid date";
    }

    if (start.getFullYear() === end.getFullYear()) {
        return start.toLocaleDateString("en-GB", { day: "2-digit", month: "long" }) + " - " + end.toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" });
    } else {
        return start.toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" }) + " - " + end.toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" });
    }
};

const Booking = () => {
    const { slug } = useParams();
    const booking = bookings.find((b) => b.slug === slug);
    if (!booking) {
        return (
            <>
                <Navbar />
                <main>
                    <h2>Booking not found</h2>
                </main>
            </>
        );
    }
    return (
        <>
            <Navbar />
            <main className="booking">
                <div className="booking-image">
                    <img src={booking.image} alt={booking.title} />
                </div>
                <div className="booking-container">
                    <div className="booking-content">
                        <h2>{booking.title}</h2>
                        <ul>
                            <li>Duration: {formatBookingDates(booking.start, booking.end)}</li>
                            <li>Location: {booking.location}</li>
                            <li>Price: {booking.cost}</li>
                        </ul>
                        <p>{booking.text}</p>
                        <div className="wp-block-columns">
                            <div className="wp-block-column">
                                <p>{booking.days}</p>
                                <p>Days</p>
                            </div>
                            <div className="wp-block-column">
                                <p>{booking.meters}</p>
                                <p>Meters</p>
                            </div>
                            <div className="wp-block-column">
                                <p>{booking.level}</p>
                                <p>Level</p>
                            </div>
                        </div>
                    </div>
                    <div className="pipe"></div>
                    <div className="booking-form">
                        <h2>Book your Adventure</h2>
                        <form className="form">
                            <div className="form-name-input">
                                <label>
                                    <span>
                                        <input type="text" name="firstname" placeholder="First Name" required />
                                    </span>
                                </label>
                                <label>
                                    <span>
                                        <input type="text" name="lastname" placeholder="Last Name" required />
                                    </span>
                                </label>
                            </div>
                            <div className="form-email-input">
                                <label>
                                    <span>
                                        <input type="email" name="email" placeholder="E-Mail" required />
                                    </span>
                                </label>
                            </div>
                            <div className="form-message-input">
                                <label>
                                    <textarea name="questions" rows={5} placeholder="Do you have any questions?"/>
                                </label>
                            </div>
                            <div>
                                <div className="wp-block-buttons">
                                    <div className="wp-block-button">
                                        <a className="wp-block-button__link" type="submit">
                                            Book your Adventure
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Booking;
