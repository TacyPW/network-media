var es_text;
var en_text;

let en_stanzas = [];
let es_stanzas = [];

let en_poem = [];
let es_poem = [];

split_en();

function page_handler() {
    console.log(en_poem, es_poem);
    write_linepair(en_poem[0][0], es_poem[0][0])
}

function split_en() {  

    console.log("splitting en")
    en_text = $.get('texts/masters.txt', function(data) {
        en_text = data;
        console.log("english loaded");
        breakup(en_text, en_stanzas, en_poem);
        console.log(en_poem);
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
        console.log(es_poem);
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

function write_linepair(enline, esline /*, output_element*/) {
    let es = $("<p class=\"estext\"></p>").text(esline);
    let en = $("<p class=\"entext\"></p>").text(enline);
    $("#line").append(en, es);
}
