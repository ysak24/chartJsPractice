// 取得したデータを chart で扱える形式に整理する。
function organizeData(mode = 'telework') {
    const data = {}
    data.labels = getRecentWeek()

    data.datasets = getDatasets(data.labels.length, mode)

    console.log(data)
    return data
}
export default organizeData

function getDatasets(length, mode) {
    const datasets = []
    if (mode == 'personal') {
        datasets.push({})
        datasets[0].label = '# Mail Box'
        datasets[0].data = getData(length)

        datasets.push({})
        datasets[1].label = '# Personal Folder'
        datasets[1].data = getData(length)
    } else if (mode == 'telework') {
        datasets.push({})
        datasets[0].label = '# Direct Access'
        datasets[0].data = getData(length)

        datasets.push({})
        datasets[1].label = '# USB Thin client'
        datasets[1].data = getData(length)

        datasets.push({})
        datasets[2].label = '# Cachatto'
        datasets[2].data = getData(length)
    }
    return datasets
}

function getData(length) {
    const data = []
    for (let i = 0; i < length; i++) {
        data.push(Math.floor(Math.random() * 100))
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