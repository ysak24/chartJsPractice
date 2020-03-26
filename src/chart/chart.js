import Chart from 'chart.js'
import config from './config'
import organizeData from './organizeData.js'

drawChart()
function drawChart(type) {
    const ctx = document.getElementById('myChart').getContext('2d')
    window.myChart = new Chart(ctx, {
        type: type ? type : config.defaultType,
        data: organizeData(),
    })

    for (const props of Object.keys(config)) {
        if (myChart[props]) {
            myChart[props] = config[props]
        }
    }
    if (config.backgroundColorSet) {
        if (myChart.data.labels.length > config.backgroundColorSet.length) {
            // カラーセットの中身を複製して配列を延長
            console.log('myChart.data.labels.length', myChart.data.labels.length)
            console.log('backgroundColorSet.length', config.backgroundColorSet.length)
        }
        myChart.data.datasets[0].backgroundColor = config.backgroundColorSet
    }
    if (config.borderColorSet) {
        if (myChart.data.labels.length > config.borderColorSet.length) {
            // カラーセットの中身を複製して配列を延長
            console.log('myChart.data.labels.length', myChart.data.labels.length)
            console.log('borderColorSet.length', config.borderColorSet.length)
        }
        myChart.data.datasets[0].borderColor = config.borderColorSet
    }
    if (config.borderWidth) {
        myChart.data.datasets[0].borderWidth = config.borderWidth
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
