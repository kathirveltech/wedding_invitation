import PropTypes from "prop-types";
import Divider from "../common/Divider.jsx";

export default function Footer({ groomName, brideName, note }) {
  return (
    <footer className="footer">
      <p className="footer__names">
        {groomName} &amp; {brideName}
      </p>
      <Divider />
      <p className="footer__note">{note}</p>
    </footer>
  );
}

Footer.propTypes = {
  groomName: PropTypes.string.isRequired,
  brideName: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired,
};
