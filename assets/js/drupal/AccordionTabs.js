(function ($) {
    Drupal.behaviors.accordionTabs = {
        attach: function (context, settings) {
            var tabs = $('.AccordionTabs', context);

            tabs.each(function () {
                $(this)
                    .children('.AccordionTabs-tabContainer').first()
                    .children('.AccordionTabs-tabHeader').addClass('is-active')
                    .next().addClass('is-open').show();
            });

            tabs.on('click', ' > .AccordionTabs-tabContainer > .AccordionTabs-tabHeader', function (event) {
                var tabHeader = $(this);
                event.preventDefault();

                if (!tabHeader.hasClass('is-active')) {
                    var accordionTabs = tabHeader.closest('.AccordionTabs');

                    accordionTabs.find('.is-open').removeClass('is-open').hide();
                    tabHeader.next().toggleClass('is-open').toggle();
                    accordionTabs.find('.is-active').removeClass('is-active');
                    tabHeader.addClass('is-active');
                }
            });
        }
    };
});
