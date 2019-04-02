const BODY_DIV_ELEMENTS = ['homeText', 'aboutText', 'projectsText'];

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

function loadProjects() {
    for(var i = 0; i < BODY_DIV_ELEMENTS.length; i++) {
        var element = BODY_DIV_ELEMENTS[i];
        if(element == 'projectsText') {
            continue;
        }
        var html_element = document.getElementById(element);
        if(html_element.style.display == 'block') {
            fadeOutAndIn(element, 'projectsText');
            break;
        }
    }
}

function loadAboutMe() {
    for(var i = 0; i < BODY_DIV_ELEMENTS.length; i++) {
        var element = BODY_DIV_ELEMENTS[i];
        if(element == "aboutText") {
            continue;
        }
        var html_element = document.getElementById(element);
        if(html_element.style.display == 'block') {
            fadeOutAndIn(element, 'aboutText');
            break;
        }
    }
}

function loadHome() {
    for(var i = 0; i < BODY_DIV_ELEMENTS.length; i++) {
        var element = BODY_DIV_ELEMENTS[i];
        if(element == "homeText") {
            continue;
        }
        var html_element = document.getElementById(element);
        if(html_element.style.display == 'block') {
            fadeOutAndIn(element, 'homeText');
            break;
        }
    }
}