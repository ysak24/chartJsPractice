import Chart from 'chart.js'
// import config from './config'
import getChartData from './getChartData.js'

const data = [65, 35]
var config = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: data,
            backgroundColor: [
            ],
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
        }
    },
    centerText: {
        display: true,
        text: `${data[0]}/${data[1]}GB`
    }
};

Chart.Chart.pluginService.register({
    beforeDraw: function (chart) {
        if (chart.config.centerText.display !== null &&
            typeof chart.config.centerText.display !== 'undefined' &&
            chart.config.centerText.display) {
            drawTotals(chart);
        }
    },
});


function drawTotals(chart) {

    var width = chart.chart.width
    var height = chart.chart.height
    var ctx = chart.chart.ctx;

    ctx.restore();
    // var fontSize = (height / 114).toFixed(2);
    var fontSize = (height / 200).toFixed(2);
    ctx.font = fontSize + "em sans-serif";
    ctx.textBaseline = "middle";

    var text = chart.config.centerText.text,
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 2;

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



function drawChart(type) {
    // const chartData = getChartData('telework')

    // const ctxTeleworkAll = document.getElementById('teleworkAll').getContext('2d')
    // window.ctxTeleworkAll = new Chart(ctxTeleworkAll, {
    //     type: getType(type),
    //     data: getData(chartData.data),
    //     options: getOptions(chartData.options)
    // })
    var ctx = document.getElementById("mailBox").getContext("2d");
    window.myDoughnut = new Chart(ctx, config);

    // const ctxMailBox = document.getElementById('mailBox').getContext('2d')
    // window.ctxMailBox = new Chart(ctxMailBox, {
    //     type: 'doughnut',
    //     data: {
    //         datasets: [{
    //             data: [65, 35],
    //             backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(0, 0, 0, 0.2)'],
    //             borderColor:['rgba(75, 192, 192, 1)', 'rgba(0, 0, 0, 1)'],
    //             borderWidth: 1
    //         }],
    //         // これらのラベルは凡例とツールチップに表示されます。
    //         labels: [
    //             // '# 利用量',
    //             // '# 空き',
    //             '利用量',
    //             '空き',
    //         ]
    //     },
    //     options: {
    //         title: {
    //             display: true,
    //             text: 'メールボックス利用率'
    //         },
    //         tooltips: {
    //             enabled: false
    //         }
    //     },
    //     centerText: {
    //         display: true,
    //         text: "280"
    //     }
    // })

    // const ctxPersonalFolder = document.getElementById('personalFolder').getContext('2d')
    // window.ctxPersonalFolder = new Chart(ctxPersonalFolder, {
    //     type: 'doughnut',
    //     data: {
    //         datasets: [{
    //             data: [75, 25],
    //             backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(0, 0, 0, 0.2)'],
    //             borderColor:['rgba(255, 159, 64, 1)', 'rgba(0, 0, 0, 1)'],
    //             borderWidth: 1
    //         }],
    //         // これらのラベルは凡例とツールチップに表示されます。
    //         labels: [
    //             '# 利用量',
    //             '# 空き',
    //         ]
    //     },
    //     options: {
    //         title: {
    //             display: true,
    //             text: '個人用フォルダ利用率'
    //         }        
    //     }
    // })
    // ctxPersonalFolder.fillText("100%", width/2 - 20, width/2, 200)

}

function redraw(options = {}) {
    if (ctxTeleworkAll && ctxTeleworkAll.destroy) {
        ctxTeleworkAll.destroy()
    }
    const type = options.type ? options.type : undefined
    drawChart(type)
}

const chartControl = {
    drawChart,
    redraw
}
export default chartControl

// Chart.plugins.register({
//     afterDatasetsDraw: function(chartInstance, easing) {
//         if (chartInstance.config.type == "doughnut") {
//             var ctx = chartInstance.chart.ctx;
//             var sum = 0;
//             chartInstance.data.datasets.forEach(function (dataset, i) {
//                 var meta = chartInstance.getDatasetMeta(i);
//                 if (!meta.hidden) {
//                     meta.data.forEach(function(element, index) {
//                         ctx.fillStyle = 'white';

//                         var fontSize = 16;
//                         var fontStyle = 'normal';
//                         var fontFamily = 'Helvetica Neue';
//                         ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);


//                         var dataString = chartInstance.data.labels[index];
//                         var dataString2 = dataset.data[index];

//                         ctx.textAlign = 'center';
//                         ctx.textBaseline = 'middle';

//                         var padding = 5;
//                         var position = element.tooltipPosition();

//                         ctx.fillText(dataString, position.x, position.y - (fontSize / 2) - padding);
//                         ctx.fillText(dataString2, position.x, position.y - (fontSize / 2) - padding + fontSize);

//                         // 円の中心に表示する合計を集計する
//                         sum += dataset.data[index];
//                     });
//                 }
//             });

//             ctx.fillStyle = 'black';
//             var fontSize = 60;
//             var fontStyle = 'normal';
//             var fontFamily = "Helvetica Neue";
//             ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

//             ctx.textAlign = 'center';
//             ctx.textBaseline = 'middle';
//             ctx.fillText(sum.toString(), 300, 290);
//         }
//     }
// });






function getType(type) {
    const availableTypes = ['line', 'bar', 'radar', 'pie', 'polarArea', 'bubble', 'scatter']
    if (type && availableTypes.includes(type)) {
        return type
    }
    if (config.defaultType && availableTypes.includes(config.defaultType)) {
        return config.defaultType
    }
    console.log('available type is not found.')
    console.log('set the default value.')
    return 'line'
}

function getData(data) {
    const returnValue = data
    returnValue.datasets = assignColor(data.datasets)
    return returnValue
}

function assignColor(datasets) {
    for (let i = 0; i < datasets.length; i++) {
        if (config.backgroundColorSet) {
            datasets[i].backgroundColor = config.backgroundColorSet[i]
        }
        if (config.borderColorSet) {
            datasets[i].borderColor = config.borderColorSet[i]
        }
        if (config.borderWidth) {
            datasets[i].borderWidth = config.borderWidth
        }
        // やっつけ
        // if (i == 0) {
        //     datasets[i].yAxisID = "y-axis-1"
        // }
        // if (i == 1) {
        //     datasets[i].yAxisID = "y-axis-2"
        // }
    }
    return datasets
}

function getOptions(options) {
    const title = {
        display: true,
        text: getTitle('テレワーク利用率')
    }
    const scales = { yAxes: [] }
    scales.yAxes.push({
        // id: "y-axis-1",
        position: "left",
        ticks: {
            beginAtZero: true,
            max: options.maxData[0],
            min: 0,
            stepSize: options.maxData[0] / 10
            // callback: function (value, index, values) {
            //     return (value / options.maxData[0]) * 100 + '%'
            // }
        }
    })
    // scales.yAxes.push({
    //     id: "y-axis-2",
    //     position: "right",
    //     ticks: {
    //         beginAtZero: true,
    //         max: options.maxData[1],
    //         min: 0,
    //         stepSize: options.maxData[1] / 10,
    //         callback: function (value, index, values) {
    //             return ''
    //         }
    //     }
    // })
    return { title, scales }
}

function getTitle(mode) {
    if (Object.keys(config.chartTitle).includes(mode)) {
        return config.chartTitle[mode]
    }
    console.log('chartTitle is not found.')
    console.log('set the default value.')
    return 'テレワーク利用率'
}