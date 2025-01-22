import Image from "next/image";
import leftArrow from "@/public/images/arrow-button-left.svg";
import like from "@/public/images/like.svg";
import search from "@/public/images/search.svg";
import pizza from "@/public/images/pizza.png";
import burger from "@/public/images/burger.png";
import hmmm from "@/public/images/hmmm.png";
import image4 from "@/public/images/image4.png";
import image5 from "@/public/images/image5.png";
import banner from "@/public/images/banner.png";
const Banner = () => {
    return (
        <div className="relative">
            <Image
                src={banner}
                alt="banner"
                className="h-[600px] object-cover"
            />
            <div className="container">
                <div className=" flex justify-between items-center pt-[16px] px-[16px] absolute top-0 inset-x-0 ">
                    <a href="#">
                        <Image
                            src={leftArrow}
                            alt="arrow left button"
                            className="bg-white w-[50px] h-[50px] p-[10px] rounded-full"
                        />
                    </a>
                    <div className="flex justify-center items-center gap-x-[16px]">
                        <a href="#">
                            <Image
                                src={like}
                                alt="arrow left button"
                                className="bg-white w-[50px] h-[50px] p-[10px] rounded-full"
                            />
                        </a>
                        <a href="#">
                            <Image
                                src={search}
                                alt="arrow left button"
                                className="bg-white w-[50px] h-[50px] p-[10px] rounded-full"
                            />
                        </a>
                    </div>
                </div>
                <div className="flex justify-center items-end gap-x-4 lg:gap-x-8 bg-[#0E071C4D] py-2 absolute bottom-[5%] lg:bottom-0 transform translate-x-0 inset-x-0 mx-5  rouned-[10px]">
                    <Image
                        src={pizza}
                        alt="pizza"
                        className="w-[56px] h-[56px] lg:w-[200px] lg:h-[200px] rounded-[8px]"
                    />
                    <Image
                        src={burger}
                        alt="burger"
                        className="w-[56px] h-[56px] lg:w-[200px] lg:h-[200px] rounded-[8px]"
                    />
                    <Image
                        src={hmmm}
                        alt="hmmm"
                        className="w-[56px] h-[56px] lg:w-[200px] lg:h-[200px] rounded-[8px]"
                    />
                    <Image
                        src={image4}
                        alt="image4"
                        className="w-[56px] h-[56px] lg:w-[200px] lg:h-[200px] rounded-[8px]"
                    />
                    <Image
                        src={image5}
                        alt="image5"
                        className="w-[56px] h-[56px] lg:w-[200px] lg:h-[200px] rounded-[8px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;
