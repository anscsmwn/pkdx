interface BarProps {
  base_stat: number;
}

const Bar = ({ base_stat }: BarProps) => {
  const formattedStat = base_stat ? (base_stat / 255) * 100 : 0;
  const statColor = (base_stat || 0) >= 80 ? 'bg-[#2db487]' : 'bg-[#c8c8c8]';
  return (
    <div className="relative h-2 w-[85%] rounded-full bg-[#444d4a]">
      <div
        style={{ width: `${formattedStat}%` }}
        className={`h-full rounded-full ${statColor}`}
      ></div>
    </div>
  );
};

export default Bar;
