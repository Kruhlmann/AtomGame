class Mob {
  constructor(x, y, width, height, g, sprite, faction, health, v, ai) {
    this.body = new Body(x, y, width, height, g);
    this.sprite = sprite
    this.faction = faction
    this.health = health;
    this.max_health = health;
    this.v = v;
    this.ai = ai;
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
    if(thinking == undefined) {
        fill("red");
        rect(this.body.x - x_off, this.body.y - y_off, this.body.width, this.body.height);
    }else {
        thinking.position(this.body.x - x_off, this.body.y - y_off, this.body.width, this.body.height);
        thinking.size(this.body.width, this.body.height);
        
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
  	});
  }

}
