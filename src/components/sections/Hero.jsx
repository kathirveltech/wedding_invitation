import PropTypes from "prop-types";
import { motion } from "framer-motion";
import FloralCorner from "../common/FloralCorner.jsx";
import Divider from "../common/Divider.jsx";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.25, delayChildren: 0.3 } },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Hero({ groomName, brideName, dateDisplay, venueName, venueCity, quote, animate }) {
  return (
    <header className="hero" id="home">
      <FloralCorner className="hero__corner hero__corner--tl" />
      <FloralCorner className="hero__corner hero__corner--tr" />
      <FloralCorner className="hero__corner hero__corner--bl" />
      <FloralCorner className="hero__corner hero__corner--br" />

      <motion.div variants={container} initial="hidden" animate={animate ? "show" : "hidden"}>
        <motion.p className="hero__eyebrow" variants={item}>
          Together with their families
        </motion.p>
        <motion.h1 className="hero__names" variants={item}>
          {groomName}
          <span className="hero__amp">&amp;</span>
          {brideName}
        </motion.h1>
        <motion.div variants={item}>
          <Divider />
        </motion.div>
        <motion.p className="hero__date" variants={item}>
          {dateDisplay}
        </motion.p>
        <motion.p className="hero__venue" variants={item}>
          {venueName}, {venueCity}
        </motion.p>
        <motion.p className="hero__quote" variants={item}>
          &ldquo;{quote}&rdquo;
        </motion.p>
      </motion.div>

      {/* ✅ plain <a> with CSS animation — no Framer Motion infinite loop */}
      <a
        className="hero__scroll"
        href="#couple"
        aria-label="Scroll down to the invitation details"
      >
        ▾
      </a>
    </header>
  );
}

Hero.propTypes = {
  groomName: PropTypes.string.isRequired,
  brideName: PropTypes.string.isRequired,
  dateDisplay: PropTypes.string.isRequired,
  venueName: PropTypes.string.isRequired,
  venueCity: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  animate: PropTypes.bool.isRequired,
};