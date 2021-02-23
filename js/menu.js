$(document).ready(
    function() {
        if ($(window).width() > 991) {
            setTimeout(closeProjectMenu, 3000);
        } else {
            $('.portfolio-projects-navigation-wrap').removeClass('portfolio-projects-navigation-wrap_opened');
            $('.portfolio-projects-navigation-wrap').addClass('portfolio-projects-navigation-wrap_closed');
        }
        $('.portfolio-projects-navigation-wrap__toggler').on('click',
            function() {
                if ($('.portfolio-projects-navigation-wrap').hasClass('portfolio-projects-navigation-wrap_opened')) {
                    $('.portfolio-projects-navigation-wrap').removeClass('portfolio-projects-navigation-wrap_opened');
                    $('.portfolio-projects-navigation-wrap').addClass('portfolio-projects-navigation-wrap_closed');
                } else {
                    $('.portfolio-projects-navigation-wrap').removeClass('portfolio-projects-navigation-wrap_closed');
                    $('.portfolio-projects-navigation-wrap').addClass('portfolio-projects-navigation-wrap_opened');
                }
            }
        )

        function closeProjectMenu() {
            $('.portfolio-projects-navigation-wrap').removeClass('portfolio-projects-navigation-wrap_opened');
            $('.portfolio-projects-navigation-wrap').addClass('portfolio-projects-navigation-wrap_closed');
        }
    }
)