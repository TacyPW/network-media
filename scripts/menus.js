function open_menu() {
    close_artist();
    document.getElementById("menu-open").style.display = "block";
    document.getElementById("menu-closed").style.display = "none";

}

function close_menu() {
    document.getElementById("menu-closed").style.display = "block";
    document.getElementById("menu-open").style.display = "none";

}

function open_info() {
    close_menu();
    document.getElementById("info-open").style.display = "block";
    document.getElementById("info-closed").style.display = "none";

}

function close_info() {
    document.getElementById("info-closed").style.display = "block";
    document.getElementById("info-open").style.display = "none";

}

