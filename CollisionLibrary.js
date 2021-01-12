function Collision_Detecting(rect1,rect2) {

    if (rect1.x - rect2.x < rect2.width/2 + rect1.width/2
      && rect2.x - rect1.x < rect2.width/2 + rect1.width/2
      && rect1.y - rect1.y < rect2.height/2 + rect1.height/2
      && rect2.y - rect1.y < rect2.height/2 + rect1.height/2) {
        return true;
  }
  else {
      return false;
  }
}
function Bounce_Detection(surf1,surf2) {
  if (surf1.x - surf2.x < surf2.width/2 + surf1.width/2
    && surf2.x - surf1.x <surf2.width/2 + surf1.width/2) {
    surf1.velocityX = surf1.velocityX * (-1);
  surf2.velocityX = surf2.velocityX * (-1);
    
}
if (surf1.y - surf2.y < surf2.height/2 + surf1.height/2
  && surf2.y - surf1.y < surf2.height/2 + surf1.height/2){
  surf1.velocityY = surf1.velocityY * (-1);
  surf2.velocityY = surf2.velocityY * (-1);
}
  
}