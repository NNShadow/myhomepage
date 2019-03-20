var a = document.getElementsByTagName('a')[0];
// console.log(a);
var input = document.getElementsByTagName('input')[0];
var val = null;
a.onclick = function () {
    val = input.value;
    if (val == "" || val == null) {
        alert("错误：未输入信息！");
    } else {
        console.log(val);
        this.href = 'https://www.baidu.com/s?wd=' + val;
    }
}