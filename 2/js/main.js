require.config({
	baseUrl : './js',  //相对路径以引入require的页面为基础
});

require(['selector'],function(query){
	var ele  = query(".wrapper");
	console.log(ele);
})