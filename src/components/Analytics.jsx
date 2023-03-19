import React from 'react'
import DoughnutChart2 from './DoughnutChart2'
import Linechart from './Linechart'
import { TbAlertCircle } from "react-icons/tb"

const Analytics = () => {
  return (
    <div>
      <Linechart/>
      <div className="flex">
        <div className="ml-6 mt-6">
                <ul className="flex">
                <li className="font-sans-2 font-bold text-lg">Total Submissions</li>
                <li className="my-auto text-grey-1 ml-2"><TbAlertCircle/></li>
                </ul>
                <div>
                <DoughnutChart2/>
                </div>
            </div>
            <div className="ml-40 mt-6">
                <ul className="flex">
                    <li className="font-sans-2 font-bold text-lg">Weekly Active Percentage</li>
                    <li className="my-auto text-grey-1 ml-2"><TbAlertCircle/></li>
                </ul>
                <div className="mt-8">
                    <ul className="flex">
                        <li className="font-bold text-3xl font-sans-1">594,201</li>
                        <li className="ml-2 font-normal text-sm my-auto text-grey-1">Total</li>
                    </ul>
                </div>
                <div className="my-4 w-96 h-4 rounded-xl bg-[#7459d933]">
                    <div className="w-28 h-4 rounded-xl bg-[#7459D9]"></div>
                </div>
                <div className="flex justify-between">
                    <div className="flex ">
                        <div className="mt-2 h-1 w-7 rounded-xl bg-[#7459D9]"></div>
                        <ul className="pl-2 font-sans-1 text-grey-1 text-sm">
                            <li className=" font-normal">Active</li>
                            <li className=" font-semibold">173,016 users</li>
                        </ul>
                    </div>
                    <div className="flex">
                        <div className="mt-2 h-1 w-7 rounded-xl bg-[#7459d933]"></div>
                        <ul className="pl-2 font-sans-1 text-grey-1 text-sm">
                            <li className=" font-normal">Inactive</li>
                            <li className="font-semibold text-black">421,185 users</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      
      

     
    </div>
  )
}

export default Analytics
