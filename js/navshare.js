// var i=0;
// var closetimer = null;
// $(".navbar-toggle").on("click",function(){
//         i++;
//         closetimer = window.setTimeout(function(){
//         	if(i>1){
// 		        window.clearTimeout(closetimer);
// 		        closetimer = null;
// 		        $(".backgroundshadow").hasClass("hidden")
// 				? $(".backgroundshadow").removeClass("hidden")
// 				: $(".backgroundshadow").addClass("hidden")      
// 		        i=0;
// 		    }else{
// 			    $(".backgroundshadow").hasClass("hidden")
// 				? $(".backgroundshadow").removeClass("hidden")
// 				: $(".backgroundshadow").addClass("hidden")
// 				i=0;
// 				closetimer = null;
// 			}
//         },200);  
// })
$(".backgroundshadow").on("click",function(){
	$(".navbar-toggle").click()
})
$(window).scroll(function(){
	if($(document).scrollTop()>=30){
		$(".nav_box").addClass("fixnav")
		$("body").addClass("padtop")
	}else{
		$(".nav_box").removeClass("fixnav")
		$("body").removeClass("padtop")
	}
})