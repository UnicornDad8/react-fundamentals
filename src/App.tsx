import { useEffect, useState } from "react";
import axios from "axios";

interface UserProp {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<UserProp[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get<UserProp[]>("https://jsonplaceholder.typicode.com/xusers")
      .then((res) => setUsers(res.data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
