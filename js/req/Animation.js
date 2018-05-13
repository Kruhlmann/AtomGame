class Animation {
    constructor(sprites, intervals){
        if(sprites.length != intervals.length) {
            console.log("Incorrect parameters for Animation.");
            return;
        }
        this.sprites = sprites;
        this.intervals = intervals;
        this.last_frame_time = new Date().getTime();
        this.current_frame = 0;
        console.log("Initiated Animation");
        console.log(sprites);
        console.log(intervals);
    }

    tick(){
        console.log("Animation is ticking...");
        var now = new Date().getTime();
        // Keep going to the next frame, while there's still time between the last frame and this.now
        console.log("Will start looping if " + this.last_frame_time + " < "  + now + " (" + (this.last_frame_time < now).toString() + ")");
        // Have to mod with 1000 because js getMilliseconds just resets after hitting 1000
        while(this.last_frame_time < now){
            // Add the time of the current frame to the summed amount.
            console.log("Last frame was " + this.last_frame_time + " adn I'm going to add to it the current interval " + this.intervals[this.current_frame]);
            console.log("\t" + this.current_frame)
                console.log(this.intervals)
            this.last_frame_time += this.intervals[this.current_frame];
            // Increment the current frame and control for overflow so it loops back to 0.
            console.log("Now going to increment the frame by one and control the possible overflow " + this.current_frame + " + " + 1 + " % " + this.sprites.length)
            this.current_frame = (this.current_frame + 1) % this.sprites.length; 
        }
    }

    get_frame(){
        return this.sprites[this.current_frame];
    }

    render(x, y){
        image(this.sprites[this.current_frame], 100, 240);
    }

    static thinking_animation(){
        var sprites = img_list
        return new Animation(thinking_gif, Array.apply(null, {length: thinking_gif.length}).map(function(){return 35}));
    }
}
