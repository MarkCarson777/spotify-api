import { useState, useEffect } from "react";

import PropTypes from "prop-types";
import SpotifyWebApi from "spotify-web-api-node";

import { Playlist } from "../../components/Playlist";
import { useAuth } from "../../hooks/useAuth";

const spotifyApi = new SpotifyWebApi({
  clientId: "5b520526277442868e441edb991d633f",
});

export function Playlists(props) {
  const { code } = props;
  const [playlists, setPlaylists] = useState([]);
  const accessToken = useAuth(code);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!accessToken) return;

    spotifyApi
      .getUserPlaylists("marky_mark_777")
      .then((res) => {
        setPlaylists(res.body.items);
      })
      .catch((err) => {
        console.log("getUserPlaylists", err);
      });
  }, [accessToken]);

  return (
    <>
      {playlists.map((playlist, index) => (
        <Playlist key={index} playlist={playlist} />
      ))}
    </>
  );
}

Playlists.propTypes = {
  code: PropTypes.string.isRequired,
};
