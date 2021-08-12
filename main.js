$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
$(document).ready(function() {
//toggle the component with class accordion_body
$(".accordion_head").click(function() {
if ($('.accordion_body').is(':visible')) {
$(".accordion_body").slideUp(300);
$(".plusminus").find("img").attr("src", "img/plus.svg");
}
if ($(this).next(".accordion_body").is(':visible')) {
$(this).next(".accordion_body").slideUp(300);
$(this).children(".plusminus").find("img").attr("src", "img/plus.svg");
} else {
$(this).next(".accordion_body").slideDown(300);
$(this).children(".plusminus").find("img").attr("src", "img/minus.svg");
}
});
});
(function($) {
    var $window = $(window),
        $html = $('html');

    function resize() {
        if ($window.width() < 514) {
            return $html.addClass('mobile');
        }

        $html.removeClass('mobile');
    }

    $window
        .resize(resize)
        .trigger('resize');
})(jQuery);
$(document).ready(function () {
    //rotation speed and timer
    var speed = 400000;
    
    var run = setInterval(rotate, speed);
    var slides = $('.slide');
    var container = $('#slides ul');
    var elm = container.find(':first-child').prop("tagName");
    var item_width = container.width();
    var previous = 'prev'; //id of previous button
    var next = 'next'; //id of next button
    slides.width(item_width); //set the slides to the correct pixel width
    container.parent().width(item_width);
    container.width(slides.length * item_width); //set the slides container to the correct total width
    container.find(elm + ':first').before(container.find(elm + ':last'));
    resetSlides();
    
    
    //if user clicked on prev button
    
    $('#buttons a').click(function (e) {
        //slide the item
        
        if (container.is(':animated')) {
            return false;
        }
        if (e.target.id == previous) {
            container.stop().animate({
                'left': 0
            }, 1500, function () {
                container.find(elm + ':first').before(container.find(elm + ':last'));
                resetSlides();
            });
        }
        
        if (e.target.id == next) {
            container.stop().animate({
                'left': item_width * -2
            }, 1500, function () {
                container.find(elm + ':last').after(container.find(elm + ':first'));
                resetSlides();
            });
        }
        
        //cancel the link behavior            
        return false;
        
    });
    
    //if mouse hover, pause the auto rotation, otherwise rotate it    
    container.parent().mouseenter(function () {
        clearInterval(run);
    }).mouseleave(function () {
        run = setInterval(rotate, speed);
    });
    
    
    function resetSlides() {
        //and adjust the container so current is in the frame
        container.css({
            'left': -1 * item_width
        });
    }
    
});
//a simple function to click next link
//a timer will call this function, and the rotation will begin

function rotate() {
    $('#next').click();
}