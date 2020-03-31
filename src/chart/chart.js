import Chart from 'chart.js'
import config from './config'
import getChartData from './getChartData.js'

function drawChart(mode, type) {
    const chartData = getChartData(mode)

    const ctx = document.getElementById('myChart').getContext('2d')
    window.myChart = new Chart(ctx, {
        type: getType(type),
        data: getData(chartData.data),
        options: getOptions(chartData.options, mode)
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


function getType(type) {
    const availableTypes = ['line', 'bar', 'radar', 'pie', 'polarArea', 'bubble', 'scatter']
    if (type && availableTypes.includes(type)) {
        return type
    }
    if (config.defaultType && availableTypes.includes(config.defaultType)) {
        return config.defaultType
    }
    console.log('available type is not found.')
    console.log('set the default value.')
    return 'line'
}

function getData(data) {
    const returnValue = data
    returnValue.datasets = assignColor(data.datasets)
    return returnValue
}

function assignColor(datasets) {
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
        // やっつけ
        if (i == 0) {
            datasets[i].yAxisID = "y-axis-1"
        }
        if (i == 1) {
            datasets[i].yAxisID = "y-axis-2"
        }
    }
    return datasets
}

function getOptions(options, mode) {
    const title = {
        display: true,
        text: getTitle(mode)
    }
    const scales = { yAxes: [] }
    scales.yAxes.push({
        id: "y-axis-1",
        position: "left",
        ticks: {
            beginAtZero: true,
            max: options.maxData[0],
            min: 0,
            stepSize: options.maxData[0] / 10,
            callback: function (value, index, values) {
                return (value / options.maxData[0]) * 100 + '%'
            }
        }
    })
    scales.yAxes.push({
        id: "y-axis-2",
        position: "right",
        ticks: {
            beginAtZero: true,
            max: options.maxData[1],
            min: 0,
            stepSize: options.maxData[1] / 10,
            callback: function (value, index, values) {
                return ''
            }
        }
    })
    return { title, scales }
}

function getTitle(mode) {
    if (Object.keys(config.chartTitle).includes(mode)) {
        return config.chartTitle[mode]
    }
    console.log('chartTitle is not found.')
    console.log('set the default value.')
    return 'テレワーク利用率'
}