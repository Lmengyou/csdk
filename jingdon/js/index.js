$(function(){
	//侧栏
	var pop=$('.banner .warp .popup')
	var btns=$('.banner .warp .nav_list li')
	var cate=$('.banner .popup .cate_part')
	var font=$('.banner .nav_list li a')
	var indexd;
	btns.mouseenter(function(){
		indexd=$(this).index()
	   $(this).addClass('accc').siblings().removeClass('accc')
	   pop.show()
	   cate.eq(indexd).css('display','block').siblings().css('display','none')
	})
	btns.mouseleave(function(){
		indexd=$(this).index()
		$(this).removeClass('accc')
	    pop.hide()
		cate.eq(indexd).css('display','none')
	})
	pop.mouseenter(function(){
		btns.eq(indexd).addClass('accc').siblings().removeClass('accc')
		$(this).show()
	    cate.eq(indexd).css('display','block').siblings().css('display','none')
	})
	pop.mouseleave(function(){
		$(this).hide()
		cate.css('display','none')
		btns.removeClass('accc')
	})


   //滚动条
	var wrapp=$('.wrapp')
	var aside=$('.fin_nav .asideList')
	var flor=$('.wrapp .floorr')
	$(window).scroll(function(){
		var scrtop=$(window).scrollTop()
		if(scrtop>1150){
			aside.slideDown(300)
		}else{
			aside.slideUp(300)
		}
		flor.each(function(i){
			var t=$(this).offset().top-scrtop
           if(t<300){
           	$('.fin_nav .asideList li a').removeClass('acccc')
			$('.fin_nav .asideList li').eq(i).find('a').addClass('acccc')
           }
		})
	})
	$('.fin_nav .asideList li').click(function(){
		var t=flor.eq($(this).index()).offset().top
		$('html,body').animate({'scrollTop':t},500)
	})
	
	
	//轮播图
	var btna=$('.banner .quan .dian')
	var pica=$('.banner .b_mid')
	var numc=0
	var prevb=$('.banner .lunbo .prevBtn')
	var prevn=$('.banner .lunbo .nextBtn')
	var lunbo=$('.banner .lunbo')
	var timerc;
	
	btna.click(function(){
		$(this).addClass('ae').siblings().removeClass('ae')
		pica.eq($(this).index()).fadeIn().siblings().fadeOut()
		numc=$(this).index()
	})
	prevb.click(function(){
		if(numc==-1)numc=btna.length-1
		btna.eq(numc-1).addClass('ae').siblings().removeClass('ae')
		pica.eq(numc-1).finish().fadeIn()
		pica.eq(numc).finish().fadeOut()
		numc--
	})
	prevn.click(function(){
		if(numc==btna.length-1)numc=-1
		btna.eq(numc+1).addClass('ae').siblings().removeClass('ae')
		pica.eq(numc+1).finish().fadeIn()
		pica.eq(numc).finish().fadeOut()
		numc++
	})
    function movea(){
    		timerc=setInterval(function(){
			if(numc==btna.length-1)numc=-1
			btna.eq(numc+1).addClass('ae').siblings().removeClass('ae')
			pica.eq(numc+1).finish().fadeIn()
			pica.eq(numc).finish().fadeOut()
			numc++
	},2000)
    }
    movea()
    lunbo.mouseenter(function(){
    	clearInterval(timerc)
    })
    lunbo.mouseleave(function(){
    	movea()
    })
    
    //时钟
    var cvs=document.getElementById("cvs")
    var ctx=cvs.getContext('2d')
    var x0=105;
	var y0=56;
	var r=32;
	function intLine(){
		var numd=0;
		function initwatch(){
			var deg=Math.PI*2/60*numd
			var x1=x0+Math.cos(deg)*r
			var y1=y0+Math.sin(deg)*r
			if(numd%5==0){
				var len=5;
				ctx.lineWidth=2;
				ctx.lineJoin='round'
				ctx.strokeStyle='white'
			}
			var x2=x0+Math.cos(deg)*(r-len)
			var y2=y0+Math.sin(deg)*(r-len)
			ctx.beginPath()
			ctx.moveTo(x2,y2)
			ctx.lineTo(x1,y1)
			ctx.closePath()
			ctx.stroke()
			numd++
		}
		for(var i=0;i<60;i++){
			initwatch()
		}
	}
	intLine()
	function second(){
			var time=new Date()
			var s=time.getSeconds()
			var deg=Math.PI*2/60*s-Math.PI/2
			var x1=x0+Math.cos(deg)*(r-11)
			var y1=y0+Math.sin(deg)*(r-11)
			ctx.beginPath()
			ctx.lineWidth=1
			ctx.strokeStyle='white'
			ctx.lineJoin='round'
			ctx.moveTo(x0,y0)
			ctx.lineTo(x1,y1)
			ctx.closePath()
			ctx.stroke()
			
			var m=time.getMinutes()+s/60
			var deg=Math.PI*2/60*m-Math.PI/2
			var x1=x0+Math.cos(deg)*(r-12)
			var y1=y0+Math.sin(deg)*(r-12)
			ctx.beginPath()
			ctx.lineWidth=2
			ctx.strokeStyle='white'
			ctx.lineJoin='round'
			ctx.moveTo(x0,y0)
			ctx.lineTo(x1,y1)
			ctx.closePath()
			ctx.stroke()
			
			var h=time.getHours()+m/60
			var deg=Math.PI*2/12*h-Math.PI/2
			var x1=x0+Math.cos(deg)*(r-14)
			var y1=y0+Math.sin(deg)*(r-14)
			ctx.beginPath()
			ctx.lineWidth=3
			ctx.strokeStyle='white'
			ctx.lineJoin='round'
			ctx.moveTo(x0,y0)
			ctx.lineTo(x1,y1)
			ctx.closePath()
			ctx.stroke()
			ctx.strokeStyle='black'
			
			ctx.beginPath()
			ctx.strokeStyle='white'
			ctx.lineWidth=3
			ctx.arc(x0,y0,34,0,Math.PI*2)
			ctx.closePath()
			ctx.stroke()
			
			ctx.beginPath()
			ctx.fillStyle='white'
			ctx.arc(x0,y0,4,0,Math.PI*2)
			ctx.closePath()
			ctx.fill()
			
			
			
	}
		setInterval(function(){
			ctx.clearRect(0,0,cvs.width,cvs.height)
			intLine()
			second()
		},1000)
   /*ctx.beginPath()
	ctx.strokeStyle='white'
	ctx.lineWidth=3
	ctx.arc(x0,y0,42,0,Math.PI*2)
	ctx.closePath()
	ctx.stroke()*/
	
	
	
	//换一批
	var pa=$('.pagea .pga_top p')
	var pgam=$('.pagea .pga_mid')
	var numf=1
	var imga=$('.pagea .pga_mid img')
	pa.click(function(){
		pgam.eq(numf).addClass('hide').siblings().removeClass('hide')
		numf--
		if(numf==-1)numf=1
	})
    imga.each(function(){
    	$(this).mouseenter(function(){
    		$(this).css({
    			'transform':' scale(1.1)',
    		})
    	})
    	$(this).mouseleave(function(){
    		$(this).css({
    			'transform':' scale(1)',
    		})
    	})
    })
   
   
   var imgb=$('.pagea .pga_bot .big_box img')
   console.log(imgb.size()) 
    imgb.each(function(){
    	$(this).mouseenter(function(){
    		$(this).css({
    			'position':'absolute',
    			'left':-15,
    		})
    	})
    	$(this).mouseleave(function(){
    		$(this).css({
    			'position':'absolute',
    			'left':0,
    		})
    	})
    })
    
    var allw=$('.pageb .allw .main')
    var btns=$('.pageb .head li')
    var imgc=$('.pageb .allw .main img')
    btns.click(function(){
    	var indexg=$(this).index()
    	allw.eq(indexg).show().siblings().hide()
    })
    imgc.each(function(){
    	$(this).mouseenter(function(){
    		$(this).css({
    			'position':'absolute',
    			'left':-15,
    		})
    	})
    	$(this).mouseleave(function(){
    		$(this).css({
    			'position':'absolute',
    			'left':0,
    		})
    	})
    })
    
    var allwa=$('.pagec .allwa .pgc_mid')
    var btnsa=$('.pagec .head li')
    var imgd=$('.pagec .allwa .pgc_mid img')
     btnsa.click(function(){
    	var indexh=$(this).index()
    	allwa.eq(indexh).show().siblings().hide()
    })
    imgd.each(function(){
    	$(this).mouseenter(function(){
    		$(this).css({
    			'transform':' scale(1.05)',
    		})
    	})
    	$(this).mouseleave(function(){
    		$(this).css({
    			'transform':' scale(1)',
    		})
    	})
    }) 
    
    var allwb=$('.paged .allwb .pgd_mid')
    var btnsb=$('.paged .head li')
    var imge=$('.paged .allwb .mid_m img')
    var imgf=$('.paged .allwb .mid_r img')
     btnsb.click(function(){
    	var indexi=$(this).index()
    	allwb.eq(indexi).show().siblings().hide()
    })
    imge.each(function(){
    	$(this).mouseenter(function(){
    		$(this).css({
    			'position':'absolute',
    			'left':-15,
    		})
    	})
    	$(this).mouseleave(function(){
    		$(this).css({
    			'position':'absolute',
    			'left':0,
    		})
    	})
    }) 
    imgf.each(function(){
    	$(this).mouseenter(function(){
    		$(this).css({
    			'position':'absolute',
    			'left':-15,
    		})
    	})
    	$(this).mouseleave(function(){
    		$(this).css({
    			'position':'absolute',
    			'left':0,
    		})
    	})
    }) 
    
    //12f
    var gund=$('.pg12 .you .gund')
    var sp=0
    var timerf
    console.log(gund.height())
    function runn(){
	timerf=setInterval(function(){
    	sp-=2
    	if(18+sp==-372)sp=0
    	gund.css('top',18+sp+'px')
    },30)
    }
    runn()
    gund.hover(function(){
    	clearInterval(timerf)
    },function(){
    	runn()
    })
  //add  
    var topyi=$('.banner .b_right .icon ul .topyi')
    var lip=$('.banner .b_right .icon .lipz .lip')
    var spann=$('.banner .b_right .icon ul span')
    var spn=$('.banner .b_right .icon .lip span')
    var flag=true
    topyi.each(function(){
    	var indexh=$(this).index()
    		$(this).mouseenter(function(){
    			if(!flag)return
    		if(flag){
    			flag=false
	    		topyi.animate({'top':-40},100)
	    		lip.eq(indexh).show().siblings().hide()
	    		lip.eq(indexh).animate({'top':40},500)
    			spann.eq(indexh).addClass('spann')
    			}
    		})
    	spn.click(function(){
    		topyi.animate({'top':0},1)
    		lip.eq(indexh).animate({'top':280},500)
    		spann.eq(indexh).removeClass('spann')
    		flag=true
    	})
    })
    
    var loo=$('.loo .fin_navb i')
    var btnn=$('.loo .fin_navb')
    btnn.each(function(){
		var indexl=$(this).index()
    	$(this).find('a').mouseenter(function(){
	    	loo.eq(indexl).css({
	    		'width':64+'px',
	    		'background':'#ca1622'
	    	})
	    	$(this).css('background','#ca1622')
    	})
    	$(this).find('a').mouseleave(function(){
	    	loo.eq(indexl).css({
	    		'width':0+'px',
	    	})
	    	$(this).css('background','#5C5251')
    	})
    })
   var ftop=$('.u6') 	
    ftop.click(function(){
		$('html,body').animate({'scrollTop':0},1000)
    })
    
    //10F
    
    var allwp=$('.pg6_mid .pg10_right .allwp .bot')
    var allwo=$('.pg6_mid .pg10_right .allwp')
    console.log(allwp.position().top)
    var timeq
    var nump=0
    function mov(){
    	timeq=setInterval(function(){
    	nump-=1
    	if(nump<=-440)nump=0
    	allwp.css('top',nump)
    },30)
    }
    mov()
    allwo.mouseenter(function(){
    	clearInterval(timeq)
    })
   allwo.mouseleave(function(){
   		mov()
    })
})
