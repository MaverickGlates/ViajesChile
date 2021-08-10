<!DOCTYPE html>
<html lang="es" dir="ltr">

<head>
  <meta name="author" content="Alexander Gutiérrez" />
  <meta charset="UTF-8" />
  <title>Viajes Chile</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <!-- Bootstrap 4.6.0 CSS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
    integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
  <!--Google Fonts-->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700;800&display=swap" rel="stylesheet">
  <!--Font Awesome-->
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
    integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous" />
  <!--Mi estilo-->
  <link rel="stylesheet" href="assets/css/style.css" />
	<link rel="icon" href="assets/img/viajes.svg" sizes="16x16" type="image/png">
</head>

<body>
  <nav class="navbar navbar-expand-lg navbar-dark encabezado fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="assets/img/viajes.svg" width="25" height="25" alt="" />
      </a>
      <h5 class="text-white">Viajes Chile</h5>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto listnav">
          <li class="nav-item"><a class="nav-link" href="index.html">Inicio</a></li>
          <li class="nav-item"><a class="nav-link" href="#aboutus">Quienes Somos</a></li>
          <li class="nav-item"><a class="nav-link" href="#salient">Destacados</a></li>
          <li class="nav-item"><a class="nav-link" href="#contact">Contacto</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <header>
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">

      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="assets/img/carousel1.jpg" class="d-block w-100" alt="Carousel1" />
        </div>
        <div class="carousel-item">
          <img src="assets/img/carousel2.jpg" class="d-block w-100" alt="Carousel3" />
        </div>
        <div class="carousel-item">
          <img src="assets/img/carousel3.jpg" class="d-block w-100" alt="Carousel3" />
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
  </header>
  <!------------------------------------------------------ ABOUT US  FIRST SECTION------------------------------------------------------>
  <section class="container d-none d-md-block" id="aboutus">
    <h1 class="text-center my-3">¿Quiénes somos?</h1>
    <hr>
  </section>

  <br>

  <section class="container d-none d-md-block">
    <div class="row mx-3 my-5">
    <div class="col-4">
      <div class="icon-center"><i class="ocultar-mostrar fas fa-plane pop"></i></div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ad et vitae alias, veritatis earum neque rem
        consectetur mollitia itaque nulla solsit amet consectetur adipisicing elit. Optio ad et vitae alias, veritatis
        earum neque rem
        consectetur mollitia itaque nulla uta, repudiandae recusandae deserunt expedita amet autem, fugit vero?</p>
    </div>
    <div class="col-4">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ad et vitae alias, veritatis earum neque rem
        consectetur mollitia itaque nullasit amet consectetur adipisicing elit. Optio ad et vitae alias, veritatis earum
        neque rem
        consectetur mollitia itaque nulla soluta, repudiandae recusandae deserunt expedita amet autem, fugit vero?</p>
      <div class="icon-center"><i class="ocultar-mostrar2 fa fa-anchor pop" aria-hidden="true"></i></div>
    </div>
    <div class="col-4">
      <div class="icon-center"><i class="ocultar-mostrar3 fa fa-car"></i></div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ad et vitae alias, veritatis earum neque rem
        consectetur mollitia itaque nulla soluta,sit amet consectetur adipisicing elit. Optio ad et vitae alias,
        veritatis earum neque rem
        consectetur mollitia itaque nulla repudiandae recusandae deserunt expedita amet autem, fugit vero?</p>
    </div>
  </div>
  </section>
  <!------------------------------------------------------ Salient Second Section ------------------------------------------------------>
  <section id="salient">
    <h2 class="text-center my-3">Destacado</h2>
    <hr>
  </section>
  <section id="Destacados" class="container">
    <div class=" container py-5 my-3">

      <div class="card-deck">
        <div class="card">
          <img src="assets/img/card1.jpg" width="316" height="180" class="card-img-top" alt="receta-1">
          <div class="card-body">
            <h5 class="card-title font-weight-bold fondo-plomo disfruta">Disfruta</h5>
            <p class="card-text font-weight-regular fondo-plomo disfrutatxt">Mus enim elementum dignissim class eleifend justo, ut
              nunc magnis est vulputate nostra,
              blandit erat luctus faucibus orci.</p>
          </div>
        </div>

        <div class="card">
          <img src="assets/img/card2.jpg" width="316" height="180" class="card-img-top" alt="receta-2">
          <div class="card-body">
            <h5 class="card-title font-weight-bold fondo-plomo viaja">Viaja</h5>
            <p class="card-text fondo-plomo viajatxt">Congue fermentum dignissim rhoncus elementum ac nisi, proin phasellus
              lacinia sed
              faucibus mauris, taciti scelerisque nulla ornare consequat.</p>
          </div>
        </div>

        <div class="card">
          <img src="assets/img/card3.jpg" width="316" height="180" class="card-img-top" alt="receta-2">
          <div class="card-body">
            <h5 class="card-title font-weight-bold fondo-plomo comparte">Comparte</h5>
            <p class="card-text fondo-plomo compartetxt">Congue fermentum dignissim rhoncus elementum ac nisi, proin phasellus
              lacinia sed
              faucibus mauris, taciti scelerisque nulla ornare consequat.</p>
          </div>
        </div>


        <div class="card">
          <img src="assets/img/card4.jpg" width="316" height="180" class="card-img-top" alt="receta-3">
          <div class="card-body">
            <h5 class="card-title font-weight-bold fondo-plomo sueña">Sueña</h5>
            <p class="card-text fondo-plomo sueñatxt">Cubilia elementum posuere arcu rhoncus egestas lectus, diam aliquam laoreet
              ac eleifend
              risus, urna auctor inceptos mattis dapibus.</p>
          </div>
        </div>
    </div>
  </section>

  <!-------------------------------------------------------------------CONTACT THIRD SECTION------------------------------------------------------------------->

  <section id="contact">
    <h3 class="text-center my-5">Contacto</h3>
    <hr>
    <div class="typeform-widget my-5 px-5"
      data-url="https://form.typeform.com/to/jLeMzodi?typeform-medium=embed-snippet"
      style="width: 100%; height: 500px;"></div>
    <script> (function () { var qs, js, q, s, d = document, gi = d.getElementById, ce = d.createElement, gt = d.getElementsByTagName, id = "typef_orm", b = "https://embed.typeform.com/"; if (!gi.call(d, id)) { js = ce.call(d, "script"); js.id = id; js.src = b + "embed.js"; q = gt.call(d, "script")[0]; q.parentNode.insertBefore(js, q) } })()</script>
  </section>

  <!-------------------------------------------------------------------FOOTER SECTION----------------------------------------------------------------->

  <footer id="footer" class="container-fluid  d-md-block  bg-info ">
    <div class="container">
      <div class="row">
        <div class="col">
          <h4 class="pt-2 font-weight-bold" data-toggle="tooltip" data-placement="top"
            title="Viaja junto a nosotros">VIAJES CHILE</h4>
        </div>
        <div class="col text-right pt-1">
          <a href="https://github.com/MaverickGlates/ViajesChile/" target="_blank"><i class="fab fa-github-square fa-2x icon"></i></a>
          <a href="https://www.linkedin.com" target="_blank"><i class="fab fa-linkedin fa-2x icon"></i></a>
          <a href="https://www.twitter.com" target="_blank"><i class="fab fa-twitter-square fa-2x icon"></i></a>
          <a href="https://www.facebook.com" target="_blank"><i class="fab fa-facebook-square fa-2x icon"></i></a>
        </div>
      </div>
    </div>
  </footer>

  <!-- Mi archivo JavaScript -->
  <script src="assets/js/main.js"></script>
  <!--jQuery 3.6.0-->
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"
    integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
  <!--Popper JS 1.16.1-->
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
    integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
    crossorigin="anonymous"></script>
  <!--Bootstrap JS 4.3.1---->
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
    crossorigin="anonymous"></script>
  <!--Mi script-->
  <script src="assets/js/script.js"></script>
</body>

</html>