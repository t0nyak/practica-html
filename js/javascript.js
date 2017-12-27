function muestraInput(value) {
    var form = document.getElementsByTagName("form")[0];
    if (value === "otros") {
        var input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("name", "otraFuente");
        input.setAttribute("placeholder", "¿Cómo me has conocido?");
        form.insertBefore(input, form.childNodes[7]);
    } else {
        form.removeChild(document.getElementsByName("otraFuente")[0]);
    }
}

$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });

            // Este código sí es mío. El resto es prestado. DRY, you know... :P
            $('.navbar-list > li').each(function () {
                $(this).removeClass("active");
            })
            $(this).parent().addClass('active');
        } // End if
    });
    $("form").on('submit', function (event) {
        // Expresiones regulares para el comentario
        var primerBlanco = /^ /;
        var ultimoBlanco = / $/;
        var variosBlancos = /[ ]+/g;

        // Elementos del DOM para validación y envío del formulario
        var nombre = $("#nombre")[0];
        var email = $('#email')[0];
        var phone = $('#telf')[0];
        var conocido = $('#conocido');
        var comentario = $('#msg').val();

        comentario = comentario.replace(variosBlancos, " ");
        comentario = comentario.replace(ultimoBlanco, "");
        comentario = comentario.replace(primerBlanco, "");
        var palabras = comentario.split(" ").length;

        if(palabras > 150){            
            event.preventDefault();
            alert("El mensaje no puede contener más de 150 palabras");
        }

        sendData({
            'name': nombre.value,
            'email': email.value,
            'phone': telf.value,
            'conocido': conocido.val(),
            'comentarios': comentario
        });

        
    });
});

$('#msg').on('keydown', function () {
    var palabras = $('#msg').val().replace(/[ ]+/g," ").replace(/ $/, "").replace(/^ /, "").split(" ");
    var resto = 150 - palabras.length;
    $('#quedanPalabras').text(resto);
});

$(document).on('scroll', function () {
    var porc = 100 * (window.innerHeight + $(document).scrollTop()) / $(document).height();
    $('.progress').css('width', porc + '%');
    
    if($(document).height() == window.innerHeight + $(document).scrollTop()){
        $('.navbar-list > li').each(function () {
            $(this).removeClass("active");
        })
        $('#section6').addClass('active');
    }else if($('#sobre-mi').offset().top <= $(document).scrollTop()){
        $('.navbar-list > li').each(function () {
            $(this).removeClass("active");
        })
        $('#section5').addClass('active');
    }else if($('#experiencia').offset().top <= $(document).scrollTop()){
        $('.navbar-list > li').each(function () {
            $(this).removeClass("active");
        })
        $('#section4').addClass('active');
    }else if($('#estudios').offset().top <= $(document).scrollTop()){
        $('.navbar-list > li').each(function () {
            $(this).removeClass("active");
        })
        $('#section3').addClass('active');
    }else if($('#quien-soy').offset().top <= $(document).scrollTop()){
        $('.navbar-list > li').each(function () {
            $(this).removeClass("active");
        })
        $('#section2').addClass('active');
    }else{
        $('.navbar-list > li').each(function () {
            $(this).removeClass("active");
        })
        $('#section1').addClass('active');
    }
});

