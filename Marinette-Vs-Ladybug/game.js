(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 800,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/game_atlas_.png?1534846371896", id:"game_atlas_"},
		{src:"images/game_atlas_2.png?1534846371896", id:"game_atlas_2"},
		{src:"images/game_atlas_3.png?1534846371897", id:"game_atlas_3"},
		{src:"images/game_atlas_4.png?1534846371898", id:"game_atlas_4"},
		{src:"sounds/bgmusic.mp3?1534846371900", id:"bgmusic"},
		{src:"sounds/sparkles.mp3?1534846371900", id:"sparkles"}
	]
};



lib.ssMetadata = [
		{name:"game_atlas_", frames: [[0,0,1200,900],[0,902,1200,900]]},
		{name:"game_atlas_2", frames: [[0,0,1200,900],[1202,674,512,662],[1202,0,552,672],[802,1338,512,648],[1316,1338,553,553],[0,902,800,600]]},
		{name:"game_atlas_3", frames: [[802,1441,362,489],[1076,723,245,714],[0,0,446,634],[0,1346,800,300],[1600,686,265,673],[1076,0,261,721],[448,0,277,731],[1600,0,264,684],[0,636,355,708],[802,719,272,720],[727,0,278,717],[1339,0,259,717],[1339,719,244,688],[0,1648,800,300]]},
		{name:"game_atlas_4", frames: [[1588,1282,85,82],[1170,1176,129,92],[691,641,36,115],[200,830,206,160],[480,1298,106,43],[1949,717,46,54],[184,1284,130,65],[1130,364,346,232],[605,1055,91,39],[1162,598,217,313],[1003,1015,159,159],[1164,1015,159,159],[1572,1106,122,174],[841,1115,123,171],[489,0,255,639],[1453,919,160,160],[841,953,160,160],[1396,1250,97,97],[1215,0,368,362],[1585,325,304,304],[1585,0,306,323],[0,681,295,147],[0,1026,129,167],[316,1315,93,22],[1768,1326,98,20],[954,559,91,31],[841,915,96,25],[605,1096,94,23],[489,641,200,207],[746,327,382,230],[247,0,240,679],[1162,913,289,100],[1478,546,101,49],[200,992,199,128],[131,1122,136,144],[1003,953,140,57],[835,1288,135,54],[0,830,198,194],[966,1176,114,109],[1949,582,41,133],[131,1026,62,72],[711,915,128,204],[1891,396,92,184],[1893,0,95,204],[1325,1015,114,200],[571,850,138,203],[718,1121,115,169],[1773,631,174,248],[408,850,161,195],[1893,1155,86,146],[1082,1176,86,141],[391,1180,87,133],[269,1122,120,160],[0,1195,86,133],[1478,364,96,180],[1893,206,99,188],[1615,919,138,185],[605,1121,111,183],[1803,1155,88,169],[1063,1319,93,22],[1868,1330,98,20],[1453,886,91,31],[1893,1303,96,25],[588,1306,94,23],[1441,1081,129,167],[718,1292,112,52],[1170,1270,105,83],[746,0,467,325],[1675,1299,91,39],[1301,1217,93,118],[480,1180,99,116],[1495,1282,91,95],[1696,1155,105,142],[88,1268,94,96],[972,1287,89,67],[1773,881,190,147],[401,1055,202,123],[1577,631,194,286],[746,559,206,354],[297,681,190,147],[1381,598,194,286],[1755,1030,202,123],[954,598,206,353],[0,0,245,677]]}
];


// symbols:



(lib.accessories_1 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.accessories_1_barbie = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.accessories_2 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.accessories_2_barbie = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.accessories_3_barbie = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.accessories_4 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.accessories_4_back_barbiepngcopy = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.accessories_4_front_barbie = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.barbie_accessories_1 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.barbie_emma_hand_on_dresses = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.basicclothesbarbie = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg1 = function() {
	this.spriteSheet = ss["game_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bganna = function() {
	this.spriteSheet = ss["game_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bgt = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap10 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap15 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap19 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap22 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap23 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap24 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap25 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap26 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap27 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap415 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap416 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap83 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap841 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap86 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap87 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap88 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.bot = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bubbleboxgameover = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.capladybugpngcopy = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.cercei = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.cercei1 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.cercei2 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.cercei3 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.cercei4 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.chenar1 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.cooltext296211849547584 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.cover = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.dress1 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.dress2pngcopy3 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.dress3pngcopy3 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.dress4pngcopy2 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.dress5pngcopy2 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.emma_barbie_body = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.googleplaybutton = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hand_ladybug_layer_ontoppngcopy = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.icaccesories_1 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.ic_accessories_1_barbie = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.ic_accessories_2_barbie = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.ic_accessories_3_barbie = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.ic_accessories_4_barbie = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.ic_chloe_accessories_1 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.ic_chloe_accessories_2 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.ic_chloe_accessories_4 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.ic_dress_1 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.ic_dress_2pngcopy = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.ic_dress_3pngcopy = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.ic_dress_4 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.ic_dress_4pngcopy = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.ic_dress_5 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.ic_dress_6 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.ic_dress_7 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.ic_necklace_1 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.ic_necklace_2 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.ic_necklace_3 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.ic_necklace_4 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.ic_necklace_5 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.ic_suit_1 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.ic_suit_2 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.ic_suit_3 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.ic_suit_4 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.ic_suit_5 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.icon = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.icon1 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.icon2 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.icon3 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.icon4 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.ladybug_web_facepngcopy = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.ladybug_web_face_blinkpngcopy = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.ladybug_web_face_happypngcopy = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.logop = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.manuta = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.necklace_1pngcopy = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.necklace_2pngcopy = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.necklace_3pngcopy = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.necklace_4pngcopy = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.necklace_5pngcopy = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.nextbuton = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.shoes1pngcopy = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.shoes2pngcopy = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.shoes3 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.shoes4 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.shoes5pngcopy = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.shoes6pngcopy = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.shoes7pngcopy = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.shoes8pngcopy = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.suit1 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.suit2 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.suit3 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.suit4 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.suit5 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.top = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Symbol122 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bgt();
	this.instance.parent = this;
	this.instance.setTransform(890.6,0,0.742,0.742,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,890.6,667.9);


(lib.Symbol121 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ladybug_web_facepngcopy();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,129,167);


(lib.Symbol119 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.manuta();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,91,39);


(lib.Symbol118 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ic_accessories_3_barbie();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.869,0.869);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,117.3,46.9);


(lib.Symbol117 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ic_accessories_4_barbie();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.869,0.869);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,172,168.5);


(lib.Symbol116 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ic_accessories_2_barbie();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.869,0.869);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,121.6,49.5);


(lib.Symbol115 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ic_accessories_1_barbie();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.869,0.869);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,118.2,125.1);


(lib.Symbol108 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ic_suit_5();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.812,0.812);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71.4,137.2);


(lib.Symbol107 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ic_suit_4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.812,0.812);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90.1,148.5);


(lib.Symbol106 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ic_suit_3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.812,0.812);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112,150.2);


(lib.Symbol105 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ic_suit_2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.812,0.812);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80.4,152.6);


(lib.Symbol104 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ic_suit_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.812,0.812);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,77.9,146.1);


(lib.Symbol103 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ic_dress_5();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.812,0.812);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,93.4,137.2);


(lib.Symbol101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ic_dress_3pngcopy();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.812,0.812);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,77.1,165.6);


(lib.Symbol100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ic_dress_4pngcopy();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.812,0.812);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112,164.8);


(lib.Symbol99 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ic_dress_2pngcopy();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.812,0.812);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74.7,149.4);


(lib.Symbol98 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ic_dress_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.812,0.812);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,103.9,165.6);


(lib.Symbol97 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.accessories_4_back_barbiepngcopy();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,362,489);


(lib.Symbol96 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ic_necklace_5();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.865,0.865);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74.4,115.1);


(lib.Symbol95 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ic_necklace_4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.865,0.865);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,103.8,138.5);


(lib.Symbol94 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ic_necklace_3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.865,0.865);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,75.3,115.1);


(lib.Symbol93 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ic_necklace_2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.865,0.865);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74.4,122);


