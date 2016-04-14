/**
 * Created by rerades on 14/4/16.
 */

// -------------------------
// SLIDE DOWN CODE BOX
// -------------------
$(function () {
    $('[data-slide-down]').click(function(){
        var dataAtt = '#' + $(this).attr('data-slide-down');
        $(dataAtt).toggle("slow");
    });
});
