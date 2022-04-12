/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/Game.ts","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Board.ts":
/*!**********************!*\
  !*** ./src/Board.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Board = void 0;\r\nvar Board = /** @class */ (function (_super) {\r\n    __extends(Board, _super);\r\n    function Board(height, width, tileSize) {\r\n        var _this = _super.call(this) || this;\r\n        _this.tileSize = 0;\r\n        _this.startX = 0;\r\n        _this.startY = 0;\r\n        _this.height = height;\r\n        _this.width = width;\r\n        _this.tileSize = tileSize;\r\n        _this.startX = (_this.width / 2) - _this.tileSize;\r\n        _this.laidTiles = [];\r\n        return _this;\r\n    }\r\n    Board.prototype.setCurrentBlock = function (block) {\r\n        this.currentBlock = block;\r\n        this.currentBlock.rotateRandomly();\r\n        this.currentBlock.setOrigin(this.startX, this.startY);\r\n    };\r\n    // TODO - VALIDATE THIS WORKS WITH THE INCOMING BLOCK CODE\r\n    Board.prototype.rotateBlockClockwise = function () {\r\n        this.currentBlock.rotateClockwise();\r\n        if (this.willCollide() || this.currentBlock.y + this.tileSize >= this.height) {\r\n            this.currentBlock.rotateCounterClockwise();\r\n        }\r\n        else {\r\n            if (this.currentBlock.x < 0) {\r\n                this.currentBlock.slide(-this.currentBlock.x);\r\n            }\r\n            else if (this.currentBlock.maxx >= this.width) {\r\n                this.currentBlock.slide(-(this.currentBlock.maxx - this.width + this.tileSize));\r\n            }\r\n        }\r\n    };\r\n    Board.prototype.slideBlock = function (deltaX) {\r\n        if (!this.willCollide(deltaX) && this.currentBlock.maxx + deltaX < this.width && this.currentBlock.x + deltaX >= 0) {\r\n            this.currentBlock.slide(deltaX);\r\n        }\r\n    };\r\n    Board.prototype.descendBlock = function () {\r\n        var _a;\r\n        if (this.willCollide(0, this.tileSize) || (this.currentBlock.y + this.tileSize) >= this.height) {\r\n            (_a = this.laidTiles).push.apply(_a, this.currentBlock.tiles);\r\n            var removedLinesCount = this.checkFullLines();\r\n            this.emit(removedLinesCount > 0 ? Board.lineBrakeEvent : Board.blockLaidEvent, removedLinesCount);\r\n            if (this.laidTiles.some(function (tile) { return tile.y === 0; })) {\r\n                this.emit(Board.boardFullEvent);\r\n            }\r\n        }\r\n        else {\r\n            this.currentBlock.descend(this.tileSize);\r\n            this.emit(Board.blockDescendEvent);\r\n            if (this.willCollide(0, this.tileSize) || (this.currentBlock.y + this.tileSize) >= this.height) {\r\n                this.emit(Board.blockWillBeLaidEvent);\r\n            }\r\n        }\r\n    };\r\n    // TODO BREAK INTO TWO SEPARATE FUNCTIONS -> MODIFY HOW BLOCKS ARE DELETED VIA CHECKING THE SPRITE KEY\r\n    Board.prototype.checkFullLines = function () {\r\n        var _this = this;\r\n        var tilesPerLine = this.width / this.tileSize;\r\n        var ys = this.laidTiles.map(function (tile) { return tile.y; }).filter(function (y, index, array) { return y && array.indexOf(y) === index; }).sort(function (y1, y2) { return y1 - y2; });\r\n        var removedLines = 0;\r\n        ys.forEach(function (y) {\r\n            var line = _this.laidTiles.filter(function (tile) { return tile.y === y; });\r\n            if (line.length === tilesPerLine) {\r\n                line.forEach(function (tile) { return tile.destroy(); });\r\n                // remove line\r\n                _this.laidTiles = _this.laidTiles.filter(function (tile) { return line.indexOf(tile) === -1; });\r\n                // move rest of blocks down\r\n                _this.laidTiles.filter(function (tile) { return tile.y < y; }).forEach(function (tile) { return tile.y += _this.tileSize; });\r\n                removedLines++;\r\n            }\r\n        });\r\n        return removedLines;\r\n    };\r\n    Board.prototype.willCollide = function (deltaX, deltaY) {\r\n        var _this = this;\r\n        if (deltaX === void 0) { deltaX = 0; }\r\n        if (deltaY === void 0) { deltaY = 0; }\r\n        return this.currentBlock.tiles.some(function (tile) {\r\n            return _this.laidTiles.some(function (block) { return block.x === tile.x + deltaX && block.y === tile.y + deltaY; });\r\n        });\r\n    };\r\n    Board.lineBrakeEvent = \"LineBrakeEvent\";\r\n    Board.blockLaidEvent = \"BlockLaidEvent\";\r\n    Board.boardFullEvent = \"BoardFullEvent\";\r\n    Board.blockDescendEvent = \"BlockDescendEvent\";\r\n    Board.blockWillBeLaidEvent = \"BlockWillBeLaidEvent\";\r\n    return Board;\r\n}(Phaser.Events.EventEmitter));\r\nexports.Board = Board;\r\n\n\n//# sourceURL=webpack:///./src/Board.ts?");

/***/ }),

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar GameScene_1 = __webpack_require__(/*! ./scenes/GameScene */ \"./src/scenes/GameScene.ts\");\r\nvar LoadScene_1 = __webpack_require__(/*! ./scenes/LoadScene */ \"./src/scenes/LoadScene.ts\");\r\nvar MenuScene_1 = __webpack_require__(/*! ./scenes/MenuScene */ \"./src/scenes/MenuScene.ts\");\r\nvar GameUIScene_1 = __webpack_require__(/*! ./scenes/GameUIScene */ \"./src/scenes/GameUIScene.ts\");\r\nvar FoodPrep_1 = __webpack_require__(/*! ./scenes/FoodPrep */ \"./src/scenes/FoodPrep.ts\");\r\nvar Hub_1 = __webpack_require__(/*! ./scenes/Hub */ \"./src/scenes/Hub.ts\");\r\nvar Game = /** @class */ (function (_super) {\r\n    __extends(Game, _super);\r\n    function Game() {\r\n        var config = {\r\n            height: 640,\r\n            backgroundColor: 0x000000,\r\n            parent: \"content\",\r\n            physics: {\r\n                arcade: {\r\n                    gravity: { y: 800 },\r\n                },\r\n                default: \"arcade\",\r\n            },\r\n            pixelArt: false,\r\n            scene: [Hub_1.Hub, LoadScene_1.LoadScene, MenuScene_1.MenuScene, GameScene_1.GameScene, GameUIScene_1.GameUIScene, FoodPrep_1.FoodPrep],\r\n            type: 0,\r\n            width: 500,\r\n            zoom: 1,\r\n        };\r\n        return _super.call(this, config) || this;\r\n    }\r\n    Object.defineProperty(Game, \"Instance\", {\r\n        get: function () {\r\n            return this.instance || (this.instance = new this());\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    return Game;\r\n}(Phaser.Game));\r\nexports.default = Game.Instance;\r\n\n\n//# sourceURL=webpack:///./src/Game.ts?");

