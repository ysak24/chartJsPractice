import Chart from 'chart.js'
import config from './config'
import organizeData from './organizeData.js'

function drawChart(data, type) {
    const ctx = document.getElementById('myChart').getContext('2d')
    window.myChart = new Chart(ctx, {
        type: type ? type : config.defaultType,
        data: data ? data : organizeData(),
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
drawChart(organizeData())

function redraw(type) {
    if (myChart && myChart.destroy) {
        myChart.destroy()
    }
    drawChart(organizeData(), type)
}

document.getElementById('default').onclick = function () { redraw() }
document.getElementById('line').onclick = function () { redraw('line') }
document.getElementById('bar').onclick = function () { redraw('bar') }
document.getElementById('radar').onclick = function () { redraw('radar') }
document.getElementById('pie').onclick = function () { redraw('pie') }
document.getElementById('polarArea').onclick = function () { redraw('polarArea') }
document.getElementById('bubble').onclick = function () { redraw('bubble') }
document.getElementById('scatter').onclick = function () { redraw('scatter') }
