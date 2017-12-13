function menu(){

$(function() {
	var nav = $('#globalNavi'),
	offset = nav.offset();
	$(window).scroll(function () {
	  if($(window).scrollTop() > offset.top) {
//	    $(".fixed").css("width",$("#main").width();)
	    nav.addClass('fixed');
	  } else {
	    nav.removeClass('fixed');
	  }
	});
});

}

function mainwidth(){

$(window).resize(function(){ //ok

var w = window.innerWidth ? window.innerWidth : $(window).width();

if(w > 1000){
	$("#main").css("width","1000");
	$("#test").text("横幅ok" + $("#main").width());
}else{
	$("#main").css("width","1000");
	$("#test").text("横幅ng" + $("#main").width());
}

//$(".fixed").css("width":$("#main").width())

});
	}

function init(){

//mainの幅を初期化
$(function(){
var w = window.innerWidth ? window.innerWidth : $(window).width();

//if(w > 1000){
//	$("#main").css("width","1000");
//	$("#test").text("横幅ok" + $("#main").width());
//}else{
//	$("#main").css("width",w);
//	$("#test").text("横幅ng" + $("#main").width());
//}
});

//

}

init();
menu();
mainwidth();
