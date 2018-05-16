// Returns true if a contains obj
function contains(a, obj) {
    var i = a.length;
    while (i--) {
       if (a[i] === obj) {
           return true;
       }
    }
    return false;
}

// Returns an HTMLImageElement based on a src string
function load_img(src){
    var image = new Image();
    image.src = src;
    return image;
}

// Simplified way of removing an item from an array
Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

// Returns an array of images based on the foldername and number of images.
// The folder must contain exactly the amount of images specified and follow the naming convention frame<i>.<ext> 
// where <i> is the index of the frame and <ext> is the file extension.
// This function MUST be called within the preload fuinction in main.js or it will not work correctly.
/*function img_list(folder, ext, c){
    var images = [];
    for(i = 0; i < c; i ++){
        console.log("Loading asset img/" + folder + "/frame" + i + "." + ext);
        images.push(loadImage("img/" + folder + "/frame" + i + "." + ext));
    }
    return images;
}*/

var clone = (function(){ 
    return function (obj) { Clone.prototype=obj; return new Clone() };
    function Clone(){}
}());
