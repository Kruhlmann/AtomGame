class Wall {
  constructor(x, y, width, height, sprite, fallback_color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.sprite = sprite;
    this.fallback_color = fallback_color
  }

  get rect(){ return new Rect(this.x, this.y, this.width, this.height); }

  static make_stairs(x_start, y_start, x_finish, sprite, fallback_color){
  	var walls = [];
  	var x;
  	var y;
  	for(x = x_start - 105, y = y_start - 5; x < x_finish; x+= 105, y-=5){
  		walls.push(new Wall(x, y, x_finish - x, y - y_start, sprite, fallback_color))
  	}
  	return walls;
  }

}