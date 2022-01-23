(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });



    //tab active
    $(document).ready(function () {
        $(".navbar-nav > a").click(function() {
            //Busca todos los elementos del nav que tengan la clase active y los elimina
            $(this).closest('.navbar-nav').find('a').removeClass('active');
            //Al elemento seleccionado agrega la clase active
            $(this).addClass('active');
        });
        $(".footer-nav > li > a").click(function() {
            $('.navbar-nav').find('a').removeClass('active');
            $('.inicio').addClass('active');
        })
    });
    
})(jQuery);

