$(function(){
	$(".follow").mouseenter(function(){
		$(this).find(".share").show();
	})
	$(".follow").mouseleave(function(){
		$(this).find(".share").hide()
	})
	$(".share").mouseenter(function(){
		$(this).show();
	})	
	$(".share").mouseleave(function(){
		$(this).hide()
	})
	
//	//cart
	$(".bag_n").mouseenter(function(){
		$(this).parent().siblings().show();
		$(this).addClass("active")
	})
	$(".cart").mouseenter(function(){
		$(".cart").show();
		$(".bag_n").addClass("active")
	})
	$(".bag_n").mouseleave(function(){
		$(this).parent().siblings().hide();
		$(this).removeClass("active")
	})
	$(".cart").mouseleave(function(){
		$(".cart").hide();
		$(".bag_n").removeClass("active")
	})
	
	$(".nav_ul li,.nav_ul li .goods").mouseenter(function(){
		$(this).find(".goods").show().parent().siblings().find(".goods").hide()
	})
	$(".nav_ul li,.nav_ul li .goods").mouseleave(function(){
		$(this).find(".goods").hide()
	})
})
