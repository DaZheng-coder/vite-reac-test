import SubtitleLeft from "@assets/SubtitleLeft.png";
import SubtitleRight from "@assets/SubtitleRight.png";
import { CSSProperties } from "react";

const SubTitle = ({
  title,
  style = {},
}: {
  title: string;
  style: CSSProperties;
}) => {
  return (
    <div style={style} className="flex gap-[6px] items-center">
      <img src={SubtitleLeft} alt="" />
      <span className="font-bold text-[24px] text-[#333]">{title}</span>
      <img src={SubtitleRight} alt="" />
    </div>
  );
};

export default SubTitle;
