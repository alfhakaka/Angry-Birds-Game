class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
    this.trajectory = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
  

    super.display();
// conditions: 1. when bird x position>220
//             2. when bird velocity > 10
var pos = this.body.position 

if (pos.x>220 && this.body.velocity.x>5){
  var position = [pos.x,pos.y];
  this.trajectory.push (position);

}
console.log(this.trajectory)
    for (var i=0; i<this.trajectory.length; i=i+1){
      image(this.smoke,this.trajectory[i][0],this.trajectory[i][1]);
    } 




  }
}
