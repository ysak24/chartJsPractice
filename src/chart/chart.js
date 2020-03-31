import Chart from 'chart.js'
import config from './config'
import getChartData from './getChartData.js'

function drawChart(mode, type) {
    const defaultType = config.defaultType ? config.defaultType : 'line'
    const title = getTitle(mode)
    const dataMax1 = 300
    const dataMax2 = 200

    const ctx = document.getElementById('myChart').getContext('2d')
    window.myChart = new Chart(ctx, {
        type: type ? type : defaultType,
        data: getData(mode),
        options: {
            title: {
                display: true,
                text: title
            },
            scales: {
                yAxes: [
                    {
                        id: "y-axis-1",
                        position: "left",
                        ticks: {
                            beginAtZero: true,
                            max: dataMax1,
                            min: 0,
                            stepSize: dataMax1 / 10,
                            callback: function (value, index, values) {
                                return (value / dataMax1) * 100 + '%'
                            }
                        }
                    },
                    {
                        id: "y-axis-2",
                        position: "right",
                        ticks: {
                            beginAtZero: true,
                            max: dataMax2,
                            min: 0,
                            stepSize: dataMax2 / 10,
                            callback: function (value, index, values) {
                                return ''
                            }
                        }
                    }
                ]
            }
        }
    })
}

function redraw(options = {}) {
    if (myChart && myChart.destroy) {
        myChart.destroy()
    }
    const mode = options.mode ? options.mode : undefined
    const type = options.type ? options.type : undefined
    drawChart(mode, type)
}

const chartControl = {
    drawChart,
    redraw
}
export default chartControl


function getData(mode) {
    const data = getChartData(mode)
    data.datasets = colorAssignment(data.datasets)
    return data
}

function colorAssignment(datasets) {
    for (let i = 0; i < datasets.length; i++) {
        if (config.backgroundColorSet) {
            datasets[i].backgroundColor = config.backgroundColorSet[i]
        }
        if (config.borderColorSet) {
            datasets[i].borderColor = config.borderColorSet[i]
        }
        if (config.borderWidth) {
            datasets[i].borderWidth = config.borderWidth
        }
    }
    return datasets
}

function getTitle(mode) {
    if (Object.keys(config.chartTitle).includes(mode)) {
        return config.chartTitle[mode]
    }
    console.log('use default value.')
    return 'テレワーク利用率'
}