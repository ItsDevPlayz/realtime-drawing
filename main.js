noseX=0;
noseY=0;
difference=0;
rightwristX=0;
leftwristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);
    canvas=createCanvas(500,500);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function draw(){
    document.getElementById("square_side").innerHTML="Width and height of the square will be = "+difference+"px";
background('#969A97');
fill("#a04a4a");
stroke("#a04a4a");
square(noseX, noseY, difference);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX= "+noseX +" noseY= "+noseY);

        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        difference=floor(leftwristX-rightWrist);
        console.log("leftwristX = "+leftwristX+" rightwristX = "+ rightwristX+" difference = "+difference);
    }
}


