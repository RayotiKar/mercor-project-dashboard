import React from 'react'
import '../App.css'
import mercorlogo from '../assets/mercor-logo.png'
import { FiChevronRight } from "react-icons/fi"
import { IoMdAdd } from "react-icons/io"
import { TbAlertCircle } from "react-icons/tb"
import { BsThreeDots } from "react-icons/bs"
import { HiOutlineCalendar } from "react-icons/hi"
import Rightsidebar from './Rightsidebar'
import Analytics from './Analytics'


const Hero = () => {
  return (
    <div className="flex ml-20">
        <div className="w-11/12">
          <ul className="flex space-x-3 part-1 font-sans-2 pl-5 pt-8 h-5 w-16 text-xs">
              <li className=" text-violet-d font-bold">ANALYTICS</li>
              <li className="text-grey-1 m-auto"><FiChevronRight/></li>
              <li className="text-grey-1">MERCOR.IO</li>
          </ul>
          <ul className="flex mt-8 ml-4">
            <li><img className="h-11 w-11" src={mercorlogo} alt="" /></li>
            <li className="my-auto font-sans-2 font-bold text-2xl ml-4">Company Dashboard</li>
            <li className="my-auto ml-4 py-2 px-2 border-2 border-hidden bg-grey-2 rounded-full text-violet-d"><IoMdAdd className="stroke-4"/></li>
          </ul>
          <div className="flex justify-between mt-6 ml-4 h-7">
            <ul className="flex">
              <li className="font-sans-2 font-bold text-lg">Daily Users</li>
              <li className="my-auto text-grey-1 ml-2"><TbAlertCircle/></li>
            </ul>
            <ul className="flex space-x-5 mr-4">
              <li className="m-auto">
                <div className="w-16 h-1 rounded-md bg-grey-1"></div>
              </li>
              <li className="text-grey-1 font-medium font-sans-2">Provisional Month</li>
              <li className="flex font-sans-1 font-normal border-2 rounded-md"> <div className="ml-2">March 2023 </div><HiOutlineCalendar className="mx-2 my-1"/></li>
              <li className="border-2 rounded-md pb-4 px-1"><BsThreeDots className="mt-1"/></li>
            </ul>
          </div>
          <div className="">
            <Analytics/>
          </div>
        </div>
        <div className="right-side-bar w-3/12">
            <Rightsidebar/>
        </div>
    </div>
  )
}

export default Hero
