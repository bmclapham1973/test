function scrollTopLeft(id) {
    if (document.getElementById(id)) {
        document.getElementById(id).scrollTop = 0;
        document.getElementById(id).scrollLeft = 0;
    }
}
function scrollBottom(id) {
    if (document.getElementById(id)) {
        setTimeout(function () { document.getElementById(id).scrollTop = document.getElementById(id).scrollHeight }, 200);
    }
}
function scrollTop(id) {
    if (document.getElementById(id)) {
        setTimeout(function () { document.getElementById(id).scrollTop = 0 }, 200);
    }
}