(lib.Symbol92 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ic_necklace_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.865,0.865);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74.4,126.3);


(lib.Symbol91 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ic_chloe_accessories_4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62,72);


(lib.Symbol90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ic_chloe_accessories_2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41,133);


(lib.Symbol89 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ic_chloe_accessories_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,114,109);


(lib.Symbol88 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.icaccesories_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,199,128);


(lib.Symbol87 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ic_dress_7();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.695,0.695);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,111.9,135.5);


(lib.Symbol86 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ic_dress_4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.574,0.685);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79.2,139);


(lib.Symbol85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ic_dress_6();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.695,0.695);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120.9,172.4);


(lib.Symbol84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap22();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,123,171);


(lib.Symbol83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap19();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,122,174);


(lib.Symbol82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.barbie_emma_hand_on_dresses();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,91,39);


(lib.Symbol81copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.barbie_emma_hand_on_dresses();
	this.instance.parent = this;
	this.instance.setTransform(91,277);

	this.instance_1 = new lib.emma_barbie_body();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,115);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,115,355,708);


(lib.Symbol81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.barbie_emma_hand_on_dresses();
	this.instance.parent = this;
	this.instance.setTransform(91,277);

	this.instance_1 = new lib.emma_barbie_body();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,115);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(33));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,115,355,708);


(lib.Symbol70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.basicclothesbarbie();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,245,714);


(lib.Symbol65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.text = new cjs.Text("Today I want to be a Superhero!\nCan you help me?", "bold 16px 'Comic Sans MS'", "#FF47D0");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 247;
	this.text.parent = this;
	this.text.setTransform(149.6,26.7);

	this.instance = new lib.bubbleboxgameover();
	this.instance.parent = this;
	this.instance.setTransform(295,13,1,0.826,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleY:0.826,y:13}},{t:this.text,p:{x:149.6,y:26.7,text:"Today I want to be a Superhero!\nCan you help me?"}}]}).to({state:[{t:this.instance,p:{scaleY:0.84,y:10}},{t:this.text,p:{x:149.5,y:23.9,text:"Now it's time for me to get back to my Princess Life.\nPlease help me prepare!"}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,13,295,121.4);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap83();
	this.instance.parent = this;
	this.instance.setTransform(-69,0,1.933,1.933);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69,0,187.5,187.5);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.nextbuton();
	this.instance.parent = this;
	this.instance.setTransform(0,45,1.811,1.811);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,45,161.2,121.4);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{sapca1:1,sapca2:2,sapca3:3,sapca4:4,sapca5:5});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// Layer 1
	this.instance = new lib.necklace_1pngcopy();
	this.instance.parent = this;
	this.instance.setTransform(739,-422);

	this.instance_1 = new lib.necklace_2pngcopy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(751,3);

	this.instance_2 = new lib.necklace_3pngcopy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(759,0);

	this.instance_3 = new lib.necklace_4pngcopy();
	this.instance_3.parent = this;
	this.instance_3.setTransform(755,2,0.845,0.845);

	this.instance_4 = new lib.necklace_5pngcopy();
	this.instance_4.parent = this;
	this.instance_4.setTransform(755,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:739,y:-422}}]}).to({state:[{t:this.instance,p:{x:756,y:0}}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(739,-422,93,118);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{hair1:0,hair2:1,hair3:2,hair4:3,hair5:4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// Layer 1
	this.instance = new lib.Bitmap23();
	this.instance.parent = this;
	this.instance.setTransform(0,55);

	this.instance_1 = new lib.Bitmap24();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-13,67);

	this.instance_2 = new lib.Bitmap25();
	this.instance_2.parent = this;
	this.instance_2.setTransform(126,66);

	this.instance_3 = new lib.Bitmap26();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,66);

	this.instance_4 = new lib.Bitmap27();
	this.instance_4.parent = this;
	this.instance_4.setTransform(78,68);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,55,512,662);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{tricou1:1,tricou2:2,tricou3:3,tricou4:4,tricou5:5});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		exportRoot.annaSound();
	}
	this.frame_4 = function() {
		exportRoot.annaSound();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(2).call(this.frame_4).wait(2));

	// Layer 1
	this.instance = new lib.cercei();
	this.instance.parent = this;
	this.instance.setTransform(125,-442);

	this.instance_1 = new lib.cercei1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1,7);

	this.instance_2 = new lib.cercei2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(2,13);

	this.instance_3 = new lib.cercei3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,12);

	this.instance_4 = new lib.cercei4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:125,y:-442}}]}).to({state:[{t:this.instance,p:{x:0,y:12}}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(125,-442,93,22);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{blugi1:0,blugi2:1,blugi3:2,blugi4:3,blugi5:4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// Layer 1
	this.instance = new lib.barbie_accessories_1();
	this.instance.parent = this;
	this.instance.setTransform(58,332);

	this.instance_1 = new lib.accessories_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(153,356);

	this.instance_2 = new lib.accessories_4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(128.4,432,1.005,1,0,-73.2,-79);

	this.instance_3 = new lib.accessories_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(184,339);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(58,332,346,232);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{casti1:1,casti2:2,casti3:3,casti4:4,casti5:5});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// Layer 1
	this.instance = new lib.accessories_1_barbie();
	this.instance.parent = this;
	this.instance.setTransform(384,-345);

	this.instance_1 = new lib.accessories_2_barbie();
	this.instance_1.parent = this;
	this.instance_1.setTransform(27,272);

	this.instance_2 = new lib.accessories_3_barbie();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-94,-52,0.823,0.823);

	this.instance_3 = new lib.accessories_4_front_barbie();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-118,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:384,y:-345}}]}).to({state:[{t:this.instance,p:{x:18,y:279}}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(384,-345,129,92);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{parelsa1:0,parelsa2:1,parelsa3:2,parelsa4:3,parelsa5:4,parelsa6:5,parelsa7:6,parelsa8:7});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8));

	// Layer 1
	this.instance = new lib.shoes1pngcopy();
	this.instance.parent = this;
	this.instance.setTransform(0,478);

	this.instance_1 = new lib.shoes2pngcopy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,478);

	this.instance_2 = new lib.shoes3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,478);

	this.instance_3 = new lib.shoes4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,478);

	this.instance_4 = new lib.shoes5pngcopy();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,478);

	this.instance_5 = new lib.shoes6pngcopy();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,478);

	this.instance_6 = new lib.shoes7pngcopy();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,478);

	this.instance_7 = new lib.shoes8pngcopy();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,478);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,478,190,147);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{fusta1:0,fusta2:1,fusta3:2,fusta4:3,fusta5:4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// Layer 1
	this.instance = new lib.suit1();
	this.instance.parent = this;
	this.instance.setTransform(472,97);

	this.instance_1 = new lib.suit2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(473,66);

	this.instance_2 = new lib.suit3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(465,69);

	this.instance_3 = new lib.suit4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(474,68);

	this.instance_4 = new lib.suit5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(473,97);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(472,97,245,677);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{bluza1:0,bluza2:1,bluza3:2,bluza4:3,bluza5:4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// Layer 1
	this.instance = new lib.dress1();
	this.instance.parent = this;
	this.instance.setTransform(0,74);

	this.instance_1 = new lib.dress2pngcopy3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,79);

	this.instance_2 = new lib.dress3pngcopy3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-3,37);

	this.instance_3 = new lib.dress4pngcopy2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-3,27);

	this.instance_4 = new lib.dress5pngcopy2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,74);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,74,265,673);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logop();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.553,0.553);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,258.2,179.7);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.instance = new lib.Bitmap87();
	this.instance.parent = this;
	this.instance.setTransform(-337,-136);

	this.instance_1 = new lib.Bitmap88();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-337,-143,0.996,0.996);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-337,-136,304,304);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap10();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,159,159);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap841();
	this.instance.parent = this;
	this.instance.setTransform(220.1,-150.9,1.498,1.498,-66.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(220.1,-657.2,716.3,721);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap86();
	this.instance.parent = this;
	this.instance.setTransform(-507.8,-682.3,1,1,22.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-721.3,-682.3,723.6,723.6);


(lib.Tween38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqMO1QkoABAAkpIAA0ZQAAkpEoAAIUZAAQEpAAAAEpIAAUZQAAEpkpgBg");
	mask.setTransform(-5,-4);

	// Layer 1
	this.instance = new lib.Bitmap415();
	this.instance.parent = this;
	this.instance.setTransform(-100,-98,1.182,1.182);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-98,189.1,189);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bot();
	this.instance.parent = this;
	this.instance.setTransform(-401,-149);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-401,-149,800,300);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.top();
	this.instance.parent = this;
	this.instance.setTransform(-400,-152);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-400,-152,800,300);


