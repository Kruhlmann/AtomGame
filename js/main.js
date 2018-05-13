'use strict';

// === Images ===
// Player
var player_status;
var player_status_weeb;
// Mobs
var thinking;
var animation;

// === Image lists ===
var thinking_gif;

// Mainly used for loading images
function preload(){
    player_status = loadImage("img/status_regular.png");
    player_status_weeb = loadImage("img/status_weeb.png");
    thinking = createImg("img/mobs/thinking.gif");
    thinking_gif = img_list("mobs/thinking", "gif", 30);
    animation = Animation.thinking_animation();
}

function setup(){
	createCanvas(WINDOW_WIDTH, WINDOW_HEIGHT);
	frameRate(FRAMERATE);
	noStroke();
}

var keys = [];
var player = new Player(0, 0, G);
var current_level = Level.make_level_0();
var restart_level = Level.make_level_0;

function keyPressed() {	keys.push(key); }

function keyReleased(){ keys.remove(key); }

// Gameloop
function draw(){
	background(0);
	current_level.tick();
	current_level.render();
    animation.tick();
    animation.render(0, 0);
    image(player_status, 0, 0);
}

