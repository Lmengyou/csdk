// JavaScript Document


documentReady(function(){
	
	(function(){
		var list_nav=document.getElementById("list_nav");
		var navLi=list_nav.getElementsByTagName('li');
		var popup=document.getElementById("focus_popup");
		var popupLi=popup.getElementsByClassName("first");
		
		var times=null;   
		///操作导航
		for(var i=0; i<navLi.length; i++){
			navLi[i].index=i;       //发牌照
			//导航 enter事件--------------------------
			navLi[i].onmouseenter=function(){
				//清定时器
				clearTimeout(times);
				//清除所有class
				for(var j=0; j<navLi.length; j++){
					navLi[j].className='';
					popupLi[j].style.display='none';           //隐藏二级子导航
				};
				//给自己加上class
				this.className='active';
				popup.style.display='block';        //显示二级导航
				popupLi[this.index].style.display='block';      //显示二级子导航
			};
			
			//导航 leave事件---------------
			navLi[i].onmouseleave=function(){
				//clearTimeout(times);
				var $this=this;
				//定时器
				times=setTimeout(function(){
					$this.className='';
					popup.style.display='none';
					popupLi[$this.index].style.display='none';
				},100);
			};	
		};
		//二级导航 enter
		popup.onmouseenter=function(){
			clearTimeout(times);
			this.style.display='block';
		};
		//二级导航 leave
		popup.onmouseleave=function(){
			this.style.display='none';
			for(var i=0; i<navLi.length; i++){
				navLi[i].className='';
			};
		};
	})();
	
	////banner 轮插图-----------------
	(function(){
		
		var oBanner=document.getElementById('banner');
		
		slide(oBanner);
		//封装---------------
		function slide(obj,showNum){
			var aImg=obj.getElementsByTagName('img');
			var lA=document.getElementById("left_icon");
			var rA=document.getElementById("right_icon");
			var iNow=0; 
			
			//根据图片插入ol
			var ol=document.createElement('ol');
			for(var i=0; i<aImg.length; i++){
				ol.innerHTML+="<li>"+(showNum ? i+1 :"")+"</li>";
			};
			obj.appendChild(ol);
			ol.children[0].className='active';
			var aBtn=ol.children;
							
			//图显示
			for(var i=0; i<aImg.length; i++){
				aImg[i].style.display='none';
				aImg[0].style.display='block';
				aImg[0].style.opacity=1;
				aImg[i].index=i;
			};
			
			//左右按钮onclick
			lA.onclick=function(){
				//clearInterval(obj.timer_s);
				iNow--;
				if(iNow<0)iNow=aImg.length-1;
				run(iNow);
			};
			rA.onclick=function(){
				//clearInterval(obj.timer_s);
				iNow++;
				if(iNow>=aImg.length)iNow=0;
				run(iNow);
			};
			//按钮切换-----------
			for(var i=0; i<aBtn.length; i++){
				aBtn[i].index=i;
				aBtn[i].onmouseenter=function(){
					clearInterval(obj.timer_s);
					//判断this是否被选中
					if(this.className=='active'){}
					else{
						run(this.index);
						iNow=this.index;
					};
				};
			};
			
			//切换图片
			function run(n){
				for(var j=0; j<aImg.length; j++){
					aImg[j].style.display='none';
					aBtn[j].className='';
				};
				aImg[n].style.display='block';
				aImg[n].style.opacity=0.3;
				qise_tools.move(aImg[n],{'opacity':100},'normal');
				aBtn[n].className='active';
			};
			
			//自动运行-----------------------------------------
			function autorun(){
				obj.timer_s=setInterval(function(){
					iNow++;
					if(iNow==aImg.length)iNow=0;
					run(iNow);
				},2000);
			};
			autorun();
			
			//鼠标移入显示--------
			function run_1(){
				clearInterval(obj.timer_s);
				lA.style.display='block';
				lA.style.zIndex=3;
				rA.style.display='block';
				rA.style.zIndex=3;
			};
			
			
			//鼠标移入显示左右按钮
			//鼠标移入停止---
			obj.onmouseenter=function(){
				run_1();
			};
			//鼠标移入停止---
			obj.onmousemove=function(){
				run_1();
			};
			//鼠标移出继续--
			obj.onmouseleave=function(){
				lA.style.display='none';
				lA.style.zIndex='auto';
				rA.style.display='none';
				rA.style.zIndex='auto';
				autorun();
			};
			
		};
	})();
	
	
	//--------1楼层 切换--------------
	(function(){
		var page1=document.getElementById('page1');
		
		var oUl=page1.getElementsByClassName('nav')[0];
		var aLi=oUl.getElementsByTagName('li');
		//mc
		var oMain=page1.getElementsByClassName('main_wrap')[0];
		var mainLi=oMain.getElementsByClassName('li');
		
		//判断
		for(var i=0; i<aLi.length; i++){
			aLi[i].index=i;
			aLi[i].onmouseover=function(){
				for(var j=0; j<aLi.length; j++){
					aLi[j].className='';
					mainLi[j].style.display='none';
				};
				this.className='active';
				mainLi[this.index].style.display='block';
			};
		};	
	})();
	
	///楼层提示--------------------------------------------
	(function(){
		var page_nav=document.getElementById('jd_elevator');
		var navLi=page_nav.getElementsByTagName('li');
		var allPage=document.getElementsByClassName('public');
		
		//自己的offsetTop
		for(var i=0; i<allPage.length; i++){
			//allPage[i].top=allPage[i].offsetTop;
			navLi[i].newClass=navLi[i].className;
		};
		///根据滚动条  判断楼层nav显示-----------
		window.onscroll=function(){
			var scrolltop=document.documentElement.scrollTop || document.body.scrollTop;
			if(scrolltop>900){
				page_nav.style.display='block';
			}else{
				page_nav.style.display='none';
			};
			
			//判断自己的offsetTop和scrolltop
			for(var i=0; i<navLi.length; i++){
				if(allPage[i].offsetTop<scrolltop+700){
					for(var j=0; j<navLi.length; j++){
						navLi[j].className=navLi[j].newClass;
					};
					navLi[i].className=qise_tools.addClass(navLi[i],'active');
				};
			};
		};
		
		var timer=null;
		//楼层nav onclick事件
		for(var i=0; i<navLi.length; i++){
			navLi[i].index=i;
			//点击每个navLi
			navLi[i].onclick=function(){
				clearInterval(timer);
				var $this=this;
				//定时器
				timer=setInterval(function(){
					//滚动条
					var scrolltop=document.documentElement.scrollTop || document.body.scrollTop;
					//计算步长
					var speed=(allPage[$this.index].offsetTop-scrolltop)/4;
					//判断
					if(speed>0){
						speed=Math.ceil(speed);
					}else{
						speed=Math.floor(speed);
					};
					console.log(speed)
					//赋值
					window.scrollTo(0,scrolltop+speed);
					//判断停止定时器
					if(speed===0){
						clearInterval(timer);
					};
				},30);
			};
		};
	})();
	



});
