
var a=document.getElementById("image");
var c=document.getElementById("right");

var d=document.getElementsByClassName("pics")[0];
var e=d.getElementsByTagName("img");

a.setAttribute("index",0);

c.onclick=function(){
	var inte=parseInt(a.getAttribute("index"))+1;
	if(inte>e.length-1){
		inte=0;
		}
		a.src=e[inte].src;
		a.setAttribute("index",inte);
		
			}
			