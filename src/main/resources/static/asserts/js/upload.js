var a = document.getElementsByTagName('input')[9];
var input = document.getElementsByTagName('input')[1];
var val = null;
a.onclick = function () {
    val = input.value;
    if (val == " " || val == null || val == "" || val == "在这里输入内容：") {
        alert("好像输入有问题，亲！");
    } else {
        alert("感谢您的配合！");
    }
}