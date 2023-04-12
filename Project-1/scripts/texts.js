let es_text;
let en_text;

en_text = $.get('texts/masters.txt', function(data) {
    en_text = data.replace(/\n/g, " <br>\n");
    $("#entext").append(en_text);
 }, 'text');


es_text = $.get('texts/maestros.txt', function(data) {
    es_text = data.replace(/\n/g, " <br>\n");
    $("#estext").append(es_text);
 }, 'text');

