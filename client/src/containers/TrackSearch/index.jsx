import { useState, useEffect } from "react"

import PropTypes from "prop-types"
import SpotifyWebApi from "spotify-web-api-node";

import { useAuth } from "../../hooks/useAuth";

const spotifyApi = new SpotifyWebApi({
  clientId: "5b520526277442868e441edb991d633f",
});

export function TrackSearch(props) {
  const { code } = props;
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

    spotifyApi
      .searchTracks(search)
      .then((res) => {
        setSearchResults(
          res.body.tracks.items.map((track) => {
            const smallestAlbumImage = track.album.images.reduce(
              (smallest, image) => {
                if (image.height < smallest.height) return image;
                return smallest;
              },
              track.album.images[0]
            );

            return {
              artist: track.artists[0].name,
              title: track.name,
              uri: track.uri,
              albumUrl: smallestAlbumImage.url,
            };
          })
        );
      })
      .catch((err) => {
        console.log("searchTracks", err);
      });
  }, [search, accessToken]);

  return (
    <>
      <form>
        <input
          className="border border-red-500"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
        />
      </form>
      <p>{JSON.stringify(searchResults)}</p>
    </>
  )
} 

TrackSearch.propTypes = {
  code: PropTypes.string.isRequired,
};