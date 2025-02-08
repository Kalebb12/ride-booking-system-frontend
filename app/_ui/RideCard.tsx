import { BusFront, Hash, LocateFixedIcon, MapPin } from "lucide-react";

const RideCard = ({ ride }: { ride }) => {
  return (
    <div className="flex px-3 py-5 flex-col gap-2 items-start bg-[#1A1A1E] border border-[#26272B]">
      <div className="flex items-center gap-3">
        <div className="flex gap-2">
          <MapPin /> <span>{ride.route.from}</span>
        </div>
        <div className="flex gap-2">
          <LocateFixedIcon /> <span>{ride.route.to}</span>
        </div>
      </div>

      <div className="flex gap-3">
        <div className="flex gap-2">
          <BusFront /> <span>{ride.name}</span>
        </div>
        <div className="flex gap-2">
          <Hash /> <span>{ride.plateNumber}</span>
        </div>
      </div>
    </div>
  );
};

export default RideCard;
