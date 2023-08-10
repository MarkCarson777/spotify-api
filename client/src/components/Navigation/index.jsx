// Third Party
import classnames from "classnames";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export function Navigation({ className }) {
  return (
    <div className={classnames("flex justify-around", className)}>
      <Link to="">Feature One</Link>
      <Link to="">Feature Two</Link>
      <Link to="">Feature Three</Link>
    </div>
  );
}

Navigation.propTypes = {
  className: PropTypes.string,
};
