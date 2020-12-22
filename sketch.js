const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var bg
function preload(){

}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(600,390,1200,20)
    ground2 = new Ground(400,300,200,20)
    ground3 = new Ground(800,200,200,20)
    block1 = new Box(330,235,30,40)
    block2 = new Box(360,235,30,40)
    block3 = new Box(390,235,30,40)
    block4 = new Box(420,235,30,40)
    block5 = new Box(450,235,30,40)

    block6 = new Box(360,195,30,40)
    block7 = new Box(390,195,30,40)
    block8 = new Box(420,195,30,40)
    
    block9 = new Box(390,155,30,40)

    polygon = new Polygon(100,200,20,40)

    slingshot = new SlingShot(polygon.body,{x:100,y:200})
}
var score = 0
function draw(){
    text("score:  "+ score,750,40)
    ground1.display()
    ground2.display()
    ground3.display()
    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()
    block8.display()
    block9.display()
    polygon.display()
    slingshot.display()

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
   }

   function mouseReleased(){
    slingshot.fly();
}
function keyPressed (){
    if(keyCode === 32){
slingshot.attach(polygon.body)
    }
}
async function getBackgroundImg(){
    var change = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var cJSON = await change.json()
    console.log(cJSON)
 var operator = cJSON.datetime
 console.log(operator)
 var hour = operator.slice(11,13)
 console.log(hour)
 if(hour>=06 && hour<=18){
bg = "sprites/bg.png"
 }
 else {bg = "sprites/bg2.jpg"}
backgroundImg = loadImage(bg)
}