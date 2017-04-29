$(document).ready(function() {
    //列表hover：
    $(".item_list ul li,.list_detail").hover(function() {
        $(".list_detail").eq($(this).index()).show();
    }, function() {
        $(".list_detail").hide();
    });
    //轮播图：
    /*var i = 1;

    function prev() {
        if (i == 1) {
            i = 6;
        }
        i--;
        $(".ad_hr a img").attr("src", "images/ad_hr00" + i + ".png");
    }

    function next() {
        if (i == 5) {
            i = 0;
        };
        i++;
        $(".ad_hr a img").attr("src", "images/ad_hr00" + i + ".png");
    };
    $(".next").click(next);
    $(".prev").click(prev);
    $(".next,.prev").hover(function() {
        $(this).css("opacity", "0.8");
    }, function() {
        $(this).css("opacity", "0.5");
    });
    setInterval(next, 5000);*/


    //轮播图片（方法二  优先）
    $(".ad_hr a img").hide();      //开始先将div中的所以图片隐藏；
    $(".ad_hr a img").eq(0).show();   //留下第一张作为初始图片；
    var num1 = 0;                    //定义要显示图片的索引号；
    //////定时器自动轮播
    timer=setInterval(next,4000);
    //////下一张函数
    function next() {
        clearInterval(timer)                       //先清除之前的定时器，以免点击的时候还在轮播
        if (num1 < $(".ad_hr a img").length-1) {  //判断是否不是最后一张图片
            num1++;                               //初始变量加1，代表下一张的索引号
            $(".ad_hr a img").fadeOut();           //先将所有图片隐藏
            $(".ad_hr a img").eq(num1).fadeIn(); //留下要显示的图片显示
        }else{                                 //这里else值得就是当时最后一张图的时候
            num1=0;                           //变量值回到第一张图片的索引号
            $(".ad_hr a img").fadeOut();
            $(".ad_hr a img").eq(num1).fadeIn();
        }
        timer=setInterval(next,4000);
    }
      ////上一张函数
    function prev() {
        clearInterval(timer)
        if (num1 > 0) {                       //判断是否不是第一张图片
            num1--;
            $(".ad_hr a img").fadeOut();      
            $(".ad_hr a img").eq(num1).fadeIn();
        }else{                                  //此时else代表此刻第一张图为显示状态
            num1=$(".ad_hr a img").length-1;      //后退到最后一张图的索引号
            $(".ad_hr a img").fadeOut();
            $(".ad_hr a img").eq(num1).fadeIn();
        }
        timer=setInterval(next,4000);
    }   
    $(".next").click(next);
    $(".prev").click(prev);

    
});
