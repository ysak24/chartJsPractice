// 取得したデータを chart で扱える形式に整理する。
function getChartData(mode = 'telework') {
    const data = {}
    data.labels = getRecentWeek()
    data.datasets = getDatasets(data.labels.length, mode)
    console.log(data)
    return data
}
export default getChartData


function getDatasets(length, mode) {
    const datasets = []
    if (mode == 'personal') {
        datasets.push({})
        datasets[0].label = '# メールボックス'
        datasets[0].data = getSourceData(length)
        datasets[0].yAxisID = "y-axis-1"

        datasets.push({})
        datasets[1].label = '# 個人用フォルダ'
        datasets[1].data = getSourceData200(length)
        datasets[1].yAxisID = "y-axis-2"
    } else if (mode == 'telework') {
        datasets.push({})
        datasets[0].label = '# Direct Access'
        datasets[0].data = getSourceData(length)

        datasets.push({})
        datasets[1].label = '# USBシンクライアント'
        datasets[1].data = getSourceData(length)

        datasets.push({})
        datasets[2].label = '# Cachatto'
        datasets[2].data = getSourceData(length)
    }
    return datasets
}

function getSourceData(length) {
    const data = []
    for (let i = 0; i < length; i++) {
        data.push(Math.floor(Math.random() * 300))
    }
    return data
}

function getSourceData200(length) {
    const data = []
    for (let i = 0; i < length; i++) {
        data.push(Math.floor(Math.random() * 200))
    }
    return data
}

function getRecentWeek() {
    const week = []
    const baseDate = new Date()
    for (let i = 0; i < 7; i++) {
        const date = new Date(baseDate)
        date.setDate(date.getDate() - i)
        const paddingMM = ('00' + (date.getMonth() + 1)).slice(-2)
        const paddingDD = ('00' + (date.getDate())).slice(-2)
        const formatDate = `${date.getFullYear()}-${paddingMM}-${paddingDD}`
        week.unshift(formatDate)
    }
    return week
}