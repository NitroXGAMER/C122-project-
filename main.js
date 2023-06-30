function preload(){

}

function setup(){
    canvas = createCanvas(670, 600);
    canvas.position(0, 150);
    video = createCapture(VIDEO);
}

function take_snapshot(){
    save('my_filter_picture.png');
}

function draw(){
    circle(30, 30, 80);
    describe('white circle with black outline at the top left of the canvas');
   circle(50, 30, 80)
   describe('white circle with black outlinke top right of canvas')
}