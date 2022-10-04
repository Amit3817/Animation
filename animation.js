let canvas=document.querySelector('canvas');
let c=canvas.getContext('2d');
let h=window.innerHeight;
let w=window.innerWidth;
canvas.height=h;
canvas.width=w;
let x=w-50;
let y=h/2;
let dw=1,dh=1;
function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,w,h);
c.beginPath();
c.arc(x,y,20,0,2*Math.PI);
c.fill();
c.fillStyle="red";
c.stroke();
if(x<0||x>w)
{
    dw=-dw;
}
if(y>h||y<0)
{
    dh=-dh;
}
y+=dh
x-=dw;
}
animate();