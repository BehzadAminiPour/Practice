import Link from "next/link";
import AddNewUser from "../components/AddNewUser";

interface Users {
  id: number;
  name: string;
}

const UserPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: Users[] = await response.json();

  return (
    <div>
      <h2>UserPage</h2>
      <AddNewUser text="Add New" />
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <Link className="text-purple-500 text-sm" href="/">
        Home
      </Link>
    </div>
  );
};

export default UserPage;
