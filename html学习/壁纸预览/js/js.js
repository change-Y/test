$(document).ready(function(){
	$(".large>img").hide();//现将全部图片隐藏；
	$(".large>img").eq(5).show();//初始背景图显示；
	$(".large ul li").hover(function() {
		$(this).children('img').css("opacity","0.9")//改变当前hover的img的透明度
		if($(".large>img").eq($(this).index()).is(':hidden')){//判断当前是否为隐藏的，防止对已显示的图片加淡出效果；
		$(".large>img").fadeOut(400);//以显示的图片淡出
		$(".large>img").eq($(this).index()).fadeIn(800);//hover对应的图片淡入
		}
	},function(){
		$(this).children('img').css("opacity","0.5")//恢复当前hover的透明度；
	});
});	
