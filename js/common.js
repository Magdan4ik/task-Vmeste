//Google Map

var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 40.839078, lng: 14.239099},
      zoom: 17
    });
}


  // SLIDER

      var owl1 = $(".owl-carousel").owlCarousel({
        items: 1,
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: true, 
        dots: true, // показывать dots навигацию.
        loop: true, //постоянная прокрутка,
        dotsContainer: '.slider__indicator' //контейнер для dots пагинации
       });

      $('.owl-dot').click(function(){
        owl1.trigger('to.owl.carousel', [$(this).index(), 300]);
      });

      var owl1 = $('.owl-carousel');
        owl1.owlCarousel();
        // Parameters has to be in square bracket '[500-speed]'
        $('.slider__btn--right').click(function() {
            owl1.trigger('next.owl.carousel', [500]);
        })
        $('.slider__btn--left').click(function() {
            owl1.trigger('prev.owl.carousel', [500]);
        })