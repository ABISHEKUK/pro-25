class Ball {
    constructor(x,y,r)
    {
        var options={
            isStatics:false,
			restitution:0.3,
			friction:0.5,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
        this.image=loadImage("ball.png")
     
        
    }

    display()
    {
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(RADIUS);
        image(this.image,0,0,50,50);
        pop();
    }
}





