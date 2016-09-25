/**
 * Created by BMcClure on 9/24/2016.
 */
$(window).on("load resize",function(e) {
    var more = $('.js-CenteredNavigation-more');
    var menu = $(".js-CenteredNavigation-menu");
    var menuToggle = $(".js-CenteredNavigation-mobileMenu").unbind();

    if (more.length > 0) {
        var windowWidth = $(window).width();
        var moreLeftSideToPageLeftSide = more.offset().left;
        var moreLeftSideToPageRightSide = windowWidth - moreLeftSideToPageLeftSide;
        var thirdLevel = menu.find(".CenteredNavigation-subMenu .CenteredNavigation-subMenu");

        if (moreLeftSideToPageRightSide < 330) {
            thirdLevel.removeClass("CenteredNavigation-subMenu--flyOutRight");
            thirdLevel.addClass("CenteredNavigation-subMenu--flyOutLeft");
        }

        if (moreLeftSideToPageRightSide > 330) {
            thirdLevel.removeClass("CenteredNavigation-subMenu--flyOutLeft");
            thirdLevel.addClass("CenteredNavigation-subMenu--flyOutRight");
        }
    }

    menu.removeClass("CenteredNavigation-menu--show");
    menuToggle.on("click", function(e) {
        e.preventDefault();
        menu.slideToggle(function(){
            if(menu.is(":hidden")) {
                menu.removeAttr("style");
            }
        });
    });
});
