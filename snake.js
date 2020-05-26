class Snake {
  
  constructor() {
  	this.body = [];
    this.body[0] = createVector(floor(w/2), floor(h/2));
    this.xdir = 0;
    this.ydir = 0;
    this.len = 0;
    this.smokeImage = loadImage("images/smoke.png");
    this.snakebodytrail = [];
  }
  
  setDir(x, y) {
  	this.xdir = x;
    this.ydir = y;
  }
  
  update() {
  	let head = this.body[this.body.length-1].copy();
    this.body.shift();
    head.x += this.xdir;
    head.y += this.ydir;
    this.body.push(head);
  }
  
  grow() {
  	let head = this.body[this.body.length-1].copy();
    this.len++;
    this.body.push(head);
  }
  
  endGame() {
  	let x = this.body[this.body.length-1].x;
    let y = this.body[this.body.length-1].y;
    if(x > w-1 || x < 0 || y > h-1 || y < 0) {
       return true;
    }
    for(let i = 0; i < this.body.length-1; i++) {
    	let part = this.body[i];
      if(part.x == x && part.y == y) {
      	return true;
      }
    }
    return false;
  }
  
  eat(pos) {
  	let x = this.body[this.body.length-1].x;
    let y = this.body[this.body.length-1].y;
    if(x == pos.x && y == pos.y) {
      this.grow();
      return true;
    }
    return false;
  }
  
  show() {
  	for(let i = 0; i < this.body.length; i++) {
    	fill(0);
      noStroke();
      rect(this.body[i].x, this.body[i].y, 1, 1)
    }
 if(this.body.x > 10 && this.body.position.y > 200){

      var position = [this.body.position.x, this.body.position.y];
      this.snakebodytrail.push(position);
      print("this.body.position.x " + this.body.position.x);
      console.org("this.body.position.y " + this.body.position.y);
  }  
   
    for(var i=0; i<this.snakebodytrail.length; i++){
      image(this.smokeImage, this.snakebodytrail[i][0], this.snakebodytrail[i][1]);
      print("this.snakebodytrail[i][0] " + this.snakebodytrail[i][0]);
      console.org("this.snakebodytrail[i][0] " + this.snakebodytrail[i][1]);

    }
  }

}