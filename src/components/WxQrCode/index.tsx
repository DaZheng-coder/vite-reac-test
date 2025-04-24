import QrCodeWx from "@assets/qrCodeWx.png";
import QrCodeWxVideo from "@assets/qrCodeWxVideo.png";
import QrCodeWxWx from "@assets/qrCodeWxWx.png";

const qrCodeData = [
  {
    icon: QrCodeWx,
    label: "微信公众号",
  },
  {
    icon: QrCodeWxVideo,
    label: "微信视频号",
  },
  {
    icon: QrCodeWxWx,
    label: "微信号",
  },
];

const WxQrCode = ({ codeStyle = {} }: { codeStyle?: React.CSSProperties }) => {
  return (
    <div className="flex gap-[50px]">
      {qrCodeData.map((item, index) => {
        return (
          <div
            style={codeStyle}
            className="w-[124px] h-[124px] flex flex-col gap-[4px] items-center"
            key={index}
          >
            <img className="w-[97px] h-[97px]" src={item.icon} alt="" />
            <span className="text-[14px]">{item.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default WxQrCode;
