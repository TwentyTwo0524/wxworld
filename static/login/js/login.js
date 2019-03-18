// $(function(){
// 	$(".user_name").focus(function(){
//
// 				this.style.color='#6c6c6c';
//
// 	})
// 	//判断是否存在该用户(匹配用户名和密码是否都一致)
// 				$(".btn_login").click(function(){
//
// 					var users = $.cookie("users");
// 					console.log(users)
// 					if (users) {
//
// 						users = JSON.parse(users); //cookie中的所有注册过的用户
//
// 						var isExists = false; //表示是否存在该用户
// 						for (var i=0; i<users.length; i++) {
// 							if ( users[i].name == $(".user_name").val() && users[i].pwd == $(".psw").val() ) {
// 								location.href="../index.html"
// 								isExists = true;
// //								var user=$("<a class='user'>"+users[i].name+"</a>")
// //								var cancel=$("<a class='cancel'>注销</a>")
// //								$(".login").hide();
// //								$(".hb_con_left").append(user,cancel);
// //								location.href="";
// 							}
// 						}
// //						cancel.click(function(){
// //							$(".login").show();
// //							$(".user").hide();
// //							cancel.hide()
// //						})
//
// 						if (!isExists) {
// 							$(".regInfo_msg").html("输入帐号或者密码格式不对")
// 						}
//
// 					}
// 					else {
// 						$(".regInfo_msg").html("不存在该用户")
// 					}
// 					if($(".user_name").val()==""){
// 						$(".regInfo_msg").html("请输入您注册时的用户和密码")
// 					}
// 				})
//
// })
