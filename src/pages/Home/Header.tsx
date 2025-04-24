import { Carousel } from "antd";

const Header = () => {
  const config = ["", "", ""];
  return (
    <Carousel autoplay>
      {config.map((item, index) => (
        <div key={index}>
          <img
            src={`https://picsum.photos/800/300?random=${index}`}
            alt={`Slide ${index}`}
            className="w-full h-72 object-cover"
          />
        </div>
      ))}
    </Carousel>
  );
};

export default Header;
