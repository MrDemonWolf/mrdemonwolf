// Fixs the menu so when link is clicked it would close the menu.
$(function () {

    $('#bs-example-navbar-collapse-1')
        .on('shown.bs.collapse', function () {
            $('#navbar-hamburger').addClass('hidden');
            $('#navbar-close').removeClass('hidden');
        })
        .on('hidden.bs.collapse', function () {
            $('#navbar-hamburger').removeClass('hidden');
            $('#navbar-close').addClass('hidden');
        });

});
$(document).on('click', '.navbar-collapse.in', function (e) {
    if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
        $(this).collapse('hide');
    }
});
// Contact us effect for when clicked into the form.
$('.js-input').keyup(function () {
    if ($(this).val()) {
        $(this).addClass('not-empty');
    } else {
        $(this).removeClass('not-empty');
    }
});
$(document).ready(function () {
    //FANCYBOX
    //https://github.com/fancyapps/fancyBox
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
});