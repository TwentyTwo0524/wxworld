$(function(){
	$.getJSON("JSON/goods_list.json",function(data){
		for(var i=0;i<data.length;i++){
			var obj=data[i];
			var li=$("<li></li>")
			var img=$("<img src="+obj.img+">")
			var name=$("<div class='goods_con_c'>"+obj.name+"</div>")
			var des=$("<div class='des'>"+obj.des+"</div>")
			
			var div=$("<div class='info'></div>")
			div.append(img,name,des)
			li.append(div)
			$(".goods_con_right ul").append(li)
		}
		$(".info").eq(0).click(function(){
			location.href="html/goods_des.html"
		})
		$(".info").eq(1).click(function(){
			location.href="html/goods_des2.html"
		})
		
	})
})
