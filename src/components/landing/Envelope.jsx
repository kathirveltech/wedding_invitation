import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";

export default function Envelope({ groomInitial, brideInitial, flapOpen, onOpenFlap, onOpenInvitation }) {
  return (
    // CSS class handles the idle bounce — no Framer Motion infinite loop
    <div
      className={`envelope ${!flapOpen ? "envelope--bounce" : ""}`}
      onClick={flapOpen ? undefined : onOpenFlap}
      role="button"
      tabIndex={0}
      aria-label={flapOpen ? "Envelope opened" : "Open the envelope"}
      onKeyDown={(e) => {
        if ((e.key === "Enter" || e.key === " ") && !flapOpen) onOpenFlap();
      }}
    >
      {/* Letter slides up — one-time animation, fine to keep in Framer Motion */}
      <motion.div
        className="envelope__letter"
        initial={{ y: 0 }}
        animate={flapOpen ? { y: "-46%" } : { y: 0 }}
        transition={{ duration: 0.8, delay: flapOpen ? 0.45 : 0, ease: "easeOut" }}
      >
        <p className="envelope__letter-script">You&rsquo;re Invited</p>
        <p className="envelope__letter-initials">
          {groomInitial} ♥ {brideInitial}
        </p>
        <AnimatePresence>
          {flapOpen ? (
            <motion.button
              type="button"
              className="btn btn--solid"
              onClick={(e) => {
                e.stopPropagation();
                onOpenInvitation();
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              Open Invitation
            </motion.button>
          ) : null}
        </AnimatePresence>
      </motion.div>

      {/* Flap — one-time animation, fine to keep in Framer Motion */}
      <motion.div
        className="envelope__flap"
        style={{ transformStyle: "preserve-3d" }}
        initial={{ rotateX: 0 }}
        animate={flapOpen ? { rotateX: 180, zIndex: 0 } : { rotateX: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 400 165" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <polygon points="0,0 400,0 200,165" fill="var(--dusty-rose)" stroke="var(--gold)" strokeWidth="2" />
        </svg>
      </motion.div>

      {/* Body sides */}
      <div className="envelope__body" aria-hidden="true" />

      {/* Wax seal — one-time exit animation, fine to keep in Framer Motion */}
      <AnimatePresence>
        {!flapOpen ? (
          <motion.div
            className="envelope__seal"
            initial={{ scale: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            aria-hidden="true"
          >
            {groomInitial}
            {brideInitial}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

Envelope.propTypes = {
  groomInitial: PropTypes.string.isRequired,
  brideInitial: PropTypes.string.isRequired,
  flapOpen: PropTypes.bool.isRequired,
  onOpenFlap: PropTypes.func.isRequired,
  onOpenInvitation: PropTypes.func.isRequired,
};