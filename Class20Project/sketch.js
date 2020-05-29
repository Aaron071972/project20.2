var car,wall;
var speed, weight;

carImage = loadImage("lambo.png")

function setup() {
speed=random(2,30)
weight=random(400,1500)


carImage = loadImage("lambo.png")

  createCanvas(1600,400);
  
  car=createSprite(50, 200, 50, 50);
  car.addImage(carImage)
  car.scale=0.1
  car.velocityX= speed

  wall=createSprite(1500,200,60, height/2)

}

function draw() {
  background(80,80,80);  


  if(wall.x-car.x == wall.width/2 + car.width/2||
     car.x-wall.x == wall.width/2 + car.width/2||

     wall.y-car.y == wall.height/2 + car.height/2||
     car.y-wall.y == wall.height/2 + car.height/2
  ){
car.shapeColor="Green"
wall.shapeColor="Red"

car.velocityX=0
}
else{
  car.shapeColor="blue"
  wall.shapeColor="yellow"
}



  drawSprites();
}