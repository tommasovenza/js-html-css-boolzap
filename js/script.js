// TODO --------------------------------> CAMBIARE TUTTI I #chat che identificano la chat corrente. (altrimenti non vedrò più i balloon)
// riga 25, 43, 62, 68, 78, 81
$(document).ready(function () {

    // trova l'ora al document ready (TODO: VALUTARE UN'ALTRA SCELTA)
    var dt = new Date();
    var ore = dt.getHours() 
    var min = dt.getMinutes();

    var oraCorrente = addZero(ore) + ':' + addZero(min);
    
    $('.hour').text(oraCorrente);
    

    // evento click sul bottone fondo pagina a destra
    $('#btn').click(function (event) {

        var valoreInput = $('#input').val();

        if (valoreInput != '') {

            var templateInput = $('.template .quote-input').clone();
            templateInput.children('.quote-text').text(valoreInput);

            $('.chat-container .active').append(templateInput);

            // svuoto al click il campo input
            $('#input').val('');

            // al click della tasto microfono(per ora), fa comparire la risposta in verde presa da citazioni varie

            // con set timeout faccio rispondere dopo 3 secondi, ovvero faccio apparire il balloon dopo 3 secondi
            setTimeout(function () {

                var quote = getQuote();

                console.log(quote);

                var template = $('.template .quote').clone();

                template.children('.quote-text').text(quote);

                $('.chat-container .active').append(template);

            }, 1500);
        }

    });


    // evento pressione tasto enter
    $(document).keypress(function (event) {

        var inputKeypress = $("#input").val();

        if ((event.which == 13) && (inputKeypress != '')) {


            var templateInputKeypress = $('.template .quote-input').clone();
            templateInputKeypress.children('.quote-text').text(inputKeypress);

            $('.chat-container .active').append(templateInputKeypress);

            // svuoto al keypress il campo input
            $('#input').val('');

            //scrolla alla fine della finestra
            $('.chat-container .active').scrollTop($('.chat-container .active').height());

            setTimeout(function () {

                var quote2 = getQuote();

                var template2 = $('.template .quote').clone();

                template2.children('.quote-text').text(quote2);

                $('.chat-container .active').append(template2);

                //scrolla alla fine della finestra
                $('.chat-container .active').scrollTop($('.chat-container .active').height());

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


    // scrivo le funzionalità che, al click sul contatto, mostreranno le chat nascoste

    // quindi, al click su un contatto...
    $('.wrapper-contacts').click(function() {

        // ...vado a prenderne l'attributo
        var data_c = $(this).attr('data-c');
        console.log(data_c);

        // rimuovo la classe active dalla chat corrente, per non mostrarla più
        $('.chat-container .chat').removeClass('active');

        // aggiungo la classe active alla chat che ha come attributo data-c-target (mostrando quindi la corretta chat)
        var selettore = '.chat-container div[data-c-target="' + data_c + '"]';
        $(selettore).addClass('active');

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

// funzone che aggiunge zero

function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }