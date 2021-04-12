import propTypes from "prop-types";
import Button from "./Button";

const Header = ({ text, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{text}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  text: "Task Tracker",
};

Header.propTypes = {
  text: propTypes.string,
};

export default Header;
