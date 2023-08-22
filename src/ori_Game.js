import * as PIXI from "pixi.js";
import { gsap } from "gsap";
import { Howl, howl, howler } from "howler";
import Stage from "./Stage";





export default class ori_Game {

  constructor() {
    this.myStage = new Stage();
    this.scene = this.myStage.scene;
    this.scene.sortableChildren = true;
    this.background = this.myStage.bg;

  

  

  

    this.si = this.myStage.stageInfo;

    

    let assets = [
      "../assets/spritesheet/ninjarack.json",
      "../assets/images/temple.png",
      "../assets/images/ninja-jump.png",
      "../assets/images/play.png",
    ];

    const loader = PIXI.Loader.shared
      .add(assets)
      

      .load((loader, res) => {

        let bgTexture = PIXI.Texture.from("../assets/images/background.jpg");
        let _bg = new PIXI.Sprite(bgTexture);
        this.background.addChild(_bg);

        this.counter = -1;

        const boxOne = [0xDE3249, 0xf8ff00, 0x42e806]
        const posX = [0, 300, 600]
        let startAtY=-500;
        let myInterval = setInterval ( ()=>{

            this.counter++;

            console.log('im loaded');

            

           
            
            this.boxOne = new PIXI.Graphics();
            this.boxOne.beginFill(boxOne[this.counter]);
            this.boxOne.drawRect(75, startAtY,250,200);
            this.boxOne.alpha = 1;
            this.boxOne.x = posX[this.counter];
            this.boxOne.interactive=true;
            this.boxOne.buttonMode=true;
            this.boxOne.endFill();
            this.scene.addChild(this.boxOne)

            this.boxOne.on('pointerdown',(event)=>{

                

                gsap.to(event.currentTarget,{

                    duration:4,
                    y:-500,
                    ease:"Circ.easeOut"

                })
            })
            
            gsap.to(this.boxOne,{
                duration:.5,
                y:1150 -150,
                ease:"Bounce.easeOut"
            })

          
             if(this.counter > 1) clearInterval(myInterval)

             

        },1000)

        

        


        
      });//END Loader

    

      
   
  } // END constructor
} // END class
