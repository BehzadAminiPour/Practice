import Link from "next/link";
import AddNewUser from "../components/AddNewUser";
import UserTable from "./UserTable";
import { Suspense } from "react";

type Props = {
  searchParams: { sortOrder: string };
};

const UserPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <div>
      <h2>UserPage</h2>
      <Link className="btn btn-primary btn-sm my-2" href="/users/new">
        New User
      </Link>
      <p>{new Date().toLocaleTimeString()}</p>
      <AddNewUser text="Add New" />
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
      <Link className="text-purple-500 text-sm" href="/">
        Home
      </Link>
    </div>
  );
};

export default UserPage;
