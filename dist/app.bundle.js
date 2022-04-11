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
/******/ 	deferredModules.push([0,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./log\": \"./node_modules/webpack/hot/log.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./node_modules/webpack/hot sync ^\\\\.\\\\/log$\";\n\n//# sourceURL=webpack:///(webpack)/hot_sync_nonrecursive_^\\.\\/log$?");

/***/ }),

/***/ "./src/Board.ts":
/*!**********************!*\
  !*** ./src/Board.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Board = void 0;\nvar Board = /** @class */ (function (_super) {\n    __extends(Board, _super);\n    function Board(height, width, tileSize) {\n        var _this = _super.call(this) || this;\n        _this.tileSize = 0;\n        _this.startX = 0;\n        _this.startY = 0;\n        _this.height = height;\n        _this.width = width;\n        _this.tileSize = tileSize;\n        _this.startX = (_this.width / 2) - _this.tileSize;\n        _this.laidTiles = [];\n        return _this;\n    }\n    Board.prototype.setCurrentBlock = function (block) {\n        this.currentBlock = block;\n        this.currentBlock.rotateRandomly();\n        this.currentBlock.setOrigin(this.startX, this.startY);\n    };\n    // TODO - VALIDATE THIS WORKS WITH THE INCOMING BLOCK CODE\n    Board.prototype.rotateBlockClockwise = function () {\n        this.currentBlock.rotateClockwise();\n        if (this.willCollide() || this.currentBlock.y + this.tileSize >= this.height) {\n            this.currentBlock.rotateCounterClockwise();\n        }\n        else {\n            if (this.currentBlock.x < 0) {\n                this.currentBlock.slide(-this.currentBlock.x);\n            }\n            else if (this.currentBlock.maxx >= this.width) {\n                this.currentBlock.slide(-(this.currentBlock.maxx - this.width + this.tileSize));\n            }\n        }\n    };\n    Board.prototype.slideBlock = function (deltaX) {\n        if (!this.willCollide(deltaX) && this.currentBlock.maxx + deltaX < this.width && this.currentBlock.x + deltaX >= 0) {\n            this.currentBlock.slide(deltaX);\n        }\n    };\n    Board.prototype.descendBlock = function () {\n        var _a;\n        if (this.willCollide(0, this.tileSize) || (this.currentBlock.y + this.tileSize) >= this.height) {\n            (_a = this.laidTiles).push.apply(_a, this.currentBlock.tiles);\n            var removedLinesCount = this.checkFullLines();\n            this.emit(removedLinesCount > 0 ? Board.lineBrakeEvent : Board.blockLaidEvent, removedLinesCount);\n            if (this.laidTiles.some(function (tile) { return tile.y === 0; })) {\n                this.emit(Board.boardFullEvent);\n            }\n        }\n        else {\n            this.currentBlock.descend(this.tileSize);\n            this.emit(Board.blockDescendEvent);\n            if (this.willCollide(0, this.tileSize) || (this.currentBlock.y + this.tileSize) >= this.height) {\n                this.emit(Board.blockWillBeLaidEvent);\n            }\n        }\n    };\n    // TODO BREAK INTO TWO SEPARATE FUNCTIONS -> MODIFY HOW BLOCKS ARE DELETED VIA CHECKING THE SPRITE KEY\n    Board.prototype.checkFullLines = function () {\n        var _this = this;\n        var tilesPerLine = this.width / this.tileSize;\n        var ys = this.laidTiles.map(function (tile) { return tile.y; }).filter(function (y, index, array) { return y && array.indexOf(y) === index; }).sort(function (y1, y2) { return y1 - y2; });\n        var removedLines = 0;\n        ys.forEach(function (y) {\n            var line = _this.laidTiles.filter(function (tile) { return tile.y === y; });\n            if (line.length === tilesPerLine) {\n                line.forEach(function (tile) { return tile.destroy(); });\n                // remove line\n                _this.laidTiles = _this.laidTiles.filter(function (tile) { return line.indexOf(tile) === -1; });\n                // move rest of blocks down\n                _this.laidTiles.filter(function (tile) { return tile.y < y; }).forEach(function (tile) { return tile.y += _this.tileSize; });\n                removedLines++;\n            }\n        });\n        return removedLines;\n    };\n    Board.prototype.willCollide = function (deltaX, deltaY) {\n        var _this = this;\n        if (deltaX === void 0) { deltaX = 0; }\n        if (deltaY === void 0) { deltaY = 0; }\n        return this.currentBlock.tiles.some(function (tile) {\n            return _this.laidTiles.some(function (block) { return block.x === tile.x + deltaX && block.y === tile.y + deltaY; });\n        });\n    };\n    Board.lineBrakeEvent = \"LineBrakeEvent\";\n    Board.blockLaidEvent = \"BlockLaidEvent\";\n    Board.boardFullEvent = \"BoardFullEvent\";\n    Board.blockDescendEvent = \"BlockDescendEvent\";\n    Board.blockWillBeLaidEvent = \"BlockWillBeLaidEvent\";\n    return Board;\n}(Phaser.Events.EventEmitter));\nexports.Board = Board;\n\n\n//# sourceURL=webpack:///./src/Board.ts?");

/***/ }),

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar GameScene_1 = __webpack_require__(/*! ./scenes/GameScene */ \"./src/scenes/GameScene.ts\");\nvar LoadScene_1 = __webpack_require__(/*! ./scenes/LoadScene */ \"./src/scenes/LoadScene.ts\");\nvar MenuScene_1 = __webpack_require__(/*! ./scenes/MenuScene */ \"./src/scenes/MenuScene.ts\");\nvar GameUIScene_1 = __webpack_require__(/*! ./scenes/GameUIScene */ \"./src/scenes/GameUIScene.ts\");\nvar FoodPrep_1 = __webpack_require__(/*! ./scenes/FoodPrep */ \"./src/scenes/FoodPrep.ts\");\nvar Hub_1 = __webpack_require__(/*! ./scenes/Hub */ \"./src/scenes/Hub.ts\");\nvar Game = /** @class */ (function (_super) {\n    __extends(Game, _super);\n    function Game() {\n        var config = {\n            height: 640,\n            backgroundColor: 0x000000,\n            parent: \"content\",\n            physics: {\n                arcade: {\n                    gravity: { y: 800 },\n                },\n                default: \"arcade\",\n            },\n            pixelArt: false,\n            scene: [Hub_1.Hub, LoadScene_1.LoadScene, MenuScene_1.MenuScene, GameScene_1.GameScene, GameUIScene_1.GameUIScene, FoodPrep_1.FoodPrep],\n            type: 0,\n            width: 500,\n            zoom: 1,\n        };\n        return _super.call(this, config) || this;\n    }\n    Object.defineProperty(Game, \"Instance\", {\n        get: function () {\n            return this.instance || (this.instance = new this());\n        },\n        enumerable: false,\n        configurable: true\n    });\n    return Game;\n}(Phaser.Game));\nexports.default = Game.Instance;\n\n\n//# sourceURL=webpack:///./src/Game.ts?");

