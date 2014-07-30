
var a1=document.getElementById("image");
var d1=document.getElementsByClassName("pics")[0];
var e1=d1.getElementsByTagName("img");


a1.setAttribute("index",0);

setInterval(function(){
	var inte=parseInt(a1.getAttribute("index"));

	if(inte>e1.length-1){
		inte=0;
		}
		a1.src=e1[inte].src;
		a1.setAttribute("index",++inte);
		
			},6000);



var a11=document.getElementById("images");
var c11=document.getElementById("right");
var d11=document.getElementsByClassName("picss")[0];
var e11=d11.getElementsByTagName("img");

a11.setAttribute("index",0);


c11.onclick=function contentBanner(){
	var inte=parseInt(a11.getAttribute("index"));

	if(inte>e11.length-1){
		inte=0;
		}
		a11.src=e11[inte].src;
		a11.setAttribute("index",++inte);
		
			}




