//雪花飘落背景js
(function () {
    function snow(left, height, src) {
        var div = document.createElement("div");
        var img = document.createElement("img");
        div.appendChild(img);
        img.className = "roll";
        img.src = src;
        div.style.left = left + "px";
        div.style.height = height + "px";
        div.className = "div";
        document.getElementById("snowzone").appendChild(div);
        setTimeout(function () {
            document.getElementById("snowzone").removeChild(div);
            // console.log(window.innerHeight);
        }, 5000);
    }
    setInterval(function () {
        var left = Math.random() * window.innerWidth;
        var height = Math.random() * window.innerHeight;
        var src = "images/flower" + Math.floor(Math.random() * 2 + 1) + ".png"; 

        snow(left, height, src);
    }, 500);
})();