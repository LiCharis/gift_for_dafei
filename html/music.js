
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>js控制背景音乐bgsound的方法(开始与停止)</title>
</head>
 
<body>
<script type="text/javascript">
var bg_sound=document.createElement_x("bgsound");//创建背景音乐
bg_sound.id="i_bg"//设置id属性
document.body.appendChild(bg_sound);//body中添加背景音乐
//bg_sound.src="tmp3.mp3";
i_bg.src="tmp3.mp3";//设置一个背景音乐文件
//应该也可以用write写出来，可以试下效果。
function bg_stop(){
  i_bg.src="";
}
function bg_start(){
  i_bg.src="tmp3.mp3";
}
</script>
<span ><a onclick="javascript:bg_stop();" href="javascript:void(0);">背景音乐停止</a></span>  <span ><a onclick="javascript:bg_start();" href="javascript:void(0);">背景音乐开始</a></span>
</body>
</html>