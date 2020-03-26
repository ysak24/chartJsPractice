// polyfill for IE 11
import 'whatwg-fetch'
import 'core-js'
import 'regenerator-runtime/runtime'

import chartControl from './chart/chart.js'

document.getElementById('drawOptions').onclick = function () { chartChange() }
function chartChange() {
    const form = document.getElementById('drawOptions')
    chartControl.redraw({ type: form.type.value, mode: form.mode.value })
}
 