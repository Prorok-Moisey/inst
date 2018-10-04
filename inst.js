$(document).ready(function(){
 	$("input").addClass("onblur_input");
 	$(".input_image").hide();

 	$("input").blur(function(){
 		$("input").removeClass("onfocus_input").addClass("onblur_input");
 		$(".input_image").hide();
 	});

 	$("input").focus(function(){
 		$("input").removeClass("onblur_input").addClass("onfocus_input");
 		$(".input_image").show();
 	});

 	$(".input_image").click(function(){
 		alert('asdfg');
 		$("input").reset();
 	});
 	
});