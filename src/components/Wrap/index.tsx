import { ReactNode } from "react";
import SubTitle from "../SubTitle";

const Wrap = (props: {
  subtitle: string;
  children: ReactNode;
  bg?: ReactNode;
  style?: React.CSSProperties;
}) => {
  const { subtitle, children, bg, style = {} } = props;
  return (
    <div
      style={{
        background: bg ? `url(${bg}) center no-repeat` : "transparent",
        ...style,
      }}
      className="justify-center flex-1"
    >
      <div>
        <div className="flex justify-center">
          <SubTitle style={{ marginTop: "36px" }} title={subtitle} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Wrap;
