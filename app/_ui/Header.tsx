import Image from "next/image";
import bg from "../../public/bg.jpg";
import Navbar from "./Navbar";
import FilterRides from "../_components/FilterRides";

const Header = () => {
  return (
    <div className="relative h-[90vh]">
      <div className=" inset-0 absolute bg-[var(--overlay-dark)] z-20" />
      <Image
        src={bg}
        placeholder="blur"
        fill
        quality={80}
        alt="bus ride urban city"
        className="object-cover object-center z-5"
      />

      <div className="text-center z-50 relative px-[50px] py-[26px]">
        <Navbar />

        <div className="font-bold text-[79px] mt-20 px-20 text-start capitalize">
          <h2 className="leading-[91px]">Travel the world with</h2>
          <h2 className="leading-[91px]">ease</h2>
        </div>

      <div className="mt-10">
      <FilterRides/>
      </div>

      </div>
    </div>
  );
};

export default Header;
