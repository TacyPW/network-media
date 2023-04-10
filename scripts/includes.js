
console.log("processing includes");


$("#navigation").load(String(urlprefix + "includes/nav.html"), function () {
    console.log("nav loaded");
});

$("#info").load(String(urlprefix + "includes/info.html"), function () {
    console.log("artist bio loaded");
});