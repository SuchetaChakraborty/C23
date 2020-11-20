class Box{
    constructor(a,b,c,d){

        var options = {
            restitution : 1.0
        }
        this.body = Bodies.rectangle(a,b,c,d,options);
        this.width = c;
        this.height = d;
        World.add(world,this.body);
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        fill(255);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }

}