canvas=new fabric.Canvas('myCanvas');
playerx=10;
playery=10;
player_object="";
function upload_player(){
    fabric.Image.fromURL("player.png",function(Img){
player_object=Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
    top:playery,
    left:playerx
    
});
canvas.add(player_object);
    });
}