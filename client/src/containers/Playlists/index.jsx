import PropTypes from "prop-types";

import { Playlist } from "../../components/Playlist";

export function Playlists({ playlists }) {
  console.log(playlists);
  return (
    <div>
      {playlists.map((playlist, index) => (
        <Playlist key={index} playlist={playlist} />
      ))}
    </div>
  );
}

Playlists.propTypes = {
  playlists: PropTypes.array.isRequired,
};
