function setup(){
    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(10,50);

    canvas = createCanvas(500,500);
    canvas.position(430,130);
     
    poseNet = ml5.poseNet(Video, gotPoses);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Posenet is initialized and loaded");
}

function gotPoses(){
    if(error){
        console.error(error)
    }
    if(results.length > 0){
        console.log(results);

        console.log("rightwrist_x = " +results[0].pose.rightWrist.x+ " rightwrist_y = "+results[0].pose.rightWrist.y )
        console.log("leftwrist_x = " +results[0].pose.leftWrist.x+ " leftwrist_y = "+results[0].pose.leftWrist.y )
    }
}