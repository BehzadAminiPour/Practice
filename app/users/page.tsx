import Link from "next/link";

const UserPage = () => {
  return (
    <div>
      <h2>UserPage</h2>
      <Link className="text-purple-500 block" href="/">
        New user
      </Link>
      <Link className="text-purple-500" href="/">
        Home
      </Link>
    </div>
  );
};

export default UserPage;
