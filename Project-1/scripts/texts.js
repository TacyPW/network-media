
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

    constructor(linesEN, linesES, index, lineIndex) {
        this.lineIndex = lineIndex;
        this.index = index;
        this.id += index;
        this.linesTextEN = linesEN;
        this.linesTextES = linesES;
        this.stanzaElem = $("<section class=\"stanza grid-100 mobile-grid-100\"></section>").text(" ");
        $(this.stanzaElem).attr('id', this.id);
        console.log(this.stanzaElem);
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
        return Lines[this.Lines.length - 1].index //last index val in Lines array
    }
}
class Poem {
    enpath;
    espath;

    es_text;
    en_text;

    en_stanzas = [];
    es_stanzas = [];

    en_poem = [];
    es_poem = [];

    PoemLines = [];

    id;

    constructor(id, enpath, espath) {
        this.id = id;
        this.enpath = enpath;
        this.espath = espath;
        this.en_poem = [];
        this.es_poem = [];
        this.en_stanzas = [];
        this.es_stanzas = [];
        this.PoemLines = [];
        this.split_en(this.split_es(this.page_handler()));
    }
    
    
    split_en(callback) {  
        this.en_text = $.get('texts/masters.txt', function(data) {
            console.log("data is" , typeof data);
            this.en_text = data;
            console.log("english loaded");
            breakup(this.en_text, this.en_stanzas, this.en_poem);
            this.en_text = data.replace(/\n/g, " <br>\n");

            if (typeof callback == "function") {
                callback();
            }
        }, 'text');
    }
    
    split_es(callback) {
        this.es_text = $.get('texts/maestros.txt', function(data) {
            this.es_text = data;
            console.log("español cargado");
            breakup(this.es_text, this.es_stanzas, this.es_poem);
            this.es_text = data.replace(/\n/g, " <br>\n");
            if (typeof callback == "function") {
                callback();
            }
        }, 'text');
    }
    
    page_handler() {
        console.log("poems", this.en_poem, this.es_poem);
        //console.log(("en", this.en_poem[0], "es", this.es_poem[0], 0, 0))
        //this.PoemLines.push(new Stanza(this.en_poem[0], this.es_poem[0], 0, 0));
    }
}
// general functions
function breakup(text, stanzas, poem) {
    stanzas = text.split("\n\n");
    for (let i = 0; i < stanzas.length; i++) {
        poem.push(stanzas[i].split("\n"));
    }
}
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}




let BobDylan = new Poem('war', 'texts/masters.txt', 'texts/maestros.txt')