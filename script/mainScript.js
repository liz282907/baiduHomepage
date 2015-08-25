$(function(){
	// $("#show_submenu")
	$('a:contains("设置")')
	.mouseover(function(event)
	{
		var sub = "<ul id='submenu'><li class='submenu_li'>搜索设置</li><li class='submenu_li'>高级搜索</li><li class='submenu_li'>关闭预测</li><li class='submenu_li'>搜索历史</li></ul>";
		$("body").append(sub);
		// if($('body').find('#submenu')) alert("find it");
		// else alert("not find");
		$("#submenu")
		.css({
			"position":"absolute",
			"top":(event.target.getBoundingClientRect().bottom+document.documentElement.scrollTop)+"px",
			"left":(event.target.getBoundingClientRect().left+document.documentElement.scrollLeft)+"px"})
		.show("slow");
		$('ul#submenu li').mouseover(function(){
			$(this).addClass("onhover").siblings().removeClass("onhover");
		}).mouseout(function(){
			$(this).removeClass("onhover");
		});


	})
	.mouseout(function(){
		$("#submenu").remove();
	})

})