console.log("test");
function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext){
       var ctx = canvas.getContext('2d');
  
      ctx.beginPath();
      ctx.arc(75,75,50,0,Math.PI*2,true); // Внешняя окружность
      ctx.moveTo(110,75);
      ctx.arc(75,75,35,0,Math.PI,false);  // рот (по часовой стрелке)
      ctx.moveTo(65,65);
      ctx.arc(60,65,5,0,Math.PI*2,true);  // Левый глаз
      ctx.moveTo(95,65);
      ctx.arc(90,65,5,0,Math.PI*2,true);  // Правый глаз
      ctx.stroke();
    }
  }
  
