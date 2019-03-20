var arr = document.querySelectorAll(".box-page");
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < 3; j++) {
        for (var k = 0; k < 3; k++) {
            var divs = document.createElement("div");
            divs.style.cssText = "width:37.5px;height:37.5px;border:0.5px solid #fff;box-sizing:border-box;background-color:red;position:absolute;background-image:url(/asserts/js/img/a" + i + ".jpg);background-size:112.5px 112.5px;";
            arr[i].appendChild(divs);

            divs.style.left = k * 37.5 + "px";
            divs.style.top = j * 37.5 + "px";
            divs.style.backgroundPositionX = -k * 37.5 + "px";
            divs.style.backgroundPositionY = -j * 37.5 + "px";
        }
    }
}