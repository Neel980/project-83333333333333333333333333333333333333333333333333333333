var canvas = document.getElementById("MYCANVAS");
var ctx = canvas.getContext("2d");
var last_position_of_x , last_position_of_y ;
var color = "black";
var width_of_line = 1 ;
var width = screen.width;
var new_width = width - 70;
var new_height = screen.height - 300;
if(width<992){
document.getElementById("MYCANVAS").width = new_width;
document.getElementById("MYCANVAS").height = new_height;
document.body.style.overflow = "hidden";    
}
canvas.addEventListener("touchstart",MY_touchstart);
function MY_touchstart(e){
color = document.getElementById("color").value;
width_of_line = document.getElementById("width_of_line").value;
console.log("My_touchstart")
last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
last_position_of_y = e.touches[0].clientY - canvas.offsetTop; 
}
canvas.addEventListener("touchmove", My_touchmove)
function My_touchmove(e){
console.log(My_touchmove);    
current_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
current_position_of_y = e.touches[0].clientY - canvas.offsetTop;
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width_of_line;
console.log("last_position_of_x and y = ") ;
console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
ctx.moveTo(last_position_of_x , last_position_of_y);
console.log("current_position_of_x  , current_position_of_y");
console.log("x = " + current_position_of_x + "y = " + current_position_of_y);
ctx.lineTo(current_position_of_x , current_position_of_y);
ctx.stroke();    
last_position_of_x = current_position_of_x;
last_position_of_y = current_position_of_y;    
}
function Clear_Area(){
ctx.clearRect(0 , 0 , canvas.width , canvas.height);    
}