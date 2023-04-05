
console.log("processing includes");


$("#navigation").load("includes/nav.html", function () {
    console.log("nav loaded");
});

$("#artistbio").load("includes/artistbio.html", function () {
    console.log("artist bio loaded");
});