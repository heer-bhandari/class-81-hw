canvas = document.getElementById("canvas1");
ctx = canvas.getContext("2d");
color = "black";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.linewidth = 2;

ctx.arc(200,200,40,0,2 * Math.PI);
ctx.arc(300,300,40,0,2 * Math.PI);
ctx.arc(400,400,40,0,2 * Math.PI);
ctx.arc(500,500,40,0,2 * Math.PI);
ctx.arc(600,600,40,0,2 * Math.PI);

ctx.stroke();
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    color = document.getElementById("INPUT11").value;
    mouse_x = e.clientX-canvas.offsetLeft;
    mouse_y = e.clientY-canvas.offsetTop;

  circle(mouse_x,mouse_y);

    console.log("x=" + mouse_x + "y=" + mouse_y );
}
function circle(mouse_x,mouse_y){
    ctx.beginPath();
ctx.strokeStyle = color;
ctx.linewidth = 2;
ctx.arc(mouse_x,mouse_y,40,0,2 * Math.PI);
ctx.stroke();
}
function CLEAR(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}