/***/ }),

/***/ "./src/GameData.ts":
/*!*************************!*\
  !*** ./src/GameData.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Game_1 = __webpack_require__(/*! ./Game */ \"./src/Game.ts\");\nvar GameData = /** @class */ (function () {\n    function GameData() {\n        this.gamePointsChangedEvent = \"GamePointsChangedEvent\";\n        this.gameStartChangedEvent = \"GameStartChangedEvent\";\n        this.tileSize = 32;\n        this.boardWidthTileMultiplier = 10;\n        this._gamePoints = 0;\n    }\n    Object.defineProperty(GameData, \"Instance\", {\n        get: function () {\n            return this.instance || (this.instance = new this());\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(GameData.prototype, \"gamePoints\", {\n        get: function () {\n            return this._gamePoints;\n        },\n        set: function (val) {\n            this._gamePoints = val;\n            Game_1.default.events.emit(this.gamePointsChangedEvent);\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(GameData.prototype, \"startTime\", {\n        get: function () {\n            return this._startTime;\n        },\n        set: function (val) {\n            this._startTime = val;\n            Game_1.default.events.emit(this.gameStartChangedEvent);\n        },\n        enumerable: false,\n        configurable: true\n    });\n    return GameData;\n}());\nexports.default = GameData.Instance;\n\n\n//# sourceURL=webpack:///./src/GameData.ts?");

/***/ }),

/***/ "./src/blocks/Block.ts":
/*!*****************************!*\
  !*** ./src/blocks/Block.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Block = void 0;\nvar Foods_1 = __webpack_require__(/*! ./Foods */ \"./src/blocks/Foods.ts\");\nvar foods = new Foods_1.Foods();\nvar Block = /** @class */ (function () {\n    // TODO - Get food type to work\n    function Block(scene, tileSize, food) {\n        this.tileSize = 0;\n        this._position = 0;\n        this.tileSize = tileSize;\n        this.food = food;\n        this._tiles = [this.createTile(scene, foods.foodMap.get(food)[0]), this.createTile(scene, foods.foodMap.get(food)[1]),\n            this.createTile(scene, foods.foodMap.get(food)[0]), this.createTile(scene, foods.foodMap.get(food)[1])];\n    }\n    Object.defineProperty(Block.prototype, \"tiles\", {\n        get: function () {\n            return this._tiles;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(Block.prototype, \"position\", {\n        get: function () {\n            return this._position;\n        },\n        set: function (val) {\n            var _this = this;\n            // Set position accordingly to postion matrix. Shifting to possible indexes when necessarry\n            // i.e when rotationg counter clockwise and value will be less than 0 set last of positions from positionMatrix.\n            if (val < 0) {\n                this._position = this.positonMatrix.length - 1;\n            }\n            else if (val === this.positonMatrix.length) {\n                this._position = 0;\n            }\n            else {\n                this._position = val;\n            }\n            // Sets origin of tiles using deltas in position matrix. Deltas are computed counting from third tile as it's always in the same spot.\n            this.tiles.forEach(function (tile, index) {\n                tile.x = _this.tiles[2].x + _this.positonMatrix[_this._position][index].deltaX;\n                tile.y = _this.tiles[2].y + _this.positonMatrix[_this._position][index].deltaY;\n            });\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(Block.prototype, \"x\", {\n        get: function () {\n            return Math.min.apply(Math, this.tiles.map(function (tile) { return tile.x; }));\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(Block.prototype, \"maxx\", {\n        get: function () {\n            return Math.max.apply(Math, this.tiles.map(function (tile) { return tile.x; }));\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(Block.prototype, \"y\", {\n        get: function () {\n            return Math.max.apply(Math, this.tiles.map(function (tile) { return tile.y; }));\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Block.prototype.slide = function (deltaX) {\n        this.tiles.forEach(function (tile) { return tile.x += deltaX; });\n    };\n    Block.prototype.descend = function (deltaY) {\n        this.tiles.forEach(function (tile) { return tile.y += deltaY; });\n    };\n    Block.prototype.rotateClockwise = function () {\n        this.position += 1;\n    };\n    Block.prototype.rotateCounterClockwise = function () {\n        this.position -= 1;\n    };\n    Block.prototype.rotateRandomly = function () {\n        this.position = Math.floor(Math.random() * this.positonMatrix.length);\n    };\n    Block.prototype.setOrigin = function (originX, originY) {\n        var deltaX = originX - Math.min.apply(Math, this.tiles.map(function (tile) { return tile.x; }));\n        var deltaY = originY - Math.min.apply(Math, this.tiles.map(function (tile) { return tile.y; }));\n        this.tiles.forEach(function (tile) {\n            tile.x += deltaX;\n            tile.y += deltaY;\n        });\n    };\n    Block.prototype.createTile = function (scene, type) {\n        var tile = scene.add.sprite(0, 0, type);\n        tile.setOrigin(0, 0);\n        console.log(tile.texture.key);\n        return tile;\n    };\n    return Block;\n}());\nexports.Block = Block;\n\n\n//# sourceURL=webpack:///./src/blocks/Block.ts?");

/***/ }),

