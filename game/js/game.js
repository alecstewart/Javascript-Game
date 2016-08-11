var game = new Phaser.Game(975, 800, Phaser.AUTO, '', {
  preload: preload,
  create: create,
  update: update
});

var platforms;
var player;
var cursors;
var score = 0;
var scoreText;

function preload() {
    game.load.image('sky', 'assets/sky.png');
    game.load.image('ground', 'assets/platform2.png');
    game.load.image('star', 'assets/star.png');
    game.load.image('grid1', 'gridbw1.jpg');
    game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
    game.load.audio('crazy_sound', 'assets/oedipus_ark_pandaro.mp3')
}

function create() {

    cursors = game.input.keyboard.createCursorKeys();

    //  We're going to be using physics, so enable the Arcade Physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //  A simple background for our game
    game.add.sprite(0, 0, 'grid1');

    //  The platforms group contains the ground and the 2 ledges we can jump on
    platforms = game.add.group();

    //  We will enable physics for any object that is created in this group
    platforms.enableBody = true;

    // Here we create the ground.
    var ground = platforms.create(0, game.world.height - 64, 'ground');

    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    ground.scale.setTo(2, 2);

    //  This stops it from falling away when you jump on it
    ground.body.immovable = true;

    //  Now let's create two ledges
    var ledge = platforms.create(400, 400, 'ground');
    ledge.body.immovable = false;
    var ledge2 = platforms.create(200, 200, 'ground');
    ledge2.body.immovable = false;
    var ledge3 = platforms.create(100, 100, 'ground');
    ledge3.body.immovable = false;
    var ledge4 = platforms.create(25, 25, 'ground');
    ledge3.body.immovable = false;
    var ledge5 = platforms.create(5, 5, 'ground');
    ledge3.body.immovable = false;
    var ledge6 = platforms.create(800, 800, 'ground');
    ledge3.body.immovable = false;
    var ledge7 = platforms.create(600, 600, 'ground');
    ledge3.body.immovable = false;
    var ledge8 = platforms.create(800, 600, 'ground');
    ledge3.body.immovable = false;
    var ledge9 = platforms.create(200, 400, 'ground');
    ledge3.body.immovable = false;
    var ledge10 = platforms.create(100, 200, 'ground');
    ledge3.body.immovable = false;
    var ledge11 = platforms.create(100, 400, 'ground');
    ledge3.body.immovable = false;
    var ledge12 = platforms.create(200, 300, 'ground');
    ledge3.body.immovable = false;
    var ledge13 = platforms.create(400, 400, 'ground');
    ledge3.body.immovable = false;
    var ledge14 = platforms.create(200, 100, 'ground');
    ledge4.body.immovable = false;
    var ledge15 = platforms.create(100, 200, 'ground');
    ledge3.body.immovable = false;
    var ledge16 = platforms.create(25, 250, 'ground');
    ledge3.body.immovable = false;
    var ledge17 = platforms.create(5, 50, 'ground');
    ledge3.body.immovable = false;
    var ledge18 = platforms.create(100, 50, 'ground');
    ledge3.body.immovable = false;
    var ledge19 = platforms.create(100, 25, 'ground');
    ledge3.body.immovable = false;
    var ledge20 = platforms.create(800, 25, 'ground');
    ledge3.body.immovable = false;
    var ledge21 = platforms.create(200, 25, 'ground');
    ledge3.body.immovable = false;
    var ledge22 = platforms.create(100, 25, 'ground');
    ledge3.body.immovable = false;
    var ledge23 = platforms.create(25, 400, 'ground');
    ledge3.body.immovable = false;
    var ledge24 = platforms.create(100, 120, 'ground');
    ledge3.body.immovable = false;
    var ledge25 = platforms.create(400, 190, 'ground');
    ledge3.body.immovable = false;
    var ledge26 = platforms.create(200, 190, 'ground');
    ledge4.body.immovable = false;
    var ledge27 = platforms.create(100, 180, 'ground');
    ledge3.body.immovable = false;
    var ledge28 = platforms.create(25, 250, 'ground');
    ledge3.body.immovable = false;
    var ledge29 = platforms.create(140, 150, 'ground');
    ledge3.body.immovable = false;
    var ledge30 = platforms.create(160, 150, 'ground');
    ledge3.body.immovable = false;
    var ledge31 = platforms.create(140, 250, 'ground');
    ledge3.body.immovable = false;
    var ledge32 = platforms.create(180, 250, 'ground');
    ledge3.body.immovable = false;
    var ledge33 = platforms.create(200, 125, 'ground');
    ledge3.body.immovable = false;
    var ledge34 = platforms.create(150, 250, 'ground');
    ledge3.body.immovable = false;
    var ledge35 = platforms.create(225, 140, 'ground');
    ledge3.body.immovable = false;
    var ledge36 = platforms.create(110, 210, 'ground');
    ledge3.body.immovable = false;
    var ledge37 = platforms.create(410, 410, 'ground');
    ledge3.body.immovable = false;
    var ledge38 = platforms.create(210, 210, 'ground');
    ledge3.body.immovable = false;
    var ledge39 = platforms.create(100, 110, 'ground');
    ledge3.body.immovable = false;
    var ledge40 = platforms.create(25, 250, 'ground');
    ledge3.body.immovable = false;
    var ledge41 = platforms.create(510, 110, 'ground');
    ledge3.body.immovable = false;
    var ledge42 = platforms.create(810, 110, 'ground');
    ledge3.body.immovable = false;
    var ledge43 = platforms.create(610, 110, 'ground');
    ledge3.body.immovable = false;
    var ledge44 = platforms.create(810, 110, 'ground');
    ledge3.body.immovable = false;
    var ledge45 = platforms.create(210, 410, 'ground');
    ledge3.body.immovable = false;
    var ledge46 = platforms.create(110, 200, 'ground');
    ledge3.body.immovable = false;
    var ledge47 = platforms.create(110, 110, 'ground');
    ledge3.body.immovable = false;
    var ledge48 = platforms.create(110, 310, 'ground');
    ledge3.body.immovable = false;
    var ledge49 = platforms.create(100, 400, 'ground');
    ledge3.body.immovable = false;
    var ledge50 = platforms.create(210, 110, 'ground');
    ledge4.body.immovable = false;
    var ledge51 = platforms.create(101, 210, 'ground');
    ledge3.body.immovable = false;
    var ledge52 = platforms.create(115, 250, 'ground');
    ledge3.body.immovable = false;
    var ledge53 = platforms.create(115, 150, 'ground');
    ledge3.body.immovable = false;
    var ledge54 = platforms.create(110, 150, 'ground');
    ledge3.body.immovable = false;
    var ledge55 = platforms.create(110, 215, 'ground');
    ledge3.body.immovable = false;
    var ledge56 = platforms.create(110, 125, 'ground');
    ledge3.body.immovable = false;
    var ledge57 = platforms.create(200, 125, 'ground');
    ledge3.body.immovable = false;
    var ledge58 = platforms.create(110, 125, 'ground');
    ledge3.body.immovable = false;
    var ledge59 = platforms.create(115, 110, 'ground');
    ledge3.body.immovable = false;
    var ledge60 = platforms.create(110, 210, 'ground');
    ledge3.body.immovable = false;
    var ledge61 = platforms.create(410, 910, 'ground');
    ledge3.body.immovable = false;
    var ledge62 = platforms.create(210, 910, 'ground');
    ledge4.body.immovable = false;
    var ledge63 = platforms.create(110, 810, 'ground');
    ledge3.body.immovable = false;
    var ledge64 = platforms.create(125, 250, 'ground');
    ledge3.body.immovable = false;
    var ledge65 = platforms.create(450, 150, 'ground');
    ledge3.body.immovable = false;
    var ledge66 = platforms.create(650, 150, 'ground');
    ledge3.body.immovable = false;
    var ledge67 = platforms.create(450, 250, 'ground');
    ledge3.body.immovable = false;
    var ledge68 = platforms.create(550, 250, 'ground');
    ledge3.body.immovable = false;
    var ledge69 = platforms.create(550, 125, 'ground');
    ledge3.body.immovable = false;
    var ledge70 = platforms.create(550, 250, 'ground');
    ledge3.body.immovable = false;
    var ledge71 = platforms.create(225, 450, 'ground');
    ledge3.body.immovable = false;
    var ledge72 = platforms.create(310, 250, 'ground');
    ledge3.body.immovable = false;
    var ledge73 = platforms.create(420, 420, 'ground');
    ledge.body.immovable = false;
    var ledge74 = platforms.create(230, 230, 'ground');
    ledge2.body.immovable = false;
    var ledge75 = platforms.create(130, 130, 'ground');
    ledge3.body.immovable = false;
    var ledge76 = platforms.create(235, 235, 'ground');
    ledge3.body.immovable = false;
    var ledge77 = platforms.create(35, 35, 'ground');
    ledge3.body.immovable = false;
    var ledge78 = platforms.create(800, 830, 'ground');
    ledge3.body.immovable = false;
    var ledge79 = platforms.create(630, 600, 'ground');
    ledge3.body.immovable = false;
    var ledge80 = platforms.create(830, 630, 'ground');
    ledge3.body.immovable = false;
    var ledge81 = platforms.create(230, 430, 'ground');
    ledge3.body.immovable = false;
    var ledge82 = platforms.create(130, 230, 'ground');
    ledge3.body.immovable = false;
    var ledge83 = platforms.create(130, 430, 'ground');
    ledge3.body.immovable = false;
    var ledge84 = platforms.create(230, 330, 'ground');
    ledge3.body.immovable = false;
    var ledge85 = platforms.create(430, 430, 'ground');
    ledge3.body.immovable = false;
    var ledge86 = platforms.create(230, 130, 'ground');
    ledge4.body.immovable = false;
    var ledge87 = platforms.create(130, 230, 'ground');
    ledge3.body.immovable = false;
    var ledge89 = platforms.create(253, 350, 'ground');
    ledge3.body.immovable = false;
    var ledge90 = platforms.create(5, 503, 'ground');
    ledge3.body.immovable = false;
    var ledge91 = platforms.create(130, 350, 'ground');
    ledge3.body.immovable = false;
    var ledge92 = platforms.create(103, 235, 'ground');
    ledge3.body.immovable = false;
    var ledge93 = platforms.create(803, 25, 'ground');
    ledge3.body.immovable = false;
    var ledge94 = platforms.create(210, 325, 'ground');
    ledge3.body.immovable = false;
    var ledge95 = platforms.create(133, 235, 'ground');
    ledge3.body.immovable = false;
    var ledge96 = platforms.create(256, 460, 'ground');
    ledge3.body.immovable = false;
    var ledge97 = platforms.create(160, 160, 'ground');
    ledge3.body.immovable = false;
    var ledge98 = platforms.create(600, 690, 'ground');
    ledge3.body.immovable = false;
    var ledge99 = platforms.create(260, 690, 'ground');
    ledge4.body.immovable = false;
    var ledge100 = platforms.create(160, 160, 'ground');
    ledge3.body.immovable = false;
    var ledge101 = platforms.create(26, 260, 'ground');
    ledge3.body.immovable = false;
    var ledge102 = platforms.create(660, 660, 'ground');
    ledge3.body.immovable = false;
    var ledge103 = platforms.create(160, 160, 'ground');
    ledge3.body.immovable = false;
    var ledge104 = platforms.create(666, 660, 'ground');
    ledge3.body.immovable = false;
    var ledge105 = platforms.create(660, 650, 'ground');
    ledge3.body.immovable = false;
    var ledge106 = platforms.create(600, 625, 'ground');
    ledge3.body.immovable = false;
    var ledge107 = platforms.create(160, 650, 'ground');
    ledge3.body.immovable = false;
    var ledge108 = platforms.create(665, 40, 'ground');
    ledge3.body.immovable = false;
    var ledge109 = platforms.create(660, 210, 'ground');
    ledge3.body.immovable = false;
    var ledge110 = platforms.create(660, 410, 'ground');
    ledge3.body.immovable = false;
    var ledge111 = platforms.create(660, 60, 'ground');
    ledge3.body.immovable = false;
    var ledge112 = platforms.create(10, 10, 'ground');
    ledge3.body.immovable = false;
    var ledge113 = platforms.create(25, 650, 'ground');
    ledge3.body.immovable = false;
    var ledge114 = platforms.create(50, 10, 'ground');
    ledge3.body.immovable = false;
    var ledge115 = platforms.create(10, 610, 'ground');
    ledge3.body.immovable = false;
    var ledge116 = platforms.create(210, 610, 'ground');
    ledge3.body.immovable = false;
    var ledge117 = platforms.create(910, 910, 'ground');
    ledge3.body.immovable = false;
    var ledge118 = platforms.create(210, 910, 'ground');
    ledge3.body.immovable = false;
    var ledge119 = platforms.create(110, 900, 'ground');
    ledge3.body.immovable = false;
    var ledge120 = platforms.create(190, 610, 'ground');
    ledge3.body.immovable = false;
    var ledge121 = platforms.create(130, 510, 'ground');
    ledge3.body.immovable = false;
    var ledge122 = platforms.create(130, 660, 'ground');
    ledge3.body.immovable = false;
    var ledge123 = platforms.create(210, 660, 'ground');
    ledge4.body.immovable = false;
    var ledge124 = platforms.create(166, 240, 'ground');
    ledge3.body.immovable = false;
    var ledge125 = platforms.create(125, 200, 'ground');
    ledge3.body.immovable = false;
    var ledge126 = platforms.create(145, 150, 'ground');
    ledge3.body.immovable = false;
    var ledge127 = platforms.create(570, 150, 'ground');
    ledge3.body.immovable = false;
    var ledge128 = platforms.create(110, 225, 'ground');
    ledge3.body.immovable = false;
    var ledge129 = platforms.create(100, 195, 'ground');
    ledge3.body.immovable = false;
    var ledge130 = platforms.create(290, 925, 'ground');
    ledge3.body.immovable = false;
    var ledge131 = platforms.create(190, 925, 'ground');
    ledge3.body.immovable = false;
    var ledge132 = platforms.create(195, 910, 'ground');
    ledge3.body.immovable = false;
    var ledge133 = platforms.create(110, 910, 'ground');
    ledge3.body.immovable = false;
    var ledge134 = platforms.create(490, 910, 'ground');
    ledge3.body.immovable = false;
    var ledge135 = platforms.create(290, 910, 'ground');
    ledge4.body.immovable = false;
    var ledge136 = platforms.create(190, 810, 'ground');
    ledge3.body.immovable = false;
    var ledge137 = platforms.create(190, 250, 'ground');
    ledge3.body.immovable = false;
    var ledge138 = platforms.create(950, 950, 'ground');
    ledge3.body.immovable = false;
    var ledge139 = platforms.create(650, 950, 'ground');
    ledge3.body.immovable = false;
    var ledge140 = platforms.create(990, 250, 'ground');
    ledge3.body.immovable = false;
    var ledge141 = platforms.create(990, 990, 'ground');
    ledge3.body.immovable = false;
    var ledge142 = platforms.create(550, 995, 'ground');
    ledge3.body.immovable = false;
    var ledge143 = platforms.create(550, 990, 'ground');
    ledge3.body.immovable = false;
    var ledge144 = platforms.create(225, 990, 'ground');
    ledge3.body.immovable = false;
    var ledge145 = platforms.create(990, 250, 'ground');
    ledge3.body.immovable = false;


    ledge = platforms.create(150, 250, 'ground');
    ledge.body.immovable = false;
    ledge2 = platforms.create(75, 125, 'ground');
    ledge2.body.immovable = false;
    ledge3 = platforms.create(32.5, 62.5, 'ground');
    ledge3.body.immovable = false;
    ledge4 = platforms.create(16.25, 31.25, 'ground');
    ledge3.body.immovable = false;
    ledge5 = platforms.create(4, 16, 'ground');
    ledge3.body.immovable = false;
    ledge6 = platforms.create(300, 500, 'ground');
    ledge3.body.immovable = false;
    ledge7 = platforms.create(600, 100, 'ground');
    ledge3.body.immovable = false;
    ledge8 = platforms.create(600, 200, 'ground');
    ledge3.body.immovable = false;
    ledge9 = platforms.create(200, 500, 'ground');
    ledge3.body.immovable = false;
    ledge10 = platforms.create(300, 700, 'ground');
    ledge3.body.immovable = false;
    ledge11 = platforms.create(200, 600, 'ground');
    ledge3.body.immovable = false;
    ledge12 = platforms.create(100, 600, 'ground');
    ledge3.body.immovable = false;
    ledge13 = platforms.create(25, 250, 'ground');
    ledge13.body.immovable = false;
    ledge14 = platforms.create(100, 125, 'ground');
    ledge14.body.immovable = false;
    ledge15 = platforms.create(25, 110, 'ground');
    ledge15.body.immovable = false;
    ledge16 = platforms.create(50, 100, 'ground');
    ledge16.body.immovable = false;
    ledge17 = platforms.create(100, 50, 'ground');
    ledge17.body.immovable = false;
    ledge18 = platforms.create(100, 500, 'ground');
    ledge18.body.immovable = false;
    ledge19 = platforms.create(100, 50, 'ground');
    ledge19.body.immovable = false;
    ledge20 = platforms.create(100, 75, 'ground');
    ledge20.body.immovable = false;
    ledge21 = platforms.create(25, 500, 'ground');
    ledge21.body.immovable = false;
    ledge22 = platforms.create(300, 25, 'ground');
    ledge22.body.immovable = false;
    ledge23 = platforms.create(200, 25, 'ground');
    ledge23.body.immovable = false;
    ledge24 = platforms.create(100, 200, 'ground');
    ledge24.body.immovable = false;
    ledge25 = platforms.create(130, 125, 'ground');
    ledge14.body.immovable = false;
    ledge26 = platforms.create(125, 160, 'ground');
    ledge15.body.immovable = false;
    ledge27 = platforms.create(150, 120, 'ground');
    ledge16.body.immovable = false;
    ledge28 = platforms.create(110, 150, 'ground');
    ledge17.body.immovable = false;
    ledge29 = platforms.create(130, 150, 'ground');
    ledge18.body.immovable = false;
    ledge30 = platforms.create(100, 500, 'ground');
    ledge19.body.immovable = false;
    ledge31 = platforms.create(160, 750, 'ground');
    ledge20.body.immovable = false;
    ledge32 = platforms.create(25, 150, 'ground');
    ledge21.body.immovable = false;
    ledge33 = platforms.create(130, 25, 'ground');
    ledge22.body.immovable = false;
    ledge34 = platforms.create(120, 25, 'ground');
    ledge23.body.immovable = false;
    ledge35 = platforms.create(120, 110, 'ground');
    ledge24.body.immovable = false;
    ledge36 = platforms.create(160, 110, 'ground');
    ledge24.body.immovable = false;
    ledge37 = platforms.create(150, 125, 'ground');
    ledge.body.immovable = false;
    ledge38 = platforms.create(175, 125, 'ground');
    ledge2.body.immovable = false;
    ledge39 = platforms.create(145, 62.5, 'ground');
    ledge3.body.immovable = false;
    ledge40 = platforms.create(162, 25, 'ground');
    ledge3.body.immovable = false;
    ledge41 = platforms.create(4, 165, 'ground');
    ledge3.body.immovable = false;
    ledge42 = platforms.create(130, 150, 'ground');
    ledge3.body.immovable = false;
    ledge43 = platforms.create(160, 100, 'ground');
    ledge3.body.immovable = false;
    ledge44 = platforms.create(60, 120, 'ground');
    ledge3.body.immovable = false;
    ledge45 = platforms.create(120, 150, 'ground');
    ledge3.body.immovable = false;
    ledge46 = platforms.create(130, 170, 'ground');
    ledge3.body.immovable = false;
    ledge47 = platforms.create(120, 160, 'ground');
    ledge3.body.immovable = false;
    ledge48 = platforms.create(120, 600, 'ground');
    ledge3.body.immovable = false;
    ledge49 = platforms.create(162, 250, 'ground');
    ledge13.body.immovable = false;
    ledge50 = platforms.create(110, 125, 'ground');
    ledge14.body.immovable = false;
    ledge51 = platforms.create(125, 100, 'ground');
    ledge15.body.immovable = false;
    ledge52 = platforms.create(165, 100, 'ground');
    ledge16.body.immovable = false;
    ledge53 = platforms.create(160, 50, 'ground');
    ledge17.body.immovable = false;
    ledge54 = platforms.create(100, 500, 'ground');
    ledge18.body.immovable = false;
    ledge55 = platforms.create(100, 155, 'ground');
    ledge19.body.immovable = false;
    ledge56 = platforms.create(100, 170, 'ground');
    ledge20.body.immovable = false;
    ledge57 = platforms.create(250, 15, 'ground');
    ledge21.body.immovable = false;
    ledge58 = platforms.create(130, 25, 'ground');
    ledge22.body.immovable = false;
    ledge59 = platforms.create(20, 250, 'ground');
    ledge23.body.immovable = false;
    ledge60 = platforms.create(100, 120, 'ground');
    ledge24.body.immovable = false;
    ledge61 = platforms.create(130, 125, 'ground');
    ledge14.body.immovable = false;
    ledge62 = platforms.create(125, 160, 'ground');
    ledge15.body.immovable = false;
    ledge63 = platforms.create(150, 120, 'ground');
    ledge16.body.immovable = false;
    ledge64 = platforms.create(10, 115, 'ground');
    ledge17.body.immovable = false;
    ledge65 = platforms.create(10, 15, 'ground');
    ledge18.body.immovable = false;
    ledge66 = platforms.create(100, 15, 'ground');
    ledge19.body.immovable = false;
    ledge67 = platforms.create(160, 75, 'ground');
    ledge20.body.immovable = false;
    ledge68 = platforms.create(250, 150, 'ground');
    ledge21.body.immovable = false;
    ledge69 = platforms.create(130, 250, 'ground');
    ledge22.body.immovable = false;
    ledge70 = platforms.create(120, 250, 'ground');
    ledge23.body.immovable = false;
    ledge71 = platforms.create(120, 10, 'ground');
    ledge24.body.immovable = false;
    ledge72 = platforms.create(160, 20, 'ground');
    ledge24.body.immovable = false;
    ledge73 = platforms.create(150, 250, 'ground');
    ledge.body.immovable = false;
    ledge74 = platforms.create(75, 125, 'ground');
    ledge2.body.immovable = false;
    ledge75 = platforms.create(32.5, 62.5, 'ground');
    ledge3.body.immovable = false;
    ledge76 = platforms.create(16.25, 31.25, 'ground');
    ledge3.body.immovable = false;
    ledge77 = platforms.create(4, 16, 'ground');
    ledge3.body.immovable = false;
    ledge78 = platforms.create(300, 500, 'ground');
    ledge3.body.immovable = false;
    ledge79 = platforms.create(600, 100, 'ground');
    ledge3.body.immovable = false;
    ledge80 = platforms.create(600, 200, 'ground');
    ledge3.body.immovable = false;
    ledge81 = platforms.create(200, 500, 'ground');
    ledge3.body.immovable = false;
    ledge82 = platforms.create(300, 700, 'ground');
    ledge3.body.immovable = false;
    ledge83 = platforms.create(200, 600, 'ground');
    ledge3.body.immovable = false;
    ledge84 = platforms.create(100, 600, 'ground');
    ledge3.body.immovable = false;
    ledge85 = platforms.create(25, 250, 'ground');
    ledge13.body.immovable = false;
    ledge86 = platforms.create(100, 125, 'ground');
    ledge14.body.immovable = false;
    ledge87 = platforms.create(25, 110, 'ground');
    ledge15.body.immovable = false;
    ledge88 = platforms.create(50, 100, 'ground');
    ledge16.body.immovable = false;
    ledge89 = platforms.create(100, 50, 'ground');
    ledge17.body.immovable = false;
    ledge90 = platforms.create(100, 500, 'ground');
    ledge18.body.immovable = false;
    ledge91 = platforms.create(100, 50, 'ground');
    ledge19.body.immovable = false;
    ledge92 = platforms.create(100, 75, 'ground');
    ledge20.body.immovable = false;
    ledge93 = platforms.create(25, 500, 'ground');
    ledge21.body.immovable = false;
    ledge94 = platforms.create(300, 25, 'ground');
    ledge22.body.immovable = false;
    ledge95 = platforms.create(200, 25, 'ground');
    ledge23.body.immovable = false;
    ledge96 = platforms.create(100, 200, 'ground');
    ledge24.body.immovable = false;
    ledge97 = platforms.create(130, 125, 'ground');
    ledge14.body.immovable = false;
    ledge98 = platforms.create(125, 160, 'ground');
    ledge15.body.immovable = false;
    ledge99 = platforms.create(150, 120, 'ground');
    ledge16.body.immovable = false;
    ledge100 = platforms.create(110, 150, 'ground');
    ledge17.body.immovable = false;
    ledge101 = platforms.create(130, 150, 'ground');
    ledge18.body.immovable = false;
    ledge102 = platforms.create(100, 500, 'ground');
    ledge19.body.immovable = false;
    ledge103 = platforms.create(160, 750, 'ground');
    ledge20.body.immovable = false;
    ledge104 = platforms.create(25, 150, 'ground');
    ledge21.body.immovable = false;
    ledge105 = platforms.create(130, 25, 'ground');
    ledge22.body.immovable = false;
    ledge106 = platforms.create(120, 25, 'ground');
    ledge23.body.immovable = false;
    ledge107 = platforms.create(120, 110, 'ground');
    ledge24.body.immovable = false;
    ledge108 = platforms.create(160, 110, 'ground');
    ledge24.body.immovable = false;
    ledge109 = platforms.create(150, 125, 'ground');
    ledge.body.immovable = false;
    ledge110 = platforms.create(175, 125, 'ground');
    ledge2.body.immovable = false;
    ledge111 = platforms.create(145, 62.5, 'ground');
    ledge3.body.immovable = false;
    ledge112 = platforms.create(162, 25, 'ground');
    ledge3.body.immovable = false;
    ledge113 = platforms.create(4, 165, 'ground');
    ledge3.body.immovable = false;
    ledge114 = platforms.create(130, 150, 'ground');
    ledge3.body.immovable = false;
    ledge115 = platforms.create(160, 100, 'ground');
    ledge3.body.immovable = false;
    ledge116 = platforms.create(60, 120, 'ground');
    ledge3.body.immovable = false;
    ledge117 = platforms.create(120, 150, 'ground');
    ledge3.body.immovable = false;
    ledge118 = platforms.create(130, 170, 'ground');
    ledge3.body.immovable = false;
    ledge119 = platforms.create(120, 160, 'ground');
    ledge3.body.immovable = false;
    ledge120 = platforms.create(120, 600, 'ground');
    ledge3.body.immovable = false;
    ledge121 = platforms.create(162, 250, 'ground');
    ledge13.body.immovable = false;
    ledge122 = platforms.create(110, 125, 'ground');
    ledge14.body.immovable = false;
    ledge123 = platforms.create(125, 100, 'ground');
    ledge15.body.immovable = false;
    ledge124 = platforms.create(165, 100, 'ground');
    ledge16.body.immovable = false;
    ledge125 = platforms.create(160, 50, 'ground');
    ledge17.body.immovable = false;
    ledge126 = platforms.create(100, 500, 'ground');
    ledge18.body.immovable = false;
    ledge127 = platforms.create(100, 155, 'ground');
    ledge19.body.immovable = false;
    ledge128 = platforms.create(100, 170, 'ground');
    ledge20.body.immovable = false;
    ledge129 = platforms.create(250, 15, 'ground');
    ledge21.body.immovable = false;
    ledge130 = platforms.create(130, 25, 'ground');
    ledge22.body.immovable = false;
    ledge131 = platforms.create(20, 250, 'ground');
    ledge23.body.immovable = false;
    ledge132 = platforms.create(100, 120, 'ground');
    ledge24.body.immovable = false;
    ledge133 = platforms.create(130, 125, 'ground');
    ledge14.body.immovable = false;
    ledge134 = platforms.create(125, 160, 'ground');
    ledge15.body.immovable = false;
    ledge135 = platforms.create(150, 120, 'ground');
    ledge16.body.immovable = false;
    ledge136 = platforms.create(10, 115, 'ground');
    ledge17.body.immovable = false;
    ledge137 = platforms.create(10, 15, 'ground');
    ledge18.body.immovable = false;
    ledge138 = platforms.create(100, 15, 'ground');
    ledge19.body.immovable = false;
    ledge139 = platforms.create(160, 75, 'ground');
    ledge20.body.immovable = false;
    ledge140 = platforms.create(250, 150, 'ground');
    ledge21.body.immovable = false;
    ledge141 = platforms.create(130, 250, 'ground');
    ledge22.body.immovable = false;
    ledge142 = platforms.create(120, 250, 'ground');
    ledge23.body.immovable = false;
    ledge143 = platforms.create(120, 10, 'ground');
    ledge24.body.immovable = false;
    ledge144 = platforms.create(160, 20, 'ground');
    ledge24.body.immovable = false;



    // The player and its settings
    player = game.add.sprite(32, game.world.height - 150, 'dude');

    //  We need to enable physics on the player
    game.physics.arcade.enable(player);

    //  Player physics properties. Give the little guy a slight bounce.
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 100;
    player.body.collideWorldBounds = true;

    //  Our two animations, walking left and right.
    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);

    stars = game.add.group();

        stars.enableBody = true;

        //  Here we'll create 12 of them evenly spaced apart
        for (var i = 0; i < 12; i++)
        {
            //  Create a star inside of the 'stars' group
            var star = stars.create(i * 70, 0, 'star');

            //  Let gravity do its thing
            star.body.gravity.y = 6;

            //  This just gives each star a slightly random bounce value
            star.body.bounce.y = 0.7 + Math.random() * 0.2;
        }

        scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
}




function update() {
    //  Collide the player and the stars with the platforms
    game.physics.arcade.collide(player, platforms);
    game.physics.arcade.collide(stars, platforms);
    game.physics.arcade.overlap(player, stars, collectStar, null, this);

    //  Reset the players velocity (movement)
    player.body.velocity.x = 0;

    if (cursors.left.isDown)
    {
        //  Move to the left
        player.body.velocity.x = -150;

        player.animations.play('left');
    }
    else if (cursors.right.isDown)
    {
        //  Move to the right
        player.body.velocity.x = 150;

        player.animations.play('right');
    }
    else
    {
        //  Stand still
        player.animations.stop();

        player.frame = 4;
    }

    //  Allow the player to jump if they are touching the ground.
    if (cursors.up.isDown && player.body.touching.down)
    {
        player.body.velocity.y = -350;
    }


}

function collectStar (player, star) {

    // Removes the star from the screen
    star.kill();

    //  Add and update the score
    score += 10;
    scoreText.text = 'Score: ' + score;

}
