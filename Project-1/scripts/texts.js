var es_text;
var en_text;

let en_stanzas = [];
let es_stanzas = [];

let en_poem = [];
let es_poem = [];

let PoemLines = [];

split_en();



function split_en() {  
    en_text = $.get('texts/masters.txt', function(data) {
        en_text = data;
        console.log("english loaded");
        breakup(en_text, en_stanzas, en_poem);
        en_text = data.replace(/\n/g, " <br>\n");
        $("#entext").append(en_text);
        split_es()
    }, 'text');
}

function split_es() {
    es_text = $.get('texts/maestros.txt', function(data) {
        es_text = data;
        console.log("español cargado");
        breakup(es_text, es_stanzas, es_poem);
        es_text = data.replace(/\n/g, " <br>\n");
        $("#estext").append(es_text);
        page_handler();
    }, 'text');
}

function page_handler() {
    //console.log("poems", en_poem, es_poem);
    //console.log("en", en_poem[0], "es", es_poem[0])
    PoemLines.push(new Stanza(en_poem[0], es_poem[0], 0, 0));
    PoemLines.push(new Stanza(en_poem[1], es_poem[1], 1, PoemLines[1-1].getLastIndex()));
    console.log(PoemLines[1-1].getLastIndex())

}

function breakup(text, stanzas, poem) {
    stanzas = text.split("\n\n");
    for (let i = 0; i < stanzas.length; i++) {
        poem.push(stanzas[i].split("\n"));
    }
}
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


class LinePair {
    es = "";
    en = "";
    xPosition;
    index;
    lineNum;
    stanzaNum;
    lineElem;
    id = "line";

    constructor(es, en, index, dest) {
        this.index = index;
        this.id += index;
        this.es = es;
        this.en = en;
        this.esElem = $("<p class=\"estext\"></p>").text(this.en);
        this.enElem = $("<p class=\"entext\"></p>").text(this.es);
        this.lineElem = $("<div class=\"linepair mobiline grid-50 mobile-grid-100\"></div>").text("");
        $(this.lineElem).attr('id', this.id);
        
        //console.log("linelem", this.lineElem, this);
        $(dest).append(this.lineElem);
        
        this.render();
    }

    render() {
        //console.log("rendering: ", this.id);
        
        $("#" + this.id).css('margin-left', String(randInt(10,40)) + "%");
        $("#" + this.id).append(this.enElem, this.esElem);
        $(this.lineElem).after("<br class=\"clear hide-on-mobile\">")
    }
}


class Stanza {
    Lines = [];
    linesTextEN;
    linesTextES;
    index;
    lineIndex;
    className = Stanza;
    id = "stanza";

    constructor(linesEN, linesES, index, lastIndex) {
        this.lineIndex = lastIndex + 1;
        this.index = index;
        this.id += index;
        this.linesTextEN = linesEN;
        this.linesTextES = linesES;
        this.stanzaElem = $("<section class=\"stanza grid-100 mobile-grid-100\"></section>").text(" ");
        $(this.stanzaElem).attr('id', this.id);
        //console.log(this.stanzaElem);
        $("#poem").append(this.stanzaElem);
        for (let i = 0; i < linesEN.length; i++) {
            let lineEN = linesEN[i];
            let lineES = linesES[i];
            this.Lines.push(new LinePair(lineEN, lineES, this.lineIndex + i, "#" + this.id));
        }
    }

    render() {
        
        for (let i = 0; i < linesEN.length; i++) {
            this.Lines[i].render();
        }
    }

    getLastIndex() {
        return this.Lines[this.Lines.length - 1].index //last index val in Lines array
    }
}
