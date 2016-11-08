(function ($) {
    Drupal.behaviors.matchHeights = {
        attach: function (context, settings) {
            $('.js-matchHeightContainer', context).each(function () {
                $('.js-matchHeight', $(this)).matchHeight();
            });
        }
    }
}(jQuery));
