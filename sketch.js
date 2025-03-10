class Bubbles{
  constructor (){
    this.x = random(width * 0.2, width * 0.8);
    this.y = noise(height * 0.2, height * 0.8);
    this.size = 0; 
    this.maxSize = random(10, 30);
    this.growthRate - random(0.3, 0.8);
    this.alpha = 255;
  }
  
  growNum(){
  // number of bubbles increases as mouse x position increases
  numOfBubbles = map(mouseX, 0, width, 2, 30);
  }

  growSize(){
    this.size = min(this.size + this.growthRate, this.maxSize);
  }

  display(){
    noStroke();
    fill(220, 190, 150, this.alpha);
    circle(this.x, this.y, this.size);

      // Update and draw bubbles
  for (let i = this.length - 1; i >= 0; i--) {
    let bubble = bubbles[i];


    // Fade out when reaching maximum size
    if (this.size >= this.maxSize) {
      this.alpha -= 10;
    }

    // Remove bubble if no longer visible
    if (this.alpha <= 0) {
      this.splice(i, 1);
    }
  }
  }
}

// Array to store all bubbles being generated; will be empty then populated later
let bubbles = [];
let numOfBubbles;
let fillInc = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Create initial bubbles
  for (let i = 0; i < numOfBubbles; i++) {
    bubbles[i] = new Bubbles(); 
  // bubbles.push(new Bubbles()); 
  }
}

function draw() {
  background(0);
  drawPot();
  bubbles.growNum();
  bubbles.growSize();
  bubbles.display();
  

}

// function drawPot(){
//     noStroke();
//     fill(190 + fillInc, 180 + fillInc, 150 + fillInc, 180);
//     strokeWeight(10);
//     ellipse(width / 2, height / 2, width * 0.9);
//     fillInc += 0.1;
// }
