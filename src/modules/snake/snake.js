import Square from '../draw/square.js';

export default class {
  constructor(){
    this.snakeHead = new Square(0, 0);
    this.snakeBody = [];
  }

  incrementSnakeBody(elementBody){
    console.log(elementBody)
    this.snakeBody.push(
      new Square(elementBody.coordX, elementBody.coordY));
  }


  move(snakeMove_x, snakeMove_y){

    if(this.snakeBody.length > 0){
      for(let i = this.snakeBody.length-1; i > 0; --i){
        [this.snakeBody[i].coordX, this.snakeBody[i].coordY] = [this.snakeBody[i-1].coordX, this.snakeBody[i-1].coordY]
      }
      [this.snakeBody[0].coordX, this.snakeBody[0].coordY] = [this.snakeHead.coordX, this.snakeHead.coordY]
    }
    this.updatePositonSnake(snakeMove_x, snakeMove_y);
  }

  getLastElement(){
    let lastElement = this.snakeHead;
    console.log(this.snakeBody.length)
    if(this.snakeBody.length > 0){
      lastElement = this.snakeBody[this.snakeBody.length - 1];
    }

    return lastElement;
  }

  updatePositonSnake(snakeMove_x, snakeMove_y){
    this.snakeHead.move(snakeMove_x, snakeMove_y);
  }

  snakeCollied(){
  
    let result = this.colliedWithBody(this.snakeHead);
    result = this.snakeColliedWithLimits();
    return result;
  }

  colliedWithBody(obj){
    let result = false;

    this.snakeBody.forEach(
      body => {
        console.log(`BodySnake: ${body.coordX} ${body.coordY}`)
        console.log(`HeadSnake: ${obj.coordX} ${obj.coordY}`)
        result = body.checkCollision(obj);
      }
    )
    return result;
  }

  snakeColliedWithLimits(){
    const topCollision = this.snakeHead.coordY < 0;
    const bottomCollision = this.snakeHead.coordY > 440;
    const rightCollision = this.snakeHead.coordX > 380;
    const leftCollision = this.snakeHead.coordX < 0;
    let result = false;
    
    if(topCollision || bottomCollision || rightCollision || leftCollision){
      result = true;
    }
    
    return result;
  }

  checkFoodCollision(position){
    
    let result = this.colliedWithBody(position)
    result =this.snakeHead.checkCollision(position);
  
    return result;
  }
}