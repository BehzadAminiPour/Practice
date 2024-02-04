import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello Bezi</h1>
      <Link className="text-purple-500" href="/users">
        Users
      </Link>
    </div>
  );
}
