var background1, background1Image;
var iss, issImage;
var hasDocked = false;
var spacecraft, spacecraftImage;
var spacecraftImage2;
var spacecraftImage3;
var spacecraftImage4;
var point;


function preload(){

  background1Image = loadImage("spacebg.jpg");
  issImage = loadImage("iss.png");
  spacecraftImage = loadImage("spacecraft1.png");
  spacecraftImage2 = loadImage("spacecraft3.png");
  spacecraftImage3 = loadImage("spacecraft4.png");
  spacecraftImage4 = loadImage("spacecraft2.png");
}


function setup() {
  createCanvas(800,400);
  background1 = createSprite(400, 200, 800, 400);
  background1.addImage(background1Image);

  iss = createSprite(416, 80, 20, 20);
  iss.addImage(issImage);
  iss.scale = 0.3;

  spacecraft = createSprite(400, 369, 20, 20);
  spacecraft.addImage(spacecraftImage);
  spacecraft.scale = 0.13;

  point = createSprite(398, 92, 3, 3)
  point.shapeColor = "white";



}

function draw() {
  background(255,255,255); 
  
  if(!hasDocked){
    spacecraft.x = Math.round(random(400,400));
    
    if(keyDown("LEFT_ARROW")) {
      spacecraft.addImage(spacecraftImage2);
      spacecraft.x = spacecraft.x -10;
    }

    if(keyDown("RIGHT_ARROW")) {
      spacecraft.addImage(spacecraftImage3);
      spacecraft.x = spacecraft.x +10;
    }

    if(keyDown("DOWN_ARROW")) {
      spacecraft.addImage(spacecraftImage4);
    }

    if(keyDown("UP_ARROW")) {
      spacecraft.addImage(spacecraftImage4);
      spacecraft.y = spacecraft.y -2;
    }

  }

  if(spacecraft.isTouching(point)){
      hasDocked = true;

  }

    drawSprites();

    
    if(spacecraft.isTouching(point)){
      fill("white");
      textSize(23);
      text("Docking Successful!", 300, 250);
  }
}
  

