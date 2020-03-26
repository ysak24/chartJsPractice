// 取得したデータを chart で扱える形式に整理する。
function organizeData() {
    const data = {}
    data.labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']

    data.datasets = []
    data.datasets.push({})
    data.datasets[0].label = '# of Votes'
    data.datasets[0].data = getData(data.labels.length)

    // 見た目に関する部分なのでここじゃない方がいい気がする
    // data.datasets[0].backgroundColor = [
    //     'rgba(255, 99, 132, 0.2)',
    //     'rgba(54, 162, 235, 0.2)',
    //     'rgba(255, 206, 86, 0.2)',
    //     'rgba(75, 192, 192, 0.2)',
    //     'rgba(153, 102, 255, 0.2)',
    //     'rgba(255, 159, 64, 0.2)'
    // ]
    // data.datasets[0].borderColor = [
    //     'rgba(255, 99, 132, 1)',
    //     'rgba(54, 162, 235, 1)',
    //     'rgba(255, 206, 86, 1)',
    //     'rgba(75, 192, 192, 1)',
    //     'rgba(153, 102, 255, 1)',
    //     'rgba(255, 159, 64, 1)'
    // ]
    // data.datasets[0].borderWidth = 1

    data.datasets.push({})
    data.datasets[1].label = '# additional info'
    data.datasets[1].data = getData(data.labels.length)
    // data.datasets[1].borderWidth = 1

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
