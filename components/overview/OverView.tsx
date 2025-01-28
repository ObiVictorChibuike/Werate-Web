// all overview files import
import HeighLights from "./HeighLights";
import OpeningHours from "./openinghours/OpeningHours";
import Phone from "./Phone";
import PowerScore from "./PowerScore";
import { useState } from "react";

const OverView = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen((open) => !open);
  };

  return (
    <div>
      <HeighLights />
      <PowerScore />
      <div onClick={handleIsOpen} className="cursor-pointer">
        <OpeningHours handleIsOpen={handleIsOpen} isOpen={isOpen} />
      </div>
      <Phone />
    </div>
  );
};

export default OverView;
