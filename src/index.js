// polyfill for IE 11
import 'whatwg-fetch'
import 'core-js'
import 'regenerator-runtime/runtime'

import './index.css'
import chartControl from './chart/chart.js'

document.addEventListener('DOMContentLoaded', (event) => {
    chartControl.drawChart()
})
