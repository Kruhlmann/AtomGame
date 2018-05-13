class Body {
  constructor(x, y, width, height, g) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.g = g;
    this.a = new Vector2D(0, 0);
    this.removed = false;
    this.grounded = false;
    this.on_wall_collision_x = function(){ };
    this.on_wall_collision_y = function(){ };
  }

  tick(){
    if(this.removed) return;
    // Reset grounded
    this.grounded = false;
    
    // Apply horizontal movement
    this.x += this.a.x;
    var env_collision_x = current_level.get_collision(this);
    if(env_collision_x){
      // Test if short enough to scale
      // The number 6 means a maximum of height 5 bodies can be scaled
      if(this.y + this.height - 6 < env_collision_x.y){
        // Can be scaled
        this.grounded = true;
        this.y = env_collision_x.y - this.height;
        this.y -= 5;
      }else{
        // Trigger event
        this.on_wall_collision_x();
        // Too tall!
        // Instead just set the x position to the side of the collided body
        if(env_collision_x.x > this.x){
          // Left side
          this.x = env_collision_x.x - this.width;
        }else {
          // Right side
          this.x = env_collision_x.x + env_collision_x.width;
        }
      }
    }

    // Apply gravity
    this.a.y += this.g

    // Gravity
    this.y += this.a.y;
    var env_collision_y = current_level.get_collision(this);
    if(env_collision_y) {
      if(env_collision_y.y > this.y){
        this.y = env_collision_y.y - this.height;
        this.grounded = true;
      }else this.y = env_collision_y.y + env_collision_y.height;
      
      // Reset gravity acceleration on vertical collision
      this.a.y = 0;
    }
    // Window bounds
    if(this.y > WINDOW_HEIGHT) this.remove()
    if(this.y < 0) this.y = 0;
  }

  remove(){
    this.removed = true
  }

  get rect(){ return new Rect(this.x, this.y, this.width, this.height); }

}