$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

 //Projects Grid 

$('.projects-menu ul li').click(function(){
    $('.projects-menu ul .active').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    if(selector == '*'){
        $('.grid-item').removeClass('d-block');
        $('.grid-item').addClass('d-block');
    } 
    if(selector == '.infr'){
        $('.grid-item').removeClass('d-block');
        $('.infr').addClass('d-block');        
    }
    if(selector == '.virt'){
        $('.grid-item').removeClass('d-block');
        $('.virt').addClass('d-block');        
    }
    if(selector == '.digt'){
        $('.grid-item').removeClass('d-block');
        $('.digt').addClass('d-block');        
    }
    if(selector == '.inds'){
        $('.grid-item').removeClass('d-block');
        $('.inds').addClass('d-block');        
    }
});