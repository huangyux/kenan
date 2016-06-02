var can;
var ctx;

var w;
var h;

var girlPic=new Image(); 
var starPic=new Image();

var num=60;
var stars=[];

var lastTime;
var DeltaTime;

var switchy=false;
var life=1;

function init()
{
  can=document.getElementById("canvas");
  ctx=can.getContext("2d");
  w=can.width;
  h=can.height;
 
  document.addEventListener("mousemove",mousemove,false);

  girlPic.src="src/2.jpg";
  starPic.src="src/star.png";

  for(var i=0;i<num;i++)
{
   var obj=new starObj();
   stars.push(obj);
   stars[i].init(); 
  }

  lastTime=Date.now();
  gameloop();

}
document.body.onload=init;

function gameloop()
{
	window.requestAnimFrame(gameloop);
    var now=Date.now();
	deltaTime=now-lastTime;
	lastTime=now;
	
    drawBackground();
    drawGirl();
	drawStars();
	aliveUpdate();

}

function drawBackground()
{
  ctx.fillStyle="#222265";
  ctx.fillRect(0,0,w,h);
}

function drawGirl()
{
   //drawImage(img,x,y,width,height)
   //x轴坐标正方向向右，y轴坐标正方向向下，（0,0）在canvas左上角
   ctx.drawImage(girlPic,100,23,600,550);
}

function mousemove(e)
{
   if(e.offsetX || e.layerX)
	{
      var px =e.offsetX == undefined ? e.layerX : e.offsetX;
	  var py =e.offsetY == undefined ? e.layerY : e.offsetY;
	 if(px > 50 && px <690 && py>150 && py <580)
		{
	    switchy=true;
	 }
	 else
		{
	    switchy=false;
		}
	}
}
	

