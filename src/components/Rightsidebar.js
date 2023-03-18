import React from 'react'
import '../App.css'
import glogo from '../assets/google-logo.png'
import fslogo from '../assets/foursquare-logo.png'
import kslogo from '../assets/kickstarter-logo.png'
import { TbAlertCircle } from "react-icons/tb"
//import { Doughnut } from 'react-chartjs-2'



const Rightsidebar = () => {
  return (
    <div className="bg-violet-l h-screen">
      <p className="flex pt-9 pl-6 font-sans-2 font-bold text-lg">
        Integrations <TbAlertCircle className="my-auto text-grey-1 ml-2"/>
      </p>
      <div className="mx-8 mt-5 border-2 border-hidden shadow-md bg-white rounded-xl">
      <div className="flex pr-0 py-2">
        <div className="ml-4 mt-2">
           <img className="h-7 w-7" src={glogo} alt="google-logo-img"></img>
        </div>
        <ul className="ml-9 w-44 pb-3 border-b-2">
            <li className="font-sans-1 text-grey-1 font-normal text-sm">Authentication</li>
            <li className="font-snas-1 font-semibold text-sm">Google</li>
        </ul>
      </div>
      <div className="flex py-1 pr-0">
        <div className="mx-2">
           <img className="h-12 w-12" src={fslogo} alt="foursquare-logo-img"></img>
        </div>
        <ul className="ml-4 w-44 pb-3 border-b-2">
            <li className="font-sans-1 text-grey-1 font-normal text-sm">Marketing</li>
            <li className="font-snas-1 font-semibold text-sm">Foursquare</li>
        </ul>
      </div>
      <div className="flex py-1 pr-0">
        <div className="mx-2">
           <img className="h-12 w-12" src={kslogo} alt="kickstarter-logo-img"></img>
        </div>
        <ul className="ml-4 w-44 pb-3">
            <li className="font-sans-1 text-grey-1 font-normal text-sm">Fundraising</li>
            <li className="font-snas-1 font-semibold text-sm">Kickstarter</li>
        </ul>
      </div>
      </div>
      <div>
        <div className="mt-40">
            <p className="flex pt-9 pl-6 font-sans-2 font-bold text-lg">
                Growth <TbAlertCircle className="my-auto text-grey-1 ml-2"/>
            </p>  
        </div>
      </div>
    </div>
  )
}

export default Rightsidebar
