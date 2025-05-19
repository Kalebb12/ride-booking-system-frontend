const FilterCard = ({ label, value, onClick }: { label: string; value: string; onClick: () => void }) => {
  return (
    <div className="glass px-5 py-3 h-20 text-start items-start">
      <p>{label}</p>
      <div onClick={onClick} className="text-2xl cursor-pointer font-semibold">{value}</div>
    </div>
  );
};

export default FilterCard;
