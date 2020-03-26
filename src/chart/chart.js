import Chart from 'chart.js'
import config from './config'
import organizeData from './organizeData.js'

drawChart()
function drawChart(type) {
    const defaultType = config.defaultType ? config.defaultType : 'line'
    const ctx = document.getElementById('myChart').getContext('2d')
    window.myChart = new Chart(ctx, {
        type: type ? type : defaultType,
        data: organizeData(),
    })

    for (const props of Object.keys(config)) {
        if (myChart[props]) {
            myChart[props] = config[props]
        }
    }
    if (config.backgroundColorSet) {
        myChart.data.datasets[0].backgroundColor = config.backgroundColorSet[0]
        myChart.data.datasets[1].backgroundColor = config.backgroundColorSet[1]
        myChart.data.datasets[2].backgroundColor = config.backgroundColorSet[2]
    }
    if (config.borderColorSet) {
        myChart.data.datasets[0].borderColor = config.borderColorSet[0]
        myChart.data.datasets[1].borderColor = config.borderColorSet[1]
        myChart.data.datasets[2].borderColor = config.borderColorSet[2]
    }
    if (config.borderWidth) {
        myChart.data.datasets[0].borderWidth = config.borderWidth
        myChart.data.datasets[1].borderWidth = config.borderWidth
        myChart.data.datasets[2].borderWidth = config.borderWidth
    }
}

function redraw(type) {
    if (myChart && myChart.destroy) {
        myChart.destroy()
    }
    drawChart(type)
}

const chartControl = {
    drawChart,
    redraw
}
export default chartControl
