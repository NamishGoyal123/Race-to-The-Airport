var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["2d00e4fc-51fb-4512-85f4-cd9989318896","974625b7-0f7a-4d17-b032-09a9fd6aae46","fc8b7654-c073-4f5a-aa39-d54067edd7e6","3308e503-01ff-483a-96aa-0ab81332fc2e","2e2bdc60-6486-4bee-9d26-e29525011be1","36709c5d-fbda-4546-a08e-073d834b6227","6f3f7f5c-2875-4a5d-b1b0-aa123fd7dc07","28b41d40-370e-41dd-a937-dba3e6b1a3a5","70dcc9f3-5e0b-4e76-a4ec-5486366ea70b","2ef0ac6a-57c9-45a7-bdb5-e28301ab8eca"],"propsByKey":{"2d00e4fc-51fb-4512-85f4-cd9989318896":{"name":"hill1","sourceUrl":"assets/api/v1/animation-library/gamelab/rd9oh060owV1Tug6HNh3TsO_MuJFZCK9/category_obstacles/rockGrassDown.png","frameSize":{"x":108,"y":239},"frameCount":1,"looping":true,"frameDelay":2,"version":"rd9oh060owV1Tug6HNh3TsO_MuJFZCK9","loadedFromSource":true,"saved":true,"sourceSize":{"x":108,"y":239},"rootRelativePath":"assets/api/v1/animation-library/gamelab/rd9oh060owV1Tug6HNh3TsO_MuJFZCK9/category_obstacles/rockGrassDown.png"},"974625b7-0f7a-4d17-b032-09a9fd6aae46":{"name":"hill2","sourceUrl":"assets/api/v1/animation-library/gamelab/c7njzBqNr5dJqCb8jXbsXQfJEdmMskSf/category_obstacles/rockGrass.png","frameSize":{"x":108,"y":239},"frameCount":1,"looping":true,"frameDelay":2,"version":"c7njzBqNr5dJqCb8jXbsXQfJEdmMskSf","loadedFromSource":true,"saved":true,"sourceSize":{"x":108,"y":239},"rootRelativePath":"assets/api/v1/animation-library/gamelab/c7njzBqNr5dJqCb8jXbsXQfJEdmMskSf/category_obstacles/rockGrass.png"},"fc8b7654-c073-4f5a-aa39-d54067edd7e6":{"name":"plane","sourceUrl":"assets/api/v1/animation-library/gamelab/FL00ou2GvZbHeGCRbai33gN3fUHgNjtp/category_vehicles/planeRed1.png","frameSize":{"x":88,"y":73},"frameCount":1,"looping":true,"frameDelay":2,"version":"FL00ou2GvZbHeGCRbai33gN3fUHgNjtp","loadedFromSource":true,"saved":true,"sourceSize":{"x":88,"y":73},"rootRelativePath":"assets/api/v1/animation-library/gamelab/FL00ou2GvZbHeGCRbai33gN3fUHgNjtp/category_vehicles/planeRed1.png"},"3308e503-01ff-483a-96aa-0ab81332fc2e":{"name":"dead","sourceUrl":null,"frameSize":{"x":88,"y":73},"frameCount":1,"looping":true,"frameDelay":12,"version":"TmMD41caEGjcU.6H47FCKxDKU1TQ0UGf","loadedFromSource":true,"saved":true,"sourceSize":{"x":88,"y":73},"rootRelativePath":"assets/3308e503-01ff-483a-96aa-0ab81332fc2e.png"},"2e2bdc60-6486-4bee-9d26-e29525011be1":{"name":"city","sourceUrl":"assets/api/v1/animation-library/gamelab/37D0bGsit4sN8LdqaxZTXUMXrbix3Fgw/category_backgrounds/city.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"37D0bGsit4sN8LdqaxZTXUMXrbix3Fgw","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/37D0bGsit4sN8LdqaxZTXUMXrbix3Fgw/category_backgrounds/city.png"},"36709c5d-fbda-4546-a08e-073d834b6227":{"name":"bullet","sourceUrl":null,"frameSize":{"x":419,"y":252},"frameCount":1,"looping":true,"frameDelay":12,"version":"w9QHDLJRyYj1LTFTV7jngvOOtBAUUMlF","loadedFromSource":true,"saved":true,"sourceSize":{"x":419,"y":252},"rootRelativePath":"assets/36709c5d-fbda-4546-a08e-073d834b6227.png"},"6f3f7f5c-2875-4a5d-b1b0-aa123fd7dc07":{"name":"enemy","sourceUrl":null,"frameSize":{"x":910,"y":333},"frameCount":1,"looping":true,"frameDelay":12,"version":"toNMmWQPEgHe1vSJQk4h1bCdub5ZL4s4","loadedFromSource":true,"saved":true,"sourceSize":{"x":910,"y":333},"rootRelativePath":"assets/6f3f7f5c-2875-4a5d-b1b0-aa123fd7dc07.png"},"28b41d40-370e-41dd-a937-dba3e6b1a3a5":{"name":"blast","sourceUrl":null,"frameSize":{"x":174,"y":175},"frameCount":9,"looping":false,"frameDelay":12,"version":"bEPm4fwjbn2Qt2N0hDGv_IIZDHIer1tf","loadedFromSource":true,"saved":true,"sourceSize":{"x":522,"y":525},"rootRelativePath":"assets/28b41d40-370e-41dd-a937-dba3e6b1a3a5.png"},"70dcc9f3-5e0b-4e76-a4ec-5486366ea70b":{"name":"re","sourceUrl":"assets/v3/animations/BRW65AXKXERx6po2uU-stCP4JXVPqhHCf8dzt4LI3G0/70dcc9f3-5e0b-4e76-a4ec-5486366ea70b.png","frameSize":{"x":412,"y":412},"frameCount":1,"looping":true,"frameDelay":4,"version":"MU62epstE3h5YoIqTNZeahUOC_2h9zN7","loadedFromSource":true,"saved":true,"sourceSize":{"x":412,"y":412},"rootRelativePath":"assets/v3/animations/BRW65AXKXERx6po2uU-stCP4JXVPqhHCf8dzt4LI3G0/70dcc9f3-5e0b-4e76-a4ec-5486366ea70b.png"},"2ef0ac6a-57c9-45a7-bdb5-e28301ab8eca":{"name":"go","sourceUrl":null,"frameSize":{"x":852,"y":480},"frameCount":1,"looping":true,"frameDelay":12,"version":"VTwlW4ogRDiOL_ayoW_AA9ZbBkwFSxhd","loadedFromSource":true,"saved":true,"sourceSize":{"x":852,"y":480},"rootRelativePath":"assets/2ef0ac6a-57c9-45a7-bdb5-e28301ab8eca.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var bg=createSprite(200,200);
bg.setAnimation("city");
bg.velocityX=-1;
bg.scale=2;
var bird = createSprite(100, 200, 10, 10);
bird.setAnimation("plane");
bird.scale=0.5;
bird.setCollider("circle",0,0,30);


var ground = createSprite(200,380,400,10);
ground.visible=false;
var group1 = createGroup();
var group2 = createGroup();
var gamestate="start";
var score= 0;

var Bullets= createGroup();
var Ghosts= createGroup();

var gameover= createSprite(200, 150, 100, 50);
gameover.setAnimation("go");
gameover.scale= 0.7;
gameover.visible= false;

var reset= createSprite(200, 250, 100, 100);
reset.setAnimation("re");
reset.scale= 0.15;
reset.visible= false;

function draw(){
  
  background("white");
   drawSprites();
  bird.depth+=2;
  if(bg.x<0){
    bg.x=bg.width/2;
  }
  if(gamestate=="start"){
    textSize(15);
  fill("black");
  text("PRESS SPACE TO START AND UP TO PLAY", 80, 150);
  }
  if(keyDown("space")){
    gamestate="play";
    bird.velocityY=3;
    
  }
if(gamestate=="play"){
  
   if (keyDown(ENTER) ) {
      bird.y-=13;
    }
 
  if(keyDown("s")){
     spawnBullets(); 
     playSound("assets/category_projectile/retro_game_weapon_-laser_shot_single.mp3");
    }
   if(bird.isTouching(ground)){
     //bird.velocityY=0;
     bird.setAnimation("dead");
    bg.velocityX= 0;
    bird.velocityY= 0;
    bird.collide(ground);
    gamestate= "end";
   // bird.setAnimation("blast");
    }
   createEdgeSprites();
   if(bird.y < 0){
     bird.velocityY= 9;
     //bird.setAnimation("dead");
     bird.visible=false;
     bg.velocityX= 0;
     ground.velocityX= 0;
     gamestate= "end";
     bird.setAnimation("blast");
     
    }
    
     spawnObstacles();
    spawnBullets();
     spawnObstacles1();
     spawnObstacles2();
     if(Bullets.isTouching(Ghosts)){
      Ghosts.destroyEach();
      Bullets.destroyEach();
      score= score + 10;
      //bird.setAnimation("blast");
     // gamestate= "end";
     playSound("assets/category_explosion/retro_game_classic_explosion_1.mp3");
    }
   if(group1.isTouching(bird)||group2.isTouching(bird) || Ghosts.isTouching(bird)){
      gamestate="end"; 
          bg.velocityX= 0;
          bird.velocityY= 0;
          Bullets.destroyEach();
          Ghosts.setVelocityXEach(0);
          bird.setAnimation("blast");
          playSound("assets/category_explosion/8bit_explosion.mp3");
    }
    
    //score = score  + Math.round(World.frameRate/ 30);
  }
  if(mousePressedOver(reset)){
    restart();
  }
  else if(gamestate=="end"){
      bird.velocityY=0;
     group1.setVelocityXEach(0);
     group2.setVelocityXEach(0);
     group1.setLifetimeEach(-1);
     group2.setLifetimeEach(-1);
     
  }
 
  
  fill("black");
  stroke("white");
  textSize(20);
  text("SCORE:" + score, 30, 30);
}
function spawnObstacles() {
  if(World.frameCount % 100 === 0) {
    var ghost = createSprite(400,randomNumber(100, 300),10,40);
    ghost.velocityX = -4;
    
    //generate random obstacles
    //var rand = randomNumber(1,3);
    ghost.setAnimation("enemy");
    
    //assign scale and lifetime to the obstacle           
    ghost.scale = 0.1;
    ghost.lifetime = 100;
    //add each obstacle to the group
    Ghosts.add(ghost);
  }
}
function spawnObstacles1() {
  if(World.frameCount %  95 == 0) {
    var tiles1=createSprite(400,random(320,390));
  tiles1.setAnimation("hill2");
   tiles1.setCollider("rectangle",10,10,25,220);
    tiles1.velocityX=-3;
    tiles1.lifetime=140;
    tiles1.scale=random(0.7,1);
   group1.add(tiles1);
  // tiles1.debug=true;
     
  }
}
function spawnObstacles2() {
  if(World.frameCount % 60 == 0) {
    var tiles2=createSprite(400,random(0,80));
   tiles2.setAnimation("hill1");
   tiles2.setCollider("rectangle",10,10,25,200);
  tiles2.scale=random(0.7,1);
    tiles2.velocityX=-4;
    tiles2.lifetime=140;
    group2.add(tiles2);
    //tiles2.debug=true;
  }
}
function spawnBullets() {
  if(keyDown("s")){
   var bullet = createSprite(100, 200);
    bullet.velocityX = 4;
    //officer.setAnimation("shoot");
    //generate random obstacles
    //var rand = randomNumber(1,3);
    bullet.setAnimation("bullet");
    bullet.x=bird.x;
    bullet.y=bird.y;
    //assign scale and lifetime to the obstacle           
    bullet.scale = 0.01;
    bullet.lifetime = 100;
    //add each obstacle to the group
    Bullets.add(bullet);
  
  }
}
function restart(){
  gamestate= "start";
  score = 0;
  //officer.setAnimation("standing");
  // stop everything
  group2.destroyEach();
  group1.destroyEach();
  Ghosts.destroyEach();
  
  gameover.visible= true;
  reset.visible= true;
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
