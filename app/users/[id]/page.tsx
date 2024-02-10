import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: { id: number };
};

const UserDetails = ({ params: { id } }: Props) => {
  if (id > 10) notFound();
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
