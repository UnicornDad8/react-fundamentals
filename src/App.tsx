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

  const deleteUser = (user: UserProp) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    axios
      .delete("https://jsonplaceholder.typicode.com/xusers/" + user.id)
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Ceci" };
    setUsers([newUser, ...users]);

    axios
      .post("https://jsonplaceholder.typicode.com/xusers", newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  return (
    <div>
      {error && <p>{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button onClick={addUser}>Add</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} <button onClick={() => deleteUser(user)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
