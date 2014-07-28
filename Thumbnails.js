
var a2=document.getElementById('thumbnail-1');
var d2=document.getElementsByClassName("pics1")[0];
var e2=d2.getElementsByTagName("img");


a2.setAttribute("index",0);

function thumbNails1(){
	
	setInterval(function(){
	var inte=parseInt(a2.getAttribute("index"));

	if(inte>e2.length-1){
		inte=0;
		}
		a2.src=e2[inte].src;
		a2.setAttribute("index",++inte);
		
	},3000);
		
	}
	
	
	
var a3=document.getElementById('thumbnail-2');
var d3=document.getElementsByClassName("pics2")[0];
var e3=d3.getElementsByTagName("img");


a3.setAttribute("index",0);

function thumbNails2(){
	
	setInterval(function(){
	var inte=parseInt(a3.getAttribute("index"));

	if(inte>e3.length-1){
		inte=0;
		}
		a3.src=e3[inte].src;
		a3.setAttribute("index",++inte);
		
	},3000);
		
	}
	
	
var a4=document.getElementById('thumbnail-3');
var d4=document.getElementsByClassName("pics3")[0];
var e4=d4.getElementsByTagName("img");


a4.setAttribute("index",0);

function thumbNails3(){
	
	setInterval(function(){
	var inte=parseInt(a4.getAttribute("index"));

	if(inte>e4.length-1){
		inte=0;
		}
		a4.src=e4[inte].src;
		a4.setAttribute("index",++inte);
		
	},3000);
		
	}
	
	
	
var a5=document.getElementById('thumbnail-4');
var d5=document.getElementsByClassName("pics4")[0];
var e5=d5.getElementsByTagName("img");


a5.setAttribute("index",0);

function thumbNails4(){
	
	setInterval(function(){
	var inte=parseInt(a5.getAttribute("index"));

	if(inte>e5.length-1){
		inte=0;
		}
		a5.src=e5[inte].src;
		a5.setAttribute("index",++inte);
		
	},3000);
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	