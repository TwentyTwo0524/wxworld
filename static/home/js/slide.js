$(function(){
	$.getJSON("JSON/slide.json",function(data){
//		console.log(data)
		for(var i=0;i<data.length;i++){
			var obj=data[i];
			//console.log(obj)
			var li=$("<li><img src="+obj.img+"></li>");
			$(".main_slide").append(li)
		}	
		var _slide=$(".main_slide")
		var _slide_li=$(".main_slide li")//是一开始li的数量
	
		_slide_li.first().clone().appendTo(_slide)//直接在原来的ul里加了一张
		var size=$(".main_slide li").length;//长度就是在原来加的ul里取得
		console.log(size)//size=8
		
		var i=0;//定义图片的下标
		var timer=setInterval(function(){
			i++;
			//console.log(i)
			move();
		},2500)
		
		function move(){
			//先判断
			if(i>=size){
				_slide.css("left",0)//瞬间到第一张图片
				i=1;//即将移动到第二张
			}
			if(i<0){
				_slide.css("left",-960*(size-1))
				i=size-2;
			}
			_slide.stop().animate({left:-i*960},300);//让轮播图动起来
		}
		//上一张
		$(".pre").click(function(){
			i--;
			move()
		})
		//下一张
		$(".next").click(function(){
			i++;
			move()
		})
		
		$(".slides").hover(function(){
			//移入mouseenter
			clearInterval(timer);
			$(".pre,.next").show();
		},
		function(){
			//移出mouseleave
			timer=setInterval(function(){
			i++;
			move();
		},2500)
			$(".pre,.next").hide()
		}
		)
		
	})
	
})
