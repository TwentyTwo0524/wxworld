var json = [
	{
		"id":1,
		"img":"../img/bag1.jpg"
		},
	{
		"id":2,
		"img":"../img/bag2.jpg"
	},
	{
		"id":3,
		"img":"../img/bag3.jpg"
		},
	{
		"id":4,
		"img":"../img/bag4.jpg"
		},
	{
		"id":5,
		"img":"../img/bag5.jpg"
		}
]

$(function(){
	$.getJSON('json',function(data){
		for(var i=0;i< data.length;i++){
			var obj=data[i];
			var li=$("<li><img class='list_edit' src="+obj.img+"></li>")
			$(".goods_list").append(li)
			$(".goods_list li").mouseenter(function(){
				var index=$(this).index()+1;
				$(".pro_img").css("background","url(../img/showImg"+index+".jpg)")
				$(this).find(".list_edit").addClass("border").parent().siblings().find(".list_edit").removeClass("border")
				$(".bigImg").attr("src","../img/bigImg"+index+".jpg")
			})
		}
		var _smallArea=$(".smallArea")//小区域
		var _smallImg=$(".pro_img");//小图片
		var _bigArea=$(".bigArea");//大区域
		var _bigImg=$(".bigImg");//大图片
		
		//比例系数
		var ratio=_bigImg.width()/_smallImg.width();
		_smallImg.mousemove(function(e){
			_smallArea.show();
			_bigArea.show();
			//先让鼠标控制小区域移动起来
			console.log("x"+e.pageX)
			console.log("y"+e.pageY)
			var x=e.pageX-_smallImg.offset().left-_smallArea.outerWidth()/2;
			var y=e.pageY-_smallImg.offset().top-_smallArea.outerHeight()/2;
			//判断小区域是否到了边界
			if(x<0){
				x=0;
			}
			else if(x>=_smallImg.outerWidth()-_smallArea.outerWidth()){
				x=_smallImg.outerWidth()-_smallArea.outerWidth();
			}
			if(y<0){
				y=0;
			}
			else if(y>=_smallImg.outerHeight()-_smallArea.outerHeight()){
				y=_smallImg.outerHeight()-_smallArea.outerHeight();
			}
			_smallArea.css({left:x,top:y})
			_bigImg.css({left:-x*ratio,top:-y*ratio})
		})
		_smallImg.mouseout(function(){
			_smallArea.hide();
			_bigArea.hide();
		})
	})
})
