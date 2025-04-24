import { Button, Tabs, TabsProps } from "antd";
import Search from "antd/es/transfer/search";
import React, { useState } from "react";
import InfoCard from "./InfoCard";
import Title from "@/components/Title";

const News = () => {
  const renderChildren = () => {
    const mockChildren = [{ id: 1 }, { id: 2 }, { id: 3 }];
    return (
      <div className="flex gap-[25px] my-[36px]">
        {mockChildren.map((item) => (
          <InfoCard
            img={""}
            key={item.id}
            title="正睿前沿培训丨《咨询师第一期AI应用与实践..."
            desc="为了让全体员工能够紧跟时代步伐，掌握AI技能，提升公司整体竞争力。2025年2月22日，正睿咨询集团特别和行业AI资深专家深度合作，成功举办了《咨询师第一期AI应用......"
            time="2025年02月24日18:31"
          />
        ))}
      </div>
    );
  };

  const items: TabsProps["items"] = [
    { key: "1", label: "企业动态", children: renderChildren() },
    { key: "2", label: "AI 应用", children: "Content of Tab Pane 2" },
    { key: "3", label: "项目动态", children: "Content of Tab Pane 3" },
    { key: "4", label: "热门资讯", children: "Content of Tab Pane 3" },
  ];

  const [selectKey, setSelectKey] = useState<string>(items[0].key);

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
    <>
      <Title title="新闻与动态" />
      <div className="w-full flex justify-center">
        <Tabs
          key={selectKey}
          items={items}
          renderTabBar={renderTabBar}
          onChange={(key: string) => {
            setSelectKey(key);
          }}
        />
      </div>
    </>
  );
};

export default News;
