import Chart from 'chart.js'
import config from './config'
import organizeData from './organizeData.js'

drawChart('telework')
function drawChart(mode, type) {
    const defaultType = config.defaultType ? config.defaultType : 'line'
    const ctx = document.getElementById('myChart').getContext('2d')
    window.myChart = new Chart(ctx, {
        type: type ? type : defaultType,
        data: organizeData(mode),
    })

    for (const props of Object.keys(config)) {
        if (myChart[props]) {
            myChart[props] = config[props]
        }
    }
    for (let i = 0; i < myChart.data.datasets.length; i++) {
        if (config.backgroundColorSet) {
            myChart.data.datasets[i].backgroundColor = config.backgroundColorSet[i]
        }
        if (config.borderColorSet) {
            myChart.data.datasets[i].borderColor = config.borderColorSet[i]
        }
        if (config.borderWidth) {
            myChart.data.datasets[i].borderWidth = config.borderWidth
        }
    }
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
