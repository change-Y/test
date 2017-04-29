        window.onload=function()
	{   
		var aDiv=document.getElementById('adiv1')
        var oDiv=aDiv.getElementsByTagName('div')
        var oBtn=document.getElementsByTagName('input')
        //以下代码用于使其变色
		oBtn[0].onclick=function()
		{			
			setInterval(Timer(),5000)
		}
		function Timer()
		{   function Now()
		   {		
		   for(var i=0;i<oDiv.length;i++)    //用for选取oDiv下的所有div
		   {
		   oDiv[i].style.background='none';     //使所有oDiv下的div恢复背景色
		   }
		   oDiv[0].style.background='deeppink';//从oDiv数组里获取第一个元素
	       }
		   setTimeout(Now(),1000);
	       Now();
	      setTimeout(
			function()
		   {		
		   for(var i=0;i<oDiv.length;i++)    //用for选取oDiv下的所有div
		   {
		   oDiv[i].style.background='none';     //使所有oDiv下的div恢复背景色
		   }
		   oDiv[1].style.background='deepskyblue';//从oDiv数组里获取第一个元素
	       },2000);
	       setTimeout(
			function()
		   {		
		   for(var i=0;i<oDiv.length;i++)    //用for选取oDiv下的所有div
		   {
		   oDiv[i].style.background='none';     //使所有oDiv下的div恢复背景色
		   }
		   oDiv[2].style.background='greenyellow';//从oDiv数组里获取第一个元素
	       },3000);
	       setTimeout(
			function()
		   {		
		   for(var i=0;i<oDiv.length;i++)    //用for选取oDiv下的所有div
		   {
		   oDiv[i].style.background='none';     //使所有oDiv下的div恢复背景色
		   }
		   oDiv[3].style.background='orange';//从oDiv数组里获取第一个元素
	       },4000);
		}	
		oBtn[1].onclick=function(){
			clearTimeout
			for(i=0;i<oDiv.length;i++){
			oDiv[i].style.background='none';	
			}
		}		
	}
	