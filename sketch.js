var gato,rato,canvas;
var gatoImg,gatoImg2,gatoImg3,ratoImg,ratoImg2,ratoImg3;
var imgdeFundo,jardin;


function preload() {
    //carregue as imagens aqui
    imgdeFundo = loadImage("images/garden.png");
    gatoImg = loadAnimation("images/cat1.png");
    gatoImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    ratoImg = loadAnimation("images/mouse1.png");
    ratoImg2 = loadAnimation("images/mouse2.png");
    ratoImg3 = loadAnimation("images/mouse3.png");
    
}

function setup(){
    canvas = createCanvas(1000,800);
    //crie os sprites de gato e rato aqui
    gato = createSprite(870,600);
    gato.addAnimation("gatosentado",gatoImg);
    gato.scale = 0.2;

    rato = createSprite(200,600);
    rato.addAnimation("ratoqueijo",ratoImg);
    rato.scale = 0.15;
    
    //jardin = createSprites(800,600);
    //jardin.addImage("imagemdeFundo",imgdeFundo);

}

function draw() {

    background(imgdeFundo);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem
    if(gato.x - rato.x <(gato.width - rato.width)/2){
        gato.velocityX = 0;
        gato.addAnimation("UltimaImagemGato",gatoImg3);
        gato.x = 300;
        gato.scale = 0.2;
        gato.changeAnimation("UltimaImagemGato");
        rato.addAnimation("UltimaImagemRato",ratoImg3);
        rato.scale = 0.15;
        rato.changeAnimation("UltimaImagemRato");
    }
    drawSprites();
}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui
  if(keyCode === LEFT_ARROW){
      gato.velocityX = -5;
      gato.addAnimation("gatorunning",gatoImg2);
      gato.changeAnimation("gatorunning");
      rato.addAnimation("ratoProvocando",ratoImg2);
      rato.frameDelay = 25;
      rato.changeAnimation("ratoProvacando");
      
    
  }

}