/***/ "./src/blocks/Foods.ts":
/*!*****************************!*\
  !*** ./src/blocks/Foods.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Foods = void 0;\nvar Foods = /** @class */ (function () {\n    function Foods() {\n        this.foodMap = new Map();\n        this.foodMap.set(\"apple\", [\"blockB\", \"blockC\"]);\n        this.foodMap.set(\"mango\", [\"blockA\", \"blockB\"]);\n        this.foodMap.set(\"broccoli\", [\"blockCal\", \"blockK\"]);\n        this.foodMap.set(\"milk\", [\"blockCal\", \"blockA\"]);\n        this.foodMap.set(\"banana\", [\"blockB\", \"blockA\"]);\n        this.foodMap.set(\"salmon\", [\"blockD\", \"blockB\"]);\n        this.foodMap.set(\"lettuce\", [\"blockK\", \"blockA\"]);\n        this.foodMap.set(\"eggs\", [\"blockD\", \"blockD\"]);\n        console.log(this.foodMap);\n    }\n    return Foods;\n}());\nexports.Foods = Foods;\n\n\n//# sourceURL=webpack:///./src/blocks/Foods.ts?");

/***/ }),

/***/ "./src/blocks/IBlock.ts":
/*!******************************!*\
  !*** ./src/blocks/IBlock.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.IBlock = void 0;\nvar Block_1 = __webpack_require__(/*! ./Block */ \"./src/blocks/Block.ts\");\nvar PositionMatrixItem_1 = __webpack_require__(/*! ./PositionMatrixItem */ \"./src/blocks/PositionMatrixItem.ts\");\nvar IBlock = /** @class */ (function (_super) {\n    __extends(IBlock, _super);\n    function IBlock() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.positonMatrix = [\n            [\n                new PositionMatrixItem_1.PositionMatrixItem(-2 * _this.tileSize, 0),\n                new PositionMatrixItem_1.PositionMatrixItem(-1 * _this.tileSize, 0),\n                new PositionMatrixItem_1.PositionMatrixItem(0, 0),\n                new PositionMatrixItem_1.PositionMatrixItem(_this.tileSize, 0),\n            ],\n            [\n                new PositionMatrixItem_1.PositionMatrixItem(0, -2 * _this.tileSize),\n                new PositionMatrixItem_1.PositionMatrixItem(0, -1 * _this.tileSize),\n                new PositionMatrixItem_1.PositionMatrixItem(0, 0),\n                new PositionMatrixItem_1.PositionMatrixItem(0, _this.tileSize),\n            ],\n        ];\n        return _this;\n    }\n    return IBlock;\n}(Block_1.Block));\nexports.IBlock = IBlock;\n\n\n//# sourceURL=webpack:///./src/blocks/IBlock.ts?");

/***/ }),

/***/ "./src/blocks/JBlock.ts":
/*!******************************!*\
  !*** ./src/blocks/JBlock.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.JBlock = void 0;\nvar Block_1 = __webpack_require__(/*! ./Block */ \"./src/blocks/Block.ts\");\nvar PositionMatrixItem_1 = __webpack_require__(/*! ./PositionMatrixItem */ \"./src/blocks/PositionMatrixItem.ts\");\nvar JBlock = /** @class */ (function (_super) {\n    __extends(JBlock, _super);\n    function JBlock() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.positonMatrix = [\n            [\n                new PositionMatrixItem_1.PositionMatrixItem(-1 * _this.tileSize, _this.tileSize),\n                new PositionMatrixItem_1.PositionMatrixItem(0, _this.tileSize),\n                new PositionMatrixItem_1.PositionMatrixItem(0, 0),\n                new PositionMatrixItem_1.PositionMatrixItem(0, -1 * _this.tileSize),\n            ],\n            [\n                new PositionMatrixItem_1.PositionMatrixItem(-1 * _this.tileSize, -1 * _this.tileSize),\n                new PositionMatrixItem_1.PositionMatrixItem(-1 * _this.tileSize, 0),\n                new PositionMatrixItem_1.PositionMatrixItem(0, 0),\n                new PositionMatrixItem_1.PositionMatrixItem(_this.tileSize, 0),\n            ],\n            [\n                new PositionMatrixItem_1.PositionMatrixItem(_this.tileSize, -1 * _this.tileSize),\n                new PositionMatrixItem_1.PositionMatrixItem(0, _this.tileSize),\n                new PositionMatrixItem_1.PositionMatrixItem(0, 0),\n                new PositionMatrixItem_1.PositionMatrixItem(0, -1 * _this.tileSize),\n            ],\n            [\n                new PositionMatrixItem_1.PositionMatrixItem(_this.tileSize, _this.tileSize),\n                new PositionMatrixItem_1.PositionMatrixItem(-1 * _this.tileSize, 0),\n                new PositionMatrixItem_1.PositionMatrixItem(0, 0),\n                new PositionMatrixItem_1.PositionMatrixItem(_this.tileSize, 0),\n            ],\n        ];\n        return _this;\n    }\n    return JBlock;\n}(Block_1.Block));\nexports.JBlock = JBlock;\n\n\n//# sourceURL=webpack:///./src/blocks/JBlock.ts?");

/***/ }),

