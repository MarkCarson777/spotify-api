import { useState, useEffect } from "react";

import { useAuth } from "../../hooks/useAuth";

import { Playlists } from "../../containers/Playlists";

import SpotifyWebApi from "spotify-web-api-node";

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

    spotifyApi.searchTracks(search).then((res) => {
      console.log(res);
    });
  }, [search, accessToken]);

  useEffect(() => {
    if (!accessToken) return;

    spotifyApi.getUserPlaylists("marky_mark_777").then((res) => {
      setPlaylists(res.body.items);
    });
  }, [accessToken]);

  return (
    <div>
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
    </div>
  );
}
