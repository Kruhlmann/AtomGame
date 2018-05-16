class Mob {
  constructor(x, y, width, height, g, sprite, faction, health, v, ai, request_sprite) {
    this.body = new Body(x, y, width, height, g);
    this.sprite = sprite
    this.faction = faction
    this.health = health;
    this.max_health = health;
    this.v = v;
    this.ai = ai;
    // The way loading image assets works with p5 makes it virtually impossible to load animated sprites directly into the constructor. 
    // Hence the use of this pseudo-callback function called in render()
    this.request_sprite =request_sprite;
  }

  // Handles logic
  tick(){
  	this.body.tick();
  	this.ai();
  }

  // Renders the mob using offsets form the current level
  render(x_off, y_off){
    // Fallback on no sprite
    // console.log(thinking)
    if(this.sprite == undefined || this.sprite.position == undefined) {
        fill("red");
        rect(this.body.x - x_off, this.body.y - y_off, this.body.width, this.body.height);
        this.sprite = this.request_sprite();
    }else {
        this.sprite.position(this.body.x - x_off, this.body.y - y_off, this.body.width, this.body.height);
        this.sprite.size(this.body.width, this.body.height);
        
    }
  }

  get removed() { return this.body.removed; }

  static spawn_thinking_mob(x, y, g, v){
  	return new Mob(x, y, 30, 30, g, thinking, 1, 10, v, function(){ 
  		if(this.body.a.x == 0) this.body.a.x = v;
  		this.body.on_wall_collision_x = function(){
  		    this.a.x *= -1;
  		};
  		if(Rect.collision(this.body.rect, player.body.rect)){
  			player.hurt();
  		}
  	}, function(){
        return clone(thinking);
    });
  }

}
