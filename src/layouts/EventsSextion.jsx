import "./EventsSection.css";
import arrow from "../assets/right-arrow-50.png";
import data from "../Events.json";
function EventsSection() {
  return (
    <div className="event-section">
      <h2 className="heading-secondary margin-bottom-big">Event List</h2>
      {data.map((val, i) => (
        <div className="event-box" key={i}>
          <div className="event-top">
            <h4 className="event-name text text-big">{val.event}</h4>
            <p className="text event-date">{val.date}</p>
          </div>
          <p className="text">{val.description}</p>
          <div className="register">
            <a href={val.registrationLink} className="register-link">
              Register now
            </a>
            <img src={arrow} alt="Right arrow" className="icon" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default EventsSection;
