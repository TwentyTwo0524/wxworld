$(function(){
	$.getJSON("JSON/goods_scroll.json",function(data){
		for(var i=0;i<data.length;i++){
			var obj=data[i];
			var li=$("<li></li>")
			var a=$("<a href=''><img src="+obj.img+" title="+obj.title+"><p>"+obj.name1+"<br/>"+obj.name2+"</p></a>")
			var div=$("<div class='c_gray'>"+obj.state+"</div>")
			li.append(a,div)
			$(".goods_scroll_ul").append(li)
		}
		var slide=$(".goods_scroll_ul");
		var goods=$(".goods_scroll_ul li")
		
		goods.eq(0).clone().appendTo(slide)
		goods.eq(1).clone().appendTo(slide)
		goods.eq(2).clone().appendTo(slide)
		goods.eq(3).clone().appendTo(slide)
		goods.eq(4).clone().appendTo(slide)
		var size=$(".goods_scroll_ul li").length;
		//console.log(size)
		
		var index=0;
		var timer=setInterval(function(){
			index++;
//			console.log(index)
			move()
		},3500)
		
		function move(){
			if(index>=size-4){
				slide.css("left",0);
				index=1;//即将移到第二张
			}
			if(index<0){
				slide.css("left","(size-5)*goods.outerWidth(true)")
				index=size-6;
			}
			slide.stop().animate({left:-index*goods.outerWidth(true)},100)
		}
		$(".m_pre").click(function(){
			index--;
			move()
		})
		$(".m_next").click(function(){
			index++;
			move()
		})
		$(".goods_scroll_ul").mouseenter(function(){
			clearInterval(timer)
		})
		$(".goods_scroll_ul").mouseleave(function(){
			timer=setInterval(function(){
				index++;
				move()
			},3500)
		})
	})
})
