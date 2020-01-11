let counter = 0;


//Properties for the three bases
let bases = {

  first: {
    x: 230,
    y: 60.66
      
  },
  second: {
    x: 123,
    y: 530.33
  },
  third: {
    x: 307,
    y: 530.33
  }
};
    

function setup() {

  createCanvas(windowWidth, windowHeight);

  basesByIndex = Object.values(bases); //To acces through a number 

  console.log(basesByIndex.lenght); //total bases

  interval = setInterval(timer, 1000); //To control speed of blacl ellipse

}

function draw() {
  background(180); 

  //Draw the bases
  pop();
  for (let i = 0; i < basesByIndex.length; i++) {
    ellipse(basesByIndex[i].x, basesByIndex[i].y, 40);
  }
  push();

  //Draw the black ellipse
  fill(20);
  ellipse(basesByIndex[counter].x, basesByIndex[counter].y, 20);


  //Try to lerp the move between each base
  smoothX = lerp(basesByIndex[0].x, basesByIndex[0].x, .1);
  smoothY = lerp(basesByIndex[1].y, basesByIndex[1].y, .1);


  ellipse(smoothX, smoothY, 20);

  
 
}

function timer () {
  counter++;
  if (counter == basesByIndex.length) {
    counter = 0;
    
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



  





