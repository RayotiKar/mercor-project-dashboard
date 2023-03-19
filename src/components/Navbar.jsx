import React from 'react'
import '../App.css'
import { CiSearch } from "react-icons/ci"
import { RxDividerVertical } from "react-icons/rx"
import { FiChevronDown } from "react-icons/fi"
import { BiMoon } from "react-icons/bi"

const Navbar = () => {
  return (
        <nav className="flex justify-between top-0 h-20 border-b-2" >
          <div>
            <ul className="flex h-20 border-l-4 px-28 space-x-11 font-sans-1 text-grey-1 font-semibold text-base font-normal">
                <li className="m-auto">Analytics</li>
                <li className="m-auto">Coding Competitions</li>
                <li className="m-auto">Projects</li>
                <li className="m-auto"><RxDividerVertical /></li>
                <li className="m-auto"><CiSearch /></li>
                </ul>
          </div>
          <div>
            <ul className="flex h-20 px-8 space-x-5 font-sans-2 text-black">
              <li className="font-semibold m-auto">Company DashBoard</li>
              <li className="m-auto h-12 w-12">
                <img className="rounded-2xl" src="https://randomuser.me/api/portraits/med/men/75.jpg" alt=""></img>
              </li>
              <li className="m-auto"><FiChevronDown/></li>
              <li className="m-auto"><BiMoon/></li>
            </ul>
          </div>  
               
      
        </nav>
   
  )
}

export default Navbar
