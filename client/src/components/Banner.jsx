/* eslint-disable react/prop-types */

import  { useState, useEffect } from 'react';
import { TUF } from "../utils/Constants";
import { MdClose } from "react-icons/md";

const Banner = ({ data }) => {
  const [timeLeft, setTimeLeft] = useState(data?.timer);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else {
      setIsVisible(false);
    }
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours < 10 ? "0" : ""}${hours}:${minutes < 10 ? "0" : ""}${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };


  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="flex items-center justify-center mx-20">
        <div
          className={`w-full text-black border rounded-2xl p-5 h-auto grid grid-cols-3 gap-5 dark:bg-[#ffffff0d] dark:border-[#3D3D3D] dark:backdrop-blur-lg md:p-6 shadow-[0px_0px_2px_0px_#00000040]`}
        >
          <div className="flex items-center col-span-2 gap-3">
            <div className="flex flex-col items-center justify-center gap-2 ">
              <div className="bg-[#FFF9EB] px-2 py-8 rounded-3xl">
                <TUF />
              </div>
              <h2 className="md:text-[20px] text-[16px] font-medium dark:text-[#FCEDEF]">
                {data.heading}
              </h2>
            </div>
            <p className="md:text-[14px] text-[10px] text-[#7A7A7A] font-extralight">
              {data.description}
            </p>
          </div>
          <div className="flex flex-col items-end col-span-1 gap-5">
            <span
              className="text-[#B3B3B3] dark:text-[#FCEDEF] cursor-pointer"
              onClick={handleClose}
            >
              <MdClose size={25} />
            </span>
            <div className="flex items-start justify-start gap-5">
              <a href={data.link} target='_blank'><div className="flex flex-row items-center px-2 py-1 bg-red-500 border border-red-600 rounded-full cursor-pointer gap-x-2 md:px-4 md:py-2">
                <p className="text-[#FCEDEF] font-sans font-[450] md:text-[16px] text-[12px]">
                  Explore Now
                </p>
              </div></a>
              <div className="flex flex-col items-end justify-start gap-2">
              <p className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                 Will disappear in
                </p>
                <p className="px-3 py-1 text-2xl font-bold text-red-600 bg-red-100 rounded-lg shadow dark:text-red-400 dark:bg-red-800">
                  {formatTime(timeLeft)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Banner;

