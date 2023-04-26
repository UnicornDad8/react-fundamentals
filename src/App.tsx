import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

interface UserProp {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<UserProp[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get<UserProp[]>(
          "https://jsonplaceholder.typicode.com/users"
        );
        //.then((res) => setUsers(res.data))
        //.catch((err) => setError(err.message));

        setUsers(res.data);
      } catch (err) {
        setError((err as AxiosError).message);
      }
    };

    fetchUsers();
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
