function search() {
    //��ȡ�������ֵ
    var term = document.getElementById('txtKey').value;
    if (term == "") {
        return false;
    }
    //�ٶ�վ������-��ʼ
    var url = "../../www.baidu.com/baidu@word=";
    url = url + term + "&ct=2097152&si=www.ssart.net";
    //�ٶ�վ������-����
    //�жϵ�ǰ������汾
    var agent = window.navigator.userAgent;
    //�ж��Ƿ���Safari�����
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
//�󶨻س��¼�
document.onkeydown = function (e) {
    // ����FF��IE��Opera
    var theEvent = e || window.event;
    var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
    var activeElementId = document.activeElement.id; //��ǰ���ڽ����Ԫ�ص�id
    if (code == 13) {
        if (activeElementId == "txtKey");
        search();
        return false;
    }
    return true;
};