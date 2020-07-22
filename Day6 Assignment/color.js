
var color = new Array("black", "blue", "brown", "green");
var i=0;
function ChangeColor(){
	if(i<color.length)
	{
		document.body.style.backgroundColor=color[i];
		i++;
	}
}
	
setInterval(ChangeColor,5000); 
