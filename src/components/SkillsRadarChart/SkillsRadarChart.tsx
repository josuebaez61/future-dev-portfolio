import React, { useEffect, useState } from 'react';
import { Chart } from 'primereact/chart';
import { ChartData } from 'chart.js';
import { ChartOptions } from 'chart.js';
import { useDevelopmentTechs } from '../../hooks/useDevelopmentTechs';
import LoadingCard from '../LoadingCard.tsx/LoadingCard';
const SkillsRadarChart = () => {
    const [chartData, setChartData] = useState<ChartData>(Object.create(null))
    const [labels, setLabels] = useState<string[]>([])
    const [data, setData] = useState<number[]>([])
    const { techs, loading } = useDevelopmentTechs()

    useEffect(() => {
        setLabels(techs.map(el => el.label))
        setData(techs.map(el => el.value))
    }, [techs])

    useEffect(() => {
        setChartData({
            labels,
            datasets: [
                {
                    label: 'Development Technologies Skills',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    pointBackgroundColor: 'rgba(255,99,132,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(255,99,132,1)',
                    data
                }
            ]
        })
    }, [labels, data] )

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
        < >
            {
                loading
                    ? <LoadingCard />
                    : <Chart type="radar" data={chartData} options={lightOptions} style={{ position: 'relative', width: '100%' }} />
            }
        </>
    )
}

export default SkillsRadarChart
