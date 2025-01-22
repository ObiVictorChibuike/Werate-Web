const HeighLights = () => {
  return (
    <div>
      <div className="container px-[15px] mb-4">
        <div className="  bg-[#FFFFFF1A] border border-[#FFFFFF33] p-4 rounded-[12px] ">
          <div className="text-[16px] font-[500] leading-[19.2px] tracking-[-0.41px] text-[#FFFFFF] border-b border-[#FFFFFF33] pb-8  flex justify-between items-center ">
            <div>Highlights</div>
            <div className="text-[#FFFFFF80]">View all</div>
          </div>
          <div className="flex flex-wrap justify-start items-start mt-4 gap-x-2 lg:gap-x-4 gap-y-4">
            <button className="bg-[#6E1FED] border border-[#8C4FEF] p-2 rounded-[30px] text-[11px] leading-[13.2px] tracking-[-0.41px] font-[500]">
              Clean <span>(234x)</span>
            </button>
            <button className="bg-[#6E1FED] border border-[#8C4FEF] p-2 rounded-[30px] text-[11px] leading-[13.2px] tracking-[-0.41px] font-[500]">
              Great Location <span>(154x)</span>
            </button>
            <button className="bg-[#6E1FED] border border-[#8C4FEF] p-2 rounded-[30px] text-[11px] leading-[13.2px] tracking-[-0.41px] font-[500]">
              Cheap <span>(76x)</span>
            </button>
            <button className="bg-[#6E1FED] border border-[#8C4FEF] p-2 rounded-[30px] text-[11px] leading-[13.2px] tracking-[-0.41px] font-[500]">
              Awesome Vibe <span>(55x)</span>
            </button>
            <button className="bg-[#6E1FED] border border-[#8C4FEF] p-2 rounded-[30px] text-[11px] leading-[13.2px] tracking-[-0.41px] font-[500]">
              Fast Wi-Fi <span>(12x)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeighLights;
