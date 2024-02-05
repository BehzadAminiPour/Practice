import Link from "next/link";
import AddNewUser from "../components/AddNewUser";
import UserTable from "./UserTable";

const UserPage = async () => {
  return (
    <div>
      <h2>UserPage</h2>
      <p>{new Date().toLocaleTimeString()}</p>
      <AddNewUser text="Add New" />
      <UserTable />
      <Link className="text-purple-500 text-sm" href="/">
        Home
      </Link>
    </div>
  );
};

export default UserPage;
