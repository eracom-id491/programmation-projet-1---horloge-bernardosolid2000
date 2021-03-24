let customFont; // Ne pas toucher à cette ligne

// Ne pas toucher au bloc ci-dessous
function preload() {
  customFont = loadFont("../assets/Suisse Bold.otf");
}
// ---------------------------------- s//

function setup() {
  createCanvas(windowWidth, windowHeight); // Ne pas toucher à cette ligne
  angleMode(DEGREES);
}

function draw() {
  background(220);

strokeWeight(1);
stroke(0);
fill(255);
textSize(15);
text('HOUR', width/2, height/2);

strokeWeight(0);
fill(255,0,0);
circle( width/2, height/2-30, 20);


strokeWeight(1);
stroke(0);
fill(255);
textSize(15);
text('MINUTE', width/2, height/2+65);

strokeWeight(0);
fill(0,255,0);
circle(width/2, height/2+35, 20);


strokeWeight(1);
stroke(0);
fill(255);
textSize(15);
text('SECOND', width/2, height/2+130);

strokeWeight(0);
fill(0,0,255);
circle(width/2, height/2+100, 20);
  
  showTime(); // Ne pas toucher à cette ligne

  linhes();
 
}

function linhes()
{
   
  translate(width/2,height/2);
  rotate(-90);

  let hr=hour();
  let mn=minute();
  let sc=second();
  
  strokeWeight(8);
  stroke(255,100,150);
  noFill();

  
  stroke(0,0,255);
  
  let end1 = map(sc, 0, 60, 0, 360);
  arc(0,0,460,460,0,end1);

  stroke(0,255,0);
  let end2 = map(mn,0,60,0,360);
  arc(0,0,480,480,0,end2);

  stroke(255,0,0);
  let end3 = map(hr,0,24,0,360);
  arc(0,0,500,500,0,end3);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Ne pas toucher à cette ligne
}

// Les blocs showTime et formatTime s'occupent d'afficher correctement l'heure en bas à gauche de la page.
function showTime() {
  let time =
  formatTime(hour()) +
    ":" +
    formatTime(minute()) +
    ":" +
    formatTime(second());
  textFont(customFont);
  strokeWeight(1);
  stroke(0);
  fill(255); // <----- Changez cette valeur pour manipuler la couleur du texte
  textSize(36);
  textAlign(CENTER);
  text(time, width/2, height/2-70);
}

function formatTime(value) {
  if (value < 10) {
    value = "0" + value;
  }
  return value;
}
// -----------------------------------//
