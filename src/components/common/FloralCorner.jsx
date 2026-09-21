import PropTypes from "prop-types";

// Reusable decorative floral corner (pure SVG, colored by theme variables)
export default function FloralCorner({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g fill="none" strokeLinecap="round">
        <path d="M8 8 C 70 20, 110 60, 118 128" stroke="var(--sage-green)" strokeWidth="3" />
        <path d="M8 8 C 40 70, 80 105, 150 116" stroke="var(--sage-green)" strokeWidth="3" />
        <circle cx="30" cy="26" r="11" fill="var(--dusty-rose)" />
        <circle cx="30" cy="26" r="5" fill="var(--deep-rose)" />
        <circle cx="72" cy="46" r="9" fill="var(--blush-pink)" />
        <circle cx="72" cy="46" r="4" fill="var(--dusty-rose)" />
        <circle cx="104" cy="82" r="10" fill="var(--gold-light)" />
        <circle cx="104" cy="82" r="4" fill="var(--gold)" />
        <circle cx="120" cy="126" r="7" fill="var(--dusty-rose)" />
        <circle cx="148" cy="114" r="8" fill="var(--blush-pink)" />
        <path d="M46 60 q 10 -14 24 -10" stroke="var(--sage-green)" strokeWidth="2.5" />
        <path d="M84 96 q 12 -12 26 -6" stroke="var(--sage-green)" strokeWidth="2.5" />
      </g>
    </svg>
  );
}

FloralCorner.propTypes = {
  className: PropTypes.string,
};
