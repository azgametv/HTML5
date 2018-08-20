(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1024,
	height: 600,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/ffbg.png?1511523110720", id:"ffbg"},
		{src:"images/Laybvber3.png?1511523110720", id:"Laybvber3"},
		{src:"images/Layer46_2.png?1511523110720", id:"Layer46_2"},
		{src:"images/Layer47_2.png?1511523110720", id:"Layer47_2"},
		{src:"images/Layer48_3.png?1511523110720", id:"Layer48_3"},
		{src:"images/Layer49_3.png?1511523110720", id:"Layer49_3"},
		{src:"images/Layer50_3.png?1511523110720", id:"Layer50_3"},
		{src:"images/Layer51_3.png?1511523110720", id:"Layer51_3"},
		{src:"images/Layvbver5.png?1511523110720", id:"Layvbver5"},
		{src:"images/mainbg11.png?1511523110720", id:"mainbg11"},
		{src:"images/plbg.jpg?1511523110720", id:"plbg"},
		{src:"images/VectorxcvcxvSmartObjectcopy9.png?1511523110720", id:"VectorxcvcxvSmartObjectcopy9"},
		{src:"images/game_atlas_.png?1511523110619", id:"game_atlas_"},
		{src:"images/game_atlas_2.png?1511523110619", id:"game_atlas_2"},
		{src:"images/game_atlas_3.png?1511523110619", id:"game_atlas_3"},
		{src:"images/game_atlas_4.png?1511523110619", id:"game_atlas_4"},
		{src:"images/game_atlas_5.png?1511523110620", id:"game_atlas_5"},
		{src:"images/game_atlas_6.png?1511523110621", id:"game_atlas_6"},
		{src:"images/game_atlas_7.png?1511523110625", id:"game_atlas_7"},
		{src:"images/game_atlas_8.png?1511523110625", id:"game_atlas_8"},
		{src:"images/game_atlas_9.png?1511523110625", id:"game_atlas_9"},
		{src:"images/game_atlas_10.png?1511523110625", id:"game_atlas_10"},
		{src:"images/game_atlas_11.png?1511523110625", id:"game_atlas_11"},
		{src:"images/game_atlas_12.png?1511523110626", id:"game_atlas_12"},
		{src:"images/game_atlas_13.png?1511523110626", id:"game_atlas_13"},
		{src:"images/game_atlas_14.png?1511523110626", id:"game_atlas_14"},
		{src:"images/game_atlas_15.png?1511523110626", id:"game_atlas_15"},
		{src:"images/game_atlas_16.png?1511523110626", id:"game_atlas_16"},
		{src:"images/game_atlas_17.png?1511523110627", id:"game_atlas_17"},
		{src:"images/game_atlas_18.png?1511523110627", id:"game_atlas_18"},
		{src:"images/game_atlas_19.png?1511523110627", id:"game_atlas_19"},
		{src:"images/game_atlas_20.png?1511523110627", id:"game_atlas_20"},
		{src:"images/game_atlas_21.png?1511523110627", id:"game_atlas_21"},
		{src:"images/game_atlas_22.png?1511523110628", id:"game_atlas_22"},
		{src:"images/game_atlas_23.png?1511523110628", id:"game_atlas_23"},
		{src:"images/game_atlas_24.png?1511523110628", id:"game_atlas_24"},
		{src:"images/game_atlas_25.png?1511523110628", id:"game_atlas_25"},
		{src:"images/game_atlas_26.png?1511523110629", id:"game_atlas_26"},
		{src:"images/game_atlas_27.png?1511523110629", id:"game_atlas_27"},
		{src:"images/game_atlas_28.png?1511523110629", id:"game_atlas_28"},
		{src:"images/game_atlas_29.png?1511523110629", id:"game_atlas_29"},
		{src:"images/game_atlas_30.png?1511523110630", id:"game_atlas_30"},
		{src:"images/game_atlas_31.png?1511523110630", id:"game_atlas_31"},
		{src:"images/game_atlas_32.png?1511523110630", id:"game_atlas_32"},
		{src:"images/game_atlas_33.png?1511523110630", id:"game_atlas_33"},
		{src:"images/game_atlas_34.png?1511523110631", id:"game_atlas_34"},
		{src:"images/game_atlas_35.png?1511523110631", id:"game_atlas_35"},
		{src:"images/game_atlas_36.png?1511523110631", id:"game_atlas_36"},
		{src:"images/game_atlas_37.png?1511523110632", id:"game_atlas_37"},
		{src:"images/game_atlas_38.png?1511523110632", id:"game_atlas_38"},
		{src:"images/game_atlas_39.png?1511523110633", id:"game_atlas_39"},
		{src:"images/game_atlas_40.png?1511523110634", id:"game_atlas_40"},
		{src:"images/game_atlas_41.png?1511523110639", id:"game_atlas_41"},
		{src:"sounds/bg1.mp3?1511523110720", id:"bg1"},
		{src:"sounds/bg2.mp3?1511523110720", id:"bg2"},
		{src:"sounds/btn.mp3?1511523110720", id:"btn"},
		{src:"sounds/door.mp3?1511523110720", id:"door"},
		{src:"sounds/dreeupsud1.mp3?1511523110720", id:"dreeupsud1"},
		{src:"sounds/eat.mp3?1511523110720", id:"eat"},
		{src:"sounds/finalsnd.mp3?1511523110720", id:"finalsnd"},
		{src:"sounds/heartbeat.mp3?1511523110720", id:"heartbeat"},
		{src:"sounds/magic.mp3?1511523110720", id:"magic"},
		{src:"sounds/mix.mp3?1511523110720", id:"mix"},
		{src:"sounds/objectfound.mp3?1511523110720", id:"objectfound"},
		{src:"sounds/panel.mp3?1511523110720", id:"panel"},
		{src:"sounds/scream.mp3?1511523110720", id:"scream"},
		{src:"sounds/starMc.mp3?1511523110720", id:"starMc"},
		{src:"sounds/winner.mp3?1511523110720", id:"winner"},
		{src:"sounds/wrong.mp3?1511523110720", id:"wrong"}
	]
};



lib.ssMetadata = [
		{name:"game_atlas_", frames: [[0,0,620,558]]},
		{name:"game_atlas_2", frames: [[0,0,416,725]]},
		{name:"game_atlas_3", frames: [[0,0,485,562]]},
		{name:"game_atlas_4", frames: [[0,0,482,557]]},
		{name:"game_atlas_5", frames: [[0,0,422,609]]},
		{name:"game_atlas_6", frames: [[0,0,422,609]]},
		{name:"game_atlas_7", frames: [[0,0,377,661],[379,0,390,628]]},
		{name:"game_atlas_8", frames: [[0,0,390,628]]},
		{name:"game_atlas_9", frames: [[0,0,451,533]]},
		{name:"game_atlas_10", frames: [[385,0,383,599],[0,0,383,599]]},
		{name:"game_atlas_11", frames: [[0,0,422,542]]},
		{name:"game_atlas_12", frames: [[0,0,452,500]]},
		{name:"game_atlas_13", frames: [[0,0,452,500]]},
		{name:"game_atlas_14", frames: [[368,0,360,588],[0,0,366,612]]},
		{name:"game_atlas_15", frames: [[0,0,371,570],[373,0,385,537]]},
		{name:"game_atlas_16", frames: [[387,0,390,530],[0,0,385,537]]},
		{name:"game_atlas_17", frames: [[0,0,341,594],[343,0,341,594]]},
		{name:"game_atlas_18", frames: [[0,0,449,439]]},
		{name:"game_atlas_19", frames: [[0,0,449,439]]},
		{name:"game_atlas_20", frames: [[382,0,353,547],[0,0,380,510]]},
		{name:"game_atlas_21", frames: [[0,0,381,506]]},
		{name:"game_atlas_22", frames: [[0,0,449,413]]},
		{name:"game_atlas_23", frames: [[0,415,635,262],[0,0,449,413]]},
		{name:"game_atlas_24", frames: [[0,0,395,418],[397,0,395,418]]},
		{name:"game_atlas_25", frames: [[0,0,298,536],[300,0,351,435]]},
		{name:"game_atlas_26", frames: [[0,556,633,186],[0,279,501,275],[0,0,504,277],[506,0,227,549]]},
		{name:"game_atlas_27", frames: [[487,427,295,360],[0,235,218,525],[500,0,251,425],[220,235,265,402],[0,0,498,233]]},
		{name:"game_atlas_28", frames: [[0,421,501,207],[0,211,500,208],[0,0,498,209]]},
		{name:"game_atlas_29", frames: [[0,231,427,228],[0,0,428,229],[0,461,424,208],[430,0,346,258],[429,260,336,261]]},
		{name:"game_atlas_30", frames: [[146,0,432,201],[0,0,144,606],[0,608,433,190],[146,203,432,201],[435,406,339,236]]},
		{name:"game_atlas_31", frames: [[608,0,170,450],[0,0,303,264],[305,0,301,261],[0,266,504,158]]},
		{name:"game_atlas_32", frames: [[172,362,206,360],[172,0,206,360],[380,0,206,360],[588,0,206,360],[380,362,206,360],[588,362,206,360],[0,0,170,450]]},
		{name:"game_atlas_33", frames: [[598,0,174,389],[598,391,174,389],[182,0,174,389],[358,0,174,389],[0,660,596,117],[0,0,180,410],[0,412,290,246]]},
		{name:"game_atlas_34", frames: [[422,270,157,381],[176,503,233,280],[0,0,174,389],[0,391,174,389],[469,0,244,268],[176,233,244,268],[581,270,157,381],[176,0,291,231]]},
		{name:"game_atlas_35", frames: [[0,492,243,234],[245,492,243,234],[490,492,245,229],[0,198,596,96],[0,296,596,96],[0,0,596,97],[0,99,596,97],[0,394,596,96]]},
		{name:"game_atlas_36", frames: [[471,386,239,203],[277,221,192,256],[232,591,240,202],[490,177,248,207],[0,0,243,219],[0,407,230,215],[245,0,243,219],[490,0,295,175],[0,221,275,184],[474,591,241,194]]},
		{name:"game_atlas_37", frames: [[311,382,200,200],[189,0,237,183],[0,250,186,248],[0,0,187,248],[535,196,193,205],[311,196,222,184],[428,0,222,194],[0,618,267,163],[269,618,240,169],[188,250,121,366],[511,584,200,200]]},
		{name:"game_atlas_38", frames: [[165,589,192,192],[501,479,126,268],[165,207,100,380],[359,502,140,254],[629,234,126,268],[267,0,146,255],[629,504,142,237],[568,0,148,232],[415,0,151,243],[0,207,163,235],[267,257,151,243],[420,245,148,232],[0,0,193,205],[0,444,163,235]]},
		{name:"game_atlas_39", frames: [[0,0,269,123],[433,0,82,379],[253,197,157,174],[0,659,209,141],[517,231,209,141],[517,374,209,141],[657,517,125,210],[0,125,122,265],[124,125,127,250],[517,0,132,229],[124,377,139,227],[265,381,125,231],[519,517,136,211],[0,392,122,265],[392,517,125,231],[651,0,132,229],[271,0,160,195],[211,614,165,164]]},
		{name:"game_atlas_40", frames: [[644,400,118,119],[366,327,232,87],[346,642,231,68],[126,309,214,100],[255,0,130,194],[127,0,126,201],[0,212,124,210],[0,0,125,210],[644,521,123,103],[387,116,211,113],[366,231,215,94],[387,0,212,114],[127,203,211,104],[150,411,214,100],[600,318,194,80],[600,152,193,81],[150,623,194,106],[150,513,195,108],[347,550,192,90],[583,235,192,81],[0,424,148,157],[0,583,148,157],[601,0,149,150],[366,416,137,132],[505,416,137,132],[579,626,113,111]]},
		{name:"game_atlas_41", frames: [[152,419,60,77],[552,425,60,77],[696,416,64,79],[86,419,64,79],[462,110,103,98],[214,464,63,60],[633,271,84,98],[464,320,115,69],[346,387,113,50],[734,0,60,158],[232,327,55,135],[0,359,84,73],[614,425,76,51],[0,434,76,51],[346,439,76,51],[506,512,88,33],[112,248,84,29],[0,249,84,29],[464,288,84,29],[261,537,84,29],[60,542,84,29],[220,156,14,12],[586,138,9,11],[328,194,65,11],[552,405,22,9],[60,500,77,40],[86,359,102,58],[146,551,50,20],[596,541,67,20],[347,552,54,10],[552,416,23,6],[116,103,21,4],[567,110,23,26],[198,248,18,16],[552,391,26,12],[0,549,52,23],[719,320,79,94],[506,391,44,119],[86,263,23,12],[86,249,24,12],[462,97,22,11],[116,0,119,101],[633,172,87,97],[0,156,110,91],[237,96,111,96],[600,89,132,81],[0,0,114,107],[481,547,65,19],[190,400,34,10],[395,194,50,14],[762,453,36,6],[279,464,56,26],[567,159,21,11],[0,109,230,45],[328,210,230,37],[328,249,230,37],[0,281,230,37],[346,327,116,58],[232,288,230,37],[0,320,230,37],[461,391,43,129],[614,478,58,61],[0,487,58,60],[289,327,55,135],[734,160,60,158],[674,497,57,58],[152,498,53,51],[567,172,64,146],[426,522,53,51],[581,320,42,42],[490,0,108,108],[279,492,85,43],[581,371,113,52],[600,0,124,87],[350,97,110,95],[237,0,126,94],[365,0,123,95],[112,156,106,90],[220,194,106,85],[190,359,32,39],[567,138,17,19],[366,492,58,58],[207,526,52,50],[762,416,35,35],[733,497,53,57]]}
];


// symbols:



(lib._192 = function() {
	this.spriteSheet = ss["game_atlas_38"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._200jpgcopy3 = function() {
	this.spriteSheet = ss["game_atlas_37"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.arr10001 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.arr10002 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.arr20001 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.arr20002 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1vbng = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1cvxcvxcvxcv = function() {
	this.spriteSheet = ss["game_atlas_39"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ffbg = function() {
	this.initialize(img.ffbg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,600);


(lib.Group1 = function() {
	this.spriteSheet = ss["game_atlas_15"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Group1copy5 = function() {
	this.spriteSheet = ss["game_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hb = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Laybvber3 = function() {
	this.initialize(img.Laybvber3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1022,595);


(lib.Layer1 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Layer10 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Layer11 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Layer11_1 = function() {
	this.spriteSheet = ss["game_atlas_39"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Layer12 = function() {
	this.spriteSheet = ss["game_atlas_39"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Layer13 = function() {
	this.spriteSheet = ss["game_atlas_25"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Layer13_1 = function() {
	this.spriteSheet = ss["game_atlas_40"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Layer13copy2 = function() {
	this.spriteSheet = ss["game_atlas_27"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Layer133 = function() {
	this.spriteSheet = ss["game_atlas_40"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Layer133_1 = function() {
	this.spriteSheet = ss["game_atlas_37"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Layer133_2 = function() {
	this.spriteSheet = ss["game_atlas_23"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Layer135 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Layer135_1 = function() {
	this.spriteSheet = ss["game_atlas_31"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Layer137 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Layer137_1 = function() {
	this.spriteSheet = ss["game_atlas_34"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Layer138 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Layer138_1 = function() {
	this.spriteSheet = ss["game_atlas_36"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Layer139 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Layer139_1 = function() {
	this.spriteSheet = ss["game_atlas_39"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Layer140 = function() {
	this.spriteSheet = ss["game_atlas_40"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Layer140_1 = function() {
	this.spriteSheet = ss["game_atlas_26"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Layer141 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Layer141_1 = function() {
	this.spriteSheet = ss["game_atlas_39"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Layer142 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Layer142_1 = function() {
	this.spriteSheet = ss["game_atlas_39"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Layer143 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Layer145 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Layer146 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Layer147 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Layer148 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Layer149 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Layer15 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Layer15copy = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Layer15copy_1 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.Layer150 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.Layer151 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.Layer152 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.Layer16 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.Layer16_1 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.Layer16ghjk = function() {
	this.spriteSheet = ss["game_atlas_27"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Layer17 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.Layer17_1 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.Layer17copy = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.Layer18copy = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.Layer18copy2 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.Layer19 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.Layer20 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.Layer20_1 = function() {
	this.spriteSheet = ss["game_atlas_39"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Layer20_2 = function() {
	this.spriteSheet = ss["game_atlas_27"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Layer22copy = function() {
	this.spriteSheet = ss["game_atlas_40"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Layer22copy_1 = function() {
	this.spriteSheet = ss["game_atlas_30"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Layer23 = function() {
	this.spriteSheet = ss["game_atlas_32"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Layer23_1 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Layer25 = function() {
	this.spriteSheet = ss["game_atlas_40"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Layer25_1 = function() {
	this.spriteSheet = ss["game_atlas_27"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Layer27copy = function() {
	this.spriteSheet = ss["game_atlas_25"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Layer27copy6 = function() {
	this.spriteSheet = ss["game_atlas_34"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Layer28 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.Layer28_1 = function() {
	this.spriteSheet = ss["game_atlas_39"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Layer28copy = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.Layer29 = function() {
	this.spriteSheet = ss["game_atlas_38"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Layer3 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.Layer30 = function() {
	this.spriteSheet = ss["game_atlas_39"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Layer31 = function() {
	this.spriteSheet = ss["game_atlas_38"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Layer31_1 = function() {
	this.spriteSheet = ss["game_atlas_40"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Layer31copy = function() {
	this.spriteSheet = ss["game_atlas_30"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Layer32 = function() {
	this.spriteSheet = ss["game_atlas_40"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Layer33 = function() {
	this.spriteSheet = ss["game_atlas_39"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Layer33_1 = function() {
	this.spriteSheet = ss["game_atlas_38"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Layer33_2 = function() {
	this.spriteSheet = ss["game_atlas_17"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Layer34 = function() {
	this.spriteSheet = ss["game_atlas_39"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Layer34_1 = function() {
	this.spriteSheet = ss["game_atlas_39"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Layer34_2 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Layer35 = function() {
	this.spriteSheet = ss["game_atlas_39"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Layer35_1 = function() {
	this.spriteSheet = ss["game_atlas_38"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Layer35_2 = function() {
	this.spriteSheet = ss["game_atlas_20"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Layer36 = function() {
	this.spriteSheet = ss["game_atlas_38"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Layer36_1 = function() {
	this.spriteSheet = ss["game_atlas_39"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Layer36_2 = function() {
	this.spriteSheet = ss["game_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Layer37 = function() {
	this.spriteSheet = ss["game_atlas_38"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Layer37_1 = function() {
	this.spriteSheet = ss["game_atlas_40"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Layer37_2 = function() {
	this.spriteSheet = ss["game_atlas_14"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Layer38 = function() {
	this.spriteSheet = ss["game_atlas_38"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Layer38_1 = function() {
	this.spriteSheet = ss["game_atlas_39"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Layer38_2 = function() {
	this.spriteSheet = ss["game_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Layer39 = function() {
	this.spriteSheet = ss["game_atlas_38"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Layer39_1 = function() {
	this.spriteSheet = ss["game_atlas_36"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Layer39_2 = function() {
	this.spriteSheet = ss["game_atlas_16"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Layer39_3 = function() {
	this.spriteSheet = ss["game_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Layer4 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.Layer4copy = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.Layer40 = function() {
	this.spriteSheet = ss["game_atlas_38"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Layer40_1 = function() {
	this.spriteSheet = ss["game_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Layer41 = function() {
	this.spriteSheet = ss["game_atlas_38"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Layer41_1 = function() {
	this.spriteSheet = ss["game_atlas_37"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Layer41_2 = function() {
	this.spriteSheet = ss["game_atlas_21"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Layer41_3 = function() {
	this.spriteSheet = ss["game_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Layer41copy = function() {
	this.spriteSheet = ss["game_atlas_37"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Layer41copy_1 = function() {
	this.spriteSheet = ss["game_atlas_20"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Layer42 = function() {
	this.spriteSheet = ss["game_atlas_38"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Layer42_1 = function() {
	this.spriteSheet = ss["game_atlas_37"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Layer42_2 = function() {
	this.spriteSheet = ss["game_atlas_24"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Layer42_3 = function() {
	this.spriteSheet = ss["game_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Layer42copy = function() {
	this.spriteSheet = ss["game_atlas_38"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Layer42copy_1 = function() {
	this.spriteSheet = ss["game_atlas_24"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Layer43 = function() {
	this.spriteSheet = ss["game_atlas_38"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Layer43_1 = function() {
	this.spriteSheet = ss["game_atlas_32"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Layer43_2 = function() {
	this.spriteSheet = ss["game_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Layer44 = function() {
	this.spriteSheet = ss["game_atlas_39"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Layer44_1 = function() {
	this.spriteSheet = ss["game_atlas_32"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Layer44_2 = function() {
	this.spriteSheet = ss["game_atlas_17"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Layer45 = function() {
	this.spriteSheet = ss["game_atlas_32"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Layer46 = function() {
	this.spriteSheet = ss["game_atlas_33"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Layer46_1 = function() {
	this.spriteSheet = ss["game_atlas_32"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Layer46_2 = function() {
	this.initialize(img.Layer46_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,449,1007);


(lib.Layer47 = function() {
	this.spriteSheet = ss["game_atlas_33"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Layer47_1 = function() {
	this.spriteSheet = ss["game_atlas_32"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Layer47_2 = function() {
	this.initialize(img.Layer47_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,449,1007);


(lib.Layer48 = function() {
	this.spriteSheet = ss["game_atlas_33"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Layer48_1 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.Layer48_2 = function() {
	this.spriteSheet = ss["game_atlas_36"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Layer48_3 = function() {
	this.initialize(img.Layer48_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,449,1007);


(lib.Layer49 = function() {
	this.spriteSheet = ss["game_atlas_33"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Layer49_1 = function() {
	this.spriteSheet = ss["game_atlas_40"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Layer49_2 = function() {
	this.spriteSheet = ss["game_atlas_36"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Layer49_3 = function() {
	this.initialize(img.Layer49_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,449,1007);


(lib.Layer5 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.Layer50 = function() {
	this.spriteSheet = ss["game_atlas_34"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Layer50_1 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.Layer50_2 = function() {
	this.spriteSheet = ss["game_atlas_37"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Layer50_3 = function() {
	this.initialize(img.Layer50_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,449,1007);


(lib.Layer51 = function() {
	this.spriteSheet = ss["game_atlas_34"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Layer51_1 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.Layer51_2 = function() {
	this.spriteSheet = ss["game_atlas_37"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Layer51_3 = function() {
	this.initialize(img.Layer51_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,449,1007);


(lib.Layer52 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.Layer52_1 = function() {
	this.spriteSheet = ss["game_atlas_37"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Layer53 = function() {
	this.spriteSheet = ss["game_atlas_36"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Layer53_1 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.Layer53_2 = function() {
	this.spriteSheet = ss["game_atlas_36"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Layer53_3 = function() {
	this.spriteSheet = ss["game_atlas_22"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Layer54 = function() {
	this.spriteSheet = ss["game_atlas_36"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Layer54_1 = function() {
	this.spriteSheet = ss["game_atlas_40"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Layer54_2 = function() {
	this.spriteSheet = ss["game_atlas_29"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Layer54_3 = function() {
	this.spriteSheet = ss["game_atlas_23"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Layer55 = function() {
	this.spriteSheet = ss["game_atlas_35"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Layer55_1 = function() {
	this.spriteSheet = ss["game_atlas_18"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Layer56 = function() {
	this.spriteSheet = ss["game_atlas_35"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Layer56_1 = function() {
	this.spriteSheet = ss["game_atlas_40"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Layer56_2 = function() {
	this.spriteSheet = ss["game_atlas_30"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Layer56_3 = function() {
	this.spriteSheet = ss["game_atlas_19"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Layer56copy = function() {
	this.spriteSheet = ss["game_atlas_40"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Layer56copy_1 = function() {
	this.spriteSheet = ss["game_atlas_29"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Layer56copy2 = function() {
	this.spriteSheet = ss["game_atlas_40"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Layer56copy2_1 = function() {
	this.spriteSheet = ss["game_atlas_29"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Layer57 = function() {
	this.spriteSheet = ss["game_atlas_34"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Layer57_1 = function() {
	this.spriteSheet = ss["game_atlas_40"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Layer57_2 = function() {
	this.spriteSheet = ss["game_atlas_30"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Layer57_3 = function() {
	this.spriteSheet = ss["game_atlas_12"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Layer58 = function() {
	this.spriteSheet = ss["game_atlas_34"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Layer58_1 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.Layer58_2 = function() {
	this.spriteSheet = ss["game_atlas_13"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Layer59 = function() {
	this.spriteSheet = ss["game_atlas_39"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Layer6 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.Layer6copy2 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.Layer60 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.Layer62 = function() {
	this.spriteSheet = ss["game_atlas_37"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Layer64 = function() {
	this.spriteSheet = ss["game_atlas_36"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Layer65 = function() {
	this.spriteSheet = ss["game_atlas_36"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Layer66 = function() {
	this.spriteSheet = ss["game_atlas_31"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Layer67 = function() {
	this.spriteSheet = ss["game_atlas_35"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Layer68 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.Layer69 = function() {
	this.spriteSheet = ss["game_atlas_40"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Layer69_1 = function() {
	this.spriteSheet = ss["game_atlas_28"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Layer7copy = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.Layer70 = function() {
	this.spriteSheet = ss["game_atlas_40"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Layer70_1 = function() {
	this.spriteSheet = ss["game_atlas_28"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Layer71 = function() {
	this.spriteSheet = ss["game_atlas_40"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Layer71_1 = function() {
	this.spriteSheet = ss["game_atlas_26"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Layer72 = function() {
	this.spriteSheet = ss["game_atlas_40"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Layer72_1 = function() {
	this.spriteSheet = ss["game_atlas_26"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Layer73 = function() {
	this.spriteSheet = ss["game_atlas_40"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Layer73_1 = function() {
	this.spriteSheet = ss["game_atlas_27"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Layer74 = function() {
	this.spriteSheet = ss["game_atlas_40"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Layer74_1 = function() {
	this.spriteSheet = ss["game_atlas_28"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Layer76 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.Layer76_1 = function() {
	this.spriteSheet = ss["game_atlas_33"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Layer77 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.Layer77_1 = function() {
	this.spriteSheet = ss["game_atlas_35"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Layer78 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.Layer78_1 = function() {
	this.spriteSheet = ss["game_atlas_35"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Layer79 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.Layer79_1 = function() {
	this.spriteSheet = ss["game_atlas_35"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Layer8 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.Layer80 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.Layer80_1 = function() {
	this.spriteSheet = ss["game_atlas_35"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Layer81 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.Layer81_1 = function() {
	this.spriteSheet = ss["game_atlas_35"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Layer82 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.Layer82_1 = function() {
	this.spriteSheet = ss["game_atlas_37"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Layer83 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.Layer83_1 = function() {
	this.spriteSheet = ss["game_atlas_40"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Layer83copy = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.Layer83copy_1 = function() {
	this.spriteSheet = ss["game_atlas_40"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Layer85 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.Layer85_1 = function() {
	this.spriteSheet = ss["game_atlas_34"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Layer86 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.Layer86_1 = function() {
	this.spriteSheet = ss["game_atlas_32"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Layer87 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.Layer87_1 = function() {
	this.spriteSheet = ss["game_atlas_40"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Layer88 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.Layer88_1 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.Layer88_2 = function() {
	this.spriteSheet = ss["game_atlas_33"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Layer88_3 = function() {
	this.spriteSheet = ss["game_atlas_40"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.Layer88copy = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.Layer88copy_1 = function() {
	this.spriteSheet = ss["game_atlas_40"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.Layer89 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.Layer89_1 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.Layer9 = function() {
	this.spriteSheet = ss["game_atlas_26"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Layer90 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.Layer91 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.Layer92 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.Layer92_1 = function() {
	this.spriteSheet = ss["game_atlas_30"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Layer93 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.Layer93_1 = function() {
	this.spriteSheet = ss["game_atlas_31"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Layer94 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.Layer94_1 = function() {
	this.spriteSheet = ss["game_atlas_29"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Layer95 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.Layer95_1 = function() {
	this.spriteSheet = ss["game_atlas_29"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Layer96 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.Layer96_1 = function() {
	this.spriteSheet = ss["game_atlas_33"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Layer97 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.Layer97_1 = function() {
	this.spriteSheet = ss["game_atlas_34"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Layvbver5 = function() {
	this.initialize(img.Layvbver5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,600);


(lib.lev1 = function() {
	this.spriteSheet = ss["game_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.lev20001 = function() {
	this.spriteSheet = ss["game_atlas_15"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.lev20002 = function() {
	this.spriteSheet = ss["game_atlas_16"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.mainbg11 = function() {
	this.initialize(img.mainbg11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,600);


(lib.Musictoneicon = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.mute1 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.plbg = function() {
	this.initialize(img.plbg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,600);


(lib.pmod1 = function() {
	this.spriteSheet = ss["game_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.poza3 = function() {
	this.spriteSheet = ss["game_atlas_37"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.rb = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.st1 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.st2 = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.star = function() {
	this.spriteSheet = ss["game_atlas_41"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.Symbol18bnbvnvb = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Symbol18mm = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Symbol40 = function() {
	this.spriteSheet = ss["game_atlas_31"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Symbol54mm = function() {
	this.spriteSheet = ss["game_atlas_40"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.Symbol60mm = function() {
	this.spriteSheet = ss["game_atlas_39"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.ticlll = function() {
	this.spriteSheet = ss["game_atlas_36"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.VectorxcvcxvSmartObjectcopy9 = function() {
	this.initialize(img.VectorxcvcxvSmartObjectcopy9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,600);


(lib.Tween38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqMO1QkoABAAkpIAA0ZQAAkpEoAAIUZAAQEpAAAAEpIAAUZQAAEpkpgBg");
	mask.setTransform(-5,-4);

	// Layer 1
	this.instance = new lib._200jpgcopy3();
	this.instance.parent = this;
	this.instance.setTransform(-100,-101);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-99,190,190);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._192();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,192,192);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.poza3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.uio = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgwA5QgTgUAAgkQAAgkAUgVQASgUAdAAQAeAAATAUQATAUAAAkIAAAGIhtAAQACAYAMANQANANAQAAQAOAAAJgHQAKgHAHgQIAaADQgHAXgRANQgQAMgaAAQgfAAgTgUgAgbgsQgLAMgBATIBRAAQgCgTgIgJQgMgPgTAAQgQAAgMAMg");
	this.shape.setTransform(26.2,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAjBMIAAhZQAAgPgDgIQgEgIgHgEQgHgFgLAAQgNAAgMAKQgMAKAAAeIAABPIgZAAIAAiUIAXAAIAAAWQAQgYAdAAQAOAAALAEQALAFAGAIQAFAIADALQABAHAAARIAABag");
	this.shape_1.setTransform(10.4,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgxA5QgTgUAAglQAAgoAXgUQATgQAaAAQAeAAAUAUQATAUAAAjQAAAbgIARQgJAQgQAJQgRAJgTAAQgeAAgTgUgAgegpQgMAOAAAbQAAAcAMAOQANAOARAAQASAAANgOQAMgOAAgcQAAgbgMgOQgNgPgSAAQgRAAgNAPg");
	this.shape_2.setTransform(-5.6,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhTBmIAAjLIBHAAQAWAAAMADQASAEAMALQAQANAJAWQAHAVABAbQgBAWgFASQgGASgIAMQgJAMgJAHQgLAGgOAEQgOADgSAAgAg4BOIAsAAQASAAALgEQAMgEAHgGQAKgKAFgQQAGgRAAgVQAAgggLgRQgLgSgPgGQgLgEgWAAIgrAAg");
	this.shape_3.setTransform(-23.5,-2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#993399").ss(3,1,1).p("ABTA5QAAACABACQABACABACQADAEAEABIAAAkIhIAAIAAglQACgBACgDQACgCAAgGIAAg8QAAgDgBgCQgBgCgCgDQgCgDgDgCIAAgiIBAAAIAAAGQAAACACAAQADAAACgBQAQgJARAAQASAAAMAKQANAMAAAXIAABEQAAAGABACQACADADAAIAAAkIhAAAIAAhaQAAgEAAgDQAAgDAAgCQAAgEgBgBQAAgDgDgDQgDgEgDAAIgJAAQgDAAgBACQgBACAAAHgAEXAFIAAgOQAAgLgMAAQgFAAgEADQgEADAAAFIAAAOgAFVAyIAAAmQgPAOgXAGQgQADgXAAQggAAgSgLQgVgOAAgeIAAg/QAAgcAWgNQASgKAfAAQACAAABAAQAXAAAXALQAdAOAAAWIAAAyIhYAAIAAAXQAAAFAEAEQAEADAFAAQAFAAAEgCQADgEAAgFIAAgNgAlTBqIAAgkQACgBACgDQACgDAAgBQABgCAAgCIAAh3QAAgDgBgCQgBgCgBgDQgDgDgDgCIAAgiIBwAAQAQAAAMADQALABAHAJQAJAKAEAHQAFAJAAAMIAABmQAAAQgEAMQgEAMgIAHQgMAJgLAEQgNADgQAAgAjuA6QADgCABgEQAAgDAAgFIAAhUQAAgCAAgDQAAgCAAgCQAAgEgBgDQAAgDgDgDQgFgEgFAAIgLAAQgDAAgBACQAAABAAAEQAAAEAAACIAABlQAAAFAAADQAAACAAABQABABACAAQAAAAACAAIAMAAQAFAAADgCgAhLBsQgeAAgSgMQgVgNAAgbIAAhAQAAgYAXgMQATgKAbAAQAmAAATAOQAPALAAAVIAABAQAAAggbANQgQAHgdAAgAg/gLQAAgFgEgCQgEgDgEAAQgFAAgDADQgEACAAAFIAABOQAAAEADADQAEADAFAAQAEAAAEgDQAEgDAAgEg");
	this.shape_4.setTransform(0.1,0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ADWBkQgVgOAAgeIAAg+QAAgdAWgNQASgKAfAAIACAAQAYAAAXALQAdAOAAAWIAAAyIhYAAIAAAXQAAAFAEAEQAEADAEAAQAGAAADgCQAEgEAAgEIAAgOIA9AAIAAAmQgPAOgWAGQgQADgXAAQghAAgRgLgAEBgRQgDADAAAFIAAAOIAZAAIAAgNQAAgMgMAAQgFAAgFADgAh7BgQgVgNAAgbIAAhAQAAgYAXgMQATgJAaAAQAnAAASANQAQAMAAAVIAAA/QAAAhgbAMQgRAHgcAAQgfAAgRgMgAhUgSQgDADAAAEIAABOQAAAEADACQADADAGAAQAEAAAEgDQAEgCgBgEIAAhOQABgEgEgDQgEgDgFAAQgEAAgEADgABqBqIAAhaIAAgGIAAgGIAAgEQAAgEgDgCQgDgEgEgBIgIAAQgBAAgBABQAAAAgBAAQAAAAgBABQAAAAAAABQgBACAAAGIAAA4IABAFIACAEQADADAEACIAAAkIhIAAIAAglQACgBACgDQACgDAAgGIAAg7IgBgFIgDgFQgCgDgDgCIAAgiIBAAAIAAAHQAAAAAAAAQAAABAAAAQABAAAAAAQAAABABAAQADgBACgBQAQgJAQABQATAAALAKQANAMABAXIAABDQgBAFACADQABADAEAAIAAAkgAlTBqIAAgkQACgCACgCIACgEIABgFIAAh2IgBgFIgDgEQgCgEgDgCIAAgiIBwAAQAQAAALADQAMABAHAJQAJAKADAHQAGAJgBAMIAABnQAAAPgDAMQgEAMgIAHQgLAJgMADQgNAEgRAAgAkHg/IAAAEIAAAHIAABjIAAAIIAAAEIACABIADAAIAMAAQAFAAADgDQACgCABgDIABgIIAAhUIAAgEIAAgFIgBgHQAAgDgDgCQgFgFgEAAIgMAAQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAgBABg");
	this.shape_5.setTransform(0.1,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.8,-20.2,73.6,37);


(lib.Symbnbmbnmol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol54mm();
	this.instance.parent = this;
	this.instance.setTransform(-56,-53,0.991,0.991);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-53,112,110);


(lib.redftSymbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap1vbng();
	this.instance.parent = this;
	this.instance.setTransform(-51.3,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.3,-49,103,98);


(lib.Layer133_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AG5LUQiagqijhdQiBhLich5Ql9kmk1lmQgtg2gUggQgggygJguQgPhYA6hUQA4hPBaghQCYg1DRBNQA0ATB1A2QBsAxA/AWQBnAlCxAcQDnAlA4ANQCeAkBzBDQBuBABABaQAMA1ACA8QACA+gLB5QgMB8ACA+QACAvAHBfQACBSgWA3QgxB5ibAlQg7AOg+AAQhQAAhVgYg");
	mask.setTransform(35.7,37.4);

	// Layer 1
	this.instance = new lib.Layer133_1();
	this.instance.parent = this;
	this.instance.setTransform(-118.5,-91.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.4,-37.4,179,129);


(lib.Layer57_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer57_2();
	this.instance.parent = this;
	this.instance.setTransform(-216,-100.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-216,-100.5,432,201);


(lib.Layer56copy2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer56copy2_1();
	this.instance.parent = this;
	this.instance.setTransform(-212,-104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-212,-104,424,208);


(lib.Layer56copy_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer56copy_1();
	this.instance.parent = this;
	this.instance.setTransform(-214,-114.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-214,-114.5,428,229);


(lib.Layer56_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer56_2();
	this.instance.parent = this;
	this.instance.setTransform(-216.5,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-216.5,-95,433,190);


(lib.Layer54_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer54_2();
	this.instance.parent = this;
	this.instance.setTransform(-213.5,-114);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-213.5,-114,427,228);


(lib.Layer22copy_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer22copy_1();
	this.instance.parent = this;
	this.instance.setTransform(-216,-100.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-216,-100.5,432,201);


(lib.Layer53_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer53_2();
	this.instance.parent = this;
	this.instance.setTransform(-115,-107.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115,-107.5,230,215);


(lib.Layer52_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer52_1();
	this.instance.parent = this;
	this.instance.setTransform(-133.5,-81.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.5,-81.5,267,163);


(lib.Layer51_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer51_2();
	this.instance.parent = this;
	this.instance.setTransform(-111,-97);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111,-97,222,194);


(lib.Layer50_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer50_2();
	this.instance.parent = this;
	this.instance.setTransform(-111,-92);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111,-92,222,184);


(lib.Layer49_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer49_2();
	this.instance.parent = this;
	this.instance.setTransform(-124,-103.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124,-103.5,248,207);


(lib.Layer48_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer48_2();
	this.instance.parent = this;
	this.instance.setTransform(-120,-101);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-101,240,202);


(lib.Layer23_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer23_1();
	this.instance.parent = this;
	this.instance.setTransform(-208,-362.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-208,-362.5,416,725);


(lib.Layer20_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer20_2();
	this.instance.parent = this;
	this.instance.setTransform(-125.5,-212.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125.5,-212.5,251,425);


(lib.star_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.star();
	this.instance.parent = this;
	this.instance.setTransform(-6,-7,0.261,0.261);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-7,13.9,14.9);


(lib.starmc11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ego8Ai2MAAAhFrMBR5AAAMAAABFrg");
	this.shape.setTransform(-77.6,-56.5,1.209,0.96);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-394.5,-270.7,633.9,428.5);


(lib.dummy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0033").ss(1,1,1).p("AiTiEIEnAAIAAEJIknAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiTCFIAAkJIEnAAIAAEJg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.8,-14.3,31.8,28.7);


(lib.dummy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0033").ss(1,1,1).p("AiTiEIEnAAIAAEJIknAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiTCFIAAkJIEnAAIAAEJg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.8,-14.3,31.8,28.7);


(lib.dummy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0033").ss(1,1,1).p("AiTiEIEnAAIAAEJIknAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiTCFIAAkJIEnAAIAAEJg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.8,-14.3,31.8,28.7);


(lib.dummy1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0033").ss(1,1,1).p("AiTiEIEnAAIAAEJIknAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiTCFIAAkJIEnAAIAAEJg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.8,-14.3,31.8,28.7);


(lib.dummy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0033").ss(1,1,1).p("AiTiEIEnAAIAAEJIknAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiTCFIAAkJIEnAAIAAEJg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.8,-14.3,31.8,28.7);


(lib.box8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0033").ss(1,1,1).p("AiTiEIEnAAIAAEJIknAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiTCFIAAkJIEnAAIAAEJg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.8,-14.3,31.8,28.7);


(lib.box7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0033").ss(1,1,1).p("AiTiEIEnAAIAAEJIknAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiTCFIAAkJIEnAAIAAEJg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.8,-14.3,31.8,28.7);


(lib.box6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0033").ss(1,1,1).p("AiTiEIEnAAIAAEJIknAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiTCFIAAkJIEnAAIAAEJg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.8,-14.3,31.8,28.7);


(lib.box5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0033").ss(1,1,1).p("AiTiEIEnAAIAAEJIknAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiTCFIAAkJIEnAAIAAEJg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.8,-14.3,31.8,28.7);


(lib.box4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0033").ss(1,1,1).p("AiTiEIEnAAIAAEJIknAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiTCFIAAkJIEnAAIAAEJg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.8,-14.3,31.8,28.7);


(lib.box3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0033").ss(1,1,1).p("AiTiEIEnAAIAAEJIknAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiTCFIAAkJIEnAAIAAEJg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.8,-14.3,31.8,28.7);


(lib.box2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0033").ss(1,1,1).p("AiTiEIEnAAIAAEJIknAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiTCFIAAkJIEnAAIAAEJg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.8,-14.3,31.8,28.7);


(lib.box1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0033").ss(1,1,1).p("AiTiEIEnAAIAAEJIknAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiTCFIAAkJIEnAAIAAEJg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.8,-14.3,31.8,28.7);


(lib.modmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pmod1();
	this.instance.parent = this;
	this.instance.setTransform(-311,-280);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-311,-280,620,558);


(lib.Layer81_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer81_1();
	this.instance.parent = this;
	this.instance.setTransform(-298,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-298,-48,596,96);


(lib.Layer80_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer80_1();
	this.instance.parent = this;
	this.instance.setTransform(-298,-48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-298,-48.5,596,97);


(lib.Layer79_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer79_1();
	this.instance.parent = this;
	this.instance.setTransform(-298,-48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-298,-48.5,596,97);


(lib.Layer78_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer78_1();
	this.instance.parent = this;
	this.instance.setTransform(-298,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-298,-48,596,96);


(lib.Layer77_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer77_1();
	this.instance.parent = this;
	this.instance.setTransform(-298,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-298,-48,596,96);


(lib.Layer76_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer76_1();
	this.instance.parent = this;
	this.instance.setTransform(-298,-58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-298,-58.5,596,117);


(lib.Layer74_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer74_1();
	this.instance.parent = this;
	this.instance.setTransform(-249,-104.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-249,-104.5,498,209);


(lib.Layer73_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer73_1();
	this.instance.parent = this;
	this.instance.setTransform(-249,-116.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-249,-116.5,498,233);


(lib.Layer72_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer72_1();
	this.instance.parent = this;
	this.instance.setTransform(-252,-138.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-252,-138.5,504,277);


(lib.Layer71_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer71_1();
	this.instance.parent = this;
	this.instance.setTransform(-250.5,-137.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-250.5,-137.5,501,275);


(lib.Layer70_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer70_1();
	this.instance.parent = this;
	this.instance.setTransform(-250,-104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-250,-104,500,208);


(lib.Layer69_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer69_1();
	this.instance.parent = this;
	this.instance.setTransform(-250.5,-103.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-250.5,-103.5,501,207);


(lib.Layer51_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer51_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-224.5,-503.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-224.5,-503.5,449,1007);


(lib.Layer50_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer50_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-224.5,-503.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-224.5,-503.5,449,1007);


(lib.Layer49_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer49_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-224.5,-503.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-224.5,-503.5,449,1007);


(lib.Layer48_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer48_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-224.5,-503.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-224.5,-503.5,449,1007);


(lib.Layer47_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer47_2();
	this.instance.parent = this;
	this.instance.setTransform(-224.5,-503.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-224.5,-503.5,449,1007);


(lib.Layer46_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer46_2();
	this.instance.parent = this;
	this.instance.setTransform(-224.5,-503.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-224.5,-503.5,449,1007);


(lib.Layer44_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer44_2();
	this.instance.parent = this;
	this.instance.setTransform(-170.5,-297);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-170.5,-297,341,594);


(lib.Layer43_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer43_2();
	this.instance.parent = this;
	this.instance.setTransform(-211,-304.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-211,-304.5,422,609);


(lib.Layer42_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer42_3();
	this.instance.parent = this;
	this.instance.setTransform(-191.5,-299.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-191.5,-299.5,383,599);


(lib.Layer41_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer41_3();
	this.instance.parent = this;
	this.instance.setTransform(-195,-314);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-195,-314,390,628);


(lib.Layer40_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer40_1();
	this.instance.parent = this;
	this.instance.setTransform(-211,-304.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-211,-304.5,422,609);


(lib.Layer39_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer39_3();
	this.instance.parent = this;
	this.instance.setTransform(-195,-314);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-195,-314,390,628);


(lib.Layer38_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer38_2();
	this.instance.parent = this;
	this.instance.setTransform(-191.5,-299.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-191.5,-299.5,383,599);


(lib.Layer37_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer37_2();
	this.instance.parent = this;
	this.instance.setTransform(-183,-306);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-183,-306,366,612);


(lib.Layer36_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer36_2();
	this.instance.parent = this;
	this.instance.setTransform(-188.5,-330.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188.5,-330.5,377,661);


(lib.Layer35_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer35_2();
	this.instance.parent = this;
	this.instance.setTransform(-176.5,-273.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-176.5,-273.5,353,547);


(lib.Layer34_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer34_2();
	this.instance.parent = this;
	this.instance.setTransform(-180,-294);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-180,-294,360,588);


(lib.Layer33_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer33_2();
	this.instance.parent = this;
	this.instance.setTransform(-170.5,-297);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-170.5,-297,341,594);


(lib.Layer89_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer89_1();
	this.instance.parent = this;
	this.instance.setTransform(-54,-54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54,-54,108,108);


(lib.Layer88copy_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer88copy_1();
	this.instance.parent = this;
	this.instance.setTransform(-68.5,-66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.5,-66,137,132);


(lib.Layer88_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer88_3();
	this.instance.parent = this;
	this.instance.setTransform(-68.5,-66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.5,-66,137,132);


(lib.Layer87_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer87_1();
	this.instance.parent = this;
	this.instance.setTransform(-74.5,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.5,-75,149,150);


(lib.Layer83copy_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer83copy_1();
	this.instance.parent = this;
	this.instance.setTransform(-74,-78.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,-78.5,148,157);


(lib.Layer83_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer83_1();
	this.instance.parent = this;
	this.instance.setTransform(-74,-78.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,-78.5,148,157);


(lib.Layer152_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer152();
	this.instance.parent = this;
	this.instance.setTransform(-51,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-29,102,58);


(lib.Layer151_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer151();
	this.instance.parent = this;
	this.instance.setTransform(-38.5,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.5,-20,77,40);


(lib.Layer150_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer150();
	this.instance.parent = this;
	this.instance.setTransform(-11,-4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-4.5,22,9);


(lib.Layer60_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer60();
	this.instance.parent = this;
	this.instance.setTransform(-18,-3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,-3,36,6);


(lib.Layer58_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer58_1();
	this.instance.parent = this;
	this.instance.setTransform(-32.5,-9.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({_off:true},3).wait(17).to({_off:false},0).to({_off:true},3).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Layer17copy_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer17copy();
	this.instance.parent = this;
	this.instance.setTransform(-10.5,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.5,-2,21,4);


(lib.Layer17_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer17_1();
	this.instance.parent = this;
	this.instance.setTransform(-11.5,-3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-3,23,6);


(lib.Layer16_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer16_1();
	this.instance.parent = this;
	this.instance.setTransform(-33.5,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.5,-10,67,20);


(lib.Layer15copy_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer15copy_1();
	this.instance.parent = this;
	this.instance.setTransform(-32.5,-5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.5,-5.5,65,11);


(lib.Layer12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer12();
	this.instance.parent = this;
	this.instance.setTransform(-78.5,-87);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.5,-87,157,174);


(lib.Layer11_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer11_1();
	this.instance.parent = this;
	this.instance.setTransform(-41,-189.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,-189.5,82,379);


(lib.Layer10_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer10();
	this.instance.parent = this;
	this.instance.setTransform(-57.5,-34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.5,-34.5,115,69);


(lib.Layer9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer9();
	this.instance.parent = this;
	this.instance.setTransform(-113.5,-274.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113.5,-274.5,227,549);


(lib.Layer7copy_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer7copy();
	this.instance.parent = this;
	this.instance.setTransform(-10.5,-5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.5,-5.5,21,11);


(lib.Layer6copy2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer6copy2();
	this.instance.parent = this;
	this.instance.setTransform(-25,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-7,50,14);


(lib.Layer6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer6();
	this.instance.parent = this;
	this.instance.setTransform(-17,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-5,34,10);


(lib.Layer5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer5();
	this.instance.parent = this;
	this.instance.setTransform(-43.5,-48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.5,-48.5,87,97);


(lib.Layer4copy_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer4copy();
	this.instance.parent = this;
	this.instance.setTransform(-11,-5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-5.5,22,11);


(lib.Layer4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer4();
	this.instance.parent = this;
	this.instance.setTransform(-12,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-6,24,12);


(lib.Layer27copy6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer27copy6();
	this.instance.parent = this;
	this.instance.setTransform(-116.5,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.5,-140,233,280);


(lib.Layer27copy_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer27copy();
	this.instance.parent = this;
	this.instance.setTransform(-175.5,-217.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175.5,-217.5,351,435);


(lib.Layer13copy2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer13copy2();
	this.instance.parent = this;
	this.instance.setTransform(-147.5,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147.5,-180,295,360);


(lib.Layer13_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer13();
	this.instance.parent = this;
	this.instance.setTransform(-149,-268);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149,-268,298,536);


(lib.Group1copy5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group1copy5();
	this.instance.parent = this;
	this.instance.setTransform(-225.5,-266.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225.5,-266.5,451,533);


(lib.Group1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group1();
	this.instance.parent = this;
	this.instance.setTransform(-185.5,-285);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-185.5,-285,371,570);


(lib.Layer149_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer149();
	this.instance.parent = this;
	this.instance.setTransform(-42,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-14.5,84,29);


(lib.Layer148_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer148();
	this.instance.parent = this;
	this.instance.setTransform(-42,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-14.5,84,29);


(lib.Layer147_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer147();
	this.instance.parent = this;
	this.instance.setTransform(-42,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-14.5,84,29);


(lib.Layer146_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer146();
	this.instance.parent = this;
	this.instance.setTransform(-42,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-14.5,84,29);


(lib.Layer145_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer145();
	this.instance.parent = this;
	this.instance.setTransform(-42,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-14.5,84,29);


(lib.Layer143_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer143();
	this.instance.parent = this;
	this.instance.setTransform(-44,-16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-16.5,88,33);


(lib.Layer142_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer142();
	this.instance.parent = this;
	this.instance.setTransform(-38,-25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-25.5,76,51);


(lib.Layer141_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer141();
	this.instance.parent = this;
	this.instance.setTransform(-38,-25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-25.5,76,51);


(lib.Layer140_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AEuFhQg3gBhCgQQgtgLhJgXQhEgYgngRQg7gZgqgdQhCgvg/hSQghgthFhuQhAhmgpgzIgLgNQASgnA7geQBMgoBLgBQBVgBAyA0QAOAOAXAjQAXAiAPAOQA0AxBuADIBfAAQA4AAAlAIQA/AOAzAtQAyAtAWA8QALAggBAeQgBAigSAXQgFAHgTASQgRAQgFAMQgIARADAkQADAmgGAQQgKAeglAOQgbAMglAAIgGgBg");
	mask.setTransform(80.3,10.8);

	// Layer 1
	this.instance = new lib.Layer140();
	this.instance.parent = this;
	this.instance.setTransform(-115.5,-34);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(31,-24.6,84.5,58.6);


(lib.Layer139_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer139();
	this.instance.parent = this;
	this.instance.setTransform(-38,-25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-25.5,76,51);


(lib.Layer138_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AB4EtQhtgWhZg7IhNg4QgugggkgPIgpgQQgWgLgLgQQgIgMgEgWIgHgkQgGgUgUggQgZgngGgOQgcg9AZhPQAIgaANgbQAmgXAyAIQA7AKAdAuIANAYQAIAPAJAHQAWAUAygDQBAgEAQAEQASAEAdAVQAiAYAOAGQAhANAwgDQAcgCA3gIQAugGAnANQAsAPAOAjQAPAmgkBOQgjBPAQAmQACAFAiAwQAWAfgIAXQgJAeg2AKQg0AKg0AAQg5AAg5gLg");
	mask.setTransform(4.9,11.6);

	// Layer 1
	this.instance = new lib.Layer138();
	this.instance.parent = this;
	this.instance.setTransform(-42,-36.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.4,-19.6,77.5,56.2);


(lib.Layer133_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AEuFhQg3gBhCgQQgtgLhJgXQhEgYgngRQg7gZgqgdQhCgvg/hSQghgthFhuQhAhmgpgzIgLgNQATgmA6gfQBMgoBLgBQBVgBAyA0QAOAOAXAjQAXAiAPAOQA0AxBuADIBfAAQA4AAAlAIQA/AOAzAtQAyAtAWA8QALAggBAeQgBAigSAXQgFAHgTASQgRAQgFAMQgIARADAkQADAmgGAQQgKAeglAOQgbAMglAAIgGgBg");
	mask_1.setTransform(75.6,16.6);

	// Layer 1
	this.instance_1 = new lib.Layer133();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-116,-43.5);

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(26.3,-18.8,89.7,62.3);


(lib.Layer57_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer57_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-107,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107,-50,214,100);


(lib.Layer56copy2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer56copy2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-105.5,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.5,-52,211,104);


(lib.Layer56copy_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer56copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-106,-57);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106,-57,212,114);


(lib.Layer56_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer56_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-107.5,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.5,-47,215,94);


(lib.Layer54_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer54_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-105.5,-56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.5,-56.5,211,113);


(lib.Layer22copy_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer22copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-107,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107,-50,214,100);


(lib.Layer53_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer53_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-57,-53.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57,-53.5,114,107);


(lib.Layer52_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer52();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-66,-40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66,-40.5,132,81);


(lib.Layer51_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Layer51_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-55.5,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.5,-48,111,96);


(lib.Layer50_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Layer50_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-55,-45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55,-45.5,110,91);


(lib.Layer49_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Layer49_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-61.5,-51.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-51.5,123,103);


(lib.Layer48_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Layer48_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-59.5,-50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.5,-50.5,119,101);


(lib.Layer47_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer47_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-103,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103,-180,206,360);


(lib.Layer46_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer46_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-103,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103,-180,206,360);


(lib.Layer45_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer45();
	this.instance.parent = this;
	this.instance.setTransform(-103,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103,-180,206,360);


(lib.Layer44_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer44_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-103,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103,-180,206,360);


(lib.Layer43_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer43_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-103,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103,-180,206,360);


(lib.Layer23_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer23();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-103,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103,-180,206,360);


(lib.Layer42copy_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer42copy();
	this.instance.parent = this;
	this.instance.setTransform(-96.5,-102.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.5,-102.5,193,205);


(lib.Layer42_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer42_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-96.5,-102.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.5,-102.5,193,205);


(lib.Layer41copy_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer41copy();
	this.instance.parent = this;
	this.instance.setTransform(-93.5,-124);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.5,-124,187,248);


(lib.Layer41_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer41_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-93,-124);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93,-124,186,248);


(lib.Layer39_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer39_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-96,-128);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96,-128,192,256);


(lib.Layer25_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer25();
	this.instance.parent = this;
	this.instance.setTransform(-65,-97);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65,-97,130,194);


(lib.Layer38_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer38_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-62.5,-115.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.5,-115.5,125,231);


(lib.Layer37_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer37_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-62.5,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.5,-105,125,210);


(lib.Layer36_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer36_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-61,-132.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61,-132.5,122,265);


(lib.Layer35_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer35_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-63,-134);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-134,126,268);


(lib.Layer34_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer34_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-62.5,-115.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.5,-115.5,125,231);


(lib.Layer33_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer33_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-70,-127);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70,-127,140,254);


(lib.Layer32_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer32();
	this.instance.parent = this;
	this.instance.setTransform(-62,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62,-105,124,210);


(lib.Layer31_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer31_1();
	this.instance.parent = this;
	this.instance.setTransform(-63,-100.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-100.5,126,201);


(lib.Layer30_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer30();
	this.instance.parent = this;
	this.instance.setTransform(-63.5,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.5,-125,127,250);


(lib.Layer29_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer29();
	this.instance.parent = this;
	this.instance.setTransform(-63,-134);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-134,126,268);


(lib.Layer28_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer28_1();
	this.instance.parent = this;
	this.instance.setTransform(-61,-132.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61,-132.5,122,265);


(lib.Layer20_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer20_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-62.5,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.5,-105,125,210);


(lib.Layer137_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer137();
	this.instance.parent = this;
	this.instance.setTransform(-27.5,-67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.5,-67.5,55,135);


(lib.Layer135_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer135();
	this.instance.parent = this;
	this.instance.setTransform(-30,-79);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-79,60,158);


(lib.Layer88_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer88_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-32,-73);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-73,64,146);


(lib.Layer86_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer86();
	this.instance.parent = this;
	this.instance.setTransform(-30,-79);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-79,60,158);


(lib.Layer85_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer85();
	this.instance.parent = this;
	this.instance.setTransform(-27.5,-67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.5,-67.5,55,135);


(lib.Layer82_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer82();
	this.instance.parent = this;
	this.instance.setTransform(-21.5,-64.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-64.5,43,129);


(lib.VectorxcvcxSmartObjectcopy9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.VectorxcvcxvSmartObjectcopy9();
	this.instance.parent = this;
	this.instance.setTransform(-512,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-512,-300,1024,600);


(lib.vbTween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.st2();
	this.instance.parent = this;
	this.instance.setTransform(-22,-23,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-23,45.5,45.5);


(lib.Symtthjklbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol18bnbvnvb();
	this.instance.parent = this;
	this.instance.setTransform(-1112.4,-1289,4.587,4.587);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1112.4,-1289,2224.9,2578.1);


(lib.Symcvcxbol11copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 7
	this.instance = new lib.lev20001();
	this.instance.parent = this;
	this.instance.setTransform(-188,-265);

	this.instance_1 = new lib.lev20002();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-188,-265);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188,-265,385,537);


(lib.Symcvcxbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 5
	this.instance = new lib.ticlll();
	this.instance.parent = this;
	this.instance.setTransform(-91,-13,0.729,0.729);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer 2
	this.instance_1 = new lib.lev1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-191,-265);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-191,-265,422,542);


(lib.Layvbvber3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Laybvber3();
	this.instance.parent = this;
	this.instance.setTransform(-511,-297.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-511,-297.5,1022,595);


(lib.Lavbvbyer5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layvbver5();
	this.instance.parent = this;
	this.instance.setTransform(-512,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-512,-300,1024,600);


(lib.bvnvTween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DEE4E7").s().p("AhPTXQgSgBgKgQQgEgJAAgKIALitIh/BsQgLAKgOgCQgOAAgJgLIgEgGQgGgKACgMQACgNAKgHICxiWIAFhRIh/BsQgLAJgOgBQgOgCgJgKIgEgGQgFgKACgNQACgLAJgIICyiWIAFhRIiABrQgKAKgOgCQgOgBgJgLIgEgFQgGgKACgMQACgNAKgHICxiWIANjOIi0CCQgSANgXgFQgSgEgMgRQgLgQACgTIAfkIIjfB8Ig8DhQgEANgMAHQgMAHgNgEQgPgDgGgNQgHgLADgOIArihIhHAnIg7DhQgEANgMAIQgMAHgOgEQgNgDgIgNQgGgNADgNIArihIhHAoIg8DgQgDANgMAIQgMAHgOgEQgOgEgHgMQgHgMAEgNIAqihIh9BFQgNAHgNgDQgNgEgHgNQgHgMAEgOQADgNANgHIB9hGIifgxQgNgEgHgMQgHgLAEgPQAEgNANgHQAMgHAOAEIDeBEIBHgnIiggxQgNgFgGgLQgIgNAFgNQAEgOAMgHQANgGANAEIDeBEIBHgoIifgwQgNgEgHgMQgHgNAEgOQAEgNANgHQAMgGAOAEIDeBEIDch7IjuhsQgPgGgIgPQgLgSAHgWQAHgVAVgJIDxhnIjaiAIjgA/QgLADgLgFQgLgEgGgKIgDgIQgDgNAGgMQAHgNAOgEICggtIhGgpIjfA/QgMADgLgEQgLgFgFgKIgDgHQgEgOAHgMQAHgMANgFIChgtIhGgoIjgA/QgLADgLgFQgLgFgGgKIgDgHQgDgOAGgMQAHgMAOgEIChgtIh9hJQgHgEgFgIQgJgSAJgRQAHgMAOgDQAOgDAMAHIB8BIIgniiQgEgOAIgLQAHgNAOgDQANgDAMAHQAMAHAEAOIA2DiIBGApIgniiQgDgOAHgMQAHgMAOgEQAOgDAMAIQAMAHADAOIA3DiIBGApIgniiQgEgOAIgMQAHgNAOgCQANgEAMAIQAMAHAEAOIA2DhIDcCBIgakIQgBgPAHgNQAHgOANgHQANgIAPABQAPABANAJIDaCjIAOj8IibisIgEgGQgGgKACgMQACgMAJgIQAKgKAOABQAOABAKAKIBuB7IAFhQIiaitIgFgFQgFgKABgNQACgLAJgIQAKgKAOABQAOABAKAKIBuB7IAGhRIibirIgFgHQgFgKABgLQACgNAJgHQALgKAOABQAOAAAJALIBvB7IAJiPQABgPAKgJQALgJAOABQAOABAJAKQAKALgBAOIgKCQICAhsQALgJAOABQAOABAJALQAJAKgBAOQgBAOgLAKIiyCWIgFBRIB/hsQALgJAOABQAOABAJALQAJALgBAOQgBAOgLAIIixCXIgFBRIB/hsQALgJAOABQAOABAJALQAJALgBAOQgBANgLAKIixCWIgQDvIDPiVQASgNAXAFQATAEALAQQAMARgCATIggEIIDHhuIA7jhQAEgOAMgGQAMgHAOADQANAEAHAMQAHAMgDAOIgrChIBHgoIA8jgQADgOAMgHQAMgHAOAEQAOAEAHAMQAHALgEAOIgrChIBHgnIA8jgQAEgOAMgHQAMgHANADQAOAEAHAMQAHAMgDAOIgrChICWhTQANgHANAEQAOADAHANQAGAMgDAOQgEANgMAHIiXBTICfAyQAOAEAGAMQAHAMgEAOQgEANgNAHQgMAGgNgDIjfhEIhHAnICgAwQANAFAHAMQAHANgEANQgEAOgNAGQgMAHgOgEIjehEIhHAnICgAxQANAEAHANQAGAMgEAOQgEANgMAHQgNAGgNgEIjehEIjEBtIDuBsQARAIAIASQAIASgGARQgHAVgVAJIjxBnIDCByIDfg/QAOgEAMAGQANAIADANQAEAOgHAMQgHANgNADIihAtIBGApIDgg/QANgDANAGQAMAHAEANQAEAOgHAMQgHANgOAEIigAtIBGApIDfg/QAOgEAMAHQAMAHAEANQAEAOgHAMQgHANgNADIihAuICVBXQAMAHAEAOQADANgHAMQgHAMgOAEQgNADgMgHIiVhXIAnCiQADAOgHAMQgHAMgOADQgLADgLgFQgKgEgGgKIgDgJIg3jhIhGgpIAnCiQAEANgIAMQgHAMgOAEQgLACgKgEQgLgFgFgKIgEgJIg2jiIhGgoIAnCiQADAOgHAMQgHAMgOADQgLADgLgFQgKgFgGgJIgDgJIg3jiIjDhyIAaEIQABAPgHANQgHAOgNAHQgNAIgPgCQgPAAgMgJIjzi1IgOEAICaCsQAKAJgBAOQgBAOgKALQgKAJgOgBQgOAAgKgLIhuh7IgGBRICbCsQAKAKgBAOQgBAOgKAJQgLAKgOgBQgOgBgJgKIhvh7IgFBRICbCsQAJAKgBAOQAAAOgLAKQgKAJgOAAQgOgCgKgJIhuh8IgLCsQgBAOgLAKQgJAIgNAAIgCAAgAEIG2IgckTIhBgmIAIBVQABANgFALQgGALgLAGQgKAHgNgCQgMgBgKgGIhchFIgFBRQANACAKAIIDhCngAjVCeIghETIDCiLIAFhPIgsAfQgQALgSgEQgPgEgKgMQgJgOACgPIAKhXgAAPCFIB2BYQAEADAEgCQAFgDgBgFIgOiSQgBgFAGgDICHg6QAEgCAAgDQABgGgFgBIiGg9QgFgCABgGIARiRQABgGgFgCQgEgDgEADIh4BVQgEAEgFgEIh0hXQgEgEgEADQgFADABAEIAOCTQABAFgFADIiHA6QgFABAAAGQAAAFAEACICGA6QAGADgBAGIgSCRQAAAGAEACQAFACAEgCIB1hWQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAAAAABAAQAAAAABABQABAAAAAAQABABAAAAgADQhMIBNAjQAOAHAHAPQAGAPgFANQgGAQgRAJIhOAgIBCAoID8hqIj5hxgAnygLID5BvIBDglIhNgjQgMgGgHgMQgJgOAGgSQAGgSARgGIBOgiIhCgmgACXkKQAPADAKAOQAKANgCAQIgLBWIBDglIAgkTIjcCeIgFBQIBHgzQALgJANAAIAJACgAjSiwIBCAmIgJhWQgBgMAGgLQAFgLALgHQALgGAMABQANABAKAIIBDAyIAEhKIjeimg");
	this.shape.setTransform(0,0,0.338,0.338);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.7,-41.9,75.6,83.8);


(lib.bbTween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.st1();
	this.instance.parent = this;
	this.instance.setTransform(-34,-33,1.32,1.32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34,-33,68.7,66);


(lib.Layer16fghjk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer16ghjk();
	this.instance.parent = this;
	this.instance.setTransform(-109,-262.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109,-262.5,218,525);


(lib.Layer97_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer97_1();
	this.instance.parent = this;
	this.instance.setTransform(-145.5,-115.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-145.5,-115.5,291,231);


(lib.Layer96_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer96_1();
	this.instance.parent = this;
	this.instance.setTransform(-145,-123);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-145,-123,290,246);


(lib.Layer95_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer95_1();
	this.instance.parent = this;
	this.instance.setTransform(-168,-130.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168,-130.5,336,261);


(lib.Layer94_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer94_1();
	this.instance.parent = this;
	this.instance.setTransform(-173,-129);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-173,-129,346,258);


(lib.Layer93_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer93_1();
	this.instance.parent = this;
	this.instance.setTransform(-150.5,-130.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.5,-130.5,301,261);


(lib.Layer92_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer92_1();
	this.instance.parent = this;
	this.instance.setTransform(-169.5,-118);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-169.5,-118,339,236);


(lib.Layer142_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer142_1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,209,141);


(lib.Layer141_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer141_1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,209,141);


(lib.Layer140_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AiOUqQkrhEj4ivQiyh9iMirQiLiqhXjHQhmjmgzlCQgRhwgwnSQgUjEgYi3QAthrB/hLQBUgxBmgVQBmgUBhANQCYAUDaBhICyBSQBpAvBNAaQCFAvC9AjQBuAUDdAjQDCAiCAAoQCpA1B+BUQCdBoBqCmQBlCeAqDBQAqC8gVDCQgVDGhUCqQiFEMj8C7Qj4C4krA7QiDAZiGAAQikAAilgmg");
	mask_1.setTransform(542.6,111.2);

	// Layer 1
	this.instance_1 = new lib.Layer140_1();
	this.instance_1.parent = this;

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(393,0,240.1,186);


(lib.Layer139_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer139_1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,209,141);


(lib.Layer138_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer138_1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,239,203);


(lib.Layer133_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AiOUqQkrhEj4ivQiyh9iMirQiLiqhXjHQhmjmgzlCQgRhwgwnSQgUjEgYi3QAthrB/hLQBUgxBmgVQBmgUBhANQCYAUDaBhICyBSQBpAvBNAaQCFAvC9AjQBuAUDdAjQDCAiCAAoQCpA1B+BUQCdBoBqCmQBlCeAqDBQAqC8gVDCQgVDGhUCqQiFEMj8C7Qj4C4krA7QiDAZiGAAQikAAilgmg");
	mask_2.setTransform(542.6,200.6);

	// Layer 1
	this.instance_2 = new lib.Layer133_2();
	this.instance_2.parent = this;

	this.instance_2.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(393,64.5,242.1,197.5);


(lib.Layer58_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer58_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-226,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-226,-250,452,500);


(lib.Layer57_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Layer57_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-226,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-226,-250,452,500);


(lib.Layer56_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Layer56_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-224.5,-219.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-224.5,-219.5,449,439);


(lib.Layer55_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer55_1();
	this.instance.parent = this;
	this.instance.setTransform(-224.5,-219.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-224.5,-219.5,449,439);


(lib.Layer54_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Layer54_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-224.5,-206.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-224.5,-206.5,449,413);


(lib.Layer53_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Layer53_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-224.5,-206.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-224.5,-206.5,449,413);


(lib.Layer42copy_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer42copy_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-197.5,-209);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-197.5,-209,395,418);


(lib.Layer42_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Layer42_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-197.5,-209);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-197.5,-209,395,418);


(lib.Layer41copy_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer41copy_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-190,-255);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-190,-255,380,510);


(lib.Layer41_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Layer41_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-190.5,-253);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-190.5,-253,381,506);


(lib.Layer39_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Layer39_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-195,-265);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-195,-265,390,530);


(lib.Layer25_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer25_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-132.5,-201);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132.5,-201,265,402);


(lib.Symbol24copy5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arr20001();
	this.instance.parent = this;
	this.instance.setTransform(-27,-34,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-34,60.8,75.1);


(lib.Symbol24copy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arr10001();
	this.instance.parent = this;
	this.instance.setTransform(-27,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-35,60,77);


(lib.Layer13_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer13_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-59,-59.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59,-59.5,118,119);


(lib.Symbol40_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol40();
	this.instance.parent = this;
	this.instance.setTransform(-252,-79);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-252,-79,504,158);


(lib.Layer137_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer137_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-78.5,-190.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.5,-190.5,157,381);


(lib.Layer135_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer135_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-85,-225);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85,-225,170,450);


(lib.Layer88_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Layer88_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-90,-205);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-205,180,410);


(lib.Layer86_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer86_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-85,-225);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85,-225,170,450);


(lib.Layer85_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer85_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-78.5,-190.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.5,-190.5,157,381);


(lib.Layer82_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer82_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-60.5,-183);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.5,-183,121,366);


(lib.Layer97_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer97();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-53,-42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53,-42.5,106,85);


(lib.Layer96_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer96();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-53,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53,-45,106,90);


(lib.Layer95_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer95();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-61.5,-47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-47.5,123,95);


(lib.Layer94_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer94();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-63,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-47,126,94);


(lib.Layer93_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer93();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-55,-47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55,-47.5,110,95);


(lib.Layer92_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer92();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-62,-43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62,-43.5,124,87);


(lib.Layer91_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer91();
	this.instance.parent = this;
	this.instance.setTransform(-56.5,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.5,-26,113,52);


(lib.Layer90_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer90();
	this.instance.parent = this;
	this.instance.setTransform(-42.5,-21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-21.5,85,43);


(lib.Layer68_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer68();
	this.instance.parent = this;
	this.instance.setTransform(-28,-13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-13,56,26);


(lib.Layer31copy_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer31copy();
	this.instance.parent = this;
	this.instance.setTransform(-72,-303);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-303,144,606);


(lib.Layer31_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer31();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-50,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-190,100,380);


(lib.Layer28copy_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer28copy();
	this.instance.parent = this;
	this.instance.setTransform(-22,-59.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-59.5,44,119);


(lib.Layer28_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer28();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-39.5,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-47,79,94);


(lib.Layer20_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Layer20();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-26,-11.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({_off:false},0).to({_off:true},3).wait(17).to({_off:false},0).to({_off:true},3).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Layer19_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer19();
	this.instance.parent = this;
	this.instance.setTransform(-13,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13,-6,26,12);


(lib.Layer18copy2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer18copy2();
	this.instance.parent = this;
	this.instance.setTransform(-9,-8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-8,18,16);


(lib.Layer18copy_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer18copy();
	this.instance.parent = this;
	this.instance.setTransform(-11.5,-13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-13,23,26);


(lib.Layer17_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-27,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-5,54,10);


(lib.Layer16_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-25,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-10,50,20);


(lib.Layer15copy_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer15copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-4.5,-5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-5.5,9,11);


(lib.Layer15_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer15();
	this.instance.parent = this;
	this.instance.setTransform(-7,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-6,14,12);


(lib.Layer11_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-56.5,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.5,-25,113,50);


(lib.Layer8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer8();
	this.instance.parent = this;
	this.instance.setTransform(-58,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,-29,116,58);


(lib.Layer3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer3();
	this.instance.parent = this;
	this.instance.setTransform(-11.5,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-6,23,12);


(lib.Layer1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer1();
	this.instance.parent = this;
	this.instance.setTransform(-42,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-49,84,98);


(lib.Layer67_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer67();
	this.instance.parent = this;
	this.instance.setTransform(-122.5,-114.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.5,-114.5,245,229);


(lib.Layer66_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer66();
	this.instance.parent = this;
	this.instance.setTransform(-151.5,-132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151.5,-132,303,264);


(lib.Layer65_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer65();
	this.instance.parent = this;
	this.instance.setTransform(-137.5,-92);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.5,-92,275,184);


(lib.Layer64_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer64();
	this.instance.parent = this;
	this.instance.setTransform(-147.5,-87.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147.5,-87.5,295,175);


(lib.Layer62_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer62();
	this.instance.parent = this;
	this.instance.setTransform(-120,-84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-84.5,240,169);


(lib.Layer59_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer59();
	this.instance.parent = this;
	this.instance.setTransform(-80,-97.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-97.5,160,195);


(lib.Layer74_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer74();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-96,-40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96,-40.5,192,81);


(lib.Layer73_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer73();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-96,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96,-45,192,90);


(lib.Layer72_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer72();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-97.5,-54);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.5,-54,195,108);


(lib.Layer71_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer71();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-97,-53);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97,-53,194,106);


(lib.Layer70_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer70();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-96.5,-40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.5,-40.5,193,81);


(lib.Layer69_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer69();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-97,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97,-40,194,80);


(lib.Layer44_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Layer44();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-66,-114.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66,-114.5,132,229);


(lib.Layer43_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Layer43();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-81.5,-117.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.5,-117.5,163,235);


(lib.Layer42_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Layer42();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-74,-116);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,-116,148,232);


(lib.Layer41_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Layer41();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-75.5,-121.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.5,-121.5,151,243);


(lib.Layer40_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer40();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-81.5,-117.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.5,-117.5,163,235);


(lib.Layer39_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Layer39();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-75.5,-121.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.5,-121.5,151,243);


(lib.Layer38_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Layer38();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-74,-116);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,-116,148,232);


(lib.Layer37_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Layer37();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-71,-118.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71,-118.5,142,237);


(lib.Layer36_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Layer36();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-73,-127.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73,-127.5,146,255);


(lib.Layer35_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Layer35();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-68,-105.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68,-105.5,136,211);


(lib.Layer34_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Layer34();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-69.5,-113.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.5,-113.5,139,227);


(lib.Layer33_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Layer33();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-66,-114.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66,-114.5,132,229);


(lib.Layer51_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Layer51();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-87,-194.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87,-194.5,174,389);


(lib.Layer50_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Layer50();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-87,-194.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87,-194.5,174,389);


(lib.Layer49_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Layer49();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-87,-194.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87,-194.5,174,389);


(lib.Layer48_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Layer48();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-87,-194.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87,-194.5,174,389);


(lib.Layer47_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Layer47();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-87,-194.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87,-194.5,174,389);


(lib.Layer46_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Layer46();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-87,-194.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87,-194.5,174,389);


(lib.Layer81_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer81();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-115,-18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115,-18.5,230,37);


(lib.Layer80_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer80();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-115,-18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115,-18.5,230,37);


(lib.Layer79_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer79();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-115,-18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115,-18.5,230,37);


(lib.Layer78_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer78();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-115,-18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115,-18.5,230,37);


(lib.Layer77_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer77();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-115,-18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115,-18.5,230,37);


(lib.Layer76_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer76();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-115,-22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115,-22.5,230,45);


(lib.Layer58_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Layer58();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-122,-134);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122,-134,244,268);


(lib.Layer57_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Layer57();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-122,-134);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122,-134,244,268);


(lib.Layer56_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Layer56();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-121.5,-117);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.5,-117,243,234);


(lib.Layer55_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer55();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-121.5,-117);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.5,-117,243,234);


(lib.Layer54_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Layer54();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-121.5,-109.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.5,-109.5,243,219);


(lib.Layer53_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Layer53();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-121.5,-109.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.5,-109.5,243,219);


(lib.Layer89_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer89();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-21,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-21,42,42);


(lib.Layer88copy_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer88copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-26.5,-25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-25.5,53,51);


(lib.Layer88_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Layer88();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-26.5,-25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-25.5,53,51);


(lib.Layer87_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer87();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-28.5,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.5,-29,57,58);


(lib.Layer83copy_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer83copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-29,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29,-30,58,60);


(lib.Layer83_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer83();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-29,-30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29,-30.5,58,61);


(lib.Symbol60nn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol60mm();
	this.instance.parent = this;
	this.instance.setTransform(-82.5,-82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.5,-82,165,164);


(lib.Symbol18nn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol18mm();
	this.instance.parent = this;
	this.instance.setTransform(-241,-278.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-241,-278.5,482,557);


(lib.__Camera__ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Tween17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArtO1QjHAAAAi6IAA31QAAi6DHAAIXbAAQDIAAgBC6IAAX1QABC6jIAAg");
	mask.setTransform(0,-0.5);

	// Layer 1
	this.instance = new lib.Symbol15();
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
p.nominalBounds = new cjs.Rectangle(0,-1,200,200);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(96,96,1,1,0,0,0,96,96);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,192,192);


(lib.Symbol32copy3 = function(mode,startPosition,loop) {
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
p.nominalBounds = new cjs.Rectangle(-186.6,-2,195.5,195.6);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween17("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(95,95);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.02,scaleY:1.02},11).to({scaleX:1,scaleY:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.4,190,190);


(lib.vb2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.kk_6 = new lib.Layer96_2();
	this.kk_6.parent = this;
	this.kk_6.setTransform(5.2,474.9,0.358,0.358,0,0,0,0,0.1);
	this.kk_6.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.kk_5 = new lib.Layer92_2();
	this.kk_5.parent = this;
	this.kk_5.setTransform(-8.6,354.7,0.373,0.373);
	this.kk_5.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.kk_4 = new lib.Layer94_2();
	this.kk_4.parent = this;
	this.kk_4.setTransform(-7.9,234.3,0.373,0.373);
	this.kk_4.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.kk_3 = new lib.Layer95_2();
	this.kk_3.parent = this;
	this.kk_3.setTransform(0.9,124.4,0.358,0.358,0,0,0,0,0.1);
	this.kk_3.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.kk_2 = new lib.Layer93_2();
	this.kk_2.parent = this;
	this.kk_2.setTransform(1.4,0.9,0.373,0.373);
	this.kk_2.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.kk_1 = new lib.Layer97_2();
	this.kk_1.parent = this;
	this.kk_1.setTransform(2.3,-124,0.373,0.373,0,0,0,0,-0.1);
	this.kk_1.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.kk_1},{t:this.kk_2},{t:this.kk_3},{t:this.kk_4},{t:this.kk_5},{t:this.kk_6}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.4,-172,151.2,703.8);


(lib.vb2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.kk6 = new lib.Layer53_4();
	this.kk6.parent = this;
	this.kk6.setTransform(0.8,471.1,0.471,0.471,0,0,0,0.1,0);

	this.kk5 = new lib.Layer52_2();
	this.kk5.parent = this;
	this.kk5.setTransform(1.1,351.3,0.489,0.489,0,0,0,0.2,0.3);

	this.kk4 = new lib.Layer51_4();
	this.kk4.parent = this;
	this.kk4.setTransform(-1.5,237.3,0.49,0.49);

	this.kk3 = new lib.Layer50_4();
	this.kk3.parent = this;
	this.kk3.setTransform(4.5,127.7,0.454,0.454,0,0,0,0.2,0);

	this.kk2 = new lib.Layer49_4();
	this.kk2.parent = this;
	this.kk2.setTransform(0.1,2,0.45,0.45,0,0,0,0.1,0);

	this.kk1 = new lib.Layer48_4();
	this.kk1.parent = this;
	this.kk1.setTransform(-2,-125.7,0.432,0.432);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.kk1},{t:this.kk2},{t:this.kk3},{t:this.kk4},{t:this.kk5},{t:this.kk6}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.3,-169.4,130.6,691.2);


(lib.Symbol19copyb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.redftSymbol21();
	this.instance.parent = this;
	this.instance.setTransform(308.4,196.6,0.758,0.758);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:4.4,y:7.2},5).to({scaleX:0.15,scaleY:0.15,rotation:360,x:1342.6,y:811.8,alpha:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(269.4,159.4,78.1,74.3);


(lib.rtySymbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.redftSymbol21();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.57,scaleY:0.57,rotation:540,x:283.9,y:210.4},5).to({scaleX:0.15,scaleY:0.15,rotation:360,x:482.2,y:445.7,alpha:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.3,-49,103,98);


(lib.shoe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{end:6});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

	// Layer 1
	this.instance = new lib.Layer56_4();
	this.instance.parent = this;
	this.instance.setTransform(-1.5,19.5);

	this.instance_1 = new lib.Layer56copy2_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-4,10.5);

	this.instance_2 = new lib.Layer22copy_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(2,14);

	this.instance_3 = new lib.Layer54_4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-1.5,0.5);

	this.instance_4 = new lib.Layer56copy_2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-1,0);

	this.instance_5 = new lib.Layer57_4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(2,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-218,-75.5,433,190);


(lib.jacket1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"end":6});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

	// Layer 1
	this.instance = new lib.Layer25_3();
	this.instance.parent = this;
	this.instance.setTransform(-39.5,-49.5,0.989,0.973);

	this.instance_1 = new lib.Layer42copy_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-3.2,-51.3,0.938,0.936,0,0,0,0.1,0.1);

	this.instance_2 = new lib.Layer41copy_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-2.3,-16.9,0.921,0.913,0,0,0,0.1,0.1);

	this.instance_3 = new lib.Layer39_6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-1.8,-14.3,0.896,0.88,0,0,0,0.1,0.1);

	this.instance_4 = new lib.Layer42_6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(4.4,-43.6,0.968,0.966,0,0,0,0.1,0.1);

	this.instance_5 = new lib.Layer41_6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0.6,-20.4,0.928,0.931,0,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-170.5,-245,262,390.9);


(lib.star_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.star_5();
	this.instance.parent = this;
	this.instance.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:22.6},3).to({scaleX:1,scaleY:1,rotation:52.7},4).to({scaleX:1,scaleY:1,rotation:75.2,x:0.1},3).to({rotation:105.3,x:0},4).to({scaleX:1,scaleY:1,rotation:112.8,y:0},1).to({scaleX:1,scaleY:1,rotation:120.4,x:0.1},1).to({scaleX:1,scaleY:1,rotation:143.1,x:0},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-6.9,13.9,14.9);


(lib.star_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 15
	this.instance = new lib.star_4();
	this.instance.parent = this;
	this.instance.setTransform(-18.5,-24.2,0.996,0.996,5.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({scaleX:0.82,scaleY:0.82,rotation:5,x:-44.9,y:-25.3},2).to({scaleX:0.64,scaleY:0.64,x:-71.2,y:-26.5},3).to({scaleX:0.61,scaleY:0.61,x:-75.3,y:-26.6},1).to({scaleX:0.59,scaleY:0.59,x:-78.9,y:-26.8},1).to({scaleX:0.56,scaleY:0.56,x:-82.5,y:-27},1).to({scaleX:0.5,scaleY:0.5,rotation:5.2,x:-91.7,y:-27.3},3).to({_off:true},1).wait(1));

	// Layer 13
	this.instance_1 = new lib.star_4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(36.6,-34,0.997,0.997,159.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({scaleX:0.78,scaleY:0.78,rotation:159.2,x:65.8,y:-46.6},3).to({scaleX:0.64,scaleY:0.64,x:85,y:-55},3).to({scaleX:0.61,scaleY:0.61,x:88.8,y:-56.7},1).to({scaleX:0.56,scaleY:0.56,x:95.4,y:-59.6},2).to({scaleX:0.5,scaleY:0.5,rotation:159.1,x:103.9,y:-63.3},3).to({_off:true},1).wait(3));

	// Layer 11
	this.instance_2 = new lib.star_4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(12.8,4.7,0.997,0.997,-95.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({scaleX:0.78,scaleY:0.78,rotation:-95,x:17,y:36.1},3).to({scaleX:0.61,scaleY:0.61,x:20.4,y:61.1},4).to({scaleX:0.56,scaleY:0.56,x:21.4,y:68.1},2).to({scaleX:0.5,scaleY:0.5,rotation:-95.1,x:22.7,y:77.4},3).to({_off:true},1).wait(5));

	// Layer 9
	this.instance_3 = new lib.star_4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-6.8,-47.8,0.998,0.998,58.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.78,scaleY:0.78,rotation:58.9,x:-24.5,y:-74.2},3).to({scaleX:0.64,scaleY:0.64,x:-36.2,y:-91.6},3).to({scaleX:0.61,scaleY:0.61,x:-38.5,y:-95},1).to({scaleX:0.56,scaleY:0.56,x:-42.5,y:-101.1},2).to({scaleX:0.5,scaleY:0.5,rotation:58.8,x:-47.7,y:-108.8},3).to({_off:true},1).wait(7));

	// Layer 7
	this.instance_4 = new lib.star_4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(31.5,-38.3,0.998,0.998,144.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({_off:false},0).to({scaleX:0.78,scaleY:0.78,rotation:144.9,x:56.6,y:-57.7},3).to({scaleX:0.61,scaleY:0.61,x:76.4,y:-73.2},4).to({scaleX:0.56,scaleY:0.56,x:82.1,y:-77.6},2).to({scaleX:0.5,scaleY:0.5,rotation:144.8,x:89.4,y:-83.4},3).to({_off:true},1).wait(1));

	// Layer 5
	this.instance_5 = new lib.star_4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-4.1,5,0.999,0.999,-61.3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).to({scaleX:0.92,scaleY:0.92,rotation:-61.4,x:-9.1,y:15.2},1).to({scaleX:0.78,scaleY:0.78,x:-18.1,y:33.6},2).to({scaleX:0.64,scaleY:0.64,x:-27.4,y:52.5},3).to({scaleX:0.61,scaleY:0.61,x:-29.2,y:56.3},1).to({scaleX:0.59,scaleY:0.59,x:-30.8,y:59.5},1).to({scaleX:0.56,scaleY:0.56,x:-32.3,y:62.7},1).to({scaleX:0.5,scaleY:0.5,rotation:-61.3,x:-36.5,y:71.1},3).to({_off:true},1).wait(3));

	// Layer 3
	this.instance_6 = new lib.star_4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-11.1,-40,0.998,0.998,44.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({_off:false},0).to({scaleX:0.92,scaleY:0.92,rotation:44.4,x:-19.4,y:-47.5},1).to({scaleX:0.78,scaleY:0.78,x:-34.7,y:-61.2},2).to({scaleX:0.64,scaleY:0.64,x:-50.3,y:-75.2},3).to({scaleX:0.61,scaleY:0.61,x:-53.4,y:-78},1).to({scaleX:0.54,scaleY:0.54,x:-61.3,y:-85},3).to({scaleX:0.5,scaleY:0.5,rotation:44.5,x:-65.8,y:-89},2).to({_off:true},1).wait(5));

	// Layer 1
	this.instance_7 = new lib.star_4();
	this.instance_7.parent = this;
	this.instance_7.setTransform(38,-12.7,1,1,-161.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:0.92,scaleY:0.92,rotation:-161.7,x:48.8,y:-9.6},1).to({scaleX:0.78,scaleY:0.78,x:68.6,y:-4},2).to({scaleX:0.69,scaleY:0.69,x:82.1,y:-0.2},2).to({scaleX:0.61,scaleY:0.61,x:92.8,y:2.9},2).to({scaleX:0.59,scaleY:0.59,x:96.3,y:3.9},1).to({scaleX:0.56,scaleY:0.56,x:99.8,y:4.8},1).to({scaleX:0.54,scaleY:0.54,x:102.8,y:5.7},1).to({scaleX:0.5,scaleY:0.5,rotation:-161.6,x:108.7,y:7.4},2).to({_off:true},1).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.7,-56.4,62.9,52.3);


(lib.soundBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 2
	this.instance = new lib.mute1();
	this.instance.parent = this;
	this.instance.setTransform(2,9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.Musictoneicon();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-16,-20);

	this.instance_2 = new lib.Symbnbmbnmol26();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.4,-0.7,0.722,0.722,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.8,-39,80.9,79.5);


(lib.playBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol60nn();
	this.instance.parent = this;
	this.instance.setTransform(0.1,-0.9,0.855,0.855,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.5,-71.1,141.1,140.2);


(lib.moregamesBtncopy6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hb();
	this.instance.parent = this;
	this.instance.setTransform(-26,-27,0.902,0.902);

	this.instance_1 = new lib.Symbnbmbnmol26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-2,1.204,1.204,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.3,-65.9,134.8,132.4);


(lib.moregamesBtncopy5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hb();
	this.instance.parent = this;
	this.instance.setTransform(-26,-27,0.902,0.902);

	this.instance_1 = new lib.Symbnbmbnmol26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-2,1.204,1.204,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.3,-65.9,134.8,132.4);


(lib.moregamesBtncopy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hb();
	this.instance.parent = this;
	this.instance.setTransform(-26,-27,0.902,0.902);

	this.instance_1 = new lib.Symbnbmbnmol26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-2,1.204,1.204,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.3,-65.9,134.8,132.4);


(lib.moregamesBtncopy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.uio();
	this.instance.parent = this;
	this.instance.setTransform(0.8,-2.7);

	this.instance_1 = new lib.Symbnbmbnmol26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-2,1.204,1.204,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.3,-65.9,134.8,132.4);


(lib.moregamesBtncopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.uio();
	this.instance.parent = this;
	this.instance.setTransform(0.8,-2.7);

	this.instance_1 = new lib.Symbnbmbnmol26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-2,1.204,1.204,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.3,-65.9,134.8,132.4);


(lib.moregamesBtncopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rb();
	this.instance.parent = this;
	this.instance.setTransform(-24,-26,0.902,0.902);

	this.instance_1 = new lib.Symbnbmbnmol26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-2,1.204,1.204,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.3,-65.9,134.8,132.4);


(lib.moregamesBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hb();
	this.instance.parent = this;
	this.instance.setTransform(-26,-27,0.902,0.902);

	this.instance_1 = new lib.Symbnbmbnmol26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-2,1.204,1.204,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.3,-65.9,134.8,132.4);


(lib.maskAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai8C9QhPhOAAhvQAAhtBPhPQBOhOBugBQBvABBOBOQBPBPAABtQAABvhPBOQhOBPhvAAQhuAAhOhPg");
	this.shape.setTransform(-481.2,-413.6);

	this.instance = new lib.starmc11("synched",0);
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},12).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({alpha:0},12).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-508,-440.4,53.7,53.6);


(lib.sshjk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"end":6});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

	// Layer 1
	this.instance = new lib.Layer69_2();
	this.instance.parent = this;
	this.instance.setTransform(-2.5,35);

	this.instance_1 = new lib.Layer74_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-4,34);

	this.instance_2 = new lib.Layer70_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1,34.5);

	this.instance_3 = new lib.Layer71_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.5,1);

	this.instance_4 = new lib.Layer73_2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-2,22);

	this.instance_5 = new lib.Layer72_2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-253,-68.5,501,207);


(lib.pant = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"end":6});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EgjDhBNMAxigNdMAUlCP4MgxiANdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},6).wait(1));

	// Layer 1
	this.instance = new lib.Layer46_3();
	this.instance.parent = this;

	this.instance_1 = new lib.Layer51_5();
	this.instance_1.parent = this;

	this.instance_2 = new lib.Layer50_5();
	this.instance_2.parent = this;

	this.instance_3 = new lib.Layer49_5();
	this.instance_3.parent = this;

	this.instance_4 = new lib.Layer47_3();
	this.instance_4.parent = this;

	this.instance_5 = new lib.Layer48_5();
	this.instance_5.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-224.5,-503.5,449,1007.1);


(lib.glwwww = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"end":6});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

	// Layer 1
	this.instance = new lib.Layer76_2();
	this.instance.parent = this;

	this.instance_1 = new lib.Layer81_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,10.5);

	this.instance_2 = new lib.Layer80_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,10);

	this.instance_3 = new lib.Layer79_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,10);

	this.instance_4 = new lib.Layer78_2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,10.5);

	this.instance_5 = new lib.Layer77_2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-298,-58.5,596,117);


(lib.dgfhjcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"end":12});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(13));

	// Layer 1
	this.instance = new lib.Layer33_3();
	this.instance.parent = this;
	this.instance.setTransform(0,-36.5);

	this.instance_1 = new lib.Layer37_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.5,-19.5);

	this.instance_2 = new lib.Layer40_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-3.8,-18.6,0.867,0.867);

	this.instance_3 = new lib.Layer34_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(4.5,5.2,0.96,0.96,0,0,0,0,0.1);

	this.instance_4 = new lib.Layer38_3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-5.1,16,0.912,0.912,0,0,0,-0.1,0.1);

	this.instance_5 = new lib.Layer36_3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(5.3,-13.9,0.902,0.902);

	this.instance_6 = new lib.Layer35_3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,-10);

	this.instance_7 = new lib.Layer39_4();
	this.instance_7.parent = this;
	this.instance_7.setTransform(3.5,-1.3,0.884,0.884,0,0,0,0.1,0.1);

	this.instance_8 = new lib.Layer44_3();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,-36.5);

	this.instance_9 = new lib.Layer43_3();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-3.9,-18.5,0.867,0.867,0,0,0,-0.1,0.1);

	this.instance_10 = new lib.Layer42_4();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-5,15.9,0.912,0.912);

	this.instance_11 = new lib.Layer41_4();
	this.instance_11.parent = this;
	this.instance_11.setTransform(3.4,-1.4,0.884,0.884);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-170.5,-333.5,341,594);


(lib.hhhg10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"end":6});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

	// Layer 1
	this.instance = new lib.Layer48_6();
	this.instance.parent = this;
	this.instance.setTransform(-6.5,11);

	this.instance_1 = new lib.Layer49_6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-5.5,8);

	this.instance_2 = new lib.Layer50_6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-7,5);

	this.instance_3 = new lib.Layer51_6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-7.5,1.5);

	this.instance_4 = new lib.Layer52_3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1,9);

	this.instance_5 = new lib.Layer53_5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-9,-8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66,-39.5,119,101);


(lib.hhhg9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"end":6});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

	// Layer 1
	this.instance = new lib.Layer86_2();
	this.instance.parent = this;
	this.instance.setTransform(-6.5,6);

	this.instance_1 = new lib.Layer88_5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(4.5,-2);

	this.instance_2 = new lib.Layer137_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1,-10.5);

	this.instance_3 = new lib.Layer135_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-6.5,6);

	this.instance_4 = new lib.Layer85_2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1,-10.5);

	this.instance_5 = new lib.Layer82_2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(2,-21.3,0.864,0.864);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.5,-73,60,158);


(lib.hhhg8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"end":6});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

	// Layer 1
	this.instance = new lib.Layer25_2();
	this.instance.parent = this;
	this.instance.setTransform(-20,-25);

	this.instance_1 = new lib.Layer42copy_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.5,-31.5);

	this.instance_2 = new lib.Layer41copy_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1.5,-10);

	this.instance_3 = new lib.Layer39_5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-1,6);

	this.instance_4 = new lib.Layer42_5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0.5,-31.5);

	this.instance_5 = new lib.Layer41_5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-2,-10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85,-122,130,194);


(lib.hhhg7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"end":6});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

	// Layer 3
	this.instance = new lib.Layer56_5();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,10);

	this.instance_1 = new lib.Layer56copy2_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.5,5);

	this.instance_2 = new lib.Layer22copy_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1,7);

	this.instance_3 = new lib.Layer54_5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.5,0.5);

	this.instance_4 = new lib.Layer56copy_3();
	this.instance_4.parent = this;

	this.instance_5 = new lib.Layer57_5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108,-37,215,94);


(lib.hhhg6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"end":12});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(13));

	// Layer 3
	this.instance = new lib.Layer20_4();
	this.instance.parent = this;
	this.instance.setTransform(-3.5,-27);

	this.instance_1 = new lib.Layer28_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-3,-0.5);

	this.instance_2 = new lib.Layer29_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1,1);

	this.instance_3 = new lib.Layer30_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.5,-10);

	this.instance_4 = new lib.Layer31_2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-3,-8.5);

	this.instance_5 = new lib.Layer32_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-2,-9);

	this.instance_6 = new lib.Layer33_4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,-6);

	this.instance_7 = new lib.Layer34_4();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-1.5,-17.5);

	this.instance_8 = new lib.Layer37_4();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-3.5,-27);

	this.instance_9 = new lib.Layer36_4();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-3,-0.5);

	this.instance_10 = new lib.Layer35_4();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-1,1);

	this.instance_11 = new lib.Layer38_4();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-1.5,-17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66,-132,125,210);


(lib.hhhg4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"end":6});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

	// Layer 143
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AyB4SIZdlAMAKmA1lI5dFAg");
	this.shape.setTransform(2.7,3.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},6).wait(1));

	// Layer 1
	this.instance = new lib.Layer23_3();
	this.instance.parent = this;

	this.instance_1 = new lib.Layer47_4();
	this.instance_1.parent = this;

	this.instance_2 = new lib.Layer46_4();
	this.instance_2.parent = this;

	this.instance_3 = new lib.Layer45_1();
	this.instance_3.parent = this;

	this.instance_4 = new lib.Layer44_4();
	this.instance_4.parent = this;

	this.instance_5 = new lib.Layer43_4();
	this.instance_5.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.7,-184.3,230.9,375.2);


(lib.hhhg3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"end":6});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

	// Layer 1
	this.instance = new lib.Layer133_4();
	this.instance.parent = this;

	this.instance_1 = new lib.Layer141_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(78,17);

	this.instance_2 = new lib.Layer140_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.5,8.5);

	this.instance_3 = new lib.Layer139_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(78,17);

	this.instance_4 = new lib.Layer142_2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(78,17);

	this.instance_5 = new lib.Layer138_2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(74,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116,-43.5,240.9,95.5);


(lib.hhhg2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"end":0});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// Layer 1
	this.instance = new lib.Layer13_2();
	this.instance.parent = this;
	this.instance.setTransform(-111,0);

	this.instance_1 = new lib.Layer13copy2_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-52.5,-89);

	this.instance_2 = new lib.Layer27copy6_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-86.5,-161);

	this.instance_3 = new lib.Group1_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(11.5,16);

	this.instance_4 = new lib.Layer27copy_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-89.5,-75.5);

	this.instance_5 = new lib.Group1copy5_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(39.5,-13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-260,-268,298,536);


(lib.hhhg1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"end":6});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

	// Layer 3
	this.instance = new lib.Layer143_1();
	this.instance.parent = this;
	this.instance.setTransform(0.5,0);

	this.instance_1 = new lib.Layer145_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-2.5,2);

	this.instance_2 = new lib.Layer146_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-2.5,2);

	this.instance_3 = new lib.Layer147_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-2.5,2);

	this.instance_4 = new lib.Layer148_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-2.5,2);

	this.instance_5 = new lib.Layer149_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-2.5,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.5,-16.5,88,33);


(lib.vb3copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.jj_6 = new lib.Layer88_4();
	this.jj_6.parent = this;
	this.jj_6.setTransform(-9.8,826.2,0.802,0.802);
	this.jj_6.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.jj_5 = new lib.Layer83copy_2();
	this.jj_5.parent = this;
	this.jj_5.setTransform(-6.5,635.6,0.802,0.802);
	this.jj_5.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.jj_4 = new lib.Layer87_2();
	this.jj_4.parent = this;
	this.jj_4.setTransform(-4.8,461.3,0.745,0.745,0,0,0,-0.1,0.2);
	this.jj_4.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.jj_3 = new lib.Layer89_2();
	this.jj_3.parent = this;
	this.jj_3.setTransform(-3.3,277.1,0.962,0.962);
	this.jj_3.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.jj_2 = new lib.Layer88copy_2();
	this.jj_2.parent = this;
	this.jj_2.setTransform(-10.9,91.4,0.802,0.802);
	this.jj_2.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.jj_1 = new lib.Layer83_2();
	this.jj_1.parent = this;
	this.jj_1.setTransform(-7.7,-92.9,0.802,0.802);
	this.jj_1.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.jj_1},{t:this.jj_2},{t:this.jj_3},{t:this.jj_4},{t:this.jj_5},{t:this.jj_6}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-160.8,136.2,1053.1);


(lib.vb3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.jj6 = new lib.Layer82_3();
	this.jj6.parent = this;
	this.jj6.setTransform(1.2,813.8,0.46,0.46,2,0,0,0.2,-0.1);
	this.jj6.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.jj5 = new lib.Layer85_3();
	this.jj5.parent = this;
	this.jj5.setTransform(-1.6,634,0.427,0.427,4,0,0,0.1,-0.1);
	this.jj5.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.jj4 = new lib.Layer135_3();
	this.jj4.parent = this;
	this.jj4.setTransform(-4.9,449.4,0.376,0.376,-4.7,0,0,-0.1,0.1);
	this.jj4.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.jj3 = new lib.Layer137_3();
	this.jj3.parent = this;
	this.jj3.setTransform(-1.4,268.5,0.403,0.403,4,0,0,0.1,-0.1);
	this.jj3.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.jj2 = new lib.Layer88_6();
	this.jj2.parent = this;
	this.jj2.setTransform(0.1,89.1,0.396,0.396,3.7,0,0,0.1,0);
	this.jj2.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.jj1 = new lib.Layer86_3();
	this.jj1.parent = this;
	this.jj1.setTransform(-7.5,-92.5,0.355,0.355,0,0,0,-0.1,-0.3);
	this.jj1.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.jj1},{t:this.jj2},{t:this.jj3},{t:this.jj4},{t:this.jj5},{t:this.jj6}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.7,-177.4,100.9,1089.1);


(lib.Symbbobbl1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.bvnvTween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(54.3,71.6,0.124,0.124);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.71,scaleY:0.71,rotation:600.1,x:56.8,y:29.9},11).to({scaleX:1,scaleY:1,rotation:720,x:58.1,y:9,alpha:0},8).wait(1));

	// Layer 3
	this.instance_1 = new lib.vbTween2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(50.5,78.6,0.139,0.139);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.71,scaleY:0.71,rotation:600.1,x:10.3,y:114.3},11).to({scaleX:1,scaleY:1,rotation:720,x:-9.7,y:132.1,alpha:0},8).wait(1));

	// Layer 4
	this.instance_2 = new lib.bbTween3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(57.7,80.9,0.145,0.145);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.71,scaleY:0.71,rotation:600.1,x:123.7,y:116.1},11).to({scaleX:1,scaleY:1,rotation:720,x:156.8,y:133.7,alpha:0},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(47.4,66.4,15.4,19.3);


(lib.ss6copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AodJ3IAAztIQ7AAIAATtg");
	mask.setTransform(0.5,-5.9);

	// Layer 3
	this.instance = new lib.sshjk("synched",5);
	this.instance.parent = this;
	this.instance.setTransform(61.5,-11.2,0.42,0.42,0,0,0,0.4,-0.6);

	this.instance_1 = new lib.sshjk("synched",5);
	this.instance_1.parent = this;
	this.instance_1.setTransform(90.7,-18.1,0.42,0.42,0,0,0,0.4,-0.5);

	this.instance.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-69,98.8,116.2);


(lib.ss5copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AodIdIAAw5IQ7AAIAAQ5g");
	mask.setTransform(0.5,3.1);

	// Layer 3
	this.instance = new lib.sshjk("synched",4);
	this.instance.parent = this;
	this.instance.setTransform(61.5,-11.2,0.42,0.42,0,0,0,0.4,-0.6);

	this.instance_1 = new lib.sshjk("synched",4);
	this.instance_1.parent = this;
	this.instance_1.setTransform(90.7,-18.1,0.42,0.42,0,0,0,0.4,-0.5);

	this.instance.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-51,98.7,98.3);


(lib.ss4copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AodJ3IAAztIQ7AAIAATtg");
	mask.setTransform(0.5,-5.9);

	// Layer 3
	this.instance = new lib.sshjk("synched",3);
	this.instance.parent = this;
	this.instance.setTransform(61.5,-11.2,0.42,0.42,0,0,0,0.4,-0.6);

	this.instance_1 = new lib.sshjk("synched",3);
	this.instance_1.parent = this;
	this.instance_1.setTransform(90.7,-18.1,0.42,0.42,0,0,0,0.4,-0.5);

	this.instance.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-69,98.8,116.2);


(lib.ss3copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AodHfIAAu9IQ7AAIAAO9g");
	mask.setTransform(0.5,9.2);

	// Layer 3
	this.instance = new lib.sshjk("synched",2);
	this.instance.parent = this;
	this.instance.setTransform(61.5,-11.2,0.42,0.42,0,0,0,0.4,-0.6);

	this.instance_1 = new lib.sshjk("synched",2);
	this.instance_1.parent = this;
	this.instance_1.setTransform(90.7,-18.1,0.42,0.42,0,0,0,0.4,-0.5);

	this.instance.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-38.7,98.8,85.9);


(lib.ss2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AodHfIAAu9IQ7AAIAAO9g");
	mask.setTransform(0.5,9.2);

	// Layer 3
	this.instance = new lib.sshjk("synched",1);
	this.instance.parent = this;
	this.instance.setTransform(61.5,-11.2,0.42,0.42,0,0,0,0.4,-0.6);

	this.instance_1 = new lib.sshjk("synched",1);
	this.instance_1.parent = this;
	this.instance_1.setTransform(90.7,-18.1,0.42,0.42,0,0,0,0.4,-0.5);

	this.instance.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.8,-38.7,99.6,85.8);


(lib.ss1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AodHfIAAu9IQ7AAIAAO9g");
	mask.setTransform(0.5,9.2);

	// Layer 2
	this.instance = new lib.sshjk("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(61.5,-11.2,0.42,0.42,0,0,0,0.4,-0.6);

	this.instance_1 = new lib.sshjk("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(90.7,-18.1,0.42,0.42,0,0,0,0.4,-0.5);

	this.instance.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.8,-38.7,99.6,85.8);


(lib.jacket2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// Layer 1
	this.instance = new lib.Layer57_6();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0.1,0.64,0.64,0,0,0,0.1,0.1);

	this.instance_1 = new lib.Layer53_6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.2,-27.8,0.64,0.64,0,0,0,0.1,0.1);

	this.instance_2 = new lib.Layer55_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1.1,-19.5,0.64,0.64,0,0,0,0.1,0.1);

	this.instance_3 = new lib.Layer58_4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0.1,0.1,0.64,0.64,0,0,0,0.1,0.1);

	this.instance_4 = new lib.Layer54_6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.2,-27.8,0.64,0.64,0,0,0,0.1,0.1);

	this.instance_5 = new lib.Layer56_6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1.1,-19.5,0.64,0.64,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-144.6,-160,289.3,320);


(lib.Grovbup1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_49 = function() {
		this.stop();
		setTimeout(exportRoot.screenFun, 200);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(49).call(this.frame_49).wait(32));

	// Layer 2
	this.instance = new lib.Symtthjklbol18();
	this.instance.parent = this;
	this.instance.setTransform(4.5,36.6,0.044,0.044);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25).to({_off:false},0).to({scaleX:0.19,scaleY:0.19,alpha:1},6).to({scaleX:0.18,scaleY:0.18},2).to({scaleX:0.19,scaleY:0.19},2).wait(15).to({scaleX:0.04,scaleY:0.04,alpha:0},4).to({_off:true},1).wait(26));

	// Layer 5
	this.instance_1 = new lib.Lavbvbyer5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,608.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:357.1},9,cjs.Ease.get(-1)).to({y:0},5).to({y:40},4).to({y:0},4).to({y:2},2).to({y:0},1).wait(30).to({y:580},25,cjs.Ease.get(-1)).wait(1));

	// Layer 3
	this.instance_2 = new lib.Layvbvber3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1,-602.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-2.5},14,cjs.Ease.get(-1)).to({y:-62.5},4).to({y:-2.5},4).to({y:-6.5},2).to({y:-2.5},1).wait(30).to({y:-602.5},25,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-512,-900,1024,1808.5);


(lib.gldfgcopy11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AogKGIAA0LIRAAAIAAULg");
	this.shape.setTransform(1.9,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoiJzIAAzlIRFAAIAATlg");
	mask.setTransform(-1.1,4.8);

	// Layer 1
	this.instance = new lib.glwwww("single",5);
	this.instance.parent = this;
	this.instance.setTransform(-54.4,178.5,0.781,0.781,0,-81.5,98.5,0.1,-0.1);

	this.instance_1 = new lib.glwwww("single",5);
	this.instance_1.parent = this;
	this.instance_1.setTransform(54.1,178.5,0.781,0.781,81.5,0,0,0.1,-0.1);

	this.instance.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.8,-60,112.2,129.3);


(lib.gldfgcopy10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AogKGIAA0LIRAAAIAAULg");
	this.shape.setTransform(1.9,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoiJzIAAzlIRFAAIAATlg");
	mask.setTransform(-1.1,4.8);

	// Layer 1
	this.instance = new lib.glwwww("single",4);
	this.instance.parent = this;
	this.instance.setTransform(-54.4,178.5,0.781,0.781,0,-81.5,98.5,0.1,-0.1);

	this.instance_1 = new lib.glwwww("single",4);
	this.instance_1.parent = this;
	this.instance_1.setTransform(54.1,178.5,0.781,0.781,81.5,0,0,0.1,-0.1);

	this.instance.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.8,-60,112.2,129.3);


(lib.gldfgcopy9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AogKGIAA0LIRAAAIAAULg");
	this.shape.setTransform(1.9,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoiJzIAAzlIRFAAIAATlg");
	mask.setTransform(-1.1,4.8);

	// Layer 1
	this.instance = new lib.glwwww("single",3);
	this.instance.parent = this;
	this.instance.setTransform(-54.4,178.5,0.781,0.781,0,-81.5,98.5,0.1,-0.1);

	this.instance_1 = new lib.glwwww("single",3);
	this.instance_1.parent = this;
	this.instance_1.setTransform(54.1,178.5,0.781,0.781,81.5,0,0,0.1,-0.1);

	this.instance.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.8,-60,112.2,129.3);


(lib.gldfgcopy8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AogKGIAA0LIRAAAIAAULg");
	this.shape.setTransform(1.9,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoiJzIAAzlIRFAAIAATlg");
	mask.setTransform(-1.1,4.8);

	// Layer 1
	this.instance = new lib.glwwww("single",2);
	this.instance.parent = this;
	this.instance.setTransform(-54.4,178.5,0.781,0.781,0,-81.5,98.5,0.1,-0.1);

	this.instance_1 = new lib.glwwww("single",2);
	this.instance_1.parent = this;
	this.instance_1.setTransform(54.1,178.5,0.781,0.781,81.5,0,0,0.1,-0.1);

	this.instance.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.8,-60,112.2,129.3);


(lib.gldfgcopy7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AogKGIAA0LIRAAAIAAULg");
	this.shape.setTransform(1.9,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoiJzIAAzlIRFAAIAATlg");
	mask.setTransform(-1.1,4.8);

	// Layer 1
	this.instance = new lib.glwwww("single",1);
	this.instance.parent = this;
	this.instance.setTransform(-54.4,178.5,0.781,0.781,0,-81.5,98.5,0.1,-0.1);

	this.instance_1 = new lib.glwwww("single",1);
	this.instance_1.parent = this;
	this.instance_1.setTransform(54.1,178.5,0.781,0.781,81.5,0,0,0.1,-0.1);

	this.instance.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.8,-60,112.2,129.3);


(lib.gldfgcopy6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AogKGIAA0LIRAAAIAAULg");
	this.shape.setTransform(1.9,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoiJzIAAzlIRFAAIAATlg");
	mask.setTransform(-1.1,4.8);

	// Layer 1
	this.instance = new lib.glwwww("single",0);
	this.instance.parent = this;
	this.instance.setTransform(-54.4,178.5,0.781,0.781,0,-81.5,98.5,0.1,-0.1);

	this.instance_1 = new lib.glwwww("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(54.1,178.5,0.781,0.781,81.5,0,0,0.1,-0.1);

	this.instance.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.8,-60,112.2,129.3);


(lib.bvb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ak2E3QiBiBAAi2QAAi1CBiBQCBiBC1AAQC2AACACBQCCCBAAC1QAAC2iCCBQiACAi2AAQi1AAiBiAg");
	mask.setTransform(-48.2,14.1);

	// Layer 1
	this.instance = new lib.Layer56_4();
	this.instance.parent = this;
	this.instance.setTransform(10.9,-0.2,0.335,0.335,0,0,0,0.9,-0.6);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.instance_1 = new lib.Layer56_4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-10.2,-0.2,0.335,0.335,0,0,0,0.9,-0.6);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.instance.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.1,-29.9,83.9,73.1);


(lib.bbTween4copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.Symbbobbl1("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(-3.8,0,0.28,0.28,0,0,0,55,76.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({_off:true},19).wait(15));

	// Layer 4
	this.instance_1 = new lib.Symbbobbl1("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(23.2,4,0.28,0.28,0,0,0,55,76.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({_off:true},19).wait(15));

	// Layer 3
	this.instance_2 = new lib.Symbbobbl1("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(21.2,-10,0.28,0.28,0,0,0,55,76.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({_off:true},19).wait(17));

	// Layer 2
	this.instance_3 = new lib.Symbbobbl1("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-1.8,-17,0.28,0.28,0,0,0,55,76.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).to({_off:true},19).wait(19));

	// Layer 1
	this.instance_4 = new lib.Symbbobbl1("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-3.8,0,0.28,0.28,0,0,0,55,76.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},19).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.9,-2.7,4.3,5.4);


(lib.bbTween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_15 = function() {
		this.stop();
		exportRoot.startFun();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(15).call(this.frame_15).wait(1));

	// Layer 5
	this.instance = new lib.Symbbobbl1("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(-3.8,0,0.28,0.28,0,0,0,55,76.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({_off:true},9).wait(1));

	// Layer 4
	this.instance_1 = new lib.Symbbobbl1("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(23.2,4,0.28,0.28,0,0,0,55,76.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({_off:true},9).wait(1));

	// Layer 3
	this.instance_2 = new lib.Symbbobbl1("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(21.2,-10,0.28,0.28,0,0,0,55,76.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({_off:true},9).wait(3));

	// Layer 2
	this.instance_3 = new lib.Symbbobbl1("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-1.8,-17,0.28,0.28,0,0,0,55,76.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).to({_off:true},9).wait(5));

	// Layer 1
	this.instance_4 = new lib.Symbbobbl1("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-3.8,0,0.28,0.28,0,0,0,55,76.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},9).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.9,-2.7,4.3,5.4);


(lib.hh1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ak+E/QiEiEAAi7QAAi5CEiFQCEiEC6AAQC7AACECEQCECFAAC5QAAC7iECEQiECEi7AAQi6AAiEiEg");
	mask.setTransform(-0.1,-1.9);

	// Layer 2
	this.m1_item2 = new lib.hhhg6();
	this.m1_item2.parent = this;
	this.m1_item2.setTransform(-0.9,57.3,0.37,0.37,0,0,0,-0.4,-0.4);

	this.instance = new lib.Layer12_1();
	this.instance.parent = this;
	this.instance.setTransform(-5.5,-9.5,0.37,0.37,0,0,0,-0.8,-0.3);

	this.instance_1 = new lib.Layer7copy_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-11.7,-20.8,0.37,0.37,0,0,0,-0.6,-1);

	this.instance_2 = new lib.Layer150_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(3.6,-20.8,0.37,0.37,0,0,0,0.4,-1);

	this.instance_3 = new lib.Layer4copy_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-10.8,-19,0.37,0.37,0,0,0,-0.6,-0.8);

	this.instance_4 = new lib.Layer17copy_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-11,-17.4,0.37,0.37,0,0,0,-0.6,-1.1);

	this.instance_5 = new lib.Layer17_2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(4.5,-17,0.37,0.37,0,0,0,0.7,-0.8);

	this.instance_6 = new lib.Layer4_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(4.3,-18.8,0.37,0.37,0,0,0,0.4,-0.7);

	this.instance_7 = new lib.Layer60_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-3.3,-8.1,0.37,0.37,0,0,0,-0.7,-0.4);

	this.instance_8 = new lib.Layer6_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-3.3,-7,0.37,0.37,0,0,0,-0.7,-0.7);

	this.instance_9 = new lib.Layer15copy_2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-3.5,-24.2,0.37,0.37,0,0,0,-0.6,-1.1);

	this.instance_10 = new lib.Layer5_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(0.1,-17.2,0.37,0.37,0,0,0,1.1,-1.1);

	this.instance_11 = new lib.Layer6copy2_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-3,-18.4,0.37,0.37,0,0,0,-0.6,-0.6);

	this.instance_12 = new lib.Layer16_2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-2.8,-18.8,0.37,0.37,0,0,0,-0.3,-0.7);

	this.instance_13 = new lib.Layer152_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-2.8,73.3,0.385,0.37,0,0,1.3,-0.9,0);

	this.instance_14 = new lib.Layer151_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-10.3,25.3,0.37,0.37,0,0,0,-0.7,0.1);

	this.instance_15 = new lib.Layer9_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(17.4,92.3,0.37,0.37,0,0,0,0.7,0.6);

	this.instance_16 = new lib.Layer11_2();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-7.5,131.1,0.37,0.37,0,0,0,-0.8,1);

	this.instance_17 = new lib.hhhg2("synched",1);
	this.instance_17.parent = this;
	this.instance_17.setTransform(33.6,70.6,0.37,0.37,0,0,0,1.1,-0.7);

	this.m1_item2.mask = this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = this.instance_6.mask = this.instance_7.mask = this.instance_8.mask = this.instance_9.mask = this.instance_10.mask = this.instance_11.mask = this.instance_12.mask = this.instance_13.mask = this.instance_14.mask = this.instance_15.mask = this.instance_16.mask = this.instance_17.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.m1_item2}]}).wait(5));

	// Layer 1
	this.instance_18 = new lib.Layer13_3();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-0.2,0.2,0.869,0.869,0,0,0,-0.1,0.1);
	this.instance_18.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);
	this.instance_18.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, 0, -134))];
	this.instance_18.cache(-61,-61,122,123);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.3,-56.6,120,120);


(lib.hgkSymbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.Symbol19copyb("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(-0.2,0.9,0.169,0.169,-95,0,0,-29,-18);
	this.instance.alpha = 0.5;

	this.instance_1 = new lib.Symbol19copyb("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.2,0.9,0.169,0.169,-73.8,0,0,-28.6,-17.9);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.Symbol19copyb("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.2,0.9,0.169,0.169,-50.1,0,0,-28.7,-17.7);
	this.instance_2.alpha = 0.5;

	this.instance_3 = new lib.Symbol19copyb("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.2,0.9,0.169,0.169,-27.7,0,0,-28.8,-17.8);
	this.instance_3.alpha = 0.5;

	this.instance_4 = new lib.Symbol19copyb("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.2,0.9,0.169,0.169,-1.2,0,0,-28.3,-17.4);
	this.instance_4.alpha = 0.5;

	this.instance_5 = new lib.Symbol19copyb("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-0.2,0.9,0.169,0.169,22,0,0,-28.8,-17.4);
	this.instance_5.alpha = 0.5;

	this.instance_6 = new lib.Symbol19copyb("synched",0,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-0.2,0.9,0.169,0.169,46.3,0,0,-28.8,-17.4);
	this.instance_6.alpha = 0.5;

	this.instance_7 = new lib.Symbol19copyb("synched",0,false);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-0.2,0.9,0.169,0.169,67.5,0,0,-29.1,-17.2);
	this.instance_7.alpha = 0.5;

	this.instance_8 = new lib.Symbol19copyb("synched",0,false);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-0.2,0.9,0.169,0.169,90.5,0,0,-29.1,-17.5);
	this.instance_8.alpha = 0.5;

	this.instance_9 = new lib.Symbol19copyb("synched",0,false);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-0.2,0.9,0.169,0.169,114.9,0,0,-29,-17.5);
	this.instance_9.alpha = 0.5;

	this.instance_10 = new lib.Symbol19copyb("synched",0,false);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-0.2,0.9,0.169,0.169,139.9,0,0,-29,-17.4);
	this.instance_10.alpha = 0.5;

	this.instance_11 = new lib.Symbol19copyb("synched",0,false);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-0.2,0.9,0.169,0.169,165.1,0,0,-29,-17.5);
	this.instance_11.alpha = 0.5;

	this.instance_12 = new lib.Symbol19copyb("synched",0,false);
	this.instance_12.parent = this;
	this.instance_12.setTransform(-0.2,0.9,0.169,0.169,165.1,0,0,-29,-17.5);
	this.instance_12.alpha = 0.5;

	this.instance_13 = new lib.Symbol19copyb("synched",0,false);
	this.instance_13.parent = this;
	this.instance_13.setTransform(-0.2,0.9,0.169,0.169,-173.7,0,0,-29.3,-17.6);
	this.instance_13.alpha = 0.5;

	this.instance_14 = new lib.Symbol19copyb("synched",0,false);
	this.instance_14.parent = this;
	this.instance_14.setTransform(-0.2,0.9,0.169,0.169,-143.7,0,0,-29.3,-17.4);
	this.instance_14.alpha = 0.5;

	this.instance_15 = new lib.Symbol19copyb("synched",0,false);
	this.instance_15.parent = this;
	this.instance_15.setTransform(-0.2,1,0.169,0.169,-120,0,0,-29.2,-17.5);
	this.instance_15.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[]},23).wait(22));

	// Layer 3
	this.instance_16 = new lib.rtySymbol19("synched",0,false);
	this.instance_16.parent = this;
	this.instance_16.setTransform(-0.1,1.4,0.338,0.338,120,0,0,-88.6,-51.8);

	this.instance_17 = new lib.rtySymbol19("synched",0,false);
	this.instance_17.parent = this;
	this.instance_17.setTransform(-0.1,1.4,0.338,0.338,60,0,0,-88.6,-51.7);

	this.instance_18 = new lib.rtySymbol19("synched",0,false);
	this.instance_18.parent = this;
	this.instance_18.setTransform(-0.1,1.4,0.338,0.338,0,0,0,-88.7,-51.8);

	this.instance_19 = new lib.rtySymbol19("synched",0,false);
	this.instance_19.parent = this;
	this.instance_19.setTransform(-0.1,1.4,0.338,0.338,-60,0,0,-88.6,-51.8);

	this.instance_20 = new lib.rtySymbol19("synched",0,false);
	this.instance_20.parent = this;
	this.instance_20.setTransform(-0.1,1.4,0.338,0.338,-120,0,0,-88.6,-51.7);

	this.instance_21 = new lib.rtySymbol19("synched",0,false);
	this.instance_21.parent = this;
	this.instance_21.setTransform(-0.1,1.4,0.338,0.338,180,0,0,-88.7,-51.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16}]},5).to({state:[]},18).wait(22));

	// Layer 2
	this.instance_22 = new lib.rtySymbol19("synched",0,false);
	this.instance_22.parent = this;
	this.instance_22.setTransform(0,1.4,0.085,0.085,0,-120,60,-88.4,-51.4);

	this.instance_23 = new lib.rtySymbol19("synched",0,false);
	this.instance_23.parent = this;
	this.instance_23.setTransform(0,1.4,0.085,0.085,0,-60,120,-88.5,-51.1);

	this.instance_24 = new lib.rtySymbol19("synched",0,false);
	this.instance_24.parent = this;
	this.instance_24.setTransform(-0.1,1.4,0.085,0.085,0,0,180,-88.7,-51.5);

	this.instance_25 = new lib.rtySymbol19("synched",0,false);
	this.instance_25.parent = this;
	this.instance_25.setTransform(-0.1,1.4,0.085,0.085,0,60,-120,-88.4,-51.4);

	this.instance_26 = new lib.rtySymbol19("synched",0,false);
	this.instance_26.parent = this;
	this.instance_26.setTransform(-0.1,1.4,0.085,0.085,0,120,-60,-88.6,-51.1);

	this.instance_27 = new lib.rtySymbol19("synched",0,false);
	this.instance_27.parent = this;
	this.instance_27.setTransform(-0.1,1.4,0.085,0.085,0,180,0,-88.7,-51.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22}]}).to({state:[]},23).wait(22));

	// Layer 1
	this.instance_28 = new lib.rtySymbol19("synched",0,false);
	this.instance_28.parent = this;
	this.instance_28.setTransform(0,1.4,0.338,0.338,0,-120,60,-88.6,-51.8);

	this.instance_29 = new lib.rtySymbol19("synched",0,false);
	this.instance_29.parent = this;
	this.instance_29.setTransform(0,1.4,0.338,0.338,0,-60,120,-88.6,-51.7);

	this.instance_30 = new lib.rtySymbol19("synched",0,false);
	this.instance_30.parent = this;
	this.instance_30.setTransform(-0.1,1.4,0.338,0.338,0,0,180,-88.7,-51.8);

	this.instance_31 = new lib.rtySymbol19("synched",0,false);
	this.instance_31.parent = this;
	this.instance_31.setTransform(-0.1,1.4,0.338,0.338,0,60,-120,-88.6,-51.8);

	this.instance_32 = new lib.rtySymbol19("synched",0,false);
	this.instance_32.parent = this;
	this.instance_32.setTransform(-0.1,1.4,0.338,0.338,0,120,-60,-88.6,-51.7);

	this.instance_33 = new lib.rtySymbol19("synched",0,false);
	this.instance_33.parent = this;
	this.instance_33.setTransform(-0.1,1.4,0.338,0.338,0,180,0,-88.7,-51.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28}]},11).to({state:[]},12).wait(22));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFF348","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,25.6).s().p("AitCtQhIhHAAhmQAAhlBIhHQBJhJBkABQBlgBBIBJQBIBHAABlQAABmhIBHQhIBJhlgBQhkABhJhJg");
	this.shape.setTransform(-0.2,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFE059","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,23.1).s().p("AicCcQhAhAgBhcQABhbBAhAQBBhCBbAAQBcAABABCQBBBAAABbQAABchBBAQhABChcAAQhbAAhBhCg");
	this.shape_1.setTransform(-0.2,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFCD6A","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,20.6).s().p("AiLCMQg6g6AAhSQAAhRA6g6QA6g6BRAAQBSAAA6A6QA6A6AABRQAABSg6A6Qg6A6hSAAQhRAAg6g6g");
	this.shape_2.setTransform(-0.2,0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFBA7A","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,18.2).s().p("Ah6B7QgzgzAAhIQAAhHAzgzQAzgzBHAAQBIAAAzAzQAzAzAABHQAABIgzAzQgzAzhIAAQhHAAgzgzg");
	this.shape_3.setTransform(-0.2,0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#FFA78B","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,15.7).s().p("AhpBqQgsgsAAg+QAAg9AsgsQAsgsA9AAQA+AAAsAsQAsAsAAA9QAAA+gsAsQgsAsg+AAQg9AAgsgsg");
	this.shape_4.setTransform(-0.2,0.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FF949C","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,13.2).s().p("AhYBZQglglAAg0QAAgzAlglQAlglAzAAQA0AAAlAlQAlAlAAAzQAAA0glAlQglAlg0AAQgzAAglglg");
	this.shape_5.setTransform(-0.1,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FF81AD","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,10.7).s().p("AhHBIQgegeAAgqQAAgpAegeQAegeApAAQAqAAAeAeQAeAeAAApQAAAqgeAeQgeAegqAAQgpAAgegeg");
	this.shape_6.setTransform(-0.1,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#FF6EBD","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,8.2).s().p("Ag2A3QgXgXAAggQAAgfAXgXQAXgXAfAAQAgAAAXAXQAXAXAAAfQAAAggXAXQgXAXggAAQgfAAgXgXg");
	this.shape_7.setTransform(-0.1,1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#FF5BCE","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,5.7).s().p("AglAmQgQgQAAgWQAAgVAQgQQAQgQAVAAQAWAAAQAQQAQAQAAAVQAAAWgQAQQgQAQgWAAQgVAAgQgQg");
	this.shape_8.setTransform(-0.1,1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#FF48DF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,3.2).s().p("AgUAVQgJgJAAgMQAAgLAJgJQAJgJALAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_9.setTransform(-0.1,1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#FF5CE3","rgba(255,255,255,0.024)","rgba(255,255,255,0)"],[0,0.933,1],-0.1,-0.2,0,-0.1,-0.2,25.1).s().p("AipCqQhHhGAAhlQAAhiBHhGQBHhGBiAAQBjAABHBGQBHBGAABiQAABlhHBGQhHBGhjAAQhiAAhHhGg");
	this.shape_10.setTransform(-0.2,1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["#FF71E6","rgba(255,255,255,0.047)","rgba(255,255,255,0)"],[0,0.871,1],-0.3,-0.3,0,-0.3,-0.3,47).s().p("Ak+E/QiEiEAAi9QAAi4CEiEQCEiEC4AAQC9AACECEQCECEAAC4QAAC9iECEQiECEi9AAQi4AAiEiEg");
	this.shape_11.setTransform(-0.2,0.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["#FF85EA","rgba(255,255,255,0.071)","rgba(255,255,255,0)"],[0,0.804,1],-0.5,-0.5,0,-0.5,-0.5,68.9).s().p("AnSHUQjCjCAAkWQAAkNDCjCQDBjBENAAQEWAADBDBQDCDCAAENQAAEWjCDCQjBDBkWAAQkNAAjBjBg");
	this.shape_12.setTransform(-0.3,0.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["#FF99ED","rgba(255,255,255,0.094)","rgba(255,255,255,0)"],[0,0.737,1],-0.7,-0.7,0,-0.7,-0.7,90.8).s().p("ApnJoQj/j/AAlvQAAliD/j/QD/j/FiAAQFvAAD/D/QD/D/AAFiQAAFvj/D/Qj/D/lvAAQliAAj/j/g");
	this.shape_13.setTransform(-0.3,0.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["#FFAEF1","rgba(255,255,255,0.114)","rgba(255,255,255,0)"],[0,0.675,1],-0.8,-0.8,0,-0.8,-0.8,112.6).s().p("Ar8L9Qk9k9AAnHQAAm4E9k9QE9k9G4AAQHHAAE9E9QE9E9AAG4QAAHHk9E9Qk9E9nHAAQm4AAk9k9g");
	this.shape_14.setTransform(-0.4,0.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["#FFC2F4","rgba(255,255,255,0.137)","rgba(255,255,255,0)"],[0,0.608,1],-1,-1,0,-1,-1,134.5).s().p("AuROSQl6l7AAogQAAoNF6l7QF6l6IOAAQIhAAF6F6QF6F7AAINQAAIgl6F7Ql6F6ohAAQoOAAl6l6g");
	this.shape_15.setTransform(-0.4,0.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#FFD6F8","rgba(255,255,255,0.161)","rgba(255,255,255,0)"],[0,0.541,1],-1.2,-1.2,0,-1.2,-1.2,156.4).s().p("AwlQmQm4m4AAp4QAApkG4m3QG3m5JjABQJ6gBG3G5QG4G3AAJkQAAJ4m4G4Qm3G5p6AAQpjAAm3m5g");
	this.shape_16.setTransform(-0.5,0.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["#FFEBFB","rgba(255,255,255,0.184)","rgba(255,255,255,0)"],[0,0.478,1],-1.4,-1.3,0,-1.4,-1.3,178.3).s().p("Ay6S7Qn1n1AArSQAAq5H1n1QH1n2K4AAQLTAAH1H2QH1H1AAK5QAALSn1H1Qn1H2rTAAQq4AAn1n2g");
	this.shape_17.setTransform(-0.5,0.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["#FFFFFF","rgba(255,255,255,0.208)","rgba(255,255,255,0)"],[0,0.412,1],-1.5,-1.5,0,-1.5,-1.5,200.2).s().p("A1PVQQozozAAsrQAAsOIzozQIzozMOAAQMrAAIzIzQIzIzAAMOQAAMrozIzQozIzsrAAQsOAAozozg");
	this.shape_18.setTransform(-0.6,0.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["#FFFFFF","rgba(255,255,255,0.208)","rgba(255,255,255,0)"],[0,0.412,1],-0.1,-0.1,0,-0.1,-0.1,26).s().p("AivCwQhKhKAAhmQAAhnBKhIQBKhKBlAAQBoAABIBKQBKBIAABnQAABmhKBKQhIBKhoAAQhlAAhKhKg");
	this.shape_19.setTransform(-201.8,-76.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["#FFFFFF","rgba(255,255,255,0.208)","rgba(255,255,255,0)"],[0,0.412,1],-0.1,-0.1,0,-0.1,-0.1,26).s().p("AivCwQhKhKAAhmQAAhnBKhIQBKhKBlAAQBoAABIBKQBKBIAABnQAABmhKBKQhIBKhoAAQhlAAhKhKg");
	this.shape_20.setTransform(-164.4,140.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["#FFFFFF","rgba(255,255,255,0.208)","rgba(255,255,255,0)"],[0,0.412,1],-0.1,-0.1,0,-0.1,-0.1,26).s().p("AivCwQhKhKAAhmQAAhnBKhIQBKhKBlAAQBoAABIBKQBKBIAABnQAABmhKBKQhIBKhoAAQhlAAhKhKg");
	this.shape_21.setTransform(37.6,214.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["#FFFFFF","rgba(255,255,255,0.208)","rgba(255,255,255,0)"],[0,0.412,1],-0.1,-0.1,0,-0.1,-0.1,26).s().p("AivCwQhKhJAAhnQAAhnBKhIQBJhKBmAAQBoAABJBKQBJBIAABnQAABnhJBJQhJBKhoAAQhmAAhJhKg");
	this.shape_22.setTransform(201.3,77.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["#FFFFFF","rgba(255,255,255,0.208)","rgba(255,255,255,0)"],[0,0.412,1],-0.1,-0.1,0,-0.1,-0.1,26).s().p("AivCwQhKhKAAhmQAAhnBKhIQBKhKBlAAQBoAABIBKQBKBIAABnQAABmhKBKQhIBKhoAAQhlAAhKhKg");
	this.shape_23.setTransform(165.9,-132.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["#FFFFFF","rgba(255,255,255,0.208)","rgba(255,255,255,0)"],[0,0.412,1],-0.1,-0.1,0,-0.1,-0.1,26).s().p("AivCwQhKhJAAhnQAAhnBKhIQBJhKBmAAQBoAABIBKQBKBIAABnQAABnhKBJQhIBKhoAAQhmAAhJhKg");
	this.shape_24.setTransform(-35.5,-209.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.rf(["#FFFFFF","rgba(255,255,255,0.208)","rgba(255,255,255,0)"],[0,0.412,1],0,0,0,0,0,5.4).s().p("AgjAkQgPgPAAgVQAAgUAPgPQAPgQAUAAQAVAAAQAQQAOAPAAAUQAAAVgOAPQgQAPgVABQgUgBgPgPg");
	this.shape_25.setTransform(-244.7,-198.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["#FFFFFF","rgba(255,255,255,0.208)","rgba(255,255,255,0)"],[0,0.412,1],0,0,0,0,0,7).s().p("AguAvQgTgUAAgbQAAgaATgUQAUgTAaAAQAcAAATATQATAUAAAaQAAAbgTAUQgTAUgcAAQgaAAgUgUg");
	this.shape_26.setTransform(-299.7,67.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.rf(["#FFFFFF","rgba(255,255,255,0.208)","rgba(255,255,255,0)"],[0,0.412,1],0,0,0,0,0,5.6).s().p("AglAmQgQgQAAgWQAAgVAQgPQAQgRAVABQAWgBAQARQAPAPAAAVQAAAWgPAQQgQAQgWAAQgVAAgQgQg");
	this.shape_27.setTransform(-93.6,206.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.rf(["#FFFFFF","rgba(255,255,255,0.208)","rgba(255,255,255,0)"],[0,0.412,1],0,0,0,0,0,9.7).s().p("AhBBBQgbgbAAgmQAAglAbgbQAcgcAlAAQAnAAAbAcQAbAbAAAlQAAAmgbAbQgbAcgnAAQglAAgcgcg");
	this.shape_28.setTransform(186.3,191.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.rf(["#FFFFFF","rgba(255,255,255,0.208)","rgba(255,255,255,0)"],[0,0.412,1],0,0,0,0,0,5.4).s().p("AgjAkQgPgPAAgVQAAgUAPgPQAPgPAUAAQAVAAAQAPQAPAPAAAUQAAAVgPAPQgQAPgVAAQgUAAgPgPg");
	this.shape_29.setTransform(270.7,-154.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.rf(["#FFFFFF","rgba(255,255,255,0.208)","rgba(255,255,255,0)"],[0,0.412,1],0,0,0,0,0,5.4).s().p("AgjAlQgQgQAAgVQAAgUAQgPQAPgQAUAAQAVAAAQAQQAPAPAAAUQAAAVgPAQQgQAPgVAAQgUAAgPgPg");
	this.shape_30.setTransform(-81.2,-209.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},1).to({state:[]},1).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[]},1).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.2,-75.5,152.1,151.7);


(lib.hgkSymbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.bvnvTween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-232.2,417.6,2.291,2.291,-9.8);

	this.instance_1 = new lib.vbTween2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-373.8,235.1,2.307,2.307,-9.8);

	this.instance_2 = new lib.bvnvTween1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(381,252.1,2.291,2.291,-119.9);

	this.instance_3 = new lib.vbTween2("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(258.1,447.8,2.307,2.307,-119.9);

	this.instance_4 = new lib.bvnvTween1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(23.4,-92.5,2.291,2.291,-119.9);

	this.instance_5 = new lib.vbTween2("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-99.4,103.2,2.307,2.307,-119.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-432.8,-189.3,900.8,707.5);


(lib.Group9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"end":6});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

	// Layer 133
	this.instance = new lib.Layer133_5();
	this.instance.parent = this;
	this.instance.setTransform(317.5,131,1,1,0,0,0,317.5,131);

	this.instance_1 = new lib.Layer141_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(530.5,179.5,1,1,0,0,0,104.5,70.5);

	this.instance_2 = new lib.Layer140_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(318.5,157,1,1,0,0,0,316.5,93);

	this.instance_3 = new lib.Layer139_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(530.5,179.5,1,1,0,0,0,104.5,70.5);

	this.instance_4 = new lib.Layer142_3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(530.5,179.5,1,1,0,0,0,104.5,70.5);

	this.instance_5 = new lib.Layer138_3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(515.5,148.5,1,1,0,0,0,119.5,101.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,692.2,336.7);


(lib.bnm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkrErQh8h8AAivQAAiuB8h9QB9h8CuAAQCvAAB8B8QB9B9AACuQAACvh9B8Qh8B9ivAAQiuAAh9h9g");
	mask.setTransform(0.5,-91.1);

	// Layer 1
	this.m1_item2 = new lib.hhhg6();
	this.m1_item2.parent = this;
	this.m1_item2.setTransform(1.1,-15.7,0.422,0.422,0,0,0,0.1,-0.7);

	this.instance = new lib.Layer12_1();
	this.instance.parent = this;
	this.instance.setTransform(-4.2,-92,0.422,0.422,0,0,0,-0.5,-0.4);

	this.instance_1 = new lib.Layer7copy_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-11.3,-104.9,0.422,0.422,0,0,0,0,-0.5);

	this.instance_2 = new lib.Layer150_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(6.2,-104.9,0.422,0.422,0,0,0,0.3,-0.5);

	this.instance_3 = new lib.Layer4copy_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-10.2,-102.9,0.422,0.422,0,0,0,0,-0.6);

	this.instance_4 = new lib.Layer17copy_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-10.5,-100.9,0.422,0.422,0,0,0,0,-0.5);

	this.instance_5 = new lib.Layer17_2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(7.2,-100.5,0.422,0.422,0,0,0,0.5,-0.3);

	this.instance_6 = new lib.Layer4_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(7,-102.6,0.422,0.422,0,0,0,0.3,-0.5);

	this.instance_7 = new lib.Layer60_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-1.8,-90.4,0.422,0.422,0,0,0,-0.4,-0.3);

	this.instance_8 = new lib.Layer6_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-1.8,-89.1,0.422,0.422,0,0,0,-0.4,-0.5);

	this.instance_9 = new lib.Layer15copy_2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-2,-108.8,0.422,0.422,0,0,0,-0.4,-0.7);

	this.instance_10 = new lib.Layer5_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(2.2,-100.7,0.422,0.422,0,0,0,0.7,-0.5);

	this.instance_11 = new lib.Layer6copy2_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-1.4,-102.2,0.422,0.422,0,0,0,-0.5,-0.4);

	this.instance_12 = new lib.Layer16_2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-1.3,-102.6,0.422,0.422,0,0,0,-0.3,-0.5);

	this.instance_13 = new lib.Layer152_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-1,2.5,0.44,0.422,0,0,1.3,-0.3,-0.6);

	this.instance_14 = new lib.Layer151_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-9.7,-52.4,0.422,0.422,0,0,0,-0.5,-0.5);

	this.instance_15 = new lib.Layer9_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(21.9,24.3,0.422,0.422,0,0,0,0.4,0.3);

	this.instance_16 = new lib.Layer11_2();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-6.5,68.6,0.422,0.422,0,0,0,-0.4,0.7);

	this.m1_item1 = new lib.hhhg2();
	this.m1_item1.parent = this;
	this.m1_item1.setTransform(40.5,-0.5,0.422,0.422,0,0,0,1,-0.7);

	this.m1_item2.mask = this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = this.instance_6.mask = this.instance_7.mask = this.instance_8.mask = this.instance_9.mask = this.instance_10.mask = this.instance_11.mask = this.instance_12.mask = this.instance_13.mask = this.instance_14.mask = this.instance_15.mask = this.instance_16.mask = this.m1_item1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.m1_item1},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.m1_item2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.9,-128.6,84.9,80);


(lib.Layer12_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Layer16fghjk();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-2.1,-0.4,0.921,0.921,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.4,-242.2,200.7,483.3);


(lib.bbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8));

	// Layer 3
	this.instance = new lib.bnm();
	this.instance.parent = this;
	this.instance.setTransform(-0.7,89.8);

	this.instance_1 = new lib.Layer20_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(3.8,-0.6,0.168,0.168,0,0,0,0.6,0.6);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.instance_2 = new lib.Layer23_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(3.4,-2.3,0.101,0.101,10.7,0,0,1.2,0.8);
	this.instance_2.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.instance_3 = new lib.Layer25_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1.6,-2.1,0.153,0.151,0,0,0,1,0.4);
	this.instance_3.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.instance_4 = new lib.Layer133_3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(10.6,-13.7,0.297,0.297,0,-60,120,-0.4,0.4);
	this.instance_4.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.instance_5 = new lib.Layer133_3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-10.8,-13.7,0.297,0.297,60,0,0,-0.4,0.4);
	this.instance_5.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.instance_6 = new lib.Layer48_4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-2.6,-3.1,0.247,0.247,0,0,0,-0.2,-0.2);
	this.instance_6.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.instance_7 = new lib.Layer86_3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-1.1,-4.4,0.164,0.164,0,0,0,-0.6,-1.2);
	this.instance_7.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.instance_8 = new lib.bvb();
	this.instance_8.parent = this;
	this.instance_8.setTransform(48.9,-15.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_5},{t:this.instance_4}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(1));

	// Layer 1
	this.instance_9 = new lib.Layer13_3();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-0.1,0.1,0.815,0.815);
	this.instance_9.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.4,-53.4,139.4,291.5);


(lib.arr4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol24copy4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.01,1.01);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-3.9},9).to({y:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.2,-35.3,60.6,77.8);


(lib.arr3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.instance = new lib.arr4();
	this.instance.parent = this;

	this.instance_1 = new lib.arr10002();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-27,-35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.2,-35.3,60.6,77.8);


(lib.arr2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol24copy5();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,-2.6,0.82,0.82,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-5.8},9).to({y:-2.6},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.6,-30.3,49.9,61.5);


(lib.arr1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.instance = new lib.arr2();
	this.instance.parent = this;

	this.instance_1 = new lib.arr20002();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-23,-30,0.779,0.778);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.6,-30.3,49.9,61.5);


(lib.fffg8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"end":6});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

	// Layer 1
	this.instance = new lib.Layer97_3();
	this.instance.parent = this;
	this.instance.setTransform(8,4.5);

	this.instance_1 = new lib.Layer93_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(7,1.5);

	this.instance_2 = new lib.Layer95_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(3.5,-1.5);

	this.instance_3 = new lib.Layer94_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-2,1);

	this.instance_4 = new lib.Layer92_3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-3,4.5);

	this.instance_5 = new lib.Layer96_3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(8,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-38,106,85);


(lib.fffg7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"end":6});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

	// Layer 1
	this.instance = new lib.Layer76_3();
	this.instance.parent = this;

	this.instance_1 = new lib.Layer81_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,4);

	this.instance_2 = new lib.Layer80_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,4);

	this.instance_3 = new lib.Layer79_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,4);

	this.instance_4 = new lib.Layer78_3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,4);

	this.instance_5 = new lib.Layer77_3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115,-22.5,230,45);


(lib.fffg6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"end":0});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// Layer 1
	this.instance = new lib.Layer59_1();
	this.instance.parent = this;
	this.instance.setTransform(3,-27.5);

	this.instance_1 = new lib.Layer67_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-39.5,-15.5);

	this.instance_2 = new lib.Layer65_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(74.5,-42);

	this.instance_3 = new lib.Layer64_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-64.5,-37.5);

	this.instance_4 = new lib.Layer62_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-37,-40.5);

	this.instance_5 = new lib.Layer66_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-41.5,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77,-125,160,195);


(lib.fffg5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"end":6});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

	// Layer 1
	this.instance = new lib.Layer69_3();
	this.instance.parent = this;
	this.instance.setTransform(-1,14);

	this.instance_1 = new lib.Layer74_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-2,13.5);

	this.instance_2 = new lib.Layer70_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.5,13.5);

	this.instance_3 = new lib.Layer71_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,1);

	this.instance_4 = new lib.Layer73_3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-1,9);

	this.instance_5 = new lib.Layer72_3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98,-26,194,80);


(lib.fffg4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"end":6});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

	// Layer 1
	this.instance = new lib.Layer83_3();
	this.instance.parent = this;
	this.instance.setTransform(2,0.5);

	this.instance_1 = new lib.Layer88_7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-2.5,-1.5);

	this.instance_2 = new lib.Layer89_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,4);

	this.instance_3 = new lib.Layer87_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1.5,1);

	this.instance_4 = new lib.Layer83copy_3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,-1);

	this.instance_5 = new lib.Layer88copy_3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-4.5,-1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-30,58,61);


(lib.fffg3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"end":6});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

	// Layer 1
	this.instance = new lib.Layer57_7();
	this.instance.parent = this;

	this.instance_1 = new lib.Layer53_7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.5,-22.5);

	this.instance_2 = new lib.Layer55_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.5,-16);

	this.instance_3 = new lib.Layer58_5();
	this.instance_3.parent = this;

	this.instance_4 = new lib.Layer54_7();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.5,-22.5);

	this.instance_5 = new lib.Layer56_7();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0.5,-16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122,-134,244,268);


(lib.fffg2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"end":12});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(13));

	// Layer 3
	this.instance = new lib.Layer33_5();
	this.instance.parent = this;
	this.instance.setTransform(0,-14.5);

	this.instance_1 = new lib.Layer37_5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-7.5);

	this.instance_2 = new lib.Layer40_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.5,10.5);

	this.instance_3 = new lib.Layer34_5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1.5,3.5);

	this.instance_4 = new lib.Layer38_5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-8,6);

	this.instance_5 = new lib.Layer36_5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,-5.5);

	this.instance_6 = new lib.Layer35_5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,-4.5);

	this.instance_7 = new lib.Layer39_7();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1.5,11.5);

	this.instance_8 = new lib.Layer44_5();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,-14.5);

	this.instance_9 = new lib.Layer43_5();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0.5,10.5);

	this.instance_10 = new lib.Layer42_7();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-8,6);

	this.instance_11 = new lib.Layer41_7();
	this.instance_11.parent = this;
	this.instance_11.setTransform(1.5,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66,-129,132,229);


(lib.fffg1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"end":6});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

	// Layer 1
	this.instance = new lib.Layer46_5();
	this.instance.parent = this;

	this.instance_1 = new lib.Layer51_7();
	this.instance_1.parent = this;

	this.instance_2 = new lib.Layer50_7();
	this.instance_2.parent = this;

	this.instance_3 = new lib.Layer49_7();
	this.instance_3.parent = this;

	this.instance_4 = new lib.Layer47_5();
	this.instance_4.parent = this;

	this.instance_5 = new lib.Layer48_7();
	this.instance_5.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87,-194.5,174,389);


(lib.Symbol31copy6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance = new lib.Symbol14();
	this.instance.parent = this;
	this.instance.setTransform(93,93.4,0.978,0.978,0,0,0,95,95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.8,-2.5,195.5,195.6);


(lib.vb3copy_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.ss_6 = new lib.ss6copy();
	this.ss_6.parent = this;
	this.ss_6.setTransform(0.2,492.3);
	this.ss_6.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.ss_5 = new lib.ss5copy();
	this.ss_5.parent = this;
	this.ss_5.setTransform(4.3,359.2);
	this.ss_5.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.ss_4 = new lib.ss4copy();
	this.ss_4.parent = this;
	this.ss_4.setTransform(3.7,126.7);
	this.ss_4.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.ss_3 = new lib.ss3copy();
	this.ss_3.parent = this;
	this.ss_3.setTransform(2.3,232.6);
	this.ss_3.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.ss_2 = new lib.ss2copy();
	this.ss_2.parent = this;
	this.ss_2.setTransform(3.8,-12.3);
	this.ss_2.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.ss_1 = new lib.ss1copy();
	this.ss_1.parent = this;
	this.ss_1.setTransform(0.2,-133.2);
	this.ss_1.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ss_1},{t:this.ss_2},{t:this.ss_3},{t:this.ss_4},{t:this.ss_5},{t:this.ss_6}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.5,-184.9,270.6,747.2);


(lib.vb1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.hh3 = new lib.hh1();
	this.hh3.parent = this;
	this.hh3.setTransform(0.1,9.4,0.922,0.922,0,0,0,0,0.1);

	this.hh2 = new lib.hh1();
	this.hh2.parent = this;
	this.hh2.setTransform(0.1,-115.5,0.922,0.922);

	this.hh1 = new lib.hh1();
	this.hh1.parent = this;
	this.hh1.setTransform(0.1,-240.4,0.922,0.922);

	this.hh4 = new lib.hh1();
	this.hh4.parent = this;
	this.hh4.setTransform(0.1,136.8,0.922,0.922);

	this.hh5 = new lib.hh1();
	this.hh5.parent = this;
	this.hh5.setTransform(0.1,264.3,0.922,0.922);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hh5},{t:this.hh4},{t:this.hh1},{t:this.hh2},{t:this.hh3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.2,-293,115.4,742.5);


(lib.Symvbcvbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hgkSymbol1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.464,0.464);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:1232},49).to({x:13.6,y:1766.8,alpha:0},30).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200.8,-99.9,436.3,344.4);


(lib.Symbol25vcbvcbcvb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symvbcvbol24();
	this.instance.parent = this;
	this.instance.setTransform(714,-230.9,0.417,0.417);

	this.instance_1 = new lib.Symvbcvbol24();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1173.2,-230.9,0.417,0.417);

	this.instance_2 = new lib.Symvbcvbol24();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-164.9,-230.9,0.417,0.417);

	this.instance_3 = new lib.Symvbcvbol24();
	this.instance_3.parent = this;
	this.instance_3.setTransform(995.7,-256.8,0.563,0.636);

	this.instance_4 = new lib.Symvbcvbol24();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1090.1,-381.3);

	this.instance_5 = new lib.Symvbcvbol24();
	this.instance_5.parent = this;
	this.instance_5.setTransform(875,-216,0.221,0.221);

	this.instance_6 = new lib.Symvbcvbol24();
	this.instance_6.parent = this;
	this.instance_6.setTransform(317.4,-220.4,0.365,0.365);

	this.instance_7 = new lib.Symvbcvbol24();
	this.instance_7.parent = this;
	this.instance_7.setTransform(108.9,-260,0.365,0.365);

	this.instance_8 = new lib.Symvbcvbol24();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,-391.7);

	this.instance_9 = new lib.Symvbcvbol24();
	this.instance_9.parent = this;
	this.instance_9.setTransform(714,107.8,0.417,0.417);

	this.instance_10 = new lib.Symvbcvbol24();
	this.instance_10.parent = this;
	this.instance_10.setTransform(1173.2,107.8,0.417,0.417);

	this.instance_11 = new lib.Symvbcvbol24();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-164.9,107.8,0.417,0.417);

	this.instance_12 = new lib.Symvbcvbol24();
	this.instance_12.parent = this;
	this.instance_12.setTransform(995.7,81.9,0.563,0.636);

	this.instance_13 = new lib.Symvbcvbol24();
	this.instance_13.parent = this;
	this.instance_13.setTransform(1090.1,-42.6);

	this.instance_14 = new lib.Symvbcvbol24();
	this.instance_14.parent = this;
	this.instance_14.setTransform(875,122.7,0.221,0.221);

	this.instance_15 = new lib.Symvbcvbol24();
	this.instance_15.parent = this;
	this.instance_15.setTransform(317.4,118.3,0.365,0.365);

	this.instance_16 = new lib.Symvbcvbol24();
	this.instance_16.parent = this;
	this.instance_16.setTransform(108.9,78.7,0.365,0.365);

	this.instance_17 = new lib.Symvbcvbol24();
	this.instance_17.parent = this;
	this.instance_17.setTransform(0,-53);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-248.6,-491.6,1574.1,729);


(lib.shoe1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Am1D+IAAn7INrAAIAAH7g");
	var mask_graphics_1 = new cjs.Graphics().p("Am1E3IAAptINrAAIAAJtg");
	var mask_graphics_2 = new cjs.Graphics().p("AmtEkIAApHINcAAIAAJHg");
	var mask_graphics_3 = new cjs.Graphics().p("AmtGCIAAsDINcAAIAAMDg");
	var mask_graphics_4 = new cjs.Graphics().p("AmtGCIAAsDINcAAIAAMDg");
	var mask_graphics_5 = new cjs.Graphics().p("AmtEpIAApRINcAAIAAJRg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:1.2,y:4.8}).wait(1).to({graphics:mask_graphics_1,x:1.2,y:-0.9}).wait(1).to({graphics:mask_graphics_2,x:2,y:1}).wait(1).to({graphics:mask_graphics_3,x:2,y:-8.4}).wait(1).to({graphics:mask_graphics_4,x:2,y:-8.4}).wait(1).to({graphics:mask_graphics_5,x:2,y:0.4}).wait(1));

	// Layer 1
	this.instance = new lib.shoe("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(74.7,-18.5,0.41,0.41);

	this.instance_1 = new lib.shoe("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(48.2,-18.5,0.41,0.41);

	this.instance.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{startPosition:0}},{t:this.instance,p:{startPosition:0}}]}).to({state:[{t:this.instance_1,p:{startPosition:1}},{t:this.instance,p:{startPosition:1}}]},1).to({state:[{t:this.instance_1,p:{startPosition:2}},{t:this.instance,p:{startPosition:2}}]},1).to({state:[{t:this.instance_1,p:{startPosition:3}},{t:this.instance,p:{startPosition:3}}]},1).to({state:[{t:this.instance_1,p:{startPosition:4}},{t:this.instance,p:{startPosition:4}}]},1).to({state:[{t:this.instance_1,p:{startPosition:5}},{t:this.instance,p:{startPosition:5}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.1,-20.6,86.2,49.1);


(lib.DTop1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"end":12});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(13));

	// Layer 3
	this.instance = new lib.hhhg6("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(0.6,-0.8,2.008,2.024);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.1,regY:-0.1,scaleX:1.91,scaleY:1.94,x:1.7,y:-30,startPosition:1},0).wait(1).to({regX:-0.2,regY:-0.2,scaleX:1.98,scaleY:1.91,x:-3.8,y:-31.8,startPosition:2},0).wait(1).to({regX:0,regY:-0.1,scaleX:1.94,scaleY:1.94,x:-2.9,y:-25.1,startPosition:3},0).wait(1).to({regX:-0.1,scaleX:2,scaleY:2.06,x:-9.3,y:-23.9,startPosition:4},0).wait(1).to({regY:-0.2,scaleX:2.05,scaleY:2.04,x:-3.4,y:-20.5,startPosition:5},0).wait(1).to({regX:0,regY:0,scaleX:1.86,scaleY:1.85,x:-6.8,y:-48.2,startPosition:6},0).wait(1).to({scaleX:1.98,scaleY:2.01,x:-1.3,y:-18.9,startPosition:7},0).wait(1).to({regY:-0.1,scaleX:2.04,scaleY:2.04,x:-2.3,y:-10.6,startPosition:8},0).wait(1).to({regX:0.2,scaleX:1.93,scaleY:1.96,x:2,y:-46.3,startPosition:9},0).wait(1).to({regX:0,regY:0,scaleX:1.9,scaleY:1.91,x:-5.6,y:-36.9,startPosition:10},0).wait(1).to({regY:-0.1,scaleX:1.98,scaleY:1.97,x:-3.6,y:-12.9,startPosition:11},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.9,-267.9,251,425);


(lib.star_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_16 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(16).call(this.frame_16).wait(1));

	// Layer 33
	this.instance = new lib.star_3();
	this.instance.parent = this;
	this.instance.setTransform(9.7,15.2,0.84,0.84,-45);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({_off:true},11).wait(1));

	// Layer 17
	this.instance_1 = new lib.star_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-14.4,2.5,0.699,0.699,54.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({_off:true},14).wait(1));

	// Layer 1
	this.instance_2 = new lib.star_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-5.3,13.2,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},16).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.9,-26.4,43.9,36.6);


(lib.starmc2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{star:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AjllvQCZhfCtAoQCvApBgCYQBfCYgoCuQgoCviZBgQiYBfiugoQivgohfiZQhgiYAoiuQApivCYhgg");
	this.shape.setTransform(-1618.5,-172);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhgGnQivgohfiZQhgiYAoiuQApivCYhgQCZhfCtAoQCvApBgCYQBfCYgoCuQgoCviZBgQhrBDh2AAQgxAAg0gMg");
	this.shape_1.setTransform(-1618.5,-172);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(1));

	// Layer 4
	this.instance = new lib.bbTween4copy();
	this.instance.parent = this;
	this.instance.setTransform(73.6,-194,4.05,4.05);

	this.instance_1 = new lib.bbTween4copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-330.5,61.6,4.05,4.05);

	this.instance_2 = new lib.bbTween4copy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1125.1,39.7,4.05,4.05);

	this.instance_3 = new lib.bbTween4copy();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-1020.3,-407.1,4.05,4.05);

	this.instance_4 = new lib.bbTween4copy();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-595.3,-151.9,4.05,4.05);

	this.instance_5 = new lib.Symbol25vcbvcbcvb();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-824.7,-872,0.9,0.9,13,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1663,-216.5,89,89.1);


(lib.starmc1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"star":20});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(19));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AjllvQCZhfCtAoQCvApBgCYQBfCYgoCuQgoCviZBgQiYBfiugoQivgohfiZQhgiYAoiuQApivCYhgg");
	this.shape.setTransform(-1164.5,-881.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhgGnQivgohfiZQhgiYAoiuQApivCYhgQCZhfCtAoQCvApBgCYQBfCYgoCuQgoCviZBgQhrBDh2AAQgxAAg0gMg");
	this.shape_1.setTransform(-1164.5,-881.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(37));

	// Layer 4
	this.instance = new lib.star_21();
	this.instance.parent = this;
	this.instance.setTransform(-235.9,255.2,3.136,3.136,-90);

	this.instance_1 = new lib.star_21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-448.5,-369.6,3.136,3.136,-90);

	this.instance_2 = new lib.star_21();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-44.6,-117.5,3.136,3.136,-90);

	this.instance_3 = new lib.star_21();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-962.7,41.5,3.136,3.136,-90);

	this.instance_4 = new lib.star_21();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-1011,-407.9,3.136,3.136,-90);

	this.instance_5 = new lib.hgkSymbol2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-1026.7,-436.2,0.893,0.893,0,0,0,-0.2,-0.1);

	this.instance_6 = new lib.hgkSymbol2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(62.3,-172.4,0.982,0.982,0,0,0,-0.1,-0.1);

	this.instance_7 = new lib.hgkSymbol2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-344.4,73.7,0.595,0.595,0,0,0,-0.3,-0.1);

	this.instance_8 = new lib.hgkSymbol2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-1142.1,-9.8,1.163,1.163,0,0,0,-0.1,-0.1);

	this.instance_9 = new lib.hgkSymbol2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-515.7,-80.2,1.893,1.893);

	this.instance_10 = new lib.Symbol25vcbvcbcvb();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-824.7,-872,0.9,0.9,13,0,0,-0.1,-0.1);

	this.instance_11 = new lib.bbTween4();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-542.2,-322.6,4.05,4.05);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).to({state:[]},18).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(21).to({_off:false},0).wait(1).to({x:-585.1,y:-207.4},0).wait(1).to({x:-593.7,y:24.3},0).wait(1).to({x:-586.4,y:-227.1},0).wait(1).to({x:-457.2,y:-109.5},0).wait(1).to({x:-504,y:-424.1},0).wait(1).to({x:-471.6,y:-14.7},0).wait(1).to({x:-564.6,y:221.5},0).to({_off:true},1).wait(1).to({_off:false,x:-482.2,y:-427.7},0).wait(1).to({x:-497.4,y:-223},0).wait(1).to({x:-559.8,y:28.2},0).wait(1).to({x:-504,y:-215.9},0).wait(1).to({x:-424.2,y:-143.5},0).wait(1).to({x:-471.6,y:-449.3},0).wait(1).to({x:-584.2,y:-171},0).wait(1).to({x:-623.6,y:226},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1209,-926.1,89,89.1);


(lib.model3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.m1_item7 = new lib.hhhg9();
	this.m1_item7.parent = this;
	this.m1_item7.setTransform(113.6,47.5);

	this.timeline.addTween(cjs.Tween.get(this.m1_item7).wait(1));

	// Hats
	this.m1_item6 = new lib.hhhg10();
	this.m1_item6.parent = this;
	this.m1_item6.setTransform(2.1,-312);

	this.timeline.addTween(cjs.Tween.get(this.m1_item6).wait(1));

	// Jacket
	this.m1_item4 = new lib.hhhg8();
	this.m1_item4.parent = this;
	this.m1_item4.setTransform(10.1,-76.5);

	this.timeline.addTween(cjs.Tween.get(this.m1_item4).wait(1));

	// Shoe
	this.m1_item8 = new lib.hhhg7();
	this.m1_item8.parent = this;
	this.m1_item8.setTransform(60.1,293.5);

	this.timeline.addTween(cjs.Tween.get(this.m1_item8).wait(1));

	// Top
	this.m1_item2 = new lib.hhhg6();
	this.m1_item2.parent = this;
	this.m1_item2.setTransform(-2.9,-48.5);

	this.timeline.addTween(cjs.Tween.get(this.m1_item2).wait(1));

	// Hairtop
	this.instance = new lib.Layer12_1();
	this.instance.parent = this;
	this.instance.setTransform(-15.4,-229.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Eye_Blink
	this.instance_1 = new lib.Layer58_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-10.4,-255);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Face
	this.instance_2 = new lib.Layer7copy_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-32.4,-260);

	this.instance_3 = new lib.Layer150_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(9.1,-260);

	this.instance_4 = new lib.Layer4copy_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-29.9,-255);

	this.instance_5 = new lib.Layer17copy_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-30.4,-250.5);

	this.instance_6 = new lib.Layer17_2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(11.6,-249.5);

	this.instance_7 = new lib.Layer4_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(11.1,-254.5);

	this.instance_8 = new lib.Layer60_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-9.9,-225.5);

	this.instance_9 = new lib.Layer6_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-9.9,-222.5);

	this.instance_10 = new lib.Layer15copy_2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-10.4,-269);

	this.instance_11 = new lib.Layer5_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-0.4,-250);

	this.instance_12 = new lib.Layer6copy2_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-8.9,-253.5);

	this.instance_13 = new lib.Layer16_2();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-8.4,-254.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// Bottom
	this.m1_item3 = new lib.hhhg4();
	this.m1_item3.parent = this;
	this.m1_item3.setTransform(41.1,144.5);

	this.timeline.addTween(cjs.Tween.get(this.m1_item3).wait(1));

	// Glow1
	this.m1_item5 = new lib.hhhg3();
	this.m1_item5.parent = this;
	this.m1_item5.setTransform(44.1,-29);

	this.timeline.addTween(cjs.Tween.get(this.m1_item5).wait(1));

	// Body
	this.instance_14 = new lib.Layer152_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-7.9,-5.5,1.041,1,0,0,1.3,-0.1,-0.1);

	this.instance_15 = new lib.Layer151_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-28.4,-135.5);

	this.instance_16 = new lib.Layer9_1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(46.6,46);

	this.instance_17 = new lib.Layer11_2();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-20.9,151);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(1));

	// Hairbottom
	this.m1_item1 = new lib.hhhg2();
	this.m1_item1.parent = this;
	this.m1_item1.setTransform(90.1,-12.5);

	this.timeline.addTween(cjs.Tween.get(this.m1_item1).wait(1));

	// Glow2
	this.m1_item9 = new lib.hhhg1();
	this.m1_item9.parent = this;
	this.m1_item9.setTransform(-104.4,-44);

	this.timeline.addTween(cjs.Tween.get(this.m1_item9).wait(1));

	// Layer 10
	this.instance_18 = new lib.Bitmap1cvxcvxcvxcv();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-96,271,1.164,1.024);

	this.instance_19 = new lib.Layer10_1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-91.4,-62);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-169.9,-351.5,387.1,748.5);


(lib.model_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Bag
	this.m1_item7 = new lib.hhhg9();
	this.m1_item7.parent = this;
	this.m1_item7.setTransform(113.6,47.5);

	this.timeline.addTween(cjs.Tween.get(this.m1_item7).wait(1));

	// Hats
	this.m1_item6 = new lib.hhhg10();
	this.m1_item6.parent = this;
	this.m1_item6.setTransform(2.1,-312);

	this.timeline.addTween(cjs.Tween.get(this.m1_item6).wait(1));

	// Jacket
	this.m1_item4 = new lib.hhhg8();
	this.m1_item4.parent = this;
	this.m1_item4.setTransform(10.1,-76.5);

	this.timeline.addTween(cjs.Tween.get(this.m1_item4).wait(1));

	// Shoe
	this.m1_item8 = new lib.hhhg7();
	this.m1_item8.parent = this;
	this.m1_item8.setTransform(60.1,293.5);

	this.timeline.addTween(cjs.Tween.get(this.m1_item8).wait(1));

	// Top
	this.m1_item2 = new lib.hhhg6();
	this.m1_item2.parent = this;
	this.m1_item2.setTransform(-2.9,-48.5);

	this.timeline.addTween(cjs.Tween.get(this.m1_item2).wait(1));

	// Hairtop
	this.instance = new lib.Layer12_1();
	this.instance.parent = this;
	this.instance.setTransform(-15.4,-229.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Eye_Blink
	this.instance_1 = new lib.Layer58_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-10.4,-255);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Face
	this.instance_2 = new lib.Layer7copy_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-32.4,-260);

	this.instance_3 = new lib.Layer150_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(9.1,-260);

	this.instance_4 = new lib.Layer4copy_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-29.9,-255);

	this.instance_5 = new lib.Layer17copy_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-30.4,-250.5);

	this.instance_6 = new lib.Layer17_2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(11.6,-249.5);

	this.instance_7 = new lib.Layer4_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(11.1,-254.5);

	this.instance_8 = new lib.Layer60_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-9.9,-225.5);

	this.instance_9 = new lib.Layer6_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-9.9,-222.5);

	this.instance_10 = new lib.Layer15copy_2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-10.4,-269);

	this.instance_11 = new lib.Layer5_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-0.4,-250);

	this.instance_12 = new lib.Layer6copy2_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-8.9,-253.5);

	this.instance_13 = new lib.Layer16_2();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-8.4,-254.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// Bottom
	this.m1_item3 = new lib.hhhg4();
	this.m1_item3.parent = this;
	this.m1_item3.setTransform(41.1,144.5);

	this.timeline.addTween(cjs.Tween.get(this.m1_item3).wait(1));

	// Glow1
	this.m1_item5 = new lib.hhhg3();
	this.m1_item5.parent = this;
	this.m1_item5.setTransform(44.1,-29);

	this.timeline.addTween(cjs.Tween.get(this.m1_item5).wait(1));

	// Body
	this.instance_14 = new lib.Layer152_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-7.9,-5.5,1.041,1,0,0,1.3,-0.1,-0.1);

	this.instance_15 = new lib.Layer151_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-28.4,-135.5);

	this.instance_16 = new lib.Layer9_1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(46.6,46);

	this.instance_17 = new lib.Layer11_2();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-20.9,151);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(1));

	// Hairbottom
	this.m1_item1 = new lib.hhhg2();
	this.m1_item1.parent = this;
	this.m1_item1.setTransform(90.1,-12.5);

	this.timeline.addTween(cjs.Tween.get(this.m1_item1).wait(1));

	// Glow2
	this.m1_item9 = new lib.hhhg1();
	this.m1_item9.parent = this;
	this.m1_item9.setTransform(-104.4,-44);

	this.timeline.addTween(cjs.Tween.get(this.m1_item9).wait(1));

	// Layer 10
	this.instance_18 = new lib.Bitmap1cvxcvxcvxcv();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-96,271,1.164,1.024);

	this.instance_19 = new lib.Layer10_1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-91.4,-62);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-169.9,-351.5,387.1,748.5);


(lib.vb4copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.gg_6 = new lib.gldfgcopy11();
	this.gg_6.parent = this;
	this.gg_6.setTransform(0,484.1,0.857,0.857);
	this.gg_6.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.gg_5 = new lib.gldfgcopy10();
	this.gg_5.parent = this;
	this.gg_5.setTransform(0,361.2,0.857,0.857);
	this.gg_5.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.gg_4 = new lib.gldfgcopy9();
	this.gg_4.parent = this;
	this.gg_4.setTransform(0,238.7,0.857,0.857);
	this.gg_4.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.gg_3 = new lib.gldfgcopy8();
	this.gg_3.parent = this;
	this.gg_3.setTransform(0,118.4,0.857,0.857);
	this.gg_3.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.gg_2 = new lib.gldfgcopy7();
	this.gg_2.parent = this;
	this.gg_2.setTransform(0,-2,0.857,0.857);
	this.gg_2.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.gg_1 = new lib.gldfgcopy6();
	this.gg_1.parent = this;
	this.gg_1.setTransform(0,-118.3,0.857,0.857);
	this.gg_1.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.gg_1},{t:this.gg_2},{t:this.gg_3},{t:this.gg_4},{t:this.gg_5},{t:this.gg_6}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.8,-174.7,246,1028.4);


(lib.ss6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shoe1("synched",5);
	this.instance.parent = this;
	this.instance.setTransform(-3.9,0.7,1.416,1.416);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.8,-40.8,119.7,81.9);


(lib.ss5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shoe1("synched",4);
	this.instance.parent = this;
	this.instance.setTransform(-3.1,12.2,1.287,1.287,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.6,-48.4,109.3,97.1);


(lib.ss4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shoe1("synched",3);
	this.instance.parent = this;
	this.instance.setTransform(-3.1,12.5,1.326,1.326,0,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.3,-49.9,112.7,100.1);


(lib.ss3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shoe1("synched",2);
	this.instance.parent = this;
	this.instance.setTransform(-3.9,0.1,1.366,1.366,0,0,0,-0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.7,-38.6,115.5,77.3);


(lib.ss2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shoe1("synched",1);
	this.instance.parent = this;
	this.instance.setTransform(-2.8,2.2,1.317,1.317,0,0,0,0.2,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.2,-39.8,112.5,79.7);


(lib.ss1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shoe1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-2.5,-5.5,1.387,1.387,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.8,-34,119.7,68.1);


(lib.gldfgcopy5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AogKGIAA0LIRAAAIAAULg");
	this.shape.setTransform(1.9,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance = new lib.Group9("single",5);
	this.instance.parent = this;
	this.instance.setTransform(103.8,-246.7,0.478,0.478,0,-55.4,124.6,-0.7,-0.3);

	this.instance_1 = new lib.Group9("single",5);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-103.7,-246.7,0.478,0.478,55.4,0,0,-0.7,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.5,-77.9,189.1,149);


(lib.gldfgcopy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AogKGIAA0LIRAAAIAAULg");
	this.shape.setTransform(1.9,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance = new lib.Group9("single",4);
	this.instance.parent = this;
	this.instance.setTransform(103.8,-246.7,0.478,0.478,0,-55.4,124.6,-0.7,-0.3);

	this.instance_1 = new lib.Group9("single",4);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-103.7,-246.7,0.478,0.478,55.4,0,0,-0.7,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.4,-60,172.9,131.1);


(lib.gldfgcopy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AogKGIAA0LIRAAAIAAULg");
	this.shape.setTransform(1.9,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance = new lib.Group9("single",3);
	this.instance.parent = this;
	this.instance.setTransform(103.8,-246.7,0.478,0.478,0,-55.4,124.6,-0.7,-0.3);

	this.instance_1 = new lib.Group9("single",3);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-103.7,-246.7,0.478,0.478,55.4,0,0,-0.7,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.4,-60,172.9,131.1);


(lib.gldfgcopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AogKGIAA0LIRAAAIAAULg");
	this.shape.setTransform(1.9,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance = new lib.Group9("single",2);
	this.instance.parent = this;
	this.instance.setTransform(103.8,-246.7,0.478,0.478,0,-55.4,124.6,-0.7,-0.3);

	this.instance_1 = new lib.Group9("single",2);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-103.7,-246.7,0.478,0.478,55.4,0,0,-0.7,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86,-73.6,172.1,144.6);


(lib.gldfgcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AogKGIAA0LIRAAAIAAULg");
	this.shape.setTransform(1.9,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance = new lib.Group9("single",1);
	this.instance.parent = this;
	this.instance.setTransform(103.8,-246.7,0.478,0.478,0,-55.4,124.6,-0.7,-0.3);

	this.instance_1 = new lib.Group9("single",1);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-103.7,-246.7,0.478,0.478,55.4,0,0,-0.7,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.4,-60,172.9,131.1);


(lib.gldfg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AogKGIAA0LIRAAAIAAULg");
	this.shape.setTransform(1.9,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance = new lib.Group9("single",0);
	this.instance.parent = this;
	this.instance.setTransform(103.8,-246.7,0.478,0.478,0,-55.4,124.6,-0.7,-0.3);

	this.instance_1 = new lib.Group9("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-103.7,-246.7,0.478,0.478,55.4,0,0,-0.7,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.5,-67.5,193.1,141.8);


(lib.icons1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.Mbtn5 = new lib.bbtn();
	this.Mbtn5.parent = this;
	this.Mbtn5.setTransform(1.1,226.3,1.278,1.278);

	this.Mbtn8 = new lib.bbtn();
	this.Mbtn8.parent = this;
	this.Mbtn8.setTransform(1.1,666.3,1.278,1.278);

	this.Mbtn7 = new lib.bbtn();
	this.Mbtn7.parent = this;
	this.Mbtn7.setTransform(1.1,520.2,1.278,1.278);

	this.Mbtn6 = new lib.bbtn();
	this.Mbtn6.parent = this;
	this.Mbtn6.setTransform(1.1,374.1,1.278,1.278);

	this.Mbtn4 = new lib.bbtn();
	this.Mbtn4.parent = this;
	this.Mbtn4.setTransform(1.1,78.5,1.278,1.278);

	this.Mbtn3 = new lib.bbtn();
	this.Mbtn3.parent = this;
	this.Mbtn3.setTransform(1.2,-71.7,1.278,1.278,0,0,0,0.1,-0.1);

	this.Mbtn2 = new lib.bbtn();
	this.Mbtn2.parent = this;
	this.Mbtn2.setTransform(1.2,-218.6,1.278,1.278,0,0,0,0.1,-0.1);

	this.Mbtn1 = new lib.bbtn();
	this.Mbtn1.parent = this;
	this.Mbtn1.setTransform(1.1,-365.3,1.278,1.278);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Mbtn1},{t:this.Mbtn2},{t:this.Mbtn3},{t:this.Mbtn4},{t:this.Mbtn6},{t:this.Mbtn7},{t:this.Mbtn8},{t:this.Mbtn5}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.9,-432.1,178,1402.5);


(lib.hh1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ak+E/QiEiEAAi7QAAi5CEiFQCEiEC6AAQC7AACECEQCECFAAC5QAAC7iECEQiECEi7AAQi6AAiEiEg");
	mask.setTransform(-0.1,-1.9);

	// Layer 2
	this.instance = new lib.Layer18copy_1();
	this.instance.parent = this;
	this.instance.setTransform(-10.9,-3.3,0.418,0.418,0,0,0,-0.4,-0.5);

	this.instance_1 = new lib.Layer18copy2_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(15.5,3.1,0.418,0.418,0,0,0,0.8,0.5);

	this.instance_2 = new lib.fffg6("synched",1);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-6.1,11,0.418,0.418,0,0,0,-1.3,0.4);

	this.instance_3 = new lib.Layer17_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(8.9,-16.9,0.418,0.418,0,0,0,1.1,-0.4);

	this.instance_4 = new lib.Layer16_3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(8.9,-11.9,0.418,0.418,0,0,0,1.1,-0.5);

	this.instance_5 = new lib.Layer3_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(8.7,1.4,0.418,0.418,0,0,0,1.1,0.3);

	this.instance_6 = new lib.Layer19_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(8.9,1,0.418,0.418,0,0,0,1.1,0);

	this.instance_7 = new lib.Layer15copy_3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(14.5,-10.5,0.418,0.418,0,0,0,1.2,-0.5);

	this.instance_8 = new lib.Layer15_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(2.1,-11.9,0.418,0.418,0,0,0,0.7,-0.5);

	this.instance_9 = new lib.Layer1_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(3,-11.2,0.418,0.418,0,0,0,0.8,-0.5);

	this.m2_item2 = new lib.fffg2();
	this.m2_item2.parent = this;
	this.m2_item2.setTransform(6,70,0.418,0.418,0,0,0,1.3,1);

	this.instance_10 = new lib.Layer31copy_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-2.4,118,0.418,0.418,0,0,0,-0.1,0.8);

	this.instance_11 = new lib.Layer31_3();
	this.instance_11.parent = this;
	this.instance_11.setTransform(24.7,159.8,0.418,0.418,0,0,0,0.6,0.8);

	this.instance_12 = new lib.Layer28copy_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(24.2,42.6,0.418,0.418,0,0,0,0.8,0.5);

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = this.instance_6.mask = this.instance_7.mask = this.instance_8.mask = this.instance_9.mask = this.m2_item2.mask = this.instance_10.mask = this.instance_11.mask = this.instance_12.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.m2_item2},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(5));

	// Layer 1
	this.instance_13 = new lib.Layer13_3();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-0.2,0.2,0.869,0.869,0,0,0,-0.1,0.1);
	this.instance_13.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);
	this.instance_13.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, 0, -134))];
	this.instance_13.cache(-61,-61,122,123);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.3,-56.6,120,120);


(lib.bnmcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkrErQh8h8AAivQAAiuB8h9QB9h8CuAAQCvAAB8B8QB9B9AACuQAACvh9B8Qh8B9ivAAQiuAAh9h9g");
	mask.setTransform(0.5,-91.1);

	// Layer 1
	this.instance = new lib.Layer18copy_1();
	this.instance.parent = this;
	this.instance.setTransform(-7.7,-88.2,0.424,0.424,0,0,0,-0.3,-0.4);

	this.instance_1 = new lib.Layer18copy2_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.4,-81.8,0.424,0.424,0,0,0,0.4,0);

	this.m2_item1 = new lib.fffg6();
	this.m2_item1.parent = this;
	this.m2_item1.setTransform(-1.5,-73.7,0.424,0.424,0,0,0,-0.3,-0.1);

	this.instance_2 = new lib.Layer17_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(12.6,-102.2,0.424,0.424,0,0,0,0.5,0);

	this.instance_3 = new lib.Layer16_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(12.6,-97.1,0.424,0.424,0,0,0,0.5,0);

	this.instance_4 = new lib.Layer3_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(12.3,-83.5,0.424,0.424,0,0,0,0.4,-0.1);

	this.instance_5 = new lib.Layer19_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(12.6,-83.9,0.424,0.424,0,0,0,0.5,-0.1);

	this.instance_6 = new lib.Layer15copy_3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(18.3,-95.7,0.424,0.424,0,0,0,0.3,-0.4);

	this.instance_7 = new lib.Layer15_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(5.8,-97.1,0.424,0.424,0,0,0,0.3,0);

	this.instance_8 = new lib.Layer1_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(6.6,-96.3,0.424,0.424,0,0,0,0.4,-0.4);

	this.m2_item2 = new lib.fffg2();
	this.m2_item2.parent = this;
	this.m2_item2.setTransform(9.6,-13.9,0.424,0.424,0,0,0,0.4,0);

	this.instance_9 = new lib.Layer31copy_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(1.1,35,0.424,0.424,0,0,0,0.3,0.5);

	this.instance_10 = new lib.Layer31_3();
	this.instance_10.parent = this;
	this.instance_10.setTransform(28.7,77.4,0.424,0.424,0,0,0,0.3,0.4);

	this.instance_11 = new lib.Layer28copy_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(28.3,-41.7,0.424,0.424,0,0,0,0.3,-0.1);

	this.instance.mask = this.instance_1.mask = this.m2_item1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = this.instance_6.mask = this.instance_7.mask = this.instance_8.mask = this.m2_item2.mask = this.instance_9.mask = this.instance_10.mask = this.instance_11.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.m2_item2},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.m2_item1},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34,-126.7,77,78.2);


(lib.bbtncopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8));

	// Layer 3
	this.instance = new lib.bnmcopy();
	this.instance.parent = this;
	this.instance.setTransform(-0.7,89.8);

	this.instance_1 = new lib.Layer33_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-2.6,0.112,0.112,0,0,0,0,-0.9);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.instance_2 = new lib.Layer46_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1,-3.6,0.067,0.067,0,0,0,1.5,-0.8);
	this.instance_2.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.instance_3 = new lib.Layer57_6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.2,-3.4,0.135,0.135,0,0,0,0.8,0.4);
	this.instance_3.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.instance_4 = new lib.gldfgcopy6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0.6,-3.8,0.529,0.529);
	this.instance_4.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.instance_5 = new lib.Layer97_2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0.4,-5.9,0.217,0.217,0,0,0,0,-0.3);
	this.instance_5.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.instance_6 = new lib.Layer83_2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0.3,-3.3,0.393,0.393,0,0,0,0.1,-0.1);
	this.instance_6.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.instance_7 = new lib.ss1copy();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-0.5,-8.6,0.696,0.696);
	this.instance_7.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(1));

	// Layer 1
	this.instance_8 = new lib.Layer13_3();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-0.1,0.1,0.815,0.815);
	this.instance_8.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.2,-53.4,113,306.6);


(lib.model_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Eye_Blink
	this.instance = new lib.Layer20_5();
	this.instance.parent = this;
	this.instance.setTransform(8.5,-251.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Hats
	this.m2_item6 = new lib.fffg8();
	this.m2_item6.parent = this;
	this.m2_item6.setTransform(-19.5,-339.1);

	this.timeline.addTween(cjs.Tween.get(this.m2_item6).wait(1));

	// Earring
	this.instance_1 = new lib.Layer18copy_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-39,-230.1);

	this.instance_2 = new lib.Layer18copy2_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(24.5,-215.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Glows
	this.m2_item5 = new lib.fffg7();
	this.m2_item5.parent = this;
	this.m2_item5.setTransform(52.5,-52.6);

	this.timeline.addTween(cjs.Tween.get(this.m2_item5).wait(1));

	// Hair
	this.m2_item1 = new lib.fffg6();
	this.m2_item1.parent = this;
	this.m2_item1.setTransform(-24.5,-196.1);

	this.timeline.addTween(cjs.Tween.get(this.m2_item1).wait(1));

	// Shoe
	this.m2_item8 = new lib.fffg5();
	this.m2_item8.parent = this;
	this.m2_item8.setTransform(2.5,317.9);

	this.timeline.addTween(cjs.Tween.get(this.m2_item8).wait(1));

	// Hand2
	this.instance_3 = new lib.Layer68_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-34.5,-52.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Face
	this.instance_4 = new lib.Layer17_3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(8.5,-263.1);

	this.instance_5 = new lib.Layer16_3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(8.5,-251.1);

	this.instance_6 = new lib.Layer3_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(8,-219.1);

	this.instance_7 = new lib.Layer19_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(8.5,-220.1);

	this.instance_8 = new lib.Layer15copy_3();
	this.instance_8.parent = this;
	this.instance_8.setTransform(22,-247.6);

	this.instance_9 = new lib.Layer15_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-7.5,-251.1);

	this.instance_10 = new lib.Layer1_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-5.5,-249.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	// Bag
	this.m2_item7 = new lib.fffg4();
	this.m2_item7.parent = this;
	this.m2_item7.setTransform(-29.8,-40.3,1.1,1.1,163.8);

	this.timeline.addTween(cjs.Tween.get(this.m2_item7).wait(1));

	// Jacket
	this.m2_item4 = new lib.fffg3();
	this.m2_item4.parent = this;
	this.m2_item4.setTransform(-3.5,-68.1);

	this.timeline.addTween(cjs.Tween.get(this.m2_item4).wait(1));

	// Hand1
	this.instance_11 = new lib.Layer8_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-64.5,-68.1);

	this.instance_12 = new lib.Layer11_3();
	this.instance_12.parent = this;
	this.instance_12.setTransform(111,-55.1);

	this.instance_13 = new lib.Layer28_3();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-83,-130.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11}]}).wait(1));

	// Top
	this.m2_item2 = new lib.fffg2();
	this.m2_item2.parent = this;
	this.m2_item2.setTransform(1.5,-55.1);

	this.timeline.addTween(cjs.Tween.get(this.m2_item2).wait(1));

	// Bottom
	this.m2_item3 = new lib.fffg1();
	this.m2_item3.parent = this;
	this.m2_item3.setTransform(3.5,146.4);

	this.timeline.addTween(cjs.Tween.get(this.m2_item3).wait(1));

	// Inner
	this.instance_14 = new lib.Layer91_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-1,-0.1);

	this.instance_15 = new lib.Layer90_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(9,-135.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14}]}).wait(1));

	// Body
	this.instance_16 = new lib.Layer31copy_1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-18.5,59.9);

	this.instance_17 = new lib.Layer31_3();
	this.instance_17.parent = this;
	this.instance_17.setTransform(46.5,159.9);

	this.instance_18 = new lib.Layer28copy_1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(45.5,-120.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16}]}).wait(1));

	// Layer 2
	this.instance_19 = new lib.Bitmap1cvxcvxcvxcv();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-158,304,1.134,0.885);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-158,-377.1,325.5,790);


(lib.vb3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.ss6 = new lib.ss6();
	this.ss6.parent = this;
	this.ss6.setTransform(0.2,489.7);
	this.ss6.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.ss5 = new lib.ss5();
	this.ss5.parent = this;
	this.ss5.setTransform(5.3,364.2);
	this.ss5.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.ss4 = new lib.ss4();
	this.ss4.parent = this;
	this.ss4.setTransform(3.7,245.7);
	this.ss4.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.ss3 = new lib.ss3();
	this.ss3.parent = this;
	this.ss3.setTransform(2.3,128.7);
	this.ss3.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.ss2 = new lib.ss2();
	this.ss2.parent = this;
	this.ss2.setTransform(3.8,-4.9);
	this.ss2.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.ss1 = new lib.ss1();
	this.ss1.parent = this;
	this.ss1.setTransform(0.2,-133.2);
	this.ss1.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ss1},{t:this.ss2},{t:this.ss3},{t:this.ss4},{t:this.ss5},{t:this.ss6}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67,-212.2,304,758.5);


(lib.vb1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.hh_3 = new lib.hh1copy();
	this.hh_3.parent = this;
	this.hh_3.setTransform(0.1,9.4,0.922,0.922,0,0,0,0,0.1);

	this.hh_2 = new lib.hh1copy();
	this.hh_2.parent = this;
	this.hh_2.setTransform(0.1,-115.5,0.922,0.922);

	this.hh_1 = new lib.hh1copy();
	this.hh_1.parent = this;
	this.hh_1.setTransform(0.1,-240.4,0.922,0.922);

	this.hh_4 = new lib.hh1copy();
	this.hh_4.parent = this;
	this.hh_4.setTransform(0.1,136.8,0.922,0.922);

	this.hh_5 = new lib.hh1copy();
	this.hh_5.parent = this;
	this.hh_5.setTransform(0.1,264.3,0.922,0.922);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hh_5},{t:this.hh_4},{t:this.hh_1},{t:this.hh_2},{t:this.hh_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.4,-293,127.2,782.6);


(lib.spancopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{a1:0,a2:1,a3:2,a4:3,a5:4,a6:5,a7:6,a8:7});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8));

	// Layer 5
	this.arr_03 = new lib.arr1();
	this.arr_03.parent = this;
	this.arr_03.setTransform(-87.3,55.7,1.258,1.233,0,180,0);

	this.arr_04 = new lib.arr1();
	this.arr_04.parent = this;
	this.arr_04.setTransform(-87.5,-49.4,1.258,1.233,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.arr_04},{t:this.arr_03}]}).wait(8));

	// Layer 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AtHcNMAAAg4ZIaPAAMAAAA4Zg");
	mask.setTransform(5.1,-4.3);

	// Layer 3
	this.vb_1 = new lib.vb1copy();
	this.vb_1.parent = this;
	this.vb_1.setTransform(28.5,113);

	this.vb_2 = new lib.dgfhjcopy();
	this.vb_2.parent = this;
	this.vb_2.setTransform(16.9,3,0.396,0.396,0,0,0,0.3,0.1);
	this.vb_2.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.vb_3 = new lib.pant();
	this.vb_3.parent = this;
	this.vb_3.setTransform(20.5,-3.2,0.27,0.27,0,0,0,0,-0.2);
	this.vb_3.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.vb_4 = new lib.jacket2();
	this.vb_4.parent = this;
	this.vb_4.setTransform(10.9,-3.4,0.549,0.549,0,0,0,0.1,0.4);
	this.vb_4.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.vb_5 = new lib.vb4copy();
	this.vb_5.parent = this;
	this.vb_5.setTransform(23.7,-7);

	this.vb_6 = new lib.vb2copy();
	this.vb_6.parent = this;
	this.vb_6.setTransform(23.1,-5);

	this.vb_7 = new lib.vb3copy();
	this.vb_7.parent = this;
	this.vb_7.setTransform(31.5,-1);

	this.vb_8 = new lib.vb3copy_1();
	this.vb_8.parent = this;
	this.vb_8.setTransform(24,-7);
	this.vb_8.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.vb_1.mask = this.vb_2.mask = this.vb_3.mask = this.vb_4.mask = this.vb_5.mask = this.vb_6.mask = this.vb_7.mask = this.vb_8.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.vb_1}]}).to({state:[{t:this.vb_2}]},1).to({state:[{t:this.vb_3}]},1).to({state:[{t:this.vb_4}]},1).to({state:[{t:this.vb_5}]},1).to({state:[{t:this.vb_6}]},1).to({state:[{t:this.vb_7}]},1).to({state:[{t:this.vb_8}]},1).wait(1));

	// Layer 1
	this.instance = new lib.Layer12_2();
	this.instance.parent = this;
	this.instance.setTransform(-1.2,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.7,-243.5,212.8,483.3);


(lib.vb4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.gg6 = new lib.gldfgcopy5();
	this.gg6.parent = this;
	this.gg6.setTransform(0,484.1,0.857,0.857);
	this.gg6.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.gg5 = new lib.gldfgcopy4();
	this.gg5.parent = this;
	this.gg5.setTransform(0,361.2,0.857,0.857);
	this.gg5.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.gg4 = new lib.gldfgcopy3();
	this.gg4.parent = this;
	this.gg4.setTransform(0,238.7,0.857,0.857);
	this.gg4.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.gg3 = new lib.gldfgcopy2();
	this.gg3.parent = this;
	this.gg3.setTransform(0,118.4,0.857,0.857);
	this.gg3.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.gg2 = new lib.gldfgcopy();
	this.gg2.parent = this;
	this.gg2.setTransform(0,-2,0.857,0.857);
	this.gg2.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.gg1 = new lib.gldfg();
	this.gg1.parent = this;
	this.gg1.setTransform(0,-118.3,0.857,0.857);
	this.gg1.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.gg1},{t:this.gg2},{t:this.gg3},{t:this.gg4},{t:this.gg5},{t:this.gg6}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-182.1,-334.5,372,891.7);


(lib.icons2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.arr_2 = new lib.arr3();
	this.arr_2.parent = this;
	this.arr_2.setTransform(1,-457,0.954,0.973,0,0,0,0.1,0);

	this.arr_1 = new lib.arr3();
	this.arr_1.parent = this;
	this.arr_1.setTransform(1,39.9,0.954,0.973,0,180,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.arr_1},{t:this.arr_2}]}).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgLHAh+MAAAhD7IWPAAMAAABD7g");
	mask.setTransform(0.5,-209);

	// Layer 1
	this.icon2 = new lib.icons1();
	this.icon2.parent = this;
	this.icon2.setTransform(0,10);

	this.icon2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.icon2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.8,-491.4,142.6,565.8);


(lib.icons1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.Mbtn_5 = new lib.bbtncopy();
	this.Mbtn_5.parent = this;
	this.Mbtn_5.setTransform(1.1,226.3,1.278,1.278);
	this.Mbtn_5.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.Mbtn_8 = new lib.bbtncopy();
	this.Mbtn_8.parent = this;
	this.Mbtn_8.setTransform(1.1,666.3,1.278,1.278);
	this.Mbtn_8.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.Mbtn_7 = new lib.bbtncopy();
	this.Mbtn_7.parent = this;
	this.Mbtn_7.setTransform(1.1,520.2,1.278,1.278);
	this.Mbtn_7.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.Mbtn_6 = new lib.bbtncopy();
	this.Mbtn_6.parent = this;
	this.Mbtn_6.setTransform(1.1,374.1,1.278,1.278);
	this.Mbtn_6.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.Mbtn_4 = new lib.bbtncopy();
	this.Mbtn_4.parent = this;
	this.Mbtn_4.setTransform(1.1,78.5,1.278,1.278);
	this.Mbtn_4.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.Mbtn_3 = new lib.bbtncopy();
	this.Mbtn_3.parent = this;
	this.Mbtn_3.setTransform(1.2,-71.7,1.278,1.278,0,0,0,0.1,-0.1);
	this.Mbtn_3.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.Mbtn_2 = new lib.bbtncopy();
	this.Mbtn_2.parent = this;
	this.Mbtn_2.setTransform(1.2,-218.6,1.278,1.278,0,0,0,0.1,-0.1);
	this.Mbtn_2.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.Mbtn_1 = new lib.bbtncopy();
	this.Mbtn_1.parent = this;
	this.Mbtn_1.setTransform(1.1,-365.3,1.278,1.278);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Mbtn_1},{t:this.Mbtn_2},{t:this.Mbtn_3},{t:this.Mbtn_4},{t:this.Mbtn_6},{t:this.Mbtn_7},{t:this.Mbtn_8},{t:this.Mbtn_5}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.6,-432.1,157,1434.5);


(lib.span = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"a1":0,"a2":1,"a3":2,"a4":3,"a5":4,"a6":5,"a7":6,"a8":7});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8));

	// Layer 5
	this.arr_3 = new lib.arr1();
	this.arr_3.parent = this;
	this.arr_3.setTransform(-87.3,55.7,1.258,1.233,0,180,0);

	this.arr_4 = new lib.arr1();
	this.arr_4.parent = this;
	this.arr_4.setTransform(-87.5,-49.4,1.258,1.233,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.arr_4},{t:this.arr_3}]}).wait(8));

	// Layer 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AtHcNMAAAg4ZIaPAAMAAAA4Zg");
	mask.setTransform(5.1,-4.3);

	// Layer 3
	this.vb1 = new lib.vb1();
	this.vb1.parent = this;
	this.vb1.setTransform(28.5,113);

	this.vb2 = new lib.DTop1();
	this.vb2.parent = this;
	this.vb2.setTransform(24.7,25.1,0.544,0.544,0,0,0,0.8,0.8);
	this.vb2.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.vb3 = new lib.hhhg4();
	this.vb3.parent = this;
	this.vb3.setTransform(28.2,-8.4,0.761,0.761,11,0,0,0.1,-0.1);
	this.vb3.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.vb4 = new lib.jacket1();
	this.vb4.parent = this;
	this.vb4.setTransform(40.1,16.7,0.507,0.507,0,0,0,0.5,0.4);
	this.vb4.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.vb5 = new lib.vb4();
	this.vb5.parent = this;
	this.vb5.setTransform(23.7,-7);

	this.vb6 = new lib.vb2();
	this.vb6.parent = this;
	this.vb6.setTransform(23.1,-5);
	this.vb6.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.vb7 = new lib.vb3();
	this.vb7.parent = this;
	this.vb7.setTransform(31.5,-1);

	this.vb8 = new lib.vb3_1();
	this.vb8.parent = this;
	this.vb8.setTransform(24,-7);
	this.vb8.shadow = new cjs.Shadow("rgba(0,0,0,0.4)",2,2,6);

	this.vb1.mask = this.vb2.mask = this.vb3.mask = this.vb4.mask = this.vb5.mask = this.vb6.mask = this.vb7.mask = this.vb8.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.vb1}]}).to({state:[{t:this.vb2}]},1).to({state:[{t:this.vb3}]},1).to({state:[{t:this.vb4}]},1).to({state:[{t:this.vb5}]},1).to({state:[{t:this.vb6}]},1).to({state:[{t:this.vb7}]},1).to({state:[{t:this.vb8}]},1).wait(1));

	// Layer 1
	this.instance = new lib.Layer12_2();
	this.instance.parent = this;
	this.instance.setTransform(-1.2,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.7,-243.5,212.8,483.3);


(lib.icons2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.arr_02 = new lib.arr3();
	this.arr_02.parent = this;
	this.arr_02.setTransform(1,-457,0.954,0.973,0,0,0,0.1,0);

	this.arr_01 = new lib.arr3();
	this.arr_01.parent = this;
	this.arr_01.setTransform(1,39.9,0.954,0.973,0,180,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.arr_01},{t:this.arr_02}]}).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgLHAh+MAAAhD7IWPAAMAAABD7g");
	mask.setTransform(0.5,-209);

	// Layer 1
	this.icon_2 = new lib.icons1copy();
	this.icon_2.parent = this;
	this.icon_2.setTransform(0,10);

	this.icon_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.icon_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.6,-491.4,142.4,565.8);


// stage content:
(lib.game = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{startPage:0,selectPage:1,level1:2,level2:3,finalPage:4});

	// timeline functions:
	this.frame_0 = function() {
		// -- << more games
		
		
		
		/*function poza1function(event) {
			exportRoot.poza1link();
		}*/
		this.showAds = function(){
					if(adsInGame == true){
						exportRoot.stopSnd();
							window[preroll.config.loaderObjectName].refetchAd();
						}
				}
		createjs.Touch.enable(stage);
		
		//var ua = navigator.userAgent.toLowerCase();
		//var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
		//if(isAndroid) {
		//	// Do something!
		//	// Redirect to Android-site?
		//	exportRoot.cover.googleplay.visible=true;
		//}
		//	
		//this.googleplayfunction = function () {
		//	window.open("market://search?q=pub:3GG Studio", "_blank");
		//}
		
		
		this.moregamesfunction = function () {
			
			var gamename = 'winter-ice-skating';
			var mainwebsite = 'https://www.azgametv.com/';
			var stringHost = detect_parent();
		
			if (stringHost == "rosy") {
				stringHost = window.location.hostname;
			}
			var urlsite = mainwebsite + "?utm_source=" + stringHost + "&utm_medium=html5game&utm_content=moregames&utm_campaign=" + gamename;
			realClick(urlsite);
		}
		function logofunction() {
			
			var gamename = 'winter-ice-skating';
			var mainwebsite = 'https://www.azgametv.com/';
			var stringHost = detect_parent();
		
			if (stringHost == "rosy") {
				stringHost = window.location.hostname;
			}
			var urlsite = mainwebsite + "?utm_source=" + stringHost + "&utm_medium=html5game&utm_content=logobtn&utm_campaign=" + gamename;
			realClick(urlsite);
		}
		
		
		this.poza1link = function () {
			
			var gamename = 'winter-ice-skating';
			var mainwebsite = 'https://www.azgametv.com/';
			var stringHost = detect_parent();
		
			if (stringHost == "rosy") {
				stringHost = window.location.hostname;
			}
			var urlsite = mainwebsite + "?utm_source=" + stringHost + "&utm_medium=html5game&utm_content=Rachel_And_Filip_Shopping_Day&utm_campaign=" + gamename;
			realClick(urlsite);
		}
		this.poza2link = function () {
			
			var gamename = 'winter-ice-skating';
			var mainwebsite = 'https://www.azgametv.com/';
			var stringHost = detect_parent();
		
			if (stringHost == "rosy") {
				stringHost = window.location.hostname;
			}
			var urlsite = mainwebsite + "?utm_source=" + stringHost + "&utm_medium=html5game&utm_content=Lovers_Shopping_Day&utm_campaign=" + gamename;
			realClick(urlsite);
		}
		
		
		this.youtubelink = function () {
			exportRoot.stopSnd();
			var gamename = 'winter-ice-skating';
			var mainwebsite = 'https://www.youtube.com/channel/UCOWQZSa4WDtJFpvLGOepXjA';
			var stringHost = detect_parent();
		
			if (stringHost == "rosy") {
				stringHost = window.location.hostname;
			}
			var urlsite = mainwebsite + "?utm_source=" + stringHost + "&utm_medium=html5game&utm_content=youtube-button&utm_campaign=" + gamename;
			realClick(urlsite);
		}
		
		
		
		//exportRoot.cover.youtube.addEventListener("click", youtubefunctionhere.bind(this));
		function youtubefunctionhere(event) {
			exportRoot.youtubelink();
		}
		
		
		/*this.addthegame = function () {
			window.open("https://www.youtube.com/channel/UCOWQZSa4WDtJFpvLGOepXjA", "_blank");
		}*/
		
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
		/*exportRoot.cover.fullscreenBtn.addEventListener("mousedown", toggleFullScreen);
		function toggleFullScreen() {
		  var doc = window.document;
		  var docEl = doc.documentElement;
		
		  var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
		  var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
		
		  if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
		    requestFullScreen.call(docEl);
		  }
		  else {
		    cancelFullScreen.call(doc);
		  }
		}*/
		this.stop();
		//this.maskanim.gotoAndPlay(0);
		var soundOn = 1;
		
		var isvisible = true;
		_main = this;
		
		stage.enableMouseOver();
		_main.playbut.cursor = "pointer";
		_main.soundBtn.cursor = "pointer";
		
		
		function overF1(evt){
			createjs.Tween.get(evt.target, {loop:false}).to({scaleX:1.1, scaleY:1.1}, 200);
		}
		function outF1(evt){	
			createjs.Tween.get(evt.target, {loop:false}).to({scaleX:1, scaleY:1}, 200);
		}
		
		_main.playbut.addEventListener("rollover", overF1)
		_main.playbut.addEventListener("rollout", outF1)
		_main.playbut.addEventListener("click", playClicked);
		function playClicked() {
			if(_main.soundBtn.currentFrame == 0){
				this.s2 = playSound("btn");
			}
			_main.bgSudBox1.gotoAndStop(1);
			//_main.gotoAndStop("level2");//selectPage level1
			_main.screenMc.gotoAndPlay(1);
		}
		if(_main.bgSudBox1.currentFrame == 0){
			_main.bgSudBox1.gotoAndStop(1);
			_main.bgsound1 = playSound("bg1", 1000);
			_main.soundBtn.addEventListener("click", playFunc01);
		}
		function playFunc01(){
			if(_main.currentLabel == "startPage" || _main.currentLabel == "selectPage" || _main.currentLabel == "finalPage"){
				if(_main.soundBtn.currentFrame == 0){
					_main.bgsound1.paused=true;
					_main.soundBtn.gotoAndStop(1);
				}else if(_main.soundBtn.currentFrame == 1){
					_main.bgsound1.paused=false;
					_main.soundBtn.gotoAndStop(0);
				}
			}else if(_main.currentLabel == "level1" || _main.currentLabel == "level2" || _main.currentLabel == "level3"){
				if(_main.soundBtn.currentFrame == 0){
					_main.bgsound2.paused=true;
					_main.soundBtn.gotoAndStop(1);
				}else if(_main.soundBtn.currentFrame == 1){
					if(_main.bgSudBox2.currentFrame == 0){
						_main.bgSudBox2.gotoAndStop(1);
						_main.bgsound2 = playSound("bg2", 1000);
					}else{
						_main.bgsound2.paused=false;
					}
					_main.soundBtn.gotoAndStop(0);
				}
			}
		}
		
		exportRoot.stopSnd = function () {
		
			if ( _main.currentLabel == "startPage" || _main.currentLabel == "selectPage" || _main.currentLabel == "finalPage") {
				soundOn = 0;
				_main.bgsound1.paused=true;
				_main.soundBtn.gotoAndStop(1);
			}else if (_main.currentLabel == "level1" || _main.currentLabel == "level2" || _main.currentLabel == "level3"){
				_main.bgsound2.paused=true;
					_main.soundBtn.gotoAndStop(1);
			}
		
		}
		
		
		exportRoot.startSnd = function () {
		
			soundOn = 1;
		
			_main.soundBtn.gotoAndStop(0);
		if (_main.currentLabel == "startPage" || _main.currentLabel == "selectPage" || _main.currentLabel == "finalPage") {
			_main.bgsound1.paused=false;
		}else if(_main.currentLabel == "level1" || _main.currentLabel == "level2" || _main.currentLabel == "level3"){
				_main.bgsound2.paused=false;
		}
			
		
		}
		_main.moreBtn1.cursor = "pointer";
		////_main.moreBtn1.addEventListener("rollover", overF1)
		////_main.moreBtn1.addEventListener("rollout", outF1)
		//_main.moreBtn1.addEventListener("click", showMoreGamesPop);
		//exportRoot.moregamesfunction();
		//function showMoreGamesPop() {
		//	if(_main.soundBtn.currentFrame == 0){
		//		this.s2 = playSound("btn");
		//	}
		//	window.open("#", "_blank");
		//}
		this.moreBtn1.addEventListener("click", exportRoot.moregamesfunction);
		
		
		
		setTimeout(initFun1, 30)
		function initFun1(){
			_main.titleMc.y = 100;
			_main.titleMc.alpha = 0;
			_main.playbut.y = 700;
			_main.playbut.alpha = 0;
			_main.moreBtn1.x = -00;
			_main.moreBtn1.alpha = 0;
			_main.modmc.x = 1300;
			_main.modmc.alpha = 0;
			_main.screenMc.gotoAndStop(55);
			setTimeout(initFun2, 500);
		}
		function initFun2(){
			_main.screenMc.gotoAndPlay(60);
			setTimeout(initFun3, 800);
		}
		function initFun3(){
			dressupSound();
			createjs.Tween.get(_main.modmc, {loop:false}).to({x:751, alpha:1}, 500);
			setTimeout(initFun4, 400);
		}
		function initFun4(){
			panelSound12();
			createjs.Tween.get(_main.titleMc, {loop:false}).to({y:278, alpha:1}, 500);
			setTimeout(initFun5, 400);
		}
		function initFun5(){
			panelSound12();
			console.log(_main.moreBtn1.x);
			createjs.Tween.get(_main.moreBtn1, {loop:false}).to({x:0, alpha:1}, 500);
			setTimeout(initFun6, 400);
		}
		function initFun6(){
			panelSound12();
			createjs.Tween.get(_main.playbut, {loop:false}).to({y:512, alpha:1}, 500);
		}
		
		this.screenFun = function(){
			_main.gotoAndStop("selectPage");
		}
		
		function panelSound12(){
			if(_main.soundBtn.currentFrame == 0){
				this.s2 = playSound("panel");
			}
		}
		function dressupSound(){
			if(_main.soundBtn.currentFrame == 0){
				this.s2 = playSound("panel");
			}
		}
		this.logobtn.cursor = "pointer";
		this.logobtn.addEventListener("click", fl_MouseClickHandler_99);
		
		function fl_MouseClickHandler_99()
		{
			logofunction();
		}
	}
	this.frame_1 = function() {
		this.stop();
		_th1 = this;
		this.moreBtn1.addEventListener("click",exportRoot.moregamesfunction);
		
		
		stage.enableMouseOver();
		
		function overF2(evt){
			createjs.Tween.get(evt.target, {loop:false}).to({scaleX:1.1, scaleY:1.1}, 200);
		}
		function outF2(evt){	
			createjs.Tween.get(evt.target, {loop:false}).to({scaleX:1, scaleY:1}, 200);
		}
		
		setTimeout(levelFun1, 30)
		function levelFun1(){
			_th1.screenMc.gotoAndPlay(55);
			_th1.lev1Btn.alpha = 0;
			_th1.lev1Btn.x = -250;
			_th1.lev2Btn.alpha = 0;
			_th1.lev2Btn.x = 1200;
			if(_th1.LevBox1.currentFrame == 0){
				_th1.lev1Btn.gotoAndStop(0);
				_th1.lev2Btn.gotoAndStop(0);
			}else if(_th1.LevBox1.currentFrame == 1){
				_th1.lev1Btn.gotoAndStop(1);
				_th1.lev2Btn.gotoAndStop(1);
			}
			setTimeout(levelFun2, 700)
		}
		function levelFun2(){
			panelSound12()
			createjs.Tween.get(_th1.lev1Btn, {loop:false}).to({x:254, alpha:1}, 400);
			createjs.Tween.get(_th1.lev2Btn, {loop:false}).to({x:779, alpha:1}, 400);
			setTimeout(levelFun3, 600)
		}
		function levelFun3(){	
			if(_th1.LevBox1.currentFrame == 0){
				_th1.lev1Btn.cursor = "pointer";
				_th1.lev1Btn.addEventListener("rollover", overF2)
				_th1.lev1Btn.addEventListener("rollout", outF2)
				_th1.lev1Btn.addEventListener("click", lev1BtnFun);
				_th1.lev1Btn.mouseEnabled = true;
			}
			if(_th1.LevBox1.currentFrame == 1){
				_th1.lev2Btn.cursor = "pointer";
				_th1.lev2Btn.addEventListener("rollover", overF2)
				_th1.lev2Btn.addEventListener("rollout", outF2)
				_th1.lev2Btn.addEventListener("click", lev2BtnFun);
				_th1.lev2Btn.mouseEnabled = true;
			}
		}
		
		function lev1BtnFun(evt) {
			if(_th1.soundBtn.currentFrame == 0){
				this.s2 = playSound("btn");
			}
			_main.bgSudBox1.gotoAndStop(1);
			_th1.lev1Btn.mouseEnabled = false;
			_th1.LevBox1.gotoAndStop(1);
			_th1.screenMc.gotoAndPlay(1);
		} 
		
		function lev2BtnFun(evt) {
			if(_th1.soundBtn.currentFrame == 0){
				this.s2 = playSound("btn");
			}
			_main.bgSudBox1.gotoAndStop(1);
			_th1.lev2Btn.mouseEnabled = false;
			_th1.LevBox1.gotoAndStop(2);
			_th1.screenMc.gotoAndPlay(1);
		}
		
		function panelSound12(){
			if(_main.soundBtn.currentFrame == 0){
				this.s2 = playSound("mix");
			}
		}
		
		this.screenFun = function(){
			if(_th1.LevBox1.currentFrame == 1){
				_th1.gotoAndStop("level1");
			}else if(_th1.LevBox1.currentFrame == 2){
				_th1.gotoAndStop("level2");
			}	
		}
		this.logobtn.cursor = "pointer";
		
		this.logobtn.addEventListener("click", fl_MouseClickHandler_9);
		
		function fl_MouseClickHandler_9()
		{
			logofunction();
		}
	}
	this.frame_2 = function() {
		this.stop();
		var _th2 = this;
		this.screenMc.gotoAndPlay(55);
		this.moreBtn_1.addEventListener("click", exportRoot.moregamesfunction);
		
		
		var checkNum01 = 0;
		var checkNum02 = 0;
		var checkNum03 = 0;
		
		var knifeNum = 0;
		var winNum = 0;
		var dist_Y;
		var dist_X;
		var angle;
		var degrees;
		
		function overF3(evt){
			createjs.Tween.get(evt.target, {loop:false}).to({scaleX:1.38, scaleY:1.38}, 200);
		}
		function outF3(evt){	
			createjs.Tween.get(evt.target, {loop:false}).to({scaleX:1.28, scaleY:1.28}, 200);
		}
		
		function overF4(evt){
			createjs.Tween.get(evt.target, {loop:false}).to({scaleX:0.83, scaleY:0.83}, 200);
		}
		function outF4(evt){	
			createjs.Tween.get(evt.target, {loop:false}).to({scaleX:0.73, scaleY:0.73}, 200);
		}
		stage.enableMouseOver();
		
		setTimeout(Lev1Fun_01, 50);
		function Lev1Fun_01(){
			if(_main.soundBtn.currentFrame == 0){
				if(_main.bgSudBox1.currentFrame == 1){
					_main.bgsound1.paused=true;
				}
				if(_main.bgSudBox2.currentFrame == 0){
					_main.bgSudBox2.gotoAndStop(1);
					_main.bgsound2 = playSound("bg2", 1000);
				}else if(_main.bgSudBox2.currentFrame == 1){
					_main.bgsound2.paused=false;
				}
			}
			_th2.model1.x = 1250;	
			_th2.panMc1.x = 1300;
			_th2.icon1.x = 143;
			_th2.icon1.icon2.y = 10;
			_th2.icon1.arr_1.alpha = 0;
			_th2.icon1.arr_2.alpha = 0;
			_th2.icon1.arr_1.y = 57;
			_th2.icon1.arr_2.y = -480;
			_th2.icon1.arr_1.gotoAndStop(0);
			_th2.icon1.arr_2.gotoAndStop(1);
			for(var i1 = 1; i1<=8; i1++){
				_th2.icon1.icon2["Mbtn"+i1].gotoAndStop(i1-1);
				_th2.icon1.icon2["Mbtn"+i1].cursor = "pointer";
				_th2.icon1.icon2["Mbtn"+i1].addEventListener("rollover", overF3)
				_th2.icon1.icon2["Mbtn"+i1].addEventListener("rollout", outF3)
			}
			for(var i2 = 1; i2<=3; i2++){
				_th2.icon1.icon2["Mbtn"+i2].scaleX = 0;
				_th2.icon1.icon2["Mbtn"+i2].scaleY = 0;
			}
			_th2.icon1.icon2.Mbtn4.gotoAndStop(3);
			//_th2.icon1.shadow = new createjs.Shadow("#000000", 1, 1, 10);
			_th2.model1.m1_item1.gotoAndStop("end");
			_th2.model1.m1_item2.gotoAndStop("end");
			_th2.model1.m1_item3.gotoAndStop("end");
			_th2.model1.m1_item4.gotoAndStop("end");
			_th2.model1.m1_item5.gotoAndStop("end");
			_th2.model1.m1_item6.gotoAndStop("end");
			_th2.model1.m1_item7.gotoAndStop("end");
			_th2.model1.m1_item8.gotoAndStop("end");
			_th2.model1.m1_item9.gotoAndStop("end");
			_th2.doneBtn1.x = 1120;
			_th2.moreBtn_1.x = -100;
			setTimeout(Lev1Fun_02, 600);
		}
		function Lev1Fun_02(){
			dressupSound()
			createjs.Tween.get(_th2.model1, {loop:false}).to({x:474}, 400);
			setTimeout(Lev1Fun_03, 600);
		}
		function Lev1Fun_03(){
			pannelSound()
			createjs.Tween.get(_th2.icon1.icon2.Mbtn1, {loop:false}).to({scaleX:1.28, scaleY:1.28}, 400);
			setTimeout(Lev1Fun_04, 300);
		}
		function Lev1Fun_04(){
			pannelSound()
			createjs.Tween.get(_th2.icon1.icon2.Mbtn2, {loop:false}).to({scaleX:1.28, scaleY:1.28}, 400);
			setTimeout(Lev1Fun_05, 300);
		}
		function Lev1Fun_05(){
			pannelSound()
			createjs.Tween.get(_th2.icon1.icon2.Mbtn3, {loop:false}).to({scaleX:1.28, scaleY:1.28}, 400);
			setTimeout(Lev1Fun_06, 300);
		}
		function Lev1Fun_06(){
			mixSound12()
			createjs.Tween.get(_th2.icon1.arr_1, {loop:false}).to({y:40, alpha:1}, 400);
			setTimeout(Lev1Fun_07, 400);
		}
		function Lev1Fun_07(){
			mixSound12()
			createjs.Tween.get(_th2.icon1.arr_2, {loop:false}).to({y:-457, alpha:1}, 400);
			setTimeout(Lev1Fun_08, 500);
		}
		function Lev1Fun_08(){	
			_th2.icon1.icon2.Mbtn1.addEventListener("click", Mbtn1Fun);
			_th2.icon1.icon2.Mbtn2.addEventListener("click", Mbtn2Fun);
			_th2.icon1.icon2.Mbtn3.addEventListener("click", Mbtn3Fun);
			_th2.icon1.icon2.Mbtn4.addEventListener("click", Mbtn4Fun);
			_th2.icon1.icon2.Mbtn5.addEventListener("click", Mbtn5Fun);
			_th2.icon1.icon2.Mbtn6.addEventListener("click", Mbtn6Fun);
			_th2.icon1.icon2.Mbtn7.addEventListener("click", Mbtn7Fun);
			_th2.icon1.icon2.Mbtn8.addEventListener("click", Mbtn8Fun);
			ar_Fun2();
			_th2.icon1.arr_1.addEventListener("click", arr_1Fun);
			_th2.icon1.arr_2.addEventListener("click", arr_2Fun);
			_th2.panMc1.arr_3.addEventListener("click", arr_3Fun);
			_th2.panMc1.arr_4.addEventListener("click", arr_4Fun);
			setTimeout(Lev1Fun_09, 300);
		}
		function Lev1Fun_09(){
			dressupSound()
			createjs.Tween.get(_th2.moreBtn_1, {loop:false}).to({x:52}, 400);
			createjs.Tween.get(_th2.doneBtn1, {loop:false}).to({x:975}, 400);
			_th2.doneBtn1.cursor = "pointer";
			_th2.doneBtn1.addEventListener("click", doneBtn1Fun);
			_th2.doneBtn1.addEventListener("rollover", overF4)
			_th2.doneBtn1.addEventListener("rollout", outF4)
		}
		
		function Mbtn1Fun(){
			btnSound();
			dressupSound();
			_th2.panMc1.x = 1200;
			_th2.panMc1.gotoAndStop("a1");
			createjs.Tween.get(_th2.panMc1, {loop:false}).to({x:927}, 400);
			for(var i1 = 1; i1<=5; i1++){
				_th2.panMc1.vb1["hh"+i1].gotoAndStop(i1-1);
				_th2.panMc1.vb1["hh"+i1].cursor = "pointer";
			}
			ar_Fun1();
			_th2.panMc1.vb1.y = 113;
			_th2.panMc1.vb1.hh1.addEventListener("click", hh1Fun);
			_th2.panMc1.vb1.hh2.addEventListener("click", hh2Fun);
			_th2.panMc1.vb1.hh3.addEventListener("click", hh3Fun);
			_th2.panMc1.vb1.hh4.addEventListener("click", hh4Fun);
			_th2.panMc1.vb1.hh5.addEventListener("click", hh5Fun);
		}
		function Mbtn2Fun(){
			btnSound();
			dressupSound();
			_th2.panMc1.x = 1200;
			_th2.panMc1.gotoAndStop("a2");
			createjs.Tween.get(_th2.panMc1, {loop:false}).to({x:927}, 400);
			_th2.panMc1.vb2.cursor = "pointer";	
			_th2.panMc1.vb2.gotoAndStop(0);	
			_th2.panMc1.vb2.addEventListener("click", vb2Fun);
			ar_Fun1();
		}
		function Mbtn3Fun(){
			btnSound();
			dressupSound();
			_th2.panMc1.x = 1200;
			_th2.panMc1.gotoAndStop("a3");
			createjs.Tween.get(_th2.panMc1, {loop:false}).to({x:927}, 400);
			_th2.panMc1.vb3.cursor = "pointer";	
			_th2.panMc1.vb3.gotoAndStop(0);	
			_th2.panMc1.vb3.addEventListener("click", vb3Fun);
			ar_Fun1();
		}
		function Mbtn4Fun(){
			btnSound();
			dressupSound();
			_th2.panMc1.x = 1200;
			_th2.panMc1.gotoAndStop("a4");
			createjs.Tween.get(_th2.panMc1, {loop:false}).to({x:927}, 400);
			_th2.panMc1.vb4.cursor = "pointer";	
			_th2.panMc1.vb4.gotoAndStop(0);	
			_th2.panMc1.vb4.addEventListener("click", vb4Fun);
			ar_Fun1();
		}
		function Mbtn5Fun(){
			btnSound();
			dressupSound();
			_th2.panMc1.x = 1200;
			_th2.panMc1.gotoAndStop("a5");
			createjs.Tween.get(_th2.panMc1, {loop:false}).to({x:927}, 400);
			for(var i1 = 1; i1<=6; i1++){
				_th2.panMc1.vb5["gg"+i1].cursor = "pointer";
			}
			ar_Fun1();
			_th2.panMc1.vb5.y = -7;
			_th2.panMc1.vb5.gg1.addEventListener("click", gg1Fun);
			_th2.panMc1.vb5.gg2.addEventListener("click", gg2Fun);
			_th2.panMc1.vb5.gg3.addEventListener("click", gg3Fun);
			_th2.panMc1.vb5.gg4.addEventListener("click", gg4Fun);
			_th2.panMc1.vb5.gg5.addEventListener("click", gg5Fun);
			_th2.panMc1.vb5.gg6.addEventListener("click", gg6Fun);
		}
		function Mbtn6Fun(){
			btnSound();
			dressupSound();
			_th2.panMc1.x = 1200;
			_th2.panMc1.gotoAndStop("a6");
			createjs.Tween.get(_th2.panMc1, {loop:false}).to({x:927}, 400);
			for(var i1 = 1; i1<=6; i1++){
				_th2.panMc1.vb6["kk"+i1].cursor = "pointer";
			}
			ar_Fun1();
			_th2.panMc1.vb6.y = -5;
			_th2.panMc1.vb6.kk1.addEventListener("click", kk1Fun);
			_th2.panMc1.vb6.kk2.addEventListener("click", kk2Fun);
			_th2.panMc1.vb6.kk3.addEventListener("click", kk3Fun);
			_th2.panMc1.vb6.kk4.addEventListener("click", kk4Fun);
			_th2.panMc1.vb6.kk5.addEventListener("click", kk5Fun);
			_th2.panMc1.vb6.kk6.addEventListener("click", kk6Fun);
		}
		function Mbtn7Fun(){
			btnSound();
			dressupSound();
			_th2.panMc1.x = 1200;
			_th2.panMc1.gotoAndStop("a7");
			createjs.Tween.get(_th2.panMc1, {loop:false}).to({x:927}, 400);
			for(var i1 = 1; i1<=6; i1++){
				_th2.panMc1.vb7["jj"+i1].cursor = "pointer";
			}	
			ar_Fun1();
			_th2.panMc1.vb7.y = -1;
			_th2.panMc1.vb7.jj1.addEventListener("click", jj1Fun);
			_th2.panMc1.vb7.jj2.addEventListener("click", jj2Fun);
			_th2.panMc1.vb7.jj3.addEventListener("click", jj3Fun);
			_th2.panMc1.vb7.jj4.addEventListener("click", jj4Fun);
			_th2.panMc1.vb7.jj5.addEventListener("click", jj5Fun);
			_th2.panMc1.vb7.jj6.addEventListener("click", jj6Fun);
		}
		function Mbtn8Fun(){
			btnSound();
			dressupSound();
			_th2.panMc1.x = 1200;
			_th2.panMc1.gotoAndStop("a8");
			createjs.Tween.get(_th2.panMc1, {loop:false}).to({x:927}, 400);
			for(var i1 = 1; i1<=6; i1++){
				_th2.panMc1.vb8["ss"+i1].cursor = "pointer";
			}
			ar_Fun1();
			_th2.panMc1.vb8.y = -7;
			_th2.panMc1.vb8.ss1.addEventListener("click", ss1Fun);
			_th2.panMc1.vb8.ss2.addEventListener("click", ss2Fun);
			_th2.panMc1.vb8.ss3.addEventListener("click", ss3Fun);
			_th2.panMc1.vb8.ss4.addEventListener("click", ss4Fun);
			_th2.panMc1.vb8.ss5.addEventListener("click", ss5Fun);
			_th2.panMc1.vb8.ss6.addEventListener("click", ss6Fun);
		}
		/***********************************************************************/
		
		function hh1Fun(){
			starMcSound();
			console.log("callll");
			if(_th2.model1.m1_item1.currentFrame != 1){
				_th2.starMc1.gotoAndStop(21);
				_th2.model1.m1_item1.gotoAndStop(1);
			}else{
				_th2.model1.m1_item1.gotoAndStop("end");	
			}	
		}
		function hh2Fun(){
			starMcSound();
			if(_th2.model1.m1_item1.currentFrame != 2){
				_th2.starMc1.gotoAndStop(21);
				_th2.model1.m1_item1.gotoAndStop(2);
			}else{
				_th2.model1.m1_item1.gotoAndStop("end");	
			}	
		}
		function hh3Fun(){
			starMcSound();
			if(_th2.model1.m1_item1.currentFrame != 3){
				_th2.starMc1.gotoAndStop(21);
				_th2.model1.m1_item1.gotoAndStop(3);
			}else{
				_th2.model1.m1_item1.gotoAndStop("end");	
			}	
		}
		function hh4Fun(){
			starMcSound();
			if(_th2.model1.m1_item1.currentFrame != 4){
				_th2.starMc1.gotoAndStop(21);
				_th2.model1.m1_item1.gotoAndStop(4);
			}else{
				_th2.model1.m1_item1.gotoAndStop("end");	
			}	
		}
		function hh5Fun(){
			starMcSound();
			if(_th2.model1.m1_item1.currentFrame != 5){
				_th2.starMc1.gotoAndStop(21);
				_th2.model1.m1_item1.gotoAndStop(5);
			}else{
				_th2.model1.m1_item1.gotoAndStop("end");	
			}	
		}
		
		function vb2Fun(){
			starMcSound();
			if(_th2.model1.m1_item2.currentFrame != _th2.panMc1.vb2.currentFrame){
				_th2.starMc1.gotoAndStop(22);
				_th2.model1.m1_item2.gotoAndStop(_th2.panMc1.vb2.currentFrame);
			}else{
				_th2.model1.m1_item2.gotoAndStop("end");	
			}	
		}
		
		function vb3Fun(){
			starMcSound();
			if(_th2.model1.m1_item3.currentFrame != _th2.panMc1.vb3.currentFrame){
				_th2.starMc1.gotoAndStop(23);
				_th2.model1.m1_item3.gotoAndStop(_th2.panMc1.vb3.currentFrame);
			}else{
				_th2.model1.m1_item3.gotoAndStop("end");	
			}	
		}
		
		function vb4Fun(){
			starMcSound();
			if(_th2.model1.m1_item4.currentFrame != _th2.panMc1.vb4.currentFrame){
				_th2.starMc1.gotoAndStop(24);
				_th2.model1.m1_item4.gotoAndStop(_th2.panMc1.vb4.currentFrame);
			}else{
				_th2.model1.m1_item4.gotoAndStop("end");	
			}	
		}
		
		function gg1Fun(){
			starMcSound();
			if(_th2.model1.m1_item5.currentFrame != 0){
				_th2.starMc1.gotoAndStop(25);
				_th2.model1.m1_item5.gotoAndStop(0);
				_th2.model1.m1_item9.gotoAndStop(0);
			}else{
				_th2.model1.m1_item5.gotoAndStop("end");	
				_th2.model1.m1_item9.gotoAndStop("end");
			}	
		}
		function gg2Fun(){
			starMcSound();
			if(_th2.model1.m1_item5.currentFrame != 1){
				_th2.starMc1.gotoAndStop(25);
				_th2.model1.m1_item5.gotoAndStop(1);
				_th2.model1.m1_item9.gotoAndStop(1);
			}else{
				_th2.model1.m1_item5.gotoAndStop("end");	
				_th2.model1.m1_item9.gotoAndStop("end");
			}	
		}
		function gg3Fun(){
			starMcSound();
			if(_th2.model1.m1_item5.currentFrame != 2){
				_th2.starMc1.gotoAndStop(25);
				_th2.model1.m1_item5.gotoAndStop(2);
				_th2.model1.m1_item9.gotoAndStop(2);
			}else{
				_th2.model1.m1_item5.gotoAndStop("end");	
				_th2.model1.m1_item9.gotoAndStop("end");
			}	
		}
		function gg4Fun(){
			starMcSound();
			if(_th2.model1.m1_item5.currentFrame != 3){
				_th2.starMc1.gotoAndStop(25);
				_th2.model1.m1_item5.gotoAndStop(3);
				_th2.model1.m1_item9.gotoAndStop(3);
			}else{
				_th2.model1.m1_item5.gotoAndStop("end");	
				_th2.model1.m1_item9.gotoAndStop("end");
			}	
		}
		function gg5Fun(){
			starMcSound();
			if(_th2.model1.m1_item5.currentFrame != 4){
				_th2.starMc1.gotoAndStop(25);
				_th2.model1.m1_item5.gotoAndStop(4);
				_th2.model1.m1_item9.gotoAndStop(4);
			}else{
				_th2.model1.m1_item5.gotoAndStop("end");	
				_th2.model1.m1_item9.gotoAndStop("end");
			}	
		}
		function gg6Fun(){
			starMcSound();
			if(_th2.model1.m1_item5.currentFrame != 5){
				_th2.starMc1.gotoAndStop(25);
				_th2.model1.m1_item5.gotoAndStop(5);
				_th2.model1.m1_item9.gotoAndStop(5);
			}else{
				_th2.model1.m1_item5.gotoAndStop("end");	
				_th2.model1.m1_item9.gotoAndStop("end");
			}	
		}
		
		function kk1Fun(){
			starMcSound();
			if(_th2.model1.m1_item6.currentFrame != 0){
				_th2.starMc1.gotoAndStop(26);
				_th2.model1.m1_item6.gotoAndStop(0);
			}else{
				_th2.model1.m1_item6.gotoAndStop("end");	
			}	
		}
		function kk2Fun(){
			starMcSound();
			if(_th2.model1.m1_item6.currentFrame != 1){
				_th2.starMc1.gotoAndStop(26);
				_th2.model1.m1_item6.gotoAndStop(1);
			}else{
				_th2.model1.m1_item6.gotoAndStop("end");	
			}	
		}
		function kk3Fun(){
			starMcSound();
			if(_th2.model1.m1_item6.currentFrame != 2){
				_th2.starMc1.gotoAndStop(26);
				_th2.model1.m1_item6.gotoAndStop(2);
			}else{
				_th2.model1.m1_item6.gotoAndStop("end");	
			}	
		}
		function kk4Fun(){
			starMcSound();
			if(_th2.model1.m1_item6.currentFrame != 3){
				_th2.starMc1.gotoAndStop(26);
				_th2.model1.m1_item6.gotoAndStop(3);
			}else{
				_th2.model1.m1_item6.gotoAndStop("end");	
			}	
		}
		function kk5Fun(){
			starMcSound();
			if(_th2.model1.m1_item6.currentFrame != 4){
				_th2.starMc1.gotoAndStop(26);
				_th2.model1.m1_item6.gotoAndStop(4);
			}else{
				_th2.model1.m1_item6.gotoAndStop("end");	
			}	
		}
		function kk6Fun(){
			starMcSound();
			if(_th2.model1.m1_item6.currentFrame != 5){
				_th2.starMc1.gotoAndStop(26);
				_th2.model1.m1_item6.gotoAndStop(5);
			}else{
				_th2.model1.m1_item6.gotoAndStop("end");	
			}	
		}
		
		function jj1Fun(){
			starMcSound();
			if(_th2.model1.m1_item7.currentFrame != 0){
				_th2.starMc1.gotoAndStop(27);
				_th2.model1.m1_item7.gotoAndStop(0);
			}else{
				_th2.model1.m1_item7.gotoAndStop("end");	
			}	
		}
		function jj2Fun(){
			starMcSound();
			if(_th2.model1.m1_item7.currentFrame != 1){
				_th2.starMc1.gotoAndStop(27);
				_th2.model1.m1_item7.gotoAndStop(1);
			}else{
				_th2.model1.m1_item7.gotoAndStop("end");	
			}	
		}
		function jj3Fun(){
			starMcSound();
			if(_th2.model1.m1_item7.currentFrame != 2){
				_th2.starMc1.gotoAndStop(27);
				_th2.model1.m1_item7.gotoAndStop(2);
			}else{
				_th2.model1.m1_item7.gotoAndStop("end");	
			}	
		}
		function jj4Fun(){
			starMcSound();
			if(_th2.model1.m1_item7.currentFrame != 3){
				_th2.starMc1.gotoAndStop(27);
				_th2.model1.m1_item7.gotoAndStop(3);
			}else{
				_th2.model1.m1_item7.gotoAndStop("end");	
			}	
		}
		function jj5Fun(){
			starMcSound();
			if(_th2.model1.m1_item7.currentFrame != 4){
				_th2.starMc1.gotoAndStop(27);
				_th2.model1.m1_item7.gotoAndStop(4);
			}else{
				_th2.model1.m1_item7.gotoAndStop("end");	
			}	
		}
		function jj6Fun(){
			starMcSound();
			if(_th2.model1.m1_item7.currentFrame != 5){
				_th2.starMc1.gotoAndStop(27);
				_th2.model1.m1_item7.gotoAndStop(5);
			}else{
				_th2.model1.m1_item7.gotoAndStop("end");	
			}	
		}
		
		function ss1Fun(){
			starMcSound();
			if(_th2.model1.m1_item8.currentFrame != 0){
				_th2.starMc1.gotoAndStop(28);
				_th2.model1.m1_item8.gotoAndStop(0);
			}else{
				_th2.model1.m1_item8.gotoAndStop("end");	
			}	
		}
		function ss2Fun(){
			starMcSound();
			if(_th2.model1.m1_item8.currentFrame != 1){
				_th2.starMc1.gotoAndStop(28);
				_th2.model1.m1_item8.gotoAndStop(1);
			}else{
				_th2.model1.m1_item8.gotoAndStop("end");	
			}	
		}
		function ss3Fun(){
			starMcSound();
			if(_th2.model1.m1_item8.currentFrame != 2){
				_th2.starMc1.gotoAndStop(28);
				_th2.model1.m1_item8.gotoAndStop(2);
			}else{
				_th2.model1.m1_item8.gotoAndStop("end");	
			}	
		}
		function ss4Fun(){
			starMcSound();
			if(_th2.model1.m1_item8.currentFrame != 3){
				_th2.starMc1.gotoAndStop(28);
				_th2.model1.m1_item8.gotoAndStop(3);
			}else{
				_th2.model1.m1_item8.gotoAndStop("end");	
			}	
		}
		function ss5Fun(){
			starMcSound();
			if(_th2.model1.m1_item8.currentFrame != 4){
				_th2.starMc1.gotoAndStop(28);
				_th2.model1.m1_item8.gotoAndStop(4);
			}else{
				_th2.model1.m1_item8.gotoAndStop("end");	
			}	
		}
		function ss6Fun(){
			starMcSound();
			if(_th2.model1.m1_item8.currentFrame != 5){
				_th2.starMc1.gotoAndStop(28);
				_th2.model1.m1_item8.gotoAndStop(5);
			}else{
				_th2.model1.m1_item8.gotoAndStop("end");	
			}	
		}
		
		
		/*******************************************************************/
		function arr_1Fun(){
			btnSound();
			mixSound12();
			_th2.icon1.arr_2.gotoAndStop(0);
			_th2.icon1.arr_2.mouseEnabled = true;
			if(_th2.icon1.icon2.y == 10){
				createjs.Tween.get(_th2.icon1.icon2, {loop:false}).to({y:-435}, 400);
			}else if(_th2.icon1.icon2.y == -435){
				_th2.icon1.arr_1.gotoAndStop(1);
				_th2.icon1.arr_1.mouseEnabled = false;
				createjs.Tween.get(_th2.icon1.icon2, {loop:false}).to({y:-730}, 400);
			}
		}
		function arr_2Fun(){
			btnSound();
			mixSound12();
			_th2.icon1.arr_1.gotoAndStop(0);
			_th2.icon1.arr_1.mouseEnabled = true;
			if(_th2.icon1.icon2.y == -435){
				_th2.icon1.arr_2.gotoAndStop(1);
				_th2.icon1.arr_2.mouseEnabled = false;
				createjs.Tween.get(_th2.icon1.icon2, {loop:false}).to({y:10}, 400);
			}else if(_th2.icon1.icon2.y == -730){		
				createjs.Tween.get(_th2.icon1.icon2, {loop:false}).to({y:-435}, 400);
			}
		}
		function arr_3Fun(){
			btnSound();
			mixSound12();
			if(_th2.panMc1.currentFrame == 0){
				if(_th2.panMc1.vb1.y == 113){
					_th2.panMc1.arr_4.gotoAndStop(0);
					_th2.panMc1.arr_4.mouseEnabled = true;
					_th2.panMc1.arr_3.gotoAndStop(1);
					_th2.panMc1.arr_3.mouseEnabled = false;
					createjs.Tween.get(_th2.panMc1.vb1, {loop:false}).to({y:-136}, 400);
				}
			}else if(_th2.panMc1.currentFrame == 1){
				_th2.panMc1.vb2.gotoAndStop(_th2.panMc1.vb2.currentFrame+1);
				_th2.panMc1.arr_4.gotoAndStop(0);
				_th2.panMc1.arr_4.mouseEnabled = true;
				if(_th2.panMc1.vb2.currentFrame == 11){			
					_th2.panMc1.arr_3.gotoAndStop(1);
					_th2.panMc1.arr_3.mouseEnabled = false;
				}
				_th2.panMc1.vb2.scaleX = 0;
				_th2.panMc1.vb2.scaleY = 0;
				createjs.Tween.get(_th2.panMc1.vb2, {loop:false}).to({scaleX:0.54, scaleY:0.54}, 300);
			}else if(_th2.panMc1.currentFrame == 2){
				_th2.panMc1.vb3.gotoAndStop(_th2.panMc1.vb3.currentFrame+1);
				_th2.panMc1.arr_4.gotoAndStop(0);
				_th2.panMc1.arr_4.mouseEnabled = true;
				if(_th2.panMc1.vb3.currentFrame == 5){			
					_th2.panMc1.arr_3.gotoAndStop(1);
					_th2.panMc1.arr_3.mouseEnabled = false;
				}
				_th2.panMc1.vb3.scaleX = 0;
				_th2.panMc1.vb3.scaleY = 0;
				createjs.Tween.get(_th2.panMc1.vb3, {loop:false}).to({scaleX:0.76, scaleY:0.76}, 300);
			}else if(_th2.panMc1.currentFrame == 3){
				_th2.panMc1.vb4.gotoAndStop(_th2.panMc1.vb4.currentFrame+1);
				_th2.panMc1.arr_4.gotoAndStop(0);
				_th2.panMc1.arr_4.mouseEnabled = true;
				if(_th2.panMc1.vb4.currentFrame == 5){			
					_th2.panMc1.arr_3.gotoAndStop(1);
					_th2.panMc1.arr_3.mouseEnabled = false;
				}
				_th2.panMc1.vb4.scaleX = 0;
				_th2.panMc1.vb4.scaleY = 0;
				createjs.Tween.get(_th2.panMc1.vb4, {loop:false}).to({scaleX:0.51, scaleY:0.51}, 300);
			}else if(_th2.panMc1.currentFrame == 4){
				if(_th2.panMc1.vb5.y == -7){
					_th2.panMc1.arr_4.gotoAndStop(0);
					_th2.panMc1.arr_4.mouseEnabled = true;
					_th2.panMc1.arr_3.gotoAndStop(1);
					_th2.panMc1.arr_3.mouseEnabled = false;
					createjs.Tween.get(_th2.panMc1.vb5, {loop:false}).to({y:-370}, 400);
				}
			}else if(_th2.panMc1.currentFrame == 5){
				if(_th2.panMc1.vb6.y == -5){
					_th2.panMc1.arr_4.gotoAndStop(0);
					_th2.panMc1.arr_4.mouseEnabled = true;
					_th2.panMc1.arr_3.gotoAndStop(1);
					_th2.panMc1.arr_3.mouseEnabled = false;
					createjs.Tween.get(_th2.panMc1.vb6, {loop:false}).to({y:-362}, 400);
				}
			}else if(_th2.panMc1.currentFrame == 6){
				if(_th2.panMc1.vb7.y == -1){
					_th2.panMc1.arr_4.gotoAndStop(0);
					_th2.panMc1.arr_4.mouseEnabled = true;			
					createjs.Tween.get(_th2.panMc1.vb7, {loop:false}).to({y:-363}, 400);
				}else if(_th2.panMc1.vb7.y == -363){
					_th2.panMc1.arr_3.gotoAndStop(1);
					_th2.panMc1.arr_3.mouseEnabled = false;
					createjs.Tween.get(_th2.panMc1.vb7, {loop:false}).to({y:-726}, 400);
				}
			}else if(_th2.panMc1.currentFrame == 7){
				if(_th2.panMc1.vb8.y == -7){
					_th2.panMc1.arr_4.gotoAndStop(0);
					_th2.panMc1.arr_4.mouseEnabled = true;
					_th2.panMc1.arr_3.gotoAndStop(1);
					_th2.panMc1.arr_3.mouseEnabled = false;
					createjs.Tween.get(_th2.panMc1.vb8, {loop:false}).to({y:-370}, 400);
				}
			}
		}
		
		function arr_4Fun(){
			btnSound();
			mixSound12();
			if(_th2.panMc1.currentFrame == 0){
				if(_th2.panMc1.vb1.y == -136){
					_th2.panMc1.arr_3.gotoAndStop(0);
					_th2.panMc1.arr_3.mouseEnabled = true;
					_th2.panMc1.arr_4.gotoAndStop(1);
					_th2.panMc1.arr_4.mouseEnabled = false;
					createjs.Tween.get(_th2.panMc1.vb1, {loop:false}).to({y:113}, 400);
				}
			}else if(_th2.panMc1.currentFrame == 1){
				_th2.panMc1.vb2.gotoAndStop(_th2.panMc1.vb2.currentFrame-1);
				_th2.panMc1.arr_3.gotoAndStop(0);
				_th2.panMc1.arr_3.mouseEnabled = true;
				if(_th2.panMc1.vb2.currentFrame == 0){			
					_th2.panMc1.arr_4.gotoAndStop(1);
					_th2.panMc1.arr_4.mouseEnabled = false;
				}
				_th2.panMc1.vb2.scaleX = 0;
				_th2.panMc1.vb2.scaleY = 0;
				createjs.Tween.get(_th2.panMc1.vb2, {loop:false}).to({scaleX:0.54, scaleY:0.54}, 300);
			}else if(_th2.panMc1.currentFrame == 2){
				_th2.panMc1.vb3.gotoAndStop(_th2.panMc1.vb3.currentFrame-1);
				_th2.panMc1.arr_3.gotoAndStop(0);
				_th2.panMc1.arr_3.mouseEnabled = true;
				if(_th2.panMc1.vb3.currentFrame == 5){			
					_th2.panMc1.arr_4.gotoAndStop(1);
					_th2.panMc1.arr_4.mouseEnabled = false;
				}
				_th2.panMc1.vb3.scaleX = 0;
				_th2.panMc1.vb3.scaleY = 0;
				createjs.Tween.get(_th2.panMc1.vb3, {loop:false}).to({scaleX:0.76, scaleY:0.76}, 300);
			}else if(_th2.panMc1.currentFrame == 3){
				_th2.panMc1.vb4.gotoAndStop(_th2.panMc1.vb4.currentFrame-1);
				_th2.panMc1.arr_3.gotoAndStop(0);
				_th2.panMc1.arr_3.mouseEnabled = true;
				if(_th2.panMc1.vb4.currentFrame == 5){			
					_th2.panMc1.arr_4.gotoAndStop(1);
					_th2.panMc1.arr_4.mouseEnabled = false;
				}
				_th2.panMc1.vb4.scaleX = 0;
				_th2.panMc1.vb4.scaleY = 0;
				createjs.Tween.get(_th2.panMc1.vb4, {loop:false}).to({scaleX:0.51, scaleY:0.51}, 300);
			}else if(_th2.panMc1.currentFrame == 4){
				if(_th2.panMc1.vb5.y == -370){
					_th2.panMc1.arr_4.gotoAndStop(0);
					_th2.panMc1.arr_4.mouseEnabled = true;
					_th2.panMc1.arr_3.gotoAndStop(1);
					_th2.panMc1.arr_3.mouseEnabled = false;
					createjs.Tween.get(_th2.panMc1.vb5, {loop:false}).to({y:-7}, 400);
				}
			}else if(_th2.panMc1.currentFrame == 5){
				if(_th2.panMc1.vb6.y == -362){
					_th2.panMc1.arr_3.gotoAndStop(0);
					_th2.panMc1.arr_3.mouseEnabled = true;
					_th2.panMc1.arr_4.gotoAndStop(1);
					_th2.panMc1.arr_4.mouseEnabled = false;
					createjs.Tween.get(_th2.panMc1.vb6, {loop:false}).to({y:-5}, 400);
				}
			}else if(_th2.panMc1.currentFrame == 6){
				if(_th2.panMc1.vb7.y == -363){
					_th2.panMc1.arr_4.gotoAndStop(0);
					_th2.panMc1.arr_4.mouseEnabled = false;			
					createjs.Tween.get(_th2.panMc1.vb7, {loop:false}).to({y:-1}, 400);
				}else if(_th2.panMc1.vb7.y == -726){
					_th2.panMc1.arr_3.gotoAndStop(0);
					_th2.panMc1.arr_3.mouseEnabled = true;
					createjs.Tween.get(_th2.panMc1.vb7, {loop:false}).to({y:-363}, 400);
				}
			}else if(_th2.panMc1.currentFrame == 7){
				if(_th2.panMc1.vb8.y == -370){
					_th2.panMc1.arr_3.gotoAndStop(0);
					_th2.panMc1.arr_3.mouseEnabled = true;
					_th2.panMc1.arr_4.gotoAndStop(1);
					_th2.panMc1.arr_4.mouseEnabled = false;
					createjs.Tween.get(_th2.panMc1.vb8, {loop:false}).to({y:-7}, 400);
				}
			}
		}
		
		function ar_Fun1(){
			_th2.panMc1.arr_3.cursor = "pointer";
			_th2.panMc1.arr_4.cursor = "pointer";
			_th2.panMc1.arr_3.gotoAndStop(0);
			_th2.panMc1.arr_3.mouseEnabled = true;
			_th2.panMc1.arr_4.gotoAndStop(1);
			_th2.panMc1.arr_4.mouseEnabled = false;
		}
		function ar_Fun2(){
			_th2.icon1.arr_1.cursor = "pointer";
			_th2.icon1.arr_2.cursor = "pointer";
			_th2.icon1.arr_1.gotoAndStop(0);
			_th2.icon1.arr_1.mouseEnabled = true;
			_th2.icon1.arr_2.gotoAndStop(1);
			_th2.icon1.arr_2.mouseEnabled = false;
		}
		
		this.startFun = function(){
			_th2.starMc1.gotoAndStop(0);
		}
		
		function btnSound(){
			if(_main.soundBtn.currentFrame == 0){
				this.s2 = playSound("btn");
			}
		}
		function pannelSound(){
			if(_main.soundBtn.currentFrame == 0){
				this.s2 = playSound("panel");
			}
		}
		function objectSound1(){
			if(_main.soundBtn.currentFrame == 0){
				this.s2 = playSound("objectfound");
			}
		}
		function screamSound(){
			if(_main.soundBtn.currentFrame == 0){
				_th2.scream1 = playSound("scream");
			}
		}
		function starMcSound(){
			if(_main.soundBtn.currentFrame == 0){
				_th2.door1 = playSound("starMc");
			}
		}
		function dressupSound(){
			if(_main.soundBtn.currentFrame == 0){
				this.s2 = playSound("panel");
			}
		}
		function mixSound12(){
			if(_main.soundBtn.currentFrame == 0){
				this.s2 = playSound("mix");
			}
		}
		
		function doneBtn1Fun(){
			btnSound();	
			pannelSound()
			createjs.Tween.get(_th2.doneBtn1, {loop:false}).to({x:1200}, 400);
			createjs.Tween.get(_th2.panMc1, {loop:false}).to({x:1200}, 400);
			createjs.Tween.get(_th2.icon1, {loop:false}).to({x:-300}, 400);
			_th2.starMc2.gotoAndStop(1);
			_th2.Box1.gotoAndStop(_th2.model1.m1_item1.currentFrame);
			_th2.Box2.gotoAndStop(_th2.model1.m1_item2.currentFrame);
			_th2.Box3.gotoAndStop(_th2.model1.m1_item3.currentFrame);
			_th2.Box4.gotoAndStop(_th2.model1.m1_item4.currentFrame);
			_th2.Box5.gotoAndStop(_th2.model1.m1_item5.currentFrame);
			_th2.Box6.gotoAndStop(_th2.model1.m1_item6.currentFrame);
			_th2.Box7.gotoAndStop(_th2.model1.m1_item7.currentFrame);
			_th2.Box8.gotoAndStop(_th2.model1.m1_item8.currentFrame);
			if(_main.soundBtn.currentFrame == 0){
				_th2.door2 = playSound("finalsnd");
				
			}
			removeEvent1();
			setTimeout(doneNxtFun, 2000);
			exportRoot.showAds();
		}
		function doneNxtFun(){
			_th2.screenMc.gotoAndPlay(1);
		}
		this.screenFun = function(){
			_th2.starMc2.gotoAndStop(0);
			if(_th2.soundBtn.currentFrame == 0){
				if(_th2.bgSudBox1.currentFrame == 1){
					_th2.bgsound1.paused=false;
				}
				if(_th2.bgSudBox2.currentFrame == 1){
					_th2.bgsound2.paused=true;
				}
			}
			_th2.gotoAndStop("selectPage");
		}
		
		function removeEvent1(){
			_th2.icon1.icon2.Mbtn1.removeEventListener("click", Mbtn1Fun);
			_th2.icon1.icon2.Mbtn2.removeEventListener("click", Mbtn2Fun);
			_th2.icon1.icon2.Mbtn3.removeEventListener("click", Mbtn3Fun);
			_th2.icon1.icon2.Mbtn4.removeEventListener("click", Mbtn4Fun);
			_th2.icon1.icon2.Mbtn5.removeEventListener("click", Mbtn5Fun);
			_th2.icon1.icon2.Mbtn6.removeEventListener("click", Mbtn6Fun);
			_th2.icon1.icon2.Mbtn7.removeEventListener("click", Mbtn7Fun);
			_th2.icon1.icon2.Mbtn8.removeEventListener("click", Mbtn8Fun);
			_th2.icon1.arr_1.removeEventListener("click", arr_1Fun);
			_th2.icon1.arr_2.removeEventListener("click", arr_2Fun);
			_th2.panMc1.arr_3.removeEventListener("click", arr_3Fun);
			_th2.panMc1.arr_4.removeEventListener("click", arr_4Fun);
			_th2.panMc1.vb1.hh1.removeEventListener("click", hh1Fun);
			_th2.panMc1.vb1.hh2.removeEventListener("click", hh2Fun);
			_th2.panMc1.vb1.hh3.removeEventListener("click", hh3Fun);
			_th2.panMc1.vb1.hh4.removeEventListener("click", hh4Fun);
			_th2.panMc1.vb1.hh5.removeEventListener("click", hh5Fun);
			_th2.panMc1.vb2.removeEventListener("click", vb2Fun);
			_th2.panMc1.vb3.removeEventListener("click", vb3Fun);
			_th2.panMc1.vb4.removeEventListener("click", vb4Fun);
			_th2.panMc1.vb5.gg1.removeEventListener("click", gg1Fun);
			_th2.panMc1.vb5.gg2.removeEventListener("click", gg2Fun);
			_th2.panMc1.vb5.gg3.removeEventListener("click", gg3Fun);
			_th2.panMc1.vb5.gg4.removeEventListener("click", gg4Fun);
			_th2.panMc1.vb5.gg5.removeEventListener("click", gg5Fun);
			_th2.panMc1.vb5.gg6.removeEventListener("click", gg6Fun);
			_th2.panMc1.vb6.kk1.removeEventListener("click", kk1Fun);
			_th2.panMc1.vb6.kk2.removeEventListener("click", kk2Fun);
			_th2.panMc1.vb6.kk3.removeEventListener("click", kk3Fun);
			_th2.panMc1.vb6.kk4.removeEventListener("click", kk4Fun);
			_th2.panMc1.vb6.kk5.removeEventListener("click", kk5Fun);
			_th2.panMc1.vb6.kk6.removeEventListener("click", kk6Fun);
			_th2.panMc1.vb7.jj1.removeEventListener("click", jj1Fun);
			_th2.panMc1.vb7.jj2.removeEventListener("click", jj2Fun);
			_th2.panMc1.vb7.jj3.removeEventListener("click", jj3Fun);
			_th2.panMc1.vb7.jj4.removeEventListener("click", jj4Fun);
			_th2.panMc1.vb7.jj5.removeEventListener("click", jj5Fun);
			_th2.panMc1.vb7.jj6.removeEventListener("click", jj6Fun);
			_th2.panMc1.vb8.ss1.removeEventListener("click", ss1Fun);
			_th2.panMc1.vb8.ss2.removeEventListener("click", ss2Fun);
			_th2.panMc1.vb8.ss3.removeEventListener("click", ss3Fun);
			_th2.panMc1.vb8.ss4.removeEventListener("click", ss4Fun);
			_th2.panMc1.vb8.ss5.removeEventListener("click", ss5Fun);
			_th2.panMc1.vb8.ss6.removeEventListener("click", ss6Fun);
		}
		this.logobtn.cursor = "pointer";
		this.logobtn.addEventListener("click", fl_MouseClickHandler_10);
		
		function fl_MouseClickHandler_10()
		{
			logofunction();
		}
	}
	this.frame_3 = function() {
		this.stop();
		var _th2 = this;
		this.screenMc.gotoAndPlay(55);
		this.moreBtn_2.addEventListener("click",exportRoot.moregamesfunction);
		
		
		var checkNum01 = 0;
		var checkNum02 = 0;
		var checkNum03 = 0;
		
		var knifeNum = 0;
		var winNum = 0;
		var dist_Y;
		var dist_X;
		var angle;
		var degrees;
		
		function overF3(evt){
			createjs.Tween.get(evt.target, {loop:false}).to({scaleX:1.38, scaleY:1.38}, 200);
		}
		function outF3(evt){	
			createjs.Tween.get(evt.target, {loop:false}).to({scaleX:1.28, scaleY:1.28}, 200);
		}
		
		function overF4(evt){
			createjs.Tween.get(evt.target, {loop:false}).to({scaleX:0.83, scaleY:0.83}, 200);
		}
		function outF4(evt){	
			createjs.Tween.get(evt.target, {loop:false}).to({scaleX:0.73, scaleY:0.73}, 200);
		}
		stage.enableMouseOver();
		
		setTimeout(Lev1Fun_01, 50);
		function Lev1Fun_01(){
			if(_main.soundBtn.currentFrame == 0){
				if(_main.bgSudBox1.currentFrame == 1){
					_main.bgsound1.paused=true;
				}
				if(_main.bgSudBox2.currentFrame == 0){
					_main.bgSudBox2.gotoAndStop(1);
					_main.bgsound2 = playSound("bg2", 1000);
				}else if(_main.bgSudBox2.currentFrame == 1){
					_main.bgsound2.paused=false;
				}
			}
			_th2.model2.x = 1250;	
			_th2.panMc_1.x = 1300;
			_th2.icon_1.x = 143;
			_th2.icon_1.icon_2.y = 10;
			_th2.icon_1.arr_01.alpha = 0;
			_th2.icon_1.arr_02.alpha = 0;
			_th2.icon_1.arr_01.y = 57;
			_th2.icon_1.arr_02.y = -480;
			_th2.icon_1.arr_01.gotoAndStop(0);
			_th2.icon_1.arr_02.gotoAndStop(1);
			for(var i1 = 1; i1<=8; i1++){
				_th2.icon_1.icon_2["Mbtn_"+i1].gotoAndStop(i1-1);
				_th2.icon_1.icon_2["Mbtn_"+i1].cursor = "pointer";
				_th2.icon_1.icon_2["Mbtn_"+i1].addEventListener("rollover", overF3)
				_th2.icon_1.icon_2["Mbtn_"+i1].addEventListener("rollout", outF3)
			}
			for(var i2 = 1; i2<=3; i2++){
				_th2.icon_1.icon_2["Mbtn_"+i2].scaleX = 0;
				_th2.icon_1.icon_2["Mbtn_"+i2].scaleY = 0;
			}
			_th2.icon_1.icon_2.Mbtn_4.gotoAndStop(3);
			//_th2.icon_1.shadow = new createjs.Shadow("#000000", 1, 1, 10);
			_th2.model2.m2_item1.gotoAndStop("end");
			_th2.model2.m2_item2.gotoAndStop("end");
			_th2.model2.m2_item3.gotoAndStop("end");
			_th2.model2.m2_item4.gotoAndStop("end");
			_th2.model2.m2_item5.gotoAndStop("end");
			_th2.model2.m2_item6.gotoAndStop("end");
			_th2.model2.m2_item7.gotoAndStop("end");
			_th2.model2.m2_item8.gotoAndStop("end");
			_th2.doneBtn2.x = 1120;
			_th2.moreBtn_2.x = -100;
			setTimeout(Lev1Fun_02, 600);
		}
		function Lev1Fun_02(){
			dressupSound()
			createjs.Tween.get(_th2.model2, {loop:false}).to({x:513}, 400);
			setTimeout(Lev1Fun_03, 600);
		}
		function Lev1Fun_03(){
			pannelSound()
			createjs.Tween.get(_th2.icon_1.icon_2.Mbtn_1, {loop:false}).to({scaleX:1.28, scaleY:1.28}, 400);
			setTimeout(Lev1Fun_04, 300);
		}
		function Lev1Fun_04(){
			pannelSound()
			createjs.Tween.get(_th2.icon_1.icon_2.Mbtn_2, {loop:false}).to({scaleX:1.28, scaleY:1.28}, 400);
			setTimeout(Lev1Fun_05, 300);
		}
		function Lev1Fun_05(){
			pannelSound()
			createjs.Tween.get(_th2.icon_1.icon_2.Mbtn_3, {loop:false}).to({scaleX:1.28, scaleY:1.28}, 400);
			setTimeout(Lev1Fun_06, 300);
		}
		function Lev1Fun_06(){
			mixSound12()
			createjs.Tween.get(_th2.icon_1.arr_01, {loop:false}).to({y:40, alpha:1}, 400);
			setTimeout(Lev1Fun_07, 400);
		}
		function Lev1Fun_07(){
			mixSound12()
			createjs.Tween.get(_th2.icon_1.arr_02, {loop:false}).to({y:-457, alpha:1}, 400);
			setTimeout(Lev1Fun_08, 500);
		}
		function Lev1Fun_08(){	
			_th2.icon_1.icon_2.Mbtn_1.addEventListener("click", Mbtn_1Fun);
			_th2.icon_1.icon_2.Mbtn_2.addEventListener("click", Mbtn_2Fun);
			_th2.icon_1.icon_2.Mbtn_3.addEventListener("click", Mbtn_3Fun);
			_th2.icon_1.icon_2.Mbtn_4.addEventListener("click", Mbtn_4Fun);
			_th2.icon_1.icon_2.Mbtn_5.addEventListener("click", Mbtn_5Fun);
			_th2.icon_1.icon_2.Mbtn_6.addEventListener("click", Mbtn_6Fun);
			_th2.icon_1.icon_2.Mbtn_7.addEventListener("click", Mbtn_7Fun);
			_th2.icon_1.icon_2.Mbtn_8.addEventListener("click", Mbtn_8Fun);
			ar_Fun2();
			_th2.icon_1.arr_01.addEventListener("click", arr_01Fun);
			_th2.icon_1.arr_02.addEventListener("click", arr_02Fun);
			_th2.panMc_1.arr_03.addEventListener("click", arr_03Fun);
			_th2.panMc_1.arr_04.addEventListener("click", arr_04Fun);
			setTimeout(Lev1Fun_09, 300);
		}
		function Lev1Fun_09(){
			dressupSound()
			createjs.Tween.get(_th2.moreBtn_2, {loop:false}).to({x:52}, 400);
			createjs.Tween.get(_th2.doneBtn2, {loop:false}).to({x:975}, 400);
			_th2.doneBtn2.cursor = "pointer";
			_th2.doneBtn2.addEventListener("click", doneBtn2Fun);
			_th2.doneBtn2.addEventListener("rollover", overF4)
			_th2.doneBtn2.addEventListener("rollout", outF4)
		}
		
		function Mbtn_1Fun(){
			btnSound();
			dressupSound();
			_th2.panMc_1.x = 1200;
			_th2.panMc_1.gotoAndStop("a1");
			createjs.Tween.get(_th2.panMc_1, {loop:false}).to({x:927}, 400);
			for(var i1 = 1; i1<=5; i1++){
				_th2.panMc_1.vb_1["hh_"+i1].gotoAndStop(i1-1);
				_th2.panMc_1.vb_1["hh_"+i1].cursor = "pointer";
			}
			ar_Fun1();
			_th2.panMc_1.vb_1.y = 113;
			_th2.panMc_1.vb_1.hh_1.addEventListener("click", hh_1Fun);
			_th2.panMc_1.vb_1.hh_2.addEventListener("click", hh_2Fun);
			_th2.panMc_1.vb_1.hh_3.addEventListener("click", hh_3Fun);
			_th2.panMc_1.vb_1.hh_4.addEventListener("click", hh_4Fun);
			_th2.panMc_1.vb_1.hh_5.addEventListener("click", hh_5Fun);
		}
		function Mbtn_2Fun(){
			btnSound();
			dressupSound();
			_th2.panMc_1.x = 1200;
			_th2.panMc_1.gotoAndStop("a2");
			createjs.Tween.get(_th2.panMc_1, {loop:false}).to({x:927}, 400);
			_th2.panMc_1.vb_2.cursor = "pointer";	
			_th2.panMc_1.vb_2.gotoAndStop(0);	
			_th2.panMc_1.vb_2.addEventListener("click", vb_2Fun);
			ar_Fun1();
		}
		function Mbtn_3Fun(){
			btnSound();
			dressupSound();
			_th2.panMc_1.x = 1200;
			_th2.panMc_1.gotoAndStop("a3");
			createjs.Tween.get(_th2.panMc_1, {loop:false}).to({x:927}, 400);
			_th2.panMc_1.vb_3.cursor = "pointer";	
			_th2.panMc_1.vb_3.gotoAndStop(0);	
			_th2.panMc_1.vb_3.addEventListener("click", vb_3Fun);
			ar_Fun1();
		}
		function Mbtn_4Fun(){
			btnSound();
			dressupSound();
			_th2.panMc_1.x = 1200;
			_th2.panMc_1.gotoAndStop("a4");
			createjs.Tween.get(_th2.panMc_1, {loop:false}).to({x:927}, 400);
			_th2.panMc_1.vb_4.cursor = "pointer";	
			_th2.panMc_1.vb_4.gotoAndStop(0);	
			_th2.panMc_1.vb_4.addEventListener("click", vb_4Fun);
			ar_Fun1();
		}
		function Mbtn_5Fun(){
			btnSound();
			dressupSound();
			_th2.panMc_1.x = 1200;
			_th2.panMc_1.gotoAndStop("a5");
			createjs.Tween.get(_th2.panMc_1, {loop:false}).to({x:927}, 400);
			for(var i1 = 1; i1<=6; i1++){
				_th2.panMc_1.vb_5["gg_"+i1].cursor = "pointer";
			}
			ar_Fun1();
			_th2.panMc_1.vb_5.y = -7;
			_th2.panMc_1.vb_5.gg_1.addEventListener("click", gg_1Fun);
			_th2.panMc_1.vb_5.gg_2.addEventListener("click", gg_2Fun);
			_th2.panMc_1.vb_5.gg_3.addEventListener("click", gg_3Fun);
			_th2.panMc_1.vb_5.gg_4.addEventListener("click", gg_4Fun);
			_th2.panMc_1.vb_5.gg_5.addEventListener("click", gg_5Fun);
			_th2.panMc_1.vb_5.gg_6.addEventListener("click", gg_6Fun);
		}
		function Mbtn_6Fun(){
			btnSound();
			dressupSound();
			_th2.panMc_1.x = 1200;
			_th2.panMc_1.gotoAndStop("a6");
			createjs.Tween.get(_th2.panMc_1, {loop:false}).to({x:927}, 400);
			for(var i1 = 1; i1<=6; i1++){
				_th2.panMc_1.vb_6["kk_"+i1].cursor = "pointer";
			}
			ar_Fun1();
			_th2.panMc_1.vb_6.y = -5;
			_th2.panMc_1.vb_6.kk_1.addEventListener("click", kk_1Fun);
			_th2.panMc_1.vb_6.kk_2.addEventListener("click", kk_2Fun);
			_th2.panMc_1.vb_6.kk_3.addEventListener("click", kk_3Fun);
			_th2.panMc_1.vb_6.kk_4.addEventListener("click", kk_4Fun);
			_th2.panMc_1.vb_6.kk_5.addEventListener("click", kk_5Fun);
			_th2.panMc_1.vb_6.kk_6.addEventListener("click", kk_6Fun);
		}
		function Mbtn_7Fun(){
			btnSound();
			dressupSound();
			_th2.panMc_1.x = 1200;
			_th2.panMc_1.gotoAndStop("a7");
			createjs.Tween.get(_th2.panMc_1, {loop:false}).to({x:927}, 400);
			for(var i1 = 1; i1<=6; i1++){
				_th2.panMc_1.vb_7["jj_"+i1].cursor = "pointer";
			}	
			ar_Fun1();
			_th2.panMc_1.vb_7.y = -1;
			_th2.panMc_1.vb_7.jj_1.addEventListener("click", jj_1Fun);
			_th2.panMc_1.vb_7.jj_2.addEventListener("click", jj_2Fun);
			_th2.panMc_1.vb_7.jj_3.addEventListener("click", jj_3Fun);
			_th2.panMc_1.vb_7.jj_4.addEventListener("click", jj_4Fun);
			_th2.panMc_1.vb_7.jj_5.addEventListener("click", jj_5Fun);
			_th2.panMc_1.vb_7.jj_6.addEventListener("click", jj_6Fun);
		}
		function Mbtn_8Fun(){
			btnSound();
			dressupSound();
			_th2.panMc_1.x = 1200;
			_th2.panMc_1.gotoAndStop("a8");
			createjs.Tween.get(_th2.panMc_1, {loop:false}).to({x:927}, 400);
			for(var i1 = 1; i1<=6; i1++){
				_th2.panMc_1.vb_8["ss_"+i1].cursor = "pointer";
			}
			ar_Fun1();
			_th2.panMc_1.vb_8.y = -7;
			_th2.panMc_1.vb_8.ss_1.addEventListener("click", ss_1Fun);
			_th2.panMc_1.vb_8.ss_2.addEventListener("click", ss_2Fun);
			_th2.panMc_1.vb_8.ss_3.addEventListener("click", ss_3Fun);
			_th2.panMc_1.vb_8.ss_4.addEventListener("click", ss_4Fun);
			_th2.panMc_1.vb_8.ss_5.addEventListener("click", ss_5Fun);
			_th2.panMc_1.vb_8.ss_6.addEventListener("click", ss_6Fun);
		}
		/***********************************************************************/
		
		function hh_1Fun(){
			starMcSound();
			if(_th2.model2.m2_item1.currentFrame != 1){
				_th2.starMc1.gotoAndStop(30);
				_th2.model2.m2_item1.gotoAndStop(1);
			}else{
				_th2.model2.m2_item1.gotoAndStop("end");	
			}	
		}
		function hh_2Fun(){
			starMcSound();
			if(_th2.model2.m2_item1.currentFrame != 2){
				_th2.starMc1.gotoAndStop(30);
				_th2.model2.m2_item1.gotoAndStop(2);
			}else{
				_th2.model2.m2_item1.gotoAndStop("end");	
			}	
		}
		function hh_3Fun(){
			starMcSound();
			if(_th2.model2.m2_item1.currentFrame != 3){
				_th2.starMc1.gotoAndStop(30);
				_th2.model2.m2_item1.gotoAndStop(3);
			}else{
				_th2.model2.m2_item1.gotoAndStop("end");	
			}	
		}
		function hh_4Fun(){
			starMcSound();
			if(_th2.model2.m2_item1.currentFrame != 4){
				_th2.starMc1.gotoAndStop(30);
				_th2.model2.m2_item1.gotoAndStop(4);
			}else{
				_th2.model2.m2_item1.gotoAndStop("end");	
			}	
		}
		function hh_5Fun(){
			starMcSound();
			if(_th2.model2.m2_item1.currentFrame != 5){
				_th2.starMc1.gotoAndStop(30);
				_th2.model2.m2_item1.gotoAndStop(5);
			}else{
				_th2.model2.m2_item1.gotoAndStop("end");	
			}	
		}
		
		function vb_2Fun(){
			starMcSound();
			if(_th2.model2.m2_item2.currentFrame != _th2.panMc_1.vb_2.currentFrame){
				_th2.starMc1.gotoAndStop(31);
				_th2.model2.m2_item2.gotoAndStop(_th2.panMc_1.vb_2.currentFrame);
			}else{
				_th2.model2.m2_item2.gotoAndStop("end");	
			}	
		}
		
		function vb_3Fun(){
			starMcSound();
			if(_th2.model2.m2_item3.currentFrame != _th2.panMc_1.vb_3.currentFrame){
				_th2.starMc1.gotoAndStop(32);
				_th2.model2.m2_item3.gotoAndStop(_th2.panMc_1.vb_3.currentFrame);
			}else{
				_th2.model2.m2_item3.gotoAndStop("end");	
			}	
		}
		
		function vb_4Fun(){
			starMcSound();
			if(_th2.model2.m2_item4.currentFrame != _th2.panMc_1.vb_4.currentFrame){
				_th2.starMc1.gotoAndStop(33);
				_th2.model2.m2_item4.gotoAndStop(_th2.panMc_1.vb_4.currentFrame);
			}else{
				_th2.model2.m2_item4.gotoAndStop("end");	
			}	
		}
		
		function gg_1Fun(){
			starMcSound();
			if(_th2.model2.m2_item5.currentFrame != 0){
				_th2.starMc1.gotoAndStop(34);
				_th2.model2.m2_item5.gotoAndStop(0);
			}else{
				_th2.model2.m2_item5.gotoAndStop("end");	
			}	
		}
		function gg_2Fun(){
			starMcSound();
			if(_th2.model2.m2_item5.currentFrame != 1){
				_th2.starMc1.gotoAndStop(34);
				_th2.model2.m2_item5.gotoAndStop(1);
			}else{
				_th2.model2.m2_item5.gotoAndStop("end");	
			}	
		}
		function gg_3Fun(){
			starMcSound();
			if(_th2.model2.m2_item5.currentFrame != 2){
				_th2.starMc1.gotoAndStop(34);
				_th2.model2.m2_item5.gotoAndStop(2);
			}else{
				_th2.model2.m2_item5.gotoAndStop("end");	
			}	
		}
		function gg_4Fun(){
			starMcSound();
			if(_th2.model2.m2_item5.currentFrame != 3){
				_th2.starMc1.gotoAndStop(34);
				_th2.model2.m2_item5.gotoAndStop(3);
			}else{
				_th2.model2.m2_item5.gotoAndStop("end");	
			}	
		}
		function gg_5Fun(){
			starMcSound();
			if(_th2.model2.m2_item5.currentFrame != 4){
				_th2.starMc1.gotoAndStop(34);
				_th2.model2.m2_item5.gotoAndStop(4);
			}else{
				_th2.model2.m2_item5.gotoAndStop("end");	
			}	
		}
		function gg_6Fun(){
			starMcSound();
			if(_th2.model2.m2_item5.currentFrame != 5){
				_th2.starMc1.gotoAndStop(34);
				_th2.model2.m2_item5.gotoAndStop(5);
			}else{
				_th2.model2.m2_item5.gotoAndStop("end");	
			}	
		}
		
		function kk_1Fun(){
			starMcSound();
			if(_th2.model2.m2_item6.currentFrame != 0){
				_th2.starMc1.gotoAndStop(35);
				_th2.model2.m2_item6.gotoAndStop(0);
			}else{
				_th2.model2.m2_item6.gotoAndStop("end");	
			}	
		}
		function kk_2Fun(){
			starMcSound();
			if(_th2.model2.m2_item6.currentFrame != 1){
				_th2.starMc1.gotoAndStop(35);
				_th2.model2.m2_item6.gotoAndStop(1);
			}else{
				_th2.model2.m2_item6.gotoAndStop("end");	
			}	
		}
		function kk_3Fun(){
			starMcSound();
			if(_th2.model2.m2_item6.currentFrame != 2){
				_th2.starMc1.gotoAndStop(35);
				_th2.model2.m2_item6.gotoAndStop(2);
			}else{
				_th2.model2.m2_item6.gotoAndStop("end");	
			}	
		}
		function kk_4Fun(){
			starMcSound();
			if(_th2.model2.m2_item6.currentFrame != 3){
				_th2.starMc1.gotoAndStop(35);
				_th2.model2.m2_item6.gotoAndStop(3);
			}else{
				_th2.model2.m2_item6.gotoAndStop("end");	
			}	
		}
		function kk_5Fun(){
			starMcSound();
			if(_th2.model2.m2_item6.currentFrame != 4){
				_th2.starMc1.gotoAndStop(35);
				_th2.model2.m2_item6.gotoAndStop(4);
			}else{
				_th2.model2.m2_item6.gotoAndStop("end");	
			}	
		}
		function kk_6Fun(){
			starMcSound();
			if(_th2.model2.m2_item6.currentFrame != 5){
				_th2.starMc1.gotoAndStop(35);
				_th2.model2.m2_item6.gotoAndStop(5);
			}else{
				_th2.model2.m2_item6.gotoAndStop("end");	
			}	
		}
		
		function jj_1Fun(){
			starMcSound();
			if(_th2.model2.m2_item7.currentFrame != 0){
				_th2.starMc1.gotoAndStop(36);
				_th2.model2.m2_item7.gotoAndStop(0);
			}else{
				_th2.model2.m2_item7.gotoAndStop("end");	
			}	
		}
		function jj_2Fun(){
			starMcSound();
			if(_th2.model2.m2_item7.currentFrame != 1){
				_th2.starMc1.gotoAndStop(36);
				_th2.model2.m2_item7.gotoAndStop(1);
			}else{
				_th2.model2.m2_item7.gotoAndStop("end");	
			}	
		}
		function jj_3Fun(){
			starMcSound();
			if(_th2.model2.m2_item7.currentFrame != 2){
				_th2.starMc1.gotoAndStop(36);
				_th2.model2.m2_item7.gotoAndStop(2);
			}else{
				_th2.model2.m2_item7.gotoAndStop("end");	
			}	
		}
		function jj_4Fun(){
			starMcSound();
			if(_th2.model2.m2_item7.currentFrame != 3){
				_th2.starMc1.gotoAndStop(36);
				_th2.model2.m2_item7.gotoAndStop(3);
			}else{
				_th2.model2.m2_item7.gotoAndStop("end");	
			}	
		}
		function jj_5Fun(){
			starMcSound();
			if(_th2.model2.m2_item7.currentFrame != 4){
				_th2.starMc1.gotoAndStop(36);
				_th2.model2.m2_item7.gotoAndStop(4);
			}else{
				_th2.model2.m2_item7.gotoAndStop("end");	
			}	
		}
		function jj_6Fun(){
			starMcSound();
			if(_th2.model2.m2_item7.currentFrame != 5){
				_th2.starMc1.gotoAndStop(36);
				_th2.model2.m2_item7.gotoAndStop(5);
			}else{
				_th2.model2.m2_item7.gotoAndStop("end");	
			}	
		}
		
		function ss_1Fun(){
			starMcSound();
			if(_th2.model2.m2_item8.currentFrame != 0){
				_th2.starMc1.gotoAndStop(37);
				_th2.model2.m2_item8.gotoAndStop(0);
			}else{
				_th2.model2.m2_item8.gotoAndStop("end");	
			}	
		}
		function ss_2Fun(){
			starMcSound();
			if(_th2.model2.m2_item8.currentFrame != 1){
				_th2.starMc1.gotoAndStop(37);
				_th2.model2.m2_item8.gotoAndStop(1);
			}else{
				_th2.model2.m2_item8.gotoAndStop("end");	
			}	
		}
		function ss_3Fun(){
			starMcSound();
			if(_th2.model2.m2_item8.currentFrame != 2){
				_th2.starMc1.gotoAndStop(37);
				_th2.model2.m2_item8.gotoAndStop(2);
			}else{
				_th2.model2.m2_item8.gotoAndStop("end");	
			}	
		}
		function ss_4Fun(){
			starMcSound();
			if(_th2.model2.m2_item8.currentFrame != 3){
				_th2.starMc1.gotoAndStop(37);
				_th2.model2.m2_item8.gotoAndStop(3);
			}else{
				_th2.model2.m2_item8.gotoAndStop("end");	
			}	
		}
		function ss_5Fun(){
			starMcSound();
			if(_th2.model2.m2_item8.currentFrame != 4){
				_th2.starMc1.gotoAndStop(37);
				_th2.model2.m2_item8.gotoAndStop(4);
			}else{
				_th2.model2.m2_item8.gotoAndStop("end");	
			}	
		}
		function ss_6Fun(){
			starMcSound();
			if(_th2.model2.m2_item8.currentFrame != 5){
				_th2.starMc1.gotoAndStop(37);
				_th2.model2.m2_item8.gotoAndStop(5);
			}else{
				_th2.model2.m2_item8.gotoAndStop("end");	
			}	
		}
		
		
		/*******************************************************************/
		function arr_01Fun(){
			btnSound();
			mixSound12();
			_th2.icon_1.arr_02.gotoAndStop(0);
			_th2.icon_1.arr_02.mouseEnabled = true;
			if(_th2.icon_1.icon_2.y == 10){
				createjs.Tween.get(_th2.icon_1.icon_2, {loop:false}).to({y:-435}, 400);
			}else if(_th2.icon_1.icon_2.y == -435){
				_th2.icon_1.arr_01.gotoAndStop(1);
				_th2.icon_1.arr_01.mouseEnabled = false;
				createjs.Tween.get(_th2.icon_1.icon_2, {loop:false}).to({y:-730}, 400);
			}
		}
		function arr_02Fun(){
			btnSound();
			mixSound12();
			_th2.icon_1.arr_01.gotoAndStop(0);
			_th2.icon_1.arr_01.mouseEnabled = true;
			if(_th2.icon_1.icon_2.y == -435){
				_th2.icon_1.arr_02.gotoAndStop(1);
				_th2.icon_1.arr_02.mouseEnabled = false;
				createjs.Tween.get(_th2.icon_1.icon_2, {loop:false}).to({y:10}, 400);
			}else if(_th2.icon_1.icon_2.y == -730){		
				createjs.Tween.get(_th2.icon_1.icon_2, {loop:false}).to({y:-435}, 400);
			}
		}
		function arr_03Fun(){
			btnSound();
			mixSound12();
			if(_th2.panMc_1.currentFrame == 0){
				if(_th2.panMc_1.vb_1.y == 113){
					_th2.panMc_1.arr_04.gotoAndStop(0);
					_th2.panMc_1.arr_04.mouseEnabled = true;
					_th2.panMc_1.arr_03.gotoAndStop(1);
					_th2.panMc_1.arr_03.mouseEnabled = false;
					createjs.Tween.get(_th2.panMc_1.vb_1, {loop:false}).to({y:-136}, 400);
				}
			}else if(_th2.panMc_1.currentFrame == 1){
				_th2.panMc_1.vb_2.gotoAndStop(_th2.panMc_1.vb_2.currentFrame+1);
				_th2.panMc_1.arr_04.gotoAndStop(0);
				_th2.panMc_1.arr_04.mouseEnabled = true;
				if(_th2.panMc_1.vb_2.currentFrame == 11){			
					_th2.panMc_1.arr_03.gotoAndStop(1);
					_th2.panMc_1.arr_03.mouseEnabled = false;
				}
				_th2.panMc_1.vb_2.scaleX = 0;
				_th2.panMc_1.vb_2.scaleY = 0;
				createjs.Tween.get(_th2.panMc_1.vb_2, {loop:false}).to({scaleX:0.39, scaleY:0.39}, 300);
			}else if(_th2.panMc_1.currentFrame == 2){
				_th2.panMc_1.vb_3.gotoAndStop(_th2.panMc_1.vb_3.currentFrame+1);
				_th2.panMc_1.arr_04.gotoAndStop(0);
				_th2.panMc_1.arr_04.mouseEnabled = true;
				if(_th2.panMc_1.vb_3.currentFrame == 5){			
					_th2.panMc_1.arr_03.gotoAndStop(1);
					_th2.panMc_1.arr_03.mouseEnabled = false;
				}
				_th2.panMc_1.vb_3.scaleX = 0;
				_th2.panMc_1.vb_3.scaleY = 0;
				createjs.Tween.get(_th2.panMc_1.vb_3, {loop:false}).to({scaleX:0.27, scaleY:0.27}, 300);
			}else if(_th2.panMc_1.currentFrame == 3){
				_th2.panMc_1.vb_4.gotoAndStop(_th2.panMc_1.vb_4.currentFrame+1);
				_th2.panMc_1.arr_04.gotoAndStop(0);
				_th2.panMc_1.arr_04.mouseEnabled = true;
				if(_th2.panMc_1.vb_4.currentFrame == 5){			
					_th2.panMc_1.arr_03.gotoAndStop(1);
					_th2.panMc_1.arr_03.mouseEnabled = false;
				}
				_th2.panMc_1.vb_4.scaleX = 0;
				_th2.panMc_1.vb_4.scaleY = 0;
				createjs.Tween.get(_th2.panMc_1.vb_4, {loop:false}).to({scaleX:0.55, scaleY:0.55}, 300);
			}else if(_th2.panMc_1.currentFrame == 4){
				if(_th2.panMc_1.vb_5.y == -7){
					_th2.panMc_1.arr_04.gotoAndStop(0);
					_th2.panMc_1.arr_04.mouseEnabled = true;
					_th2.panMc_1.arr_03.gotoAndStop(1);
					_th2.panMc_1.arr_03.mouseEnabled = false;
					createjs.Tween.get(_th2.panMc_1.vb_5, {loop:false}).to({y:-370}, 400);
				}
			}else if(_th2.panMc_1.currentFrame == 5){
				if(_th2.panMc_1.vb_6.y == -5){
					_th2.panMc_1.arr_04.gotoAndStop(0);
					_th2.panMc_1.arr_04.mouseEnabled = true;
					_th2.panMc_1.arr_03.gotoAndStop(1);
					_th2.panMc_1.arr_03.mouseEnabled = false;
					createjs.Tween.get(_th2.panMc_1.vb_6, {loop:false}).to({y:-362}, 400);
				}
			}else if(_th2.panMc_1.currentFrame == 6){
				if(_th2.panMc_1.vb_7.y == -1){
					_th2.panMc_1.arr_04.gotoAndStop(0);
					_th2.panMc_1.arr_04.mouseEnabled = true;			
					createjs.Tween.get(_th2.panMc_1.vb_7, {loop:false}).to({y:-363}, 400);
				}else if(_th2.panMc_1.vb_7.y == -363){
					_th2.panMc_1.arr_03.gotoAndStop(1);
					_th2.panMc_1.arr_03.mouseEnabled = false;
					createjs.Tween.get(_th2.panMc_1.vb_7, {loop:false}).to({y:-726}, 400);
				}
			}else if(_th2.panMc_1.currentFrame == 7){
				if(_th2.panMc_1.vb_8.y == -7){
					_th2.panMc_1.arr_04.gotoAndStop(0);
					_th2.panMc_1.arr_04.mouseEnabled = true;
					_th2.panMc_1.arr_03.gotoAndStop(1);
					_th2.panMc_1.arr_03.mouseEnabled = false;
					createjs.Tween.get(_th2.panMc_1.vb_8, {loop:false}).to({y:-370}, 400);
				}
			}
		}
		
		function arr_04Fun(){
			btnSound();
			mixSound12();
			if(_th2.panMc_1.currentFrame == 0){
				if(_th2.panMc_1.vb_1.y == -136){
					_th2.panMc_1.arr_03.gotoAndStop(0);
					_th2.panMc_1.arr_03.mouseEnabled = true;
					_th2.panMc_1.arr_04.gotoAndStop(1);
					_th2.panMc_1.arr_04.mouseEnabled = false;
					createjs.Tween.get(_th2.panMc_1.vb_1, {loop:false}).to({y:113}, 400);
				}
			}else if(_th2.panMc_1.currentFrame == 1){
				_th2.panMc_1.vb_2.gotoAndStop(_th2.panMc_1.vb_2.currentFrame-1);
				_th2.panMc_1.arr_03.gotoAndStop(0);
				_th2.panMc_1.arr_03.mouseEnabled = true;
				if(_th2.panMc_1.vb_2.currentFrame == 0){			
					_th2.panMc_1.arr_04.gotoAndStop(1);
					_th2.panMc_1.arr_04.mouseEnabled = false;
				}
				_th2.panMc_1.vb_2.scaleX = 0;
				_th2.panMc_1.vb_2.scaleY = 0;
				createjs.Tween.get(_th2.panMc_1.vb_2, {loop:false}).to({scaleX:0.54, scaleY:0.54}, 300);
			}else if(_th2.panMc_1.currentFrame == 2){
				_th2.panMc_1.vb_3.gotoAndStop(_th2.panMc_1.vb_3.currentFrame-1);
				_th2.panMc_1.arr_03.gotoAndStop(0);
				_th2.panMc_1.arr_03.mouseEnabled = true;
				if(_th2.panMc_1.vb_3.currentFrame == 5){			
					_th2.panMc_1.arr_04.gotoAndStop(1);
					_th2.panMc_1.arr_04.mouseEnabled = false;
				}
				_th2.panMc_1.vb_3.scaleX = 0;
				_th2.panMc_1.vb_3.scaleY = 0;
				createjs.Tween.get(_th2.panMc_1.vb_3, {loop:false}).to({scaleX:0.38, scaleY:0.38}, 300);
			}else if(_th2.panMc_1.currentFrame == 3){
				_th2.panMc_1.vb_4.gotoAndStop(_th2.panMc_1.vb_4.currentFrame-1);
				_th2.panMc_1.arr_03.gotoAndStop(0);
				_th2.panMc_1.arr_03.mouseEnabled = true;
				if(_th2.panMc_1.vb_4.currentFrame == 5){			
					_th2.panMc_1.arr_04.gotoAndStop(1);
					_th2.panMc_1.arr_04.mouseEnabled = false;
				}
				_th2.panMc_1.vb_4.scaleX = 0;
				_th2.panMc_1.vb_4.scaleY = 0;
				createjs.Tween.get(_th2.panMc_1.vb_4, {loop:false}).to({scaleX:0.51, scaleY:0.51}, 300);
			}else if(_th2.panMc_1.currentFrame == 4){
				if(_th2.panMc_1.vb_5.y == -370){
					_th2.panMc_1.arr_04.gotoAndStop(0);
					_th2.panMc_1.arr_04.mouseEnabled = true;
					_th2.panMc_1.arr_03.gotoAndStop(1);
					_th2.panMc_1.arr_03.mouseEnabled = false;
					createjs.Tween.get(_th2.panMc_1.vb_5, {loop:false}).to({y:-7}, 400);
				}
			}else if(_th2.panMc_1.currentFrame == 5){
				if(_th2.panMc_1.vb_6.y == -362){
					_th2.panMc_1.arr_03.gotoAndStop(0);
					_th2.panMc_1.arr_03.mouseEnabled = true;
					_th2.panMc_1.arr_04.gotoAndStop(1);
					_th2.panMc_1.arr_04.mouseEnabled = false;
					createjs.Tween.get(_th2.panMc_1.vb_6, {loop:false}).to({y:-5}, 400);
				}
			}else if(_th2.panMc_1.currentFrame == 6){
				if(_th2.panMc_1.vb_7.y == -363){
					_th2.panMc_1.arr_04.gotoAndStop(0);
					_th2.panMc_1.arr_04.mouseEnabled = false;			
					createjs.Tween.get(_th2.panMc_1.vb_7, {loop:false}).to({y:-1}, 400);
				}else if(_th2.panMc_1.vb_7.y == -726){
					_th2.panMc_1.arr_03.gotoAndStop(0);
					_th2.panMc_1.arr_03.mouseEnabled = true;
					createjs.Tween.get(_th2.panMc_1.vb_7, {loop:false}).to({y:-363}, 400);
				}
			}else if(_th2.panMc_1.currentFrame == 7){
				if(_th2.panMc_1.vb_8.y == -370){
					_th2.panMc_1.arr_03.gotoAndStop(0);
					_th2.panMc_1.arr_03.mouseEnabled = true;
					_th2.panMc_1.arr_04.gotoAndStop(1);
					_th2.panMc_1.arr_04.mouseEnabled = false;
					createjs.Tween.get(_th2.panMc_1.vb_8, {loop:false}).to({y:-7}, 400);
				}
			}
		}
		
		function ar_Fun1(){
			_th2.panMc_1.arr_03.cursor = "pointer";
			_th2.panMc_1.arr_04.cursor = "pointer";
			_th2.panMc_1.arr_03.gotoAndStop(0);
			_th2.panMc_1.arr_03.mouseEnabled = true;
			_th2.panMc_1.arr_04.gotoAndStop(1);
			_th2.panMc_1.arr_04.mouseEnabled = false;
		}
		function ar_Fun2(){
			_th2.icon_1.arr_01.cursor = "pointer";
			_th2.icon_1.arr_02.cursor = "pointer";
			_th2.icon_1.arr_01.gotoAndStop(0);
			_th2.icon_1.arr_01.mouseEnabled = true;
			_th2.icon_1.arr_02.gotoAndStop(1);
			_th2.icon_1.arr_02.mouseEnabled = false;
		}
		
		this.startFun = function(){
			_th2.starMc1.gotoAndStop(0);
		}
		
		function btnSound(){
			if(_main.soundBtn.currentFrame == 0){
				this.s2 = playSound("btn");
			}
		}
		function pannelSound(){
			if(_main.soundBtn.currentFrame == 0){
				this.s2 = playSound("panel");
			}
		}
		function objectSound1(){
			if(_main.soundBtn.currentFrame == 0){
				this.s2 = playSound("objectfound");
			}
		}
		function screamSound(){
			if(_main.soundBtn.currentFrame == 0){
				_th2.scream1 = playSound("scream");
			}
		}
		function starMcSound(){
			if(_main.soundBtn.currentFrame == 0){
				_th2.door1 = playSound("starMc");
			}
		}
		function dressupSound(){
			if(_main.soundBtn.currentFrame == 0){
				this.s2 = playSound("panel");
			}
		}
		function mixSound12(){
			if(_main.soundBtn.currentFrame == 0){
				this.s2 = playSound("mix");
			}
		}
		
		function doneBtn2Fun(){
			btnSound();	
			pannelSound()
			createjs.Tween.get(_th2.doneBtn2, {loop:false}).to({x:1200}, 400);
			createjs.Tween.get(_th2.panMc_1, {loop:false}).to({x:1200}, 400);
			createjs.Tween.get(_th2.icon_1, {loop:false}).to({x:-300}, 400);
			_th2.starMc2.gotoAndStop(1);
			if(_main.soundBtn.currentFrame == 0){
				_th2.door2 = playSound("finalsnd");
			}
			removeEvent2();
			setTimeout(doneNxtFun, 2000);
			exportRoot.showAds();
		}
		function doneNxtFun(){
			_th2.screenMc.gotoAndPlay(1);
		}
		this.screenFun = function(){
			_th2.starMc2.gotoAndStop(0);
			if(_th2.soundBtn.currentFrame == 0){
				if(_th2.bgSudBox1.currentFrame == 1){
					_th2.bgsound1.paused=false;
				}
				if(_th2.bgSudBox2.currentFrame == 1){
					_th2.bgsound2.paused=true;
				}
			}
			_main.gotoAndStop("finalPage");
		}
		
		function removeEvent2(){
			_th2.icon_1.icon_2.Mbtn_1.removeEventListener("click", Mbtn_1Fun);
			_th2.icon_1.icon_2.Mbtn_2.removeEventListener("click", Mbtn_2Fun);
			_th2.icon_1.icon_2.Mbtn_3.removeEventListener("click", Mbtn_3Fun);
			_th2.icon_1.icon_2.Mbtn_4.removeEventListener("click", Mbtn_4Fun);
			_th2.icon_1.icon_2.Mbtn_5.removeEventListener("click", Mbtn_5Fun);
			_th2.icon_1.icon_2.Mbtn_6.removeEventListener("click", Mbtn_6Fun);
			_th2.icon_1.icon_2.Mbtn_7.removeEventListener("click", Mbtn_7Fun);
			_th2.icon_1.icon_2.Mbtn_8.removeEventListener("click", Mbtn_8Fun);
			_th2.icon_1.arr_01.removeEventListener("click", arr_01Fun);
			_th2.icon_1.arr_02.removeEventListener("click", arr_02Fun);
			_th2.panMc_1.arr_03.removeEventListener("click", arr_03Fun);
			_th2.panMc_1.arr_04.removeEventListener("click", arr_04Fun);
			_th2.panMc_1.vb_1.hh_1.removeEventListener("click", hh_1Fun);
			_th2.panMc_1.vb_1.hh_2.removeEventListener("click", hh_2Fun);
			_th2.panMc_1.vb_1.hh_3.removeEventListener("click", hh_3Fun);
			_th2.panMc_1.vb_1.hh_4.removeEventListener("click", hh_4Fun);
			_th2.panMc_1.vb_1.hh_5.removeEventListener("click", hh_5Fun);
			_th2.panMc_1.vb_2.removeEventListener("click", vb_2Fun);
			_th2.panMc_1.vb_3.removeEventListener("click", vb_3Fun);
			_th2.panMc_1.vb_4.removeEventListener("click", vb_4Fun);
			_th2.panMc_1.vb_5.gg_1.removeEventListener("click", gg_1Fun);
			_th2.panMc_1.vb_5.gg_2.removeEventListener("click", gg_2Fun);
			_th2.panMc_1.vb_5.gg_3.removeEventListener("click", gg_3Fun);
			_th2.panMc_1.vb_5.gg_4.removeEventListener("click", gg_4Fun);
			_th2.panMc_1.vb_5.gg_5.removeEventListener("click", gg_5Fun);
			_th2.panMc_1.vb_5.gg_6.removeEventListener("click", gg_6Fun);
			_th2.panMc_1.vb_6.kk_1.removeEventListener("click", kk_1Fun);
			_th2.panMc_1.vb_6.kk_2.removeEventListener("click", kk_2Fun);
			_th2.panMc_1.vb_6.kk_3.removeEventListener("click", kk_3Fun);
			_th2.panMc_1.vb_6.kk_4.removeEventListener("click", kk_4Fun);
			_th2.panMc_1.vb_6.kk_5.removeEventListener("click", kk_5Fun);
			_th2.panMc_1.vb_6.kk_6.removeEventListener("click", kk_6Fun);
			_th2.panMc_1.vb_7.jj_1.removeEventListener("click", jj_1Fun);
			_th2.panMc_1.vb_7.jj_2.removeEventListener("click", jj_2Fun);
			_th2.panMc_1.vb_7.jj_3.removeEventListener("click", jj_3Fun);
			_th2.panMc_1.vb_7.jj_4.removeEventListener("click", jj_4Fun);
			_th2.panMc_1.vb_7.jj_5.removeEventListener("click", jj_5Fun);
			_th2.panMc_1.vb_7.jj_6.removeEventListener("click", jj_6Fun);
			_th2.panMc_1.vb_8.ss_1.removeEventListener("click", ss_1Fun);
			_th2.panMc_1.vb_8.ss_2.removeEventListener("click", ss_2Fun);
			_th2.panMc_1.vb_8.ss_3.removeEventListener("click", ss_3Fun);
			_th2.panMc_1.vb_8.ss_4.removeEventListener("click", ss_4Fun);
			_th2.panMc_1.vb_8.ss_5.removeEventListener("click", ss_5Fun);
			_th2.panMc_1.vb_8.ss_6.removeEventListener("click", ss_6Fun);
		}
		this.logobtn.cursor = "pointer";
		
		this.logobtn.addEventListener("click", fl_MouseClickHandler_11);
		
		function fl_MouseClickHandler_11()
		{
			logofunction();
		}
	}
	this.frame_4 = function() {
		this.stop();
		var _th6 = this;
		this.screenMc.gotoAndPlay(55);
		this.moreBtn6.addEventListener("click", exportRoot.moregamesfunction);
		_th6.poza1.addEventListener("click", exportRoot.poza1link);
		_th6.poza2.addEventListener("click", exportRoot.poza2link);
		this.replayBtn.cursor = "pointer";
		this.poza1.cursor = "pointer";
		this.poza2.cursor = "pointer";
		
		this.poza1.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		
		function fl_MouseClickHandler_2()
		{
		exportRoot.poza1link();
		}
		
		
		
		this.poza2.addEventListener("click", fl_MouseClickHandler_3.bind(this));
		
		function fl_MouseClickHandler_3()
		{
			exportRoot.poza2link();
		}
		
		
		function overF6(evt){
			createjs.Tween.get(evt.target, {loop:false}).to({scaleX:0.95, scaleY:0.95}, 200);
		}
		function outF6(evt){	
			createjs.Tween.get(evt.target, {loop:false}).to({scaleX:0.87, scaleY:0.87}, 200);
		}
		stage.enableMouseOver();
		
		if(_main.soundBtn.currentFrame == 0){
			this.s02 = playSound("winner");
		}
		
		setTimeout(ff_fun1, 30);
		function ff_fun1(){	
			_th6.model3.x = -250;
			_th6.model2.x = 1250;
			_th6.moreBtn6.y = 650;
			_th6.replayBtn.y = 650;
			_th6.starMc2.gotoAndStop(1);
			_th6.model3.m1_item1.gotoAndStop(_th6.Box1.currentFrame);
			_th6.model3.m1_item2.gotoAndStop(_th6.Box2.currentFrame);
			_th6.model3.m1_item3.gotoAndStop(_th6.Box3.currentFrame);
			_th6.model3.m1_item4.gotoAndStop(_th6.Box4.currentFrame);
			_th6.model3.m1_item5.gotoAndStop(_th6.Box5.currentFrame);
			_th6.model3.m1_item6.gotoAndStop(_th6.Box6.currentFrame);
			_th6.model3.m1_item7.gotoAndStop(_th6.Box7.currentFrame);
			_th6.model3.m1_item8.gotoAndStop(_th6.Box8.currentFrame);
			_th6.model3.m1_item9.gotoAndStop(_th6.Box5.currentFrame);
			setTimeout(ff_fun2, 600);
		}
		function ff_fun2(){	
			createjs.Tween.get(_th6.model3, {loop:false}).to({x:700}, 400);
			createjs.Tween.get(_th6.model2, {loop:false}).to({x:330}, 400);
			setTimeout(ff_fun3, 600);
		}
		function ff_fun3(){	
			createjs.Tween.get(_th6.moreBtn6, {loop:false}).to({y:548}, 400);
			createjs.Tween.get(_th6.replayBtn, {loop:false}).to({y:548}, 400);
		}
		
		//_th6.moreBtn6.addEventListener("rollover", overF6)
		//_th6.moreBtn6.addEventListener("rollout", outF6)
		
		_th6.replayBtn.addEventListener("rollover", overF6)
		_th6.replayBtn.addEventListener("rollout", outF6)
		_th6.replayBtn.addEventListener("click", replayBtnClicked);
		function replayBtnClicked() {
			if(_main.soundBtn.currentFrame == 0){
				this.s2 = playSound("btn");
			}
			_th6.bgSudBox1.gotoAndStop(1);
			_th6.bgSudBox2.gotoAndStop(1);
			_th6.LevBox1.gotoAndStop(0);
			_th6.LevBox2.gotoAndStop(0);
			_th6.LevBox3.gotoAndStop(0);
			_th6.Box1.gotoAndStop(0);
			_th6.Box2.gotoAndStop(0);
			_th6.Box3.gotoAndStop(0);
			_th6.Box4.gotoAndStop(0);
			_th6.Box5.gotoAndStop(0);
			_th6.Box6.gotoAndStop(0);
			_th6.Box7.gotoAndStop(0);
			_th6.Box8.gotoAndStop(0);	
			_main.screenMc.gotoAndPlay(1);
		}
		
		this.screenFun = function(){
			_th6.starMc2.gotoAndStop(0);
			_main.gotoAndStop("startPage");
		}
		this.logobtn.cursor = "pointer";
		
		this.logobtn.addEventListener("click", fl_MouseClickHandler_12);
		
		function fl_MouseClickHandler_12()
		{
			logofunction();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// Camera
	this.___camera___instance = new lib.__Camera__();
	this.___camera___instance.parent = this;
	this.___camera___instance.setTransform(525,400,1,1,0,0,0,-362,-200);

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(5));

	// Ani
	this.screenMc = new lib.Grovbup1();
	this.screenMc.parent = this;
	this.screenMc.setTransform(512,300);

	this.starMc1 = new lib.starmc1();
	this.starMc1.parent = this;
	this.starMc1.setTransform(897.7,289.3,0.706,0.706,-12.9);

	this.maskanim = new lib.maskAnim();
	this.maskanim.parent = this;
	this.maskanim.setTransform(640,384,1.679,1.483);

	this.starMc2 = new lib.starmc2();
	this.starMc2.parent = this;
	this.starMc2.setTransform(-183.7,378.7,0.705,0.705,-12.8,0,0,-1550.6,-158.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.starMc2},{t:this.maskanim},{t:this.starMc1},{t:this.screenMc}]}).wait(5));

	// Layer 8
	this.poza1 = new lib.Symbol32copy3();
	this.poza1.parent = this;
	this.poza1.setTransform(38,146.4,0.752,0.752,0,0,0,-181.3,-1.2);

	this.poza2 = new lib.Symbol31copy6();
	this.poza2.parent = this;
	this.poza2.setTransform(121.5,314.7,0.752,0.752,0,0,0,1.6,-1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.poza2},{t:this.poza1}]},4).wait(1));

	// logo
	this.logobtn = new lib.Symbol1();
	this.logobtn.parent = this;
	this.logobtn.setTransform(952.1,71.7,0.677,0.677,0,0,0,96.2,96.3);

	this.timeline.addTween(cjs.Tween.get(this.logobtn).wait(1).to({regY:96.2,scaleX:0.78,scaleY:0.78,x:510.7,y:85.7},0).wait(1).to({regX:96.3,regY:96.3,scaleX:0.45,scaleY:0.45,x:956.7,y:49.5},0).wait(1).to({regX:96.4,regY:96.4,x:958.7,y:49.6},0).wait(1).to({regX:96.5,scaleX:0.77,scaleY:0.77,x:950.7,y:80.3},0).wait(1));

	// Layer 6
	this.Box8 = new lib.box8();
	this.Box8.parent = this;
	this.Box8.setTransform(-138.1,428.7);
	this.Box8.alpha = 0.02;

	this.Box7 = new lib.box7();
	this.Box7.parent = this;
	this.Box7.setTransform(-138.1,388.8);
	this.Box7.alpha = 0.02;

	this.Box6 = new lib.box6();
	this.Box6.parent = this;
	this.Box6.setTransform(-138.1,349);
	this.Box6.alpha = 0.02;

	this.Box5 = new lib.box5();
	this.Box5.parent = this;
	this.Box5.setTransform(-138.1,309.1);
	this.Box5.alpha = 0.02;

	this.Box4 = new lib.box4();
	this.Box4.parent = this;
	this.Box4.setTransform(-138.1,269.3);
	this.Box4.alpha = 0.02;

	this.Box3 = new lib.box3();
	this.Box3.parent = this;
	this.Box3.setTransform(-138.1,229.4);
	this.Box3.alpha = 0.02;

	this.Box2 = new lib.box2();
	this.Box2.parent = this;
	this.Box2.setTransform(-138.1,189.6);
	this.Box2.alpha = 0.02;

	this.Box1 = new lib.box1();
	this.Box1.parent = this;
	this.Box1.setTransform(-138.1,149.7);
	this.Box1.alpha = 0.02;

	this.bgSudBox2 = new lib.dummy4();
	this.bgSudBox2.parent = this;
	this.bgSudBox2.setTransform(1240.7,394.8);
	this.bgSudBox2.alpha = 0.02;

	this.bgSudBox1 = new lib.dummy3();
	this.bgSudBox1.parent = this;
	this.bgSudBox1.setTransform(1240.7,336.8);
	this.bgSudBox1.alpha = 0.02;

	this.LevBox1 = new lib.dummy2();
	this.LevBox1.parent = this;
	this.LevBox1.setTransform(1177.5,310.1);
	this.LevBox1.alpha = 0.02;

	this.LevBox2 = new lib.dummy1();
	this.LevBox2.parent = this;
	this.LevBox2.setTransform(1178.3,378.6);
	this.LevBox2.alpha = 0.02;

	this.LevBox3 = new lib.dummy();
	this.LevBox3.parent = this;
	this.LevBox3.setTransform(1178.3,437.8);
	this.LevBox3.alpha = 0.02;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.LevBox3},{t:this.LevBox2},{t:this.LevBox1},{t:this.bgSudBox1},{t:this.bgSudBox2},{t:this.Box1},{t:this.Box2},{t:this.Box3},{t:this.Box4},{t:this.Box5},{t:this.Box6},{t:this.Box7},{t:this.Box8}]}).wait(5));

	// Layer 5
	this.soundBtn = new lib.soundBtn();
	this.soundBtn.parent = this;
	this.soundBtn.setTransform(47.6,45.4);

	this.timeline.addTween(cjs.Tween.get(this.soundBtn).wait(5));

	// buttons
	this.doneBtn1 = new lib.moregamesBtncopy2();
	this.doneBtn1.parent = this;
	this.doneBtn1.setTransform(975.1,551.6,0.729,0.729,0,0,0,0.1,0.3);

	this.doneBtn2 = new lib.moregamesBtncopy3();
	this.doneBtn2.parent = this;
	this.doneBtn2.setTransform(974.7,551.6,0.729,0.729,0,0,0,0.1,0.3);

	this.moreBtn_2 = new lib.moregamesBtncopy5();
	this.moreBtn_2.parent = this;
	this.moreBtn_2.setTransform(51.6,551.5,0.794,0.794,0,0,0,0.1,0.1);

	this.panMc_1 = new lib.spancopy();
	this.panMc_1.parent = this;
	this.panMc_1.setTransform(926.8,266.4);

	this.icon_1 = new lib.icons2copy();
	this.icon_1.parent = this;
	this.icon_1.setTransform(142.5,517.3);

	this.model3 = new lib.model3();
	this.model3.parent = this;
	this.model3.setTransform(700.1,305.1,0.777,0.777,0,0,0,0.1,0.1);

	this.replayBtn = new lib.moregamesBtncopy();
	this.replayBtn.parent = this;
	this.replayBtn.setTransform(965.3,548.4,0.874,0.875,0,0,0,0.1,0.3);

	this.moreBtn6 = new lib.moregamesBtncopy6();
	this.moreBtn6.parent = this;
	this.moreBtn6.setTransform(63.2,548.3,0.875,0.875,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.doneBtn1}]},2).to({state:[{t:this.icon_1},{t:this.panMc_1},{t:this.moreBtn_2},{t:this.doneBtn2}]},1).to({state:[{t:this.moreBtn6},{t:this.replayBtn},{t:this.model3}]},1).wait(1));

	// model
	this.playbut = new lib.playBtn();
	this.playbut.parent = this;
	this.playbut.setTransform(252.8,512);

	this.moreBtn1 = new lib.moregamesBtn();
	this.moreBtn1.parent = this;
	this.moreBtn1.setTransform(7,438.6,1.19,1.19,0,0,0,-63.9,-62.9);

	this.model1 = new lib.model_01();
	this.model1.parent = this;
	this.model1.setTransform(473.8,302.2,0.777,0.777,0,0,0,0.1,0.1);

	this.moreBtn_1 = new lib.moregamesBtncopy4();
	this.moreBtn_1.parent = this;
	this.moreBtn_1.setTransform(51.5,551.5,0.794,0.794,0,0,0,0,0.1);

	this.panMc1 = new lib.span();
	this.panMc1.parent = this;
	this.panMc1.setTransform(926.8,266.4);

	this.icon1 = new lib.icons2();
	this.icon1.parent = this;
	this.icon1.setTransform(142.5,517.3);

	this.model2 = new lib.model_02();
	this.model2.parent = this;
	this.model2.setTransform(496.8,303.9,0.752,0.752,0,0,0,0.1,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.moreBtn1,p:{regX:-63.9,regY:-62.9,scaleX:1.19,scaleY:1.19,x:7,y:438.6}},{t:this.playbut}]}).to({state:[{t:this.moreBtn1,p:{regX:0.1,regY:0.1,scaleX:1.043,scaleY:1.043,x:953.8,y:540.3}}]},1).to({state:[{t:this.icon1},{t:this.panMc1},{t:this.moreBtn_1},{t:this.model1}]},1).to({state:[{t:this.model2}]},1).wait(2));

	// bg
	this.modmc = new lib.modmc();
	this.modmc.parent = this;
	this.modmc.setTransform(751,327.8,1.03,1.03);

	this.titleMc = new lib.Symbol18nn();
	this.titleMc.parent = this;
	this.titleMc.setTransform(246,278.5);

	this.instance = new lib.plbg();
	this.instance.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AERD8QnCBEjUlgQgrhJgihbQgbhNgShOIgDgRQgHgigFgjQAaAhAZAkIAMARQBkCNBgCyIAEAHQCSEMFJglIAngGQgYg6gbg6Ig2h0QhIifhDigIgHgRQgrhrgrhsQgzh/AfhXQBhDVBaDYIAHARQBDCfBACgQAsBtArBwQCxgtAliDQgDArgGArQgOBmhqAbQggAIggAHQAvB8AtB9QBQDbgbDZQg9lQiKlUgAHyjmQgVg9gSg8IgGgRQhEjjgdjTIgKhOIgDgfIgBgMIAGAMIAOAfQASAnAPAnQBXDZAeDdIACARQAPB3gCB3QgHg2gWg/g");
	this.shape.setTransform(204.5,389.2);

	this.lev2Btn = new lib.Symcvcxbol11copy();
	this.lev2Btn.parent = this;
	this.lev2Btn.setTransform(779.1,312.4,1,1,0,0,0,0.1,0.1);

	this.lev1Btn = new lib.Symcvcxbol11();
	this.lev1Btn.parent = this;
	this.lev1Btn.setTransform(253.9,320.2,1,1,0,0,0,0.1,0.2);

	this.instance_1 = new lib.VectorxcvcxSmartObjectcopy9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(512,300);

	this.instance_2 = new lib.Symbol40_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(487.9,521);

	this.instance_3 = new lib.mainbg11();
	this.instance_3.parent = this;

	this.instance_4 = new lib.ffbg();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance},{t:this.titleMc},{t:this.modmc}]}).to({state:[{t:this.instance_1},{t:this.lev1Btn},{t:this.lev2Btn}]},1).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(242.7,-300,1525.4,1808.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;