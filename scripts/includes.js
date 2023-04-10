
console.log("processing includes");


$("#navigation").load("https://users.dma.ucla.edu/~tacypw/includes/nav.html", function () {
    console.log("nav loaded");
});

$("#info").load("https://users.dma.ucla.edu/~tacypw/includes/info.html", function () {
    console.log("artist bio loaded");
});