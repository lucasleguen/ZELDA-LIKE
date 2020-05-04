var config = {
    type : Phaser.AUTO,
    width : 600,
    height : 450,
    scene : {
        preload : preload,
        create : create,
        update : update,
    },
}

const game = new Phaser.Game(config);

function preload(){
 this.load.image("menu","asset/fondintro.jpg")
}

function create(){
 this.add.sprite(100,100,"menu");
}

function update(time, delta){


}