import Yes from "@assets/yes.png";

const ImgDesc = ({
  img,
  title,
  descTip = "",
  desc,
  reverse = false,
}: {
  img: string;
  title: string;
  descTip?: string;
  desc: string[];
  reverse?: boolean;
}) => {
  return (
    <div className={"flex gap-[57px]" + (reverse ? " flex-row-reverse" : "")}>
      <img
        style={{ background: "rgba(138,210,255,0.1)" }}
        className="w-[50%]"
        src={img}
        alt=""
      />
      <div className="w-[50%]">
        <div className="font-medium text-[26px] text-[#0758F1] leading-[36px] text-left normal-case">
          {title}
        </div>
        <div className="h-[1px] bg-[#D8D8D8] relative mt-[24px] mb-[50px]">
          <div className="absolute left-0 bottom-0 h-[2px] bg-[#25B728]"></div>
        </div>
        {descTip && (
          <div className="text-[20px] text-[#25B728] mb-[20px] mt-[-20px]">
            {descTip}111
          </div>
        )}
        <div className="flex flex-col gap-[42px]">
          {desc.map((item, index) => {
            return (
              <div key={index} className="flex gap-[16px] items-center">
                <img className="w-[18px] h-[16px]" src={Yes} />
                <span className="font-normal text-[20px] text-[#333333] leading-[36px] text-left normal-case">
                  {item}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImgDesc;
