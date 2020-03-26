import Chart from 'chart.js'
import config from './config'
import organizeData from './organizeData.js'

drawChart('telework')
function drawChart(mode, type) {
    const defaultType = config.defaultType ? config.defaultType : 'line'
    const title = getTitle(mode)

    const ctx = document.getElementById('myChart').getContext('2d')
    window.myChart = new Chart(ctx, {
        type: type ? type : defaultType,
        data: colorAssignment(organizeData(mode)),
        options: {
            title: {
                display: true,
                text: title
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        callback: function (value, index, values) {
                            return value + '%'
                        }
                    }
                }]
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


function colorAssignment(data) {
    for (let i = 0; i < data.datasets.length; i++) {
        if (config.backgroundColorSet) {
            data.datasets[i].backgroundColor = config.backgroundColorSet[i]
        }
        if (config.borderColorSet) {
            data.datasets[i].borderColor = config.borderColorSet[i]
        }
        if (config.borderWidth) {
            data.datasets[i].borderWidth = config.borderWidth
        }
    }
    return data
}

function getTitle(mode) {
    if (Object.keys(config.chartTitle).includes(mode)) {
        return config.chartTitle[mode]
    }
    console.log('use default value.')
    return 'テレワーク利用率'
}