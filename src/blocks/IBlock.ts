import { Block } from "./Block";
import { PositionMatrixItem } from "./PositionMatrixItem";

export class IBlock extends Block {

    public positonMatrix: PositionMatrixItem[][] = [
        [
            new PositionMatrixItem(-2 * this.tileSize, 0),
            new PositionMatrixItem(-1 * this.tileSize, 0),
            new PositionMatrixItem(0, 0),
            new PositionMatrixItem(this.tileSize, 0),
        ],
        [
            new PositionMatrixItem(0, -2 * this.tileSize),
            new PositionMatrixItem(0, -1 * this.tileSize),
            new PositionMatrixItem(0, 0),
            new PositionMatrixItem(0, this.tileSize),
        ],
    ];
}
