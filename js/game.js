
let score = document.getElementById("score");
let count_score = 0;

let intervalLoop;
let intervalON =false;
let velosity = 4;

document.addEventListener('keydown', function() {
  if (event.code == 'Escape' && intervalON ==false) {
    clearInterval(interval);
    velosity = 600000000;
    intervalON =true;
  }
  else if (event.code == 'Escape' && intervalON ==true){
    interval = setInterval(startTimer,10);
    velosity = 4;
    intervalON =!intervalON;
  }
 
  console.log( "interval  " +intervalON)
});

let btn = document.getElementById("button");
let theme = document.getElementById("theme-link");


let colorBtn = document.getElementById("color_btn");

let toggleON = true;
colorBtn.addEventListener("click", function() {
  context.fillStyle = generateColor();
});

btn.addEventListener("click", function() {
  if (theme.getAttribute("href") == "css/light_them.css") {
    theme.href = "css/dark_theme.css";
  } else {
    theme.href = "css/light_them.css";
  }
});

let minutBlock = document.querySelector(".jsminutes");
let secondBlock=document.querySelector(".interval_js_second");
let hundredSecondBlcok= document.querySelector(".interval_js_hundred_second");
let start = document.querySelector(".start");
let interval;
let stop =0;
let minutes = 0;
let seconds = 0;
let miliseconds =0;
var isResizeble = false;

const startTimer = function()
{
    miliseconds++;
    hundredSecondBlcok.innerHTML = "" + miliseconds;
    if (miliseconds > 99)
    {
      seconds+=1;
      secondBlock.innerHTML = "0" + seconds;
      miliseconds = 0;
    }
    if(seconds> 9)
    {
      secondBlock.innerHTML =  seconds;
    }
    if(seconds > 59)
    {
      minutes++;
      minutBlock.innerHTML = "0" + minutes;
      seconds = 0;
      secondBlock.innerHTML = "0" + seconds;
    }
    if(minutBlock > 9)
    {
      minutBlock.innerHTML = minutes;
    }
}

let color_count =0;
let coliision = true;

let green ;
  let blue ;
  let colorMassive = [];
  let color;
  colorMassive.length =1;

function generateColor() {

  let red = Math.floor(Math.random()* 255);
     green = Math.floor(Math.random() * 255);
     blue = Math.floor(Math.random() * 255);
     color = context.fillStyle = "rgb("+red+","+green+"," +blue+" )";
    colorMassive[0] = color;
    
  console.log(color_count);
  console.log("color change");
  console.log(color);
  console.log(colorMassive[0,1]);
  color_count++;
}

score.innerHTML = "Score: " + count_score;
    var canvas = document.getElementById('game');

    var context = canvas.getContext('2d');
    var grid = 20;
    var count = 0;
    var snake = {
      x: 160,
      y: 160,
      // 
      dx: grid,
      dy: 0,
      cells: [],
      // 
      maxCells: 1
    };
    var apple = {
      x: 320,
      y: 320
    };
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    function loop() {
      
      requestAnimationFrame(loop);
      
      if (++count < velosity) {
        return;
      }
      count = 0;
      context.clearRect(0, 0, canvas.width, canvas.height);
      snake.x += snake.dx;
      snake.y += snake.dy;
    
      if (snake.x < 0) {
        snake.x = canvas.width - grid;
      }
      else if (snake.x >= canvas.width) {
        snake.x = 0;
      }
      if (snake.y < 0) {
        snake.y = canvas.height - grid;
      }
      else if (snake.y >= canvas.height) {
        snake.y = 0;
      }
      snake.cells.unshift({ x: snake.x, y: snake.y });
      if (snake.cells.length > snake.maxCells) {
        snake.cells.pop();
      }
       context.fillStyle=colorMassive[0];    
      context.fillRect(apple.x, apple.y , grid - 2, grid - 2);
     
      context.fillStyle=colorMassive[0];
      snake.cells.forEach(function (cell, index) {
       
        context.fillRect(cell.x, cell.y, grid - 2, grid - 2);
        if (cell.x === apple.x && cell.y === apple.y) {
          coliision == false;
          count_score++;
          snake.maxCells++;
          context.fillStyle=colorMassive[0];
          color_count--;                
          score.innerHTML = "Score: " + count_score;

          apple.x = getRandomInt(0, 40) * grid;
          apple.y = getRandomInt(0, 40) * grid;
          
        }
        for (var i = index + 1; i < snake.cells.length; i++) {
          if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
            minutes =0;
            seconds=0;
            miliseconds =0;

            snake.x = 160;
            snake.y = 160;
            snake.cells = [];
            snake.maxCells = 1;
            snake.dx = grid;
            snake.dy = 0;

            apple.x = getRandomInt(0, 40) * grid;
            apple.y = getRandomInt(0, 40) * grid;
           
            count_score =0;
            score.innerHTML = "Score: " + count_score;
          }
        }
      });
    }

    document.addEventListener('keydown', function (e) {
      if (e.which === 37 && snake.dx === 0) {
        snake.dx = -grid;
        snake.dy = 0;
        if(intervalON == false)
        {
          intervalON =true;
        }
        if(intervalON == true)
        {
          intervalON =false;
        }
      }
      else if (e.which === 38 && snake.dy === 0) {
        snake.dy = -grid;
        snake.dx = 0;      
      }
      else if (e.which === 39 && snake.dx === 0) {
        snake.dx = grid;
        snake.dy = 0;             
      }
      else if (e.which === 40 && snake.dy === 0) {
        snake.dy = grid;
        snake.dx = 0;
      }
    });
    requestAnimationFrame( loop,  interval = setInterval(startTimer,10),  generateColor());
