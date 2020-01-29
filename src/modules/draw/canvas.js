export default class{
  constructor(idCanvas){
    this.idCanvas = idCanvas;
    this.snakeField = document.getElementById(this.idCanvas);
    this.ctx = this.snakeField.getContext('2d');
    this.width = this.snakeField.width;
    this.height = this.snakeField.height;
  }
}