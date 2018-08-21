(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 800,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/index_atlas_.png", id:"index_atlas_",loadTimeout:60000},
		{src:"sounds/annaSound.mp3", id:"annaSound"},
		{src:"sounds/bgmusic.mp3", id:"bgmusic"},
		{src:"sounds/pigeonsound.mp3", id:"pigeonsound"},
		{src:"sounds/crayonSound.mp3", id:"crayonSound"},
		{src:"sounds/sparkles.mp3", id:"sparkles"}
	]
};



lib.ssMetadata = [
		{name:"index_atlas_", frames: [[2376,1899,128,128],[2247,0,764,780],[1718,1051,320,478],[3006,1063,296,460],[3569,602,360,481],[1035,1051,354,472],[0,1164,322,315],[2679,1273,303,314],[3267,1536,276,228],[901,1525,296,289],[1199,1542,202,310],[3545,1723,180,304],[3895,1409,198,318],[2311,1587,196,310],[324,1164,310,312],[324,1478,273,330],[3602,1085,330,322],[3602,1409,291,312],[636,1164,310,312],[3957,1885,95,53],[1173,962,105,59],[1035,1011,86,37],[423,1974,91,50],[1419,2021,153,143],[3957,1729,134,154],[3931,813,163,158],[1249,1854,139,141],[3934,1317,103,60],[1609,1710,104,56],[2202,1853,88,44],[423,2026,94,47],[1836,1799,171,238],[1609,1799,225,195],[3605,2061,183,144],[2040,1398,269,289],[0,1791,251,189],[599,1478,300,300],[1718,1531,298,266],[3934,973,147,175],[3934,1150,144,165],[3931,640,158,171],[3931,464,157,174],[2705,1827,190,190],[2202,1689,81,162],[1609,1542,87,166],[948,1164,81,162],[948,1328,81,162],[3435,1766,92,139],[1403,1542,204,303],[3267,1766,166,296],[2509,1589,194,300],[2018,1689,182,302],[0,1481,290,308],[2040,1051,272,345],[2314,1280,305,305],[2984,1525,281,302],[3815,464,110,126],[1035,962,136,47],[2679,782,325,489],[2329,782,348,496],[3304,1085,296,449],[1391,1051,325,489],[2897,1829,172,172],[3790,2061,246,88],[523,1869,61,48],[253,1810,268,162],[0,962,1033,200],[170,1982,59,48],[4018,1940,59,48],[1123,1011,31,29],[523,1810,64,57],[599,1780,282,176],[2247,782,69,63],[3435,1907,94,100],[3013,0,800,600],[2897,2003,168,168],[1403,1847,172,172],[1041,2028,168,168],[253,1974,168,168],[3067,2003,168,168],[2202,1899,172,172],[871,2008,168,168],[1282,0,963,847],[0,0,1280,960],[3013,602,554,459],[3727,1959,289,100],[1282,849,1045,200],[1747,2039,168,168],[1249,2021,168,168],[3071,1829,172,172],[0,1982,168,168],[2705,1589,236,236],[3435,2029,168,168],[883,1816,190,190],[3727,1729,228,228],[2683,2019,168,168],[2509,1891,172,172],[523,1958,172,172],[2009,1993,168,168],[3815,0,275,462],[697,1958,172,172],[1577,1996,168,168],[1075,1854,172,172]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {	//we have found an element in the list		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) { //insert all it's children just before it		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {	//append element and it's parents in the array		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib._024_scale_arrow_fullscreen_expand_zoom_2128 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._1_1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._1pngcopy = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._1pngcopy2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._1pngcopy3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._10pngcopy = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._10pngcopy2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib._10pngcopy3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib._10pngcopy4 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib._11 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib._11pngcopy = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib._11pngcopy2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib._11pngcopy3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib._12 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib._12pngcopy = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib._12pngcopy2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib._12pngcopy3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib._12pngcopy4 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib._13 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib._13pngcopy = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib._13pngcopy2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib._13pngcopy3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib._14 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib._14pngcopy = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib._14pngcopy2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib._14pngcopy3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib._15 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib._15pngcopy = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib._15pngcopy2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib._15pngcopy3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib._16 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib._17 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib._17pngcopy = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib._17pngcopy2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib._17pngcopy3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib._18 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib._19 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib._2pngcopy = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib._2pngcopy2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib._2pngcopy3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib._200jpgcopy3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib._3pngcopy = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib._3pngcopy2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib._3pngcopy3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib._5 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib._5pngcopy = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib._5pngcopy2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib._5pngcopy3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib._6 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib._6pngcopy = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib._6pngcopy2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib._6pngcopy3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib._7 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib._8 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib._9 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib._9pngcopy = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib._9pngcopy2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib._9pngcopy3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap13 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2copy2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap29 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5_1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.Butoane2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.butondemore = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.Butondescris = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.Butonnormal = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.Butonnormalpngcopy = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.cascabuton = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.casca = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.coverpic = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.Decor = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.fete = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.googleplaybutton = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.logodora = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.MoreGames = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.MoreGamespngcopy = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.ochelaributon = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.Ochelari = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.playpreloader = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.Play = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.poza3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.preloadermore = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.Replay = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.scuterbuton = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.scuterbutonana = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.scuter = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.scuter2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.showbuton = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.Sunet = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.tricoubuton = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



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
	this.instance.setTransform(-100,-100);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-99,190,189);


(lib.Tween20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.preloadermore();
	this.instance.parent = this;
	this.instance.setTransform(-32,-32,0.281,0.281);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-32,64,64);


(lib.Tween18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.playpreloader();
	this.instance.parent = this;
	this.instance.setTransform(-32,-32,0.271,0.271);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-32,64,64);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.MoreGamespngcopy();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,168,168);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Replay();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,168,168);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.scuterbutonana();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.64,0.64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110,110);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tricoubuton();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.64,0.64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110,110);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cascabuton();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.64,0.64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110,110);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ochelaributon();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.64,0.64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110,110);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.scuterbuton();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.64,0.64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110,110);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.casca();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.655,0.655);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110,110);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Ochelari();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.655,0.655);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110,110);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.scuter();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.655,0.655);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110,110);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap5();
	this.instance.parent = this;
	this.instance.setTransform(40,43);

	this.instance_1 = new lib.Butonnormalpngcopy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.655,0.655);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110,110);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.MoreGames();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,168,168);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Play();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,168,168);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.instance = new lib.Sunet();
	this.instance.parent = this;

	this.instance_1 = new lib.Bitmap1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,168,168);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._024_scale_arrow_fullscreen_expand_zoom_2128();
	this.instance.parent = this;
	this.instance.setTransform(1,0,0.454,0.454,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.Butondescris();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-55,-54);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55,-54,168,168);


(lib.scutere2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer 1
	this.instance = new lib._12();
	this.instance.parent = this;

	this.instance_1 = new lib._12pngcopy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(34,-27,0.881,1.058);

	this.instance_2 = new lib._12pngcopy2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-10,1.065,1.032);

	this.instance_3 = new lib._12pngcopy3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-8,9,0.939,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,310,312);


(lib.scutere1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer 1
	this.instance = new lib._9();
	this.instance.parent = this;
	this.instance.setTransform(-13,-13);

	this.instance_1 = new lib.scuter2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(16,15);

	this.instance_2 = new lib._9pngcopy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-22,1.071,1.014);

	this.instance_3 = new lib._9pngcopy2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(21,40,0.911,0.918);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13,-13,325,489);


(lib.scuterana2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer 1
	this.instance = new lib._6();
	this.instance.parent = this;
	this.instance.setTransform(-46.1,-49);

	this.instance_1 = new lib._6pngcopy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-22,-103);

	this.instance_2 = new lib._6pngcopy2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-24,-67);

	this.instance_3 = new lib._6pngcopy3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-42,-64);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.1,-49,290,308);


(lib.scuterana1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer 1
	this.instance = new lib._1_1();
	this.instance.parent = this;
	this.instance.setTransform(-50.9,-76);

	this.instance_1 = new lib._1pngcopy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-30,-63);

	this.instance_2 = new lib._1pngcopy2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-50,-90);

	this.instance_3 = new lib._1pngcopy3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-67,-78);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.9,-76,320,478);


(lib.piciorelsa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer 1
	this.instance = new lib._11();
	this.instance.parent = this;
	this.instance.setTransform(-32.1,-49.3);

	this.instance_1 = new lib._11pngcopy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-36,-48);

	this.instance_2 = new lib._11pngcopy2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-33,-68,1.033,1.033);

	this.instance_3 = new lib._11pngcopy3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-40,-52);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.1,-49.3,202,310);


(lib.piciorana = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer 1
	this.instance = new lib._5pngcopy();
	this.instance.parent = this;
	this.instance.setTransform(-32,-55);

	this.instance_1 = new lib._5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-32.4,-48.2);

	this.instance_2 = new lib._5pngcopy2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-33,-52);

	this.instance_3 = new lib._5pngcopy3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-38,-47);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-55,166,296);


(lib.ochelarielsa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer 1
	this.instance = new lib._15();
	this.instance.parent = this;
	this.instance.setTransform(-16.3,-9.5);

	this.instance_1 = new lib._15pngcopy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-16,-9);

	this.instance_2 = new lib._15pngcopy2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-11,-3);

	this.instance_3 = new lib._15pngcopy3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-14,-8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.3,-9.5,103,60);


(lib.ochelariana = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer 1
	this.instance = new lib._13pngcopy();
	this.instance.parent = this;
	this.instance.setTransform(-20,-10);

	this.instance_1 = new lib._13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-15.1,-8.4);

	this.instance_2 = new lib._13pngcopy2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-15,-2);

	this.instance_3 = new lib._13pngcopy3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-18,-8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-10,105,59);


(lib.nextlevel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;
	this.instance.setTransform(56,58);

	this.instance_1 = new lib.Butonnormal();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,168,168);


(lib.nextinterlevel2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap5_1();
	this.instance.parent = this;
	this.instance.setTransform(55,50);

	this.instance_1 = new lib.Butonnormal();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,168,168);


(lib.nextinterlevel1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap5_1();
	this.instance.parent = this;
	this.instance.setTransform(55,50);

	this.instance_1 = new lib.Butonnormal();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,168,168);


(lib.nextinterlevel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap5_1();
	this.instance.parent = this;
	this.instance.setTransform(55,50);

	this.instance_1 = new lib.Butonnormal();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,168,168);


(lib.star_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap8();
	this.instance.parent = this;
	this.instance.setTransform(-5,-9,0.229,0.229);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-9,21.6,22.9);


(lib.moregamesinjoc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;
	this.instance.setTransform(55,59);

	this.instance_1 = new lib.Butonnormal();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,168,168);


(lib.moregamesdemore = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;
	this.instance.setTransform(55,59);

	this.instance_1 = new lib.butondemore();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,172,172);


(lib.fundaelsa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer 1
	this.instance = new lib._3();
	this.instance.parent = this;
	this.instance.setTransform(0,3);

	this.instance_1 = new lib._3pngcopy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,2);

	this.instance_2 = new lib._3pngcopy2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,3);

	this.instance_3 = new lib._3pngcopy3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,3,81,162);


(lib.Tween5copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._1();
	this.instance.parent = this;
	this.instance.setTransform(-598.1,-312.4,1.045,1.045);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-598.1,-312.4,798.2,814.8);


(lib.Symbol20copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logodora();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.954,0.954);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,997.3,190.9);


(lib.Symbol15_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.poza3();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,190,190);


(lib.Symbol12copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.googleplaybutton();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.86,0.86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,248.6,86);


(lib.Symbol4copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap2copy2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,268,162);


(lib.Symbol4copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Butoane2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,168,168);


(lib.Symbol4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Bitmap6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-5,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,282,176);


(lib.Symbol2copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#660033").ss(5.6,1,1).p("EAgYgfQMAAAA+hQAAEekdAAMg30AAAQkeAAAAkeMAAAg+hQAAkeEeAAMA30AAAQEdAAAAEeg");
	this.shape.setTransform(207.3,228.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,146,181,0.776)").s().p("Egb5AjvQkeAAAAkeMAAAg+hQAAkeEeAAMA30AAAQEdAAAAEeMAAAA+hQAAEekdAAg");
	this.shape_1.setTransform(207.3,228.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.7,-2.7,420.1,463);


(lib.corpelsa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer 1
	this.instance = new lib._7();
	this.instance.parent = this;
	this.instance.setTransform(-15,131,1.017,1.017);

	this.instance_1 = new lib._10pngcopy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-51.2,-50.1);

	this.instance_2 = new lib._10pngcopy4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-30,-50);

	this.instance_3 = new lib._10pngcopy2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-35,-52);

	this.instance_4 = new lib._10pngcopy3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-32,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance,p:{scaleX:1.017,scaleY:1.017,x:-15,y:131}}]}).to({state:[{t:this.instance_2},{t:this.instance,p:{scaleX:1.168,scaleY:1.168,x:-21,y:123}}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4},{t:this.instance,p:{scaleX:1.096,scaleY:1.096,x:-19,y:125}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.2,-50.1,322,315);


(lib.corpana = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer 1
	this.instance = new lib._17();
	this.instance.parent = this;
	this.instance.setTransform(-40,-36);

	this.instance_1 = new lib._17pngcopy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-53,4);

	this.instance_2 = new lib._17pngcopy2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-40,-131);

	this.instance_3 = new lib._17pngcopy3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-44,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-36,225,195);


