class Level {
  constructor(name, walls, player_pos, events, mobs) {
    this.name = name;
    this.walls = walls;
    this.mobs = mobs;
    this.events = events;
    this.current_track = null;
    this.x_off = 0;
    this.y_off = 0;
    player.body.x = player_pos.x;
    player.body.y = player_pos.y;
  }

  tick(){
    player.tick();
    if(player.body.x - this.x_off > WINDOW_WIDTH * 0.6) this.x_off = player.body.x - WINDOW_WIDTH * 0.6;
    if(player.body.x - this.x_off < WINDOW_WIDTH * 0.4) this.x_off = player.body.x - WINDOW_WIDTH * 0.4;
    for(var j in this.mobs){
      if (!this.mobs.hasOwnProperty(j)) continue;
      var mob = this.mobs[j];
      mob.tick();
    }
  }

  render(){
    for(var i in this.walls){
      if (!this.walls.hasOwnProperty(i)) continue;
      var wall = this.walls[i];
      fill(wall.fallback_color.repr);
      rect(wall.x - this.x_off, wall.y, wall.width, wall.height);
    }
    for(var j in this.mobs){
      if (!this.mobs.hasOwnProperty(j)) continue;
      var mob = this.mobs[j];
      mob.render(this.x_off, this.y_off);
    }
    fill(player.invulnerable_timer % 16 < 8 ? color(10, 155, 70, 255) : color(10, 155, 70, 100));
    rect(player.body.x - this.x_off, player.body.y, player.body.width, player.body.height);
    fill("yellow");
    /*image*/rect(player.weapon.sprite, player.weapon.x, player.weapon.y, player.weapon.width, player.weapon.height);
  }

  get_collision(body){
    for(var i in this.walls){
      if (!this.walls.hasOwnProperty(i)) continue;
      var wall = this.walls[i];
      if(Rect.collision(body.rect, wall.rect)) return wall.rect;
    }
    return false;
  }

  static to_JSON(){

  }

  static from_JSON(){

  }

  static make_level_0(){
    return new Level("intro", [
      new Wall(0, WINDOW_HEIGHT - 20, 1200, 20, null, new Vector4D(0, 70, 255, 255)),
      new Wall(800, WINDOW_HEIGHT - 25, 25, 5, null, new Vector4D(0, 70, 255, 255)),
      new Wall(900, WINDOW_HEIGHT - 95, 25, 75, null, new Vector4D(0, 70, 255, 255)),
      new Wall(1000, WINDOW_HEIGHT - 235, 25, 215, null, new Vector4D(0, 70, 255, 255)),
      // Bounds
      new Wall(-WINDOW_WIDTH * 0.4, 0, WINDOW_WIDTH * 0.7, WINDOW_HEIGHT, null, new Vector4D(0, 70, 255, 255)),
      // End Bounds
      new Wall(1150, WINDOW_HEIGHT - 300, 800, 25, null, new Vector4D(0, 70, 255, 255)),
      new Wall(2000, WINDOW_HEIGHT - 400, 150, 25, null, new Vector4D(0, 70, 255, 255)),
      new Wall(2200, WINDOW_HEIGHT - 25, 800, 25, null, new Vector4D(0, 70, 255, 255)),
      new Wall(2200, WINDOW_HEIGHT - 50, 25, 25, null, new Vector4D(0, 70, 255, 255)),
      ].concat([]), 
      new Vector2D(WINDOW_WIDTH * 0.4, 25), [], [
        Mob.spawn_thinking_mob(600, 200, 0.2, 4),
      ]);
  }

}
