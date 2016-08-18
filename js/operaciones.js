// //Cambia a la siguiente section mostrando transición
// $(document).ready(function(){
//      $('a[href^="#"]').on('click',function (e) {
//          e.preventDefault();

//          var target = this.hash;
//          var $target = $(target);

//          $('html, body').stop().animate({
//              'scrollTop': $target.offset().top
//          }, 900, 'swing', function () {
//              window.location.hash = target;
//             });
//      });
// }); 

 
// //Flecha desvanece al subir y aparece al bajar
//       $(window).on("load",function() {
//         $(window).scroll(function() {
//             $(".divFlecha").each(function() {
//               /* Check the location of each desired element */
//               var objectBottom = $(this).offset().top + $(this).outerHeight();
//               var windowBottom = $(window).scrollTop() + $(window).innerHeight();
      
//               /* If the element is completely within bounds of the window, fade it in */
//               if (objectBottom < windowBottom) { //object comes into view (scrolling down)
//               if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
//               } else { //object goes out of view (scrolling up)
//                       if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
//               }
//             });
//         }); $(window).scroll(); //invoke scroll-handler on page-load
//       });
      

// //Menu desplegable
// function openNav() {
//     document.getElementById("myNav").style.height = "100%";
// }

// function closeNav() {
//     document.getElementById("myNav").style.height = "0%";
// } 


// /*//header fijo al top home
//     $(document).ready(function() {
//       var menu = $('.acomodoNavOnlyHome');
//       var contenedor = $('#menu-contenedor');
//       var menu_offset = menu.offset();
//         // Cada vez que se haga scroll en la página
//         // haremos un chequeo del estado del menú
//         // y lo vamos a alternar entre 'fixed' y 'static'.
//        $(window).on('scroll', function() {
//         if($(window).scrollTop() > menu_offset.top) {
//           menu.addClass('menu-fijo-home'); 
//         } else {
//           menu.removeClass('menu-fijo-home');
//         }
//   });
// });*/


// //header home al hacer scroll
// $(window).on("scroll", function() {
//    if ($(this).scrollTop() > 10) {
//      $(".acomodoNavOnlyHome").addClass("navbar-fixed-top");
//    } else {
//      $(".acomodoNavOnlyHome").removeClass("navbar-fixed-top");
//    }
// });







