var canvas = document.querySelector('canvas'),
    c = canvas.getContext('2d');
        var color = document.querySelector('#color');
        c.fillStyle = `${color.value}`;
        console.log(color.value)
        color.addEventListener("change",function(){
            // setInterval(()=>{
                c.fillStyle = `${color.value}`;
                console.log(color.value)
            // },100);
        })
        
        
function draw(x, y) {
  if (isDrawing) {
    c.beginPath();
    c.arc(x, y, 10, 0, Math.PI*2);
    c.closePath();
    c.fill();
  }
}

canvas.addEventListener('mousemove', event =>
  draw(event.offsetX, event.offsetY)
);
canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);

document.querySelector('a').addEventListener('click', event =>
  event.target.href = canvas.toDataURL()
);
