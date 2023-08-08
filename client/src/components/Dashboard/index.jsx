import { useState } from "react";

import { useAuth } from "../../hooks/useAuth";

export function Dashboard({ code }) {
  const [search, setSearch] = useState("");
  const accessToken = useAuth(code);

  return (
    <form>
      <input
        className="border border-red-500"
        type="text"
        value={search}
        placeholder="Search..."
      />
    </form>
  );
}
