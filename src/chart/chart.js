import Chart from 'chart.js'
import config from './config'
import organizeData from './organizeData.js'

const ctx = document.getElementById('myChart').getContext('2d')
const myChart = new Chart(ctx, {
    type: config.type,
    data: organizeData(),
})

for (const props of Object.keys(config)) {
    myChart[props] = config[props]
}
