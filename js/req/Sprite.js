class Sprite {
  constructor(x, y, width, height, sprite) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.sprite = sprite
  }

  get rect(){ return new Rect(this.x, this.y, this.width, this.height); }

}