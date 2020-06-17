$(document).ready(function () {

    // trova l'ora al document ready (TODO: VALUTARE UN'ALTRA SCELTA)
    var dt = new Date();
    var time = dt.getHours() + ":" + dt.getMinutes();

    var stampa = $('.hour').text(time);
    console.log(stampa);

    $('#btn').click(function (event) {

        var valoreInput = $('#input').val();

        if (valoreInput != '') {

            var templateInput = $('.template .quote-input').clone();
            templateInput.children('.quote-text').text(valoreInput);

            $('#chat').append(templateInput);

            // svuoto al click il campo input
            $('#input').val('');

            // al click della tasto microfono(per ora), fa comparire la risposta in verde presa da citazioni varie

            // con set timeout faccio rispondere dopo 3 secondi, ovvero faccio apparire il balloon dopo 3 secondi
            setTimeout(function () {

                var quote = getQuote();

                console.log(quote);

                var template = $('.template .quote').clone();

                template.children('.quote-text').text(quote);

                $('#chat').append(template);

            }, 1500);
        }

    });


    // evento pressione tasto enter
    $(document).keypress(function (event) {

        var inputKeypress = $("#input").val();

        if ((event.which == 13) && (inputKeypress != '')) {


            var templateInputKeypress = $('.template .quote-input').clone();
            templateInputKeypress.children('.quote-text').text(inputKeypress);

            $('#chat').append(templateInputKeypress);

            // svuoto al keypress il campo input
            $('#input').val('');

            //scrolla alla fine della finestra
            $('#chat').scrollTop($('#chat').height());

            setTimeout(function () {

                var quote2 = getQuote();

                var template2 = $('.template .quote').clone();

                template2.children('.quote-text').text(quote2);

                $('#chat').append(template2);

                //scrolla alla fine della finestra
                $('#chat').scrollTop($('#chat').height());

            }, 1500);

        }

    });

    // evento ricerca
    $('#input-search').keyup(function () {

        $('.wrapper-contacts').each(function () {

            var ricerca = $('#input-search').val().toLowerCase();
            //each --> è come un ciclo for
            // this --> array[i];
            var thisContactName = $(this).find('.contact-name').text().toLowerCase();

            // sfruttiamo una funzione delle stringhe
            // se la stringa include la variabile ricerca...
            if (thisContactName.includes(ricerca)) {
                // allora mostro wrapper contacts
                $(this).show();
                // altrimenti nascondo
            } else {
                $(this).hide();
            }

        });
    });






}); //end document ready

// funzione che crea una citazione 
function getQuote() {

    var quotes = ['ok', 'ciao'];

    return quotes[getRandomInt(0, (quotes.length))];
}

// funzione che restituisce un numero intero
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
}