import { React, useState } from 'react'
import '../App.css'
import { Line } from 'react-chartjs-2'
import {Chart as ChartJs, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement} from 'chart.js'
ChartJs.register(
    Tooltip, Title, LineElement, Legend, CategoryScale, LinearScale, PointElement
)

const Linechart = () => {
    const options={
        maintainAspectRatio: false,
        indexAxis: 'x',
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                backgroundColor: "#422F8A",
                bodyColor: "white",
            },
        },
        scales: {
            y:{
                ticks:{
                    maxTicksLimit: 4
                },
            },
            x:{
                ticks:{
                    maxTicksLimit: 8
                },
            }
        },
    };
   const [linedata] = useState({
     labels: ["1","5","10","15","20","25","30"],
     datasets:[
        {
            data:[140120, 180000, 140380, 220178, 210000, 200134, 180520],
            borderColor: '#422F8A', 
            tension: 0.5,
            pointStyle: false
        },

        {
            data:[180087, 160000, 220380, 180278, 150000, 180034, 140520],
            borderColor: '#D0D1D2', 
            tension: 0.5,
            pointStyle: false
        }
     ]
   }) 
  return (
    <div className="pt-7 ml-10" style={{width:'1020px', height:'250px'}}>
      <Line data={linedata} options={options}/>
    </div>
  )
}

export default Linechart
