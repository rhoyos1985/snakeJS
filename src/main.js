import Draw from './modules/draw/draw.js';
import Snake from './modules/snake/snake.js';

const draw = new Draw('snakeField');


let snake = new Snake();
let food = null;
let [ snakeMove_x, snakeMove_y ] = [ 0, 0 ]

let lastAxis;

document.addEventListener('keydown',snakeMove);

setInterval(main, 1000);

function main() {
  updateGame();
  drawGame();
}

function updateGame(){

  if(snake.snakeCollied()){
    gameOver();
  }

  let snakeBodyIncrement = snake.getLastElement();

  snake.move(snakeMove_x, snakeMove_y);
  updateFood(snakeBodyIncrement);
}

function drawGame(){
  draw.resetSnakeField();
  draw.drawObj(snake.snakeHead, 'gray');

  
  snake.snakeBody.forEach( 
    body => draw.drawObj(body,'gray')
  );

  draw.drawObj(food, 'red');
}

function updateFood(snakeBodyIncrement){
  if(food && snake.snakeHead.checkCollision(food)){
    food = null;
    snake.incrementSnakeBody(snakeBodyIncrement);
  }
  if(!food){
    food = randomFood();
  }
}

function randomFood() {
  let foodPosition = {coordX: getRamdonPoitionX(), coordY: getRamdonPoitionY()};
  
  if(checkFoodCollision(foodPosition))
    randomFood();
  
  return foodPosition;
}

function checkFoodCollision(position){
  console.log(snake.snakeBody)
  snake.snakeBody.forEach(
    body => {
      if(body.checkCollision(position))
        return true;
    }
  )

  if(snake.snakeHead.checkCollision(position))
    return true;

  return false;
}

function gameOver(){
  alert('Has perdido');
  [snake.snakeHead.coordX, snake.snakeHead.coordY] = [0,0];
  [snakeMove_x,snakeMove_y] = [0,0];
  snake.snakeBody = [];
}

function getRamdonPoitionX() {
  return 20 * parseInt(Math.random() * 20);
}

function getRamdonPoitionY() {
  return 20 * parseInt(Math.random() * 23);
}

function updatePositonSnake(){
  snakeHead.coordX += snakeMove_x 
  snakeHead.coordY += snakeMove_y

  if(snakeMove_x !== 0)
    lastAxis = 'X';
  else if(snakeMove_y !== 0)
    lastAxis = 'Y';
}

function snakeMove(event){
  if((event.key === 'ArrowUp' || event.key === 'ArrowDown') && lastAxis === 'Y')
    return;

  if((event.key === 'ArrowRight' || event.key === 'ArrowLeft') && lastAxis === 'X')
    return;
  
  switch (event.key) {
    case 'ArrowUp':
      snakeMove_x = 0;
      snakeMove_y = -draw.SIZE;
      break;
    case 'ArrowDown':
      snakeMove_x = 0;
      snakeMove_y = draw.SIZE;  
      break;
    case 'ArrowRight':
      snakeMove_x = draw.SIZE;
      snakeMove_y = 0;
      break;
    case 'ArrowLeft':
      snakeMove_x = -draw.SIZE;
      snakeMove_y = 0;
      break;
    default:
      break;
  }
}