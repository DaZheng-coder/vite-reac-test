const Title = ({
  title,
  subtitle,
  color = "#1F2329",
}: {
  title: string;
  subtitle: string;
  color?: string;
}) => {
  return (
    <div className="relative w-[5px] h-[55px]">
      <span
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: 1,
          transform: "translateX(-50%)",
        }}
        className={`text-nowrap font-medium text-[32px] text-[${color}] leading-[55px]`}
      >
        {title}
      </span>
      <span
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          transform: "translateX(-50%)",
          color: color === "white" ? "rgba(246,246,247,0.1)" : "#F6F6F7",
        }}
        className="text-nowrap font-bold text-[38px] text-[#F6F6F7] leading-[55px] tracking-[4px] text-left normal-case"
      >
        {subtitle}
      </span>
    </div>
  );
};

export default Title;
