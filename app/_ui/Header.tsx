import Image from "next/image";
import bg from "../../public/bg.jpg";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="relative h-[70vh] md:h-[90vh]">
      <div className="absolute inset-0 bg-black/50 z-20" />
      <Image
        src={bg}
        placeholder="blur"
        fill
        priority
        quality={90}
        alt="bus ride urban city"
        className="object-cover object-center z-10"
      />

      <div className="relative z-30 container mx-auto px-4 h-full flex flex-col">
        <Navbar />
        
        <div className="flex-1 flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
              Travel the world with ease
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Book your next adventure with our reliable and comfortable ride booking service
            </p>
          </div>
          
          {/* <div className="mt-8">
            <FilterRides />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
