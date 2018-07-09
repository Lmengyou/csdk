$(function(){
	var zoom=$('.shop .left .zoom')
    var spana=$('.shop .left .top span')
    var wrap=$('.shop .left .top')
    $('.shop .left .top').mousemove(function(ev){
    	zoom.show()
    	var l=ev.pageX-wrap.offset().left-spana.outerWidth()/2
		var t=ev.pageY-wrap.offset().top-spana.outerHeight()/2
		if(l<0)l=0
		if(t<0)t=0
		if(l>wrap.width()-spana.outerWidth()){l=wrap.width()-spana.outerWidth()}
		if(t>wrap.height()-spana.outerHeight()){t=wrap.height()-spana.outerHeight()}
		spana.show().css({
			'left':l,
			'top':t
				})
		$('.zoom img').css({
			'left':-l*4,
			'top':-t*4
		})
    })
    wrap.mouseleave(function(){
		zoom.hide()
		spana.hide()
	})
    
    var btna=$('.shopp .mid .midd .zhong .aa .b1 li')
    var btnb=$('.b2 li')
    var btnc=$('.b3 li')
    var price=$('.shopp .mid .midd .shang .scale em')
    var indexa=0
    var indexb=0
    console.log(btna.size())
  btna.click(function(){
  	indexa=$(this).index()
  	$(this).addClass('ac').siblings().removeClass('ac')
  	var suiji=parseInt(Math.random()*50000+30000)
  	console.log(suiji)
  	if(indexa==1&&indexb==1){price.html(50007)
  	 }else if(indexa==1&&indexb==2){price.html(50009)
  	 }else if(indexa==1&&indexb==0){price.html(50008)
  	 }else if(indexa==2&&indexb==0){price.html(50002)
  	 }else if(indexa==2&&indexb==1){price.html(50056)
  	 }else if(indexa==2&&indexb==2){price.html(50456)
  	 }else if(indexa==0&&indexb==0){price.html(78945)
  	 }else if(indexa==0&&indexb==1){price.html(85241)
  	 }else if(indexa==0&&indexb==2){price.html(12345)
  	 }else if(indexa==3&&indexb==0){price.html(suiji)
  	 }else if(indexa==3&&indexb==1){price.html(suiji)
  	 }else if(indexa==3&&indexb==2){price.html(suiji)
  	 }
  })
   btnb.click(function(){
  	indexb=$(this).index()
  	var suiji=parseInt(Math.random()*50000+30000)
  	$(this).addClass('ac').siblings().removeClass('ac')
  	 if(indexa==1&&indexb==1){price.html(50007)
  	 }else if(indexa==1&&indexb==2){price.html(50009)
  	 }else if(indexa==1&&indexb==0){price.html(50008)
  	 }else if(indexa==2&&indexb==0){price.html(50002)
  	 }else if(indexa==2&&indexb==1){price.html(50056)
  	 }else if(indexa==2&&indexb==2){price.html(50456)
  	 }else if(indexa==0&&indexb==0){price.html(78945)
  	 }else if(indexa==0&&indexb==1){price.html(85241)
  	 }else if(indexa==0&&indexb==2){price.html(89345)
  	 }else if(indexa==3&&indexb==0){price.html(suiji)
  	 }else if(indexa==3&&indexb==1){price.html(suiji)
  	 }else if(indexa==3&&indexb==2){price.html(suiji)
  	 }else if(indexa==4&&indexb==0){price.html(suiji)
  	 }else if(indexa==4&&indexb==1){price.html(suiji)
  	 }else if(indexa==4&&indexb==2){price.html(suiji)
  	 }
  })
 btnc.click(function(){
  	$(this).addClass('ac').siblings().removeClass('ac')
  })
 var btn=$('.shop .left .bot ul li')
 var imga=$('.shop .left .top>img')
 var imgb= $('.shop .left .zoom>img')
 btn.click(function(){
 	var indexc=$(this).index()
 	console.log(indexc)
  	$(this).addClass('ac').siblings().removeClass('ac')
  	imga.eq(indexc).removeClass('hide').siblings().addClass('hide')
  	imgb.eq(indexc).removeClass('hide').siblings().addClass('hide')
  	num=indexc
 })
 	var num=0
 	var timer
 function runa(){
 	timer=setInterval(function(){

 	btn.eq(num).addClass('ac').siblings().removeClass('ac')
  	imga.eq(num).removeClass('hide').siblings().addClass('hide')
  	imgb.eq(num).removeClass('hide').siblings().addClass('hide')
  	num++
  	if(num==5)num=0
 },2000)
 }
 	runa()
 wrap.mouseenter(function(){
 	clearInterval(timer)
 })
 wrap.mouseleave(function(){
 	runa()
 })
 var add=$('.shopp .mid .midd .xia .zuo .right .a1')
 var jian=$('.shopp .mid .midd .xia .zuo .right .a2')
 var numa=parseInt($('.shopp .mid .midd .xia .zuo .left').html())
 var txt=$('.shopp .mid .midd .xia .zuo .left')
 add.click(function(){
 	console.log(1)
 	numa++
 	txt.html(numa)
 	
 })
  jian.click(function(){
 	numa--
 	if(numa<=1)numa=1
 	txt.html(numa)
 })
  
  
  //top
  var prevt=$('.shopp .rig .b1')
  var prevp=$('.shopp .rig .b2')
  var list=$('.shopp .rig .list .lista')
  var timero
  var numv=0
function mov(){
	  timero=setInterval(function(){
  	numv++
  	if(numv>list.children().size()/2){
  		list.css('top',0)
  		numv=1
  	}
  	list.animate({'top':-190*numv},500)
  },1000)
}
mov()
list.hover(function(){
   	clearInterval(timero)
},function(){
	mov()
})
  prevt.click(function(){
  	numv++
  	console.log(numv)
  	if(numv>list.children().size()/2){
  		list.css('top',0)
  		numv=1
  	}
  	list.animate({'top':-190*numv},500)
  })
   prevt.hover(function(){
   	clearInterval(timero)
   },function(){
   	mov()
   })
   
   
   var bt=$('.foot .top div')
   var oa=$('.foot .oa')
   var ob=$('.foot .ob')
   console.log(bt.size())
   bt.eq(0).click(function(){
   	$(this).removeClass('acc').siblings().addClass('acc')
   	 oa.removeClass('hide')
   	 ob.addClass('hide')
   })
   bt.eq(1).click(function(){
   	$(this).removeClass('acc').siblings().addClass('acc')
   	 ob.removeClass('hide')
   	 oa.addClass('hide')
   })
})