/***/ "./src/blocks/LBlock.ts":
/*!******************************!*\
  !*** ./src/blocks/LBlock.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.LBlock = void 0;\nvar Block_1 = __webpack_require__(/*! ./Block */ \"./src/blocks/Block.ts\");\nvar PositionMatrixItem_1 = __webpack_require__(/*! ./PositionMatrixItem */ \"./src/blocks/PositionMatrixItem.ts\");\nvar LBlock = /** @class */ (function (_super) {\n    __extends(LBlock, _super);\n    function LBlock() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.positonMatrix = [\n            [\n                new PositionMatrixItem_1.PositionMatrixItem(-1 * _this.tileSize, -1 * _this.tileSize),\n                new PositionMatrixItem_1.PositionMatrixItem(0, -1 * _this.tileSize),\n                new PositionMatrixItem_1.PositionMatrixItem(0, 0),\n                new PositionMatrixItem_1.PositionMatrixItem(0, _this.tileSize),\n            ],\n            [\n                new PositionMatrixItem_1.PositionMatrixItem(_this.tileSize, -1 * _this.tileSize),\n                new PositionMatrixItem_1.PositionMatrixItem(-1 * _this.tileSize, 0),\n                new PositionMatrixItem_1.PositionMatrixItem(0, 0),\n                new PositionMatrixItem_1.PositionMatrixItem(_this.tileSize, 0),\n            ],\n            [\n                new PositionMatrixItem_1.PositionMatrixItem(_this.tileSize, _this.tileSize),\n                new PositionMatrixItem_1.PositionMatrixItem(0, _this.tileSize),\n                new PositionMatrixItem_1.PositionMatrixItem(0, 0),\n                new PositionMatrixItem_1.PositionMatrixItem(0, -1 * _this.tileSize),\n            ],\n            [\n                new PositionMatrixItem_1.PositionMatrixItem(-1 * _this.tileSize, _this.tileSize),\n                new PositionMatrixItem_1.PositionMatrixItem(-1 * _this.tileSize, 0),\n                new PositionMatrixItem_1.PositionMatrixItem(0, 0),\n                new PositionMatrixItem_1.PositionMatrixItem(_this.tileSize, 0),\n            ],\n        ];\n        return _this;\n    }\n    return LBlock;\n}(Block_1.Block));\nexports.LBlock = LBlock;\n\n\n//# sourceURL=webpack:///./src/blocks/LBlock.ts?");

/***/ }),

/***/ "./src/blocks/OBlock.ts":
/*!******************************!*\
  !*** ./src/blocks/OBlock.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.OBlock = void 0;\nvar Block_1 = __webpack_require__(/*! ./Block */ \"./src/blocks/Block.ts\");\nvar PositionMatrixItem_1 = __webpack_require__(/*! ./PositionMatrixItem */ \"./src/blocks/PositionMatrixItem.ts\");\n// TODO - TAKE THIS CLASS AND CREATE THE FOOD TYPES\nvar OBlock = /** @class */ (function (_super) {\n    __extends(OBlock, _super);\n    function OBlock() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.positonMatrix = [\n            [\n                new PositionMatrixItem_1.PositionMatrixItem(_this.tileSize, 0),\n                new PositionMatrixItem_1.PositionMatrixItem(0, _this.tileSize),\n                new PositionMatrixItem_1.PositionMatrixItem(0, 0),\n                new PositionMatrixItem_1.PositionMatrixItem(_this.tileSize, _this.tileSize),\n            ],\n        ];\n        return _this;\n    }\n    return OBlock;\n}(Block_1.Block));\nexports.OBlock = OBlock;\n\n\n//# sourceURL=webpack:///./src/blocks/OBlock.ts?");

/***/ }),

/***/ "./src/blocks/PositionMatrixItem.ts":
/*!******************************************!*\
  !*** ./src/blocks/PositionMatrixItem.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.PositionMatrixItem = void 0;\nvar PositionMatrixItem = /** @class */ (function () {\n    function PositionMatrixItem(deltaX, deltaY) {\n        this.deltaX = 0;\n        this.deltaY = 0;\n        this.deltaX = deltaX;\n        this.deltaY = deltaY;\n    }\n    return PositionMatrixItem;\n}());\nexports.PositionMatrixItem = PositionMatrixItem;\n\n\n//# sourceURL=webpack:///./src/blocks/PositionMatrixItem.ts?");

/***/ }),

/***/ "./src/blocks/SBlock.ts":
/*!******************************!*\
  !*** ./src/blocks/SBlock.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.SBlock = void 0;\nvar Block_1 = __webpack_require__(/*! ./Block */ \"./src/blocks/Block.ts\");\nvar PositionMatrixItem_1 = __webpack_require__(/*! ./PositionMatrixItem */ \"./src/blocks/PositionMatrixItem.ts\");\nvar SBlock = /** @class */ (function (_super) {\n    __extends(SBlock, _super);\n    function SBlock() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.positonMatrix = [\n            [\n                new PositionMatrixItem_1.PositionMatrixItem(-1 * _this.tileSize, _this.tileSize),\n                new PositionMatrixItem_1.PositionMatrixItem(0, _this.tileSize),\n                new PositionMatrixItem_1.PositionMatrixItem(0, 0),\n                new PositionMatrixItem_1.PositionMatrixItem(_this.tileSize, 0),\n            ],\n            [\n                new PositionMatrixItem_1.PositionMatrixItem(-1 * _this.tileSize, -1 * _this.tileSize),\n                new PositionMatrixItem_1.PositionMatrixItem(-1 * _this.tileSize, 0),\n                new PositionMatrixItem_1.PositionMatrixItem(0, 0),\n                new PositionMatrixItem_1.PositionMatrixItem(0, _this.tileSize),\n            ],\n        ];\n        return _this;\n    }\n    return SBlock;\n}(Block_1.Block));\nexports.SBlock = SBlock;\n\n\n//# sourceURL=webpack:///./src/blocks/SBlock.ts?");

/***/ }),

/***/ "./src/blocks/TBlock.ts":
/*!******************************!*\
  !*** ./src/blocks/TBlock.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.TBlock = void 0;\nvar Block_1 = __webpack_require__(/*! ./Block */ \"./src/blocks/Block.ts\");\nvar PositionMatrixItem_1 = __webpack_require__(/*! ./PositionMatrixItem */ \"./src/blocks/PositionMatrixItem.ts\");\nvar TBlock = /** @class */ (function (_super) {\n    __extends(TBlock, _super);\n    function TBlock() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.positonMatrix = [\n            [\n                new PositionMatrixItem_1.PositionMatrixItem(_this.tileSize, 0),\n                new PositionMatrixItem_1.PositionMatrixItem(0, -1 * _this.tileSize),\n                new PositionMatrixItem_1.PositionMatrixItem(0, 0),\n                new PositionMatrixItem_1.PositionMatrixItem(0, _this.tileSize),\n            ],\n            [\n                new PositionMatrixItem_1.PositionMatrixItem(0, -1 * _this.tileSize),\n                new PositionMatrixItem_1.PositionMatrixItem(-1 * _this.tileSize, 0),\n                new PositionMatrixItem_1.PositionMatrixItem(0, 0),\n                new PositionMatrixItem_1.PositionMatrixItem(_this.tileSize, 0),\n            ],\n            [\n                new PositionMatrixItem_1.PositionMatrixItem(-1 * _this.tileSize, 0),\n                new PositionMatrixItem_1.PositionMatrixItem(0, -1 * _this.tileSize),\n                new PositionMatrixItem_1.PositionMatrixItem(0, 0),\n                new PositionMatrixItem_1.PositionMatrixItem(0, _this.tileSize),\n            ],\n            [\n                new PositionMatrixItem_1.PositionMatrixItem(0, _this.tileSize),\n                new PositionMatrixItem_1.PositionMatrixItem(-1 * _this.tileSize, 0),\n                new PositionMatrixItem_1.PositionMatrixItem(0, 0),\n                new PositionMatrixItem_1.PositionMatrixItem(_this.tileSize, 0),\n            ],\n        ];\n        return _this;\n    }\n    return TBlock;\n}(Block_1.Block));\nexports.TBlock = TBlock;\n\n\n//# sourceURL=webpack:///./src/blocks/TBlock.ts?");

