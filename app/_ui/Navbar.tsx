import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <Link href="/" className="font-bold text-[35px]">
        Transit<span className="text-red-500">IX</span>
      </Link>

      <nav className="flex gap-[26px]">
        <Link href="/bookings " className="hover:underline">My Bookings</Link>
        <Link href="/profile " className="hover:underline">Profile</Link>
      </nav>
    </div>
  );
};

export default Navbar;