(lib.cascaelsa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer 1
	this.instance = new lib._2();
	this.instance.parent = this;

	this.instance_1 = new lib._2pngcopy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1,5);

	this.instance_2 = new lib._2pngcopy2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-6,4);

	this.instance_3 = new lib._2pngcopy3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,147,175);


(lib.cascaanna = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer 1
	this.instance = new lib._14();
	this.instance.parent = this;

	this.instance_1 = new lib._14pngcopy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(10,-1);

	this.instance_2 = new lib._14pngcopy2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,3);

	this.instance_3 = new lib._14pngcopy3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,153,143);


(lib.butonshow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;
	this.instance.setTransform(86,103);

	this.instance_1 = new lib.showbuton();
	this.instance_1.parent = this;
	this.instance_1.setTransform(30,46);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(30,46,172,172);


(lib.Tween17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArtO1QjHAAAAi6IAA31QAAi6DHAAIXbAAQDIAAgBC6IAAX1QABC6jIAAg");
	mask.setTransform(0,-0.5);

	// Layer 1
	this.instance = new lib.Symbol15_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,95,95);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95,-95,190,189.5);


(lib.Symbol10213 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween38();
	this.instance.parent = this;
	this.instance.setTransform(100,100);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1,scaleY:1.1},14).to({scaleX:1,scaleY:1},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,190,191);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var frequency = 10;
		stage.enableMouseOver(frequency);
		this.moregames.cursor = "pointer";
		this.playbutton.cursor = "pointer";
		this.fullscreenBtn.cursor = "pointer";
		this.logo.cursor = "pointer";
		this.googleplay.cursor = "pointer";
		var buttonsArray = [this.googleplay,this.logo,this.playbutton,this.moregames,this.fullscreenBtn];
		var buttonsArrayString = ["googleplay","logo","playbutton","moregames","fullscreenBtn"];
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
	this.moregames = new lib.Symbol5();
	this.moregames.parent = this;
	this.moregames.setTransform(534.9,419.4,0.838,0.838,0,0,0,84,84);

	this.playbutton = new lib.Symbol4();
	this.playbutton.parent = this;
	this.playbutton.setTransform(655.3,417.4,0.838,0.838,0,0,0,84,84);

	this.fullscreenBtn = new lib.Symbol2();
	this.fullscreenBtn.parent = this;
	this.fullscreenBtn.setTransform(-38,-74.9,0.48,0.48,0,0,0,29.5,29.5);

	this.googleplay = new lib.Symbol12copy2();
	this.googleplay.parent = this;
	this.googleplay.setTransform(61.1,425.3,0.921,0.921,0,0,0,124.1,43.1);
	this.googleplay.visible = false;

	this.logo = new lib.Symbol4_1();
	this.logo.parent = this;
	this.logo.setTransform(643.8,-12.4,0.546,0.546,0,0,0,142.2,76.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo},{t:this.googleplay},{t:this.fullscreenBtn},{t:this.playbutton},{t:this.moregames}]}).wait(1));

	// Layer 1
	this.instance = new lib.coverpic();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.549,0.549);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.6,-115,804.3,604.8);


(lib.star_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.star_5();
	this.instance.parent = this;
	this.instance.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:22.6},3).to({scaleX:1,scaleY:1,rotation:52.7},4).to({scaleX:1,scaleY:1,rotation:75.2,x:0.1},3).to({rotation:105.3,x:0},4).to({scaleX:1,scaleY:1,rotation:112.8,y:0},1).to({scaleX:1,scaleY:1,rotation:120.4,x:0.1},1).to({scaleX:1,scaleY:1,rotation:143.1,x:0},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-8.9,21.6,22.9);


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
p.nominalBounds = new cjs.Rectangle(-21.3,-56.6,68.4,54.1);


(lib.star_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		exportRoot.sparklesSound();
	}
	this.frame_25 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(24).call(this.frame_25).wait(1));

	// Layer 33
	this.instance = new lib.star_3();
	this.instance.parent = this;
	this.instance.setTransform(9.7,15.2,0.84,0.84,-45);
	this.instance.shadow = new cjs.Shadow("#FFFFFF",0,0,5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).wait(21));

	// Layer 17
	this.instance_1 = new lib.star_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-14.4,2.5,0.699,0.699,54.2);
	this.instance_1.shadow = new cjs.Shadow("#FF0000",0,0,5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({_off:true},19).wait(5));

	// Layer 1
	this.instance_2 = new lib.Bitmap7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-30,-171);

	this.instance_3 = new lib.star_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-5.3,13.2,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[]},20).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-171,69,63);