/***/ }),

/***/ "./src/GameData.ts":
/*!*************************!*\
  !*** ./src/GameData.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Game_1 = __webpack_require__(/*! ./Game */ \"./src/Game.ts\");\r\nvar GameData = /** @class */ (function () {\r\n    function GameData() {\r\n        this.gamePointsChangedEvent = \"GamePointsChangedEvent\";\r\n        this.gameStartChangedEvent = \"GameStartChangedEvent\";\r\n        this.tileSize = 32;\r\n        this.boardWidthTileMultiplier = 10;\r\n        this._gamePoints = 0;\r\n    }\r\n    Object.defineProperty(GameData, \"Instance\", {\r\n        get: function () {\r\n            return this.instance || (this.instance = new this());\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(GameData.prototype, \"gamePoints\", {\r\n        get: function () {\r\n            return this._gamePoints;\r\n        },\r\n        set: function (val) {\r\n            this._gamePoints = val;\r\n            Game_1.default.events.emit(this.gamePointsChangedEvent);\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(GameData.prototype, \"startTime\", {\r\n        get: function () {\r\n            return this._startTime;\r\n        },\r\n        set: function (val) {\r\n            this._startTime = val;\r\n            Game_1.default.events.emit(this.gameStartChangedEvent);\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    return GameData;\r\n}());\r\nexports.default = GameData.Instance;\r\n\n\n//# sourceURL=webpack:///./src/GameData.ts?");

/***/ }),

/***/ "./src/blocks/Block.ts":
/*!*****************************!*\
  !*** ./src/blocks/Block.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Block = void 0;\r\nvar Foods_1 = __webpack_require__(/*! ./Foods */ \"./src/blocks/Foods.ts\");\r\nvar foods = new Foods_1.Foods();\r\nvar Block = /** @class */ (function () {\r\n    // TODO - Get food type to work\r\n    function Block(scene, tileSize, food) {\r\n        this.tileSize = 0;\r\n        this._position = 0;\r\n        this.tileSize = tileSize;\r\n        this.food = food;\r\n        this._tiles = [this.createTile(scene, foods.foodMap.get(food)[0]), this.createTile(scene, foods.foodMap.get(food)[1]),\r\n            this.createTile(scene, foods.foodMap.get(food)[0]), this.createTile(scene, foods.foodMap.get(food)[1])];\r\n    }\r\n    Object.defineProperty(Block.prototype, \"tiles\", {\r\n        get: function () {\r\n            return this._tiles;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Block.prototype, \"position\", {\r\n        get: function () {\r\n            return this._position;\r\n        },\r\n        set: function (val) {\r\n            var _this = this;\r\n            // Set position accordingly to postion matrix. Shifting to possible indexes when necessarry\r\n            // i.e when rotationg counter clockwise and value will be less than 0 set last of positions from positionMatrix.\r\n            if (val < 0) {\r\n                this._position = this.positonMatrix.length - 1;\r\n            }\r\n            else if (val === this.positonMatrix.length) {\r\n                this._position = 0;\r\n            }\r\n            else {\r\n                this._position = val;\r\n            }\r\n            // Sets origin of tiles using deltas in position matrix. Deltas are computed counting from third tile as it's always in the same spot.\r\n            this.tiles.forEach(function (tile, index) {\r\n                tile.x = _this.tiles[2].x + _this.positonMatrix[_this._position][index].deltaX;\r\n                tile.y = _this.tiles[2].y + _this.positonMatrix[_this._position][index].deltaY;\r\n            });\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Block.prototype, \"x\", {\r\n        get: function () {\r\n            return Math.min.apply(Math, this.tiles.map(function (tile) { return tile.x; }));\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Block.prototype, \"maxx\", {\r\n        get: function () {\r\n            return Math.max.apply(Math, this.tiles.map(function (tile) { return tile.x; }));\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Block.prototype, \"y\", {\r\n        get: function () {\r\n            return Math.max.apply(Math, this.tiles.map(function (tile) { return tile.y; }));\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Block.prototype.slide = function (deltaX) {\r\n        this.tiles.forEach(function (tile) { return tile.x += deltaX; });\r\n    };\r\n    Block.prototype.descend = function (deltaY) {\r\n        this.tiles.forEach(function (tile) { return tile.y += deltaY; });\r\n    };\r\n    Block.prototype.rotateClockwise = function () {\r\n        this.position += 1;\r\n    };\r\n    Block.prototype.rotateCounterClockwise = function () {\r\n        this.position -= 1;\r\n    };\r\n    Block.prototype.rotateRandomly = function () {\r\n        this.position = Math.floor(Math.random() * this.positonMatrix.length);\r\n    };\r\n    Block.prototype.setOrigin = function (originX, originY) {\r\n        var deltaX = originX - Math.min.apply(Math, this.tiles.map(function (tile) { return tile.x; }));\r\n        var deltaY = originY - Math.min.apply(Math, this.tiles.map(function (tile) { return tile.y; }));\r\n        this.tiles.forEach(function (tile) {\r\n            tile.x += deltaX;\r\n            tile.y += deltaY;\r\n        });\r\n    };\r\n    Block.prototype.createTile = function (scene, type) {\r\n        var tile = scene.add.sprite(0, 0, type);\r\n        tile.setOrigin(0, 0);\r\n        console.log(tile.texture.key);\r\n        return tile;\r\n    };\r\n    return Block;\r\n}());\r\nexports.Block = Block;\r\n\n\n//# sourceURL=webpack:///./src/blocks/Block.ts?");

/***/ }),

