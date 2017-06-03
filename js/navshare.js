$(".navbar-toggle").on("click",function(){
	$(".backgroundshadow").hasClass("hidden")
	? $(".backgroundshadow").removeClass("hidden")
	: $(".backgroundshadow").addClass("hidden")
})
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