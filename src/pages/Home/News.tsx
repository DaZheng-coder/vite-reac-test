import { Button, Tabs, TabsProps } from "antd";
import Search from "antd/es/transfer/search";
import { useEffect, useMemo, useState } from "react";
import InfoCard from "./InfoCard";
import Title from "@/components/Title";
import { NewsArticle, NewsCategory } from "@/types";
import request from "@/api/request";

const News = () => {
  const [cate, setCate] = useState<NewsCategory[]>([]);
  const [selectKey, setSelectKey] = useState<string>("");
  const getCate = async () => {
    const res = await request.get("api/news/category/enabled");
    console.log("*** res", res.data);
    setCate(res.data?.data);
    setSelectKey(String(res.data?.data[0]?.id));
  };

  useEffect(() => {
    getCate();
  }, []);

  const items: TabsProps["items"] = useMemo(() => {
    return (cate || []).map((item) => {
      return {
        key: String(item.id),
        label: item.name,
        children: <NewCard id={String(item.id)} />,
      };
    });
  }, [cate]);

  const renderTabBar = () => {
    return (
      <div className="flex justify-between">
        <div className="flex gap-[14px]">
          {items.map((item) => {
            return (
              <Button
                key={item.key}
                type={selectKey === item.key ? "primary" : "default"}
                onClick={() => {
                  setSelectKey(item.key);
                }}
              >
                {item.label}
              </Button>
            );
          })}
        </div>
        <div className="w-[378px]">
          <Search placeholder="请输入" />
        </div>
      </div>
    );
  };

  return (
    <div className="px-[13.5%]">
      <div className="flex justify-center">
        <Title
          className="my-[46px]"
          title="新闻与动态"
          subtitle="ORIENTATION"
        />
      </div>
      <div>
        <Tabs
          key={selectKey}
          items={items}
          renderTabBar={renderTabBar}
          onChange={(key: string) => {
            setSelectKey(key);
          }}
        />
      </div>
    </div>
  );
};

export default News;

const NewCard = ({ id }: { id: string }) => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const getArt = async (categoryId: string) => {
    const res = await request.get(`api/news/article/category/${categoryId}`);
    setArticles(res.data?.data);
  };

  useEffect(() => {
    getArt(id);
  }, [id]);

  return (
    <div className="flex gap-[25px] my-[36px]">
      {articles.map((item) => (
        <InfoCard
          img={item.coverUrl}
          key={item.id}
          title={item.title}
          desc={item.content}
          // time="2025年02月24日18:31"
          time={item.createTime}
        />
      ))}
    </div>
  );
};
