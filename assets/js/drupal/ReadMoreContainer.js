(function ($) {
    Drupal.behaviors.readMoreContainer = {
        attach: function (context, settings) {
            var readMoreContainers = $('.ReadMoreContainer', context);

            readMoreContainers.each(function () {
                var item = $(this);
                var height = item.data('height') || '20em';
                var content = item.children('.ReadMoreContainer-content');
                var originalHeight = content.height();

                content.css({height: height});
                var newHeight = content.height();

                if (newHeight > originalHeight) {
                    content.css({height: originalHeight + 'px'});
                    item.addClass('is-disabled');
                } else {
                    item.data('originalHeight', originalHeight + 'px');
                    item.children('.ReadMoreContainer-bottom').css({display: 'block'});
                    item.toggleClass('is-closed', true);
                }
            });

            readMoreContainers.not('.is-disabled').on('click', ' > .ReadMoreContainer-bottom > .ReadMoreContainer-button', function (event) {
                var readMoreButton = $(this);
                event.preventDefault();

                var container = readMoreButton.parent().parent();
                var closed = container.hasClass('is-closed');
                var content = container.children('.ReadMoreContainer-content');
                var html = closed ? '<i class="fa fa-minus-circle"></i> Read Less' : '<i class="fa fa-plus-circle"></i> Read More';
                var newHeight = closed ? container.data('originalHeight') : container.data('height') || '20em';

                content.animate({height: newHeight}, 500, function () {
                    readMoreButton.html(html);
                    container.toggleClass('is-closed', !closed);
                });
            });
        }
    };
}(jQuery));
