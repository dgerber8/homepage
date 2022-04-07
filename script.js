$(document).ready(function(){
  // Top Menu bar on scroll
  $(window).scroll(function(){
    if(this.scrollY > 20){
      $('.navbar').addClass("sticky");
    }else {
      $('.navbar').removeClass("sticky");
    }
  });

  // Toggle menu/navbar on mobile
  $('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  });

  // Typing Animation
  var typed = new Typed(".typing", {
    strings: ["React", "Node.js", "Ruby", "HTML", "CSS", "JavaScript", "Express", "MongoDB", "Vue.js"],
    typeSpeed: 120,
    backSpeed: 120,
    loop: true
  });
});
