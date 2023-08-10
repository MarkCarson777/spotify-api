import PropTypes from "prop-types";

import { Playlist } from "../../components/Playlist";

export function Playlists({ playlists }) {
  console.log(playlists);
  return (
    <>
      {playlists.map((playlist, index) => (
        <Playlist key={index} playlist={playlist} />
      ))}
    </>
  );
}

Playlists.propTypes = {
  playlists: PropTypes.array.isRequired,
};
