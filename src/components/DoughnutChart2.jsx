import React from 'react'
import '../App.css'
import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJs.register(
    Tooltip, Title, ArcElement, Legend
)

const doughdata = {
    datasets: [{
        data: [351124, 127980, 28213],
        backgroundColor: [
            '#7459D9',
            'rgba(116, 89, 217, 0.5)',
            'rgba(116, 89, 217, 0.2)'
            
            
        ],
        borderColor: [
            'white',
            'white',
            'white'
        ],
        
    }],
    labels: [
        'Coding Competitions',
        'Projects',
        'Other'
    ]
};

const options ={
    
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'right',
            align: 'start',
            labels: {
              backgroundColor: "red",
              borderColor: "#000",
              useBorderRadius: true,
              borderRadius: 5,
              boxWidth: 40
            }
        },
    },
    cutout: '80%',
    borderRadius: 15,
  };

const DoughnutChart2 = () => {
  return (
    <div className=" flex">
        <div className="h-40 w-40 pt-3" style={{width:'370px', height:'140px'}}>
            <Doughnut className="" data={doughdata} options={options}/>
        </div>
       <div className="font-sans-1 -translate-x-80 translate-y-14">
            <ul>
                <li className="text-2xl font-bold">584,213</li>
                <li className="text-grey-1 ml-6 text-sm font-normal">Label</li>
            </ul>
        </div>
    </div>
    

  )
}

export default DoughnutChart2
