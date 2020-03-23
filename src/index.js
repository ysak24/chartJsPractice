// polyfill for IE 11
import 'whatwg-fetch'
import 'core-js'
import 'regenerator-runtime/runtime'

import 'chart.js'

import config from '../config/chart.js'
import organizeData from './organizeData.js'

const ctx = document.getElementById('myChart').getContext('2d')
const chart = new Chart(ctx, {
    type: config['chartType'],
    data: organizeData(),
    options: config['options']
})

console.log(chart)