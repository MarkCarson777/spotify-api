import { useAuth } from "../../hooks/useAuth";

export function Dashboard({ code }) {
  const accessToken = useAuth(code);

  return <>{code}</>;
}
