import Link from "next/link";

interface Users {
  id: number;
  name: string;
  email: string;
}

const UserTable = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: Users[] = await response.json();
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
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