/***/ }),

/***/ "./src/blocks/ZBlock.ts":
/*!******************************!*\
  !*** ./src/blocks/ZBlock.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ZBlock = void 0;\nvar Block_1 = __webpack_require__(/*! ./Block */ \"./src/blocks/Block.ts\");\nvar PositionMatrixItem_1 = __webpack_require__(/*! ./PositionMatrixItem */ \"./src/blocks/PositionMatrixItem.ts\");\nvar ZBlock = /** @class */ (function (_super) {\n    __extends(ZBlock, _super);\n    function ZBlock() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.positonMatrix = [\n            [\n                new PositionMatrixItem_1.PositionMatrixItem(_this.tileSize, _this.tileSize),\n                new PositionMatrixItem_1.PositionMatrixItem(0, _this.tileSize),\n                new PositionMatrixItem_1.PositionMatrixItem(0, 0),\n                new PositionMatrixItem_1.PositionMatrixItem(-1 * _this.tileSize, 0),\n            ],\n            [\n                new PositionMatrixItem_1.PositionMatrixItem(-1 * _this.tileSize, _this.tileSize),\n                new PositionMatrixItem_1.PositionMatrixItem(-1 * _this.tileSize, 0),\n                new PositionMatrixItem_1.PositionMatrixItem(0, 0),\n                new PositionMatrixItem_1.PositionMatrixItem(0, -1 * _this.tileSize),\n            ],\n        ];\n        return _this;\n    }\n    return ZBlock;\n}(Block_1.Block));\nexports.ZBlock = ZBlock;\n\n\n//# sourceURL=webpack:///./src/blocks/ZBlock.ts?");

/***/ }),

/***/ "./src/scenes/BaseGameScene.ts":
/*!*************************************!*\
  !*** ./src/scenes/BaseGameScene.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.BaseGameScene = void 0;\nvar phaser_1 = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\nvar BaseGameScene = /** @class */ (function (_super) {\n    __extends(BaseGameScene, _super);\n    function BaseGameScene() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.textColor = \"#222222\";\n        _this.backgroundColor = 0xf8f8f8;\n        _this.gameBoardColor = 0xeeeeee;\n        return _this;\n    }\n    Object.defineProperty(BaseGameScene.prototype, \"width\", {\n        get: function () {\n            return this.game.config.width;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(BaseGameScene.prototype, \"height\", {\n        get: function () {\n            return this.game.config.height;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    BaseGameScene.prototype.create = function () {\n        this.setBackground();\n    };\n    BaseGameScene.prototype.setBackground = function () {\n        var graphics = this.add.graphics();\n        graphics.fillStyle(this.backgroundColor, 1);\n        graphics.fillRect(0, 0, this.width, this.height);\n    };\n    return BaseGameScene;\n}(phaser_1.Scene));\nexports.BaseGameScene = BaseGameScene;\n\n\n//# sourceURL=webpack:///./src/scenes/BaseGameScene.ts?");

/***/ }),

