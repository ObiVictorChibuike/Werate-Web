import Image from "next/image";
import star from "@/public/images/star.svg";
import { useEffect, useState } from "react";
import OverView from "./overview/OverView";
import Gallery from "./gallery/Gallery";
const RestuarantDetails = () => {
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    setActiveSection("overView");
  }, []);
  return (
    <div className=" mt-10 mb-8">
      <div className="container px-[15px] ">
        <div className="flex justify-between items-center  bg-[#FFFFFF1A] border-[#FFFFFF33] border shadow-lg p-4 rounded-[12px]">
          <div className="text-[20px] flex gap-1 font-[600] leading-[24px] tracking-[-0.4px] ">
            Pizza Loves Emily
            <span className="text-[14px] font-extralight">(394 reviews)</span>
          </div>
          <div className="flex justify-center items-center gap-x-2">
            <Image src={star} alt="star" />
            <span className="text-sm">4.4 / 5</span>
          </div>
        </div>
        <div className="flex justify-center items-center gap-x-4 lg:gap-x-4 mt-8  text-[16px] leading-[19.2px] tracking-[-0.41px] font-[600] ">
          <button
            onClick={() => setActiveSection("overView")}
            className={`${
              activeSection === "overView" ? "bg-[#FF7BAC] " : "bg-[#FFFFFF1A]"
            } py-2 px-4 rounded-[8px] border border-[#FFFFFF33] text-[#FFFFFF] transition-all duration-500 ease-in-out`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveSection("menu")}
            className={`${
              activeSection === "menu" ? "bg-[#FF7BAC]" : "bg-[#FFFFFF1A]"
            }  py-2 px-4 rounded-[8px] border border-[#FFFFFF33] text-[#FFFFFF80] transition-all duration-500 ease-in-out`}
          >
            Menu
          </button>
          <button
            onClick={() => setActiveSection("gallery")}
            className={`${
              activeSection === "gallery" ? "bg-[#FF7BAC]" : "bg-[#FFFFFF1A]"
            }  py-2 px-4 rounded-[8px] border border-[#FFFFFF33] text-[#FFFFFF80] transition-all duration-500 ease-in-out`}
          >
            Gallery
          </button>
          <button
            onClick={() => setActiveSection("reviews")}
            className={`${
              activeSection === "reviews" ? "bg-[#FF7BAC]" : "bg-[#FFFFFF1A]"
            }  py-2 px-4 rounded-[8px] border border-[#FFFFFF33] text-[#FFFFFF80] transition-all duration-500 ease-in-out`}
          >
            Reviews
          </button>
        </div>
      </div>
      {/*  */}
      <div className="mt-10">
        <div>{activeSection === "overView" && <OverView />}</div>
        <div>{activeSection === "menu" && <h1>hello menu</h1>}</div>
        <div>{activeSection === "gallery" && <Gallery />}</div>
        <div>{activeSection === "reviews" && <h1>hello reviews</h1>}</div>
      </div>
      {/*  */}
    </div>
  );
};

export default RestuarantDetails;
