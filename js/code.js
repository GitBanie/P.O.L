$(document).ready(function () {


    //Affichage du filtre
    $('.filter').on("click", function () {

        $('.col_left').fadeOut();

        if ('.col_left:hiden') {
            $(".contentCatalog").prepend('<i class="fa fa-plus toggle" aria-hidden="true"></i>');
        }

        $('.toggle').on("click", function () {

            $('.col_left').fadeIn();
            $('.toggle').remove();
        });

    });

    //Trie des filtres
    $('.filtersTitle').on('click', function () {
        $(this).next().toggle(500);


        if ($(this).find($("i")).attr('class') == "fa fa-minus") {

            $(this).find($("i")).removeClass("fa fa-minus");
            $(this).find($("i")).addClass("fa fa-plus");
        } else {

            $(this).find($("i")).removeClass("fa fa-plus");
            $(this).find($("i")).addClass("fa fa-minus");
        }



    });

    //Selection du contenu

    $("#all").on("click", function () {

        $('.oneCard.livre').show();
        $('.oneCard.auteur').show();
        $('.oneCard.movie').show();
    });

    $("#livres").on("click", function () {

        $('.oneCard.livre').show();
        $('.oneCard.auteur').hide();
        $('.oneCard.movie').hide();

    });

    $("#video").on("click", function () {

        $('.oneCard.movie').show();
        $('.oneCard.auteur').hide();
        $('.oneCard.livre').hide();

    });

});
