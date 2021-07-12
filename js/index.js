/* $(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  }); */


  function autoCarousel() {
    let owlDesigns = $('#owl-designs');
    if (owlDesigns) {
      //owlDesigns.trigger('play.owl.autoplay',[1000]);
      owlDesigns.owlCarousel({
        autoplay: true,
        loop:true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        autoplaySpeed: true
      });
    }
  }
  
  $(document).ready(function () {
    autoCarousel();
  });