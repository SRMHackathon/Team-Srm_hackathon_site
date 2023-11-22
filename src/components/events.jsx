import hackathonlogo from "../assets/hacklogoWhite.png";
import semicolonlogo from "../assets/SemiColon.png";
import ideathonlogo from "../assets/Ideathon.png";
function Events() {
    const eventInformation = {
        hackathon:
            "Hackathon provides an opportunity for participants to develop their technical and problem-solving skills, and to work collaboratively in a team-based setting. Secondly, the event can promote innovation and creativity by encouraging participants to think outside the box and develop new and unique solutions to complex problems.Finally, the hackathon can help to create a sense of community and foster a culture of innovation and entrepreneurship within the college or university.",
        ideathon:
            "An ideathon is an event that brings together individuals orteams to brainstorm and generate ideas to tackle a specificproblem or challenge. The objective is to encourageparticipants to think creatively and come up with novelsolutions. The following are the expected outcomes of anideathon.Firstly, the event provides a platform forparticipants to generate innovative ideas and solutions toaddress a specific problem or challenge. This creates anopportunity to approach problems from different angles andcome up with creative solutions",
        semicolon:
            "The Semicolon 8.0 is a coding competition that aims to bringtogether coders of all levels to challenge their skills andpush their boundaries. The competition will include severalrounds of coding challenges, where participants will have tosolve complex problems using their coding skills.",
    };
    return (
        <div className="Events-section">
            <div className="events_section_title">OUR EVENTS</div>
            <div className="Hackathon_event">
                <img
                    className="event_image"
                    src={hackathonlogo}
                    alt="hack-logo"
                />
                <div className="event-content">
                    {eventInformation.hackathon}
                </div>
            </div>
            <div className="Semicolon_event">
                <div className="event-content">
                    {eventInformation.semicolon};
                </div>
                <img
                    className="event_image"
                    src={semicolonlogo}
                    alt="semicolon-logo"
                />
            </div>
            <div className="Ideathon-event">
                <img
                    className="event_image"
                    src={ideathonlogo}
                    alt="ideathonlogo"
                />
                <div className="event-content">{eventInformation.ideathon}</div>
            </div>
        </div>
    );
}

export default Events;
