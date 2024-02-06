import Link from "next/link";
import { sort } from "fast-sort";
interface Users {
  id: number;
  name: string;
  email: string;
}

type Props = { sortOrder: string };

const UserTable = async ({ sortOrder }: Props) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: Users[] = await response.json();
  const sortedUser = sort(users).asc(
    sortOrder === "email" ? (user) => user.email : (user) => user.name
  );
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>Id</th>
            <th>
              <Link href="/users?sortOrder=name">Name</Link>
            </th>
            <th>
              <Link href="/users?sortOrder=email">Email</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedUser.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
