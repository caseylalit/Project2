
var a1=document.getElementById("image");
var c1=document.getElementById("right");

var d1=document.getElementsByClassName("pics")[0];
var e1=d1.getElementsByTagName("img");

a1.setAttribute("index",0);

c1.onclick=function imageBanner(){
	var inte=parseInt(a1.getAttribute("index"));

	if(inte>e1.length-1){
		inte=0;
		}
		a1.src=e1[inte].src;
		a1.setAttribute("index",++inte);
		
			}

setInterval(function(){
	var inte=parseInt(a1.getAttribute("index"));

	if(inte>e1.length-1){
		inte=0;
		}
		a1.src=e1[inte].src;
		a1.setAttribute("index",++inte);
		
			},6000);















