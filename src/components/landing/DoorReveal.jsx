import PropTypes from "prop-types";
import { motion } from "framer-motion";
import FloralCorner from "../common/FloralCorner.jsx";

export default function DoorReveal({ open, onFinished }) {
  return (
    <div className="doors" aria-hidden="true">
      <motion.div
        className="door door--left"
        initial={{ x: 0 }}
        animate={open ? { x: "-100%" } : { x: 0 }}
        transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1], delay: 0.2 }}
        onAnimationComplete={() => {
          if (open) onFinished();
        }}
      >
        <span className="door__handle" />
        <FloralCorner className="door__floral" />
      </motion.div>
      <motion.div
        className="door door--right"
        initial={{ x: 0 }}
        animate={open ? { x: "100%" } : { x: 0 }}
        transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1], delay: 0.2 }}
      >
        <span className="door__handle" />
        <FloralCorner className="door__floral" />
      </motion.div>
    </div>
  );
}

DoorReveal.propTypes = {
  open: PropTypes.bool.isRequired,
  onFinished: PropTypes.func.isRequired,
};
