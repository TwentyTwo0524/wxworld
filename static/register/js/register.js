// $(function(){
// 		var isName=false;
// 		$(".user_name").focus(function(){
// 			if(this.value=="手机注册更享好礼"){
// 				this.value='';
// 				this.style.color='#6c6c6c';
// 			};
// 		})
// 		$(".user_name").blur(function(){
// 			var u		= $(this).val();
// 			var m_regx 	= /^(13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|17[0-9]{9}$|18[0-9]{9})|w+([-+.']w+)*@w+([-.]w+)*.w+([-.]w+)*$/
// 			if(m_regx.test(u) ){
// 				$('.regInfo_msg').html('');
// 				this.style.borderColor="";
// 				isName=true;
// 			}
// 			else{
// 				this.style.borderColor="#8e0c3a";
// 				$('.regInfo_msg').html('请输入正确的邮箱或手机号。');
// 				isName=false;
// 			}
// 		})
// 		var isPsw=false;
// 		$('.psw1').blur(function(){
// 			var p	= $(this).val();
// 			var p2  = $('.psw2').val();
// 			if( p != '' && p.length >= 6 ){
// 				$('.regInfo_msg').html('');
// 				this.style.borderColor="";
// 				isPsw=true;
// 			}
// 			else if(p==''){
// 				this.style.borderColor="#8e0c3a";
// 				$(".regInfo_msg").html("密码不能为空，请输入密码。")
// 				isPsw=false;
// 			}
// 			else if(p.length<6||p.length>16){
//
// 				this.style.borderColor="#8e0c3a";
// 				$('.regInfo_msg').html('用户密码长度范围在6~16位之间。');
// 				isPsw=false
// 			}
// 		})
// 		$('.psw2').blur(function(){
// 			var p1  = $('.psw1').val();
// 			var p2  = $(this).val();
// 			if( p2 != '' && p1 == p2 ){
// 				$('.regInfo_msg').html('');
// 				this.style.borderColor="";
// 				isName=true
// 			}
// 			else{
// 				this.style.borderColor="#8e0c3a";
// 				$('.regInfo_msg').html('您两次输入的密码不一致');
// 				isPsw=false;
// 			}
// 		})
//
//
// 	$(".btn_register").click(function(){
// 		if(isName==true&&isPsw==true){
// 			//注册(cookie存储)
// 			var users = $.cookie("users") ? JSON.parse($.cookie("users")) : [];
// 			//先判断是否存在该用户
// 			for (var i=0; i<users.length; i++) {
// 				if ( users[i].name == $(".user_name").val() ) {
// 					alert("用户名已存在! 不能注册相同的用户");
// 						return;
// 					}
// 			}
//
// 			//注册用户
// 			var user = {
// 				name: $(".user_name").val(),
// 				pwd: $(".psw1").val()
// 			}
// 			users.push(user);
//
// 			$.cookie("users", JSON.stringify(users), {expires:22, path:"/"});
// 			console.log( $.cookie("users") );
// 			location.href="../index.html";
//
// 		}
// 		else{
// 			return
// 		}
// 	})
// })

// $(function () {
//     $('.user_email').blur(function () {
//         var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"); //正则表达式
//         if ($(this).val() == '') return
//         if (reg.test( $(this).val() ) ){
//
//         }
//     })
// })