/***/ "./src/scenes/FoodPrep.ts":
/*!********************************!*\
  !*** ./src/scenes/FoodPrep.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.FoodPrep = void 0;\nvar BaseGameScene_1 = __webpack_require__(/*! ./BaseGameScene */ \"./src/scenes/BaseGameScene.ts\");\nvar FoodPrep = /** @class */ (function (_super) {\n    __extends(FoodPrep, _super);\n    function FoodPrep() {\n        var _this = _super.call(this, { key: FoodPrep.name }) || this;\n        _this.foods = {\n            lettuce: null,\n            peanut: null,\n            steak: null,\n        };\n        return _this;\n    }\n    FoodPrep.prototype.preload = function () {\n        this.list = ['vegan', 'peanut allergy', 'carnivore'];\n        this.newOrder();\n        this.data.set('order', this.randomOrder);\n        this.data.set('time', 60);\n        this.data.set('foodTime', 10);\n        this.load.image('lettuce', '/assets/lettuce.png');\n        this.load.image('steak', '/assets/steak.png');\n        this.load.image('peanut', '/assets/peanut.png');\n    };\n    FoodPrep.prototype.create = function () {\n        this.text = this.add.text(20, 20, '');\n        this.text.setText([\n            'Time: ' + this.data.get('time'),\n            'FoodTimer: ' + this.data.get('foodTime')\n        ]);\n        this.order = this.add.text(this.width / 2, this.height / 2 - 100, this.data.get('order'));\n        this.foods.lettuce = this.add.image(this.width / 4, this.height / 2 + 100, 'lettuce');\n        this.foods.lettuce.setScale(.1);\n        this.foods.steak = this.add.image(this.width / 2, this.height / 2 + 100, 'steak');\n        this.foods.steak.setScale(.15);\n        this.foods.peanut = this.add.image(3 * this.width / 4 + 20, this.height / 2 + 100, 'peanut');\n        this.foods.peanut.setScale(.1);\n        this.initInteractice();\n        this.timer = this.time.addEvent({\n            delay: 1000,\n            callback: this.decreaseTime,\n            callbackScope: this,\n            loop: true\n        });\n    };\n    FoodPrep.prototype.update = function () {\n    };\n    FoodPrep.prototype.decreaseTime = function () {\n        this.data.set('time', this.data.get('time') - 1);\n        this.data.set('foodTime', this.data.get('foodTime') - 1);\n        if (this.data.get('foodTime') <= 0) {\n            this.resetOrderTime();\n        }\n        if (this.data.get('time') <= 0) {\n            this.timer.remove();\n            this.foods.lettuce.destroy();\n            this.foods.steak.destroy();\n            this.foods.peanut.destroy();\n            this.data.set('order', 'Nice Try!');\n            this.order.setText('Nice Try!');\n        }\n        this.text.setText([\n            'Time: ' + this.data.get('time'),\n            'FoodTimer: ' + this.data.get('foodTime')\n        ]);\n    };\n    FoodPrep.prototype.resetOrderTime = function () {\n        this.newOrder();\n        this.data.set('order', this.randomOrder);\n        this.order.setText(this.data.get('order'));\n        this.data.set('foodTime', 10);\n    };\n    FoodPrep.prototype.newOrder = function () {\n        var randomNumber = Phaser.Math.Between(0, 2);\n        this.randomOrder = this.list[randomNumber];\n    };\n    FoodPrep.prototype.initInteractice = function () {\n        var _this = this;\n        this.foods.peanut.setInteractive();\n        this.foods.peanut.on('pointerdown', function () {\n            if (_this.data.get('order') != 'peanut allergy') {\n                _this.data.set('time', _this.data.get('time') + 5);\n            }\n            _this.resetOrderTime();\n        });\n        this.foods.steak.setInteractive();\n        this.foods.steak.on('pointerdown', function () {\n            if (_this.data.get('order') != 'vegan') {\n                _this.data.set('time', _this.data.get('time') + 5);\n            }\n            _this.resetOrderTime();\n        });\n        this.foods.lettuce.setInteractive();\n        this.foods.lettuce.on('pointerdown', function () {\n            if (_this.data.get('order') != 'carnivore') {\n                _this.data.set('time', _this.data.get('time') + 5);\n            }\n            _this.resetOrderTime();\n        });\n    };\n    return FoodPrep;\n}(BaseGameScene_1.BaseGameScene));\nexports.FoodPrep = FoodPrep;\n\n\n//# sourceURL=webpack:///./src/scenes/FoodPrep.ts?");

/***/ }),

/***/ "./src/scenes/GameScene.ts":
/*!*********************************!*\
  !*** ./src/scenes/GameScene.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.GameScene = void 0;\nvar BaseGameScene_1 = __webpack_require__(/*! ./BaseGameScene */ \"./src/scenes/BaseGameScene.ts\");\nvar GameData_1 = __webpack_require__(/*! ../GameData */ \"./src/GameData.ts\");\nvar OBlock_1 = __webpack_require__(/*! ../blocks/OBlock */ \"./src/blocks/OBlock.ts\");\nvar Foods_1 = __webpack_require__(/*! ../blocks/Foods */ \"./src/blocks/Foods.ts\");\nvar Board_1 = __webpack_require__(/*! ../Board */ \"./src/Board.ts\");\nvar GameUIScene_1 = __webpack_require__(/*! ./GameUIScene */ \"./src/scenes/GameUIScene.ts\");\nvar MenuScene_1 = __webpack_require__(/*! ./MenuScene */ \"./src/scenes/MenuScene.ts\");\nvar JBlock_1 = __webpack_require__(/*! ../blocks/JBlock */ \"./src/blocks/JBlock.ts\");\nvar LBlock_1 = __webpack_require__(/*! ../blocks/LBlock */ \"./src/blocks/LBlock.ts\");\nvar SBlock_1 = __webpack_require__(/*! ../blocks/SBlock */ \"./src/blocks/SBlock.ts\");\nvar ZBlock_1 = __webpack_require__(/*! ../blocks/ZBlock */ \"./src/blocks/ZBlock.ts\");\nvar TBlock_1 = __webpack_require__(/*! ../blocks/TBlock */ \"./src/blocks/TBlock.ts\");\nvar IBlock_1 = __webpack_require__(/*! ../blocks/IBlock */ \"./src/blocks/IBlock.ts\");\nvar foods = new Foods_1.Foods();\nvar GameScene = /** @class */ (function (_super) {\n    __extends(GameScene, _super);\n    function GameScene() {\n        var _this = _super.call(this, { key: GameScene.name }) || this;\n        _this.tileSize = GameData_1.default.tileSize;\n        _this.pointsPerBlock = 4;\n        _this.pointsPerLine = 100;\n        _this.lastRotation = 0;\n        _this.lastSlide = 0;\n        _this.lastDescend = 0;\n        _this.lastQuickDescend = 0;\n        _this.descendInterval = 750;\n        _this.quickDescendInterval = 25;\n        _this.rotationInterval = 150;\n        _this.slideInterval = 50;\n        _this.blockQuickDescend = false;\n        _this.blockTypes = [JBlock_1.JBlock, LBlock_1.LBlock, SBlock_1.SBlock, ZBlock_1.ZBlock, TBlock_1.TBlock, IBlock_1.IBlock, OBlock_1.OBlock];\n        _this.foodTypes = Array.from(foods.foodMap.keys());\n        return _this;\n    }\n    GameScene.prototype.create = function () {\n        var _this = this;\n        _super.prototype.create.call(this);\n        this.cursors = this.input.keyboard.createCursorKeys();\n        GameData_1.default.gamePoints = 0;\n        this.scene.launch(GameUIScene_1.GameUIScene.name);\n        this.addControls();\n        this.tickSound = this.sound.add(\"tick\");\n        this.lineBreakSound = this.sound.add(\"lineBreak\", { volume: 0.2 });\n        this.board = new Board_1.Board(this.height, this.tileSize * GameData_1.default.boardWidthTileMultiplier, this.tileSize);\n        this.board.on(Board_1.Board.blockLaidEvent, this.onLaidBlock, this);\n        this.board.on(Board_1.Board.lineBrakeEvent, this.onLineBreak, this);\n        this.board.on(Board_1.Board.boardFullEvent, this.gameOver, this);\n        this.board.on(Board_1.Board.blockWillBeLaidEvent, function () { return _this.blockQuickDescend = true; }, this);\n        this.board.on(Board_1.Board.blockDescendEvent, function () { return _this.blockQuickDescend = false; }, this);\n        this.board.setCurrentBlock(this.generateBlock());\n        GameData_1.default.startTime = new Date();\n        // TODO: Add button for muting backround music and sound effects\n        // TODO: Add color changing on level progression\n    };\n    GameScene.prototype.update = function (time, delta) {\n        if (this.lastDescend === 0) {\n            this.lastDescend = time;\n            return;\n        }\n        if (time - this.lastDescend >= this.descendInterval) {\n            this.lastDescend = time;\n            this.board.descendBlock();\n        }\n        if (this.cursors.shift.isDown && time - this.lastRotation >= this.rotationInterval) {\n            this.lastRotation = time;\n            console.log(\"hi noah\");\n            this.board.rotateBlockClockwise();\n        }\n        if (this.cursors.down.isDown && !this.blockQuickDescend && time - this.lastQuickDescend >= this.quickDescendInterval) {\n            this.lastQuickDescend = time;\n            this.board.descendBlock();\n        }\n        if (time - this.lastSlide >= this.slideInterval) {\n            this.lastSlide = time;\n            if (this.cursors.right.isDown) {\n                this.board.slideBlock(this.tileSize);\n            }\n            else if (this.cursors.left.isDown) {\n                this.board.slideBlock(-this.tileSize);\n            }\n        }\n    };\n    GameScene.prototype.onLineBreak = function (numberOfLines) {\n        this.lineBreakSound.play();\n        var multiplier = [0, 1, 1.5, 2, 2.5];\n        GameData_1.default.gamePoints += this.pointsPerLine * numberOfLines * multiplier[numberOfLines];\n        this.blockQuickDescend = false;\n        this.board.setCurrentBlock(this.generateBlock());\n    };\n    GameScene.prototype.onLaidBlock = function () {\n        GameData_1.default.gamePoints += this.pointsPerBlock;\n        this.descendInterval -= 1;\n        this.tickSound.play();\n        this.blockQuickDescend = false;\n        this.board.setCurrentBlock(this.generateBlock());\n    };\n    GameScene.prototype.gameOver = function () {\n        this.scene.remove(GameUIScene_1.GameUIScene.name);\n        this.scene.start(MenuScene_1.MenuScene.name, { showPoints: true });\n    };\n    GameScene.prototype.setBackground = function () {\n        _super.prototype.setBackground.call(this);\n        var graphics = this.add.graphics();\n        graphics.fillStyle(this.gameBoardColor, 1);\n        graphics.fillRect(0, 0, this.tileSize * GameData_1.default.boardWidthTileMultiplier, this.height);\n    };\n    GameScene.prototype.generateBlock = function () {\n        // TODO: Add preview of next block that will appear via food type\n        var blockType = this.blockTypes[Math.floor(Math.random() * this.blockTypes.length)];\n        var food = this.foodTypes[Math.floor(Math.random() * this.foodTypes.length)];\n        return new blockType(this, this.tileSize, food);\n    };\n    GameScene.prototype.addControls = function () {\n        this.cursors = this.input.keyboard.createCursorKeys();\n        // TODO: Add pausing game using ESC key\n    };\n    return GameScene;\n}(BaseGameScene_1.BaseGameScene));\nexports.GameScene = GameScene;\n\n\n//# sourceURL=webpack:///./src/scenes/GameScene.ts?");

