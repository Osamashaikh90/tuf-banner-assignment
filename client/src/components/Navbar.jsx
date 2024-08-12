// import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {  Logo } from '../utils/constants'
import { FaMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";
import { IoPersonCircleSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import {toggleTheme} from "../utils/redux/slices/themeSlice";

const Navbar = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <>
        <div className='px-8 flex items-center justify-between bg-[#fff] shadow dark:bg-[#000000] py-1.5'>
        <Link to="/"><Logo /></Link>
        <span className='flex items-center justify-center gap-4'>
        <Link to="/dashboard"><button  className="bg-white dark:bg-[#0F0F0F] text-zinc-900 dark:text-zinc-200 dark:border-zinc-800 py-2  px-4 rounded-xl border-2 font-medium shadow-sm whitespace-nowrap">Dashboard</button></Link>
        <span className='text-black cursor-pointer dark:text-white' onClick={handleToggle}> {theme === 'dark' ? <GoSun size={20} /> : <FaMoon size={20} />}</span>
        <span className='text-black cursor-pointer dark:text-white '><IoPersonCircleSharp size={55}/></span>

        </span>

        </div>
    </>
  )
}

export default Navbar