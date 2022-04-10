export class Foods {
    public foodMap: Map<string, string[]> = new Map<string, string[]>();
    constructor() {
        this.foodMap.set("apple", ["blockB", "blockC"]);
        this.foodMap.set("mango", ["blockA", "blockB"]);
        this.foodMap.set("broccoli", ["blockCal", "blockK"]);
        this.foodMap.set("milk", ["blockCal", "blockA"]);
        this.foodMap.set("banana", ["blockB", "blockA"]);
        this.foodMap.set("salmon", ["blockD", "blockB"]);
        this.foodMap.set("lettuce", ["blockK", "blockA"]);
        this.foodMap.set("eggs", ["blockD", "blockD"]);
        console.log(this.foodMap);
    }
}