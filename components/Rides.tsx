import { getRides } from "../app/_services/apiRides";
import RideCard from "./RideCard";

const Rides = async () => {
  const data = await getRides();
  const rides = data?.data;
  return (
    <div className="py-6 px-5">
      <h1 className="text-center">Rides</h1>
      <div className="grid grid-cols-3 gap-5 ">
        {
          rides.map((ride: {})=>
            <RideCard ride={ride}/>
          )
        }
      </div>
    </div>
  );
};

export default Rides;
