import { bookings } from "../data/bookings";


// Helper to convert date to [day, month]
function convertDate(dateStr: string): [string, string] {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return ["", ""];
    return [date.getDate().toString().padStart(2, "0"), date.toLocaleString("en-US", { month: "short" })];
}

const BookingGridItem = ({ booking }: { booking: (typeof bookings)[0] }) => {
    const [startDay, startMonth] = convertDate(booking.start);
    const [endDay, endMonth] = convertDate(booking.end);

    return (
        <div id="booking" className="booking-grid-item">
            <div className="picture-container">
                <img src={booking.image} alt={booking.title} />
            </div>
            <a href={booking.link}>
                <div className="booking-grid-content">
                    <div>
                        <div className="date">
                            <span>{startDay}</span>
                            <span>{startMonth}</span>
                        </div>
                        <div className="date">
                            <span>{endDay}</span>
                            <span>{endMonth}</span>
                        </div>
                    </div>
                    <div className="pipe"></div>
                    <div className="booking-grid-main">
                        <p>{booking.location}</p>
                        <h3>{booking.title}</h3>
                    </div>
                    {/* SVG Arrow */}
                    <svg data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70.67 53.56">
                        <polygon className="cls-1" fill="#53906d" points="59.27 29.85 0 29.85 0 23.72 59.1 23.7 39.31 4.17 43.57 0 70.67 26.84 43.3 53.56 39.38 49.83 59.27 29.85" />
                    </svg>
                </div>
            </a>
        </div>
    );
}

const BookingGrid = () => {
    if (bookings.length === 0) return null;

    return (
        <div className="booking-grid contain">
            <BookingGridItem booking={bookings[0]} />
            <div className="booking-grid-later">
                {bookings.slice(1).map((booking) => (
                    <BookingGridItem key={booking.id} booking={booking} />
                ))}
            </div>
        </div>
    );
}


export default BookingGrid;
