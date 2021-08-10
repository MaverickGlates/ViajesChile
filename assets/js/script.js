//---------------------------------------------------- MOSTRAR MENSAJES CLICK ----------------------------------------------------
$(function () {
    $('[data-toggle="tooltip"]').tooltip();

    $('#aboutus').click(function(){
        alert("Somos la mejor empresa traveling en chile")
    });

    $('#salient').click(function(){
        alert("Comparte junto a nosotros")
    });
    
    $('#contact').click(function(){
        alert("Contactanos atráves del siguiente formulario")
    });
//---------------------------------------------------- OCULTAR ICONOS ----------------------------------------------------     
    $(".ocultar-mostrar").click(function(){
        $(".ocultar-mostrar").slideToggle(600); 
        $(".ocultar-mostrar").toggle('show');
    });
    $(".ocultar-mostrar2").click(function(){
        $(".ocultar-mostrar2").slideToggle(600); 
        $(".ocultar-mostrar2").toggle('show');
    });
    $(".ocultar-mostrar3").click(function(){
        $(".ocultar-mostrar3").slideToggle(600); 
        $(".ocultar-mostrar3").toggle('show');
    });
//---------------------------------------------------- DELAY CAROUSEL ----------------------------------------------------  

  })

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        $('html,body').animate({
            'scrollTop': $($(this).attr('href')).offset().top+'px'
        }, 600);
        

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// ---------------------------------------------------- MOSTRAR MENSAJE SELECCIÓN -------------------------------------------
  $("#aboutus").hover(function() {
    $(this).css('cursor','pointer').attr('title', 'Los mejores viajes estan junto a nosotros');
}, function() {
    $(this).css('cursor','auto');
});