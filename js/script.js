$(document).ready(function () {

    $('#btn').click(function (event) {

        
        // al click della tasto microfono(per ora), fa comparire la risposta in verde presa da citazioni varie

        // con set timeout faccio rispondere dopo 3 secondi, ovvero faccio apparire il balloon dopo 3 secondi
        setTimeout(function () {

            var quote = getQuote();

            console.log(quote);

            var template = $('.template .quote').clone();

            template.children('.quote-text').text(quote);

            $('#chat').append(template);

        }, 3000);

        var valoreInput = $('#input').val();
        var templateInput = $('.template .quote-input').clone();
        templateInput.children('.quote-text').text(valoreInput);

        $('#chat').append(templateInput);

        // svuoto al click il campo input
        $('#input').val('');

    });

}); //end document ready




function getQuote() {

    var quotes = ['Molto bene, grazie. E tu?', 'dai, non c\'è male', 'yessss', 'oook', 'ciao', 'sono giornate toste'];

    return quotes[getRandomInt(0, (quotes.length))];
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
}