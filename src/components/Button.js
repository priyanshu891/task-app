import propTypes from "prop-types";

const Button = ({ text, type, color, onClick }) => {
  return (
    <button
      type={type}
      style={{ backgroundColor: color }}
      className="btn"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "ClickMe",
  type: "button",
  color: "blue",
};

Button.propTypes = {
  text: propTypes.string,
  color: propTypes.string,
  type: propTypes.string,
};

export default Button;