(lib.Symbol32copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.icon4();
	this.instance.parent = this;
	this.instance.setTransform(38,63,0.831,1);

	this.instance_1 = new lib.chenar1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,24.1,0.664,0.664,-10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155.4,159.2);


(lib.Symbol31copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.icon3();
	this.instance.parent = this;
	this.instance.setTransform(39,63,0.702,1);

	this.instance_1 = new lib.chenar1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.1,0,0.663,0.663,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,150.5,154.4);


(lib.Symbol31copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.icon2();
	this.instance.parent = this;
	this.instance.setTransform(39,59,0.776,1);

	this.instance_1 = new lib.chenar1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.1,0,0.663,0.663,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,150.5,154.4);


(lib.Symbol30copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.icon1();
	this.instance.parent = this;
	this.instance.setTransform(37,63,0.768,1);

	this.instance_1 = new lib.chenar1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,16.1,0.663,0.663,-7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,148.4,152.4);


(lib.Symbol29copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.icon();
	this.instance.parent = this;
	this.instance.setTransform(42,67,0.757,1);

	this.instance_1 = new lib.chenar1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,130.9,0.663,0.663,-80.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,157.4,153.6);


(lib.Symbol15copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap416();
	this.instance.parent = this;
	this.instance.setTransform(4,1,1.208,1.208);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4,1,193.3,193.3);


(lib.Symbol12copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.googleplaybutton();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.86,0.86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,248.6,86);


(lib.Symbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap15();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,159,159);


(lib.Symbol120 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(31));

	// Layer 1
	this.instance = new lib.Symbol121();
	this.instance.parent = this;
	this.instance.setTransform(64.5,83.5,1,1,0,0,0,64.5,83.5);

	this.instance_1 = new lib.ladybug_web_face_happypngcopy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,61);

	this.instance_2 = new lib.ladybug_web_face_blinkpngcopy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,64);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).to({state:[{t:this.instance},{t:this.instance_1},{t:this.instance_2}]},23).to({state:[{t:this.instance},{t:this.instance_1}]},3).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,129,167);


