function open_menu() {
    close_artist();
    document.getElementById("menu-open").style.display = "block";
    document.getElementById("menu-closed").style.display = "none";
    hide_pers();
}

function close_menu() {
    document.getElementById("menu-closed").style.display = "block";
    document.getElementById("menu-open").style.display = "none";
    show_pers();
}

function open_artist() {
    close_menu();
    document.getElementById("artist-open").style.display = "block";
    document.getElementById("artist-closed").style.display = "none";
    hide_pers();
}

function close_artist() {
    document.getElementById("artist-closed").style.display = "block";
    document.getElementById("artist-open").style.display = "none";
    show_pers();
}

function hide_pers() {
    if (document.getElementById("perspectives")) {
        document.getElementById("perspectives").style.display = "none";
    }
    // document.getElementsByClassName("layer0").style.zIndex = "-1";

    $(".layer0").css({'z-index' : -1});
}

function show_pers() {
    if (document.getElementById("perspectives")) {
        document.getElementById("perspectives").style.display = "block";
    }
    $(".layer0").css({'z-index' : 2});
}