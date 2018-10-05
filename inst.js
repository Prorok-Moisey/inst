$(document).ready(function(){
 	$("input").addClass("onblur_input");
 	$(".input_image").hide();

 	$("input").blur(function(){
 		$("input").removeClass("onfocus_input").addClass("onblur_input");//инпут без фокуса
 		$(".input_image").hide();
 	});

 	$("input").focus(function(){
 		$("input").removeClass("onblur_input").addClass("onfocus_input");//инпут под фокусом
 		$(".input_image").show();
 	});

 	$(".input_image").click(function(){//нажатие на крестик
 		alert('asdfg');
 		$("input").reset();
 	});
 	
 	$(window).scroll(function(){
 		if($(this).scrollTop()>1){
 			$(".header").addClass("header_scroll");
 			$(".header_fixed").addClass("header_scroll");
 			//$(".logo2").hide();
 			$(".logo2").addClass("logo2_scroll");
 		}
 		else{
 			$(".header").removeClass("header_scroll");
 			$(".header_fixed").removeClass("header_scroll");	
 			//$(".logo2").show();
 			$(".logo2").removeClass("logo2_scroll");
 		}
 	});
});