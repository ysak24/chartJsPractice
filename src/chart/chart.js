import Chart from 'chart.js'
import config from './config'
import organizeData from './organizeData.js'

const ctx = document.getElementById('myChart').getContext('2d')
new Chart(ctx, {
    type: config['type'],
    data: organizeData(),
    options: config['options']
})
