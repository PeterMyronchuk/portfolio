///////////////форма для контактів////////////
function onSubmit( form ){
    var data = JSON.stringify( $(form).serializeArray() ); //  <-----------
  
    console.log( data );
    return false; //don't submit
  }

  /////////////////////////////////////////know more
  function viewDiv(){
    document.getElementById("div1").style.display = "block";
  };

/////////////////////////////////////навігація

$(document).ready(function(){

    $("#menu").on("click","a", function (event) {

        event.preventDefault();

        var id  = $(this).attr('href'),

            top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 3500);

    });

});
///////////////////липке меню
jQuery("document").ready(function($){
 
	var nav = $('#nav-container');
 
	$(window).scroll(function () {
		if ($(this).scrollTop() > 300) {
			nav.addClass("f-nav");
		} else {
			nav.removeClass("f-nav");
		}
	});
 
});
    
///////////////////////////////////////