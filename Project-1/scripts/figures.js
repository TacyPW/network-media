function showfigure(id) {
    // search figures for id and then if so, make image element $after
    // (in css set image elements to z index below)
    // add description overlay
    const nextLine = document.getElementById((idStr + String((currIndex + 1))).replace('#',''));
    const y = nextLine.offsetTop - (window.innerHeight / 2);

    let currel =  document.getElementById(id);

    
    let currimg = "assets/images/gun.png";
    let curralt = "ak-47 machine gun";
    let currimgel = $("<img class=\"figure grid-50 mobile-grid-100\" src=\"" + currimg + "\" alt=\"" + curralt + "\"></img>").text(this.en);
    $(currimgel).css("top", String(currel.offsetTop) + "px");
    $("#" + id).after(currimgel);
    
}


Figures = {
    line2: {
        imgpath: "assets/images/gun.png",
        alttext: "ak-47 machine gun",
        textpath: "assets/descriptions/line2.html" 
    }
}