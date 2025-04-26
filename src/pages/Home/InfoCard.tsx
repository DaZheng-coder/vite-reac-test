const InfoCard = ({
  img = "",
  title = "",
  desc = "",
  time = "",
}: {
  img: string;
  title: string;
  desc: string;
  time: string;
}) => {
  return (
    <div className="flex flex-col gap-[18px]">
      <img className="w-[450px] h-[280px] rounded-[6px]" src={img} alt="" />
      <div className="font-medium text-xl text-[#333333] leading-[30px] text-left">
        {title}
      </div>
      <div
        style={{ lineClamp: 3 }}
        className="font-normal text-base text-gray-600 leading-8 text-justify normal-case"
      >
        {desc}
      </div>
      <div className="font-normal text-base text-[#999] leading-8 text-justify normal-case">
        发布时间：{time}
      </div>
    </div>
  );
};

export default InfoCard;
