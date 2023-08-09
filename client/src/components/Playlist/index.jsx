import PropTypes from "prop-types";

export function Playlist({ playlist }) {
  return (
    <div className="flex items-center p-2 border w-fit rounded-lg">
      <img
        className="rounded-md mr-2"
        src={playlist.images[2].url}
        alt={playlist.name}
      />
      <div>
        <span>{playlist.name}</span>
        <div>
          <span>Playlist</span>
          <span>&nbsp;&#8226;&nbsp;</span>
          <span>{playlist.owner.display_name}</span>
        </div>
      </div>
    </div>
  );
}

Playlist.propTypes = {
  playlist: PropTypes.object.isRequired,
};
