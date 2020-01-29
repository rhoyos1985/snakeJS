
export default class{
  constructor(coordX = 0, coordY = 0){
    this.coordX = coordX; 
    this.coordY = coordY;
  }

  move(snakeMove_x, snakeMove_y){
    this.coordX += snakeMove_x;
    this.coordY += snakeMove_y;
  }

  checkCollision(obj){
    return this.coordX === obj.coordX && this.coordY === obj.coordY;
  }
}
