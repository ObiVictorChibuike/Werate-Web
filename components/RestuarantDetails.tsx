import Image from "next/image";
import star from "@/public/images/star.svg";
const RestuarantDetails = () => {
  return (
    <div className=" mt-10 mb-8">
      <div className="container px-[15px] ">
        <div className="flex justify-between items-center  bg-[#FFFFFF1A] border-[#FFFFFF33] border shadow-lg p-4 rounded-[12px]">
          <div className="text-[20px] font-[600] leading-[24px] tracking-[-0.4px] ">
            Pizza Loves Emily
            <span className="text-[14px] font-extralight">(394 reviews)</span>
          </div>
          <div className="flex justify-center items-center gap-x-2">
            <Image src={star} alt="star" />
            <span>4.4 / 5</span>
          </div>
        </div>
        <div className=" flex justify-center items-center gap-x-4 lg:gap-x-10 mt-8  text-[16px] leading-[19.2px] tracking-[-0.41px] font-[600] ">
          <button className="bg-[#FF99BF] p-4 rounded-[8px] border border-[#FFFFFF33] text-[#FFFFFF]">
            Overview
          </button>
          <button className="bg-[#FFFFFF1A] p-4 rounded-[8px] border border-[#FFFFFF33] text-[#FFFFFF80]">
            Menu
          </button>
          <button className="bg-[#FFFFFF1A] p-4 rounded-[8px] border border-[#FFFFFF33] text-[#FFFFFF80]">
            Gallery
          </button>
          <button className="bg-[#FFFFFF1A] p-4 rounded-[8px] border border-[#FFFFFF33] text-[#FFFFFF80]">
            Reviews
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestuarantDetails;
