import { Link } from "react-router-dom";

export function Dashboard() {
  return (
    <>
    <Link to="/playlists">
      <button>Playlists</button>
    </Link>
    <Link to="/tracksearch">
      <button>Track Search</button>
    </Link>
    </>
  );
}
