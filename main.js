var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
document.getElementById("textbox").innerHTML = "";
recognition.start();
}

recognition.onresult = function(event) {

console.log(event);

var Content = event.results[0][0].transcript;
document.getElementById("textbox").innerHTML = Content;
console.log(Content);

if(Content =="take my selfie")
{
    console.log("talking selfie")
speak();
}
}

function speak(){
var synth = window.speechSynthesis;

speak_data = "Taking you Selfie in 5 seconds";

var utterThis = new SpeechSynthesisUtterance(speak_data);

synth.speak(utterThis);
Webcam.attach(camera);

setTimeout(function()
{
take_snapshot();
save();
},5000);

}


Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
    });
    camera = document.getElementById("camera");

function take_snapshot()
{
Webcam.snap(function(data_uri) {
document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
});
}

function save()
{
link = document.getElementById("link");
image = document.getElementById("selfie_image").src ;
link.href = image;
link.click();
}

canvas = document.getElementById('myCanvas');
ctx = canvas.getCotext("2d");

greencar_width = 75;
greencar_height = 100;

greencar_x = 5;
greencar_y= 225;

function add() {
background_imgtag = new Image();
background_imgtag.onload = uploadBackground;
background_imgtag.src = background_image;

greencar_imgTag = new Image();
greencar_imgTag.onload = uploadBackground;
greencar_imgTag.src = greencar_image;
}

function uploadBackground() {
ctx.drawImage(background_imgTag, 0, 0, canvas.height);
}

function uploadgreencar() {
ctx.drawImage(greencar_imgTag, greencar_x,greencar_y, greencar_width, greencar_height);

}















