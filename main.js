var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio");

function new_image()
{
 fabric.Image.fromURL("https://i.pinimg.com/736x/ec/d9/3c/ecd93c0e9a621edff119604b0c60d725.jpg", function(Img){
 block_image_object = Img;
 block_image_object.scaleToWidth(736);
 block_image_object.scaleToHeight(1124);
 block_image_object.set
({
top:0,
left:0

});
    canvas.add(block_image_object);
});


}


function playSound(){
    x.play();
}
