// function moveRight(){
//     $(".mincar").css({left:0});
//     $(".mincar").fadeIn().animate({left: "+=600"}, 2000).fadeOut();
//     moveRight();
// }
//
// $(document).ready(function() {
//
//    moveRight();
//
// });


// const bg = document.getElementsByClass(".mincar2");
//  window.addEventListener('ready', function(){
//    bg.style.backgroundSize = 20 - +window.pageYOffset/12+'%';
// //    bg.style.opacity = 1 - +window.pageYOffset/700+'';
// //  });
//
// $(document).ready(function(){
//         function marqueePlay(){
//             $(".cardiv").animate(
//                 {
//                 up: $(window).width() - $(".cardiv").width(),
//                 opacity: 0
//               }, 4000, function(){
//                     $(".cardiv").css("up", 0);
//                     $(".cardiv").css("opacity", 1);
//                     marqueePlay();
//                 }
//             );
//         }
//         marqueePlay();
//     });


$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('.fixed-top');
   var offset = startchange.offset();
    if (startchange.length){
      $(document).scroll(function() {
        scroll_start = $(this).scrollTop();
        if(scroll_start > offset.top) {
          $(".navbar").css('background-color', '#8BBCCC');
        }
        else {
          $(".navbar").css('background-color', 'transparent');
        }
      });
    }
  });

var a = $("marquee").height();
var b = $("#title").height();
var c = $(".container-fluid").height();
var d = $(".navbar").height();
var e = b-c;

if(a!==e)
{
  $("marquee").height(e);
}


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
