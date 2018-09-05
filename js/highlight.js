$(document).ready(function(){

	var str=location.href.toLowerCase();

	$("#nav li a").each(function() {
		if (str.indexOf(this.href.toLowerCase()) > -1) {
			$("li.current").removeClass("current");
			$(this).parent().addClass("current");
		}
	});
	$("li.current").parents().each(function(){
		if ($(this).is("li")){
			$(this).addClass("current");
		}
	});

	$("#nav").hover(
	  	function () {
	    	$("li.current").removeClass("current");
	  	},
	  	function () {

	    	var str=location.href.toLowerCase();

			$("#nav li a").each(function() {
				if (str.indexOf(this.href.toLowerCase()) > -1) {
					$("li.current").removeClass("current");
					$(this).parent().addClass("current");
				}
			});

			$("li.current").parents().each(function(){
				if ($(this).is("li")){
					$(this).addClass("current");
				}
			});
	  	}
	);
})