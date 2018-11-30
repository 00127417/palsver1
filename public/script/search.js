window.onload= () => {
    
    var menu = $('.menu');
    var barra_busqueda = $('.search_bar');
    var bar = $('#bar');
    var icon = $('.icon_search');

    barra_busqueda.focusin(function () {
        barra_busqueda.css('width', '20%');
        menu.css('width', '80%');
        icon.css('color', '#000');
        bar.css('color', '#000');
    });

    barra_busqueda.focusout(function () {
        barra_busqueda.css('width', '15%');
        menu.css('width', '85%');
        icon.css('color', '#fff');
        bar.css('color', '#fff');
    });

    alert("se completo");
};


