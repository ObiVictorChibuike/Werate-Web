import Image from "next/image";
import star from "@/public/images/star.svg";
import { useState } from "react";
import items from "@/types/PowerScoreInterface";

const PowerScore = () => {
  const [rateItems, setRateItems] = useState<items[]>([
    {
      name: "Power Score",
      reviews: "(2921 Reviews)",
      id: 1,
      rate: "4.4 / 5",
      img: star,
    },
    {
      name: "WeRate",
      reviews: "(1553 Reviews)",
      id: 2,
      rate: "4.2 / 5",
      img: star,
    },
    {
      name: "Yelp",
      reviews: "(123 Reviews)",
      id: 3,
      rate: "4.4 / 5",
      img: star,
    },
    {
      name: "Google",
      reviews: "(456 Reviews)",
      id: 4,
      rate: "3.9 / 5",
      img: star,
    },
    {
      name: "Trip Advisor",
      reviews: "(789 Reviews)",
      id: 5,
      rate: "3.9 / 5",
      img: star,
    },
  ]);
  return (
    <div className="px-[15px]">
      <section className="container bg-[#FFFFFF1A] rounded-[12px] p-4 w-[343px] mb-4 ">
        {rateItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between gap-y-4 items-center border-b border-[#FFFFFF1A] py-[10px]"
          >
            <div className="text-[16px] leading-[19.2px] tracking-[0.41px] font-[700] font-Figtree text-primary-text ">
              {item.name} <span className="font-[500]">{item.reviews}</span>
            </div>
            <div className="flex justify-center items-center gap-x-2">
              <Image src={item.img} alt="star" />
              <span className="text-sm">{item.rate}</span>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
export default PowerScore;
