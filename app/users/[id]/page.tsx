import Link from "next/link";

type Props = {
  params: { id: number };
};

const UserDetails = ({ params: { id } }: Props) => {
  return (
    <>
      <p className="mb-3">UserDetails {id}</p>
      <Link href="/users" className="btn btn-sm btn-secondary">
        Back to User
      </Link>
    </>
  );
};

export default UserDetails;
