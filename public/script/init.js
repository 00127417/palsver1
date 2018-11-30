(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space



$(document).ready(function(){
  $('.materialboxed').materialbox();
});

$('.dropdown-trigger').dropdown();


var instance = M.Tabs.getInstance(elem);
instance.select('tab_id');
instance.updateTabIndicator();
instance.destroy();