import Chart from 'chart.js'
// import config from './config'
// import getChartData from './getChartData.js'

function drawChart() {
    var ctx = document.getElementById('mailBox').getContext('2d');
    window.mailBox = new Chart(ctx, config)
}

function redraw() {
    if (ctxTeleworkAll && ctxTeleworkAll.destroy) {
        ctxTeleworkAll.destroy()
    }
    drawChart()
}

const chartControl = {
    drawChart,
    redraw
}
export default chartControl

const data = [65, 35]
const config = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: data,
            backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(0, 0, 0, 0.2)'],
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(0, 0, 0, 1)'],
            borderWidth: 1
        }],
        labels: [
            '利用中',
            '空き',
        ]
    },
    options: {
        responsive: true,
        legend: {
            display: false,
        },
        title: {
            display: true,
            text: 'メールボックス利用率'
        }
    },
    centerText: {
        display: true,
        text: `${data[0]}/${data[1]}GB`
    }
}

Chart.Chart.pluginService.register({
    beforeDraw: function (chart) {
        if (chart.config.centerText.display !== null &&
            typeof chart.config.centerText.display !== 'undefined' &&
            chart.config.centerText.display) {
            drawTotals(chart)
        }
    }
})

function drawTotals(chart) {

    const width = chart.chart.width
    const height = chart.chart.height
    const ctx = chart.chart.ctx

    ctx.restore();
    const fontSize = (height / 200).toFixed(2)
    ctx.font = fontSize + 'em sans-serif'
    ctx.textBaseline = 'middle'

    const text = chart.config.centerText.text
    const textX = Math.round((width - ctx.measureText(text).width) / 2)
    const textY = (height / 2) + 12 + 5

    // 1行ずつ描画
    // for (var lines = text.split("\n"), i = 0, l = lines.length; l > i; i++) {
    //     var line = lines[i];
    //     var addY = fontSize;

    //     // 2行目以降の水平位置は行数とlineHeightを考慮する
    //     if (i) addY += fontSize * height * i;

    //     ctx.fillText(line, x + 0, y + addY);
    // }
    ctx.fillText(text, textX, textY);
    ctx.save();
}

// function getData(data) {
//     const returnValue = data
//     returnValue.datasets = assignColor(data.datasets)
//     return returnValue
// }

// function assignColor(datasets) {
//     for (let i = 0; i < datasets.length; i++) {
//         if (config.backgroundColorSet) {
//             datasets[i].backgroundColor = config.backgroundColorSet[i]
//         }
//         if (config.borderColorSet) {
//             datasets[i].borderColor = config.borderColorSet[i]
//         }
//         if (config.borderWidth) {
//             datasets[i].borderWidth = config.borderWidth
//         }
//         // やっつけ
//         // if (i == 0) {
//         //     datasets[i].yAxisID = "y-axis-1"
//         // }
//         // if (i == 1) {
//         //     datasets[i].yAxisID = "y-axis-2"
//         // }
//     }
//     return datasets
// }

// function getOptions(options) {
//     const scales = { yAxes: [] }
//     scales.yAxes.push({
//         id: "y-axis-1",
//         position: "left",
//         ticks: {
//             beginAtZero: true,
//             max: options.maxData[0],
//             min: 0,
//             stepSize: options.maxData[0] / 10,
//             callback: function (value, index, values) {
//                 return (value / options.maxData[0]) * 100 + '%'
//             }
//         }
//     })
//     scales.yAxes.push({
//         id: "y-axis-2",
//         position: "right",
//         ticks: {
//             beginAtZero: true,
//             max: options.maxData[1],
//             min: 0,
//             stepSize: options.maxData[1] / 10,
//             callback: function (value, index, values) {
//                 return ''
//             }
//         }
//     })
//     return { title, scales }
// }
