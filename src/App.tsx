import { useEffect, useState } from "react";
import axios, { AxiosError, CanceledError } from "axios";
import "./main.css";

interface UserProp {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<UserProp[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const controller = new AbortController();
        const res = await axios.get<UserProp[]>(
          "https://jsonplaceholder.typicode.com/users",
          { signal: controller.signal }
        );
        //.then((res) => setUsers(res.data))
        //.catch((err) => setError(err.message));

        setUsers(res.data);
        setLoading(false);

        return () => controller.abort();
      } catch (err) {
        if (err instanceof CanceledError) return;

        setError((err as AxiosError).message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
