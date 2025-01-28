import Image from "next/image";
import Close from "@/public/images/Close.svg";

interface props {
  handleIsOpen: () => void;
}

const OpeningHoursDetails = ({ handleIsOpen }: props) => {
  return (
    <div className="bg-black bg-opacity-50 fixed top-0 inset-0">
      <div className="container bg-[#0E071C] px-[15px] py-[50px] rounded-tr-[12px] rounded-tl-[12px] absolute bottom-0 inset-x-0">
        <div className="flex justify-between items-center">
          <div className="text-[20px] font-Figtree font-[600] leading-[24px] tracking-[-0.41px] text-secondary-text ">
            Opening Hours
          </div>
          <button onClick={handleIsOpen}>
            <Image src={Close} alt="close button" />
          </button>
        </div>
        <ul className="flex flex-col gap-y-6">
          <li className="flex justify-between items-center mt-10 font-[500] font-Figtree leading-[24px] tracking-[-0.41px] text-[16px] text-[#FFFFFF80] ">
            <div>Monday</div>
            <div>08:30 am - 06:00 pm</div>
          </li>
          <li className="flex justify-between items-center font-[500] font-Figtree leading-[24px] tracking-[-0.41px] text-[16px] text-[#FFFFFF80] ">
            <div>Tuesday</div>
            <div>08:30 am - 06:00 pm</div>
          </li>
          <li className="flex justify-between items-center font-[500] font-Figtree leading-[24px] tracking-[-0.41px] text-[16px] text-[#FFFFFF80] ">
            <div>Wednesday</div>
            <div>08:30 am - 06:00 pm</div>
          </li>
          <li className="flex justify-between items-center font-[500] font-Figtree leading-[24px] tracking-[-0.41px] text-[16px] text-[#FFFFFF80] ">
            <div>Thursday</div>
            <div>08:30 am - 06:00 pm</div>
          </li>
          <li className="flex justify-between items-center font-[500] font-Figtree leading-[24px] tracking-[-0.41px] text-[16px] text-[#FFFFFF80] ">
            <div>Friday</div>
            <div>08:30 am - 06:00 pm</div>
          </li>
          <li className="flex justify-between items-center font-[500] font-Figtree leading-[24px] tracking-[-0.41px] text-[16px] text-[#FFFFFF80] ">
            <div>Saturday</div>
            <div>08:30 am - 06:00 pm</div>
          </li>
          <li className="flex justify-between items-center font-[500] font-Figtree leading-[24px] tracking-[-0.41px] text-[16px] text-[#FFFFFF80] ">
            <div>Saturday</div>
            <div className="">- Closed - </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OpeningHoursDetails;