(lib.Symbol66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.capladybugpngcopy();
	this.instance.parent = this;
	this.instance.setTransform(96,81,0.752,0.752);

	this.parelsa = new lib.Symbol13();
	this.parelsa.parent = this;
	this.parelsa.setTransform(855.9,31.3,0.786,0.786,0,0,0,2.3,-2.1);

	this.costum = new lib.Symbol70();
	this.costum.parent = this;
	this.costum.setTransform(144.9,540.5,0.794,0.794,0,0,0,174.3,447.8);

	this.instance_1 = new lib.Symbol81();
	this.instance_1.parent = this;
	this.instance_1.setTransform(138.8,406.3,0.817,0.817,0,0,0,177.5,411.7);

	this.spatemantie = new lib.Symbol97();
	this.spatemantie.parent = this;
	this.spatemantie.setTransform(125.2,307.5,0.817,0.817,0,0,0,180.8,244.6);
	this.spatemantie.visible = false;

	this.instance_2 = new lib.bganna();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-486,43,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.spatemantie},{t:this.instance_1},{t:this.costum},{t:this.parelsa},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-486,43,1489.5,708.8);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bluza
	this.tricoujack = new lib.Symbol33();
	this.tricoujack.parent = this;
	this.tricoujack.setTransform(330.6,655.5,0.921,0.921,0,0,0,117.1,571.4);

	this.timeline.addTween(cjs.Tween.get(this.tricoujack).wait(1));

	// Layer 1
	this.instance = new lib.capladybugpngcopy();
	this.instance.parent = this;
	this.instance.setTransform(189,21,1.062,1.062);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 4
	this.manuta = new lib.Symbol119();
	this.manuta.parent = this;
	this.manuta.setTransform(212.5,326.5,1,1,0,0,0,45.5,19.5);

	this.timeline.addTween(cjs.Tween.get(this.manuta).wait(1));

	// Layer 2
	this.mana = new lib.Symbol82();
	this.mana.parent = this;
	this.mana.setTransform(212.5,326.5,1,1,0,0,0,45.5,19.5);

	this.timeline.addTween(cjs.Tween.get(this.mana).wait(1));

	// Layer 5
	this.sapcajack = new lib.Symbol35();
	this.sapcajack.parent = this;
	this.sapcajack.setTransform(232.8,156.7,1.049,1.049,0,0,0,776.8,33.6);

	this.timeline.addTween(cjs.Tween.get(this.sapcajack).wait(1));

	// pantaloni
	this.blugijack = new lib.Symbol32();
	this.blugijack.parent = this;
	this.blugijack.setTransform(206.9,569.3,1.009,1.009,0,0,0,179.2,666.6);

	this.timeline.addTween(cjs.Tween.get(this.blugijack).wait(1));

	// par
	this.parjack = new lib.Symbol34();
	this.parjack.parent = this;
	this.parjack.setTransform(169.8,629.2,1.04,1.04,0,0,0,201.5,477.4);

	this.timeline.addTween(cjs.Tween.get(this.parjack).wait(1));

	// corp
	this.instance_1 = new lib.Symbol81copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(254.6,441.3,1,1,0,0,0,177.5,411.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.7,-321.1,532.4,1199.5);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer 2
	this.inainte = new lib.Symbol();
	this.inainte.parent = this;
	this.inainte.setTransform(140.7,181.9,0.412,0.412,30.7,0,0,77.5,77.7);

	this.inapoi = new lib.Symbol();
	this.inapoi.parent = this;
	this.inapoi.setTransform(71.9,182.5,0.412,0.412,0,-33.4,146.6,77.3,77.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.inapoi},{t:this.inainte}]}).wait(4));

	// Layer 3
	this.hair5 = new lib.Symbol87();
	this.hair5.parent = this;
	this.hair5.setTransform(188,70.8,1,1,0,0,0,56,67.8);

	this.hair3 = new lib.Symbol86();
	this.hair3.parent = this;
	this.hair3.setTransform(105.6,32.5,1,1,0,0,0,39.6,69.5);

	this.hair4 = new lib.Symbol85();
	this.hair4.parent = this;
	this.hair4.setTransform(24.5,65.2,1,1,0,0,0,60.5,86.2);

	this.hair2 = new lib.Symbol84();
	this.hair2.parent = this;
	this.hair2.setTransform(175.5,-107.5,1,1,0,0,0,61.5,85.5);

	this.hair1 = new lib.Symbol83();
	this.hair1.parent = this;
	this.hair1.setTransform(26.8,-107.8,1,1,0,0,0,60.8,87.2);

	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(-48,-213,1.413,1.413);

	this.bratara = new lib.Symbol91();
	this.bratara.parent = this;
	this.bratara.setTransform(188,84,1,1,0,0,0,31,36);

	this.blugi4 = new lib.Symbol90();
	this.blugi4.parent = this;
	this.blugi4.setTransform(206.5,-118.5,1,1,0,0,0,20.5,66.5);

	this.blugi2 = new lib.Symbol89();
	this.blugi2.parent = this;
	this.blugi2.setTransform(52,23.5,1,1,0,0,0,57,54.5);

	this.manusi = new lib.Symbol88();
	this.manusi.parent = this;
	this.manusi.setTransform(76.5,-133,1,1,0,0,0,99.5,64);

	this.sapca5 = new lib.Symbol96();
	this.sapca5.parent = this;
	this.sapca5.setTransform(194.2,68.5,1,1,0,0,0,37.2,57.5);

	this.sapca4 = new lib.Symbol95();
	this.sapca4.parent = this;
	this.sapca4.setTransform(116.9,13.2,1,1,0,0,0,51.9,69.2);

	this.sapca3 = new lib.Symbol94();
	this.sapca3.parent = this;
	this.sapca3.setTransform(20.6,62.5,1,1,0,0,0,37.6,57.5);

	this.sapca2 = new lib.Symbol93();
	this.sapca2.parent = this;
	this.sapca2.setTransform(194.2,-117,1,1,0,0,0,37.2,61);

	this.sapca1 = new lib.Symbol92();
	this.sapca1.parent = this;
	this.sapca1.setTransform(21.2,-118.9,1,1,0,0,0,37.2,63.1);

	this.tricou4 = new lib.Symbol31copy3();
	this.tricou4.parent = this;
	this.tricou4.setTransform(47.3,-42.6,0.638,0.638,-18.7,0,0,0.1,0.1);

	this.tricou5 = new lib.Symbol32copy();
	this.tricou5.parent = this;
	this.tricou5.setTransform(190.3,87.3,0.638,0.638,0,0,0,77.8,79.5);

	this.tricou3 = new lib.Symbol31copy2();
	this.tricou3.parent = this;
	this.tricou3.setTransform(20.2,88.8,0.638,0.638,0,0,0,75.3,77.2);

	this.tricou2 = new lib.Symbol30copy();
	this.tricou2.parent = this;
	this.tricou2.setTransform(192.5,-140.5,0.638,0.638,0,0,0,74.2,76.2);

	this.tricou1 = new lib.Symbol29copy();
	this.tricou1.parent = this;
	this.tricou1.setTransform(46,-140.2,0.638,0.638,0,0,0,78.8,76.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:1.413,scaleY:1.413,x:-48,y:-213}},{t:this.hair1},{t:this.hair2},{t:this.hair4},{t:this.hair3},{t:this.hair5}]}).to({state:[{t:this.instance,p:{scaleX:1.405,scaleY:1.405,x:-47,y:-212}},{t:this.manusi},{t:this.blugi2},{t:this.blugi4},{t:this.bratara}]},1).to({state:[{t:this.instance,p:{scaleX:1.413,scaleY:1.413,x:-48,y:-213}},{t:this.sapca1},{t:this.sapca2},{t:this.sapca3},{t:this.sapca4},{t:this.sapca5}]},1).to({state:[{t:this.instance,p:{scaleX:1.407,scaleY:1.407,x:-47,y:-212}},{t:this.tricou1},{t:this.tricou2},{t:this.tricou3},{t:this.tricou5},{t:this.tricou4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48,-213,306.7,442.4);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cap
	this.cap = new lib.Symbol120();
	this.cap.parent = this;
	this.cap.setTransform(360.5,174.5,1,1,0,0,0,64.5,83.5);

	this.timeline.addTween(cjs.Tween.get(this.cap).wait(1));

	// Layer 2
	this.parelsa = new lib.Symbol13();
	this.parelsa.parent = this;
	this.parelsa.setTransform(1329.2,-485.1,0.708,0.708,0,0,180,2,-2.1);

	this.timeline.addTween(cjs.Tween.get(this.parelsa).wait(1));

	// Layer 5
	this.castielsa = new lib.Symbol14();
	this.castielsa.parent = this;
	this.castielsa.setTransform(1444.5,720.9,1,1,0,0,0,1034.3,501.8);

	this.timeline.addTween(cjs.Tween.get(this.castielsa).wait(1));

	// bluza
	this.instance = new lib.hand_ladybug_layer_ontoppngcopy();
	this.instance.parent = this;
	this.instance.setTransform(254,363,1.12,1.12);

	this.bluzaelsa = new lib.Symbol11();
	this.bluzaelsa.parent = this;
	this.bluzaelsa.setTransform(197.3,913.5,0.964,0.964,0,0,0,1,745.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bluzaelsa},{t:this.instance}]}).wait(1));

	// Layer 3
	this.fustaelsa = new lib.Symbol12();
	this.fustaelsa.parent = this;
	this.fustaelsa.setTransform(207.6,915.6,0.962,0.962,0,0,0,483.7,775.4);

	this.timeline.addTween(cjs.Tween.get(this.fustaelsa).wait(1));

	// costum
	this.costum = new lib.Symbol70();
	this.costum.parent = this;
	this.costum.setTransform(363.4,668.2,0.971,0.971,0,0,0,174.3,447.7);

	this.timeline.addTween(cjs.Tween.get(this.costum).wait(1));

	// Layer 6
	this.instance_1 = new lib.Symbol81();
	this.instance_1.parent = this;
	this.instance_1.setTransform(355.9,503.9,1,1,0,0,0,177.5,411.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// par
	this.spatemantie = new lib.Symbol97();
	this.spatemantie.parent = this;
	this.spatemantie.setTransform(339.5,383,1,1,0,0,0,181,244.5);
	this.spatemantie.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.spatemantie).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(158.5,-145.2,1172.1,1072.1);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 2
	this.nexthaine = new lib.Symbol();
	this.nexthaine.parent = this;
	this.nexthaine.setTransform(185.5,308.8,0.412,0.412,30.7,0,0,77.5,77.7);

	this.prevhaine = new lib.Symbol();
	this.prevhaine.parent = this;
	this.prevhaine.setTransform(115.8,308.4,0.412,0.412,0,-33.4,146.6,77.3,77.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prevhaine},{t:this.nexthaine}]}).wait(3));

	// Layer 1
	this.bluza5 = new lib.Symbol103();
	this.bluza5.parent = this;
	this.bluza5.setTransform(234.6,205.5,1,1,0,0,0,46.6,68.5);

	this.bluza3 = new lib.Symbol101();
	this.bluza3.parent = this;
	this.bluza3.setTransform(54.6,191.8,1,1,0,0,0,38.6,82.8);

	this.bluza4 = new lib.Symbol100();
	this.bluza4.parent = this;
	this.bluza4.setTransform(149,135.4,1,1,0,0,0,56,82.4);

	this.bluza2 = new lib.Symbol99();
	this.bluza2.parent = this;
	this.bluza2.setTransform(242.3,16.7,1,1,0,0,0,37.3,74.7);

	this.bluza1 = new lib.Symbol98();
	this.bluza1.parent = this;
	this.bluza1.setTransform(63,14.8,1,1,0,0,0,52,82.8);

	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(0,-84,1.409,1.409);

	this.fusta5 = new lib.Symbol108();
	this.fusta5.parent = this;
	this.fusta5.setTransform(241.7,209.5,1,1,0,0,0,35.7,68.5);

	this.fusta4 = new lib.Symbol107();
	this.fusta4.parent = this;
	this.fusta4.setTransform(149.1,129.3,1,1,0,0,0,45.1,74.3);

	this.fusta3 = new lib.Symbol106();
	this.fusta3.parent = this;
	this.fusta3.setTransform(62,190,1,1,0,0,0,56,75);

	this.fusta2 = new lib.Symbol105();
	this.fusta2.parent = this;
	this.fusta2.setTransform(237.1,11.3,1,1,0,0,0,40.1,76.3);

	this.fusta1 = new lib.Symbol104();
	this.fusta1.parent = this;
	this.fusta1.setTransform(65,4,1,1,0,0,0,39,73);

	this.casti3 = new lib.Symbol118();
	this.casti3.parent = this;
	this.casti3.setTransform(76.6,152.4,1,1,0,0,0,58.6,23.4);

	this.mantie = new lib.Symbol117();
	this.mantie.parent = this;
	this.mantie.setTransform(202,192.3,1,1,0,0,0,86,84.3);

	this.casti2 = new lib.Symbol116();
	this.casti2.parent = this;
	this.casti2.setTransform(216.8,-34.2,1,1,0,0,0,60.8,24.8);

	this.casti1 = new lib.Symbol115();
	this.casti1.parent = this;
	this.casti1.setTransform(88.1,31.6,1,1,0,0,0,59.1,62.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:1.409,scaleY:1.409,x:0}},{t:this.bluza1},{t:this.bluza2},{t:this.bluza4},{t:this.bluza3},{t:this.bluza5}]}).to({state:[{t:this.instance,p:{scaleX:1.409,scaleY:1.409,x:0}},{t:this.fusta1},{t:this.fusta2},{t:this.fusta3},{t:this.fusta4},{t:this.fusta5}]},1).to({state:[{t:this.instance,p:{scaleX:1.41,scaleY:1.41,x:-1}},{t:this.casti1},{t:this.casti2},{t:this.mantie},{t:this.casti3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-84,305.7,441);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 1
	this.instance = new lib.bg1();
	this.instance.parent = this;
	this.instance.setTransform(-5,-5,0.677,0.677);

	this.instance_1 = new lib.bganna();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-16,-10,0.684,0.684);

	this.instance_2 = new lib.Symbol122();
	this.instance_2.parent = this;
	this.instance_2.setTransform(360.3,307.9,1,1,0,0,0,445.3,333.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,811.9,608.9);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var frequency = 10;
		stage.enableMouseOver(frequency);
		this.moregames.cursor = "pointer";
		this.playbutton.cursor = "pointer";
		this.googleplay.cursor = "pointer";
		this.logo.cursor = "pointer";
		var buttonsArray = [this.logo,this.googleplay,this.playbutton,this.moregames];
		var buttonsArrayString = ["logo","googleplay","playbutton","moregames"];
		var buttonClicked = "";
		for(var i=0; i<buttonsArray.length;i++){
			buttonsArray[i].name = buttonsArrayString[i];
			buttonsArray[i].addEventListener("mouseover", hoverButtons.bind(this));
			buttonsArray[i].addEventListener("mouseout", houtButtons.bind(this));
		}
		
		function hoverButtons(event) {
			event.currentTarget.alpha = .8;
			event.currentTarget.shadow = new createjs.Shadow("#ffffff", 4, 4, 10);
		}
		
		function houtButtons(event) {
			event.currentTarget.alpha = 1;
			event.currentTarget.shadow = new createjs.Shadow("#ffffff", 0, 0, 0);
		}
		
		this.moregames.addEventListener("click", moregamesfunctionhere.bind(this));
		function moregamesfunctionhere(event) {
			exportRoot.moregamesfunction();
		}
		this.logo.addEventListener("click", logofunctionhere.bind(this));
		function logofunctionhere(event) {
			exportRoot.logofunction();
		}
		
		this.playbutton.addEventListener("click", playfunctionhere.bind(this));
		function playfunctionhere(event) {
			exportRoot.animInterLevels = "cover";	
			exportRoot.goAnim();	
		
		}
		this.googleplay.addEventListener("click", googleplayfunctionhere.bind(this));
		function googleplayfunctionhere(event) {
			exportRoot.googleplayfunction();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.instance = new lib.cooltext296211849547584();
	this.instance.parent = this;
	this.instance.setTransform(233,370);

	this.logo = new lib.Symbol6();
	this.logo.parent = this;
	this.logo.setTransform(650.8,42.3,0.604,0.604,0,0,0,1066.7,59.6);

	this.googleplay = new lib.Symbol12copy2();
	this.googleplay.parent = this;
	this.googleplay.setTransform(-240.1,502.5,0.747,0.747,0,0,0,124.5,43.1);
	this.googleplay.visible = false;

	this.fullscreenBtn = new lib.Symbol4();
	this.fullscreenBtn.parent = this;
	this.fullscreenBtn.setTransform(1096.4,-59,0.259,0.259,0,0,0,77.5,77.7);

	this.moregames = new lib.Symbol3();
	this.moregames.parent = this;
	this.moregames.setTransform(604.9,530.9,0.212,0.212,64.7,0,0,575.6,-263);

	this.playbutton = new lib.Symbol2();
	this.playbutton.parent = this;
	this.playbutton.setTransform(732.3,538.5,0.209,0.209,-22.5,0,0,-379.2,-289.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.playbutton},{t:this.moregames},{t:this.fullscreenBtn},{t:this.googleplay},{t:this.logo},{t:this.instance}]}).wait(1));

	// Layer 1
	this.instance_1 = new lib.cover();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-333.2,-79.1,1450.7,708.8);