/***/ }),

/***/ "./src/scenes/GameUIScene.ts":
/*!***********************************!*\
  !*** ./src/scenes/GameUIScene.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.GameUIScene = void 0;\nvar GameData_1 = __webpack_require__(/*! ../GameData */ \"./src/GameData.ts\");\nvar BaseGameScene_1 = __webpack_require__(/*! ./BaseGameScene */ \"./src/scenes/BaseGameScene.ts\");\nvar GameUIScene = /** @class */ (function (_super) {\n    __extends(GameUIScene, _super);\n    function GameUIScene() {\n        return _super.call(this, { key: GameUIScene.name }) || this;\n    }\n    GameUIScene.prototype.create = function () {\n        var style = { color: this.textColor, align: \"left\", fontSize: \"20px\", lineSpacing: \"10px\" };\n        var uiWidth = (GameData_1.default.tileSize * GameData_1.default.boardWidthTileMultiplier) + 5;\n        this.pointsLabel = this.add.text(uiWidth, 2, \"\", style);\n        this.ppsRatioLabel = this.add.text(uiWidth, 100, \"\", style);\n        this.displayPoints();\n        this.time.addEvent({ delay: 1000, loop: true, paused: false, callback: this.displayPPS, callbackScope: this });\n        this.game.events.addListener(GameData_1.default.gamePointsChangedEvent, this.displayPoints, this);\n    };\n    GameUIScene.prototype.displayPoints = function () {\n        this.pointsLabel.text = \"POINTS\\n\".concat(GameData_1.default.gamePoints);\n        this.displayPPS();\n    };\n    GameUIScene.prototype.displayPPS = function () {\n        if (GameData_1.default.startTime) {\n            var now = new Date();\n            var seconds = (now.getTime() - GameData_1.default.startTime.getTime()) / 1000;\n            var pps = GameData_1.default.gamePoints / seconds;\n            this.ppsRatioLabel.text = \"POINTS PER SEC\\n\".concat(pps.toFixed(2));\n        }\n    };\n    return GameUIScene;\n}(BaseGameScene_1.BaseGameScene));\nexports.GameUIScene = GameUIScene;\n\n\n//# sourceURL=webpack:///./src/scenes/GameUIScene.ts?");

/***/ }),

