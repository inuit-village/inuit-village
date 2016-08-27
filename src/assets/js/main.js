/**
 * Created by rerades on 14/4/16.
 */

// -------------------
// SLIDE DOWN CODE BOX
// -------------------
$(function () {
    $('[data-slide-down]').click(function(){
        var dataAtt = '#' + $(this).attr('data-slide-down');
        $(dataAtt).toggle("slow");
    });
});


// ----------------------
// JQUERY RESPOSIVE TABS
// ----------------------
$(function () {
    $('[data-jquery-responsive-tab]').responsiveTabs({
        startCollapsed: 'accordion'
    });
});


// -------------------
// STICKY HEADER
// -------------------
$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
        $('.page-head--sticky').addClass("page-head--sticky-active");
    }
    else{
        $('.page-head--sticky').removeClass("page-head--sticky-active");
    }
});