(lib.Tween17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArtO1QjHAAAAi6IAA31QAAi6DHAAIXbAAQDIAAgBC6IAAX1QABC6jIAAg");
	mask.setTransform(0,-0.5);

	// Layer 1
	this.instance = new lib.Symbol15copy();
	this.instance.parent = this;
	this.instance.setTransform(-6,-3,1,1,0,0,0,95,95);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95,-95.4,190,190);


(lib.Symbol102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween38();
	this.instance.parent = this;
	this.instance.setTransform(100,100);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.03,scaleY:1.03},14).to({scaleX:1,scaleY:1},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,1,190,190.1);


(lib.Symbol49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		exportRoot.goNextScene();
	}
	this.frame_19 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(9).call(this.frame_19).wait(1));

	// Layer 1
	this.instance = new lib.Tween2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(400,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},1).to({y:452},8).to({startPosition:0},1).to({y:150},9).wait(1));

	// Layer 2
	this.instance_1 = new lib.Tween3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(401,1048);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:0},1).to({y:749},8).to({startPosition:0},1).to({y:1048},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2,800,1201);


(lib.Symbol32copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance = new lib.Symbol102();
	this.instance.parent = this;
	this.instance.setTransform(-88.9,96.8,0.978,0.978,0,0,0,100,100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186.6,0,185.8,185.8);


(lib.Symbol14copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween17("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(95,95);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.02,scaleY:1.02},11).to({scaleX:1,scaleY:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.4,190,190);


(lib.Symbol10copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.capladybugpngcopy();
	this.instance.parent = this;
	this.instance.setTransform(317,61,0.942,0.942);

	this.costum = new lib.Symbol70();
	this.costum.parent = this;
	this.costum.setTransform(378.7,637.1,0.995,0.995,0,0,0,174.3,447.8);

	this.instance_1 = new lib.Symbol81();
	this.instance_1.parent = this;
	this.instance_1.setTransform(371,469,1.024,1.024,0,0,0,177.5,411.7);

	this.spatemantie = new lib.Symbol97();
	this.spatemantie.parent = this;
	this.spatemantie.setTransform(354.2,345.1,1.024,1.024,0,0,0,180.9,244.6);
	this.spatemantie.visible = false;

	this.parelsa = new lib.Symbol13();
	this.parelsa.parent = this;
	this.parelsa.setTransform(947.4,-3.5,0.962,0.962,0,0,0,2.1,-2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.parelsa},{t:this.spatemantie},{t:this.instance_1},{t:this.costum},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(168.9,61,959.3,840.9);


(lib.Symbol67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.elsa = new lib.Symbol10copy();
	this.elsa.parent = this;
	this.elsa.setTransform(137.8,396.7,0.828,0.828,0,0,0,351.7,490.9);

	this.instance = new lib.bg1();
	this.instance.parent = this;
	this.instance.setTransform(323.3,0,0.679,0.679,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.elsa}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-492,0,1272.7,737);


(lib.Symbol64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var frequency = 10;
		stage.enableMouseOver(frequency);
		this.nextlevel.cursor = "pointer";
		this.logo.cursor = "pointer";
		var buttonsArray = [this.logo, this.nextlevel];
		var buttonsArrayString = ["logo", "nextlevel"];
		var buttonClicked = "";
		for (var i = 0; i < buttonsArray.length; i++) {
			buttonsArray[i].name = buttonsArrayString[i];
			buttonsArray[i].addEventListener("mouseover", hoverButtons.bind(this));
			buttonsArray[i].addEventListener("mouseout", houtButtons.bind(this));
		}
		
		function hoverButtons(event) {
			event.currentTarget.alpha = .8;
			event.currentTarget.shadow = new createjs.Shadow("#ffffff", 4, 4, 10);
		}
		
		function houtButtons(event) {
			event.currentTarget.alpha = 1;
			event.currentTarget.shadow = new createjs.Shadow("#ffffff", 0, 0, 0);
		}
		
		this.logo.addEventListener("click", logofunctionhere.bind(this));
		function logofunctionhere(event) {
			exportRoot.logofunction();
		}
		
		this.nextlevel.addEventListener("click", nextlevelfunctionhere.bind(this));
		function nextlevelfunctionhere(event) {
			if (exportRoot.levelpick.balonas.currentFrame == 0) {
				exportRoot.goAnim();
				exportRoot.animInterLevels = "level1";
				
			} else if (exportRoot.levelpick.balonas.currentFrame == 1) {
				exportRoot.goAnim();
				exportRoot.animInterLevels = "level2";
				
			}
		
		}
		
		this.animatiebalon = function () {
			
			exportRoot.levelpick.balonas.alpha = 0;
			createjs.Tween.get(exportRoot.levelpick.balonas,{override: true}).wait(1000).to({alpha: 1,	visible: true}, 2000).call(handleComplete);
		}
		function handleComplete() {
		exportRoot.levelpick.nextlevel.visible=true;
			createjs.Tween.removeAllTweens();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 4
	this.logo = new lib.Symbol6();
	this.logo.parent = this;
	this.logo.setTransform(58,55.9,0.648,0.648,0,0,0,77.5,77.6);

	this.nextlevel = new lib.Symbol36();
	this.nextlevel.parent = this;
	this.nextlevel.setTransform(745.6,541.6,0.561,0.561,0,0,0,77.5,77.6);
	this.nextlevel.visible = false;

	this.balonas = new lib.Symbol65();
	this.balonas.parent = this;
	this.balonas.setTransform(413.4,82.6,1,1,0,0,0,147.5,73.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.balonas},{t:this.nextlevel},{t:this.logo}]}).wait(1));

	// jack
	this.jack = new lib.Symbol66();
	this.jack.parent = this;
	this.jack.setTransform(668.3,391.4,1.048,1.048,0,0,0,166.6,424.4);

	this.timeline.addTween(cjs.Tween.get(this.jack).wait(1));

	// elsa
	this.elsa = new lib.Symbol67();
	this.elsa.parent = this;
	this.elsa.setTransform(649,422.2,1,1,0,0,0,162,429.2);

	this.timeline.addTween(cjs.Tween.get(this.elsa).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.9,-8.5,1561.7,743.1);


(lib.Symbol31copy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance = new lib.Symbol14copy2();
	this.instance.parent = this;
	this.instance.setTransform(93,93.4,0.978,0.978,0,0,0,95,95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.9,-1.5,189,189);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.animStars1 = function () {
			exportRoot.sparklesSound();
		}
		
		
		var frequency = 10;
		stage.enableMouseOver(frequency);
		var currentTargetNumChildren;
		var buttonsArray = [this.logo, this.poza1, this.poza2, this.replay_but, this.moregames, this.moregames1, this.nextlevel, this.hainejack.inapoi, this.hainejack.inainte, this.haineelsa.prevhaine, this.haineelsa.nexthaine, this.hainejack.tricou1, this.hainejack.tricou2, this.hainejack.tricou3, this.hainejack.tricou4, this.hainejack.tricou5,
			 this.hainejack.blugi2, this.hainejack.blugi4,  this.hainejack.hair1, this.hainejack.hair2, this.hainejack.hair3, this.hainejack.hair4, this.hainejack.hair5,
			this.hainejack.sapca1, this.hainejack.sapca2, this.hainejack.sapca3, this.hainejack.sapca4, this.hainejack.sapca5, this.haineelsa.bluza1, this.haineelsa.bluza2, this.haineelsa.bluza3, this.haineelsa.bluza4, this.haineelsa.bluza5,
			this.haineelsa.fusta1, this.haineelsa.fusta2, this.haineelsa.fusta3, this.haineelsa.fusta4, this.haineelsa.fusta5,
			this.haineelsa.casti1, this.haineelsa.casti2, this.haineelsa.casti3,
		];
		var buttonsArrayString = ["logo", "poza1", "poza2", "replay_but", "moregames", "moregames1", "nextlevel", "inapoi", "inainte", "prevhaine", "nexthaine", "tricou1", "tricou2", "tricou3", "tricou4", "tricou5", "blugi2", "blugi4", 
			"hair1", "hair2", "hair3", "hair4", "hair5", "sapca1", "sapca2", "sapca3", "sapca4", "sapca5", "bluza1", "bluza2", "bluza3", "bluza4", "bluza5", "fusta1", "fusta2", "fusta3", "fusta4", "fusta5", "casti1", "casti2", "casti3",
		];
		var buttonClicked = "";
		for (var i = 0; i < buttonsArray.length; i++) {
			buttonsArray[i].cursor = "pointer";
			buttonsArray[i].name = buttonsArrayString[i];
			buttonsArray[i].addEventListener("mouseover", hoverButtons.bind(this));
			buttonsArray[i].addEventListener("mouseout", houtButtons.bind(this));
			buttonsArray[i].addEventListener("click", clickButtons.bind(this));
		}
		
		
		function clickButtons(event) {
			if (event.currentTarget.name.indexOf("nextlevel") > -1) {
				if (exportRoot.level1.elsa.visible == true) {
					exportRoot.animInterLevels = "interlevel";
					exportRoot.goAnim();
					exportRoot.showAds();
				} else if (exportRoot.level1.elsa.visible == false) {
					exportRoot.animInterLevels = "final";
					exportRoot.goAnim();
						if (stringHostDaria == "www.azgametv.com" ||stringHostDaria == "www.google.com" ){ }else{exportRoot.showAds();}
				}
		
			}
		
			if (event.currentTarget.name.indexOf("replay_but") > -1) {
				//exportRoot.animInterLevels = "replay";
				//exportRoot.goAnim();
				//	gdApi.showBanner();
				//exportRoot.fadeInElement(exportRoot.interlevel);
				location.reload();
			}
			if (event.currentTarget.name.indexOf("poza1") > -1) {
				exportRoot.poza1link();
			}
			if (event.currentTarget.name.indexOf("poza2") > -1) {
		
				exportRoot.poza2link();
			}
			if (event.currentTarget.name.indexOf("moregames") > -1) {
				exportRoot.moregamesfunction();
			}
			if (event.currentTarget.name.indexOf("logo") > -1) {
				exportRoot.logofunction();
			}
			if (event.currentTarget.name.indexOf("inainte") > -1) {
				this.hainejack.gotoAndStop(this.hainejack.currentFrame + 1);
		
			}
			if (event.currentTarget.name.indexOf("inapoi") > -1) {
				this.hainejack.gotoAndStop(this.hainejack.currentFrame - 1);
		
			}
			if (event.currentTarget.name.indexOf("nexthaine") > -1) {
				this.haineelsa.gotoAndStop(this.haineelsa.currentFrame + 1);
		
			}
			if (event.currentTarget.name.indexOf("prevhaine") > -1) {
				this.haineelsa.gotoAndStop(this.haineelsa.currentFrame - 1);
		
			}
		
		
			if (event.currentTarget.name.indexOf("tricou") > -1) {
				this.change1(event.currentTarget.name, "tricoujack");
				this.animStars1();
				
			}
			if (event.currentTarget.name.indexOf("blugi") > -1) {
				this.change2(event.currentTarget.name, "blugijack");
				this.animStars1();
				
			}
			if (event.currentTarget.name.indexOf("hair") > -1) {
				this.change3(event.currentTarget.name, "parjack");
				this.animStars1();
				
			}
			if (event.currentTarget.name.indexOf("sapca") > -1) {
				this.change4(event.currentTarget.name, "sapcajack");
				this.animStars1();
		
		
		
			}
			if (event.currentTarget.name.indexOf("bluza") > -1) {
				this.change5(event.currentTarget.name, "bluzaelsa");
				this.animStars1();
				exportRoot.level1.elsa.bluzaelsa.visible = true;
				exportRoot.level1.elsa.fustaelsa.visible = false;
				exportRoot.level1.elsa.costum.visible = false;
				exportRoot.level1.elsa.cap.gotoAndPlay(1);
		
			}
			if (event.currentTarget.name.indexOf("casti") > -1) {
				this.change6(event.currentTarget.name, "castielsa");
				this.animStars1();
		exportRoot.level1.elsa.cap.gotoAndPlay(1);
		
		
			}
			if (event.currentTarget.name.indexOf("fusta") > -1) {
				this.change7(event.currentTarget.name, "fustaelsa");
				this.animStars1();
		exportRoot.level1.elsa.cap.gotoAndPlay(1);
				exportRoot.level1.elsa.bluzaelsa.visible = false;
				exportRoot.level1.elsa.fustaelsa.visible = true;
				exportRoot.level1.elsa.costum.visible = false;
		
			}
		
		}
		
		
		//this.elsaAnnaDoingStuff = function(){
		//}
		function hoverButtons(event) {
			//if(event.currentTarget.name.indexOf("dress") > -1){
			//	this.addChildAt(event.currentTarget,this.getNumChildren()-1);
			//		//this.addChildAt(this.dulapfata,this.getNumChildren()-1);
			//}
			event.currentTarget.alpha = 0.8;
			event.currentTarget.shadow = new createjs.Shadow("#ffffff", 4, 4, 10);
		}
		
		function houtButtons(event) {
			event.currentTarget.alpha = 1;
			event.currentTarget.shadow = new createjs.Shadow("#ffffff", 0, 0, 0);
		}
		
		
		function rand(min, max, interval) {
			if (typeof (interval) === 'undefined') interval = 1;
			var r = Math.floor(Math.random() * (max - min + interval) / interval);
			return r * interval + min;
		}
		
		
		this.haineelsa.mantie.addEventListener("click", changefunctionhere.bind(this));
		function  changefunctionhere(event) {
				this.elsa.castielsa.gotoAndStop(4);
				this.elsa.spatemantie.visible=true;
			this.animStars1();
		}
		this.hainejack.manusi.addEventListener("click", manusifunctionhere.bind(this));
		function  manusifunctionhere(event) {
				this.jack.blugijack.gotoAndStop(0);
				this.jack.mana.visible=false;
			this.jack.manuta.visible=false;
			this.animStars1();
		}
		this.hainejack.bratara.addEventListener("click", bratarafunctionhere.bind(this));
		function  bratarafunctionhere(event) {
				this.jack.blugijack.gotoAndStop(2);
				this.jack.mana.visible=false;
			this.jack.manuta.visible=true;
			this.animStars1();
		}
		
		
		this.change1 = function (arg) {
		
			this.jack.tricoujack.gotoAndStop(arg);
		
		}
		
		
		this.change2 = function (arg) {
			
				this.jack.blugijack.gotoAndStop(arg);
				this.jack.mana.visible=true;
		}
		
		
		
		this.change3 = function (arg) {
			this.jack.parjack.gotoAndStop(arg);
		
		}
		this.change4 = function (arg) {
			this.jack.sapcajack.gotoAndStop(arg);
		
		}
		
		this.change5 = function (arg) {
			this.elsa.bluzaelsa.gotoAndStop(arg);
		
		}
		this.change6 = function (arg) {
			this.elsa.castielsa.gotoAndStop(arg);
		this.elsa.spatemantie.visible=false;
		}
		this.change7 = function (arg) {
			this.elsa.fustaelsa.gotoAndStop(arg);
		
		}
		this.change8 = function (arg) {
			this.elsa.parelsa.gotoAndStop(arg);
		
		}
		
		
		
		
		
		this.finallevel = function () {
			exportRoot.level1.poza1.visible = true;
			exportRoot.level1.poza2.visible = true;
			exportRoot.level1.moregames.visible = false;
			exportRoot.level1.logo.visible = false;
			exportRoot.level1.moregames1.visible = true;
			exportRoot.level1.replay_but.visible = true;
			exportRoot.level1.hainejack.visible = false;
			exportRoot.level1.haineelsa.visible = false;
			exportRoot.level1.jack.visible = true;
			exportRoot.level1.elsa.visible = true;
			exportRoot.level1.nextlevel.visible = false;
			exportRoot.level1.fundal.gotoAndStop(2);
			exportRoot.level1.jack.x = 300;
			exportRoot.level1.elsa.x = 300;
		}
		this.completelevel = function () {
			exportRoot.levelpick.visible = true;
			exportRoot.level1.visible = false;
			exportRoot.levelpick.elsa.visible = false;
			exportRoot.levelpick.jack.visible = true;
			exportRoot.level1.hainejack.visible = true;
			exportRoot.level1.fundal.gotoAndStop(1);
			exportRoot.level1.haineelsa.visible = false;
			exportRoot.level1.jack.visible = true;
			exportRoot.level1.elsa.visible = false;
			exportRoot.level1.nextlevel.visible = true;
		}
		
		this.entergame = function () {
			exportRoot.level1.moregames1.visible = false;
			exportRoot.level1.hainejack.visible = false;
			exportRoot.level1.jack.visible = false;
			exportRoot.level1.nextlevel.visible = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// final
	this.poza1 = new lib.Symbol32copy2();
	this.poza1.parent = this;
	this.poza1.setTransform(655,132.5,0.752,0.752,0,0,0,-181.3,-1.2);

	this.poza2 = new lib.Symbol31copy4();
	this.poza2.parent = this;
	this.poza2.setTransform(652.1,284.1,0.752,0.752,0,0,0,1.6,-1.6);

	this.moregames1 = new lib.Symbol3();
	this.moregames1.parent = this;
	this.moregames1.setTransform(710.9,536.5,0.218,0.218,67,0,0,610.2,-266.1);

	this.replay_but = new lib.Symbol37();
	this.replay_but.parent = this;
	this.replay_but.setTransform(691.5,57.3,0.613,0.613,0,0,0,77.5,77.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.replay_but},{t:this.moregames1},{t:this.poza2},{t:this.poza1}]}).wait(1));

	// butone
	this.logo = new lib.Symbol6();
	this.logo.parent = this;
	this.logo.setTransform(574.9,31.7,0.537,0.537,0,0,0,1064.3,57.1);

	this.moregames = new lib.Symbol3();
	this.moregames.parent = this;
	this.moregames.setTransform(71.8,547,0.232,0.232,67,0,0,615.6,-305.1);

	this.nextlevel = new lib.Symbol36();
	this.nextlevel.parent = this;
	this.nextlevel.setTransform(748.6,542.6,0.561,0.561,0,0,0,77.5,77.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nextlevel},{t:this.moregames},{t:this.logo}]}).wait(1));

	// jack
	this.jack = new lib.Symbol31();
	this.jack.parent = this;
	this.jack.setTransform(702.9,-210.8,0.629,0.629,0,0,180,-1.3,-411.4);

	this.timeline.addTween(cjs.Tween.get(this.jack).wait(1));

	// elsa
	this.elsa = new lib.Symbol10();
	this.elsa.parent = this;
	this.elsa.setTransform(331.6,-15.4,0.659,0.659,0,0,0,-1.7,2.8);

	this.timeline.addTween(cjs.Tween.get(this.elsa).wait(1));

	// hainejack
	this.hainejack = new lib.Symbol15();
	this.hainejack.parent = this;
	this.hainejack.setTransform(250.5,369.1,1,1,0,0,0,89.5,108.1);

	this.timeline.addTween(cjs.Tween.get(this.hainejack).wait(1));

	// haineelsa
	this.haineelsa = new lib.Symbol9();
	this.haineelsa.parent = this;
	this.haineelsa.setTransform(254.5,315.2,1,1,0,0,0,136.5,174.8);

	this.timeline.addTween(cjs.Tween.get(this.haineelsa).wait(1));

	// Layer 1
	this.fundal = new lib.Symbol8();
	this.fundal.parent = this;
	this.fundal.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.fundal).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.6,-154.1,1252.6,802.9);