/***/ "./src/blocks/Foods.ts":
/*!*****************************!*\
  !*** ./src/blocks/Foods.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Foods = void 0;\r\nvar Foods = /** @class */ (function () {\r\n    function Foods() {\r\n        this.foodMap = new Map();\r\n        this.foodMap.set(\"apple\", [\"blockB\", \"blockC\"]);\r\n        this.foodMap.set(\"mango\", [\"blockA\", \"blockB\"]);\r\n        this.foodMap.set(\"broccoli\", [\"blockCal\", \"blockK\"]);\r\n        this.foodMap.set(\"milk\", [\"blockCal\", \"blockA\"]);\r\n        this.foodMap.set(\"banana\", [\"blockB\", \"blockA\"]);\r\n        this.foodMap.set(\"salmon\", [\"blockD\", \"blockB\"]);\r\n        this.foodMap.set(\"lettuce\", [\"blockK\", \"blockA\"]);\r\n        this.foodMap.set(\"eggs\", [\"blockD\", \"blockD\"]);\r\n        console.log(this.foodMap);\r\n    }\r\n    return Foods;\r\n}());\r\nexports.Foods = Foods;\r\n\n\n//# sourceURL=webpack:///./src/blocks/Foods.ts?");

/***/ }),

/***/ "./src/blocks/IBlock.ts":
/*!******************************!*\
  !*** ./src/blocks/IBlock.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.IBlock = void 0;\r\nvar Block_1 = __webpack_require__(/*! ./Block */ \"./src/blocks/Block.ts\");\r\nvar PositionMatrixItem_1 = __webpack_require__(/*! ./PositionMatrixItem */ \"./src/blocks/PositionMatrixItem.ts\");\r\nvar IBlock = /** @class */ (function (_super) {\r\n    __extends(IBlock, _super);\r\n    function IBlock() {\r\n        var _this = _super !== null && _super.apply(this, arguments) || this;\r\n        _this.positonMatrix = [\r\n            [\r\n                new PositionMatrixItem_1.PositionMatrixItem(-2 * _this.tileSize, 0),\r\n                new PositionMatrixItem_1.PositionMatrixItem(-1 * _this.tileSize, 0),\r\n                new PositionMatrixItem_1.PositionMatrixItem(0, 0),\r\n                new PositionMatrixItem_1.PositionMatrixItem(_this.tileSize, 0),\r\n            ],\r\n            [\r\n                new PositionMatrixItem_1.PositionMatrixItem(0, -2 * _this.tileSize),\r\n                new PositionMatrixItem_1.PositionMatrixItem(0, -1 * _this.tileSize),\r\n                new PositionMatrixItem_1.PositionMatrixItem(0, 0),\r\n                new PositionMatrixItem_1.PositionMatrixItem(0, _this.tileSize),\r\n            ],\r\n        ];\r\n        return _this;\r\n    }\r\n    return IBlock;\r\n}(Block_1.Block));\r\nexports.IBlock = IBlock;\r\n\n\n//# sourceURL=webpack:///./src/blocks/IBlock.ts?");

/***/ }),

/***/ "./src/blocks/JBlock.ts":
/*!******************************!*\
  !*** ./src/blocks/JBlock.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.JBlock = void 0;\r\nvar Block_1 = __webpack_require__(/*! ./Block */ \"./src/blocks/Block.ts\");\r\nvar PositionMatrixItem_1 = __webpack_require__(/*! ./PositionMatrixItem */ \"./src/blocks/PositionMatrixItem.ts\");\r\nvar JBlock = /** @class */ (function (_super) {\r\n    __extends(JBlock, _super);\r\n    function JBlock() {\r\n        var _this = _super !== null && _super.apply(this, arguments) || this;\r\n        _this.positonMatrix = [\r\n            [\r\n                new PositionMatrixItem_1.PositionMatrixItem(-1 * _this.tileSize, _this.tileSize),\r\n                new PositionMatrixItem_1.PositionMatrixItem(0, _this.tileSize),\r\n                new PositionMatrixItem_1.PositionMatrixItem(0, 0),\r\n                new PositionMatrixItem_1.PositionMatrixItem(0, -1 * _this.tileSize),\r\n            ],\r\n            [\r\n                new PositionMatrixItem_1.PositionMatrixItem(-1 * _this.tileSize, -1 * _this.tileSize),\r\n                new PositionMatrixItem_1.PositionMatrixItem(-1 * _this.tileSize, 0),\r\n                new PositionMatrixItem_1.PositionMatrixItem(0, 0),\r\n                new PositionMatrixItem_1.PositionMatrixItem(_this.tileSize, 0),\r\n            ],\r\n            [\r\n                new PositionMatrixItem_1.PositionMatrixItem(_this.tileSize, -1 * _this.tileSize),\r\n                new PositionMatrixItem_1.PositionMatrixItem(0, _this.tileSize),\r\n                new PositionMatrixItem_1.PositionMatrixItem(0, 0),\r\n                new PositionMatrixItem_1.PositionMatrixItem(0, -1 * _this.tileSize),\r\n            ],\r\n            [\r\n                new PositionMatrixItem_1.PositionMatrixItem(_this.tileSize, _this.tileSize),\r\n                new PositionMatrixItem_1.PositionMatrixItem(-1 * _this.tileSize, 0),\r\n                new PositionMatrixItem_1.PositionMatrixItem(0, 0),\r\n                new PositionMatrixItem_1.PositionMatrixItem(_this.tileSize, 0),\r\n            ],\r\n        ];\r\n        return _this;\r\n    }\r\n    return JBlock;\r\n}(Block_1.Block));\r\nexports.JBlock = JBlock;\r\n\n\n//# sourceURL=webpack:///./src/blocks/JBlock.ts?");

/***/ }),

