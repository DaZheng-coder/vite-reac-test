import { ReactNode } from "react";
import SubTitle from "../SubTitle";

const Wrap = (props: {
  subtitle: string;
  children: ReactNode;
  bg: ReactNode;
}) => {
  const { subtitle, children, bg } = props;
  return (
    <div
      style={{
        background: `url(${bg}) center no-repeat`,
      }}
      className="w-full flex justify-center"
    >
      <div className="flex flex-col">
        <SubTitle style={{ marginTop: "36px" }} title={subtitle} />
        {children}
      </div>
    </div>
  );
};

export default Wrap;
