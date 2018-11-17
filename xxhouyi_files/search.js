
var input = document.getElementById("wd");
var button = document.getElementById("su");

input.onkeydown = function (ev) {
    if (ev.keyCode == 13) {
        var text = input.value;
        var keywords = text.split(" ");
        var url = "https://www.baidu.com/s?wd=";
        for (var keyword of keywords) {
            url += (keyword + "%20");
        }
        window.open(url);
    }
}

button.addEventListener("click", () => {
    var text = input.value;
    var keywords = text.split(" ");
    var url = "https://www.baidu.com/s?wd=";
    for (var keyword of keywords) {
        url += (keyword + "%20");
    }
    window.open(url);
});
