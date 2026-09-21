import PropTypes from "prop-types";

const links = [
  { id: "couple", label: "Couple" },
  { id: "story", label: "Story" },
  { id: "events", label: "Events" },
  { id: "gallery", label: "Gallery" },
  { id: "venue", label: "Venue" },
  // { id: "rsvp", label: "RSVP" }, // disabled for now
  { id: "wishes", label: "Wishes" },
];

export default function Navbar({ groomInitial, brideInitial }) {
  return (
    <nav className="navbar" aria-label="Invitation sections">
      <a href="#home" className="navbar__brand" style={{ textDecoration: "none" }}>
        {groomInitial} ♥ {brideInitial}
      </a>
      <ul className="navbar__links">
        {links.map((link) => (
          <li key={link.id}>
            <a href={`#${link.id}`}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  groomInitial: PropTypes.string.isRequired,
  brideInitial: PropTypes.string.isRequired,
};
