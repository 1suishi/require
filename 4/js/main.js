require.config({
	baseUrl : './js',  //相对路径以引入require的页面为基础
});

require(['selector', 'event'], function($, E) {
    var els = $('.test');
    for (var i=0; i<els.length; i++) {
        E.bind(els[i], 'click', function() {
            alert(this.innerHTML);
        });
    }
});