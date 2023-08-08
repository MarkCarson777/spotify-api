const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=5b520526277442868e441edb991d633f&response_type=code&redirect_uri=http://localhost:5173&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

export function Login() {
  return (
    <div>
      <a href={AUTH_URL}>Login With Spotify</a>
    </div>
  );
}
