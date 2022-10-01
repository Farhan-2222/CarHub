function myFunction(x) {
  if (x.matches) {
    $("ul").removeClass("navbar-nav");
  }
  else {
    $("ul").addClass("navbar-nav");
  }
}

var x = window.matchMedia("(max-width: 1240px) and (min-width: 991px)")
myFunction(x);
x.addListener(myFunction);

$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('.fixed-top');
   var offset = startchange.offset();
    if (startchange.length){
      $(document).scroll(function() {
        scroll_start = $(this).scrollTop();
        if(scroll_start > offset.top) {
          $(".navbar").css('background-color', '#0A66C2');
        }
        else {
          $('.navbar').css('background-color', 'transparent');
        }
      });
    }
  });
