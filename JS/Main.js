$(document).ready(function(){
  
  //Slider
  if(window.location.href.indexOf('web') > -1){
    $('.topologia').bxSlider({
      mode: 'fade',
      captions: false,
      slideWidth: 1700,
      responsive: true
    });
  }

  // Post
  if(window.location.href.indexOf('web') > -1){
    var posts = [
      {
        tittle: 'Objetivo',
        date: 'Publicado el día ' + moment().format("dddd ") + moment().date() + ' de ' + moment().format('MMMM ') + 'del ' + moment().format("YYYY"),
        content: 'Esta página se hizo con el propósito de realizar una prueba en AWS con el fin de que se haga uso de la herramienta y se observe el funcionamiento de esta.'
      },
      {
        tittle: 'Yanfri decente',
        date: 'Publicado el día ' + moment().format("dddd ") + moment().date() + ' de ' + moment().format('MMMM ') + 'del ' + moment().format("YYYY"),
        content: '<br> <video width="700" height="350" controls> <source src="Videos/Yanfri.mp4" type="video/mp4"></video> </br>'
      },
      {
        tittle: 'Descarga de video',
        date: 'Publicado el día ' + moment().format("dddd ") + moment().date() + ' de ' + moment().format('MMMM ') + 'del ' + moment().format("YYYY"),
        content: '<a href="Descargas/Fuicioso.mp4" download="Fuicioso">Descargar video</a>',
      },
      {
        tittle: 'Descarga de imagen',
        date: 'Publicado el día ' + moment().format("dddd ") + moment().date() + ' de ' + moment().format('MMMM ') + 'del ' + moment().format("YYYY"),
        content: '<a href="Descargas/velocidades.jpg" download="Velocidades">Descargar imagen</a>',
      },

      
      /*{ // Esta es otra forma de obtener la fecha exacta y no requiere de librerias
        tittle: 'Prueba 5',
        date: new Date(),
        content: 'Duis urna nisi, porttitor quis turpis ut, semper mattis nunc. Quisque nec tincidunt neque. Pellentesque facilisis, odio quis feugiat lobortis, nibh felis congue enim, ac iaculis metus nisi sit amet ligula. Mauris eget sagittis tellus. Nam felis tellus, dignissim quis risus at, faucibus luctus est. Duis nec suscipit nibh. Proin varius mauris tellus, non ultricies velit finibus eget. Sed vitae facilisis velit.'
      },*/
    ];


    //console.log(posts)    // Con esto se puede ver la fecha en la consola del navegador

    
    posts.forEach((item, web) => {
      var post = `
        <article class="post">
          <h2>${item.tittle}</h2>
          <span class="date">${item.date}</span>
          <p>
            ${item.content}
          </p>
          ${item.tittle === 'Objetivo' ? '<a href="#" class="button-more">Ir arriba</a>' : ''}
        </article>
      `;    

      //console.log(post);  // Muestra la plantilla en la consola del navegador
      $("#posts").append(post);

    });
  
  }
  

  // Selector de tema
  var theme = $("#theme");
  $("#to-green").click(function(){
    theme.attr("href", "css/Green.css");
  });

  var theme = $("#theme");
  $("#to-red").click(function(){
    theme.attr("href", "css/Red.css");
  });

  var theme = $("#theme");
  $("#to-blue").click(function(){
    theme.attr("href", "css/Blue.css");
  });

  // Scroll para ir arriba en la web
  $('.subir').click(function(evento){
    evento.preventDefault();

    $('html, body').animate({
      scrollTop: 0
    }, 500);

    return false;
  });


  // Login falso

  $("#login form").submit(function(){
    var form_name = $("#form_name").val();

    localStorage.setItem("form_name", form_name);

  });

  var form_name = localStorage.getItem("form_name");

  if(form_name != null && form_name != "undefined"){
    var usuario_parrafo = $("#usuario p");

    usuario_parrafo.html("<hr><strong>Hola " + form_name + ", gracias por visitar LAB 2 MPLS" + "<strong>"); 
    usuario_parrafo.append("<a href='#' id='logout'> <br>Cerrar sesión </br></a>");

    $("#login").hide();

    $("#logout").click(function(){
      localStorage.clear();
      location.reload();
    });
  }

  // Acordeon
  if(window.location.href.indexOf('about') > -1){
    $("#acordeon").accordion();
  } 

  // Reloj
  
    setInterval(function(){                // Permite ejecutar cada segundo el código
        var reloj = moment().format("hh:mm:ss a");
        $('#reloj').html(reloj);
    }, 1000)    

});