/***/ "./src/blocks/LBlock.ts":
/*!******************************!*\
  !*** ./src/blocks/LBlock.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.LBlock = void 0;\r\nvar Block_1 = __webpack_require__(/*! ./Block */ \"./src/blocks/Block.ts\");\r\nvar PositionMatrixItem_1 = __webpack_require__(/*! ./PositionMatrixItem */ \"./src/blocks/PositionMatrixItem.ts\");\r\nvar LBlock = /** @class */ (function (_super) {\r\n    __extends(LBlock, _super);\r\n    function LBlock() {\r\n        var _this = _super !== null && _super.apply(this, arguments) || this;\r\n        _this.positonMatrix = [\r\n            [\r\n                new PositionMatrixItem_1.PositionMatrixItem(-1 * _this.tileSize, -1 * _this.tileSize),\r\n                new PositionMatrixItem_1.PositionMatrixItem(0, -1 * _this.tileSize),\r\n                new PositionMatrixItem_1.PositionMatrixItem(0, 0),\r\n                new PositionMatrixItem_1.PositionMatrixItem(0, _this.tileSize),\r\n            ],\r\n            [\r\n                new PositionMatrixItem_1.PositionMatrixItem(_this.tileSize, -1 * _this.tileSize),\r\n                new PositionMatrixItem_1.PositionMatrixItem(-1 * _this.tileSize, 0),\r\n                new PositionMatrixItem_1.PositionMatrixItem(0, 0),\r\n                new PositionMatrixItem_1.PositionMatrixItem(_this.tileSize, 0),\r\n            ],\r\n            [\r\n                new PositionMatrixItem_1.PositionMatrixItem(_this.tileSize, _this.tileSize),\r\n                new PositionMatrixItem_1.PositionMatrixItem(0, _this.tileSize),\r\n                new PositionMatrixItem_1.PositionMatrixItem(0, 0),\r\n                new PositionMatrixItem_1.PositionMatrixItem(0, -1 * _this.tileSize),\r\n            ],\r\n            [\r\n                new PositionMatrixItem_1.PositionMatrixItem(-1 * _this.tileSize, _this.tileSize),\r\n                new PositionMatrixItem_1.PositionMatrixItem(-1 * _this.tileSize, 0),\r\n                new PositionMatrixItem_1.PositionMatrixItem(0, 0),\r\n                new PositionMatrixItem_1.PositionMatrixItem(_this.tileSize, 0),\r\n            ],\r\n        ];\r\n        return _this;\r\n    }\r\n    return LBlock;\r\n}(Block_1.Block));\r\nexports.LBlock = LBlock;\r\n\n\n//# sourceURL=webpack:///./src/blocks/LBlock.ts?");

/***/ }),

/***/ "./src/blocks/OBlock.ts":
/*!******************************!*\
  !*** ./src/blocks/OBlock.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.OBlock = void 0;\r\nvar Block_1 = __webpack_require__(/*! ./Block */ \"./src/blocks/Block.ts\");\r\nvar PositionMatrixItem_1 = __webpack_require__(/*! ./PositionMatrixItem */ \"./src/blocks/PositionMatrixItem.ts\");\r\n// TODO - TAKE THIS CLASS AND CREATE THE FOOD TYPES\r\nvar OBlock = /** @class */ (function (_super) {\r\n    __extends(OBlock, _super);\r\n    function OBlock() {\r\n        var _this = _super !== null && _super.apply(this, arguments) || this;\r\n        _this.positonMatrix = [\r\n            [\r\n                new PositionMatrixItem_1.PositionMatrixItem(_this.tileSize, 0),\r\n                new PositionMatrixItem_1.PositionMatrixItem(0, _this.tileSize),\r\n                new PositionMatrixItem_1.PositionMatrixItem(0, 0),\r\n                new PositionMatrixItem_1.PositionMatrixItem(_this.tileSize, _this.tileSize),\r\n            ],\r\n        ];\r\n        return _this;\r\n    }\r\n    return OBlock;\r\n}(Block_1.Block));\r\nexports.OBlock = OBlock;\r\n\n\n//# sourceURL=webpack:///./src/blocks/OBlock.ts?");

/***/ }),

/***/ "./src/blocks/PositionMatrixItem.ts":
/*!******************************************!*\
  !*** ./src/blocks/PositionMatrixItem.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.PositionMatrixItem = void 0;\r\nvar PositionMatrixItem = /** @class */ (function () {\r\n    function PositionMatrixItem(deltaX, deltaY) {\r\n        this.deltaX = 0;\r\n        this.deltaY = 0;\r\n        this.deltaX = deltaX;\r\n        this.deltaY = deltaY;\r\n    }\r\n    return PositionMatrixItem;\r\n}());\r\nexports.PositionMatrixItem = PositionMatrixItem;\r\n\n\n//# sourceURL=webpack:///./src/blocks/PositionMatrixItem.ts?");

/***/ }),

/***/ "./src/blocks/SBlock.ts":
/*!******************************!*\
  !*** ./src/blocks/SBlock.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SBlock = void 0;\r\nvar Block_1 = __webpack_require__(/*! ./Block */ \"./src/blocks/Block.ts\");\r\nvar PositionMatrixItem_1 = __webpack_require__(/*! ./PositionMatrixItem */ \"./src/blocks/PositionMatrixItem.ts\");\r\nvar SBlock = /** @class */ (function (_super) {\r\n    __extends(SBlock, _super);\r\n    function SBlock() {\r\n        var _this = _super !== null && _super.apply(this, arguments) || this;\r\n        _this.positonMatrix = [\r\n            [\r\n                new PositionMatrixItem_1.PositionMatrixItem(-1 * _this.tileSize, _this.tileSize),\r\n                new PositionMatrixItem_1.PositionMatrixItem(0, _this.tileSize),\r\n                new PositionMatrixItem_1.PositionMatrixItem(0, 0),\r\n                new PositionMatrixItem_1.PositionMatrixItem(_this.tileSize, 0),\r\n            ],\r\n            [\r\n                new PositionMatrixItem_1.PositionMatrixItem(-1 * _this.tileSize, -1 * _this.tileSize),\r\n                new PositionMatrixItem_1.PositionMatrixItem(-1 * _this.tileSize, 0),\r\n                new PositionMatrixItem_1.PositionMatrixItem(0, 0),\r\n                new PositionMatrixItem_1.PositionMatrixItem(0, _this.tileSize),\r\n            ],\r\n        ];\r\n        return _this;\r\n    }\r\n    return SBlock;\r\n}(Block_1.Block));\r\nexports.SBlock = SBlock;\r\n\n\n//# sourceURL=webpack:///./src/blocks/SBlock.ts?");

/***/ }),

