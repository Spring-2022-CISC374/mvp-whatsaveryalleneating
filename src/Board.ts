import { GameObjects } from "phaser";
import { Block } from "./blocks/Block";

export class Board extends Phaser.Events.EventEmitter {
    public static readonly lineBrakeEvent = "LineBrakeEvent";
    public static readonly blockLaidEvent = "BlockLaidEvent";
    public static readonly boardFullEvent = "BoardFullEvent";
    public static readonly blockDescendEvent = "BlockDescendEvent";
    public static readonly blockWillBeLaidEvent = "BlockWillBeLaidEvent";

    public height: number;
    public width: number;

    private laidTiles: GameObjects.Sprite[];
    public gridWidth = 10;
    public gridHeight = 19;
    public grid: GameObjects.Sprite[][];
    private currentBlock: Block;
    public nextBlock: Block;

    private tileSize = 0;
    private startX = 0;
    private startY = 0;

    constructor(height: number, width: number, tileSize: number) {
        super();
        this.height = height;
        this.width = width;
        this.tileSize = tileSize;
        this.grid = [];
        this.startX = (this.width / 2) - this.tileSize;
        for (let i = 0; i < this.gridHeight; i++) {
            this.grid.push(new Array(this.gridWidth).fill(null));
        }
        console.log(this.grid);
        this.laidTiles = [];
    }

    //new functions start here
    public addBlockToGrid(piece: GameObjects.Sprite) {
        this.grid[(piece.y/32)-1][piece.x/32] = piece;
    }

    public setCurrentBlock(block: Block) {
        this.currentBlock = this.nextBlock;
        this.nextBlock = block;
        this.nextBlock.setOrigin(this.startX - 1, this.startY - 100);
        this.currentBlock.rotateRandomly();
        this.currentBlock.setOrigin(this.startX, this.startY);
    }

    public initNextBlock(block: Block) {
        this.nextBlock = block;
    }

    public clearBlocks() {
        this.laidTiles.forEach((block) => {
            let count = 1;
            let queue = [block];
            let blocksToDestroy = [block];
            let el: any;
            while (queue.length > 0) {
                el = queue.shift();
                var gridX = el.x / 32;
                var gridY = (el.y / 32)-1;
                var neighbors = []
                
                if (gridX > 0) {
                    neighbors.push([gridY, gridX - 1]);
                  }
              
                  if (gridY > 0) {
                    neighbors.push([gridY - 1, gridX]);
                  }
              
                  if (gridX < this.gridHeight - 1) {
                    neighbors.push([gridY, gridX + 1]);
                  }
              
                  if (gridY < this.gridWidth - 2) {
                    neighbors.push([gridY + 1, gridX]);
                  }
                  
                // build neigbors array
                neighbors.forEach((pos) => {
                    const neighbor = this.grid[pos[0]][pos[1]]
                    if (neighbor &&
                        el.texture.key === neighbor.texture.key &&
                        !blocksToDestroy.includes(neighbor)) {
                        count += 1;
                        queue.push(neighbor);
                        blocksToDestroy.push(neighbor);
                    }
                });
            }
            if (count >= 5) {
                blocksToDestroy.forEach((blockToDelete) => {
                    this.grid[(blockToDelete.y / 32)-1][blockToDelete.x / 32] = null;
                    const idx = this.laidTiles.indexOf(blockToDelete);
                    this.laidTiles.splice(idx, 1);
                    blockToDelete.destroy()
                });
                return blocksToDestroy.length;
            }
        });
        return 0
    }

    //new functions end here

    public rotateBlockClockwise() {
        this.currentBlock.rotateClockwise();
        if (this.willCollide() || this.currentBlock.y + this.tileSize >= this.height) {
            this.currentBlock.rotateCounterClockwise();
        } else {
            if (this.currentBlock.x < 0) {
                this.currentBlock.slide(-this.currentBlock.x);
            } else if (this.currentBlock.maxx >= this.width) {
                this.currentBlock.slide(-(this.currentBlock.maxx - this.width + this.tileSize));
            }
        }
    }

    public slideBlock(deltaX: number) {
        if (!this.willCollide(deltaX) && this.currentBlock.maxx + deltaX < this.width && this.currentBlock.x + deltaX >= 0) {
            this.currentBlock.slide(deltaX);
        }
    }

    public descendBlock() {
        if (this.willCollide(0, this.tileSize) || (this.currentBlock.y + this.tileSize) >= this.height) {
            this.laidTiles.push(...this.currentBlock.tiles); 
            
            this.grid = [];
            for (let i = 0; i < this.gridHeight; i++) {
                this.grid.push(new Array(this.gridWidth).fill(null));
            }
                       
            this.laidTiles.forEach(sprite => {
                this.addBlockToGrid(sprite);
            })
            
            const removedLinesCount = this.checkFullLines();
            this.emit(removedLinesCount > 0 ? Board.lineBrakeEvent : Board.blockLaidEvent, removedLinesCount);

            if (this.laidTiles.some(tile => tile.y === 0)) {
                this.emit(Board.boardFullEvent);
            }
        } else {
            this.currentBlock.descend(this.tileSize);
            this.emit(Board.blockDescendEvent);

            if (this.willCollide(0, this.tileSize) || (this.currentBlock.y + this.tileSize) >= this.height) {
                this.emit(Board.blockWillBeLaidEvent);
            }
        }
    }

    // TODO BREAK INTO TWO SEPARATE FUNCTIONS -> MODIFY HOW BLOCKS ARE DELETED VIA CHECKING THE SPRITE KEY
    private checkFullLines() {
        console.log(this.laidTiles)
        return this.clearBlocks()
    }

    private willCollide(deltaX: number = 0, deltaY: number = 0): boolean {
        return this.currentBlock.tiles.some(tile => {
            return this.laidTiles.some(block => block.x === tile.x + deltaX && block.y === tile.y + deltaY);
        });
    }
}
