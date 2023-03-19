import React from 'react'
import '../App.css'
import { RxHamburgerMenu } from "react-icons/rx"
import { RiCommandFill , RiLoader2Line , RiPieChartLine } from "react-icons/ri"
import { TbClockHour5 } from "react-icons/tb"
import { HiOutlineGlobeAlt } from "react-icons/hi"
import { FiMessageSquare } from "react-icons/fi"




const Leftsidebar = () => {
  return (
    <div className="bg-white top-0 sticky left-0 bottom-0 flex flex-col justify-between w-20 h-screen border-r-2 text-gray-400">
      <div className="mt-8 mx-auto">
        <RxHamburgerMenu />
      </div>
      <div className="mx-auto border-2 border-hidden bg-grey-2 rounded-xl">
        <div className="mt-px mb-2 py-3 px-3 border-2 border-hidden bg-white rounded-xl text-violet-d shadow-md" >
          <RiCommandFill/>
        </div>
        <div className="py-3 px-3 space-y-6">
          <RiPieChartLine/>
          <TbClockHour5/>
          <HiOutlineGlobeAlt/>
          <RiLoader2Line/>
        </div>
      </div>
      <div className="mb-4 mx-auto py-3 px-3 border-2 border-hidden bg-grey-2 rounded-xl text-violet-d">
        <FiMessageSquare/>
      </div>
    </div>
  )
}

export default Leftsidebar

