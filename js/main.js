	
// about counter

		$('.count').counterUp({
	    delay: 10,
	    time: 7000
});
	


		 
$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:3,
        navigation:false,
        slideSpeed:1000,
        autoPlay:true
    });
});
	

  	$(document).ready(function(){
  		$(window).scroll(function(){
  			if($(window).scrollTop() > 250){

  				$('.my-navbar').addClass('navbar-scroll');

  			}else{

  				$('.my-navbar').removeClass('navbar-scroll');
  			}
  		});
  	});
  
    // data-aos
  
    AOS.init({
    	easing: 'ease', 
    	duration : 1000
    });
  