import { useState, useEffect } from "react";

import { useAuth } from "../../hooks/useAuth";

import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi({
  clientId: "5b520526277442868e441edb991d633f",
});

export function Dashboard({ code }) {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const accessToken = useAuth(code);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!accessToken) return;

    spotifyApi.getUserPlaylists("marky_mark_777").then((res) => {
      console.log(res);
    });

    spotifyApi.searchTracks(search).then((res) => {
      console.log(res);
    });
  }, [search, accessToken]);

  return (
    <form>
      <input
        className="border border-red-500"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />
    </form>
  );
}
