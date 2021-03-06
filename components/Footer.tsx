import React from "react";
import { footerList1 } from "../utils/constants";

// since we are using typeScript so we have to specify items type
// { items: string[] } array of strings
const List = ({ items, mt }: { items: string[]; mt: boolean }) => (
  <div className={`flex flex-wrap gap-2 ${mt && "mt - 5"}`}>
    {items.map((item) => (
      <p
        key={item}
        className="text-gray-400 text-sm hover:underline cursor-pointer"
      >
        {item}
      </p>
    ))}
  </div>
);

const Footer = () => {
  return (
    <div className="mt-6 hidden xl:block">
      <List items={footerList1} mt={false} />

      <p className="text-gray-400 text-sm mt-5">2022 FOLKSGAL</p>
    </div>
  );
};

export default Footer;
