class Player {
  constructor(x, y, g) {
    this.v = 6;
    this.health = 10;
    this.max_health = this.health;
    this.body = new Body(x, y, 20, 50, g);
    this.invulnerable_timer = 0;
    this.weapon = new Sprite(x, y, 40, 24, /*tracer_gun*/ null);
  }

  tick(){
    if(this.body.y + this.body.height > WINDOW_HEIGHT) this.restart_level();
    if(this.invulnerable_timer > 0) this.invulnerable_timer --;
    this.body.tick();
    this.body.a.x = 0;
    this.body.a.x += contains(keys, "D") ? this.v : 0;
    this.body.a.x += contains(keys, "A") ? -1 * this.v : 0;
    this.body.a.y = contains(keys, "W") && this.body.grounded ? -25 : this.body.a.y;
  }

  render(){
    
  }

  hurt(){
    if(this.invulnerable_timer > 0) return;
    this.health --;
    if(this.health <= 0) this.restart_level();
    this.invulnerable_timer = 120;
  }

  restart_level(){
    current_level = restart_level();
  }

}