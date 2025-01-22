import Image from "next/image";
import notification from "@/public/images/notification.svg";

const OpeningHours = () => {
  return (
    <div className="px-[15px]">
      <section className="container flex justify-between items-center bg-[#FFFFFF1A] border border-[#FFFFFF33] rounded-[12px] p-4 w-[343px] mb-4 ">
        <div className="text-[#FFFFFF80] font-[500] text-[14px]  leading-[16.8px] tracking-[-0.41px] font-Figtree flex flex-col justify-start items-start gap-y-2">
          <div>Opening Hours</div>
          <div className="text-[#5CC87B] text-[16px]">
            Open today till 21:00 hours{" "}
          </div>
        </div>
        <Image
          src={notification}
          alt="notification"
          className="bg-[#FFFFFF1A] w-[24px] h-[24px] relative -mt-8 border border-[#FFFFFF33] rounded-full p-[2px]"
        />
      </section>
    </div>
  );
};

export default OpeningHours;
