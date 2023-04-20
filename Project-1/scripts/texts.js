// Global Functions
function breakup(text, stanzas, poem) {
    stanzas = text.split("\n\n");
    for (let i = 0; i < stanzas.length; i++) {
        poem.push(stanzas[i].split("\n"));
    }
}
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
// Classes
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
        $(this.stanzaElem).before("<br>")
        $(this.stanzaElem).after("<br>")
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
class Poem {
    es_text;
    en_text;

    en_stanzas = [];
    es_stanzas = [];

    en_poem = [];
    es_poem = [];

    PoemLines = [];

    constructor() {
        this.en_poem = [];
            this.es_poem = [];
            this.en_stanzas = [];
            this.es_stanzas = [];
            this.PoemLines = [];
        this.split_en();
    }

    split_en() {  
        self = this;
        this.en_text = $.get('texts/masters.txt', function(data) {

            self.en_text = data;
            console.log("english loaded");
            breakup(self.en_text, self.en_stanzas, self.en_poem);
            self.en_text = data.replace(/\n/g, " <br>\n");
            $("#entext").append(self.en_text);
            self.split_es()
        }, 'text');
    }
    
    split_es() {
        self = this;
        this.es_text = $.get('texts/maestros.txt', function(data) {
            self.es_text = data;
            console.log("español cargado");
            breakup(self.es_text, self.es_stanzas, self.es_poem);
            self.es_text = data.replace(/\n/g, " <br>\n");
            $("#estext").append(self.es_text);
            self.page_handler();
        }, 'text');
    }
    
    page_handler() {
        //console.log("poems", en_poem, es_poem);
        //console.log("en", en_poem[0], "es", es_poem[0])
        for (let i = 0; i < this.en_poem.length; i++) {
            const enstanz = this.en_poem[i];
            const esstanz = this.es_poem[i];
            if (i === 0) {
                this.PoemLines.push(new Stanza(this.en_poem[0], this.es_poem[0], 0, 0));
            } else {
                this.PoemLines.push(new Stanza(this.en_poem[i], this.es_poem[i], i, this.PoemLines[i-1].getLastIndex()));
            }
        }
      
    
    }

}
let BobDylan = new Poem();