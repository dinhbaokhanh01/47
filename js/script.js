// CodeGym Career Landing Page - Custom JS

$(document).ready(function () {

    // Smooth scroll for navbar links
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 70
            }, 600);
        }
        // Close mobile menu after click
        $('.navbar-collapse').collapse('hide');
    });

    // Form submit handler (demo)
    $('#consultForm').on('submit', function (e) {
        e.preventDefault();
        var name = $('#name').val().trim();
        var email = $('#email').val().trim();
        var phone = $('#phone').val().trim();

        if (name && email && phone) {
            // Show success message (Material Design toast style)
            alert('Cảm ơn ' + name + '!\nChúng tôi đã nhận được thông tin của bạn.\nCodeGym sẽ liên hệ sớm nhất qua số ' + phone);
            this.reset();
        } else {
            alert('Vui lòng điền đầy đủ thông tin!');
        }
    });

    // Add shadow to navbar on scroll
    $(window).scroll(function () {
        if ($(window).scrollTop() > 50) {
            $('.navbar').addClass('z-depth-2');
        } else {
            $('.navbar').removeClass('z-depth-2');
        }
    });

});
