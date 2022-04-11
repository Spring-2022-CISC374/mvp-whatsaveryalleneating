import { GameScene} from "./scenes/GameScene"
import { LoadScene } from "./scenes/LoadScene"
import { MenuScene } from "./scenes/MenuScene"
import { GameUIScene } from "./scenes/GameUIScene"
import { FoodPrep } from "./scenes/FoodPrep";
import { Hub } from "./scenes/Hub";

class Game extends Phaser.Game {
  private static instance: Game;

  private constructor() {
    const config = {
      height: 640,
      backgroundColor: 0x000000,
      parent: "content",
      physics: {
        arcade: {
          gravity: { y: 800 },
        },
        default: "arcade",
      },
      pixelArt: false,
      scene: [Hub, LoadScene, MenuScene, GameScene, GameUIScene, FoodPrep],
      type: 0,
      width: 500,
      zoom: 1,
    };

    super(config);
  }

  public static get Instance() {
    return this.instance || (this.instance = new this());
  }
}

export default Game.Instance;
