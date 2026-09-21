import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle.jsx";
import useCountdown from "../../hooks/useCountdown.js";

function Unit({ value, label }) {
  const display = String(value).padStart(2, "0");
  return (
    <div className="countdown__unit">
      <AnimatePresence mode="popLayout">
        <motion.p
          className="countdown__value"
          key={display}
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.3 }}
        >
          {display}
        </motion.p>
      </AnimatePresence>
      <p className="countdown__label">{label}</p>
    </div>
  );
}

Unit.propTypes = {
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

export default function Countdown({ targetDate }) {
  const { days, hours, minutes, seconds, finished } = useCountdown(targetDate);

  return (
    <section className="countdown" id="countdown">
      <SectionTitle eyebrow="Save The Date" title={finished ? "The Day Is Here" : "Counting Down"} />
      <div className="countdown__grid">
        <Unit value={days} label="Days" />
        <Unit value={hours} label="Hours" />
        <Unit value={minutes} label="Minutes" />
        <Unit value={seconds} label="Seconds" />
      </div>
    </section>
  );
}

Countdown.propTypes = {
  targetDate: PropTypes.string.isRequired,
};
