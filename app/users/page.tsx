import Link from "next/link";
import AddNewUser from "../components/AddNewUser";

const UserPage = () => {
  return (
    <div>
      <h2>UserPage</h2>
      <AddNewUser text="Add New" />
      <Link className="text-purple-500" href="/">
        Home
      </Link>
    </div>
  );
};

export default UserPage;
