import { useEffect, useState } from "react";
import axios from "axios";

interface UserProp {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<UserProp[]>([]);

  useEffect(() => {
    axios
      .get<UserProp[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