/***/ "./src/scenes/Hub.ts":
/*!***************************!*\
  !*** ./src/scenes/Hub.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Hub = void 0;\nvar BaseGameScene_1 = __webpack_require__(/*! ./BaseGameScene */ \"./src/scenes/BaseGameScene.ts\");\nvar FoodPrep_1 = __webpack_require__(/*! ./FoodPrep */ \"./src/scenes/FoodPrep.ts\");\nvar LoadScene_1 = __webpack_require__(/*! ./LoadScene */ \"./src/scenes/LoadScene.ts\");\nvar Hub = /** @class */ (function (_super) {\n    __extends(Hub, _super);\n    function Hub() {\n        return _super.call(this, { key: Hub.name }) || this;\n    }\n    Hub.prototype.create = function () {\n        var _this = this;\n        var a = document.getElementById('button1');\n        var b = document.getElementById('button2');\n        var c = document.getElementById('button3');\n        a.addEventListener('click', function () {\n            _this.scene.start(LoadScene_1.LoadScene.name);\n            a.parentElement.hidden = true;\n        });\n        b.addEventListener('click', function () {\n            _this.scene.start(FoodPrep_1.FoodPrep.name);\n            b.parentElement.hidden = true;\n        });\n    };\n    return Hub;\n}(BaseGameScene_1.BaseGameScene));\nexports.Hub = Hub;\n\n\n//# sourceURL=webpack:///./src/scenes/Hub.ts?");

/***/ }),

/***/ "./src/scenes/LoadScene.ts":
/*!*********************************!*\
  !*** ./src/scenes/LoadScene.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.LoadScene = void 0;\nvar phaser_1 = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\nvar MenuScene_1 = __webpack_require__(/*! ./MenuScene */ \"./src/scenes/MenuScene.ts\");\nvar LoadScene = /** @class */ (function (_super) {\n    __extends(LoadScene, _super);\n    function LoadScene() {\n        return _super.call(this, { key: LoadScene.name }) || this;\n    }\n    LoadScene.prototype.preload = function () {\n        this.load.image(\"playIcon\", \"../../assets/play-64.png\");\n        this.load.image(\"block\", \"../../assets/block-32.png\");\n        this.load.image(\"blockA\", \"../../assets/block-32-A.png\");\n        this.load.image(\"blockB\", \"../../assets/block-32-B.png\");\n        this.load.image(\"blockC\", \"../../assets/block-32-C.png\");\n        this.load.image(\"blockD\", \"../../assets/block-32-D.png\");\n        this.load.image(\"blockK\", \"../../assets/block-32-K.png\");\n        this.load.image(\"blockCal\", \"../../assets/block-32-Cal.png\");\n        this.load.audio(\"tick\", \"../../assets/tickSound.wav\");\n        this.load.audio(\"click\", \"../../assets/click.wav\");\n        this.load.audio(\"lineBreak\", \"../../assets/lineBreak.wav\");\n        this.load.audio(\"background\", \"../../assets/background.mp3\");\n    };\n    LoadScene.prototype.create = function () {\n        var backgroundSound = this.sound.add(\"background\", { volume: 0.1, loop: true });\n        backgroundSound.play();\n        this.scene.start(MenuScene_1.MenuScene.name);\n    };\n    return LoadScene;\n}(phaser_1.Scene));\nexports.LoadScene = LoadScene;\n\n\n//# sourceURL=webpack:///./src/scenes/LoadScene.ts?");

/***/ }),

/***/ "./src/scenes/MenuScene.ts":
/*!*********************************!*\
  !*** ./src/scenes/MenuScene.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.MenuScene = void 0;\nvar BaseGameScene_1 = __webpack_require__(/*! ./BaseGameScene */ \"./src/scenes/BaseGameScene.ts\");\nvar GameData_1 = __webpack_require__(/*! ../GameData */ \"./src/GameData.ts\");\nvar GameScene_1 = __webpack_require__(/*! ./GameScene */ \"./src/scenes/GameScene.ts\");\nvar MenuScene = /** @class */ (function (_super) {\n    __extends(MenuScene, _super);\n    function MenuScene() {\n        var _this = _super.call(this, { key: MenuScene.name }) || this;\n        _this.textStyle = { color: _this.textColor, align: \"center\", fontSize: \"24px\" };\n        _this.showPoints = false;\n        return _this;\n    }\n    MenuScene.prototype.init = function (data) {\n        this.showPoints = data.showPoints;\n    };\n    MenuScene.prototype.create = function () {\n        _super.prototype.create.call(this);\n        var titleLabel = this.add.text(0, 30, \"Vitamin-Tetris\", this.textStyle);\n        titleLabel.x = (this.width - titleLabel.width) / 2;\n        if (this.showPoints) {\n            var gameOverLabel = this.add.text(0, 150, \"Game over\", this.textStyle);\n            gameOverLabel.x = (this.width - gameOverLabel.width) / 2;\n            var pointsLabel = this.add.text(0, 200, \"You earned \".concat(GameData_1.default.gamePoints, \" points\"), this.textStyle);\n            pointsLabel.x = (this.width - pointsLabel.width) / 2;\n        }\n        var playButton = this.add.image(this.width / 2, this.height / 2, \"playIcon\");\n        playButton.setInteractive();\n        playButton.on(\"pointerdown\", this.startGame, this);\n        this.input.keyboard.on(\"keydown_SPACE\", this.startGame, this);\n        this.input.keyboard.on(\"keydown_ENTER\", this.startGame, this);\n    };\n    MenuScene.prototype.startGame = function () {\n        this.sound.play(\"click\", { volume: 0.1 });\n        this.scene.start(GameScene_1.GameScene.name);\n    };\n    return MenuScene;\n}(BaseGameScene_1.BaseGameScene));\nexports.MenuScene = MenuScene;\n\n\n//# sourceURL=webpack:///./src/scenes/MenuScene.ts?");

/***/ }),

/***/ 0:
/*!*****************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://localhost:8080 ./src/Game.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /mnt/c/Users/noahk/Documents/School/CISC374/code/merging/mvp-whatsaveryalleneating/node_modules/webpack-dev-server/client/index.js?http://localhost:8080 */\"./node_modules/webpack-dev-server/client/index.js?http://localhost:8080\");\nmodule.exports = __webpack_require__(/*! ./src/Game.ts */\"./src/Game.ts\");\n\n\n//# sourceURL=webpack:///multi_(webpack)-dev-server/client?");

/***/ })

/******/ });