(lib.Symbol1414 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween17("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(95,95);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.11,scaleY:1.11},11).to({scaleX:1,scaleY:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,190,189.5);


(lib.Symbol4copy5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween5copy("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(609,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-502.1},496).wait(1));

	// Layer 2
	this.instance_1 = new lib.Tween5copy("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(609,1097.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:300},496).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10.9,-12.4,798.2,1612.7);


(lib.Symbol3copy5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol20copy2();
	this.instance.parent = this;
	this.instance.setTransform(257.4,2.4,1,1,0,0,0,498.7,95.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.Bitmap29();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-250.4,-78.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-250.4,-93,1033,214.7);


(lib.ballsanim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.scuterana1();
	this.instance.parent = this;
	this.instance.setTransform(93,165.6,1,1,-11.7,0,0,109.2,163);

	this.instance_1 = new lib.scuterana2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-56,199.7,1,1,-11.7,0,0,98.9,105);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-229.2,-100.8,527.2,532.9);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var frequency = 10;
		stage.enableMouseOver(frequency);
		var currentTargetNumChildren;
		var buttonsArray = [this.nextinter,this.nextinter1,this.nextinter2,this.moregames2,this.poza3,this.poza4];
		var buttonsArrayString = ["nextinter","nextinter1","nextinter2","moregames2","poza3","poza4"];
		var buttonClicked = "";
		for(var i=0; i<buttonsArray.length;i++){
			buttonsArray[i].cursor = "pointer";
			buttonsArray[i].name = buttonsArrayString[i];
			buttonsArray[i].addEventListener("mouseover", hoverButtons.bind(this));
			buttonsArray[i].addEventListener("mouseout", houtButtons.bind(this));
			buttonsArray[i].addEventListener("click", clickButtons.bind(this));
		}
		
		function clickButtons(event) {
			/*if(event.currentTarget.name.indexOf("nextlevel") > -1){
				exportRoot.animInterLevels = "level2";
				exportRoot.goAnim();
			}*/
			if(event.currentTarget.name.indexOf("nextinter") > -1){
				exportRoot.animInterLevels = "level1";
				exportRoot.goAnim();
				gdApi.showBanner();
			}
				if(event.currentTarget.name.indexOf("nextinter1") > -1){
				exportRoot.animInterLevels = "final";
				exportRoot.goAnim();
				gdApi.showBanner();
			}
				if(event.currentTarget.name.indexOf("nextinter2") > -1){
				exportRoot.animInterLevels = "replay";
				exportRoot.goAnim();
				
			}
			
			if(event.currentTarget.name.indexOf("moregames2") > -1){
				exportRoot.moregamesfunction();
			}
			if(event.currentTarget.name.indexOf("poza3") > -1){
				exportRoot.poza1link();
			}
			if(event.currentTarget.name.indexOf("poza4") > -1){
				exportRoot.poza2link();
			}
		}
		function hoverButtons(event) {
			event.currentTarget.alpha = .8;
			event.currentTarget.shadow = new createjs.Shadow("#ffffff", 4, 4, 10);
		}
		
		function houtButtons(event) {
			event.currentTarget.alpha = 1;
			event.currentTarget.shadow = new createjs.Shadow("#ffffff", 0, 0, 0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 4
	this.moregames2 = new lib.moregamesinjoc();
	this.moregames2.parent = this;
	this.moregames2.setTransform(648.2,545,0.655,0.655,0,0,0,84,84);

	this.timeline.addTween(cjs.Tween.get(this.moregames2).wait(1));

	// Layer 2
	this.nextinter2 = new lib.nextinterlevel2();
	this.nextinter2.parent = this;
	this.nextinter2.setTransform(745,545.1,0.655,0.655,0,0,0,84,84.1);

	this.nextinter1 = new lib.nextinterlevel1();
	this.nextinter1.parent = this;
	this.nextinter1.setTransform(745,545.1,0.655,0.655,0,0,0,84,84.1);

	this.nextinter = new lib.nextinterlevel();
	this.nextinter.parent = this;
	this.nextinter.setTransform(745,545.1,0.655,0.655,0,0,0,84,84.1);

	this.poza4 = new lib.Symbol1414();
	this.poza4.parent = this;
	this.poza4.setTransform(498.7,434.8,0.905,0.905,0,0,0,95,95);

	this.poza3 = new lib.Symbol10213();
	this.poza3.parent = this;
	this.poza3.setTransform(252.1,439.8,0.905,0.905,0,0,0,100,99.9);

	this.instance = new lib.Bitmap13();
	this.instance.parent = this;
	this.instance.setTransform(278,254);

	this.instance_1 = new lib._9pngcopy3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(218.5,35.3,0.614,0.614,-15.5);

	this.instance_2 = new lib._12pngcopy4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(128.6,126.6,0.614,0.614,-15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.poza3},{t:this.poza4},{t:this.nextinter},{t:this.nextinter1},{t:this.nextinter2}]}).wait(1));

	// Layer 1
	this.instance_3 = new lib.Bitmap9();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer 3
	this.instance_4 = new lib.Decor();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,0.625,0.625);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-17.9,800,618);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.animStars = function(){
			this.mcEffect.gotoAndPlay(1);
		}
		var frequency = 10;
		stage.enableMouseOver(frequency);
		var currentTargetNumChildren;
		var buttonsArray = [this.replay_but,this.poza2,this.poza1,this.moregames3,this.scuteranna_but,this.logo,this.moregames,this.moregames1,this.nextlevel,this.nextlevel1,this.scuter_but,this.haine_but,this.casca_but,this.funda_but,this.ochelari_but,this.scuter2_but,this.haine1_but,this.casca1_but,this.ochelari1_but];
		var buttonsArrayString = ["replay_but","poza2","poza1","moregames3","scuteranna_but","logo","moregames","moregames1","nextlevel","nextlevel1","scuter_but","haine_but","casca_but","funda_but","ohelari_but",,"scuter2_but","haine1_but","casca1_but","ohelari1_but"];
		var buttonClicked = "";
		for(var i=0; i<buttonsArray.length;i++){
			buttonsArray[i].cursor = "pointer";
			buttonsArray[i].name = buttonsArrayString[i];
			buttonsArray[i].addEventListener("mouseover", hoverButtons.bind(this));
			buttonsArray[i].addEventListener("mouseout", houtButtons.bind(this));
			buttonsArray[i].addEventListener("click", clickButtons.bind(this));
		}
		
		function clickButtons(event) {
			if(event.currentTarget.name.indexOf("nextlevel") > -1){
				exportRoot.animInterLevels = "interlevelscreen";
				exportRoot.goAnim();
				exportRoot.level1.visible=false;
				exportRoot.fadeInElement(exportRoot.interlevel);
			}
			if(event.currentTarget.name.indexOf("nextlevel1") > -1){
				exportRoot.animInterLevels = "interlevelscreen";
				exportRoot.goAnim();
				exportRoot.level1.visible=false;
				exportRoot.fadeInElement(exportRoot.interlevel);
			}
			if(event.currentTarget.name.indexOf("replay_but") > -1){
				exportRoot.animInterLevels = "replay";
				exportRoot.goAnim();
				
			}
			if(event.currentTarget.name.indexOf("moregames") > -1){
				exportRoot.moregamesfunction();
			}
			
			if(event.currentTarget.name.indexOf("logo") > -1){
				exportRoot.logofunction();
			}
			
			
			if(event.currentTarget.name.indexOf("poza1") > -1){
				exportRoot.poza1link();
			}
			if(event.currentTarget.name.indexOf("poza2") > -1){
				exportRoot.poza2link();
			}
			/*if(event.currentTarget.name.indexOf("reset") > -1){
				this.reset();
			}*/
			
		}
		
		function hoverButtons(event) {
			event.currentTarget.alpha = .8;
			event.currentTarget.shadow = new createjs.Shadow("#ffffff", 4, 4, 10);
		}
		
		function houtButtons(event) {
			event.currentTarget.alpha = 1;
			event.currentTarget.shadow = new createjs.Shadow("#ffffff", 0, 0, 0);
		}
		
		
		this.scuter_but.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			this.animStars();
			this.scutere1.gotoAndStop(this.scutere1.currentFrame + 1);
			this.scutere2.gotoAndStop(this.scutere2.currentFrame + 1);
			
		}
		this.haine_but.addEventListener("click", fl_MouseClickHandler1.bind(this));
		
		function fl_MouseClickHandler1()
		{
			this.animStars();
			this.corpelsa.gotoAndStop(this.corpelsa.currentFrame + 1);
			this.piciorelsa.gotoAndStop(this.piciorelsa.currentFrame + 1);
			
		}
		
		this.funda_but.addEventListener("click", fl_MouseClickHandler2.bind(this));
		
		function fl_MouseClickHandler2()
		{
			this.animStars();
			this.fundaelsa.gotoAndStop(this.fundaelsa.currentFrame + 1);
			
		}
		
		
		this.ochelari_but.addEventListener("click", fl_MouseClickHandler3.bind(this));
		
		function fl_MouseClickHandler3()
		{
			this.animStars();
			this.ochelarielsa.gotoAndStop(this.ochelarielsa.currentFrame + 1);
			
		}
		
		this.casca_but.addEventListener("click", fl_MouseClickHandler4.bind(this));
		
		function fl_MouseClickHandler4()
		{
			this.animStars();
			this.cascaelsa.gotoAndStop(this.cascaelsa.currentFrame + 1);
			
		}
		
		this.haine1_but.addEventListener("click", fl_MouseClickHandler6.bind(this));
		
		function fl_MouseClickHandler6()
		{
			this.animStars();
			this.corpana.gotoAndStop(this.corpana.currentFrame + 1);
			this.piciorana.gotoAndStop(this.piciorana.currentFrame + 1);
			
		}
		
		this.casca1_but.addEventListener("click", fl_MouseClickHandler7.bind(this));
		
		function fl_MouseClickHandler7()
		{
			this.animStars();
			this.cascaana.gotoAndStop(this.cascaana.currentFrame + 1);
		
			
		}
		this.ochelari1_but.addEventListener("click", fl_MouseClickHandler8.bind(this));
		
		function fl_MouseClickHandler8()
		{
			this.animStars();
			this.ochelariana.gotoAndStop(this.ochelariana.currentFrame + 1);
		
			
		}
		this.scuteranna_but.addEventListener("click", fl_MouseClickHandler9.bind(this));
		
		function fl_MouseClickHandler9()
		{
			this.animStars();
			this.scuterana1.gotoAndStop(this.scuterana1.currentFrame + 1);
			this.scuterana2.gotoAndStop(this.scuterana2.currentFrame + 1);
		
			
		}
		
		/*this.reset = function(){
			
			this.vraja.gotoAndStop(6);
			this.covor.gotoAndStop(0);
			this.fundal.gotoAndStop(0);
			this.ochi.gotoAndStop(0);
			this.pantaloni.gotoAndStop(0);
			this.bluza.gotoAndStop(0);
			this.par.gotoAndStop(0);
		}*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// butoane
	this.poza2 = new lib.Symbol1414();
	this.poza2.parent = this;
	this.poza2.setTransform(994.6,231,0.905,0.905,0,0,0,95,95);

	this.poza1 = new lib.Symbol10213();
	this.poza1.parent = this;
	this.poza1.setTransform(971,50.4,0.905,0.905,0,0,0,100,99.9);

	this.moregames3 = new lib.Symbol20();
	this.moregames3.parent = this;
	this.moregames3.setTransform(387.5,378,1,1,0,0,0,84,84);

	this.replay_but = new lib.Symbol19();
	this.replay_but.parent = this;
	this.replay_but.setTransform(360.5,-83,0.679,0.679,0,0,0,84,84);

	this.nextlevel1 = new lib.butonshow();
	this.nextlevel1.parent = this;
	this.nextlevel1.setTransform(1031.7,249,0.64,0.64,0,0,0,84,83.9);

	this.scuteranna_but = new lib.Symbol16();
	this.scuteranna_but.parent = this;
	this.scuteranna_but.setTransform(907.1,24,1,1,0,0,0,55,55);

	this.nextlevel = new lib.nextlevel();
	this.nextlevel.parent = this;
	this.nextlevel.setTransform(1052.3,279.8,0.655,0.655,0,0,0,84.1,84.1);

	this.logo = new lib.Symbol4_1();
	this.logo.parent = this;
	this.logo.setTransform(1028.2,405.9,0.535,0.535,0,0,0,142.2,76.5);

	this.haine1_but = new lib.Symbol15();
	this.haine1_but.parent = this;
	this.haine1_but.setTransform(374.6,93,1,1,0,0,0,55,55);

	this.casca1_but = new lib.Symbol14();
	this.casca1_but.parent = this;
	this.casca1_but.setTransform(416,-7,1,1,0,0,0,55,55);

	this.ochelari1_but = new lib.Symbol13();
	this.ochelari1_but.parent = this;
	this.ochelari1_but.setTransform(970,103,1,1,0,0,0,55,55);

	this.scuter2_but = new lib.Symbol12();
	this.scuter2_but.parent = this;
	this.scuter2_but.setTransform(1284.3,-188.9,1,1,0,0,0,55,55);

	this.moregames1 = new lib.moregamesdemore();
	this.moregames1.parent = this;
	this.moregames1.setTransform(1011,185.7,0.64,0.64,0,0,0,84,84);

	this.moregames = new lib.moregamesinjoc();
	this.moregames.parent = this;
	this.moregames.setTransform(1012.3,187,0.655,0.655,0,0,0,84,84);

	this.casca_but = new lib.Symbol11();
	this.casca_but.parent = this;
	this.casca_but.setTransform(416,-8,1,1,0,0,0,55,55);

	this.ochelari_but = new lib.Symbol9();
	this.ochelari_but.parent = this;
	this.ochelari_but.setTransform(969,102,1,1,0,0,0,55,55);

	this.scuter_but = new lib.Symbol8();
	this.scuter_but.parent = this;
	this.scuter_but.setTransform(907.1,24,1,1,0,0,0,55,55);

	this.funda_but = new lib.Symbol7();
	this.funda_but.parent = this;
	this.funda_but.setTransform(497.9,-55,1,1,0,0,0,55,55);

	this.haine_but = new lib.Symbol4copy();
	this.haine_but.parent = this;
	this.haine_but.setTransform(374.6,90,0.655,0.655,0,0,0,84,83.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.haine_but},{t:this.funda_but},{t:this.scuter_but},{t:this.ochelari_but},{t:this.casca_but},{t:this.moregames},{t:this.moregames1},{t:this.scuter2_but},{t:this.ochelari1_but},{t:this.casca1_but},{t:this.haine1_but},{t:this.logo},{t:this.nextlevel},{t:this.scuteranna_but},{t:this.nextlevel1},{t:this.replay_but},{t:this.moregames3},{t:this.poza1},{t:this.poza2}]}).wait(1));

	// animatie
	this.mcEffect = new lib.star_2();
	this.mcEffect.parent = this;
	this.mcEffect.setTransform(669.9,220.4,3.199,3.199,0,0,0,0.5,0.6);

	this.timeline.addTween(cjs.Tween.get(this.mcEffect).wait(1));

	// olaf
	this.instance = new lib._18();
	this.instance.parent = this;
	this.instance.setTransform(592,-26,0.552,0.552);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// ochelari
	this.ochelariana = new lib.ochelariana();
	this.ochelariana.parent = this;
	this.ochelariana.setTransform(802.8,76.3,0.552,0.552,0,0,0,32.8,18.2);

	this.ochelarielsa = new lib.ochelarielsa();
	this.ochelarielsa.parent = this;
	this.ochelarielsa.setTransform(484.4,61.2,0.552,0.552,0,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ochelarielsa},{t:this.ochelariana}]}).wait(1));

	// casca
	this.cascaelsa = new lib.cascaelsa();
	this.cascaelsa.parent = this;
	this.cascaelsa.setTransform(492.4,43.4,0.552,0.552,0,0,0,50.3,59.8);

	this.cascaana = new lib.cascaanna();
	this.cascaana.parent = this;
	this.cascaana.setTransform(790.8,59.6,0.552,0.552,0,0,0,52.6,48.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cascaana},{t:this.cascaelsa}]}).wait(1));

	// par
	this.fundaelsa = new lib.fundaelsa();
	this.fundaelsa.parent = this;
	this.fundaelsa.setTransform(510.1,115.7,0.552,0.552,0,0,0,20.4,55.4);

	this.instance_1 = new lib._4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(765,107,0.552,0.552);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.fundaelsa}]}).wait(1));

	// fata scuter
	this.scuterana1 = new lib.scuterana1();
	this.scuterana1.parent = this;
	this.scuterana1.setTransform(825.4,273.1,0.552,0.552,0,0,0,109.4,163.2);

	this.scutere1 = new lib.scutere1();
	this.scutere1.parent = this;
	this.scutere1.setTransform(545.5,263.3,0.552,0.552,0,0,0,111.2,167);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.scutere1},{t:this.scuterana1}]}).wait(1));

	// corp
	this.corpana = new lib.corpana();
	this.corpana.parent = this;
	this.corpana.setTransform(777.6,146.2,0.552,0.552,0,0,0,77.2,66.5);

	this.corpelsa = new lib.corpelsa();
	this.corpelsa.parent = this;
	this.corpelsa.setTransform(532.1,140.2,0.552,0.552,0,0,0,109.9,107.5);

	this.instance_2 = new lib._8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(823,161,0.552,0.552);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.corpelsa},{t:this.corpana}]}).wait(1));

	// picioare
	this.piciorana = new lib.piciorana();
	this.piciorana.parent = this;
	this.piciorana.setTransform(764.7,260.2,0.552,0.552,0,0,0,69.8,103.8);

	this.piciorelsa = new lib.piciorelsa();
	this.piciorelsa.parent = this;
	this.piciorelsa.setTransform(508.4,286.2,0.552,0.552,0,0,0,69.1,105.9);

	this.instance_3 = new lib._19();
	this.instance_3.parent = this;
	this.instance_3.setTransform(723,40,0.552,0.552);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.piciorelsa},{t:this.piciorana}]}).wait(1));

	// spate scuter
	this.scuterana2 = new lib.scuterana2();
	this.scuterana2.parent = this;
	this.scuterana2.setTransform(722.1,291.8,0.552,0.552,0,0,0,99,105.3);

	this.scutere2 = new lib.scutere2();
	this.scutere2.parent = this;
	this.scutere2.setTransform(440.3,283.7,0.552,0.552,0,0,0,106.1,106.8);

	this.instance_4 = new lib._16();
	this.instance_4.parent = this;
	this.instance_4.setTransform(452,11,0.552,0.552);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.scutere2},{t:this.scuterana2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(303.5,-328.4,1035.8,790.4);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_282 = function() {
		this.stop();
		
		var frequency = 10;
		stage.enableMouseOver(frequency);
		
		this.playbut.cursor = "pointer";
		this.moregames.cursor = "pointer";
		var buttonsArray = [this.playbut,this.moregames];
		var buttonsArrayString = ["playbut","moregames"];
		var buttonClicked = "";
		
		for(var i=0; i<buttonsArray.length;i++){
			buttonsArray[i].name = buttonsArrayString[i];
			buttonsArray[i].addEventListener("mouseover", hoverButtons.bind(this));
			buttonsArray[i].addEventListener("mouseout", houtButtons.bind(this));
			buttonsArray[i].addEventListener("click", clickButtons.bind(this));
		}
		
		
		function clickButtons(event) {
			if(event.currentTarget.name.indexOf("playbut") > -1){
				exportRoot.preloader.visible = false;
				exportRoot.cover.visible = true;
				exportRoot.startSnd();
			}
			if(event.currentTarget.name.indexOf("moregames") > -1){
				exportRoot.preloader.preloaderfunction();
			}
			
		}
		
		function hoverButtons(event) {
				event.currentTarget.alpha = .8;
				event.currentTarget.shadow = new createjs.Shadow("#ffffff", 4, 4, 10);
		}
		
		function houtButtons(event) {
			event.currentTarget.alpha = 1;
			event.currentTarget.shadow = new createjs.Shadow("#ffffff", 0, 0, 0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(282).call(this.frame_282).wait(1));

	// Layer 1
	this.playbut = new lib.Tween18();
	this.playbut.parent = this;
	this.playbut.setTransform(700.2,51,2.124,2.124);

	this.timeline.addTween(cjs.Tween.get(this.playbut).wait(251).to({scaleX:1,scaleY:1,x:-950.2,y:445.1},0).to({scaleX:2.12,scaleY:2.12,x:-559.4,y:344.1},31).wait(1));

	// Layer 2
	this.moregames = new lib.Tween20();
	this.moregames.parent = this;
	this.moregames.setTransform(704.2,173);

	this.timeline.addTween(cjs.Tween.get(this.moregames).wait(251).to({x:32,y:447},0).to({scaleX:2,scaleY:2,x:-317.4,y:340.1},31).wait(1));

	// Layer 3
	this.logo = new lib.Symbol4copy2();
	this.logo.parent = this;
	this.logo.setTransform(-464,199,0.217,0.217,0,0,0,133.9,81);
	this.logo._off = true;

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(187).to({_off:false},0).to({regX:134.1,regY:81.1,scaleX:1.4,scaleY:1.4,x:-436,y:163.1},60).wait(36));

	// Layer 4
	this.instance = new lib.Symbol2copy2();
	this.instance.parent = this;
	this.instance.setTransform(-437.3,-244.2,1,1,0,0,0,207.3,228.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(222).to({_off:false},0).to({regY:228.8,scaleY:0.86,y:219.6},29).wait(32));

	// Layer 5
	this.instance_1 = new lib.Symbol3copy5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(685.7,260.5,1,1,0,0,0,396.6,63.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:234.2,y:259.5},45).to({x:-1170.4,y:256.5},140).to({_off:true},1).wait(97));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(38.7,-17,1033,335.5);


(lib.Symbol18_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		exportRoot.cover.visible=false;
		exportRoot.stopSnd();
		this.closepreloader = function () {
			exportRoot.preloader.visible=false;
			
		}
		var frequency = 10;
		stage.enableMouseOver(frequency);
		this.bigbutton.cursor = "pointer";
		
		this.bigbutton.addEventListener("click", linkpreloader.bind(this));
		function linkpreloader(event) {
			exportRoot.preloader.preloaderfunction();
		}
		
		
		this.preloaderfunction = function () {
			exportRoot.stopSnd();
			var gamename = 'princess-scooter-ride';
			var mainwebsite = 'https://www.azgametv.com/';
			var stringHost = detect_parent();
		
			if (stringHost == "rosy") {
				stringHost = window.location.hostname;
			}
			var urlsite = mainwebsite + "?utm_source=" + stringHost + "&utm_medium=html5game&utm_content=preloader&utm_campaign=" + gamename;
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
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 8
	this.instance_5 = new lib.Symbol21();
	this.instance_5.parent = this;
	this.instance_5.setTransform(91.1,165,1,1,0,0,0,105.1,112.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Layer 1
	this.bigbutton = new lib.Symbol4copy5();
	this.bigbutton.parent = this;
	this.bigbutton.setTransform(-863.2,-12.5,1.005,1.005);

	this.timeline.addTween(cjs.Tween.get(this.bigbutton).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-852.3,-25.1,1909.9,1620.4);


(lib.animinter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_51 = function() {
		exportRoot.goNextScene();
	}
	this.frame_71 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(51).call(this.frame_51).wait(20).call(this.frame_71).wait(1));

	// Layer 7
	this.instance = new lib.ballsanim();
	this.instance.parent = this;
	this.instance.setTransform(-539.7,-5.3,1,1,0,0,0,125.3,310.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:125.2,rotation:32.8,x:-619.1,y:-241.4},1,cjs.Ease.get(-0.99)).to({regX:125.3,rotation:2.3,x:752.2,y:498.1},50,cjs.Ease.get(-1)).wait(21));

	// Layer 10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("EhljBOOQCq2zBXhlQDCjkDmj9QDjj7A+hIQCCiZBmiXQBxiqCLkAQC4lTBmk5QBGjXA3kiQBBlYAZhhQBAjzB4jaQB0jXCvjGQBchoDtjlQDcjVB8iTQC+jjCQkJQAdg1C3mVIC+mmQAKgOAIgPQCZkaBcmKQBTlhAEkrQABhCgDg2IAOheQAfiRWptbQWntbIC81MA+DChqUAL9BI0g7+gBrMixWAOKUApQgWcACqgWzg");
	var mask_graphics_2 = new cjs.Graphics().p("EhlhBOPQCp2zBYhlQDCjkDmj9QDjj7A+hIQCCiZBmiXQBxiqCLkAQC4lTBmk5QBGjXA3kiQBBlYAZhhQBAjzB4jaQB1jXCujGQBchoDtjlQDcjVB8iTQC+jjCQkJQAdg1C3mVIC+mlQAKgPAIgPQCZkaBcmKQBTlhAEkrQABhCgDg2IAOheQAgiRWotbQWntaIC81MA+DChpUAL9BI0g7+gBrMixWAOKUApQgWcACqgWzg");
	var mask_graphics_3 = new cjs.Graphics().p("EhlbBOPQCq2zBXhlQDCjkDmj9QDjj7A+hHQCCiZBmiYQBxipCLkAQC4lUBmk5QBHjXA2khQBBlYAahhQBAjzB3jaQB1jYCvjFQBbhpDujlQDbjUB8iTQC/jjCQkJQAcg1C4mVIC+mmQAJgOAIgPQCZkaBdmKQBTlhAEkrQABhCgDg2IANheQAgiRWptbQWntaIC81MA+CChqUAL9BIzg7+gBrMixWAOJUApQgWcACqgWzg");
	var mask_graphics_4 = new cjs.Graphics().p("EhlRBOOQCq2yBXhmQDCjjDmj9QDkj7A9hIQCCiZBmiXQBxipCLkAQC4lUBmk5QBHjXA2khQBBlYAahhQBAjzB3jaQB1jYCvjFQBchpDtjlQDcjUB8iTQC+jjCQkJQAdg1C3mVIC+mlQAKgOAIgQQCZkaBcmJQBTliAEkrQABhCgCg2IANheQAgiQWptbQWmtaID81MA+BChqUAL9BIzg7/gBrMixVAOHUApQgWcACqgWzg");
	var mask_graphics_5 = new cjs.Graphics().p("EhlDBOOQCq2zBXhlQDCjkDmj9QDkj6A9hIQCDiZBliYQByipCKkAQC5lTBmk5QBGjXA3khQBBlZAZhgQBBjzB3jaQB1jYCvjFQBbhpDujkQDcjVB7iTQC/jjCQkJQAcg0C4mVIC+mmQAKgOAIgPQCZkaBcmKQBTlhAEkrQABhCgCg2IANheQAgiRWptaQWntaIC80MA+AChqUAL8BIzg7+gBtMixWAOFUApQgWbACrgWyg");
	var mask_graphics_6 = new cjs.Graphics().p("EhkyBOMQCr2yBXhlQDDjkDmj9QDjj6A+hIQCCiZBmiXQBxipCLkAQC4lUBmk5QBHjXA2khQBBlYAahgQBAjzB4jaQB1jYCujFQBchpDujkQDbjUB8iTQC/jjCQkJQAcg1C4mVIC+mlQAKgOAIgQQCZkZBcmKQBUlhAEkrQABhCgDg2IANheQAgiRWptZQWntaID80MA9+ChqUAL7BIzg7+gBuMixVAOCUApQgWaACqgWzg");
	var mask_graphics_7 = new cjs.Graphics().p("EhkcBOLQCr2yBXhlQDDjkDmj9QDjj6A+hIQCCiYBmiYQBxipCLkAQC5lTBmk5QBGjXA3khQBBlYAahhQBAjyB4jbQB0jXCvjFQBchoDujlQDbjUB8iTQC/jjCQkJQAcg0C4mVIC/mlQAJgPAIgPQCZkaBdmJQBTlhAEkrQABhCgCg2IANheQAgiRWptZQWntZID8zMA98ChqUAL6BIyg7+gBvMixVAN+UApRgWZACqgWyg");
	var mask_graphics_8 = new cjs.Graphics().p("EhkCBOJQCr2xBXhmQDDjjDmj9QDkj6A+hIQCCiYBliYQByipCLj/QC4lUBnk4QBGjXA3khQBBlYAahhQBAjzB4jaQB1jXCujFQBchoDujlQDcjUB7iTQC/jiCQkJQAdg1C4mUIC+mlQAKgPAIgPQCZkaBdmJQBTlhAEkrQABhCgDg2IAOheQAgiQWptZQWntYIE8zMA95ChqUAL5BIyg7+gBwMixUAN5UApQgWYACrgWyg");
	var mask_graphics_9 = new cjs.Graphics().p("EhjkBOIQCs2yBXhlQDCjkDnj8QDjj6A+hIQCCiYBmiYQBxipCMj/QC4lTBmk5QBHjXA3khQBBlXAahhQBAjzB4jaQB1jXCvjFQBchoDtjlQDcjTB8iTQC/jjCQkIQAcg1C5mUIC+mlQAJgPAJgPQCZkZBdmKQBTlhAEkrQABhBgCg3IANhdQAgiRWqtXQWntYIE8zMA92ChrUAL4BIyg7+gByMixUAN0UApRgWXACrgWxg");
	var mask_graphics_10 = new cjs.Graphics().p("EhjCBOFQCs2xBXhlQDDjjDmj8QDkj6A+hIQCCiYBmiYQBxioCLkAQC5lTBmk5QBHjWA3khQBBlYAahgQBAjzB4jaQB1jXCvjFQBchoDujkQDcjUB8iSQC/jjCQkIQAcg1C5mUIC+mlQAJgOAJgQQCZkZBdmJQBTlhAFkrQABhCgDg2IAOheQAgiQWptXQWotWIF8yMA9yChqUAL3BIyg7+gB1MixUANuUApRgWUACsgWyg");
	var mask_graphics_11 = new cjs.Graphics().p("EhicBODQCs2xBXhlQDDjjDnj8QDjj6A+hHQCCiZBmiXQByipCLj/QC5lTBmk4QBHjXA3kgQBClYAZhhQBBjyB4jaQB1jXCvjFQBchoDujkQDcjTB7iTQC/jiCRkJQAcg0C5mUIC+mlQAKgOAIgPQCZkZBdmKQBUlgAFkrQABhCgDg2IANheQAhiQWptWQWotVIG8yMA9uChrUAL1BIxg79gB3MixUANoUApRgWTACtgWxg");
	var mask_graphics_12 = new cjs.Graphics().p("EhhyBOAQCt2wBXhlQDDjjDmj8QDkj5A+hIQCCiYBmiXQByipCLj/QC5lSBnk5QBGjWA3khQBClYAahgQBBjzB3jZQB2jXCvjFQBchoDtjjQDdjUB7iSQDAjiCQkIQAcg1C5mUIC/mkQAJgOAJgQQCZkZBdmJQBUlhAFkqQABhCgDg2IAOheQAgiQWqtVQWotUIG8xMA9qChrUALzBIwg79gB4MixTANgUApSgWRACtgWxg");
	var mask_graphics_13 = new cjs.Graphics().p("EhhFBN9QCu2vBXhmQDDjiDnj8QDkj5A+hHQCCiYBmiYQByioCLj/QC5lSBnk5QBHjWA3khQBClXAahgQBAjzB4jZQB1jXCwjEQBchoDujkQDcjTB8iSQC/jiCQkIQAdg1C5mTIC/mlQAJgOAIgPQCakZBdmJQBUlgAFkrQABhCgDg2IAOheQAgiQWqtTQWptTIH8wMA9lChrUALxBIwg79gB8MixSANYUApSgWPACtgWwg");
	var mask_graphics_14 = new cjs.Graphics().p("EhgTBN6QCv2vBXhlQDDjiDmj8QDlj5A9hHQCDiYBmiXQByioCLj/QC5lSBnk4QBHjXA3kgQBClXAahhQBBjyB4jZQB2jXCvjEQBchoDujjQDcjTB8iSQC/jiCRkIQAdg1C4mTIDAmkQAJgOAIgPQCakZBdmJQBUlgAFkrQAChBgDg2IAOheQAgiQWqtSQWptSII8vMA9gChrUALvBIvg78gB+MixTANPUApTgWMACugWwg");
	var mask_graphics_15 = new cjs.Graphics().p("EhfdBN3QCv2vBXhlQDEjiDmj7QDkj5A+hHQCDiYBmiXQByioCLj/QC5lRBok4QBHjXA3kgQBClXAahgQBBjzB4jZQB2jWCvjEQBchoDujjQDdjSB8iTQC/jhCRkIQAcg0C5mTIDAmkQAJgOAJgPQCZkZBemIQBUlhAFkqQAChCgDg2IAOhdQAgiQWrtRQWptQII8vMA9bChsUALsBIug77gCBMixSANGUApTgWKACvgWvg");
	var mask_graphics_16 = new cjs.Graphics().p("EhejBNzQCw2uBXhlQDDjiDnj6QDkj5A+hHQCDiYBmiXQByioCMj+QC5lSBnk3QBIjWA3khQBClWAahhQBBjyB5jZQB1jWCwjEQBchnDujjQDcjTB9iSQC/jhCRkHQAcg1C6mTIC/mjQAKgOAIgPQCakZBemIQBUlgAFkqQAChCgDg2IAOheQAgiPWstPQWptPIJ8uMA9VChsUALqBIug77gCFMixSAM8UApUgWIACwgWug");
	var mask_graphics_17 = new cjs.Graphics().p("EhdlBNvQCw2tBYhlQDDjiDnj6QDkj4A+hIQCDiXBmiXQByinCMj/QC5lRBok3QBHjWA4kgQBClXAbhgQBBjyB4jZQB2jWCvjEQBdhnDujjQDcjSB8iSQDAjgCRkIQAdg0C5mTIDAmjQAJgOAJgPQCakYBemIQBUlgAGkqQABhCgCg2IANhdQAhiQWrtOQWqtNIK8sMA9PChsUALnBItg77gCJMixQAMxUApUgWEACxgWug");
	var mask_graphics_18 = new cjs.Graphics().p("EhckBNrQCy2tBXhkQDEjiDnj6QDkj4A+hHQCDiXBmiXQByinCMj+QC6lRBok4QBHjVA4kgQBDlXAahgQBBjyB5jYQB2jWCvjDQBdhoDujiQDcjSB9iRQC/jhCRkHQAdg0C6mTIDAmiQAJgOAJgQQCakXBemIQBVlgAGkqQABhBgDg3IAOhdQAhiQWstMQWqtLIL8rMA9IChsUALkBIsg76gCMMixQAMlUApVgWBACxgWtg");
	var mask_graphics_19 = new cjs.Graphics().p("EhbeBNnQCy2sBYhlQDEjhDnj6QDkj3A+hHQCDiXBniXQByinCMj+QC6lRBok3QBHjVA4kgQBDlWAbhhQBBjxB5jZQB1jVCwjDQBdhnDujiQDdjSB8iRQDAjhCRkGQAdg1C6mSIDAmiQAKgOAIgPQCakYBfmHQBVlgAGkqQABhBgCg2IANheQAhiPWstKQWrtKIM8qMA9BChtUALhBIrg76gCQMixPAMZUApWgV+ACygWsg");
	var mask_graphics_20 = new cjs.Graphics().p("EhaUBNiQCz2rBYhlQDDjgDoj6QDkj3A/hHQCCiXBniWQByinCNj+QC6lQBok3QBIjVA4kgQBDlWAahgQBCjyB4jYQB2jVCwjDQBdhnDujiQDdjRB9iRQDAjgCRkHQAdg0C6mRIDAmiQAKgOAIgPQCbkYBfmHQBVlfAGkqQABhCgCg2IAOhdQAhiQWstIQWrtHIO8pMA85ChtUALeBIqg75gCUMixPAMMUApWgV7AC0gWrg");
	var mask_graphics_21 = new cjs.Graphics().p("EhZHBNdQC12qBXhlQDEjgDoj5QDlj3A+hHQCDiWBmiWQBzioCMj9QC7lQBok2QBIjWA4kfQBElWAahgQBCjxB5jYQB2jVCwjDQBchnDvjhQDdjRB8iRQDBjfCRkHQAdg0C6mRIDBmhQAKgPAIgPQCbkXBfmHQBVlfAGkpQAChCgCg2IAOhdQAgiQWstFQWttGIP8nMA8xChtUALaBIpg74gCZMixOAL+UApXgV2AC0gWrg");
	var mask_graphics_22 = new cjs.Graphics().p("EhX1BNYQC12qBYhkQDEjgDoj5QDlj2A+hHQCDiWBniWQByinCNj9QC7lPBok3QBIjVA5kfQBDlWAbhgQBCjxB5jXQB2jVCwjCQBdhnDvjhQDdjQB8iRQDBjgCRkGQAdg0C7mQIDBmiQAJgOAJgPQCbkWBfmHQBWlfAGkpQAChCgDg2IAPhdQAhiQWrtDQWutEIQ8lMA8pChtUALXBIog74gCdMixNALvUApYgVzAC1gWpg");
	var mask_graphics_23 = new cjs.Graphics().p("EhWfBNSQC22oBYhkQDEjgDoj4QDlj2A/hHQCDiWBniWQByimCNj9QC7lPBok2QBJjVA5kfQBDlVAbhgQBCjxB5jYQB3jUCwjCQBdhnDvjgQDdjQB8iRQDBjfCSkGQAdgzC7mRIDBmhQAKgNAIgQQCbkWBgmGQBWlfAGkpQAChCgCg2IAOhdQAhiPWstCQWutBIS8kMA8gChuUALTBImg74gCiMixLALhUApYgVvAC3gWpg");
	var mask_graphics_24 = new cjs.Graphics().p("EhVGBNNQC42oBYhkQDEjfDoj4QDmj2A+hGQCDiWBniVQBzinCNj8QC7lPBpk2QBIjUA5kfQBElVAbhgQBCjxB6jXQB2jUCxjCQBchmDwjgQDdjQB9iQQDAjfCSkFQAdg0C8mQIDBmgQAKgOAIgPQCckWBgmGQBWlfAHkpQABhBgCg2IAOhdQAiiQWss/QWus/IU8iMA8XChuUALPBIlg73gCnMixKALRUApZgVrAC3gWng");
	var mask_graphics_25 = new cjs.Graphics().p("EhToBNHQC52nBYhkQDEjfDoj3QDmj1A+hHQCEiVBniVQBzimCNj9QC7lOBpk1QBJjVA5keQBFlVAahgQBDjwB5jXQB3jUCxjCQBdhmDvjfQDdjPB9iRQDBjeCSkFQAdg0C8mPIDCmgQAJgOAJgPQCbkWBhmFQBWleAHkpQAChCgCg2IAOhdQAiiPWss8QWvs9IV8gMA8OChuUALLBIkg72gCtMixJALAUApZgVmAC5gWmg");
	var mask_graphics_26 = new cjs.Graphics().p("EhSGBNAQC62lBYhkQDFjeDoj3QDmj1A+hGQCEiVBniVQBzimCNj8QC8lOBpk1QBJjUA5keQBFlVAbhgQBDjwB5jXQB3jTCxjBQBdhmDvjfQDejPB9iQQDBjeCSkFQAdgzC8mPIDDmfQAJgOAJgPQCbkWBhmFQBXleAHkpQAChBgCg2IAOhdQAiiPWts6QWws6IW8fMA8EChvUALGBIjg71gCzMixIAKwUApbgViAC6gWmg");
	var mask_graphics_27 = new cjs.Graphics().p("EhQhBM6QC82lBYhjQDFjeDoj2QDmj1A/hGQCDiVBoiVQBzilCNj8QC8lNBqk1QBJjUA6keQBFlUAbhgQBCjwB6jWQB3jTCxjBQBdhmDwjeQDejPB9iPQDBjeCSkEQAeg0C8mOIDDmfQAJgOAJgPQCckVBhmFQBXldAHkpQAChBgCg2IAPhdQAhiPWus3QWws3IY8dMA76ChvUALBBIhg70gC4MixGAKdUApbgVcAC7gWlg");
	var mask_graphics_28 = new cjs.Graphics().p("EhO3BMzQC92jBYhjQDFjeDpj2QDmj0A+hGQCEiUBoiVQBzilCOj7QC8lNBqk1QBJjTA6keQBFlUAbhgQBDjvB6jWQB4jTCxjBQBdhlDwjeQDdjOB+iPQDBjdCTkEQAdg0C9mOIDDmeQAJgOAJgPQCckUBhmFQBYldAIkpQAChBgCg2IAOhdQAiiOWus1QWxs0IZ8bMA7vChvUAK+BIgg70gC+MixFAKKUApcgVXAC9gWkg");
	var mask_graphics_29 = new cjs.Graphics().p("EhNJBMsQC+2iBYhjQDFjdDpj2QDnjzA+hGQCEiUBoiUQBzilCOj7QC8lMBrk0QBJjUA6kdQBGlUAbhgQBEjvB6jWQB3jSCxjAQBehmDvjdQDfjNB9iPQDBjdCUkEQAdgzC9mNIDDmeQAKgOAIgPQCdkUBhmEQBYldAJkoQAChBgDg2IAPhdQAiiPWvsxQWxsyIb8ZMA7kChwUAK5BIeg7zgDFMixEAJ4UApdgVSAC/gWjg");
	var mask_graphics_30 = new cjs.Graphics().p("EhLYBMlQDA2hBYhjQDGjdDpj0QDmjzA/hGQCEiUBoiUQBzilCPj6QC8lMBrkzQBJjUA7kdQBGlTAbhgQBEjvB6jVQB4jSCxjAQBdhlDxjdQDejNB9iPQDCjcCTkDQAegzC9mNIDEmdQAJgOAJgPQCdkTBimEQBYldAJkoQAChBgCg2IAOhcQAiiPWwsuQWysvId8XMA7YChwUAKzBIcg7xgDKMixCAJjUApdgVNADAgWhg");
	var mask_graphics_31 = new cjs.Graphics().p("EhJiBMdQDB2fBYhjQDGjcDpj0QDnjzA/hFQCEiUBoiTQBzilCPj6QC9lLBrkzQBKjTA7kdQBGlTAbhgQBEjuB7jVQB4jTCxi+QBdhlDxjdQDejMB+iPQDCjbCTkDQAegzC9mMIDFmdQAJgOAJgPQCdkTBimDQBZlcAJkoQAChBgCg2IAPhdQAiiOWwsrQWyssIf8VMA7MChxUAKvBIag7xgDRMixAAJPUApfgVIADBgWgg");
	var mask_graphics_32 = new cjs.Graphics().p("EhHpBMWQDD2fBZhiQDGjcDpj0QDnjxA/hFQCEiUBoiTQB0ikCPj6QC9lKBrkzQBKjTA8kdQBGlTAchfQBEjuB7jVQB4jSCxi+QBehlDwjcQDfjLB+iOQDCjcCUkCQAdgzC+mMIDFmcQAJgNAJgPQCdkTBjmDQBZlbAJkoQAChBgCg2IAPhdQAjiOWxsoQWysoIh8TMA7AChxUAKpBIZg7wgDZMiw+AI6UApggVCADCgWeg");
	var mask_graphics_33 = new cjs.Graphics().p("EhFrBMOQDE2eBZhiQDGjbDqjzQDnjxA/hFQCEiTBoiTQB0ikCPj5QC+lKBskzQBKjSA7kcQBIlTAbhfQBEjuB7jUQB5jSCyi+QBdhkDxjbQDfjLB9iOQDDjbCUkCQAdgzC/mLIDFmbQAKgOAIgPQCekSBjmCQBZlbAKkoQAChBgCg2IAPhcQAjiOWxslQW0slIi8RMA60ChxUAKjBIYg7ugDgMiw9AIkUAphgU8ADEgWdg");
	var mask_graphics_34 = new cjs.Graphics().p("EhFPBMFQDG2cBZhhQDGjbDqjyQDojxA/hFQCEiSBoiTQB1ikCPj4QC+lKBskyQBKjSA8kcQBIlSAbhfQBFjuB7jUQB5jRCyi9QBdhkDxjbQDfjLB+iNQDDjaCUkBQAeg0C/mKIDFmaQAKgOAIgPQCekSBkmCQBalaAKkoQAChBgCg1IAPhdQAjiOWyshQW0shIl8PMA6mChxUAKeBIWg7ugDnMiw7AINUApigU2ADGgWcg");
	var mask_graphics_35 = new cjs.Graphics().p("EhFNBL9QDI2bBZhhQDGjaDrjyQDnjwA/hFQCFiSBoiSQB1ijCPj4QC/lJBskyQBLjSA8kcQBIlRAbhfQBFjuB8jTQB5jRCyi9QBehkDxjaQDfjKB+iNQDDjZCUkBQAegzC/mKIDGmaQAKgNAJgPQCekRBkmCQBalaAKknQADhBgCg2IAPhcQAjiOWzseQW0sdIn8MMA6ZChxUAKYBIUg7sgDvMiw5AH1UApjgUvADHgWag");
	var mask_graphics_36 = new cjs.Graphics().p("EhFKBL0QDJ2ZBZhhQDHjaDqjxQDojvA/hFQCFiSBpiSQB0iiCQj4QC/lIBskxQBLjSA9kbQBIlSAcheQBFjuB8jTQB5jQCyi8QBehkDxjZQDgjKB+iMQDDjZCVkBQAegzDAmJIDGmZQAKgNAIgPQCfkRBkmBQBblaALknQAChAgCg2IAQhcQAjiOWzsaQW1saIp8KMA6LChyUAKSBISg7rgD3Miw3AHeUApkgUpADKgWZg");
	var mask_graphics_37 = new cjs.Graphics().p("EhFIBLrQDL2YBZhgQDHjZDrjxQDojuA/hFQCFiRBpiSQB1iiCQj3QC/lIBtkxQBLjRA9kbQBJlRAcheQBFjuB8jSQB5jQCzi8QBehjDxjZQDgjJB/iMQDDjYCVkAQAegzDAmIIDHmZQAKgNAIgPQCfkQBlmBQBblZALknQADhAgCg2IAQhcQAhiNW2sXQW2sWIr8HMA58ChyUAKMBIPg7qgD+Miw0AHEUAplgUhADLgWYg");
	var mask_graphics_38 = new cjs.Graphics().p("EhFGBLiQDO2WBZhhQDHjYDrjwQDojuA/hEQCGiRBpiSQB0iiCRj2QC/lHBukwQBLjRA9kbQBKlQAchfQBFjsB9jTQB5jPCzi7QBehkDyjXQDgjIB+iMQDEjYCVkAQAegyDBmIIDHmXQAKgOAIgPQCfkPBmmAQBblZAMknQAChAgBg2IAQhcQAhiNW3sTQW2sSIu8EMA5tChyUAKGBINg7pgEGMiwyAGqUApmgUaADNgWWg");
	var mask_graphics_39 = new cjs.Graphics().p("EhFDBLYQDP2UBZhhQDIjXDrjvQDpjtA/hEQCFiRBpiRQB1iiCRj2QDAlGBukwQBLjRA+kaQBKlQAcheQBGjsB8jSQB6jPCzi7QBehjDyjXQDgjHB/iMQDEjXCWj/QAdgyDCmHIDHmXQAKgOAJgOQCfkPBmmAQBclYAMkmQADhBgCg1IAQhcQAiiNW3sPQW3sOIw8CMA5eChyUAJ/BIMg7mgEQMiwwAGRUApngUTADPgWVg");
	var mask_graphics_40 = new cjs.Graphics().p("EhFABLOQDR2TBZhgQDIjXDrjuQDpjsA/hEQCGiQBpiRQB1ihCRj2QDBlFBukwQBMjQA+kaQBKlPAcheQBGjsB9jSQB6jOCzi6QBfhjDyjWQDgjHB/iLQDEjXCWj+QAegyDCmGIDImWQAKgOAJgPQCfkOBnl/QBclYAMkmQADhAgBg2IAOhcQAjiMW4sLQW4sKIy7/MA5PChzUAJ5BIJg7mgEYMiwsAF1UApogUMADRgWTg");
	var mask_graphics_41 = new cjs.Graphics().p("EhE+BLEQDT2RBahgQDIjWDrjuQDqjrA/hEQCGiQBpiQQB2ihCRj1QDBlFBukuQBMjQA/kaQBKlPAdheQBGjrB9jRQB7jOCzi6QBehiDzjWQDgjGB/iKQDFjWCWj+QAegyDCmGIDJmVQAKgNAJgPQCgkOBnl+QBdlXAKkmQADhBgBg1IAQhcQAkiMW4sHQW5sGI078MA5AChzUAJxBIHg7kgEhMiwqAFaUAppgUFADTgWRg");
	var mask_graphics_42 = new cjs.Graphics().p("EhE7BK6QDV2QBahfQDIjWDsjtQDpjqBAhEQCGiPBpiQQB2igCSj1QDBlEBvkuQBMjQA/kZQBLlOAcheQBHjrB+jRQB6jNC0i5QBehiDzjVQDhjFB/iLQDEjVCXj9QAegyDDmFIDJmUQAKgNAJgPQCgkNBol+QBblXANklQADhBgBg1IAQhcQAkiMW6sCQW5sCI375MA4vChzUAJqBIFg7igErMiwnAE+UApqgT9ADVgWPg");
	var mask_graphics_43 = new cjs.Graphics().p("EhE4BKvQDX2OBahfQDIjVDsjsQDqjpBAhEQCGiPBpiPQB2igCSj0QDClDBvkuQBNjPA/kZQBMlOAcheQBIjqB9jQQB7jNC0i5QBehhDzjUQDhjFCAiKQDEjUCYj9QAegyDDmDIDKmUQAKgNAIgPQChkMBol+QBclWAOklQADhBgBg1IAQhbQAkiMW6r+QW6r+I672MA4eCh0UAJjBICg7ggE0MiwkAEhUAprgT1ADXgWOg");
	var mask_graphics_44 = new cjs.Graphics().p("EhE1BKkQDZ2MBaheQDIjVDtjrQDqjpBAhDQCGiOBqiQQB2ifCSjzQDClDBwktQBNjPBAkYQBMlOAchdQBIjrB+jPQB7jMC0i4QBfhhDzjUQDhjDCAiKQDFjUCXj8QAegyDEmCIDLmTQAKgNAIgPQChkMBpl8QBclWAOklQADhAgBg2IARhbQAkiMW7r5QW7r5I87zMA4NChzUAJcBIAg7fgE9MiwhAEDUAptgTtADZgWMg");
	var mask_graphics_45 = new cjs.Graphics().p("EhEyBKZQDb2KBaheQDJjUDtjqQDqjoBAhDQCGiOBqiPQB3ifCSjzQDDlBBwktQBOjOBAkYQBMlNAdhdQBIjrB+jOQB7jMC1i4QBehhD0jSQDhjDCAiJQDFjTCYj7QAegyDFmCIDLmSQAKgNAIgOQCikMBpl8QBdlVAOkkQAEhBgBg1IAQhbQAliMW7r0QW8r1I+7wMA38Ch0UAJVBH9g7dgFHMiweADlUAptgTlADcgWKg");
	var mask_graphics_46 = new cjs.Graphics().p("EhEvBKOQDd2IBahfQDKjSDtjqQDrjnA/hDQCHiNBqiPQB3ieCTjyQDDlBBwksQBOjOBAkXQBNlNAdhdQBJjqB+jOQB8jLC0i3QBfhhD0jRQDijCCAiJQDFjSCYj7QAegyDFmAIDMmRQAKgOAJgOQCikKBpl8QBelVAPkkQADhAgBg1IARhbQAliMW8rvQW8rwJB7tMA3qCh0UAJNBH6g7bgFRMiwaADGUApugTcADegWIg");
	var mask_graphics_47 = new cjs.Graphics().p("EhEsBKCQDg2GBaheQDJjSDujpQDrjmBAhCQCHiNBqiOQB3ieCTjyQDElABxkrQBOjOBBkXQBNlMAdhdQBJjpB/jOQB7jLC1i1QBfhhD0jQQDijCCAiIQDGjRCZj6QAegyDFmAIDNmQQAKgNAIgOQCjkKBql7QBelUAPkkQAEhAgBg1IARhbQAliLW9rrQW8rrJE7qMA3YCh0UAJGBH4g7agFcMiwWACnUApvgTUADggWGg");
	var mask_graphics_48 = new cjs.Graphics().p("EhEpBJ2QDi2EBbheQDJjRDujoQDrjlBAhCQCHiNBriNQB3ieCUjwQDEk/BxkrQBOjNBCkXQBOlLAdhdQBJjpB/jNQB8jLC1i1QBghgD0jPQDijBCAiHQDGjRCZj6QAegxDHl/IDMmPQAKgNAJgPQCjkJBpl6QBglTAQkkQAEhAgBg1IARhbQAliLW+rmQW9rmJH7mMA3FCh0UAI+BH1g7YgFmMiwSACGUApwgTLADigWEg");
	var mask_graphics_49 = new cjs.Graphics().p("EhElBJqQDk2CBahdQDKjRDvjnQDrjkBAhCQCHiMBriNQB3idCUjwQDFk+BykrQBPjMBBkWQBPlLAdhdQBKjoB/jNQB9jKC1i0QBfhgD1jOQDijACAiHQDHjQCZj5QAegxDHl+IDOmOQAJgNAJgPQCjkIBql5QBhlTAQkkQAEg/gBg1IARhbQAmiLW+rhQW+rhJK7jMA2yCh0UAI2BHyg7WgFwMiwOABlUApxgTCADlgWCg");
	var mask_graphics_50 = new cjs.Graphics().p("EhEiBJdQDn2ABahcQDLjQDujmQDsjkBAhBQCHiMBsiMQB3idCUjvQDFk9BzkqQBPjMBCkWQBPlKAehdQBJjoCAjLQB9jKC1izQBghgD1jOQDii+CBiHQDGjPCaj4QAfgxDHl9IDOmNQAKgNAJgPQCjkHBql5QBilSARkjQADhAAAg1IARhaQAmiLW/rcQW/rcJM7fMA2fCh0UAIuBHvg7UgF7MiwKABDUApygS5ADngWAg");
	var mask_graphics_51 = new cjs.Graphics().p("EhEeBJQQDp19BahdQDLjPDvjkQDsjjBAhBQCIiLBriMQB4icCUjvQDGk8BzkpQBPjMBDkVQBPlKAehcQBKjoCAjLQB9jJC2izQBghfD1jMQDji+CAiGQDHjPCaj3QAfgxDIl8IDOmMQAKgNAJgOQCkkHBrl4QBilSARkiQAEhAAAg1IARhaQAmiLXArWQXArXJP7cMA2LCh0UAIlBHsg7RgGGMiwGAAhUAp0gSwADpgV+g");
	var mask_graphics_52 = new cjs.Graphics().p("EA95Bx2MiwWgBQUAqJgSZAD+gWBQD/2ABchcQDOjNDyjkQDwjhBBhBQCKiKBtiLQB6ibCZjuQDKk8B4kpQBSjMBHkVQBUlKAghcQBNjmCEjNQCAjIC4iyQBhheD5jLQDmi9CDiFQDKjNCej2QAfgxDOl8IDVmLQAKgNAJgOQCmkGByl5QBnlRAWkkQAFhAAAg1IAThaQAoiLXNrKQXMrLJq7cMAz3Ci8UAG6BB5gw/AAAQklAAlEglg");
	var mask_graphics_53 = new cjs.Graphics().p("EA9nByLMiwkgC8UAqdgSDAESgWDQES2CBehcQDRjMD2jiQDzjfBDhBQCLiJBwiLQB9iaCcjuQDOk6B8kpQBWjMBKkVQBalLAghcQBRjmCGjMQCEjIC7iwQBjheD7jJQDpi7CFiEQDNjMCij2QAggxDTl7IDbmKQAKgNAHgOQCskGB4l4QBslSAakkQAGhAABg2IAUhaQAqiLXYq/QXZq+KD7cMAxqCj+UAF9BBtgwVAAAQk5AAlcgrg");
	var mask_graphics_54 = new cjs.Graphics().p("EA9VByeMiwxgEjUAqwgRuAEmgWEQEl2FBfhbQDUjLD5jgQD2jeBEhAQCNiIByiLQB/iaCfjsQDTk6CAkpQBZjLBOkWQBelLAihcQBUjmCJjLQCGjHC+iwQBkhdD+jIQDsi5CHiDQDQjLClj1QAhgxDZl6IDemKQAKgNAKgOQCvkEB9l5QBxlSAdklQAHhAACg2IAVhaQAsiLXkqzQXkq0Kb7bMAvkCk8UAFDBBhgvuAAAQlLAAlzgxg");
	var mask_graphics_55 = new cjs.Graphics().p("EA9DByuMiw8gGDUArCgRaAE3gWHQE32GBghaQDXjKD8jeQD6jdBEhAQCQiHB0iKQCAiZCjjsQDXk5CEkpQBbjLBSkWQBilLAjhcQBXjmCMjLQCJjGDAiuQBlhdECjGQDui4CJiDQDTjJCoj1QAhgwDel5IDjmJQALgNAKgOQCzkECCl5QB0lSAiklQAHhBADg1IAWhbQAuiKXuqpQXuqpKy7bMAtlCl0UAENBBXgvLAAAQlbAAmIg4g");
	var mask_graphics_56 = new cjs.Graphics().p("EA8xBy8MixGgHeUArTgRIAFIgWHQFI2HBhhaQDajJD/jdQD9jbBFhAQCRiGB1iJQCDiZCljsQDck4CHkoQBejLBVkWQBmlLAkhaQBajnCPjLQCLjGDCitQBnhcEEjFQDwi2CLiCQDWjICrj0QAigwDgl5IDrmIQAKgNAKgOQC2kDCHl5QB5lSAlkmQAIhAADg2IAYhbQAviKX4qfQX4qeLI7aMArsCmnUADbBBMgurAAAQlrAAmbg+g");
	var mask_graphics_57 = new cjs.Graphics().p("EA8fBzJMixOgI1UArigQ1AFYgWIQFY2JBihZQDcjHECjcQEAjaBFg/QCTiGB3iJQCFiYCojrQDfk3CLkoQBgjLBYkWQBqlLAlhaQBdjnCRjKQCNjFDFitQBnhbEHjDQDzi1CMiCQDYjHCujzQAjgwDll4IDumHQALgNALgOQC5kCCLl5QB8lSApkmQAIhBAEg2IAZhbQAxiKYBqVQYBqULc7ZMAp6CnWUACtBBBguOAAAQl5AAmthDg");
	var mask_graphics_58 = new cjs.Graphics().p("EA8OBzTMixVgKEUArwgQlAFmgWJQFn2JBkhZQDejGEEjbQECjYBHg/QCUiFB5iIQCGiYCrjqQDik2COkoQBijKBckWQBtlJAmhcQBfjoCTjJQCQjFDHirQBohbEJjCQD1i0COiAQDajGCxjzQAjgwDpl3IDzmHQALgMAKgOQC9kCCPl4QCAlSArknQAKhAAEg2IAZhbQAziLYKqLQYKqMLu7YMAoQCoBUACCBA3gt0AABQmGAAm9hKg");
	var mask_graphics_59 = new cjs.Graphics().p("EA79BzcMixbgLOUAr9gQVAF0gWKQF12JBkhZQDhjFEHjZQEEjYBHg+QCWiFB6iHQCIiXCtjqQDlk1CRknQBkjLBfkWQBwlJAnhcQBijnCVjJQCRjEDJirQBqhaEKjAQD3izCPiAQDdjFCxjyQAkgwDvl2ID3mGQALgNAKgOQC/kBCTl4QCDlRAukoQAKhAAFg2IAbhbQAziLYSqDQYSqCL/7XMAmuConUABaBAugtcAAAQmSAAnMhPg");
	var mask_graphics_60 = new cjs.Graphics().p("EA7tBzjMixhgMSUAsJgQGAGCgWKQGB2KBlhYQDijFEKjYQEGjWBIg+QCXiEB7iHQCJiXCwjpQDok0CUknQBmjKBhkWQBzlJAohcQBkjnCXjJQCTjDDKiqQBrhaENi/QD5ixCQiAQDejEC0jxQAkgwDyl2ID7mFQALgMALgOQDBkBCWl4QCHlRAwknQALhBAFg2IAbhbQA1iLYZp7QYZp7MQ7VMAlSCpKUAA2BAlgtHAAAQmdAAnZhVg");
	var mask_graphics_61 = new cjs.Graphics().p("EA7eBzqMixlgNRUAsTgP5AGNgWKQGN2LBmhXQDkjEELjXQEJjVBIg+QCZiDB8iHQCLiWCxjoQDrk0CWkmQBojLBjkVQB2lJAphcQBljnCZjIQCVjDDMipQBrhZEPi/QD7iwCRh/QDgjDC2jxQAkgvD2l1ID+mFQALgMALgOQDDkACZl4QCKlRAzkoQALhAAGg3IAchbQA2iKYfp0QYgpzMe7UMAj+CpoUAAWBAdgs1AAAQmmAAnlhZg");
	var mask_graphics_62 = new cjs.Graphics().p("EA7QBzvMixpgOJUAsdgPtAGYgWKQGX2LBnhXQDmjDEMjWQEKjUBJg+QCaiCB9iHQCMiVCzjoQDukzCZknQBpjJBlkWQB4lJAqhcQBnjnCajHQCXjDDNioQBshZERi9QD8iwCSh+QDijCC3jwQAlgwD4l0IEBmEQAMgNALgNQDFkACcl3QCMlRA1koQAMhBAGg2IAdhbQA3iKYlptQYmptMr7TMAiyCqEUgAHBAVgskAAAQmvAAnwheg");
	var mask_graphics_63 = new cjs.Graphics().p("EA7DBzzMixsgO8UAsmgPhAGhgWLQGh2KBnhXQDnjCEPjVQELjUBKg9QCaiCB/iGQCMiVC1joQDwkyCbkmQBqjKBnkWQB7lJAqhbQBpjnCbjHQCZjCDOioQBthYERi9QD+iuCTh+QDhjCC8jvQAlgwD7lzIEDmEQAMgMALgOQDHj/Cfl3QCOlRA3koQAMhBAHg2IAdhbQA4iKYrpnQYqpnM37SMAhuCqcUgAiBAPgsVAAAQm2AAn6hjg");
	var mask_graphics_64 = new cjs.Graphics().p("EA64Bz3MixvgPpUAsugPXAGpgWLQGp2LBohWQDojCEQjUQENjTBKg9QCbiCCAiFQCNiVC3jnQDykyCckmQBrjJBpkWQB9lJAqhbQBrjnCcjGQCajCDPinQBuhYETi8QD+iuCUh9QDjjBC9jvQAlgwD9lzIEGmCQAMgNALgOQDJj+Cgl3QCRlRA5koQAMhBAHg2IAehbQA5iKYvpiQYvpiNC7QMAgxCqxUgA5BAIgsIAAAQm9AAoChmg");
	var mask_graphics_65 = new cjs.Graphics().p("EA6uBz6MixygQQUAs1gPPAGxgWLQGw2KBphWQDpjBERjUQEOjSBKg9QCciBCAiGQCPiUC4jnQDzkxCekmQBsjJBrkWQB+lIArhcQBsjmCdjGQCbjCDQimQBuhYEUi7QEAitCVh9QDjjBC+jvQAmgvD/lzIEImCQAMgMALgOQDKj+Cjl3QCSlQA6kpQANhBAHg2IAfhbQA5iKYzpdQY0pdNK7PMAf+CrCUgBOBADgr9AAAQnDAAoJhpg");
	var mask_graphics_66 = new cjs.Graphics().p("EA6lBz8MixzgQxUAs6gPHAG3gWLQG32LBphWQDqjAESjTQEPjRBLg9QCciBCBiFQCPiVC5jmQD1kxCfklQBtjJBskWQCAlIArhcQBtjmCejGQCcjCDRilQBuhYEVi6QEBitCVh8QDkjBDAjuQAmgvEAlzIEKmBQAMgNALgNQDMj+Ckl3QCUlQA7kpQANhBAIg2IAehbQA7iKY2pZQY2pZNT7OMAfRCrRUgBeA/+gr1AAAQnHAAoQhsg");
	var mask_graphics_67 = new cjs.Graphics().p("EA6fBz+Mix1gRMUAs/gPBAG7gWLQG82LBphWQDri/ETjTQEQjRBLg9QCdiACBiFQCQiUC6jmQD2kxCgklQBujJBskWQCClIArhcQBujmCfjFQCcjCDSilQBvhYEVi5QEBisCWh9QDmjADAjuQAmgvEClyIELmBQAMgNALgNQDNj9Cll3QCVlRA9koQANhBAIg2IAfhbQA6iKY6pWQY5pWNZ7NMAesCrdUgBsA/6grtAAAQnLAAoUhug");
	var mask_graphics_68 = new cjs.Graphics().p("EA6ZBz/Mix1gRhUAtCgO8AG/gWLQHA2LBphVQDsjAEUjSQEQjRBLg8QCeiBCBiEQCRiUC6jmQD3kwChklQBujJBukWQCClIAshcQBujmCgjFQCcjBDTimQBvhXEWi5QECisCWh8QDmjADBjuQAmgvEDlxIEMmBQAMgNAMgNQDNj9Cml3QCWlQA9kpQAOhBAIg2IAfhbQA7iKY7pTQY8pTNe7NMAePCrmUgB2A/3grnAAAQnPAAoYhwg");
	var mask_graphics_69 = new cjs.Graphics().p("EA6VB0AMix2gRwUAtFgO5AHCgWLQHC2KBqhWQDsi/EUjSQERjRBLg8QCeiACCiFQCRiUC6jlQD4kwChklQBwjJBtkWQCDlIAshcQBvjlCgjGQCdjBDTilQBvhXEXi5QECirCWh9QDni/DBjuQAmgvEElxIENmBQANgMALgOQDNj9Col2QCWlRA+koQAOhBAIg3IAfhbQA7iJY9pSQY9pRNh7NMAd8CruUgB+A/0grjAABQnRAAobhyg");
	var mask_graphics_70 = new cjs.Graphics().p("EA6TB0BMix3gR5UAtGgO4AHFgWKQHE2LBphVQDti/EUjSQERjQBLg9QCfiACBiFQCRiTC7jmQD4kwCiklQBwjIBukWQCDlIAshcQBvjmCgjFQCejBDTilQBvhXEXi5QECirCXh8QDmi/DCjuQAmgvEFlxIEOmBQAMgMALgOQDOj9Col2QCWlQA/kpQANhBAIg2IAghbQA7iKY+pQQY+pRNj7MMAdwCrxUgCDA/0grhAAAQnSAAochyg");
	var mask_graphics_71 = new cjs.Graphics().p("EA6SB0BMix3gR8UAtHgO3AHFgWLQHE2KBqhVQDti/EUjSQERjQBLg9QCfiACCiFQCRiTC7jlQD4kxCikkQBvjJBukWQCElIAshcQBvjlChjGQCdjBDTikQBvhYEXi4QEDisCWh7QDnjADCjtQAmgvEFlyIEOmAQAMgNALgNQDOj9Col3QCXlQA+koQAOhBAIg3IAfhbQA8iJY+pQQY+pQNk7MMAdsCryUgCFA/zgrgAAAQnSAAodhyg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:-931,y:-790.5}).wait(1).to({graphics:mask_graphics_2,x:-930.8,y:-790.4}).wait(1).to({graphics:mask_graphics_3,x:-930.2,y:-789.7}).wait(1).to({graphics:mask_graphics_4,x:-929.3,y:-788.5}).wait(1).to({graphics:mask_graphics_5,x:-927.9,y:-786.8}).wait(1).to({graphics:mask_graphics_6,x:-926.2,y:-784.7}).wait(1).to({graphics:mask_graphics_7,x:-924,y:-782}).wait(1).to({graphics:mask_graphics_8,x:-921.5,y:-778.9}).wait(1).to({graphics:mask_graphics_9,x:-918.6,y:-775.3}).wait(1).to({graphics:mask_graphics_10,x:-915.3,y:-771.2}).wait(1).to({graphics:mask_graphics_11,x:-911.6,y:-766.6}).wait(1).to({graphics:mask_graphics_12,x:-907.5,y:-761.6}).wait(1).to({graphics:mask_graphics_13,x:-903,y:-756.1}).wait(1).to({graphics:mask_graphics_14,x:-898.1,y:-750}).wait(1).to({graphics:mask_graphics_15,x:-892.9,y:-743.5}).wait(1).to({graphics:mask_graphics_16,x:-887.2,y:-736.6}).wait(1).to({graphics:mask_graphics_17,x:-881.2,y:-729.1}).wait(1).to({graphics:mask_graphics_18,x:-874.7,y:-721.2}).wait(1).to({graphics:mask_graphics_19,x:-867.9,y:-712.8}).wait(1).to({graphics:mask_graphics_20,x:-860.7,y:-703.9}).wait(1).to({graphics:mask_graphics_21,x:-853.1,y:-694.5}).wait(1).to({graphics:mask_graphics_22,x:-845.1,y:-684.6}).wait(1).to({graphics:mask_graphics_23,x:-836.7,y:-674.3}).wait(1).to({graphics:mask_graphics_24,x:-828,y:-663.5}).wait(1).to({graphics:mask_graphics_25,x:-818.8,y:-652.2}).wait(1).to({graphics:mask_graphics_26,x:-809.2,y:-640.4}).wait(1).to({graphics:mask_graphics_27,x:-799.3,y:-628.1}).wait(1).to({graphics:mask_graphics_28,x:-789,y:-615.3}).wait(1).to({graphics:mask_graphics_29,x:-778.2,y:-602.1}).wait(1).to({graphics:mask_graphics_30,x:-767.1,y:-588.4}).wait(1).to({graphics:mask_graphics_31,x:-755.6,y:-574.2}).wait(1).to({graphics:mask_graphics_32,x:-743.7,y:-559.5}).wait(1).to({graphics:mask_graphics_33,x:-731.4,y:-544.4}).wait(1).to({graphics:mask_graphics_34,x:-708.5,y:-528.7}).wait(1).to({graphics:mask_graphics_35,x:-682.3,y:-512.6}).wait(1).to({graphics:mask_graphics_36,x:-655.3,y:-496}).wait(1).to({graphics:mask_graphics_37,x:-627.5,y:-478.9}).wait(1).to({graphics:mask_graphics_38,x:-598.9,y:-461.4}).wait(1).to({graphics:mask_graphics_39,x:-569.6,y:-443.3}).wait(1).to({graphics:mask_graphics_40,x:-539.4,y:-424.8}).wait(1).to({graphics:mask_graphics_41,x:-508.5,y:-405.8}).wait(1).to({graphics:mask_graphics_42,x:-476.8,y:-386.3}).wait(1).to({graphics:mask_graphics_43,x:-444.3,y:-366.3}).wait(1).to({graphics:mask_graphics_44,x:-411,y:-345.8}).wait(1).to({graphics:mask_graphics_45,x:-376.9,y:-324.9}).wait(1).to({graphics:mask_graphics_46,x:-342,y:-303.4}).wait(1).to({graphics:mask_graphics_47,x:-306.3,y:-281.5}).wait(1).to({graphics:mask_graphics_48,x:-269.9,y:-259.1}).wait(1).to({graphics:mask_graphics_49,x:-232.7,y:-236.3}).wait(1).to({graphics:mask_graphics_50,x:-194.6,y:-212.9}).wait(1).to({graphics:mask_graphics_51,x:-155.8,y:-189.2}).wait(1).to({graphics:mask_graphics_52,x:-86.7,y:-127.9}).wait(1).to({graphics:mask_graphics_53,x:-21.1,y:-69.4}).wait(1).to({graphics:mask_graphics_54,x:41,y:-14.1}).wait(1).to({graphics:mask_graphics_55,x:99.6,y:38.2}).wait(1).to({graphics:mask_graphics_56,x:154.8,y:87.3}).wait(1).to({graphics:mask_graphics_57,x:206.5,y:133.3}).wait(1).to({graphics:mask_graphics_58,x:254.6,y:176.2}).wait(1).to({graphics:mask_graphics_59,x:299.3,y:216}).wait(1).to({graphics:mask_graphics_60,x:340.4,y:252.5}).wait(1).to({graphics:mask_graphics_61,x:377.9,y:286}).wait(1).to({graphics:mask_graphics_62,x:412,y:316.2}).wait(1).to({graphics:mask_graphics_63,x:442.4,y:343.4}).wait(1).to({graphics:mask_graphics_64,x:469.3,y:367.3}).wait(1).to({graphics:mask_graphics_65,x:492.6,y:388}).wait(1).to({graphics:mask_graphics_66,x:512.3,y:405.6}).wait(1).to({graphics:mask_graphics_67,x:528.5,y:420}).wait(1).to({graphics:mask_graphics_68,x:541,y:431.1}).wait(1).to({graphics:mask_graphics_69,x:550,y:439.1}).wait(1).to({graphics:mask_graphics_70,x:555.3,y:443.9}).wait(1).to({graphics:mask_graphics_71,x:556.9,y:445.6}).wait(1));

	// Layer 2
	this.instance_1 = new lib.fete();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-280,-154);

	this.instance_2 = new lib.Decor();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-393,-289,0.633,0.633);

	this.instance_1.mask = this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).wait(71));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-894.3,-416.5,527.2,532.9);


// stage content:



(lib.princessscooterride = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{preloader:0});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.level1.visible=false;
		
		//this.interlevel.visible = false;
		
		
		
		
		
		var animInterLevels;
		createjs.Touch.enable(stage);
		this.goAnim = function(){
			this.animinterlevel.gotoAndPlay(1);
		}
		this.goNextScene = function(){
			switch(this.animInterLevels){
				case "cover":
				exportRoot.level1.visible = true;
				exportRoot.level1.nextlevel1.visible = false;
				exportRoot.level1.moregames1.visible = false;
				exportRoot.level1.casca1_but.visible = false;
				exportRoot.level1.scuteranna_but.visible = false;
				exportRoot.level1.ochelari1_but.visible = false;
				exportRoot.level1.haine1_but.visible = false;
				exportRoot.level1.moregames3.visible = false;
				exportRoot.level1.poza1.visible = false;
				exportRoot.level1.poza2.visible = false;
				exportRoot.level1.replay_but.visible = false;
				exportRoot.cover.visible = false;
				exportRoot.interlevel.nextinter.visible = true;
				exportRoot.interlevel.nextinter2.visible = false;
				exportRoot.interlevel.nextinter1.visible = false;
					
				
				break;
				case "level1":
					
					this.level1.visible = true;
				exportRoot.level1.casca_but.visible = false;
				exportRoot.level1.scuter_but.visible = false;
				exportRoot.level1.funda_but.visible = false;
				exportRoot.level1.ochelari_but.visible = false;
				exportRoot.level1.haine_but.visible = false;
				exportRoot.level1.nextlevel.visible = false;
				exportRoot.level1.moregames.visible = false;
				exportRoot.level1.moregames3.visible = false;
				exportRoot.level1.poza1.visible = false;
				exportRoot.level1.poza2.visible = false;
				exportRoot.level1.replay_but.visible = false;
				exportRoot.level1.moregames1.visible = true;
				exportRoot.level1.nextlevel1.visible = true;
				exportRoot.level1.casca1_but.visible = true;
				exportRoot.level1.scuteranna_but.visible = true;
				exportRoot.level1.ochelari1_but.visible = true;
				exportRoot.level1.haine1_but.visible = true;
				exportRoot.interlevel.nextinter.visible = false;
				exportRoot.interlevel.nextinter2.visible = false;
				exportRoot.interlevel.nextinter1.visible = true;
					this.interlevel.visible = false;
					this.cover.visible = false;
					//exportRoot.showAds();
				break;
				
				//	case "level3":
				//	this.level3.visible = true;
				//	this.level2.visible = false;
				//	this.level1.visible = false;
				//	this.interlevel.visible = false;
				//	this.cover.visible = false;
				//	//exportRoot.showAds();
				//break;
				
				case "interlevelscreen":
				
				exportRoot.interlevel.visible = true;
				gdApi.showBanner();
				
					break;
				case "final":
					
					this.level1.visible = true;
				exportRoot.level1.casca_but.visible = false;
				exportRoot.level1.scuter_but.visible = false;
				exportRoot.level1.funda_but.visible = false;
				exportRoot.level1.ochelari_but.visible = false;
				exportRoot.level1.haine_but.visible = false;
				exportRoot.level1.nextlevel.visible = false;
				exportRoot.level1.moregames.visible = false;
				exportRoot.level1.moregames1.visible = false;
				exportRoot.level1.nextlevel1.visible = false;
				exportRoot.level1.casca1_but.visible = false;
				exportRoot.level1.scuteranna_but.visible = false;
				exportRoot.level1.ochelari1_but.visible = false;
				exportRoot.level1.haine1_but.visible = false;
				exportRoot.level1.moregames3.visible = true;
				exportRoot.level1.poza1.visible = true;
				exportRoot.level1.poza2.visible = true;
				exportRoot.level1.replay_but.visible = true;
				exportRoot.interlevel.nextinter.visible = false;
				exportRoot.interlevel.nextinter1.visible = false;
				exportRoot.interlevel.nextinter2.visible = true;
					this.interlevel.visible = false;
					this.cover.visible = false;
				
				
				break;
				case "replay":
					this.cover.visible = true;
					//this.finalscene.visible = false;
					//this.level2.visible = false;
				exportRoot.level1.casca_but.visible = true;
				exportRoot.level1.scuter_but.visible = true;
				exportRoot.level1.funda_but.visible = true;
				exportRoot.level1.ochelari_but.visible = true;
				exportRoot.level1.haine_but.visible = true;
				exportRoot.level1.nextlevel.visible = true;
				exportRoot.level1.moregames.visible = true;
					this.level1.visible = false;
					this.interlevel.visible = false;
					
				
				
				break;
			}
		}
		
		this.fadeInElement = function(arg){
			arg.alpha = 0;
				createjs.Tween.get(arg, { loop: false })
		  .to({ alpha: 1 }, 500, createjs.Ease.getPowInOut(2));
		}
		this.fadeOutElement = function(arg){
			arg.alpha = 1;
				createjs.Tween.get(arg, { loop: false })
		  .to({ alpha: 0 }, 500, createjs.Ease.getPowInOut(2));
		}
		this.nextFrame = function(arg , arg2){
			var nextFrameVar = arg.currentFrame + 1;
			if(arg2 == "play"){
				arg.gotoAndPlay(nextFrameVar);
			}else if(arg2 == "stop"){
				arg.gotoAndStop(nextFrameVar);
			}
		}
		this.showAds = function(){
			if(typeof google === "undefined"){
				}else{
					exportRoot.stopSnd();
					exportRoot.removeSnd();
					document.getElementById("gameMovie").style.pointerEvents="auto";
					window[preroll.config.loaderObjectName].refetchAd();
				}
		}
		// -- << more games
		
		
		
		/*function poza1function(event) {
			exportRoot.poza1link();
		}*/
		
		createjs.Touch.enable(stage);
		
		var ua = navigator.userAgent.toLowerCase();
		var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
		if(isAndroid) {
			// Do something!
			// Redirect to Android-site?
			exportRoot.cover.googleplay.visible=true;
		}
			
		this.googleplayfunction = function () {
			window.open("market://search?q=pub:3GG Studio", "_blank");
		}
		
		
		this.moregamesfunction = function () {
			exportRoot.stopSnd();
			var gamename = 'princess-scooter-ride';
			var mainwebsite = 'https://www.azgametv.com/';
			var stringHost = detect_parent();
		
			if (stringHost == "rosy") {
				stringHost = window.location.hostname;
			}
			var urlsite = mainwebsite + "?utm_source=" + stringHost + "&utm_medium=html5game&utm_content=moregames&utm_campaign=" + gamename;
			realClick(urlsite);
		}
		this.logofunction = function () {
			exportRoot.stopSnd();
			var gamename = 'princess-scooter-ride';
			var mainwebsite = 'https://www.azgametv.com/';
			var stringHost = detect_parent();
		
			if (stringHost == "rosy") {
				stringHost = window.location.hostname;
			}
			var urlsite = mainwebsite + "?utm_source=" + stringHost + "&utm_medium=html5game&utm_content=logo&utm_campaign=" + gamename;
			realClick(urlsite);
		}
		
		
		this.poza1link = function () {
			exportRoot.stopSnd();
			var gamename = 'princess-scooter-ride';
			var mainwebsite = 'https://www.azgametv.com/';
			var stringHost = detect_parent();
		
			if (stringHost == "rosy") {
				stringHost = window.location.hostname;
			}
			var urlsite = mainwebsite + "?utm_source=" + stringHost + "&utm_medium=html5game&utm_content=Elsa_And_Rapunzel_Selfie_Time&utm_campaign=" + gamename;
			realClick(urlsite);
		}
		this.poza2link = function () {
			exportRoot.stopSnd();
			var gamename = 'princess-scooter-ride';
			var mainwebsite = 'https://www.azgametv.com/';
			var stringHost = detect_parent();
		
			if (stringHost == "rosy") {
				stringHost = window.location.hostname;
			}
			var urlsite = mainwebsite + "?utm_source=" + stringHost + "&utm_medium=html5game&utm_content=BFF_Selfie_Time&utm_campaign=" + gamename;
			realClick(urlsite);
		}
		
		
		
		
		
		
		
		
		/*this.addthegame = function () {
			window.open("https://www.azgametv.com/", "_blank");
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
		exportRoot.cover.fullscreenBtn.addEventListener("mousedown", toggleFullScreen);
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
			var randNumber = rand(0,2);
		
			if (soundOn == 1 && randNumber == 1) {
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

	// preloader
	this.preloader = new lib.Symbol18_1();
	this.preloader.parent = this;
	this.preloader.setTransform(866.7,39.6,1,1,0,0,0,16.5,16.5);

	this.timeline.addTween(cjs.Tween.get(this.preloader).wait(1));

	// animatie
	this.animinterlevel = new lib.animinter();
	this.animinterlevel.parent = this;
	this.animinterlevel.setTransform(392.1,282.7);

	this.timeline.addTween(cjs.Tween.get(this.animinterlevel).wait(1));

	// interlevel
	this.interlevel = new lib.Symbol18();
	this.interlevel.parent = this;
	this.interlevel.setTransform(44,36.1,1,1,0,0,0,44,36.1);
	this.interlevel.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.interlevel).wait(1));

	// butoane
	this.sndBtn = new lib.Symbol3();
	this.sndBtn.parent = this;
	this.sndBtn.setTransform(766.7,34.1,0.405,0.405,0,0,0,84,84);

	this.timeline.addTween(cjs.Tween.get(this.sndBtn).wait(1));

	// level1
	this.level1 = new lib.Symbol6();
	this.level1.parent = this;
	this.level1.setTransform(-288.9,156.1,1,1,0,0,0,13,15);

	this.timeline.addTween(cjs.Tween.get(this.level1).wait(1));

	// cover
	this.cover = new lib.Symbol1();
	this.cover.parent = this;
	this.cover.setTransform(343.2,348.3,1,1,0,0,0,264.2,232.3);

	this.timeline.addTween(cjs.Tween.get(this.cover).wait(1));

	// fundal
	this.instance = new lib.Decor();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.625,0.625);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.2,112.6,2410.1,1805.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;