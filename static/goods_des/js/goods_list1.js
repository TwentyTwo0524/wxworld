$(function(){
	$.getJSON("../JSON/goods_list1.json",function(data){
		for(var i=0;i<data.length;i++){
			var obj=data[i];
			var li=$("<li><img src="+obj.img+"></li>")
			var name=$("<div class='goods_con_c'>"+obj.name+"</div>")
			var des=$("<div class='des'>"+obj.des+"</div>")
			
			name.appendTo(li);
			des.appendTo(li);
			
			$(".goods_con_right ul").append(li)
		}
		$(".goods_con_right ul li").eq(0).click(function(){
			location.href="goods_des.html"
		})
		$(".goods_con_right ul li").eq(1).click(function(){
			location.href="goods_des2.html"
		})
	})
})