/***/ "./src/blocks/TBlock.ts":
/*!******************************!*\
  !*** ./src/blocks/TBlock.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TBlock = void 0;\r\nvar Block_1 = __webpack_require__(/*! ./Block */ \"./src/blocks/Block.ts\");\r\nvar PositionMatrixItem_1 = __webpack_require__(/*! ./PositionMatrixItem */ \"./src/blocks/PositionMatrixItem.ts\");\r\nvar TBlock = /** @class */ (function (_super) {\r\n    __extends(TBlock, _super);\r\n    function TBlock() {\r\n        var _this = _super !== null && _super.apply(this, arguments) || this;\r\n        _this.positonMatrix = [\r\n            [\r\n                new PositionMatrixItem_1.PositionMatrixItem(_this.tileSize, 0),\r\n                new PositionMatrixItem_1.PositionMatrixItem(0, -1 * _this.tileSize),\r\n                new PositionMatrixItem_1.PositionMatrixItem(0, 0),\r\n                new PositionMatrixItem_1.PositionMatrixItem(0, _this.tileSize),\r\n            ],\r\n            [\r\n                new PositionMatrixItem_1.PositionMatrixItem(0, -1 * _this.tileSize),\r\n                new PositionMatrixItem_1.PositionMatrixItem(-1 * _this.tileSize, 0),\r\n                new PositionMatrixItem_1.PositionMatrixItem(0, 0),\r\n                new PositionMatrixItem_1.PositionMatrixItem(_this.tileSize, 0),\r\n            ],\r\n            [\r\n                new PositionMatrixItem_1.PositionMatrixItem(-1 * _this.tileSize, 0),\r\n                new PositionMatrixItem_1.PositionMatrixItem(0, -1 * _this.tileSize),\r\n                new PositionMatrixItem_1.PositionMatrixItem(0, 0),\r\n                new PositionMatrixItem_1.PositionMatrixItem(0, _this.tileSize),\r\n            ],\r\n            [\r\n                new PositionMatrixItem_1.PositionMatrixItem(0, _this.tileSize),\r\n                new PositionMatrixItem_1.PositionMatrixItem(-1 * _this.tileSize, 0),\r\n                new PositionMatrixItem_1.PositionMatrixItem(0, 0),\r\n                new PositionMatrixItem_1.PositionMatrixItem(_this.tileSize, 0),\r\n            ],\r\n        ];\r\n        return _this;\r\n    }\r\n    return TBlock;\r\n}(Block_1.Block));\r\nexports.TBlock = TBlock;\r\n\n\n//# sourceURL=webpack:///./src/blocks/TBlock.ts?");

/***/ }),

/***/ "./src/blocks/ZBlock.ts":
/*!******************************!*\
  !*** ./src/blocks/ZBlock.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ZBlock = void 0;\r\nvar Block_1 = __webpack_require__(/*! ./Block */ \"./src/blocks/Block.ts\");\r\nvar PositionMatrixItem_1 = __webpack_require__(/*! ./PositionMatrixItem */ \"./src/blocks/PositionMatrixItem.ts\");\r\nvar ZBlock = /** @class */ (function (_super) {\r\n    __extends(ZBlock, _super);\r\n    function ZBlock() {\r\n        var _this = _super !== null && _super.apply(this, arguments) || this;\r\n        _this.positonMatrix = [\r\n            [\r\n                new PositionMatrixItem_1.PositionMatrixItem(_this.tileSize, _this.tileSize),\r\n                new PositionMatrixItem_1.PositionMatrixItem(0, _this.tileSize),\r\n                new PositionMatrixItem_1.PositionMatrixItem(0, 0),\r\n                new PositionMatrixItem_1.PositionMatrixItem(-1 * _this.tileSize, 0),\r\n            ],\r\n            [\r\n                new PositionMatrixItem_1.PositionMatrixItem(-1 * _this.tileSize, _this.tileSize),\r\n                new PositionMatrixItem_1.PositionMatrixItem(-1 * _this.tileSize, 0),\r\n                new PositionMatrixItem_1.PositionMatrixItem(0, 0),\r\n                new PositionMatrixItem_1.PositionMatrixItem(0, -1 * _this.tileSize),\r\n            ],\r\n        ];\r\n        return _this;\r\n    }\r\n    return ZBlock;\r\n}(Block_1.Block));\r\nexports.ZBlock = ZBlock;\r\n\n\n//# sourceURL=webpack:///./src/blocks/ZBlock.ts?");

/***/ }),

/***/ "./src/scenes/BaseGameScene.ts":
/*!*************************************!*\
  !*** ./src/scenes/BaseGameScene.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.BaseGameScene = void 0;\r\nvar phaser_1 = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\r\nvar BaseGameScene = /** @class */ (function (_super) {\r\n    __extends(BaseGameScene, _super);\r\n    function BaseGameScene() {\r\n        var _this = _super !== null && _super.apply(this, arguments) || this;\r\n        _this.textColor = \"#222222\";\r\n        _this.backgroundColor = 0xf8f8f8;\r\n        _this.gameBoardColor = 0xeeeeee;\r\n        return _this;\r\n    }\r\n    Object.defineProperty(BaseGameScene.prototype, \"width\", {\r\n        get: function () {\r\n            return this.game.config.width;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(BaseGameScene.prototype, \"height\", {\r\n        get: function () {\r\n            return this.game.config.height;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    BaseGameScene.prototype.create = function () {\r\n        this.setBackground();\r\n    };\r\n    BaseGameScene.prototype.setBackground = function () {\r\n        var graphics = this.add.graphics();\r\n        graphics.fillStyle(this.backgroundColor, 1);\r\n        graphics.fillRect(0, 0, this.width, this.height);\r\n    };\r\n    return BaseGameScene;\r\n}(phaser_1.Scene));\r\nexports.BaseGameScene = BaseGameScene;\r\n\n\n//# sourceURL=webpack:///./src/scenes/BaseGameScene.ts?");

/***/ }),

