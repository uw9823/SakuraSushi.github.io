AOS.init(1200);

$('nav#primary a').removeClass('active');
	if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
		$('nav#primary a.logo').addClass('active');
	} else if ($(document).scrollTop() >= logo && $(document).scrollTop() < nigiri){
		$('nav#primary a.nigiri').addClass('active');
	} else if ($(document).scrollTop() >= nigiri && $(document).scrollTop() < sashimi){
		$('nav#primary a.sashimi').addClass('active');
	} else if ($(document).scrollTop() >= sashimi && $(document).scrollTop() < maki){
		$('nav#primary a.maki').addClass('active');
	} else if ($(document).scrollTop() >= maki && $(document).scrollTop() < uramaki){
		$('nav#primary a.uramaki').addClass('active');
	} else if ($(document).scrollTop() >= uramaki && $(document).scrollTop() < temaki){
		$('nav#primary a.temaki').addClass('active');
	}
