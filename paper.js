class Paper{
constructor(x,y,r){
    var options={
        isStatic:false,
        restitution:0.3,
        speed:0.5,
        density:1.2
        }
        this.x=x;
        this.y=y
        this.r=r
        this.image=loadImage("paper.png")
        this.body=Bodies.circle(this.x,this.y,this.r/2,options)
     World.add(world,this.body)
     

}
display(){
var pos=this.body.position
push()
			translate(pos.x, pos.y);
			//rectMode(CENT)
            strokeWeight(3);
            fill(255)
            rotate (this.body.angle)
            imageMode (CENTER)
           // ellipseMode(CENTER)
			image(this.image,0,0,this.r,this.r);
            pop()
}
}
