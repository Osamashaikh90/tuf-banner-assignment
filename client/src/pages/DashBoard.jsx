import { FaBookBookmark } from "react-icons/fa6";
import { useState } from "react";
import { PiChatsDuotone } from "react-icons/pi";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import { GiVerticalBanner } from "react-icons/gi";
// import { useSelector } from "react-redux";
// import { DateFormatter } from "../utils/helper/DateFormatter";
// import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  // const course = useSelector((store)=>store.dashBoard.course);
  // const [completionStatus, setCompletionStatus] = useState({});
  // const navigate = useNavigate();

  return (
    <>
      <div
        className="grid h-screen"
        style={{ gridTemplateColumns: " 15% 85%" }}
      >
        <div className="flex flex-col justify-between h-full gap-3 bg-red-600">
          <div className="flex flex-col py-5 gap-7">
            <Link to="/">
              <h1 className="hidden text-3xl font-medium  text-[#fff]  cursor-pointer font-Cursive hover:transform hover:scale-100 md:flex md:justify-start md:mx-5 ">
                TUF+
              </h1>
            </Link>
            <div className="flex flex-col gap-3 px-3">
              <span className="flex items-center gap-4 p-1 font-mono text-xl bg-red-900 rounded-lg cursor-pointer sm:text-md lg:text-xl text-[#fff]">
                <FaBookBookmark />{" "}
                <span className="hidden md:block">DashBoard</span>
              </span>
              <span className="flex items-center gap-4 p-1 font-mono cursor-pointer hover:bg-red-900 hover:rounded-lg sm:text-md lg:text-xl  text-[#fff]">
                <PiChatsDuotone />{" "}
                <span className="hidden md:block">Community</span>
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3 px-5 mb-2">
            <Link to="/">
              {" "}
              <span className="flex items-center gap-4 p-1 font-mono text-xl cursor-pointer hover:bg-red-900 hover:rounded-lg sm:text-md lg:text-xl text-[#fff]">
                {" "}
                <span className="hidden md:block">View Banner</span>
              </span>
            </Link>
            <Link to="/">
              {" "}
              <span className="flex items-center gap-4 p-1 font-mono text-xl cursor-pointer hover:bg-red-900 hover:rounded-lg sm:text-md lg:text-xl text-[#fff]">
                <IoIosLogOut size={20} />{" "}
                <span className="hidden md:block">Log Out</span>
              </span>
            </Link>
          </div>
        </div>
        {/* right */}
        <div className="">
          <div className="px-5 shadow-lg py-7">Admin</div>
          <div className="p-10 max-w-[120rem] ">
            <div className="p-8 space-y-5 dashboard">
              <h2 className="flex items-center gap-2 text-3xl font-semibold">
                Banner Controls <GiVerticalBanner size={25} />
              </h2>

              <div className="flex items-center">
                <div className="flex items-center justify-between gap-3">
                  <label className="block text-lg font-medium">
                    Banner On/Off:
                  </label>
                  <div className="relative inline-block w-12 mr-2 align-middle transition duration-200 ease-in select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="toggle"
                      // checked={isBannerOn}
                      // onChange={handleSwitchChange}
                      className="absolute block w-6 h-6 bg-white border-4 rounded-full appearance-none cursor-pointer toggle-checkbox"
                    />
                    <label
                      htmlFor="toggle"
                      className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer toggle-label"
                    ></label>
                  </div>
                </div>
              </div>

              <div>
                <label className="block">Banner Description:</label>
                <textarea
                  // value={description}
                  // onChange={handleDescriptionChange}
                  className="w-full p-2 border rounded"
                  rows="3"
                />
              </div>

              <div>
                <label className="block">Banner Timer (seconds):</label>
                <input
                  type="number"
                  // value={timer}
                  // onChange={handleTimerChange}
                  className="w-full p-2 border rounded"
                />
              </div>

              <div>
                <label className="block">Banner Link:</label>
                <input
                  type="url"
                  // value={link}
                  // onChange={handleLinkChange}
                  className="w-full p-2 border rounded"
                />
              </div>

              {/* {isBannerVisible && bannerTimer > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Countdown Timer:</h3>
          <CountdownTimer timer={bannerTimer} />
        </div>
      )} */}
              <div>
                <button
                  type="submit"
                  className="w-full p-2 text-white bg-red-500 rounded hover:bg-red-600"
                >
                  Submit
                </button>
              </div>
            </div>

            {/* {course?.map((item)=>{
    const courseId = course.id;
    const courseComplete = completionStatus[courseId] || "55%";
    return(
    <>
        <div className="flex flex-col rounded-lg cursor-pointer ">
          <img src={item?.thumbnail} alt="" className="object-cover w-full h-full rounded-lg" />
        <div className="flex flex-col justify-between gap-2">
          
            <h2 className="pt-1 text-lg font-bold dark:text-[#F1F1F1] tracking-wide leading-relaxed font-heading ">{item?.name}</h2>
            <span className="flex items-center justify-between"><h4 className="text-sm text-[#aaaaaa]">{item?.instructorname}</h4>
            </span>
            <button onClick={() => handleCompleteCourse(courseId)} className='p-2 text-sm bg-green-600 rounded-lg hover:bg-green-800'>Complete Course</button>
        </div>
      </div>
    </>
    )
    
    })} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// // import { toggleBanner, updateDescription, setTimer, setLink } from './bannerSlice'; // Assuming you have a Redux slice for managing the banner state.

// const Dashboard = () => {
//   // const dispatch = useDispatch();
//   // const { isBannerVisible, bannerDescription, bannerTimer, bannerLink } = useSelector(state => state.banner);

//   // const [description, setDescription] = useState(bannerDescription);
//   // const [timer, setTimerValue] = useState(bannerTimer);
//   // const [link, setLinkValue] = useState(bannerLink);

//   // const handleToggleBanner = () => {
//   //   dispatch(toggleBanner());
//   // };

//   // const handleDescriptionChange = (e) => {
//   //   setDescription(e.target.value);
//   //   dispatch(updateDescription(e.target.value));
//   // };

//   // const handleTimerChange = (e) => {
//   //   const time = e.target.value;
//   //   setTimerValue(time);
//   //   dispatch(setTimer(time));
//   // };

//   // const handleLinkChange = (e) => {
//   //   setLinkValue(e.target.value);
//   //   dispatch(setLink(e.target.value));
//   // };

//   return (

//   );
// };

// // const CountdownTimer = ({ timer }) => {
// //   const [timeLeft, setTimeLeft] = useState(timer);

// //   React.useEffect(() => {
// //     const interval = setInterval(() => {
// //       setTimeLeft(prev => Math.max(prev - 1, 0));
// //     }, 1000);

// //     return () => clearInterval(interval);
// //   }, []);

// //   return <div>{timeLeft} seconds remaining</div>;
// // };

// export default Dashboard;
