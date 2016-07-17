var articleCount = 0;
var tempArticle;

function begin(){
loadMore();
}

begin();

function loadMore(){
	// get a random number from 1 to 10
	if (articleCount < 100){
	var min = 1;
	var max = 10;
	var rand = Math.floor(Math.random() * (min - max)) + max;
	// create as many new articles as the random number
	for (var i = 0; i < rand; i++) {
		articleCount++;
		buildArticle(articleCount);
		$('.content').html($('.content').html() + tempArticle);
	}
}
}

function buildArticle(n){
	var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
	tempArticle = '<div style="width:100%;background-color:'+randomColor+'"><h1>';
	tempArticle += 'Story #'+n;
	tempArticle += '</h1><h2>loaded randomly</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>';
}
$(window).scroll(function () { 
    //You've scrolled this much:
    	var val = $('.loader').position().top;
    	var scal = $(window).scrollTop();
    	scal = scal+ 488;
       //$('.loader').text( scal + " "+val+"pixels");

       // find the difference 
       var dif = scal - val;
    if ((dif < 10)&&(dif > -10)){
    	loadMore();
    }
});
