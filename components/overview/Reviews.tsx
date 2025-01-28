import React, { useState } from "react";
import Image from "next/image";
import star from "@/public/images/star.svg";
import starTwo from "@/public/images/star2.png";

const Reviews = () => {
  const [reviewBox, setReviewBox] = useState([
    {
      avatarLogo: "images/nft-queen.svg",
      id: 1,
      name: "NFT Queen",
      wisdom: "98 Wisdom",
      recommendation: `Think you've had the best burger in London? Think again. Burger &
      Beyond takes things up a notch ...`,
      starImg1: star,
      starImg2: star,
      starImg3: star,
      starImg4: star,
      starImg5: starTwo,
      fourStars: "4 Stars",
      imageGallery1: "/images/nft-img1.png",
      imageGallery2: "/images/nft-img2.png",
      imageGallery3: "/images/nft-img3.png",
      imageGallery4: "/images/nft-img4.png",
      imageGallery5: "/images/nft-img5.png",
      imageThumbsUp: "/images/Thumbs up, Like.svg",
      imageThumbsDown: "/images/Thumbs Down, Dislike.svg",
      starRatingNumbers: 32,
      report: "Report",
    },
    {
      avatarLogo: "images/sk2_male_soulbound.svg",
      id: 2,
      name: "Replicant",
      wisdom: "194 Wisdom ",
      recommendation: `Burgers so good they’ll ruin all others. Juicy, crispy, and downright addictive!`,
      starImg1: star,
      starImg2: star,
      starImg3: star,
      starImg4: star,
      starImg5: starTwo,
      StarNumbers: "4 Stars",
      imageGallery1: "/images/replicant-image1.png",
      imageGallery2: "/images/replicant-image2.png",
      imageGallery3: "/images/replicant-image3.png",
      imageGallery4: "/images/replicant-image4.png",
      imageGallery5: "/images/replicant-image5.png",
      imageThumbsUp: "/images/Thumbs up, Like.svg",
      imageThumbsDown: "/images/Thumbs Down, Dislike.svg",
      starRatingNumbers: 17,
      report: "Report",
    },
    {
      avatarLogo: "images/BiteSized-logo.svg",
      id: 2,
      name: "BiteSized",
      wisdom: "54 Wisdom ",
      recommendation: `Decent burgers, but not quite life-changing. Good flavours, just missing that wow factor.`,
      starImg1: star,
      starImg2: star,
      starImg3: star,
      starImg4: star,
      starImg5: starTwo,
      StarNumbers: "4 Stars",
      imageGallery1: "/images/biteSized-image1.png",
      imageGallery2: "/images/biteSized-image2.png",
      imageGallery3: "/images/biteSized-image3.png",
      imageGallery4: "/images/biteSized-image4.png",
      imageGallery5: "/images/biteSized-image5.png",
      imageThumbsUp: "/images/Thumbs up, Like.svg",
      imageThumbsDown: "/images/Thumbs Down, Dislike.svg",
      starRatingNumbers: 99,
      report: "Report",
    },
  ]);
  return (
    <main className="px-[15px]">
      <div className="container bg-[#FFFFFF1A] border border-[#FFFFFF33] flex flex-col space-y-4 rounded-[12px] py-5 px-3">
        {reviewBox.map((item) => (
          <section
            key={item.id}
            className="border-b border-[#FFFFFF33] pb-4 flex flex-col justify-start space-y-4 "
          >
            <div className="flex justify-start items-center gap-x-2">
              <Image
                src={item.avatarLogo}
                alt="nft queen"
                width={46}
                height={46}
              />
              <div className="text-[14px] font-Figtree font-[500] leading-[16.8px] tracking-[-0.41px] flex flex-col justify-start items-center space-y-[1px] ">
                <span className="text-primary-text">{item.name}</span>
                <span className="text-[#FFFFFF80]">{item.wisdom} </span>
              </div>
            </div>
            <div className="text-[14px] font-Figtree font-[500] leading-[16.8px] tracking-[-0.41px] text-primary-text">
              {item.recommendation}
            </div>
            <div className="flex justify-start items-center space-x-3">
              <span className="flex justify-start items-center space-x-1">
                <Image src={item.starImg1} alt="star" />
                <Image src={item.starImg2} alt="star" />
                <Image src={item.starImg3} alt="star" />
                <Image src={item.starImg4} alt="star" />
                <Image src={item.starImg5} alt="star" />
              </span>
              <span className="text-[14px] font-Figtree font-[500] leading-[16.8px] tracking-[-0.41px] text-[#FFFFFF80]">
                {item.StarNumbers}
              </span>
            </div>
            <div className="flex flex-wrap justify-start items-center space-x-3">
              <Image src={item.imageGallery1} width={56} height={56} alt="" />
              <Image src={item.imageGallery2} width={56} height={56} alt="" />
              <Image src={item.imageGallery3} width={56} height={56} alt="" />
              <Image src={item.imageGallery4} width={56} height={56} alt="" />
              <Image src={item.imageGallery5} width={56} height={56} alt="" />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex justify-start items-center space-x-2">
                <button className="flex justify-start items-center space-x-2">
                  <Image
                    src={item.imageThumbsUp}
                    width={24}
                    height={24}
                    alt=""
                  />
                  <span className="text-[19px] text-[#4CD964] font-Figtree font-[600] leading-[16.8px] tracking-[-0.41px]">
                    {item.starRatingNumbers}
                  </span>
                </button>
                <button>
                  <Image
                    src={item.imageThumbsDown}
                    width={24}
                    height={24}
                    alt=""
                  />
                </button>
              </div>
              <button className="text-[14px] font-Figtree font-[500] leading-[16.8px] tracking-[-0.41px] text-[#FFFFFF80]">
                {item.report}
              </button>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default Reviews;
