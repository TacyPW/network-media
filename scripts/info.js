description = JSON.parse(fetch("info.json"))
console.log(description)

$("#information").load(description.information, function () {
    console.log("info");
});

$("#infohead").load(description.infohead, function () {
    console.log("infohead");
});