/***/ "./src/scenes/FoodPrep.ts":
/*!********************************!*\
  !*** ./src/scenes/FoodPrep.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.FoodPrep = void 0;\r\nvar BaseGameScene_1 = __webpack_require__(/*! ./BaseGameScene */ \"./src/scenes/BaseGameScene.ts\");\r\nvar FoodPrep = /** @class */ (function (_super) {\r\n    __extends(FoodPrep, _super);\r\n    function FoodPrep() {\r\n        var _this = _super.call(this, { key: FoodPrep.name }) || this;\r\n        _this.foods = {\r\n            lettuce: null,\r\n            peanut: null,\r\n            steak: null,\r\n        };\r\n        return _this;\r\n    }\r\n    FoodPrep.prototype.preload = function () {\r\n        this.list = ['vegan', 'peanut allergy', 'carnivore'];\r\n        this.newOrder();\r\n        this.data.set('order', this.randomOrder);\r\n        this.data.set('time', 60);\r\n        this.data.set('foodTime', 10);\r\n        this.load.image('lettuce', '/assets/lettuce.png');\r\n        this.load.image('steak', '/assets/steak.png');\r\n        this.load.image('peanut', '/assets/peanut.png');\r\n    };\r\n    FoodPrep.prototype.create = function () {\r\n        this.text = this.add.text(20, 20, '');\r\n        this.text.setText([\r\n            'Time: ' + this.data.get('time'),\r\n            'FoodTimer: ' + this.data.get('foodTime')\r\n        ]);\r\n        this.order = this.add.text(this.width / 2, this.height / 2 - 100, this.data.get('order'));\r\n        this.foods.lettuce = this.add.image(this.width / 4, this.height / 2 + 100, 'lettuce');\r\n        this.foods.lettuce.setScale(.1);\r\n        this.foods.steak = this.add.image(this.width / 2, this.height / 2 + 100, 'steak');\r\n        this.foods.steak.setScale(.15);\r\n        this.foods.peanut = this.add.image(3 * this.width / 4 + 20, this.height / 2 + 100, 'peanut');\r\n        this.foods.peanut.setScale(.1);\r\n        this.initInteractice();\r\n        this.timer = this.time.addEvent({\r\n            delay: 1000,\r\n            callback: this.decreaseTime,\r\n            callbackScope: this,\r\n            loop: true\r\n        });\r\n    };\r\n    FoodPrep.prototype.update = function () {\r\n    };\r\n    FoodPrep.prototype.decreaseTime = function () {\r\n        this.data.set('time', this.data.get('time') - 1);\r\n        this.data.set('foodTime', this.data.get('foodTime') - 1);\r\n        if (this.data.get('foodTime') <= 0) {\r\n            this.resetOrderTime();\r\n        }\r\n        if (this.data.get('time') <= 0) {\r\n            this.timer.remove();\r\n            this.foods.lettuce.destroy();\r\n            this.foods.steak.destroy();\r\n            this.foods.peanut.destroy();\r\n            this.data.set('order', 'Nice Try!');\r\n            this.order.setText('Nice Try!');\r\n        }\r\n        this.text.setText([\r\n            'Time: ' + this.data.get('time'),\r\n            'FoodTimer: ' + this.data.get('foodTime')\r\n        ]);\r\n    };\r\n    FoodPrep.prototype.resetOrderTime = function () {\r\n        this.newOrder();\r\n        this.data.set('order', this.randomOrder);\r\n        this.order.setText(this.data.get('order'));\r\n        this.data.set('foodTime', 10);\r\n    };\r\n    FoodPrep.prototype.newOrder = function () {\r\n        var randomNumber = Phaser.Math.Between(0, 2);\r\n        this.randomOrder = this.list[randomNumber];\r\n    };\r\n    FoodPrep.prototype.initInteractice = function () {\r\n        var _this = this;\r\n        this.foods.peanut.setInteractive();\r\n        this.foods.peanut.on('pointerdown', function () {\r\n            if (_this.data.get('order') != 'peanut allergy') {\r\n                _this.data.set('time', _this.data.get('time') + 5);\r\n            }\r\n            _this.resetOrderTime();\r\n        });\r\n        this.foods.steak.setInteractive();\r\n        this.foods.steak.on('pointerdown', function () {\r\n            if (_this.data.get('order') != 'vegan') {\r\n                _this.data.set('time', _this.data.get('time') + 5);\r\n            }\r\n            _this.resetOrderTime();\r\n        });\r\n        this.foods.lettuce.setInteractive();\r\n        this.foods.lettuce.on('pointerdown', function () {\r\n            if (_this.data.get('order') != 'carnivore') {\r\n                _this.data.set('time', _this.data.get('time') + 5);\r\n            }\r\n            _this.resetOrderTime();\r\n        });\r\n    };\r\n    return FoodPrep;\r\n}(BaseGameScene_1.BaseGameScene));\r\nexports.FoodPrep = FoodPrep;\r\n\n\n//# sourceURL=webpack:///./src/scenes/FoodPrep.ts?");

/***/ }),

