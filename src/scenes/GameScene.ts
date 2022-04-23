import { GameObjects, Input, Sound } from "phaser";
import { BaseGameScene } from "./BaseGameScene";
import GameData from "../GameData";
import { Block } from "../blocks/Block";
import { OBlock } from "../blocks/OBlock";
import { Foods } from "../blocks/Foods";
import { Board } from "../Board";
import { GameUIScene } from "./GameUIScene";
import { MenuScene } from "./MenuScene"
import { JBlock } from "../blocks/JBlock";
import { LBlock } from "../blocks/LBlock";
import { SBlock } from "../blocks/SBlock";
import { ZBlock } from "../blocks/ZBlock";
import { TBlock } from "../blocks/TBlock";
import { IBlock } from "../blocks/IBlock";

var foods = new Foods();

export class GameScene extends BaseGameScene {

  private cursors;
  private tickSound: Sound.BaseSound;
  private lineBreakSound: Sound.BaseSound;

  private readonly tileSize = GameData.tileSize;
  private readonly pointsPerBlock = 4;
  private readonly pointsPerLine = 100;

  private lastRotation: number = 0;
  private lastSlide: number = 0;
  private lastDescend: number = 0;
  private lastQuickDescend: number = 0;

  private descendInterval = 750;
  private quickDescendInterval = 25;
  private rotationInterval = 150;
  private slideInterval = 50;

  private blockQuickDescend = false;

  private blockTypes = [JBlock, LBlock, SBlock, ZBlock, TBlock, IBlock, OBlock];
  private foodTypes = Array.from(foods.foodMap.keys())
  public nextBlankBlock: Block;
  public nextFoodText = "aaa";
  public foodTextObject: GameObjects.Text;

  private board: Board;

  constructor() {
    super({ key: GameScene.name });
  }

  public create() {
    super.create();
    this.cursors = this.input.keyboard.createCursorKeys()
    GameData.gamePoints = 0;
    this.scene.launch(GameUIScene.name);
    this.addControls();

    this.board = new Board(this.height, this.tileSize * GameData.boardWidthTileMultiplier, this.tileSize);
    this.board.initNextBlock(this.generateBlock())
    this.board.setCurrentBlock(this.generateBlock());
    this.nextBlankBlock = Object.create(this.board.nextBlock);
    this.nextBlankBlock._tiles =  [this.nextBlankBlock.createTile(this, "block"), 
    this.nextBlankBlock.createTile(this, "block"),
    this.nextBlankBlock.createTile(this, "block"), 
    this.nextBlankBlock.createTile(this, "block")];
    this.nextBlankBlock.position = 1;
    this.nextBlankBlock.setOrigin(380, 300)
    
    this.foodTextObject = this.add.text(400, 450, this.nextFoodText, {color:"black"});

    this.tickSound = this.sound.add("tick");
    this.lineBreakSound = this.sound.add("lineBreak", { volume: 0.2 });

    this.board.on(Board.blockLaidEvent, this.onLaidBlock, this);
    this.board.on(Board.lineBrakeEvent, this.onLineBreak, this);
    this.board.on(Board.boardFullEvent, this.gameOver, this);
    this.board.on(Board.blockWillBeLaidEvent, () => this.blockQuickDescend = true, this);
    this.board.on(Board.blockDescendEvent, () => this.blockQuickDescend = false, this);
   
    

    GameData.startTime = new Date();
    // TODO: Add button for muting backround music and sound effects
    // TODO: Add color changing on level progression
  }

  public update(time: number, delta: number) {
    this.nextFoodText = this.board.nextBlock.food;
    this.foodTextObject.setText(this.nextFoodText);

    var sprites = this.nextBlankBlock._tiles;
    sprites.forEach(sprite => {
      sprite.destroy();
    })

    this.nextBlankBlock = Object.create(this.board.nextBlock);
    this.nextBlankBlock._tiles =  [this.nextBlankBlock.createTile(this, "block"), 
    this.nextBlankBlock.createTile(this, "block"),
    this.nextBlankBlock.createTile(this, "block"), 
    this.nextBlankBlock.createTile(this, "block")];
    this.nextBlankBlock.position = 1;
    this.nextBlankBlock.setOrigin(380, 300)


    if (this.lastDescend === 0) {
      this.lastDescend = time;
      return;
    }

    if (time - this.lastDescend >= this.descendInterval) {
      this.lastDescend = time;
      this.board.descendBlock();
    }

    if (this.cursors.shift.isDown && time - this.lastRotation >= this.rotationInterval) {
      this.lastRotation = time;
      this.board.rotateBlockClockwise();
    }

    if (this.cursors.down.isDown && !this.blockQuickDescend && time - this.lastQuickDescend >= this.quickDescendInterval) {
      this.lastQuickDescend = time;
      this.board.descendBlock();
    }

    if (time - this.lastSlide >= this.slideInterval) {
      this.lastSlide = time;
      if (this.cursors.right.isDown) {
        this.board.slideBlock(this.tileSize);
      } else if (this.cursors.left.isDown) {
        this.board.slideBlock(-this.tileSize);
      }
    }
  }

  private onLineBreak(numberOfLines: number) {
    this.lineBreakSound.play();
    const multiplier = [0, 1, 1.5, 2, 2.5];
    GameData.gamePoints += this.pointsPerLine * numberOfLines * multiplier[numberOfLines];
    this.blockQuickDescend = false;
    this.board.setCurrentBlock(this.generateBlock());
  }

  private onLaidBlock() {
    GameData.gamePoints += this.pointsPerBlock;
    this.descendInterval -= 1;
    this.tickSound.play();
    this.blockQuickDescend = false;
    this.board.setCurrentBlock(this.generateBlock());
  }

  private gameOver() {
    this.scene.remove(GameUIScene.name);
    this.scene.start(MenuScene.name, { showPoints: true });
  }

  protected setBackground() {
    super.setBackground();

    const graphics = this.add.graphics();
    graphics.fillStyle(this.gameBoardColor, 1);
    graphics.fillRect(0, 0, this.tileSize * GameData.boardWidthTileMultiplier, this.height);
  }


  private generateBlock(): Block {
    // TODO: Add preview of next block that will appear via food type
    this.foodTypes = this.foodTypes.filter(food => food != 'blank');
    const blockType = this.blockTypes[Math.floor(Math.random() * this.blockTypes.length)];
    const food = this.foodTypes[Math.floor(Math.random() * this.foodTypes.length)];
    return new blockType(this, this.tileSize, food);
  }

  private addControls() {
    this.cursors = this.input.keyboard.createCursorKeys();
    // TODO: Add pausing game using ESC key
  }
}
