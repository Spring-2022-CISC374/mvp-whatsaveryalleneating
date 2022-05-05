import { GameScene} from "./scenes/GameScene"
import { LoadScene } from "./scenes/LoadScene"
import { MenuScene } from "./scenes/MenuScene"
import { GameUIScene } from "./scenes/GameUIScene"
import { FoodPrep } from "./scenes/FoodPrep";
import { Hub } from "./scenes/Hub";
import { Load_Hub } from "./scenes/Load_Hub";
import { UFO } from "./scenes/UFO";
import { Load_UFO } from "./scenes/Load_UFO";
import { End_UFO } from "./scenes/End_UFO";
import { VT_Tut } from "./scenes/VT_Tutorial_Scene";

class Game extends Phaser.Game {
  private static instance: Game;

  private constructor() {
    const config = {
      height: 640,
      backgroundColor: 0xFFFFFF,
      parent: "content",
      physics: {
        arcade: {
          gravity: { y: 800 },
        },
        default: "arcade",
      },
      pixelArt: false,
      scene: [Load_Hub, Hub, Load_UFO, UFO, End_UFO, LoadScene, MenuScene, GameScene, GameUIScene, FoodPrep, VT_Tut],
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
