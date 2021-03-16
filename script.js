let prinsipalubication = window.pageYOffset;
window.onscroll = function () {
    let scrollubication = window.pageYOffset;
    if (prinsipalubication >= scrollubication) {
        document.getElementById('navbar').style.top = "0px";
    } else {
        document.getElementById('navbar').style.top = "-100px";
    }
    prinsipalubication = scrollubication;
}
window.onload = function () {
    var cotainer = document.getElementById('loadercontainer');
    cotainer.style.visibility = 'hidden';
    cotainer.style.opacity = '0';
    var all = document.getElementById('content');
    all.style.display = 'block';
}