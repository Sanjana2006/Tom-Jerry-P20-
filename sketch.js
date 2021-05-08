var bgImg;
var catImg, mouseImg;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    
    catImg = loadImage("images/cat1.png");
    mouseImg = loadImage("images/mouse1.png");

    catImg1 = loadImage("images/cat4.png");
    mouseImg1 = loadImage("images/mouse4.png");

    catMovingImg = loadAnimation("images/cat2.png", "images/cat3.png");
    mouseMovingImg = loadAnimation("images/mouse2.png", "images/mouse3.png");
}

function setup(){
    createCanvas(1100,800);
    //create tom and jerry sprites here
    catTom = createSprite(1000, 700);
    catTom.scale = 0.13;

    catTom.addAnimation("catSitting", catImg);
    catTom.changeAnimation("catSitting");

    mouseJerry = createSprite(80,700);
    mouseJerry.scale = 0.12;

    mouseJerry.addAnimation("mouseStanding", mouseImg);
    mouseJerry.changeAnimation("mouseStanding");

    
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(catTom.x - mouseJerry.x < (catTom.width - mouseJerry.width)/2)
    {
        catTom.velocityX = 0;
        
        catTom.addAnimation("happyCat", catImg1)
        catTom.changeAnimation("happyCat");
        catTom.x = 200;
        catTom.y = 680;

        mouseJerry.addAnimation("happyMouse", mouseImg1);
        mouseJerry.changeAnimation("happyMouse");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW)
    {
        mouseJerry.addAnimation("mouseTeasing", mouseMovingImg);
        mouseJerry.changeAnimation("mouseTeasing");
    }
    
    if(keyCode === LEFT_ARROW)
    {
        catTom.addAnimation("catRunning", catMovingImg);
        catTom.changeAnimation("catRunning");
        catTom.scale = 0.2;
        catTom.velocityX = -5;
    }

    
}
