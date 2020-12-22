class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
    }
  display(){
    console.log(this.body.speed)
  if(this.body.speed<3){
    super.display()
  }
  else{
    push()
    World.remove(world,this.body)
  tint(255,this.visibility)
image(this.image,this.body.position.x,this.body.position.y,50,50)
this.visibility =this.visibility-5
pop()
    }
  }
  score(){
    if(this.visibility<0 && this.visibility >-105){
      score++;
    }
  }
}
  