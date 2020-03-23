function organizeData() {
    const returnValue = {}
    returnValue.labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']

    returnValue.datasets = []
    returnValue.datasets.push({})
    returnValue.datasets[0].label = '# of Votes'
    returnValue.datasets[0].data = [12, 19, 3, 5, 2, 3]
    returnValue.datasets[0].backgroundColor = [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
    ]
    returnValue.datasets[0].borderColor = [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
    ]
    returnValue.datasets[0].borderWidth = 1

    console.log(returnValue)
    return returnValue
}
export default organizeData