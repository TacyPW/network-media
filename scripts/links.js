var urlprefix = getprefx();

function getprefx() {
    raw = window.location.hostname
    if ( raw ==='127.0.0.1') {
        return "http://" + raw + ":5501/";
    }
    else {
        return "https://" + raw + "/~tacypw/";
    }
}