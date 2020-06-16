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


    // evento pressione tasto enter
    $(document).keypress(function (event) {

        if (event.which == 13) {

            var inputKeypress = $("#input").val();
            var templateInputKeypress = $('.template .quote-input').clone();
            templateInputKeypress.children('.quote-text').text(inputKeypress);

            $('#chat').append(templateInputKeypress);

            // svuoto al keypress il campo input
            $('#input').val('');

            setTimeout(function () {

                var quote2 = getQuote();

                var template2 = $('.template .quote').clone();

                template2.children('.quote-text').text(quote2);

                $('#chat').append(template2);

            }, 3000);
        }

    });

}); //end document ready

function getQuote() {

    var quotes = ['Molto bene, grazie. E tu?', 'de', 'dai, non c\'è male', 'de ma de', 'yessss', 'oook', 'ciao', 'sono giornate difficili', 'oooh allora??', 'che fai?', ' che si dice??', 'eh lo so' ];

    return quotes[getRandomInt(0, (quotes.length))];
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
}