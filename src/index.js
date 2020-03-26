// polyfill for IE 11
import 'whatwg-fetch'
import 'core-js'
import 'regenerator-runtime/runtime'

import chartControl from './chart/chart.js'

document.getElementById('default').onclick = function () { chartControl.redraw() }
document.getElementById('line').onclick = function () { chartControl.redraw('line') }
document.getElementById('bar').onclick = function () { chartControl.redraw('bar') }
document.getElementById('radar').onclick = function () { chartControl.redraw('radar') }
document.getElementById('pie').onclick = function () { chartControl.redraw('pie') }
document.getElementById('polarArea').onclick = function () { chartControl.redraw('polarArea') }
document.getElementById('bubble').onclick = function () { chartControl.redraw('bubble') }
document.getElementById('scatter').onclick = function () { chartControl.redraw('scatter') }
