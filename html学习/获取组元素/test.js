        window.onload=function()
{   
	var aDiv=document.getElementById('adiv1');
    var oDiv=aDiv.getElementsByTagName('div');
    var oBtn=document.getElementsByTagName('input');
    //以下代码用于使其变色
	oDiv[0].onclick=function()
	{		
	   for(var i=0;i<oDiv.length;i++)    //用for选取oDiv下的所有div
		 {oDiv[i].style.background='none';}         //使所有oDiv下的div恢复背景色
	for(var j=0;j<oDiv.length;j++)
		{oDiv[j].style.background='none';}
	    for(var k=0;k<oDiv.length;k++)
        {oDiv[k].style.background='#ECA7F5';}
	    var myarr=
	    [20,21,23,24,28,29,30,31,32,
	    33,34,37,38,39,40,41,42,43,47,48,
	    49,50,51,57,58,59,67];
			for(var l=0;l<myarr.length;l++)
		{
		  i=myarr[l]-9;
		  oDiv[i].style.background='red';
		}//从oDiv数组里获取第一个元素
    };

	oDiv[8].onclick=function()
	{
		for(var i=0;i<oDiv.length;i++)
		{oDiv[i].style.background='none';}
	    for(var m=0;m<oDiv.length;m++)
        {oDiv[m].style.background='#71E2F6';}
	    var myarr=
	    [20,21,23,24,28,29,30,31,32,
	    33,34,37,38,39,40,41,42,43,47,48,
	    49,50,51,57,58,59,67];
			for(var j=0;j<myarr.length;j++)
		{
		  i=myarr[j]-9;
		  oDiv[i].style.background='red';
		}
	};

	oDiv[63].onmouseover=function()
	{
		for(var i=0;i<oDiv.length;i++)
		{oDiv[i].style.background='none';}
	    oDiv[63].style.background='greenyellow';
	};

	oDiv[71].onmouseover=function()
	{
		for(var i=0;i<oDiv.length;i++)
		{oDiv[i].style.background='none';}
	    oDiv[71].style.background='blueviolet';
	};
	//以下代码作用是鼠标移出恢复原始颜色
	/*for(var i=0;i<oDiv.length;i++)
	{
		oDiv[i].onmouseleave=function()
		{
			for(var i=0;i<oDiv.length;i++)
            {oDiv[i].style.background='none';}
		}
	} */
	//以下函数用于筛选想要变色的div
	 oDiv[31].onmouseover=function () 
		{ var myarr=
	    [20,21,23,24,28,29,30,31,32,
	    33,34,37,38,39,40,41,42,43,47,48,
	    49,50,51,57,58,59,67];
		for(var j=0;j<myarr.length;j++)
		{
		  i=myarr[j]-9;
		  oDiv[i].style.background='red';
		} 
		};
	
	//以下函数用于给div标注序号
	function doNum()
	{
		for(i=0;i<oDiv.length;i++)
		{
 oDiv[i].innerHTML=i;
		}
	}
	doNum();
};
	