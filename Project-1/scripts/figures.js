function showfigure(id) {
    // search figures for id and then if so, make image element $after
    // (in css set image elements to z index below)
    // add description overlay
    if (Figures.hasOwnProperty(id)) {
        if (!Figures[id].rendered) {
            Figures[id].rendered = true;
            let figdata = Figures[id];
            let currel =  document.getElementById(id);
            let currimg = figdata.imgpath;
            let curralt = figdata.alttext; 
            let currimgel = $("<img class=\"figure grid-50 mobile-grid-100\" src=\"" + currimg + "\" alt=\"" + curralt + "\"></img>").text(this.en);
            $(currimgel).css("top", String(currel.offsetTop) + "px");
            $("#" + id).after(currimgel);
        }
    } 
}


Figures = {
    line2: {
        rendered: false,
        imgpath: "assets/images/gun.png",
        alttext: "ak-47 machine gun",
        textpath: "assets/descriptions/line2.html" 
    }
}