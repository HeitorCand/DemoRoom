var widthRelative = window.innerWidth * Math.max(1, window.devicePixelRatio / 2);
var heightRelative = window.innerHeight * Math.max(1, window.devicePixelRatio / 2);

class DemoRoom extends Phaser.Scene {
  preload() {
    this.load.image('room', 'assets/RoomStructure.png');
    this.load.image('bed', 'assets/bed.png');
    this.load.image('shelving', 'assets/shelving.png');
    this.load.image('book', 'assets/Books.png');
    this.load.image('closet', 'assets/Closet.png');
    this.load.image('desk', 'assets/Desk.png');
    this.load.image('chair', 'assets/Chair.png');
    this.load.image('lamp', 'assets/Lamp.png');
    this.load.image('mirror', 'assets/Mirror.png');
    this.load.image('wallShelving', 'assets/WallShelving.png');
  }

  create() {

    const backgroundRect = this.add.rectangle(0, 0, widthRelative, heightRelative, 0xb5cbd6); // 0x000000 representa a cor preta em hexadecimal
    backgroundRect.setOrigin(0, 0); // Define a origem para o canto superior esquerdo

    this.add.image(0, 0, 'room').setOrigin(-0.6, 0).setScale(0.65);
    this.add.image(0, 0, 'lamp').setOrigin(-2.3, -0.5).setScale(0.25);
    this.add.image(0, 0, 'shelving').setOrigin(-1.7, -0.68).setScale(0.27);
    this.add.image(0, 0, 'bed').setOrigin(-2.04, -1.57).setScale(0.22);
    this.add.image(0, 0, 'mirror').setOrigin(-3.55, -2.1).setScale(0.12);
    this.add.image(0, 0, 'desk').setOrigin(-3.42, -1.28).setScale(0.2);
    this.add.image(0, 0, 'chair').setOrigin(-4.18, -1.85).setScale(0.16);
    this.add.image(0, 0, 'wallShelving').setOrigin(-4.9, -1.1).setScale(0.15);
    this.add.image(0, 0, 'book').setOrigin(-9.6, -2).setScale(0.08);
    this.add.image(0, 0, 'closet').setOrigin(-3.055, -1).setScale(0.25);



  }
}

const config = {
  type: Phaser.AUTO,
  width: widthRelative,
  height: heightRelative,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  scene: DemoRoom,

};

const game = new Phaser.Game(config);