/***/ "./src/scenes/GameScene.ts":
/*!*********************************!*\
  !*** ./src/scenes/GameScene.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.GameScene = void 0;\r\nvar BaseGameScene_1 = __webpack_require__(/*! ./BaseGameScene */ \"./src/scenes/BaseGameScene.ts\");\r\nvar GameData_1 = __webpack_require__(/*! ../GameData */ \"./src/GameData.ts\");\r\nvar OBlock_1 = __webpack_require__(/*! ../blocks/OBlock */ \"./src/blocks/OBlock.ts\");\r\nvar Foods_1 = __webpack_require__(/*! ../blocks/Foods */ \"./src/blocks/Foods.ts\");\r\nvar Board_1 = __webpack_require__(/*! ../Board */ \"./src/Board.ts\");\r\nvar GameUIScene_1 = __webpack_require__(/*! ./GameUIScene */ \"./src/scenes/GameUIScene.ts\");\r\nvar MenuScene_1 = __webpack_require__(/*! ./MenuScene */ \"./src/scenes/MenuScene.ts\");\r\nvar JBlock_1 = __webpack_require__(/*! ../blocks/JBlock */ \"./src/blocks/JBlock.ts\");\r\nvar LBlock_1 = __webpack_require__(/*! ../blocks/LBlock */ \"./src/blocks/LBlock.ts\");\r\nvar SBlock_1 = __webpack_require__(/*! ../blocks/SBlock */ \"./src/blocks/SBlock.ts\");\r\nvar ZBlock_1 = __webpack_require__(/*! ../blocks/ZBlock */ \"./src/blocks/ZBlock.ts\");\r\nvar TBlock_1 = __webpack_require__(/*! ../blocks/TBlock */ \"./src/blocks/TBlock.ts\");\r\nvar IBlock_1 = __webpack_require__(/*! ../blocks/IBlock */ \"./src/blocks/IBlock.ts\");\r\nvar foods = new Foods_1.Foods();\r\nvar GameScene = /** @class */ (function (_super) {\r\n    __extends(GameScene, _super);\r\n    function GameScene() {\r\n        var _this = _super.call(this, { key: GameScene.name }) || this;\r\n        _this.tileSize = GameData_1.default.tileSize;\r\n        _this.pointsPerBlock = 4;\r\n        _this.pointsPerLine = 100;\r\n        _this.lastRotation = 0;\r\n        _this.lastSlide = 0;\r\n        _this.lastDescend = 0;\r\n        _this.lastQuickDescend = 0;\r\n        _this.descendInterval = 750;\r\n        _this.quickDescendInterval = 25;\r\n        _this.rotationInterval = 150;\r\n        _this.slideInterval = 50;\r\n        _this.blockQuickDescend = false;\r\n        _this.blockTypes = [JBlock_1.JBlock, LBlock_1.LBlock, SBlock_1.SBlock, ZBlock_1.ZBlock, TBlock_1.TBlock, IBlock_1.IBlock, OBlock_1.OBlock];\r\n        _this.foodTypes = Array.from(foods.foodMap.keys());\r\n        return _this;\r\n    }\r\n    GameScene.prototype.create = function () {\r\n        var _this = this;\r\n        _super.prototype.create.call(this);\r\n        this.cursors = this.input.keyboard.createCursorKeys();\r\n        GameData_1.default.gamePoints = 0;\r\n        this.scene.launch(GameUIScene_1.GameUIScene.name);\r\n        this.addControls();\r\n        this.tickSound = this.sound.add(\"tick\");\r\n        this.lineBreakSound = this.sound.add(\"lineBreak\", { volume: 0.2 });\r\n        this.board = new Board_1.Board(this.height, this.tileSize * GameData_1.default.boardWidthTileMultiplier, this.tileSize);\r\n        this.board.on(Board_1.Board.blockLaidEvent, this.onLaidBlock, this);\r\n        this.board.on(Board_1.Board.lineBrakeEvent, this.onLineBreak, this);\r\n        this.board.on(Board_1.Board.boardFullEvent, this.gameOver, this);\r\n        this.board.on(Board_1.Board.blockWillBeLaidEvent, function () { return _this.blockQuickDescend = true; }, this);\r\n        this.board.on(Board_1.Board.blockDescendEvent, function () { return _this.blockQuickDescend = false; }, this);\r\n        this.board.setCurrentBlock(this.generateBlock());\r\n        GameData_1.default.startTime = new Date();\r\n        // TODO: Add button for muting backround music and sound effects\r\n        // TODO: Add color changing on level progression\r\n    };\r\n    GameScene.prototype.update = function (time, delta) {\r\n        if (this.lastDescend === 0) {\r\n            this.lastDescend = time;\r\n            return;\r\n        }\r\n        if (time - this.lastDescend >= this.descendInterval) {\r\n            this.lastDescend = time;\r\n            this.board.descendBlock();\r\n        }\r\n        if (this.cursors.shift.isDown && time - this.lastRotation >= this.rotationInterval) {\r\n            this.lastRotation = time;\r\n            console.log(\"hi noah\");\r\n            this.board.rotateBlockClockwise();\r\n        }\r\n        if (this.cursors.down.isDown && !this.blockQuickDescend && time - this.lastQuickDescend >= this.quickDescendInterval) {\r\n            this.lastQuickDescend = time;\r\n            this.board.descendBlock();\r\n        }\r\n        if (time - this.lastSlide >= this.slideInterval) {\r\n            this.lastSlide = time;\r\n            if (this.cursors.right.isDown) {\r\n                this.board.slideBlock(this.tileSize);\r\n            }\r\n            else if (this.cursors.left.isDown) {\r\n                this.board.slideBlock(-this.tileSize);\r\n            }\r\n        }\r\n    };\r\n    GameScene.prototype.onLineBreak = function (numberOfLines) {\r\n        this.lineBreakSound.play();\r\n        var multiplier = [0, 1, 1.5, 2, 2.5];\r\n        GameData_1.default.gamePoints += this.pointsPerLine * numberOfLines * multiplier[numberOfLines];\r\n        this.blockQuickDescend = false;\r\n        this.board.setCurrentBlock(this.generateBlock());\r\n    };\r\n    GameScene.prototype.onLaidBlock = function () {\r\n        GameData_1.default.gamePoints += this.pointsPerBlock;\r\n        this.descendInterval -= 1;\r\n        this.tickSound.play();\r\n        this.blockQuickDescend = false;\r\n        this.board.setCurrentBlock(this.generateBlock());\r\n    };\r\n    GameScene.prototype.gameOver = function () {\r\n        this.scene.remove(GameUIScene_1.GameUIScene.name);\r\n        this.scene.start(MenuScene_1.MenuScene.name, { showPoints: true });\r\n    };\r\n    GameScene.prototype.setBackground = function () {\r\n        _super.prototype.setBackground.call(this);\r\n        var graphics = this.add.graphics();\r\n        graphics.fillStyle(this.gameBoardColor, 1);\r\n        graphics.fillRect(0, 0, this.tileSize * GameData_1.default.boardWidthTileMultiplier, this.height);\r\n    };\r\n    GameScene.prototype.generateBlock = function () {\r\n        // TODO: Add preview of next block that will appear via food type\r\n        var blockType = this.blockTypes[Math.floor(Math.random() * this.blockTypes.length)];\r\n        var food = this.foodTypes[Math.floor(Math.random() * this.foodTypes.length)];\r\n        return new blockType(this, this.tileSize, food);\r\n    };\r\n    GameScene.prototype.addControls = function () {\r\n        this.cursors = this.input.keyboard.createCursorKeys();\r\n        // TODO: Add pausing game using ESC key\r\n    };\r\n    return GameScene;\r\n}(BaseGameScene_1.BaseGameScene));\r\nexports.GameScene = GameScene;\r\n\n\n//# sourceURL=webpack:///./src/scenes/GameScene.ts?");

/***/ }),

/***/ "./src/scenes/GameUIScene.ts":
/*!***********************************!*\
  !*** ./src/scenes/GameUIScene.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.GameUIScene = void 0;\r\nvar GameData_1 = __webpack_require__(/*! ../GameData */ \"./src/GameData.ts\");\r\nvar BaseGameScene_1 = __webpack_require__(/*! ./BaseGameScene */ \"./src/scenes/BaseGameScene.ts\");\r\nvar GameUIScene = /** @class */ (function (_super) {\r\n    __extends(GameUIScene, _super);\r\n    function GameUIScene() {\r\n        return _super.call(this, { key: GameUIScene.name }) || this;\r\n    }\r\n    GameUIScene.prototype.create = function () {\r\n        var style = { color: this.textColor, align: \"left\", fontSize: \"20px\", lineSpacing: \"10px\" };\r\n        var uiWidth = (GameData_1.default.tileSize * GameData_1.default.boardWidthTileMultiplier) + 5;\r\n        this.pointsLabel = this.add.text(uiWidth, 2, \"\", style);\r\n        this.ppsRatioLabel = this.add.text(uiWidth, 100, \"\", style);\r\n        this.displayPoints();\r\n        this.time.addEvent({ delay: 1000, loop: true, paused: false, callback: this.displayPPS, callbackScope: this });\r\n        this.game.events.addListener(GameData_1.default.gamePointsChangedEvent, this.displayPoints, this);\r\n    };\r\n    GameUIScene.prototype.displayPoints = function () {\r\n        this.pointsLabel.text = \"POINTS\\n\".concat(GameData_1.default.gamePoints);\r\n        this.displayPPS();\r\n    };\r\n    GameUIScene.prototype.displayPPS = function () {\r\n        if (GameData_1.default.startTime) {\r\n            var now = new Date();\r\n            var seconds = (now.getTime() - GameData_1.default.startTime.getTime()) / 1000;\r\n            var pps = GameData_1.default.gamePoints / seconds;\r\n            this.ppsRatioLabel.text = \"POINTS PER SEC\\n\".concat(pps.toFixed(2));\r\n        }\r\n    };\r\n    return GameUIScene;\r\n}(BaseGameScene_1.BaseGameScene));\r\nexports.GameUIScene = GameUIScene;\r\n\n\n//# sourceURL=webpack:///./src/scenes/GameUIScene.ts?");

