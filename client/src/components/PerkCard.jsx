/* eslint-disable react/prop-types */
// import React from 'react'

const PerkCard = ({card}) => {
  const {id,className,title,description,icon} =card;
  return (
    <div
              key={id}
              className={` w-full text-black border rounded-2xl p-5  flex flex-col gap-5 dark:bg-[#ffffff0d]  dark:border-[#3D3D3D] dark:backdrop-blur-lg   md:p-6 items-start shadow-[0px_0px_2px_0px_#00000040] group dark:hover:border-[#FCEDEF] hover:border-red-600`}
            >
              <div
                className={`${className} p-4 bg-[#E9F3FF] h-24 w-24 dark:bg-[#3d3d3d73] rounded-2xl`}
              >
                <div
                  className={`${
                    id === 1 ? "bg-blue-500 rounded-lg " : ""
                  }`}
                >
                  {icon}
                </div>
              </div>
              <div>
                <h1 className="md:text-[20px] text-[16px] font-medium dark:text-[#FCEDEF]">
                  {title}
                </h1>
                <p className="md:text-[14px] text-[10px] text-[#7A7A7A] font-extralight ">
                  {description}
                </p>
              </div>
              <div className="w-1/2 rounded-full border border-zinc-300 dark:border-[#FCEDEF] group-hover:dark:border-[#FCEDEF] flex flex-row gap-x-2 items-center px-2 py-1 md:px-4 md:py-2  dark:active:bg-[#FCEDEF] active:bg-red-600 group group-hover:border-red-600">
          <p className="text-[#B3B3B3] dark:text-[#FCEDEF] group-hover:dark:text-[#FCEDEF] group-active:text-[#FCEDEF] font-sans font-[450] md:text-[16px] text-[12px] group-active:dark:text-red-600 group-hover:text-red-600">
            Try it free
          </p>
          <svg
            className="group-active:dark:stroke-red-600 group-active:stroke-[#FCEDEF] stroke-[#B3B3B3] dark:stroke-[#FCEDEF] group-hover:dark:stroke-[#FCEDEF] group-hover:stroke-red-600"
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 5H15.5M15.5 5L11.5 9M15.5 5L11.5 1"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
            </div>
  )
}

export default PerkCard