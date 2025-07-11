import aiAlps from "../assets/ai_alps.webp";
import Navbar from "../components/Navbar";

const booking = {
    image: aiAlps,
    title: "Alpine Adventure",
    start: "2025-08-01",
    end: "2025-08-07",
    location: "Swiss Alps",
    cost: "€1,200",
    content: <p>Join us for an unforgettable adventure in the Swiss Alps! Experience breathtaking views, expert guides, and a journey you'll never forget.</p>,
    form: {
        title: "Book Your Adventure",
        content: (
            <form className="wpcf7-form">
                <p className="form-name-input">
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
                </p>
                <p>
                    <label>
                    
                        <span>
                            <input type="email" name="email" required />
                        </span>
                    </label>
                </p>
                <p>
                    <label>
                
                        <textarea name="questions" rows={4} />
                    </label>
                </p>
                <p>
                    <div className="wp-block-buttons">
                        <div className="wp-block-button">
                            <a className="wp-block-button__link" type="submit">Book your Adventure</a>
                        </div>
                    </div>
                </p>
            </form>
        ),
    },
};

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
}

const Booking = () => {
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
                        {booking.content}
                        <div className="wp-block-columns">
                            <div className="wp-block-column">
                                <p>02</p>
                                <p>Days</p>
                            </div>
                            <div className="wp-block-column">
                                <p>3.798</p>
                                <p>Meters</p>
                            </div>
                            <div className="wp-block-column">
                                <p>01</p>
                                <p>Level</p>
                            </div>
                        </div>
                    </div>
                    <div className="pipe"></div>
                    <div className="booking-form">
                        <h2>{booking.form.title}</h2>
                        {booking.form.content}
                    </div>
                </div>
            </main>
        </>
    );
}

export default Booking;
