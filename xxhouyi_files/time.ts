function getTimeTs() {
    let today = new Date()
    let year = today.getFullYear()
    let month = today.getMonth() + 1
    let week = today.getDay()
    let day = today.getDate()

    let weekdays: string[] = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六"
    ]

    let begin = Date.UTC(2015, 8, 6, 0, 0, 0, 0)
    let leave = Date.UTC(2019, 6, 10, 0, 0, 0, 0)
    let stayingDays = Math.round((today.getTime() - begin) / (1000 * 60 * 60 * 24))
    let restofDays = Math.round((today.getTime() - leave) / (1000 * 60 * 60 * 24))

    let label = document.getElementById("time date")
    let gongda = document.getElementById("gongda date")

    label.innerText = year + " 年 " + month + " 月 " + day + " 日 " + weekdays[week]
    gongda.innerText = "已经来到工大 " + stayingDays + " 天 , 差不多还有 " + restofDays + " 天离开"
}

getTimeTs()
