$(document).ready(function(){	
	var x=0;			
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

 									/*конец начальных установок*/

 	$("input").focus(function(){	//инпут под фокусом
 		$("input").removeClass("onblur_input").addClass("onfocus_input");
 		$(".input_image").show();

 		$("input").mousemove(function(event){	//ловим координату х по инпуту
			var pos = $(this).offset();
			var elem_left = pos.left.toFixed(0);
			x = event.pageX - elem_left;
			$("#coords").html('Coords:' + x);
		});	
			$("input").click(function(){
				if(x > 218){
					//alert('aa');
					$("input").val("");
					$("input").blur();
				}
			});

		if($("input").attr("placeholder") != 'Найти'){
			$("input").val($("input").attr("placeholder"));
 			$("input").attr("placeholder",'Найти'); 
 		}
	});

	$("input").blur(function(){		//инпут без фокуса
 		$("input").removeClass("onfocus_input").addClass("onblur_input");
 		$(".input_image").hide();

 		if($('input').val()!=''){
 			$("input").attr("placeholder",$('input').val()); 
 			$("input").val("");
 		}
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

 	$(".compas").click(function(){
 		window.location.href = 'https://www.instagram.com/explore/';
 	});
 	$(".logo1").click(function(){
 		window.location.href = 'https://www.instagram.com/';
 	});
 	$(".logo2").click(function(){
 		window.location.href = 'https://www.instagram.com/';
 	});
 	$(".man").click(function(){
 		window.location.href = 'https://www.instagram.com/prorok.moisey/';
 	});

});