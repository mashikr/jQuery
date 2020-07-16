$(document).ready(function(){
    ///// slider code /////
    
    /// slider 1 ///
    var sliderImage = $(".slider").find("img").first();
    var images = [
      "img/slider-img-1.jpg",
      "img/slider-img-2.jpg",
      "img/slider-img-3.jpg"
    ];

    var i = 0;
    setInterval(function(){
      i = (i + 1) % images.length;

      sliderImage.fadeOut(function(){
        $(this).attr("src", images[i]);
        $(this).fadeIn();
      });

      // sliderImage.attr("src", images[i]);
      // sliderImage.slideToggle('slow');
    }, 3000);


    /// slider 2 ///
    var images2 = $('.slider2 img').hide();

    var j = 0;
    images2.eq(j).fadeIn();

    setInterval(function(){
      images2.eq(j).hide();

      j = (j + 1) % images2.length;
      images2.eq(i).fadeIn();

    }, 3000);

    /// slider 3 ///
    var sliderImage3 = $(".slider3").find("img").first();

    var k = 0;
    setInterval(function(){
      k = (k + 1) % images.length;

      sliderImage3.attr("src", images[i]);
      sliderImage3.slideToggle(500);

      // for div height
      var height = $('.slider3 img').css('height');    
      $('.slider3').css("height", height);
    }, 3000);

    

});