const BODY_DIV_ELEMENTS = ['homeText', 'aboutText', 'projectsText'];
const NAV_DIV_ELEMENTS = ['about', 'projects', 'home'];

function leaveStartPage() {
    document.location.href = "about.html"
}

function startPage() {
    main = document.getElementById("underlay");
    main.style.display = "none";
}

function fadeOutAndIn(fadeOutID, fadeInID) {
    element = document.getElementById(fadeOutID);
    main = document.getElementById(fadeInID);
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

function fadeOutThenIn(fadeOutId, fadeInId) {
    element = document.getElementById(fadeOutId);
    var op = 1;
    var timer = setInterval(function () {
        if(op <= 0.1) {
            clearInterval(timer);
            element.style.display = 'none';
            fadeIn(fadeInId);
        }
        element.style.opacity = op;
        op -= op * 0.2;
    }, 50);
}

function fadeIn(fadeInId) {
    element = document.getElementById(fadeInId);
    op = 1;
    element.style.opacity = 0;
    var timer = setInterval(function () {
        if(op <= 0.1) {
            clearInterval(timer);
        } else if(op == 0.8) { // Fixes flashing
            element.style.display = "block";
        }
        element.style.opacity = 1-op;
        op -= op * 0.2;
    }, 50);
}

function loadProjects() {
    for(var i = 0; i < BODY_DIV_ELEMENTS.length; i++) {
        var element = BODY_DIV_ELEMENTS[i];
        if(element == 'projectsText') {
            continue;
        }
        var html_element = document.getElementById(element);
        if(html_element.style.display == 'block') {
            fadeOutThenIn(element, 'projectsText');
            break;
        }
    }
    highlightElement('projects')
}

function loadAboutMe() {
    for(var i = 0; i < BODY_DIV_ELEMENTS.length; i++) {
        var element = BODY_DIV_ELEMENTS[i];
        if(element == "aboutText") {
            continue;
        }
        var html_element = document.getElementById(element);
        if(html_element.style.display == 'block') {
            fadeOutThenIn(element, 'aboutText');
            break;
        }
    }
    highlightElement('about')
}

function loadHome() {
    for(var i = 0; i < BODY_DIV_ELEMENTS.length; i++) {
        var element = BODY_DIV_ELEMENTS[i];
        if(element == "homeText") {
            continue;
        }
        var html_element = document.getElementById(element);
        if(html_element.style.display == 'block') {
            fadeOutThenIn(element, 'homeText');
            break;
        }
    }
    highlightElement('home')
}

function highlightElement(element) {
    for(var i = 0; i < NAV_DIV_ELEMENTS.length; i++) {
        var curr = NAV_DIV_ELEMENTS[i];
        var html_curr = document.getElementById(curr);
        if(curr == element) {
            html_curr.classList.add("highlighted");
        } else {
            html_curr.classList.remove("highlighted");
        }
    }
}