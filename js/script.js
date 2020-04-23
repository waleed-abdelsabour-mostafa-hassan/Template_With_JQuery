 $(function(){
  $('div.awesome img').mousemove(function(){
      $('.overlay').hide();
  });

$('.first').click(function(){
  // $('.one').show(); //other way show class one
  // $('.two').hide(); // hide class two
  $('.f1 .one').show().siblings().hide(); //show class one and hide all children
});
$('.second').click(function(){
  // $('.two').show();
  // $('.one').hide();
  $('.f1 .two').show().siblings().hide();
});

$(window).scroll(function(){
  var scroll=$(this).scrollTop();
  if(scroll > 100)
  {
    $('.header').slideDown();
  }
  else
  {
      $('.header').slideUp();
  }
});
  $(".fancybox").fancybox();


$('div.acordion h3').click(function(){
   $(this).next().slideToggle();
   $('div.acordion p').not($(this).next()).slideUp();
});

$('.download').click(function(){
$('.timer').countTo();
});


$('.All_Images').mixItUp();


$('html').niceScroll();


  $("a").on('click', function(event) {
         // Make sure this.hash has a value before overriding default behavior
         if (this.hash !== "") {
           // Prevent default anchor click behavior
           event.preventDefault();
           // Store hash
           var hash = this.hash;
           // Using jQuery's animate() method to add smooth page scroll
           // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
           $('html, body').animate({
             scrollTop: $(hash).offset().top
           }, 1500, function(){
             // Add hash (#) to URL when done scrolling (default click behavior)
             window.location.hash = hash;
           });
         } // End if
   });

   
});
