
function route(val, base_href) {
    $.when( $('.wrapper').fadeOut(1000)).then(function( ) {
        window.location.replace(`${val}`);
      });
}
