import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <Link href="/" className="font-bold text-[35px]">
        Transit<span className="text-red-500">IX</span>
      </Link>

      <nav className="flex gap-[26px]">
        <SignedIn>

        <Link href="/bookings " className="hover:underline">My Bookings</Link>
        <Link href="/profile " className="hover:underline">Profile</Link>
        </SignedIn>

        <SignedOut>
          <Link href="/login " className="hover:underline">Login</Link>
        </SignedOut>
      </nav>
    </div>
  );
};

export default Navbar;
