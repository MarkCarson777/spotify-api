// React
import { useState, useEffect } from "react";
// Third Party
import PropTypes from "prop-types";
import SpotifyWebApi from "spotify-web-api-node";
// Hooks
import { useAuth } from "../../hooks/useAuth";
// Components
import { Navigation } from "../../components/Navigation";
// Containers
import { Playlists } from "../../containers/Playlists";

const spotifyApi = new SpotifyWebApi({
  clientId: "5b520526277442868e441edb991d633f",
});

export function Dashboard({ code }) {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const accessToken = useAuth(code);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!accessToken) return;

    spotifyApi
      .searchTracks(search)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("searchTracks", err);
      });
  }, [search, accessToken]);

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
      <Navigation />
      <form>
        <input
          className="border border-red-500"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
        />
      </form>
      <Playlists playlists={playlists} />
    </>
  );
}

Dashboard.propTypes = {
  code: PropTypes.string.isRequired,
};
