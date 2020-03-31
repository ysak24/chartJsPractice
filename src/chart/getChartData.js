// 取得したデータを chart で扱える形式に整理する。
function getChartData(mode = 'telework') {
    const labels = getRecentWeek()

    const sourceData = []
    if (mode == 'personal') {
        sourceData.push({ label: '# メールボックス', ...getSourceData('mailBox', labels.length) })
        sourceData.push({ label: '# 個人用フォルダ', ...getSourceData('personalFolder', labels.length) })
    } else if (mode == 'telework') {
        sourceData.push({ label: '# Direct Access', ...getSourceData('DirectAccess', labels.length) })
        sourceData.push({ label: '# USBシンクライアント', ...getSourceData('USBThinClient', labels.length) })
        sourceData.push({ label: '# Cachatto', ...getSourceData('Cachatto', labels.length) })
    }

    const datasets = []
    const maxData = []
    for (const d of sourceData) {
        datasets.push({
            label: d.label,
            data: d.data
        })
        // 手抜きしないなら id をキーにする？
        maxData.push(
            d.max
        )
    }
    return { data: { labels, datasets }, options: { maxData } }
}
export default getChartData

function getSourceData(source, length) {
    const data = []
    const max = source == 'personalFolder'
        ? 200 : 300
    for (let i = 0; i < length; i++) {
        data.push(Math.floor(Math.random() * max))
    }
    return { data: data, max: max }
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