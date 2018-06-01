function search() {
    //获取搜索框的值
    var term = document.getElementById('txtKey').value;
    if (term == "") {
        return false;
    }
    //百度站内搜索-开始
    var url = "../../www.baidu.com/baidu@word=";
    url = url + term + "&ct=2097152&si=www.ssart.net";
    //百度站内搜索-结束
    //判断当前浏览器版本
    var agent = window.navigator.userAgent;
    //判断是否是Safari浏览器
    if (agent.indexOf("Safari") != "-1" && agent.indexOf("Chrome") == "-1") {
        window.open(url, "newwindow");
    }
    else {
        var a = document.createElement("a");
        a.setAttribute("href", url);
        a.setAttribute("target", "_blank");
        a.setAttribute("id", "openwin");
        document.body.appendChild(a);
        a.click();
    }
    return true;
}
//绑定回车事件
document.onkeydown = function (e) {
    // 兼容FF和IE和Opera
    var theEvent = e || window.event;
    var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
    var activeElementId = document.activeElement.id; //当前处于焦点的元素的id
    if (code == 13) {
        if (activeElementId == "txtKey");
        search();
        return false;
    }
    return true;
};