/***/ }),

/***/ "./src/scenes/Hub.ts":
/*!***************************!*\
  !*** ./src/scenes/Hub.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Hub = void 0;\r\nvar BaseGameScene_1 = __webpack_require__(/*! ./BaseGameScene */ \"./src/scenes/BaseGameScene.ts\");\r\nvar FoodPrep_1 = __webpack_require__(/*! ./FoodPrep */ \"./src/scenes/FoodPrep.ts\");\r\nvar LoadScene_1 = __webpack_require__(/*! ./LoadScene */ \"./src/scenes/LoadScene.ts\");\r\nvar Hub = /** @class */ (function (_super) {\r\n    __extends(Hub, _super);\r\n    function Hub() {\r\n        return _super.call(this, { key: Hub.name }) || this;\r\n    }\r\n    Hub.prototype.create = function () {\r\n        var _this = this;\r\n        var a = document.getElementById('button1');\r\n        var b = document.getElementById('button2');\r\n        var c = document.getElementById('button3');\r\n        a.addEventListener('click', function () {\r\n            _this.scene.start(LoadScene_1.LoadScene.name);\r\n            a.parentElement.hidden = true;\r\n        });\r\n        b.addEventListener('click', function () {\r\n            _this.scene.start(FoodPrep_1.FoodPrep.name);\r\n            b.parentElement.hidden = true;\r\n        });\r\n    };\r\n    return Hub;\r\n}(BaseGameScene_1.BaseGameScene));\r\nexports.Hub = Hub;\r\n\n\n//# sourceURL=webpack:///./src/scenes/Hub.ts?");

/***/ }),

/***/ "./src/scenes/LoadScene.ts":
/*!*********************************!*\
  !*** ./src/scenes/LoadScene.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.LoadScene = void 0;\r\nvar phaser_1 = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\r\nvar MenuScene_1 = __webpack_require__(/*! ./MenuScene */ \"./src/scenes/MenuScene.ts\");\r\nvar LoadScene = /** @class */ (function (_super) {\r\n    __extends(LoadScene, _super);\r\n    function LoadScene() {\r\n        return _super.call(this, { key: LoadScene.name }) || this;\r\n    }\r\n    LoadScene.prototype.preload = function () {\r\n        this.load.image(\"playIcon\", \"../../assets/play-64.png\");\r\n        this.load.image(\"block\", \"../../assets/block-32.png\");\r\n        this.load.image(\"blockA\", \"../../assets/block-32-A.png\");\r\n        this.load.image(\"blockB\", \"../../assets/block-32-B.png\");\r\n        this.load.image(\"blockC\", \"../../assets/block-32-C.png\");\r\n        this.load.image(\"blockD\", \"../../assets/block-32-D.png\");\r\n        this.load.image(\"blockK\", \"../../assets/block-32-K.png\");\r\n        this.load.image(\"blockCal\", \"../../assets/block-32-Cal.png\");\r\n        this.load.audio(\"tick\", \"../../assets/tickSound.wav\");\r\n        this.load.audio(\"click\", \"../../assets/click.wav\");\r\n        this.load.audio(\"lineBreak\", \"../../assets/lineBreak.wav\");\r\n        this.load.audio(\"background\", \"../../assets/background.mp3\");\r\n    };\r\n    LoadScene.prototype.create = function () {\r\n        var backgroundSound = this.sound.add(\"background\", { volume: 0.1, loop: true });\r\n        backgroundSound.play();\r\n        this.scene.start(MenuScene_1.MenuScene.name);\r\n    };\r\n    return LoadScene;\r\n}(phaser_1.Scene));\r\nexports.LoadScene = LoadScene;\r\n\n\n//# sourceURL=webpack:///./src/scenes/LoadScene.ts?");

/***/ }),

/***/ "./src/scenes/MenuScene.ts":
/*!*********************************!*\
  !*** ./src/scenes/MenuScene.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuScene = void 0;\r\nvar BaseGameScene_1 = __webpack_require__(/*! ./BaseGameScene */ \"./src/scenes/BaseGameScene.ts\");\r\nvar GameData_1 = __webpack_require__(/*! ../GameData */ \"./src/GameData.ts\");\r\nvar GameScene_1 = __webpack_require__(/*! ./GameScene */ \"./src/scenes/GameScene.ts\");\r\nvar MenuScene = /** @class */ (function (_super) {\r\n    __extends(MenuScene, _super);\r\n    function MenuScene() {\r\n        var _this = _super.call(this, { key: MenuScene.name }) || this;\r\n        _this.textStyle = { color: _this.textColor, align: \"center\", fontSize: \"24px\" };\r\n        _this.showPoints = false;\r\n        return _this;\r\n    }\r\n    MenuScene.prototype.init = function (data) {\r\n        this.showPoints = data.showPoints;\r\n    };\r\n    MenuScene.prototype.create = function () {\r\n        _super.prototype.create.call(this);\r\n        var titleLabel = this.add.text(0, 30, \"Vitamin-Tetris\", this.textStyle);\r\n        titleLabel.x = (this.width - titleLabel.width) / 2;\r\n        if (this.showPoints) {\r\n            var gameOverLabel = this.add.text(0, 150, \"Game over\", this.textStyle);\r\n            gameOverLabel.x = (this.width - gameOverLabel.width) / 2;\r\n            var pointsLabel = this.add.text(0, 200, \"You earned \".concat(GameData_1.default.gamePoints, \" points\"), this.textStyle);\r\n            pointsLabel.x = (this.width - pointsLabel.width) / 2;\r\n        }\r\n        var playButton = this.add.image(this.width / 2, this.height / 2, \"playIcon\");\r\n        playButton.setInteractive();\r\n        playButton.on(\"pointerdown\", this.startGame, this);\r\n        this.input.keyboard.on(\"keydown_SPACE\", this.startGame, this);\r\n        this.input.keyboard.on(\"keydown_ENTER\", this.startGame, this);\r\n    };\r\n    MenuScene.prototype.startGame = function () {\r\n        this.sound.play(\"click\", { volume: 0.1 });\r\n        this.scene.start(GameScene_1.GameScene.name);\r\n    };\r\n    return MenuScene;\r\n}(BaseGameScene_1.BaseGameScene));\r\nexports.MenuScene = MenuScene;\r\n\n\n//# sourceURL=webpack:///./src/scenes/MenuScene.ts?");

/***/ })

/******/ });