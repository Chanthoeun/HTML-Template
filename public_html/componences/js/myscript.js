$(function(){
      
    // color box
    //$("a.color-box").colorbox({rel:"color-box",transition:"fade"});
    
    // scrollToTop
    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

    $( window ).load(function() {
        $(document).on('click', '.navbar .dropdown-menu', function(e) {e.stopPropagation();});
    });
    
});// Jquery loading