// stage content:
(lib.game = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.level1.visible = false;
		this.sndBtn.cursor = "pointer";
		this.levelpick.visible = false;
		var animInterLevels;
		createjs.Touch.enable(stage);
		this.goAnim = function () {
			this.animinterlevel.gotoAndPlay(1);
		}
		this.goNextScene = function () {
			switch (this.animInterLevels) {
				case "cover":
		
					exportRoot.levelpick.visible = true;
					exportRoot.cover.visible = false;
					exportRoot.levelpick.jack.visible = false;
		
					exportRoot.levelpick.animatiebalon();
					break;
		
		
		
		
		
				case "interlevel":
		
					exportRoot.levelpick.balonas.gotoAndStop(1);
					exportRoot.levelpick.animatiebalon();
					exportRoot.level1.completelevel();
					break;
		
				case "level1":
					exportRoot.level1.visible = true;
					exportRoot.levelpick.visible = false;
					exportRoot.level1.replay_but.visible = false;
					exportRoot.level1.moregames1.visible = false;
					exportRoot.level1.poza1.visible = false;
					exportRoot.level1.poza2.visible = false;
					//exportRoot.levelpick.firstlevel.gotoAndStop(1);
					//exportRoot.levelpick.secondlevel.gotoAndStop(1);
					exportRoot.level1.elsa.bluzaelsa.visible = false;
					exportRoot.level1.elsa.fustaelsa.visible = false;
					exportRoot.level1.entergame();
					break;
		
				case "level2":
					exportRoot.level1.visible = true;
					exportRoot.levelpick.visible = false;
		
		
					break;
		
				case "final":
		
					exportRoot.level1.entergame();
					exportRoot.level1.finallevel();
		
		
					break;
		
			}
		}
		
		
		this.showAds = function(){
					
						exportRoot.stopSnd();
							exportRoot.removeSnd();
							window[preroll.config.loaderObjectName].refetchAd();
						
				}
		createjs.Touch.enable(stage);
		
		var ua = navigator.userAgent.toLowerCase();
		var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
		if (isAndroid) {
			// Do something!
			// Redirect to Android-site?
			exportRoot.cover.googleplay.visible = true;
		}
		
		this.googleplayfunction = function () {
			window.open("market://search?q=pub:AZGameTV", "_blank");
		}
		
		
		this.moregamesfunction = function () {
			exportRoot.stopSnd();
			var gamename = 'marinette-vs-ladybug';
			var mainwebsite = '//www.azgametv.com/';
			var stringHost = detect_parent();
		
			if (stringHost == "rosy") {
				stringHost = window.location.hostname;
			}
			var urlsite = mainwebsite + "?utm_source=" + stringHost + "&utm_medium=html5game&utm_content=moregames&utm_campaign=" + gamename;
			realClick(urlsite);
		}
		this.logofunction = function () {
			exportRoot.stopSnd();
			var gamename = 'marinette-vs-ladybug';
			var mainwebsite = '//www.azgametv.com/';
			var stringHost = detect_parent();
		
			if (stringHost == "rosy") {
				stringHost = window.location.hostname;
			}
			var urlsite = mainwebsite + "?utm_source=" + stringHost + "&utm_medium=html5game&utm_content=logo&utm_campaign=" + gamename;
			realClick(urlsite);
		}
		
		this.poza1link = function () {
			exportRoot.stopSnd();
			var gamename = 'marinette-vs-ladybug';
			var mainwebsite = '//www.azgametv.com/';
			var stringHost = detect_parent();
		
			if (stringHost == "rosy") {
				stringHost = window.location.hostname;
			}
			var urlsite = mainwebsite + "?utm_source=" + stringHost + "&utm_medium=html5game&utm_content=Snow_Queen_Real_Makeover&utm_campaign=" + gamename;
			realClick(urlsite);
		}
		this.poza2link = function () {
			exportRoot.stopSnd();
			var gamename = 'marinette-vs-ladybug';
			var mainwebsite = '//www.azgametv.com/';
			var stringHost = detect_parent();
		
			if (stringHost == "rosy") {
				stringHost = window.location.hostname;
			}
			var urlsite = mainwebsite + "?utm_source=" + stringHost + "&utm_medium=html5game&utm_content=Girls_Fix_It-_Gwen_Dream_Car&utm_campaign=" + gamename;
			realClick(urlsite);
		}
		
		function detect_parent() {
			var iframe = (parent !== window);
			var url = null;
			if (iframe) {
				url = document.referrer;
				ref = url.match(/:\/\/(.[^/]+)/)[1];
				return ref;
			}
			return "rosy";
		}
		exportRoot.cover.fullscreenBtn.addEventListener("mousedown", toggleFullScreen);
		function toggleFullScreen() {
			var doc = window.document;
			var docEl = doc.documentElement;
		
			var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
			var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
		
			if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
				requestFullScreen.call(docEl);
			} else {
				cancelFullScreen.call(doc);
			}
		}
		var sparklesSound;
		
		var clickSound;
		
		var soundOn = 1;
		
		var isvisible = true;
		
		
		
		
		
		bgSnd = createjs.Sound.play("bgmusic", createjs.Sound.INTERRUPT_NONE);
		
		bgSnd.volume = 0.2;
		
		bgSnd.on("complete", handleComplete);
		
		
		
		exportRoot.sndBtn.addEventListener("mousedown", sndBtnF);
		
		function handleComplete() {
		
			if (soundOn == 1) {
		
				if (bgSnd != null) {
		
					bgSnd.play();
		
				}
		
			}
		
		}
		
		exportRoot.startSnd = function () {
		
			soundOn = 1;
		
			exportRoot.sndBtn.gotoAndStop(0);
		
			playBg();
		
		}
		exportRoot.removeSnd = function () {
		
			bgSnd = null;
		
		}
		
		
		function playBg() {
		
			if (bgSnd == null) {
				bgSnd = createjs.Sound.play("bgmusic", createjs.Sound.INTERRUPT_NONE);
				bgSnd.volume = 0.2;
				bgSnd.on("complete", handleComplete);
		
			} else {
		
				if (soundOn == 1) {
		
					bgSnd.play();
		
				} else {
		
					bgSnd.stop();
		
				}
			}
		
		}
		
		
		
		exportRoot.stopSnd = function () {
		
			if (bgSnd != null) {
				soundOn = 0;
				bgSnd.stop();
				exportRoot.sndBtn.gotoAndStop(1);
		
			}
		
		}
		
		function sndBtnF() {
		
			if (soundOn == 1) {
		
				soundOn = 0;
		
				exportRoot.sndBtn.gotoAndStop(1);
		
				exportRoot.stopSnd();
		
			} else {
				bgSnd = null;
				soundOn = 1;
		
				exportRoot.sndBtn.gotoAndStop(0);
				playBg();
			}
		
		}
		
		exportRoot.sparklesSound = function () {
		
			if (soundOn == 1) {
		
				sparklesSound = createjs.Sound.play("sparkles", createjs.Sound.INTERRUPT_NONE)
		
				sparklesSound.volume = 0.8;
		
			}
		
		}
		
		exportRoot.pigeonSound = function () {
		
			if (soundOn == 1) {
		
				sparklesSound = createjs.Sound.play("pigeonsound", createjs.Sound.INTERRUPT_NONE)
		
				sparklesSound.volume = 0.8;
		
			}
		
		}
		
		
		exportRoot.annaSound = function () {
		
			if (soundOn == 1) {
				annaSound = createjs.Sound.play("annaSound", createjs.Sound.INTERRUPT_NONE)
				annaSound.volume = 0.3;
			}
		}
		
		function rand(min, max, interval) {
			if (typeof (interval) === 'undefined') interval = 1;
			var r = Math.floor(Math.random() * (max - min + interval) / interval);
			return r * interval + min;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// animatie
	this.animinterlevel = new lib.Symbol49();
	this.animinterlevel.parent = this;
	this.animinterlevel.setTransform(400,-149,1,1,0,0,0,400,150);

	this.timeline.addTween(cjs.Tween.get(this.animinterlevel).wait(1));

	// butoane
	this.sndBtn = new lib.Symbol5();
	this.sndBtn.parent = this;
	this.sndBtn.setTransform(773,29.2,0.16,0.16,0,0,0,-182.6,20.9);

	this.timeline.addTween(cjs.Tween.get(this.sndBtn).wait(1));

	// level1
	this.level1 = new lib.Symbol7();
	this.level1.parent = this;
	this.level1.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.level1).wait(1));

	// Layer 4
	this.levelpick = new lib.Symbol64();
	this.levelpick.parent = this;
	this.levelpick.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.levelpick).wait(1));

	// cover
	this.cover = new lib.Symbol1();
	this.cover.parent = this;
	this.cover.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.cover).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(66.8,-1,1878.9,1201);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;