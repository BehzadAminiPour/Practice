import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="h-16 bg-blue-100 mb-4 py-1">
      <div className="text-primary">
        <Link className="p-2" href="/">
          Home
        </Link>
        <Link className="p-2" href="/users">
          Users
        </Link>
        <Link className="p-2" href="/products">
          Products
        </Link>
      </div>
    </nav>
  );
};
