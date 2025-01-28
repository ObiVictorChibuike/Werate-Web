import React from "react";
import Image from "next/image";
import mealImage1 from "@/public/images/meal-image1.png";
import mealImage2 from "@/public/images/meal-image2.png";
import mealImage3 from "@/public/images/meal-image3.png";
import mealImage4 from "@/public/images/meal-image4.png";
import mealImage5 from "@/public/images/meal-image5.png";
import mealImage6 from "@/public/images/meal-image6.png";
import mealImage7 from "@/public/images/meal-image7.png";
import mealImage8 from "@/public/images/meal-image8.png";
import mealImage9 from "@/public/images/meal-image9.png";
import { useState } from "react";

const Gallery = () => {
  const [showImages, setShowImages] = useState([
    {
      image: mealImage1,
      id: 1,
    },
    {
      image: mealImage2,
      id: 2,
    },
    {
      image: mealImage3,
      id: 3,
    },
    {
      image: mealImage4,
      id: 4,
    },
    {
      image: mealImage5,
      id: 5,
    },
    {
      image: mealImage6,
      id: 6,
    },
    {
      image: mealImage7,
      id: 7,
    },
    {
      image: mealImage8,
      id: 8,
    },
    {
      image: mealImage9,
      id: 9,
    },
  ]);
  return (
    <div>
      <div className="container flex flex-wrap justify-center items-center lg:justify-start gap-x-4 gap-y-4 lg:gap-x-8 lg:gap-y-8">
        {showImages.map((showImage) => (
          <Image
            src={showImage.image}
            key={showImage.id}
            alt=""
            className="w-[110px] h-[110px] lg:w-[200px] lg:h-[200px] rounded-[20px] lg:rounded-[30px] "
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
