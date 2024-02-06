"use client";
import { useRouter } from "next/navigation";

const NewUser = () => {
  const router = useRouter();
  return (
    <div>
      <h1>NewUser</h1>
      <button
        onClick={() => router.push("/users")}
        className="btn btn-sm mt-2 btn-secondary"
      >
        Back to Users
      </button>
    </div>
  );
};

export default NewUser;
