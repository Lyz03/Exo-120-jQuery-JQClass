const circleAndSquare = $('section div div');
const column = $('.third');

// add
$('#addFull').on('click', function(event) {
    circleAndSquare.addClass("full");
});

// remove
$('#removeFull').on('click', function(event) {
    circleAndSquare.removeClass("full");
});

// circle
$('.circle').click( function () {
    $(this).toggleClass("full");
})

// square
function squareOnClick(line, lineCircles) {
    line.click(function () {
        if ($(this).is(".square")) {
            $(this).toggleClass("full");
            if ($(this).hasClass('full'))
                lineCircles.addClass('full');
            else
                lineCircles.removeClass('full');
        }
    })
}

squareOnClick($('.line1 div'), $('.line1 .circle'));
squareOnClick($('.line2 div'), $('.line2 .circle'));
squareOnClick($('.line3 div'), $('.line3 .circle'));
squareOnClick($('.line4 div'), $('.line4 .circle'));
squareOnClick($('.line5 div'), $('.line5 .circle'));

// rhombus
$('.rotate').click( function () {
    $('this').toggleClass('full');

    if ($(this).hasClass('full'))
        column.addClass('full');
    else
        column.removeClass('full');
})