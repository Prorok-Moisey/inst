$(document).ready(function(){				
									/*начальные установки*/
 	$("input").addClass("onblur_input");
 	$(".input_image").hide();
 	if ($(window).width() < 500){
 			$("input").hide();
 	}
 	if ($(window).width() < 650){
 		$(".logo2").hide();
 	}
 	if ($(window).width() < 720){			//all sizes at small window
 			$(".main_style").attr('href','inst_small.css');
 			$(".info_links").hide();
 			$(".info_links_small").show();
 			$(".info_description").hide();
 			$(".info_description_small").show();
 			$(".delitel_text").hide(); 			
 	}
 	else{
 			$(".main_style").attr('href','inst.css');
 			$(".info_links").show();
 			$(".info_links_small").hide();
 			$(".info_description").show();
 			$(".info_description_small").hide();
 			$(".delitel_text").show();
 	}
 	alert($(document).outerHeight(true));
 									/*конец начальных установок*/
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

 	$(window).scroll(function(){				//уменьшение фиксированного хэдера при скроле
 		if($(this).scrollTop()>1){
 			$(".header, .header_fixed").addClass("header_scroll");
 			$(".logo2").animate({'opacity':'0'},0.4);
 		}
 		else{
 			$(".header, .header_fixed").removeClass("header_scroll");
 			$(".logo2").animate({'opacity':'1'},0.4)
 		}
 	// добавление картиночек
 	//	if($(window).height() - $(window).scrollTop()<30){
 	//		alert('пора загрузиться');
 			//$('.trio').appendTo('.photos');
 	//	}

 	});

 	$(window).resize(function(){				//изменение ширины
 		if ($(window).width() < 840){			//footer
 			$(".footer__string, .links").addClass("text_center");
 		}
 		else{
 			$(".footer__string, .links").removeClass("text_center");
 		}

 		if ($(window).width() < 650){			//header fixed
 			$(".logo2").hide(400);
 		}
 		else{
 			$(".logo2").show(400);	
 		}
 		
 		if ($(window).width() < 500){
 			$("input").hide(400);
 		}
 		else{
 			$("input").show(400);	
 		}

 		if ($(window).width() < 400){
 			$(".normal_weight").addClass('width1');
 			$(".follow").addClass('width');
 		}
 		else{
 			$(".normal_weight").removeClass('width1');
 			$(".follow").removeClass('width');
 		}

 		if ($(window).width() < 720){			//all sizes at small window
 			$(".main_style").attr('href','inst_small.css');
 			$(".info_links").hide();
 			$(".info_links_small").show();
 			$(".info_description").hide();
 			$(".info_description_small").show();
 			$(".delitel_text").hide();

 			 			
 		}
 		else{
 			$(".main_style").attr('href','inst.css');
 			$(".info_links").show();
 			$(".info_links_small").hide();
 			$(".info_description").show();
 			$(".info_description_small").hide();
 			$(".delitel_text").show();
 			
 		}

 	});

});