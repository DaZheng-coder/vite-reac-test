import request from "@/api/request";
import { CarouselBanner } from "@/types";
import { Carousel } from "antd";
import { memo, useEffect, useState } from "react";

const Header = () => {
  const [banners, setBanners] = useState<CarouselBanner[]>([]);

  const getPic = async () => {
    const res = await request.get("api/carousel/list");
    setBanners(res.data?.data);
  };

  useEffect(() => {
    getPic();
  }, []);

  return (
    <Carousel autoplay>
      {(banners || []).map((item, index) => (
        <div key={index}>
          <img src={item.imageUrl} className="w-full object-cover" />
        </div>
      ))}
    </Carousel>
  );
};

export default memo(Header);
