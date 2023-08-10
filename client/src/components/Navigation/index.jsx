import PropTypes from "prop-types";

import { Link } from "react-router-dom";

export function Navigation({ className }) {
  return (
    <div className={className}>
      <Link to="">Feature One</Link>
      <Link to="">Feature Two</Link>
      <Link to="">Feature Three</Link>
    </div>
  );
}

Navigation.propTypes = {
  className: PropTypes.string,
};
