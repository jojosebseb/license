$('.nav-handle').on('click', function(){
    $('#sideNav').toggleClass('active');
    $(this).toggleClass('active');
})

$('.batch-true').on('click', function(){
    $("#dataReport").addClass('active');
});

function hidePopup(){
    $('.popup-parent').removeClass('active');
}

$('.popup-bg').on('click', function(){
    hidePopup();
});

$('.batch-false').on('click', function(){
    $(this).parents('.batch-flex').addClass('red-flag');
});
