var canvas;
var music , music2 , music3;
var surface1,surface2,surface3,surface4;
var ball ;

function preload(){
    music = loadSound("note1.wav");
    music2  = loadSound("note2.wav")
    music3 = loadSound("note3.wav")
}


function setup(){
    
    canvas = createCanvas(800,600);

    
    surface1 = createSprite(100,580,170,30)
    surface1.shapeColor = 'orange';
    surface2 = createSprite(300,580,170,30)
    surface2.shapeColor = 'lightblue'
    surface3 = createSprite(500,580,170,30)
    surface3.shapeColor = 'lightgreen'
    surface4 = createSprite(700,580,170,30)
    surface4.shapeColor = 'pink'
    ball = createSprite(random(50,750),100,30,30)
    ball.shapeColor = 'white'

    ball.velocityX = random(-2,-6)
    ball.velocityY = random(3,5)


}

function draw() {
    //music.play();
    background('grey');

    if(ball.isTouching(surface1)){
        ball.shapeColor = surface1.shapeColor
        music.play()
    }
    if(ball.isTouching(surface2)){
        ball.shapeColor = surface2.shapeColor
        music2.play()
    }
    if(ball.isTouching(surface3)){
        ball.shapeColor = surface3.shapeColor
        music3.play();
    }
    if(ball.isTouching(surface4)){
        ball.shapeColor = surface4.shapeColor
    }

    if(Collision_Detecting(ball,surface4)){
        ball.velocityX = 0
        ball.velocityY = 0
        music.stop()
        music2.stop()
        music3.stop()
    }

    edges = createEdgeSprites();
    ball.bounceOff(edges)
    ball.bounceOff(surface1)
    ball.bounceOff(surface2)
    ball.bounceOff(surface3)
    ball.bounceOff(surface4)
    drawSprites();



    
}
