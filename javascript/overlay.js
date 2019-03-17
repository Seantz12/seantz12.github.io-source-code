const swup = new Swup();

console.log('test')

function leaveStartPage() {
    document.location.href = "about.html"
}

function startPage() {
    main = document.getElementById("underlay");
    main.style.display = "none";
}

function hideOverlay() {
    element = document.getElementById("overlay");
    main = document.getElementById("underlay");
    main.style.display = "block";
    main.style.opacity = 0;
    var op = 1;
    var timer = setInterval(function () {
        if(op <= 0.1) {
            clearInterval(timer);
            element.style.display = 'none';
            main.style.display = 'block';
        }
        element.style.opacity = op;
        main.style.opacity = 1-op;
        op -= op * 0.2;
    }, 50);
}
