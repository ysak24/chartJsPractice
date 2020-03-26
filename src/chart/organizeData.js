// 取得したデータを chart で扱える形式に整理する。
function organizeData() {
    const data = {}
    data.labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']

    data.datasets = []
    data.datasets.push({})
    data.datasets[0].label = '# of Votes'
    data.datasets[0].data = getData(data.labels.length)

    data.datasets.push({})
    data.datasets[1].label = '# additional info'
    data.datasets[1].data = getData(data.labels.length)

    console.log(data)
    return data
}
export default organizeData

function getData(length) {
    const data = []
    for (let i = 0; i < length; i++) {
        data.push(Math.floor(Math.random() * (20 - 1) + 1))
    }
    return data
}
