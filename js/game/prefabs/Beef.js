var Beef = function(game, x, y, key, frame){
    key = 'beef';
    Phaser.Sprite.call(this, game, x, y, key, frame);

    this.scale.setTo(0.05);
    this.anchor.setTo(0.5);

    this.game.physics.arcade.enableBody(this);
    this.body.allowGravity = false;

    this.checkWorldBounds = true;
    this.onOutOfBoundsKill = true;

    this.events.onKilled.add(this.onKilled, this);
    this.events.onRevived.add(this.onRevived, this);

   
};

Beef.prototype = Object.create(Phaser.Sprite.prototype);
Beef.prototype.constructor = Beef;

Beef.prototype.onRevived = function(){
    this.body.velocity.x = -400;
    //this.animation.play('spin',10,true);
};

Beef.prototype.onKilled = function(){
    this.animations.frame = 0;
}