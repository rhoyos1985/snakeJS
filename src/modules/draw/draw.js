import Canvas from './canvas.js'

export default class extends Canvas {
  constructor(idCanvas, standartSize = 20){
    super(idCanvas);
    this.SIZE = standartSize;
  }

  resetSnakeField(){
    this.ctx.fillStyle = 'lime';
    this.ctx.fillRect(0, 0, this.width, this.height);
  }
  
  drawObj(obj,color){
    this.ctx.fillStyle = color;
    this.ctx.fillRect(obj.coordX, obj.coordY, this.SIZE, this.SIZE);
  }
}