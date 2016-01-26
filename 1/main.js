require.config({
	paths : {
		jquery : 'jquery-1.12.0',
	}
});


require(['jquery'],function($){
	alert($().jquery)
})