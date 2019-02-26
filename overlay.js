function hide_overlay() {
    element = document.getElementById("overlay")
    var op = 1;
    var timer = setInterval(function () {
        if(op <= 0.1) {
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.2;
    }, 50);
}
