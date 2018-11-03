function getTime() {
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var week = today.getDay();
    var day = today.getDate();
    var weekdays = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六"
    ];
    var begin = Date.UTC(2015, 8, 6, 0, 0, 0, 0);
    var leave = Date.UTC(2019, 6, 10, 0, 0, 0, 0);
    var stayingDays = Math.round((today.getTime() - begin) / (1000 * 60 * 60 * 24));
    var restofDays = Math.round((leave - today.getTime()) / (1000 * 60 * 60 * 24));
    var label = document.getElementById("time date");
    var gongda = document.getElementById("gongda date");
    label.innerText = year + " 年 " + month + " 月 " + day + " 日 " + weekdays[week];
    gongda.innerText = "已经来到工大 " + stayingDays + " 天 , 差不多还有 " + restofDays + " 天离开";
}
getTime();
