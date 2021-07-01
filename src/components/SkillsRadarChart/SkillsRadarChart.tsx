import React from 'react';
import { Chart } from 'primereact/chart';
import { ChartData } from 'chart.js';
import { ChartOptions } from 'chart.js';
const SkillsRadarChart = () => {
    const chartData: ChartData = {
        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
        datasets: [
            // {
            //     label: 'My First dataset',
            //     backgroundColor: 'rgba(179,181,198,0.2)',
            //     borderColor: 'rgba(179,181,198,1)',
            //     pointBackgroundColor: 'rgba(179,181,198,1)',
            //     pointBorderColor: '#fff',
            //     pointHoverBackgroundColor: '#fff',
            //     pointHoverBorderColor: 'rgba(179,181,198,1)',
            //     data: [65, 59, 90, 81, 56, 55, 40]
            // },
            {
                label: 'My Second dataset',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                data: [28, 48, 40, 19, 96, 27, 100]
            }
        ],
    };

    const lightOptions: ChartOptions = {
        plugins: {
            legend: {
                display: false,
                labels: {
                    color: '#495057'
                }
            }
        },
        scales: {
            r: {
                pointLabels: {
                    color: '#fff',
                },
                grid: {
                    color: '#ebedef',
                },
                angleLines: {
                    color: '#ebedef'
                }
            }
        }
    };
    return (
        <Chart type="radar" data={chartData} options={lightOptions} style={{ position: 'relative', width: '100%' }} />
    )
}

export default SkillsRadarChart
