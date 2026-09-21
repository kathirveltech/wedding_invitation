import PropTypes from "prop-types";

export default function Button({
  children,
  solid = false,
  type = "button",
  href = "",
  onClick = undefined,
  disabled = false,
}) {
  const className = solid ? "btn btn--solid" : "btn";
  if (href) {
    return (
      <a className={className} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }
  return (
    <button className={className} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  solid: PropTypes.bool,
  type: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
