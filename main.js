function preload() {
    mustache = loadImage('https://i.postimg.cc/Dfp9Dw0D/mustachen.jpg');
}
function setup() {
    canvas= createCanvas(300, 300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log("pose net is initialized");
}
function draw() {
        image(video, 0, 0, 300, 300);
        image(mustache, noseX, noseY, 50, 30);
        video.show();
}
function gotPoses(results){
    console.log("length of results" + results.length);
    if(results.length > 0) {
        console.log(results);
        noseX= results[0].pose.nose.x-15;
        noseY= results[0].pose.nose.y+15;
        console.log(noseX, noseY);
    }
}
function take_snapshot() {
    save('filter')
}