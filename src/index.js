// polyfill for IE 11
import 'whatwg-fetch'
import 'core-js'
import 'regenerator-runtime/runtime'

import './index.css'
import chartControl from './chart/chart.js'

document.addEventListener('DOMContentLoaded', (event) => {
    chartControl.drawChart('telework')
})

// document.getElementById('default').onclick = function () { chartChange() }
// document.getElementById('line').onclick = function () { chartChange() }
// document.getElementById('bar').onclick = function () { chartChange() }
// document.getElementById('radar').onclick = function () { chartChange() }
// document.getElementById('pie').onclick = function () { chartChange() }
// document.getElementById('polarArea').onclick = function () { chartChange() }
// document.getElementById('bubble').onclick = function () { chartChange() }
// document.getElementById('scatter').onclick = function () { chartChange() }

// document.getElementById('telework').onclick = function () { chartChange() }
// document.getElementById('personal').onclick = function () { chartChange() }

function chartChange() {
    const form = document.getElementById('drawOptions')
    chartControl.redraw({ type: form.type.value })
}
