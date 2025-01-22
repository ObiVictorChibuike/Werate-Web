const Phone = () => {
  return (
    <div className="px-[15px]">
      <section className="container flex flex-col  gap-y-4 bg-[#FFFFFF1A] rounded-[12px] border border-[#FFFFFF33] p-4 w-[343px] mb-4 ">
        <div className=" font-Figtree font-[500] text-[#FFFFFF80] text-[14px] leading-[16.8px] tracking-[-0.41px] flex flex-col justify-start items-start gap-y-2 border-b-[1px] pb-4 border-primary-text ">
          <div>Phone</div>
          <div className=" font-Figtree font-[500] text-primary-text text-[16px] leading-[19.2px] tracking-[-0.41px]">
            +420 800 241 242
          </div>
        </div>
        <div className=" font-Figtree font-[500] text-[#FFFFFF80] text-[14px] leading-[16.8px] tracking-[-0.41px] flex flex-col justify-start items-start gap-y-2 border-b-[1px] pb-4 border-primary-text  ">
          <div>Website</div>
          <div className=" font-Figtree font-[500] text-primary-text text-[16px] leading-[19.2px] tracking-[-0.41px]">
            starbucks.com
          </div>
        </div>
        <div className=" font-Figtree font-[500] text-[#FFFFFF80] text-[14px] leading-[16.8px] tracking-[-0.41px]  border-b-[1px] pb-4 border-primary-text flex justify-between items-center gap-y-2  ">
          <div className="flex flex-col justify-start items-start gap-y-2">
            <div>Address</div>
            <div className=" font-Figtree font-[500] text-primary-text text-[16px] leading-[19.2px] tracking-[-0.41px]">
              Main Street 1 <br />
              Seward 99664, AK <br /> USA
            </div>
          </div>
          <div className="-mt-14 text-secondary-text text-[14px] leading-[21px] font-[500] tracking-[-0.41px]">
            Get Directions
          </div>
        </div>
      </section>
    </div>
  );
};

export default Phone;
