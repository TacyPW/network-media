var es_text;
var en_text;

let en_stanzas = [];
let es_stanzas = [];

let en_poem = [];
let es_poem = [];

let PoemLines = [];

split_en();

function page_handler() {
    console.log(en_poem, es_poem);
    PoemLines.push(new Stanza(en_poem[0], es_poem[0], 0, 0));
}

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

function breakup(text, stanzas, poem) {
    stanzas = text.split("\n\n");
    for (let i = 0; i < stanzas.length; i++) {
        poem.push(stanzas[i].split("\n"));
    }
}

class LinePair {
    es = "";
    en = "";
    xPosition;
    index;
    lineNum;
    stanzaNum;
    id = "line";

    constructor(es, en, index) {
        this.index = index;
        this.id += index;
        console.log(this.id)
        this.es = es;
        this.en = en;
        this.esElem = $("<p class=\"estext\"></p>").text(this.en);
        this.enElem = $("<p class=\"entext\"></p>").text(this.es);
        this.lineElem = $("<section class=\"line\"></section>").text("");
        $(this.lineElem).attr('id', this.id);
    console.log(this.lineElem);
        $("#poem").append(this.lineElem);
        this.render();
    }

    render() {
        console.log(this.enElem, this.esElem);
        $(this.id).append(this.enElem, this.esElem);
    }
}


class Stanza {
    Lines = [];
    linesTextEN;
    linesTextES;
    index;
    lineIndex;
    className = Stanza;

    constructor(linesEN, linesES, index, lineIndex) {
        this.lineIndex = lineIndex;
        this.index = index;
        this.linesTextEN = linesEN;
        this.linesTextES = linesES;
        this.render();
    }

    render() {
        this.stanzaElem = $("<section class=\"stanza\"></section>").text("");
        console.log(this.stanzaElem)
        for (let i = 0; i < this.Lines.length; i++) {
            let lineEN = this.linesTextEN[i];
            let lineES = this.linesTextES[i];
            this.Lines.push(new LinePair(lineEN, lineES, this.lineIndex + i));
            this.Lines[i].render();
        }
    }

    getLastIndex() {
        return Lines[this.Lines.length - 1].index //last index val in Lines array
    }
}
