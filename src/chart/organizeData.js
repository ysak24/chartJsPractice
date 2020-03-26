// 取得したデータを chart で扱える形式に整理する。
function organizeData() {
    const data = {}
    data.labels = getRecentWeek()

    data.datasets = []
    data.datasets.push({})
    data.datasets[0].label = '# Direct Access'
    data.datasets[0].data = getData(data.labels.length)

    data.datasets.push({})
    data.datasets[1].label = '# USB Thin client'
    data.datasets[1].data = getData(data.labels.length)

    data.datasets.push({})
    data.datasets[2].label = '# Cachatto'
    data.datasets[2].data = getData(data.labels.length)

    console.log(data)
    return data
}
export default organizeData

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
        const formatDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        week.unshift(formatDate)
    }
    return week
}