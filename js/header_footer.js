$(document).ready(function(){
  $(".loading").fadeOut(1000);
  // $(".sezdropdown").hover(function(){
  //   $(".about-dropdown").slideDown(50);
  //   }, function(){
  //     $(".about-dropdown").slideUp(50);
  //   });

  //   $(".sezdropdown-serv").hover(function(){
  //     $(".about-dropdown-serv").slideDown(50);
  //     }, function(){
  //       $(".about-dropdown-serv").slideUp(50);
  //     });
    
    $("#line-1-1").click(function(){
      $("#menuss1").slideToggle();
    })
    $("#line3-2").click(function(){
      $("#menuss2").slideToggle();
    })
})

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    // document.getElementById("header").style.display="none";
    // document.getElementById("header").style.position="fixed";
    $(document).ready(function(){
            $(".head-stick").slideDown();
    })
  } else {
    $(document).ready(function(){
        $(".head-stick").slideUp();
    })
    // document.getElementById("header").style.display="block";
    // document.getElementById("header").style.position="relative";
  }
}
$(document).ready(function(){
  $(".navbar-toggler").click(function(){
    $(".navbar-nav").slideToggle();
  })
})

// 3 lines
$(document).ready(function(){
  $(".line-3").click(function(){
    $(".menuss").slideToggle();
  })
})