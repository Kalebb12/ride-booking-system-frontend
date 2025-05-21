import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <Link href="/" className="font-bold text-[35px]">
        Transit<span className="text-red-500">IX</span>
      </Link>

      <nav className="flex gap-[26px]">
        <SignedIn>
          <Link href="/bookings " className="hover:underline">
            My Bookings
          </Link>
          <Link href="/profile " className="hover:underline">
            Profile
          </Link>
        </SignedIn>

        <SignedOut>
          {/* <SignInButton> */}
            <Button
              className="border-border  border-2 !bg-primary text-primary "
            >
              Login
            </Button>
          {/* </SignInButton> */}

          <SignUpButton>
            <Button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition duration-300 shadow-lg hover:shadow-xl">
              Get Startd
            </Button>
          </SignUpButton>
        </SignedOut>
      </nav>
    </div>
  );
};

export default Navbar;
