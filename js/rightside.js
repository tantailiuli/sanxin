var freq = 0;
$("#sidehelp").click(function(){
	freq^=1;
	freq && $(".rightside").addClass("visibel")
	freq || $(".rightside").removeClass("visibel")
});
$("#backtotop").click(function(){
	$("#sidehelp").click()
    $('body,html').animate({
      scrollTop: 0
    },500);
    return false;
});