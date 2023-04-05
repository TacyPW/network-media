
console.log("processing includes");


$("#navigation").load("includes/nav.html", function () {
    console.log("nav loaded");
});

$("#info").load("includes/info.html", function () {
    console.log("artist bio loaded");
});