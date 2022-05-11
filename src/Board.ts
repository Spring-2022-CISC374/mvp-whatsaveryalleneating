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
    private emitter: number;

    private laidTiles: GameObjects.Sprite[];
    public gridWidth = 10;
    public gridHeight = 19;
    public grid: GameObjects.Sprite[][];
    private currentBlock: Block;
    public nextBlock: Block;

    private tileSize = 0;
    private startX = 0;
    private startY = 0;
    private gameOver=false;

    constructor(height: number, width: number, tileSize: number) {
        super();
        this.height = height;
        this.width = width;
        this.tileSize = tileSize;
        this.grid = [];
        this.emitter = 0;
        this.startX = (this.width / 2) - this.tileSize;
        for (let i = 0; i < this.gridHeight; i++) {
            this.grid.push(new Array(this.gridWidth).fill(null));
        }
        console.log(this.grid);
        this.laidTiles = [];
    }

    //new functions start here
    public addBlockToGrid(piece: GameObjects.Sprite) {
        console.log(piece.y/32)
        if((piece.y / 32) !== 0){
            this.grid[(piece.y / 32) - 1][piece.x / 32] = piece;
        }
        else{
            this.gameOver=true;
            this.emit(Board.boardFullEvent);       
        }
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
        if(this.gameOver){
            return;
        }
        this.laidTiles.forEach((block) => {
            let count = 1;
            let queue = [block];
            let blocksToDestroy = [block];
            let el: any;
            while (queue.length > 0) {
                el = queue.shift();
                var gridX = el.x / 32;
                var gridY = (el.y / 32) - 1;
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
                var lines = [];
                this.emitter = 1;
                //create lines to fall down some
                blocksToDestroy.forEach(block => {
                    var gridY = (block.y / 32) - 1;
                    var gridX = (block.x / 32);
                    if (this.grid[gridY - 1][gridX] !== null) {
                        lines.push(this.grid[gridY - 1][gridX]);
                    }
                })
                blocksToDestroy.forEach(block => {
                    lines = lines.filter(item => item !== block)
                })
                console.log("these are the blocks to fall")
                console.log(lines);
                //
                blocksToDestroy.forEach((blockToDelete) => {
                    this.grid[(blockToDelete.y / 32) - 1][blockToDelete.x / 32] = null;
                    const idx = this.laidTiles.indexOf(blockToDelete);
                    this.laidTiles.splice(idx, 1);
                    blockToDelete.destroy()
                });
                this.dropToEmptyPos(lines);
            }
        });
        return 0
    }

    dropToEmptyPos(tiles: GameObjects.Sprite[]) {
        let clearBlock = false;

        tiles.forEach((block) => {
            const row = (block.y / 32) - 1;;
            const col = block.x / 32; // { y, x }
            console.log(row);
            console.log(col)
            // For block already on the bottom, don't bother checking
            if (row === this.gridHeight - 1) return;

            // if block's below space is null, then shift the column one down
            if (!this.grid[row + 1][col]) {
                clearBlock = true;
                for (let i = row; i > 0; i--) {
                    // If the grid is occupied, then
                    // reset the block's row to reflect the shift in position
                    if (this.grid[i][col]) {
                        const currentBlock = this.grid[i][col];
                        currentBlock.y += 32;
                    }
                    this.grid[i + 1][col] = this.grid[i][col];
                }
                this.grid[0][col] = null;
            }
        });
        tiles.forEach((block) => {
            const row = (block.y / 32) - 1;;
            const col = block.x / 32; // { y, x }
            // For block already on the bottom, don't bother checking
            if (row === this.gridHeight - 1) return;

            // if blocks's below space is null, then shift the column one down
            if (!this.grid[row + 1][col]) {
                clearBlock = false;
                for (let i = row; i > 0; i--) {
                    // If the grid is occupied, then
                    // reset the puyo's row to reflect the shift in position
                    if (this.grid[i][col]) {
                        const currentBlock = this.grid[i][col];
                        currentBlock.y += 32;
                    }
                    this.grid[i + 1][col] = this.grid[i][col];
                }
                this.grid[0][col] = null;
            }
        });
        this.rerender()
        this.clearBlocks();
    }

    public rerender() {
        this.laidTiles = [].concat(...this.grid);
        this.laidTiles = this.laidTiles.filter(n => n);
        this.grid = [];
        for (let i = 0; i < this.gridHeight; i++) {
            this.grid.push(new Array(this.gridWidth).fill(null));
        }
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
            console.log("emitter")
            console.log(this.emitter);
            if(this.emitter){
                this.emit(Board.lineBrakeEvent)
                this.emitter = 0;
            }
            else{
                this.emit(Board.blockLaidEvent)
            }
            this.clearBlocks();
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
