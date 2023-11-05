song = "";

function preload() 
{
    song = loadSound("Bones Song.mp3");
    song = loadSound("Enemy Song.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0,20, 700, 375);
}

function play()
{   
    song.play();
}
