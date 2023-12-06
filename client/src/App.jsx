import { Routes, Route, Navigate } from "react-router-dom";

import { Dashboard } from "./components/Dashboard";
import { Login } from "./components/Login";

import { Playlists } from "./containers/Playlists";
import { TrackSearch } from "./containers/TrackSearch";

const code = new URLSearchParams(window.location.search).get("code");

export function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={code ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard code={code} />} />
      <Route path="/playlists" element={<Playlists code={code} />} />
      <Route path="/tracksearch" element={<TrackSearch code={code} />} />
    </Routes>
  );
}
