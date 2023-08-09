import PropTypes from "prop-types";

export function Playlists({ playlists }) {
  console.log(playlists);
  return <div>Playlists</div>;
}

Playlists.propTypes = {
  playlists: PropTypes.array.isRequired,
};
