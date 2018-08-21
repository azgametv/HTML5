(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 800,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/princess_closet_atlas_.png", id:"princess_closet_atlas_"},
		{src:"sounds/annaSound.mp3", id:"annaSound"},
		{src:"sounds/bgmusic.mp3", id:"bgmusic"},
		{src:"sounds/pigeonsound.mp3", id:"pigeonsound"},
		{src:"sounds/crayonSound.mp3", id:"crayonSound"},
		{src:"sounds/sparkles.mp3", id:"sparkles"}
	]
};



lib.ssMetadata = [
		{name:"princess_closet_atlas_", frames: [[1886,561,764,780],[2650,2047,190,190],[179,2046,190,190],[3965,877,115,267],[2459,1738,189,312],[250,1720,230,324],[482,1720,209,297],[3398,1177,151,276],[2035,1738,209,297],[3965,554,125,321],[4032,0,58,124],[2444,1343,108,98],[0,2155,163,127],[2320,1343,122,109],[1215,1464,88,132],[3662,1358,85,95],[925,2221,95,120],[2420,2052,151,226],[3965,1146,121,171],[3620,561,343,795],[572,640,737,339],[1619,640,248,669],[1428,2141,173,136],[250,1464,553,254],[2064,1343,254,97],[3772,0,258,552],[4032,474,60,67],[4032,126,62,69],[4032,336,61,67],[2246,1738,211,281],[250,1269,268,162],[1318,1343,744,278],[2064,1458,744,278],[4032,268,64,66],[1111,1751,95,120],[3551,1358,109,85],[828,2221,95,120],[2573,2052,74,111],[1915,2229,89,100],[1796,2135,117,255],[2810,1458,1033,200],[3021,2194,111,158],[2652,1177,744,279],[572,1183,744,279],[3551,1230,53,53],[2842,2047,177,203],[2162,2037,72,121],[805,1464,408,285],[1215,1623,408,285],[1625,1623,408,285],[3134,2194,110,157],[2652,561,966,614],[3551,1177,57,51],[0,0,1884,638],[1311,640,252,325],[1886,0,1884,559],[0,640,570,627],[3551,1285,66,31],[3551,1318,66,31],[0,1269,248,657],[3356,1660,224,349],[2810,1660,273,385],[1111,1910,139,336],[3085,1660,269,342],[3582,1660,224,349],[693,1751,178,331],[3845,1358,202,396],[1318,1183,248,144],[1565,734,51,13],[1800,1311,70,17],[1720,1311,78,16],[2650,1738,158,305],[1568,1311,77,28],[2554,1343,92,105],[1647,1311,71,29],[1252,2150,145,162],[1565,749,33,15],[3808,1986,165,241],[3975,1986,117,255],[0,1928,177,225],[3085,2004,209,188],[1609,2137,185,168],[371,2046,101,212],[1428,1910,179,229],[572,981,1045,200],[873,1751,236,236],[1970,2037,190,190],[3808,1756,228,228],[2006,2229,73,79],[1252,1910,174,238],[482,2019,171,219],[3749,1358,75,78],[3469,2011,167,225],[1609,1910,178,225],[2573,2165,73,80],[4032,197,62,69],[873,1989,171,230],[2246,2021,172,213],[4032,405,61,67],[2162,2160,75,78],[1789,1910,179,223],[3638,2011,167,220],[1022,2221,73,79],[3296,2011,171,223],[655,2084,171,191],[1565,640,50,39],[1565,681,30,51]]}
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



(lib._1 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._200jpgcopy3 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._200jpgcopy4 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.anadress1 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.anadress2 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.anadress3 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.anadress4 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.anadress5 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.anadress6 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.anadress7 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.bag1 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.bag2 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.bag2copy = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.bag3 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.bag4 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.bag5 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.bag5_1 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.bag6 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1copy = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap10 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap11 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap12 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap12_1 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap13 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap14 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap15 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap18 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap19 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2copy2 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2copy3 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2copy4 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap20 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap21 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap22 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap23 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap24 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap25 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap26 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap29 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3copy2 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3copy3 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap30 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5copy = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5copy2 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap55 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap88 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap99 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.Bitmapchenar = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.blink = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.blink22 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.body = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.elsadress1 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.elsadress2 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.elsadress3 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.elsadress4 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.elsadress5 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.elsadress6 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.elsadress7 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.hand = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.Layer11copy = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.Layer12copy = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.Layer13copy = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.Layer23copy = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.Layer24 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.Layer4 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.Layer42 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.Layer48copy = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.Layer5 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.Layer59copy = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.Layer6 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.Layer60copy = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.Layer65 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.Layer66 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.Layer67 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.Layer68 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.logodora = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.playpreloader = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.poza3 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.preloadermore = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.shoe1 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.shoe1copy = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.shoe1copy_1 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.shoe2 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.shoe2copy = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.shoe2copy_1 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.shoe3 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.shoe3_1 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.shoe3copy = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.shoe3copy_1 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.shoe4 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.shoe4_1 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.shoe4copy = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.shoe4copy_1 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.shoe5 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.shoe5copy = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.shoe5copy_1 = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.suvita1pngcopy = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.suvitapngcopy = function() {
	this.spriteSheet = ss["princess_closet_atlas_"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.Tween38copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApqOEQkYgBAAkYIAAzVQAAkYEYAAITVAAQEZAAAAEYIAATVQAAEYkZABg");
	mask.setTransform(-5.9,-3.2);

	// Layer 1
	this.instance = new lib._200jpgcopy4();
	this.instance.parent = this;
	this.instance.setTransform(-94.7,-93.4,0.95,0.95);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94.7,-93.2,178.8,180);
p.frameBounds = [rect];


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
p.nominalBounds = rect = new cjs.Rectangle(-100,-99,190,189);
p.frameBounds = [rect];


(lib.Tween20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.preloadermore();
	this.instance.parent = this;
	this.instance.setTransform(-32,-32,0.281,0.281);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32,-32,64,64);
p.frameBounds = [rect];


(lib.Tween18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.playpreloader();
	this.instance.parent = this;
	this.instance.setTransform(-32,-32,0.271,0.271);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32,-32,64,64);
p.frameBounds = [rect];


(lib.Tween14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap23();
	this.instance.parent = this;
	this.instance.setTransform(-47.5,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.5,-60,95,120);
p.frameBounds = [rect];


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap23();
	this.instance.parent = this;
	this.instance.setTransform(-47.5,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.5,-60,95,120);
p.frameBounds = [rect];


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap22();
	this.instance.parent = this;
	this.instance.setTransform(-54.5,-42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54.5,-42.5,109,85);
p.frameBounds = [rect];


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap22();
	this.instance.parent = this;
	this.instance.setTransform(-54.5,-42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54.5,-42.5,109,85);
p.frameBounds = [rect];


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap21();
	this.instance.parent = this;
	this.instance.setTransform(-47.5,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.5,-60,95,120);
p.frameBounds = [rect];


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap21();
	this.instance.parent = this;
	this.instance.setTransform(-47.5,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.5,-60,95,120);
p.frameBounds = [rect];


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap13();
	this.instance.parent = this;
	this.instance.setTransform(-127.6,-196.8);

	this.instance_1 = new lib.Bitmapchenar();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-184,-221.9,0.646,0.646);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-184,-221.9,368,404.8);
p.frameBounds = [rect];


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;

	this.instance_1 = new lib.blink22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(31.4,58.6,0.818,0.818);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},38).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,177,203);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap1copy();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.504,0.504);

	this.instance_1 = new lib.blink();
	this.instance_1.parent = this;
	this.instance_1.setTransform(52.7,36.2,0.5,0.498);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},39).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,172.9,400.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.poza3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,190,190);
p.frameBounds = [rect];


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer24();
	this.instance.parent = this;
	this.instance.setTransform(353,60);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(42).to({_off:false},0).to({_off:true},4).wait(15).to({_off:false},0).to({_off:true},4).wait(18));

	// Layer 6
	this.instance_1 = new lib.Bitmap26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(340,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(83));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(340,0,117,255);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap25();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,89,100);
p.frameBounds = [rect];


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap24();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,74,111);
p.frameBounds = [rect];


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap20();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,64,66);
p.frameBounds = [rect];


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap19();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,61,67);
p.frameBounds = [rect];


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap18();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,62,69);
p.frameBounds = [rect];


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AknASIAvjZIIgC1IgvDZg");
	this.shape.setTransform(29.6,20);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,59.3,40);
p.frameBounds = [rect];


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap2copy2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,268,162);
p.frameBounds = [rect];


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.anadress7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,125,321);
p.frameBounds = [rect];


(lib.Symbol1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(254,250,252,0.298)","rgba(254,250,252,0)"],[0,1],-0.3,-26.7,-0.3,9.2).s().p("AkaDCQgRgMgNgMQhXhJAAhhQAAhwB1hRQB2hRCkAAQClAAB1BRQA6AoAdAuQAfAyAAA5QAABxh2BRQh1BRilAAQikAAh2hRg");
	this.shape.setTransform(2.4,-52.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(254,250,252,0.247)","rgba(255,251,253,0.02)"],[0,1],1,-25.6,1,5.2).s().p("AgBGFQiggBhyhxQhxhyAAihQAAigBxhzQBvhuCbgDIAJAAQAYAAAZADQCCAOBgBgQBTBTAXBtQAJApgBAqQABChhzByIAAABIgPANQhtBkiXAAIgBAAg");
	this.shape_1.setTransform(-50.7,-7.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(254,250,252,0.247)","rgba(255,251,253,0.02)"],[0,1],43.6,-5.2,-15,10.5).s().p("AgKItQiIAAhwg4IAAgBQBzhyAAihQAAgsgJgpQgXhthThRQhghgiCgOQgYgDgZAAIgLAAQAHgYAJgVQAphmBThTQCjijDnAAQDkAACjCjQCZCZAKDVIAAADIABAYQAADTiJCbIgbAbQgmAmgqAeIggAUQgpAZgtARQhXAghgACIgKAAg");
	this.shape_2.setTransform(2.7,-29.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(254,250,252,0.247)","rgba(255,251,253,0.02)"],[0,1],15.7,-27.5,-15.5,26.8).s().p("AhMFIQhlgRhMhMQgcgbgTgfIgMgUQApgeAngmIAagbQCJiZAAjTIAAgaQAVgDAXAAIAHAAQCIAABiBhQBhBhAACJQAACJhhBiQhiBiiIAAQgeAAgcgFg");
	this.shape_3.setTransform(64.3,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#00FFFF","#0099FF"],[0,1],0.9,-0.1,0,0.9,-0.1,2.5).s().p("AgHAIIAAAAQgEgEABgEQgBgDAEgEIAAgBQAEgCADAAQAEAAADACQAEAEAAAEQAAAEgDADIgBABQgDADgEAAQgEAAgDgDg");
	this.shape_4.setTransform(-93.5,83.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#00FFFF","#0099FF"],[0,1],2.8,-0.5,0,2.8,-0.5,7.7).s().p("AggAhQgNgOAAgTQAAgSANgOIAAABQAOgOASAAQATAAAOAOIAAgBQANAOAAASQAAATgNAOQgOANgTAAQgSAAgOgNg");
	this.shape_5.setTransform(-77.6,77.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#00FFFF","#0099FF"],[0,1],4.3,-6.2,0,4.3,-6.2,21.8).s().p("AhYBYQglgkAAg0QAAgzAlglIAAAAQAlgkAzAAQA0AAAlAkQAlAlgBAzQABA0glAkQglAlg0AAQgzAAglglg");
	this.shape_6.setTransform(-54,62.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#00FFFF","#0099FF"],[0,1],6.1,2.8,0,6.1,2.8,95.2).s().p("Am3JYQhBhAgZhTQgBgEgDgCQgCgCgDAAQicgBhvhuQhuhvAAidQAAicBuhwQBshrCXgDQADAAAEgCQACgCABgDQAGgXAKgWQAnhjBRhRQAogoAtgeQCEhbCqAAQCpAACFBbQArAeAoAoQCWCWAKDQIAAADQAAADABADQACACADABQACACADgBQAVgDAWAAIAIAAQCGAABeBeQBfBdAACGQAACGhfBeQheBfiGAAQgegBgcgEIgEABQgDABgCACIgCAFQgKBXhBBBQhNBOhtAAQhsAAhNhOIgLgLQgDgEgEAAQgEAAgDAEQhkBdiMAAQiUgBhphpg");
	this.shape_7.setTransform(3,-13.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Au7NXIgBAAQgJgJAAgNQAAgNAJgKIABAAQAJgJANAAQANAAAJAJQAKAKAAANQAAANgKAIIAAABIgBAAQgIAKgNAAQgNAAgJgKgAutM4IgBAAQgDAEAAAFQAAAEADAEIABAAQADAEAFAAQAEAAADgEIABgBQAEgDAAgEQAAgFgEgEQgDgDgFAAQgFAAgDADgAs2M4IAAAAQgTgUAAgbQAAgcATgTQAUgUAcAAQAbAAAUAUQATATAAAcQAAAbgTAUIAAAAQgUATgbAAQgcAAgUgTgAs1MJQAAATANAOQAOANAUAAQATAAAOgNQANgOAAgTQAAgUgNgNIAAAAQgOgOgTAAQgUAAgOAOIAAAAQgNANAAAUgAqCLZQgqgqAAg8QAAg9AqgrQArgqA9AAQA9AAAqAqQArArAAA9QAAA8grAqIAAABQgqAqg9AAQg9AAgrgrgAqYJzQAAA0AkAkQAlAlA1AAQA0AAAlglQAlgkAAg0QAAg1glglQgkgkg1AAQg1AAglAkIAAAAQgkAlAAA1gAmnHbQhChCgbhTQifgDhyhyQh1h1AAikQAAilB1h2QBvhuCagGQAGgUAJgUIAAABQAphnBUhVQApgpAugfQCKheCuAAQCwAACKBeIABAAQAtAfApApQCZCZAMDUQARgCASgBIAHAAQCOAABlBlQBkBkAACMQAACOhkBlQhlBkiOAAQgaAAgXgDQgOBYhDBCQhSBTh1AAQh0AAhThTIgFgFQhnBciPAAQicAAhvhvgAkerxQgsAdgoAoQhRBSgoBjQgJAWgGAXQgBADgDACQgDACgDAAQiXADhsBrQhvBwAACdQAACcBvBvQBvBuCbABQAEAAACACQADACABAEQAZBSBBBBQBpBpCUAAQCMAABkhdQADgDAEAAQAEAAADAEIALALQBNBNBsAAQBtAABMhNQBChBAKhXIACgFQABgCADgBIAFgBQAcAEAdAAQCGAABfheQBehfAAiGQAAiEheheQhfhfiGAAIgHAAQgWABgVADQgDAAgCgBQgDgBgCgDQgBgCAAgDIAAgDQgKjQiWiXQgogogsgdQiFhbiqAAQioAAiFBbg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.7,-86.5,193.4,173.1);
p.frameBounds = [rect];


(lib.xxq1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bag5_1();
	this.instance.parent = this;
	this.instance.setTransform(-47.5,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.5,-60,95,120);
p.frameBounds = [rect];


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF9900","#FF6600"],[0,1],0.1,-29.2,0.1,29.3).s().p("ABpEiIlOhiQgggJgRgYQgSgYAHgYIBtlrQAGgYAdgKIACgBIAPgDQAUgDAWAGIE8BfQAgAJARAYQASAYgHAYIg/DSIgBAAIgtCSIgBACQgPAtgoAAQgJAAgLgCgAh8jKQgEAJADAKQAEAKAJAFQAKAFAKgDQAJgEAFgJQAGgJgEgLQgDgKgKgEIgCgBIgRgBQgKADgGAKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-29.2,-29.2,58.5,58.6);
p.frameBounds = [rect];


(lib.star_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRAfIg7ATIAkgyIglgyIA8AUIAkg1IAABCIA7ASIg7ASIAABBg");
	this.shape.setTransform(0.8,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-7,-8.4,15.7,16.9);
p.frameBounds = [rect];


(lib.playbbutcopy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(-40,-62.8,0.622,0.622);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-62.8,75.3,106.4);
p.frameBounds = [rect];


(lib.playbbutcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;
	this.instance.setTransform(-56.4,-99.8,0.579,0.579);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.4,-99.8,122.1,162.6);
p.frameBounds = [rect];


(lib.fff2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkLDSQhuhXAAh7QAAh6BuhXQBwhXCbAAQCcAABwBXQBvBXAAB6QAAB7hvBXQhwBXicAAQibAAhwhXg");
	mask.setTransform(-1.5,-86.1);

	// Layer 1
	this.instance = new lib.Layer67();
	this.instance.parent = this;
	this.instance.setTransform(-50.5,-106);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39.4,-106,75.8,49.7);
p.frameBounds = [rect];


(lib.fff2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Am/HdQi6jFAAkYQAAkWC6jGQC6jGEFAAQEGAAC5DGQC7DGAAEWQAAEYi7DFQi5DGkGAAQkFAAi6jGg");
	mask.setTransform(1.8,48.2);

	// Layer 1
	this.instance = new lib.Layer67();
	this.instance.parent = this;
	this.instance.setTransform(-50.5,-106);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.5,-19.4,101,125.4);
p.frameBounds = [rect];


(lib.dree2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap9();
	this.instance.parent = this;
	this.instance.setTransform(-126,-158.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-126,-158.5,252,325);
p.frameBounds = [rect];


(lib.dff = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AjtDNIAAmZIHbAAIAAGZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23.8,-20.5,47.7,41.2);
p.frameBounds = [rect];


(lib.ddw7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.anadress1();
	this.instance.parent = this;
	this.instance.setTransform(-57.5,-133.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.5,-133.5,115,267);
p.frameBounds = [rect];


(lib.ddw6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.anadress2();
	this.instance.parent = this;
	this.instance.setTransform(-94.5,-156);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94.5,-156,189,312);
p.frameBounds = [rect];


(lib.ddw4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.anadress4();
	this.instance.parent = this;
	this.instance.setTransform(-104.5,-148.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104.5,-148.5,209,297);
p.frameBounds = [rect];


(lib.ddw2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.anadress6();
	this.instance.parent = this;
	this.instance.setTransform(-104.5,-148.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104.5,-148.5,209,297);
p.frameBounds = [rect];


(lib.ddw1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.anadress7();
	this.instance.parent = this;
	this.instance.setTransform(-62.5,-160.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62.5,-160.5,125,321);
p.frameBounds = [rect];


(lib.dde5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.anadress3();
	this.instance.parent = this;
	this.instance.setTransform(-115,-162);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-162,230,324);
p.frameBounds = [rect];


(lib.bb5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.instance = new lib.Bitmap15();
	this.instance.parent = this;
	this.instance.setTransform(-29.9,-33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-29.9,-33.5,60,67);
p.frameBounds = [rect, null];


(lib.shape518 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap2copy3();
	this.instance.parent = this;
	this.instance.setTransform(-1.8,-3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1.8,-3.1,744,278);
p.frameBounds = [rect];


(lib.shape516 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap3copy2();
	this.instance.parent = this;
	this.instance.setTransform(-1.7,274.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1.7,274.8,744,279);
p.frameBounds = [rect];


(lib.hand_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hand();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,248,144);
p.frameBounds = [rect];


(lib.shoe5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shoe5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,73,79);
p.frameBounds = [rect];


(lib.shoe4copy_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shoe4_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,75,78);
p.frameBounds = [rect];


(lib.shoe3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shoe3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,73,80);
p.frameBounds = [rect];


(lib.shoe2copy_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shoe2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,75,78);
p.frameBounds = [rect];


(lib.shoe1copy_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shoe1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,73,79);
p.frameBounds = [rect];


(lib.Layer24_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer24();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(42).to({_off:false},0).to({_off:true},4).wait(15).to({_off:false},0).to({_off:true},4).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0,0,77,28), rect, rect, rect, rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0,0,77,28), rect, rect, rect, rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.Layer13copy_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer13copy();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,78,16);
p.frameBounds = [rect];


(lib.Layer12copy_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer12copy();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,70,17);
p.frameBounds = [rect];


(lib.Layer11copy_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer11copy();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,51,13);
p.frameBounds = [rect];


(lib.Layer6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,117,255);
p.frameBounds = [rect];


(lib.Layer5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,33,15);
p.frameBounds = [rect];


(lib.Layer4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,92,105);
p.frameBounds = [rect];


(lib.elsadress7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.elsadress7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,202,396);
p.frameBounds = [rect];


(lib.elsadress6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.elsadress6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,178,331);
p.frameBounds = [rect];


(lib.elsadress5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.elsadress5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,224,349);
p.frameBounds = [rect];


(lib.elsadress4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.elsadress4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,269,342);
p.frameBounds = [rect];


(lib.elsadress3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.elsadress3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,139,336);
p.frameBounds = [rect];


(lib.elsadress2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.elsadress2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,273,385);
p.frameBounds = [rect];


(lib.elsadress1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.elsadress1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,224,349);
p.frameBounds = [rect];


(lib.bag5_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bag5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,85,95);
p.frameBounds = [rect];


(lib.bag4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bag4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,88,132);
p.frameBounds = [rect];


(lib.bag3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bag3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,122,109);
p.frameBounds = [rect];


(lib.bag2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bag2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,108,98);
p.frameBounds = [rect];


(lib.bag1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bag1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,58,124);
p.frameBounds = [rect];


(lib.body_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.body();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,248,657);
p.frameBounds = [rect];


(lib.Tween5copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._1();
	this.instance.parent = this;
	this.instance.setTransform(-598.1,-312.4,1.045,1.045);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-598.1,-312.4,798.2,814.8);
p.frameBounds = [rect];


(lib.Symbol20copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logodora();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.954,0.954);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,997.3,190.9);
p.frameBounds = [rect];


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
p.nominalBounds = rect = new cjs.Rectangle(-2.7,-2.7,420.1,463);
p.frameBounds = [rect];


(lib.sprite519copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap99();
	this.instance.parent = this;
	this.instance.setTransform(-180.9,-26,0.57,0.57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.9,-26,1074.5,318.8);
p.frameBounds = [rect];


(lib.sprite517copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap88();
	this.instance.parent = this;
	this.instance.setTransform(-181,291.2,0.57,0.57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-181,291.2,1074.5,363.9);
p.frameBounds = [rect];


(lib.sprite383copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap5copy2();
	this.instance.parent = this;
	this.instance.setTransform(336.7,76.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(336.7,76.4,408,285);
p.frameBounds = [rect];


(lib.sprite383copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap5copy();
	this.instance.parent = this;
	this.instance.setTransform(336.7,76.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(336.7,76.4,408,285);
p.frameBounds = [rect];


(lib.sprite383copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap55();
	this.instance.parent = this;
	this.instance.setTransform(336.7,76.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(336.7,76.4,408,285);
p.frameBounds = [rect];


(lib.shape6147 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Eg5MAooMAAAhRPMByZAAAMAAABRPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-366.1,-260,732.2,520.1);
p.frameBounds = [rect];


(lib.shape6145 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.69)","rgba(255,255,255,0)"],[0.188,0.737],0,0,0,0,0,114.9).s().p("AslMlQlOlOAAnXQAAnXFOlPQFPlNHWAAQHXAAFOFNQFPFPAAHXQAAHXlPFOQlOFOnXABQnWgBlPlOg");
	this.shape.setTransform(53,53);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#FFFF00","rgba(255,255,255,0)"],[0,0.188,0.737],0,0,0,0,0,53.4).s().p("Al2F2QiaibgBjbQABjaCaicQCciaDagBQDbABCbCaQCcCcAADaQAADbicCbQibCcjbAAQjaAAicicg");
	this.shape_1.setTransform(53,53);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAgBcIglAXIx2JGIRDqSIAagNItpvKIO6OiIRJouIwQJqIMpODg");
	this.shape_2.setTransform(47.8,55.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZAmIAOgpI/NhqIf3gdIJI8AInGcFIc4BiI9ZAjIgRBBIpddKg");
	this.shape_3.setTransform(45,59);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155.9,-134.1,402,386.4);
p.frameBounds = [rect];


(lib.shape518_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Bitmap2copy4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.8,-3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1.8,-3.1,744,278);
p.frameBounds = [rect];


(lib.shape516_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Bitmap3copy3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.7,274.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1.7,274.8,744,279);
p.frameBounds = [rect];


(lib.Symbol1copy8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;
	this.instance.setTransform(-36.4,-51.7,0.653,0.653);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36.4,-51.7,72.5,103.2);
p.frameBounds = [rect];


(lib.Symbol1copy5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap6();
	this.instance.parent = this;
	this.instance.setTransform(-49.2,-69.9,0.892,0.892);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.2,-69.9,98.1,140);
p.frameBounds = [rect];


(lib.Layer1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Bitmap7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,966,614);
p.frameBounds = [rect];


(lib.Layer68_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer68();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,179,229);
p.frameBounds = [rect];


(lib.Layer60copy_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer60copy();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,177,225);
p.frameBounds = [rect];


(lib.Layer59copy_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer59copy();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,165,241);
p.frameBounds = [rect];


(lib.bag2copy_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bag2copy();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,163,127);
p.frameBounds = [rect];


(lib.Layer66_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer66();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,185,168);
p.frameBounds = [rect];


(lib.Layer65_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer65();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,209,188);
p.frameBounds = [rect];


(lib.Layer48copy_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer48copy();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,145,162);
p.frameBounds = [rect];


(lib.bag6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bag6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,151,226);
p.frameBounds = [rect];


(lib.hand_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Bitmap5();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,72,121);
p.frameBounds = [rect];


(lib.body_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance_1 = new lib.Bitmap14();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,258,552);
p.frameBounds = [rect];


(lib.shoe4copy_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shoe4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,61,67);
p.frameBounds = [rect];


(lib.shoe3copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shoe3_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,62,69);
p.frameBounds = [rect];


(lib.anadress5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.anadress5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,151,276);
p.frameBounds = [rect];


(lib.shoe5copy_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shoe5copy_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,171,191);
p.frameBounds = [rect];


(lib.shoe5copy_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shoe5copy();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,171,223);
p.frameBounds = [rect];


(lib.shoe4copy_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.shoe4copy_1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,167,220);
p.frameBounds = [rect];


(lib.shoe4copy_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.shoe4copy();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,179,223);
p.frameBounds = [rect];


(lib.shoe3copy_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shoe3copy_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,172,213);
p.frameBounds = [rect];


(lib.shoe3copy_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shoe3copy();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,171,230);
p.frameBounds = [rect];


(lib.shoe2copy_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shoe2copy_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,178,225);
p.frameBounds = [rect];


(lib.shoe2copy_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.shoe2copy();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,167,225);
p.frameBounds = [rect];


(lib.shoe1copy_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shoe1copy_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,171,219);
p.frameBounds = [rect];


(lib.shoe1copy_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.shoe1copy();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,174,238);
p.frameBounds = [rect];


(lib.Layer42_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer42();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,71,29);
p.frameBounds = [rect];


(lib.Layer23copy_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer23copy();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,158,305);
p.frameBounds = [rect];


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
	this.instance.setTransform(0,0,1,1,0,0,0,95,95);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,189.5);
p.frameBounds = [rect];


(lib.Symbol102copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween38copy();
	this.instance.parent = this;
	this.instance.setTransform(100,100);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1,scaleY:1.1},14).to({scaleX:1,scaleY:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(4.1,6.6,181.7,180.5);
p.frameBounds = [rect, new cjs.Rectangle(4.6,6.1,180.1,181.3), new cjs.Rectangle(3.9,5.4,181.4,182.6), new cjs.Rectangle(3.2,4.8,182.7,183.9), new cjs.Rectangle(2.5,4.1,184,185.2), new cjs.Rectangle(1.9,3.4,185.2,186.5), new cjs.Rectangle(1.2,2.8,186.5,187.7), new cjs.Rectangle(0.5,2.1,187.8,189), new cjs.Rectangle(-0.1,1.4,189,190.3), new cjs.Rectangle(-0.8,0.8,190.3,191.6), new cjs.Rectangle(-1.5,0.1,191.6,192.9), new cjs.Rectangle(-2.1,-0.6,192.8,194.2), new cjs.Rectangle(-2.8,-1.2,194.1,195.5), new cjs.Rectangle(-3.5,-1.9,195.4,196.7), new cjs.Rectangle(-5.5,-2.8,199.9,198.6), new cjs.Rectangle(-3.5,-1.9,195.5,196.8), new cjs.Rectangle(-2.9,-1.3,194.3,195.6), new cjs.Rectangle(-2.3,-0.7,193.1,194.4), new cjs.Rectangle(-1.6,-0.1,191.9,193.2), new cjs.Rectangle(-1,0.6,190.7,192), new cjs.Rectangle(-0.4,1.2,189.5,190.8), new cjs.Rectangle(0.2,1.9,188.4,189.6), new cjs.Rectangle(0.8,2.4,187.1,188.4), new cjs.Rectangle(1.5,3,186,187.2), new cjs.Rectangle(2.1,3.7,184.8,186), new cjs.Rectangle(2.7,4.3,183.6,184.8), new cjs.Rectangle(3.4,4.9,182.4,183.6), new cjs.Rectangle(4,5.5,181.2,182.4), new cjs.Rectangle(4.6,6.2,180,181.2), new cjs.Rectangle(4.1,6.6,181.7,180.5)];


(lib.Symbol102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween38();
	this.instance.parent = this;
	this.instance.setTransform(100,100);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1,scaleY:1.1},14).to({scaleX:1,scaleY:1},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,190,191);
p.frameBounds = [rect, new cjs.Rectangle(-0.7,0.3,191.4,190.4), new cjs.Rectangle(-1.4,-0.4,192.7,191.7), new cjs.Rectangle(-2.1,-1.1,194,193), new cjs.Rectangle(-2.8,-1.8,195.4,194.5), new cjs.Rectangle(-3.5,-2.5,196.8,195.8), new cjs.Rectangle(-4.2,-3.2,198.1,197.2), new cjs.Rectangle(-5,-3.9,199.5,198.5), new cjs.Rectangle(-5.7,-4.6,200.9,199.8), new cjs.Rectangle(-6.4,-5.3,202.2,201.2), new cjs.Rectangle(-7.1,-6,203.5,202.5), new cjs.Rectangle(-7.8,-6.8,204.9,203.9), new cjs.Rectangle(-8.5,-7.5,206.3,205.3), new cjs.Rectangle(-9.2,-8.2,207.6,206.6), new cjs.Rectangle(-10,-10,209,210.1), new cjs.Rectangle(-9.2,-8.2,207.6,206.6), new cjs.Rectangle(-8.5,-7.5,206.3,205.3), new cjs.Rectangle(-7.8,-6.8,204.9,203.9), new cjs.Rectangle(-7.1,-6,203.5,202.5), new cjs.Rectangle(-6.4,-5.3,202.2,201.2), new cjs.Rectangle(-5.6,-4.6,200.9,199.8), new cjs.Rectangle(-4.9,-3.9,199.5,198.5), new cjs.Rectangle(-4.2,-3.2,198.1,197.1), new cjs.Rectangle(-3.5,-2.5,196.8,195.8), new cjs.Rectangle(-2.8,-1.8,195.4,194.4), new cjs.Rectangle(-2,-1,194.1,193.1), new cjs.Rectangle(-1.3,-0.3,192.7,191.7), new cjs.Rectangle(-0.6,0.4,191.4,190.4), new cjs.Rectangle(0,0,190,191)];


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween17("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(95,95);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.11,scaleY:1.11},11).to({scaleX:1,scaleY:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,190,189.5);
p.frameBounds = [rect, new cjs.Rectangle(-0.9,-0.9,191.8,191.3), new cjs.Rectangle(-1.8,-1.8,193.6,193.1), new cjs.Rectangle(-2.7,-2.7,195.4,194.9), new cjs.Rectangle(-3.6,-3.6,197.2,196.7), new cjs.Rectangle(-4.5,-4.5,199,198.5), new cjs.Rectangle(-5.4,-5.4,200.9,200.4), new cjs.Rectangle(-6.3,-6.3,202.7,202.2), new cjs.Rectangle(-7.2,-7.2,204.5,204), new cjs.Rectangle(-8.1,-8.1,206.3,205.8), new cjs.Rectangle(-9,-9,208.1,207.6), new cjs.Rectangle(-10,-10,210,209.5), new cjs.Rectangle(-8.9,-8.9,207.9,207.4), new cjs.Rectangle(-7.9,-7.9,205.9,205.4), new cjs.Rectangle(-6.9,-6.9,203.9,203.4), new cjs.Rectangle(-5.9,-5.9,201.9,201.4), new cjs.Rectangle(-4.9,-4.9,199.9,199.4), new cjs.Rectangle(-3.9,-3.9,197.9,197.5), new cjs.Rectangle(-2.9,-2.9,195.9,195.5), new cjs.Rectangle(-1.9,-1.9,193.9,193.5), new cjs.Rectangle(-0.9,-0.9,191.9,191.5), new cjs.Rectangle(0,0,190,189.5)];


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol12();
	this.instance.parent = this;
	this.instance.setTransform(-74.6,79.5,1,1,0,0,0,40.1,42.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// elsa bag
	this.instance_1 = new lib.Bitmap11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(164,116.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(164,37.4,248,748.3);
p.frameBounds = [rect];


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var frequency = 10;
		stage.enableMouseOver(frequency);
		this.moregames.cursor = "pointer";
		this.logo.cursor = "pointer";
		//this.addthegame.cursor = "pointer";
		var buttonsArray = [this.moregames,this.logo];
		var buttonsArrayString = ["moregames","logo"];
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
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.logo = new lib.Symbol4();
	this.logo.parent = this;
	this.logo.setTransform(265.6,78.2,0.755,0.755,0,0,0,134.1,81);

	this.moregames = new lib.playbbutcopy3();
	this.moregames.parent = this;
	this.moregames.setTransform(52.4,82.3,1.309,1.309);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.moregames},{t:this.logo}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,366.7,139.3);
p.frameBounds = [rect];


(lib.dreamMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap12();
	this.instance.parent = this;
	this.instance.setTransform(16.9,-153.2);

	this.instance_1 = new lib.Symbol1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(101.1,-93,1.1,1.1);
	this.instance_1.shadow = new cjs.Shadow("#0033FF",0,0,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24.3,-207.1,254,232);
p.frameBounds = [rect];


(lib.sprite519 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.shape518("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1.8,-3.1,744,278);
p.frameBounds = [rect];


(lib.StylishMommytoBe_flaTimeline_114 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_8 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(1));

	// Layer 1
	this.instance = new lib.sprite383copy();
	this.instance.parent = this;
	this.instance.setTransform(-374,-519.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-261.3},2).to({y:-292.3},2).to({y:-261.3},2).to({y:-271.3},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.3,-442.9,408,285);
p.frameBounds = [rect, new cjs.Rectangle(-37.3,-313.9,408,285), new cjs.Rectangle(-37.3,-184.9,408,285), new cjs.Rectangle(-37.3,-200.4,408,285), new cjs.Rectangle(-37.3,-215.9,408,285), new cjs.Rectangle(-37.3,-200.4,408,285), new cjs.Rectangle(-37.3,-184.9,408,285), new cjs.Rectangle(-37.3,-189.9,408,285), new cjs.Rectangle(-37.3,-194.9,408,285)];


(lib.zz2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.Tween10("synched",0);
	this.instance.parent = this;
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.Tween11("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},9).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54.5,-42.5,109,85);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.vv6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.bag1_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,29,62);
	this.instance.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-29,-62,58,124);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.vv5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.bag2_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,54,49);
	this.instance.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54,-49,108,98);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.vv3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.bag3_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,61,54.5);
	this.instance.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61,-54.5,122,109);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.vv2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.bag4_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,44,66);
	this.instance.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44,-66,88,132);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.vv1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.bag5_2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,42.5,47.5);
	this.instance.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.5,-47.5,85,95);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D635B").s().p("ABCDBIgCgCIgDgGIAAAAIAAAAIgTgmIAAAAIgQgiIgJgUIgDgGQgvhpgVhDQgHgVgDgPQgGgcAIgTQAJgRASgFQANgEARACQANACAPAIQgOgHgNgCQgQgDgNAFQgTAFgIARQgIASAGAdIAKAkQAVBFAxBtQAaA4AWAqIABACIgBgBgAAaAxIATg1QAMgkAEgbQAGgigIgYIgBgFIgBgBIAAgDQgEgMgLgKQgGgHgJgGQAKAGAHAIQALAKADAMIADAJQAHAXgFAjQgEAagNAkIgKAcIgJAZIgFAOIAEgOg");
	this.shape.setTransform(-17.6,-26.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DEDBD1").s().p("AA/DBIAAAAIgCgCQgWgqgZg4QgxhtgWhFIgKgkQgGgdAJgSQAIgRASgFQAOgFAQADQAMACAOAHIACABQAQAHAKAMQAMAMAFAOIADAJQALAkgQA7QgJAggUA1IgGASIAAACIgBAJIAAACIABABIAJAZIADAHIAMAaIAAAAIABADIASAmIAAABIAAABIABABIAAABIAAADQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAAAIgBAAIgCABIgCgBgAgji1QgOAFgGAMQgHAQAFAZIAKAjQATA+ArBiIADgKIAEgOIAJgZIALgcQAMgkAEgaQAFgjgHgXIgCgJQgEgMgLgKQgHgIgKgGIgGgDIgCgBQgNgGgKgCIgLgBQgIAAgHACg");
	this.shape_1.setTransform(-17.1,-26.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0.62)","rgba(255,255,255,0)"],[0,1],0.1,-28.5,0.1,24.2).s().p("Aj2DKQgQgVAHgVIBilHQAGgWAZgJIACAAIANgDQASgDAVAGIEbBVQAdAIAQAVIACADIn3EcIgBgBgAh7idQgLAMAAAQQAAAQALALQAMALAQAAQAQAAALgLQALgLAAgQQAAgQgLgMQgLgLgQAAQgQAAgMALg");
	this.shape_2.setTransform(-1,7.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer 3
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,13.4);
	this.instance.shadow = new cjs.Shadow("#000000",0,0,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AgHAAIAAAAAAIAAIAAAA");
	this.shape_3.setTransform(-10.6,-8.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#6633FF","#6699FF"],[0,1],0,32.3,0,-32.3).s().p("ABOE8Ik7heQgqgNgYggIgHgKQgGgMgDgMQgFgVAGgTIBslrQAGgTAPgPQAOgNARgHIAQgEIAAAAIAGgBQAJgCAJAAQAVAAAUAGIE7BeQAqANAYAfQAMAQAEATQAFAUgGAUIhsFrQgGATgPAPQgJAIgLAGIgNAGIgBAAQgTAHgUAAQgTAAgUgGgAh/jLQgEAKADAKQADAKAKAFQAJAFAKgEQAKgDAFgJQAFgKgDgKQgDgKgKgFIgCgBIgEgBIAAAAIgNABIAAgBIAAAAQgLAEgFAJg");
	this.shape_4.setTransform(-0.2,13.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4F5649").s().p("AgKAWQgKgFgDgKQgDgIAEgJQAFgKALgDIAAAAIAAAAIAAAAQgKAEgFAJQgFAJADAIIAAAAQAEAKAJAFQAJAFAIgEIAAAAQAKgDAFgJQAFgJgDgIQgEgKgJgFIgCgBIAAAAIAAAAIgEgBIAAAAIAAgBIAEACIACABQAKAEADAKQADAJgFAJQgFAJgKAEIgHABQgFAAgFgDgAAJgWg");
	this.shape_5.setTransform(-10.7,-5.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3F1F9F").s().p("ABKD3Ik8hfQgqgMgYggQgGgIgEgJIAHALQAXAgAqANIE7BeQAqAMAkgNIABAAIAOgGQALgGAIgIQAPgPAGgTIBtlrQAFgUgEgUQgFgTgMgQIAFAGQAMAQAFATQAEAUgFAUIhtFrQgGATgPAPQgOANgTAHIgIADQgQAEgQAAQgTAAgUgGg");
	this.shape_6.setTransform(0.6,20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34.8,-46.2,71,96.4);
p.frameBounds = [rect];


(lib.star_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.star_6("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-7,-8.4,15.7,16.9);
p.frameBounds = [rect];


(lib.star_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.star_5();
	this.instance.parent = this;
	this.instance.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:22.6},3).to({scaleX:1,scaleY:1,rotation:52.7},4).to({scaleX:1,scaleY:1,rotation:75.2,x:0.1},3).to({rotation:105.3,x:0},4).to({scaleX:1,scaleY:1,rotation:112.8,y:0},1).to({scaleX:1,scaleY:1,rotation:120.4,x:0.1},1).to({scaleX:1,scaleY:1,rotation:143.1,x:0},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-7,-8.4,15.7,16.9);
p.frameBounds = [rect, new cjs.Rectangle(-7.5,-7.9,16.1,16.7), new cjs.Rectangle(-7.9,-7.4,16.3,16.3), new cjs.Rectangle(-9.7,-10.4,21,21.5), new cjs.Rectangle(-8.4,-7.9,15.9,16.6), new cjs.Rectangle(-8.5,-8.3,15.8,16.7), new cjs.Rectangle(-8.4,-8.5,16.3,16.4), new cjs.Rectangle(-10.9,-10.6,22.9,22.7), new cjs.Rectangle(-7.8,-8.6,16.4,16.2), new cjs.Rectangle(-7.3,-8.4,16.1,16.5), new cjs.Rectangle(-9.8,-8.9,20.3,19.5), new cjs.Rectangle(-7.9,-7.5,16.7,16.2), new cjs.Rectangle(-8.3,-6.9,16.8,15.7), new cjs.Rectangle(-8.6,-7.4,16.7,16.1), new cjs.Rectangle(-10.4,-8.9,20.4,19.5), new cjs.Rectangle(-11,-9.7,21.5,20.9), new cjs.Rectangle(-11.4,-10.2,22.4,22), new cjs.Rectangle(-8.1,-8.5,16.6,15.8), new cjs.Rectangle(-7.6,-8.4,16.4,16.3), new cjs.Rectangle(-11.9,-10.9,22.7,22.9)];


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
p.nominalBounds = rect = new cjs.Rectangle(-17.6,-58.1,64.9,55.7);
p.frameBounds = [rect, new cjs.Rectangle(-20,-64.6,77.5,64.4), new cjs.Rectangle(-25.3,-72.7,91,85.2), new cjs.Rectangle(-32.9,-82.2,108.8,104.3), new cjs.Rectangle(-34.2,-86.3,115.6,118.4), new cjs.Rectangle(-43.2,-91.8,131.8,134), new cjs.Rectangle(-46.1,-98.2,139,146.2), new cjs.Rectangle(-50.9,-101.3,149.5,155.1), new cjs.Rectangle(-57.3,-103.1,159.1,162.8), new cjs.Rectangle(-60,-106.9,165.1,172.7), new cjs.Rectangle(-61,-108.3,168.8,177.3), new cjs.Rectangle(-67.6,-110.8,177.6,183.2), new cjs.Rectangle(-76.1,-113.9,189.6,189.2), new cjs.Rectangle(-80.1,-91.4,180.9,169.6), new cjs.Rectangle(-83.4,-94.4,186.2,175.7), new cjs.Rectangle(-86.8,-83.7,192.2,156.4), new cjs.Rectangle(-89.5,-84,198.2,160.2), new cjs.Rectangle(-92.5,-85.7,183.9,63), new cjs.Rectangle(-95.6,-88.8,190.3,66.1), null];


(lib.star_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_25 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(25).call(this.frame_25).wait(1));

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
	this.instance_2 = new lib.Bitmap8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-21.6,-32.3);

	this.instance_3 = new lib.star_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-5.3,13.2,0.7,0.7);
	this.instance_3.shadow = new cjs.Shadow("#0000FF",0,0,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[]},20).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21.6,-32.3,57,51);
p.frameBounds = [rect, new cjs.Rectangle(-29.6,-39.5,72,66), rect=new cjs.Rectangle(-29.6,-39.8,72,80), rect, rect, rect=new cjs.Rectangle(-42.2,-39.8,91,80), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-42.2,-35.8,91,50), rect, rect, rect, rect];


(lib.ss6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 3
	this.instance = new lib.shoe1copy_3();
	this.instance.parent = this;
	this.instance.setTransform(0.2,-3.2,0.254,0.254,-8.5,0,0,87.5,118.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26.2,-36.2,52.7,66.4);
p.frameBounds = [rect, null];


(lib.ss5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 3
	this.instance = new lib.shoe2copy_3();
	this.instance.parent = this;
	this.instance.setTransform(0,-2.5,0.278,0.278,0,0,0,83.9,112.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23.3,-33.7,46.4,62.5);
p.frameBounds = [rect, null];


(lib.ss3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 3
	this.instance = new lib.shoe3copy_3();
	this.instance.parent = this;
	this.instance.setTransform(0.2,-3.2,0.274,0.274,0,0,0,85.5,115);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23.2,-34.8,46.9,63.1);
p.frameBounds = [rect, null];


(lib.ss2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 3
	this.instance = new lib.shoe4copy_4();
	this.instance.parent = this;
	this.instance.setTransform(9.7,-3.7,0.287,0.287,0,0,0,83.4,110.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-14.2,-35.3,47.9,63.1);
p.frameBounds = [rect, null];


(lib.ss1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 3
	this.instance = new lib.shoe5copy_2();
	this.instance.parent = this;
	this.instance.setTransform(0.2,-4.2,0.262,0.262,0,0,0,85.5,111.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22.2,-33.5,44.8,58.5);
p.frameBounds = [rect, null];


(lib.s5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 3
	this.instance = new lib.shoe1copy_1_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.275,0.275,0,0,0,85.5,109.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23.5,-30.2,47.1,60.3);
p.frameBounds = [rect, null];


(lib.s4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 3
	this.instance = new lib.shoe2copy_1_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0.1,0.287,0.287,0,0,0,88.8,112.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.5,-32.2,51.1,64.5);
p.frameBounds = [rect, null];


(lib.s3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 3
	this.instance = new lib.shoe3copy_2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.283,0.283,0,0,0,85.9,106.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24.3,-30,48.7,60.3);
p.frameBounds = [rect, null];


(lib.s2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 3
	this.instance = new lib.shoe4copy_5();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.27,0.27,-15,0,0,89.7,111.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31.2,-35.3,62.3,70.7);
p.frameBounds = [rect, null];


(lib.s1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 4
	this.instance = new lib.shoe5copy_1_1();
	this.instance.parent = this;
	this.instance.setTransform(3.1,0,0.294,0.294,0,0,0,85.5,95.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22,-28,50.3,56.2);
p.frameBounds = [rect, null];


(lib.qq6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,32,33);
	this.instance.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32,-33,64,66);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.qq4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,30.5,33.5);
	this.instance.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30.5,-33.5,61,67);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.qq3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.shoe3copy2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,31,34.5);
	this.instance.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31,-34.5,62,69);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.qq1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,31,34.5);
	this.instance.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31,-34.5,62,69);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.err1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(-1.7,-4.1,1,1,0,0,0,44.5,50);
	this.instance.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.2,-54.1,89,100);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.ee5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.shoe1copy_2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,36.5,39.5);
	this.instance.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36.5,-39.5,73,79);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.ee4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.shoe2copy_2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,37.5,39);
	this.instance.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.5,-39,75,78);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.ee3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.shoe3_2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,36.5,40);
	this.instance.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36.5,-40,73,80);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.ee2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.shoe4copy_2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,37.5,39);
	this.instance.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.5,-39,75,78);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.ee1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.shoe5_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,36.5,39.5);
	this.instance.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36.5,-39.5,73,79);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.ddw3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.anadress5_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,75.5,138);
	this.instance.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75.5,-138,151,276);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.dd3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmXPbQgOgFgQgYIgzhMQguhAgMgqQgHgZAAg+QAAgUABgNIAJABQApicAShIQAeh7ALhjQAZhzBFiRQAzhuAAhuQAAg6hBiSQhBiSAAhBQAAg4AyhvQA8iHBEAAQARAAB3BSQB0BTAgAAQDNAABEBxQAVAjAGArIAAAkQAAA6g+BtQg/BtAABKQAABKApA1QAMAPAaAdQAXAbANAZQAYAqAQBIQARBIAhA9QAiA9A3DmQAzDTAAAjQAAA/k7BVQklBQiXAAQgzAAhaADIgYABQgbAAgKgEg");
	mask.setTransform(-0.4,2.7);

	// Layer 1
	this.instance = new lib.anadress5_1();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0,0.67,0.67,0,0,0,75.5,138);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.5,-92.4,101.2,184.9);
p.frameBounds = [rect, null];


(lib.d7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnjN5QiChRAAhtIBTjXQBXjjAUhEQAuifAZhkQAnifAAhIQAAgcgUgUQgLgNgigUQhEgpgHgyQgGgrghhlQgfhbAAgeQAAgMAXgiQAagnAkgjQBmhiBxgCQAAgVBIBMIBJBQQAKAABTgtQBWgtAkAAQBeAAAXDcQAIBGgBBcIgCBiQAAAYgFBGQgFBHAAAgQAABHA5B5QAdA8BhCtQBXCeAmBYQA5CFAABbQAACbj6BQQjcBGlsAAQiOAAh5hLgAjhu6QACALAAgOIAEgBIgEAAIAAABQgBAAAAAAQgBABAAAAQAAAAAAABQAAABAAAAg");
	mask.setTransform(0.1,0.3);

	// Layer 1
	this.instance = new lib.elsadress1_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.504,0.504,0,0,0,111.9,174.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.4,-87.9,112.9,175.9);
p.frameBounds = [rect, null];


(lib.d6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApWNKQgtg0AAhnQAAgcACgEQAEgHAagTIACgCQBmipAkiJQARhBAVjHQBCiiAUg5QBFjJAAhuQAAgMgSgwIgghTIgFAAQgSg2gSgnQgJgZAAgxQAAhNAKgQQATgeBWAAQBiAAAlBBIAWAtQAKAUAQAAQAXAABgg6QBfg4AKgQIAZAAQAxBGAOAaQAWAoAABUQAAAbgJAYIgSAtQgcBDAABuQAABZAXAgQAxBDAhBZQAMAiAgBvQAUBJApBLQAiA/AgBFQAvBoAMA7IAMBEQAHAnAGAXQAHAdAoA2QAmAzAAAGQAABAjOA5QizAxh9AAQirAAjygDQiCABgUAMQgDACgBADQhygFgzg8g");
	mask.setTransform(0.9,0);

	// Layer 1
	this.instance = new lib.elsadress2_1();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0,0.454,0.454,0,0,0,136.7,192.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.9,-87.3,123.9,174.6);
p.frameBounds = [rect, null];


(lib.d5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AA2PuQlfABiqgzQi9g5h/ijIAAhoQAKgBASgDQAagDATgFQBNgzAciGQAZjBAghVQARgsA2g9QAug0ADgeQABgKAwhqQAuhpAAgWQAAglgWg7QgNgjgjhUQhGizAAitQAAhlAFgPQARgyBOAAQAtAAAUAlQASA0AOAdQA5B2DkAAQA6AAAxhdQAbg0AJgMQAVgdAYAAQBNABADBMQADBNgKAwQgJAxASA3QggBUARAoQAKAagTAWQgTAXgdBPQgdBQAaAwICSEOQBwDRAqAzQA4BCBwCAQBwCAAABlQAABlkUBkQkTBkizAAIAAAAg");
	mask.setTransform(-0.3,-0.6);

	// Layer 1
	this.instance = new lib.elsadress4_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.56,0.56,0,0,0,134.4,171);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75.3,-95.7,150.6,191.5);
p.frameBounds = [rect, null];


(lib.d4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ADuPWQgFgbAWgrQAWgshIAxQhHAxi1gNQi2gNAqgjQAqgjgrgNQgrgMACghQABgihdkjQhdkjAAgsQAAhNA3h6QA3h9AAg7QgThOgThbQgli1AAiUQAAgPgKhMQgKhMAAgjQAAgcAegPQAVgKAaAAQA3AAAwAeQAwAeA0AAQBMAAB2gbQB4gcAzAAQAwAAgZAjQgYAiAwAeQAvAehNBwQAWARAEB1QABBAgTBPQgTBPgcA3QgdA2A8BRQBOBxAwDPQAwDSgTCJQgSCKhKDGQhCCugLAAQgBAAAAAAQgBgBAAAAQAAAAAAgBQgBgBAAAAg");
	mask.setTransform(-1.2,0.3);

	// Layer 1
	this.instance = new lib.elsadress3_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0.1,0.56,0.56,0,0,0,69.5,168);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38.9,-94,77.9,188.1);
p.frameBounds = [rect, null];


(lib.d3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqBNUQg3grAhhGQBljQBJjeQBIjYBVjRQAyh9gqh4QgkhogihoIAFgCQgdiTBXiKQAQgZAHggQAgiQBxAxQAUAKAOAXQA+BqB6hOQCihlAPCpQAHBIAeBAQA+CGguCRQhKDoCSDSQA0BIAqBTQBuDXBaDhQA4CQhEB6QgcA0g4ASQjkBNjyAMQiGAJiJANIgDgBIgBACQj+gMjFidg");
	mask.setTransform(-2.5,0.6);

	// Layer 1
	this.instance = new lib.elsadress5_1();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0,0.56,0.56,0,0,0,112.1,174.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62.7,-97.7,125.5,195.5);
p.frameBounds = [rect, null];


(lib.d2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AASPsQiIgCjAgSQi/gTgehHQgdhHAmgxIAaggQALgPAAgNIgPh9QAAhMALg2QAQhTAthtQAfhTAshPQASghAHgbQAIgjAAg8QAAhWgohRQgohQAAhqIAAitQAFhxAehMQBUjTErgEQAAABAAACQAAABAAAAQABABAAAAQAAAAABgBQAEgEAGAAIgMAAQAAgeAwAJQAwAIAlA1QAlA0AECKQA2gjgCBJQgBBIAdAsQAdAsACAxQADAxgiBIQgiBJgWBSQgXBTBNBVQBMBTBHDAQBwHrAPCXQAOCJnwAJIgsAAg");
	mask.setTransform(-0.9,-3.4);

	// Layer 1
	this.instance = new lib.elsadress6_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0.1,0.56,0.56,0,0,0,89,165.6);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.8,-92.6,99.7,185.4);
p.frameBounds = [rect, null];


(lib.d1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AjaR/QkYg+AAilQAAgvAigdQAQgOA5geQA0gbAWgaQAigoAAhBQAAgugchVIg+iqQhaj2AAiZQAAhgBIibQAohTALgcQAWg8AAgtQAAhEhSg/QgSgPgxggQgpgbgPgOQgggegZhfQgQg5gRhiICihgQB3hFAzgBQAoABAnAqQAoArATAAQBCgOBSgOQCYgZBYgCQAAAGADgCQAGgEAGAAIgPAAIAAAAQAAgJAnAEQAsAGAqATQB9A7AACIQAAALgnAvQg9BOgWAeQh7CsAACQQAAA7AgBRQASArA1BnQAxBiAVA2QAgBUAABDQAAAjgdBaQgfBmgFAcIgUBqQgPBNAAAUQAAARApAlIBYBPQCCB5AABgQAABfiQBOQiLBKicAAQjuABibgkg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:1,y:3.5}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// Layer 2
	this.instance = new lib.elsadress7_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0.1,0.56,0.56,0,0,0,101,198.1);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.5,-110.8,113.1,221.8);
p.frameBounds = [rect, null];


(lib.cc7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.elsadress1_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,112,174.5);
	this.instance.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-112,-174.5,224,349);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.cc6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.elsadress2_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,136.5,192.5);
	this.instance.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-136.5,-192.5,273,385);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.cc5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.elsadress3_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,69.5,168);
	this.instance.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.5,-168,139,336);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.cc4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.elsadress4_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,134.5,171);
	this.instance.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-134.5,-171,269,342);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.cc3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.elsadress5_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,112,174.5);
	this.instance.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-112,-174.5,224,349);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.cc2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.elsadress6_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,89,165.5);
	this.instance.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89,-165.5,178,331);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.cc1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.elsadress7_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,101,198);
	this.instance.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101,-198,202,396);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.bb4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.instance = new lib.Layer59copy_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.356,0.356,0,0,0,82.5,120.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-29.4,-42.9,58.8,85.9);
p.frameBounds = [rect, null];


(lib.bb3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.instance = new lib.Layer68_1();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0,0.324,0.324,0,0,0,89.7,114.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-29,-37.1,58,74.2);
p.frameBounds = [rect, null];


(lib.bb2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.instance = new lib.bag2copy_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.45,0.45,0,0,0,81.5,63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36.6,-28.5,73.4,57.2);
p.frameBounds = [rect, null];


(lib.bb1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.instance = new lib.Layer60copy_1();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0.1,0.308,0.308,0,0,0,88.7,112.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-27.2,-34.6,54.5,69.3);
p.frameBounds = [rect, null];


(lib.b5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();
		
		*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.instance = new lib.bag6_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0.1,0.408,0.408,0,0,0,75.5,113.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30.8,-46.1,61.7,92.3);
p.frameBounds = [rect, null];


(lib.b4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.instance = new lib.Layer65_1();
	this.instance.parent = this;
	this.instance.setTransform(-0.1,0.1,0.331,0.331,0,0,0,104.2,94);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34.5,-31,69.1,62.2);
p.frameBounds = [rect, null];


(lib.b3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.instance = new lib.Layer66_1();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0.1,0.408,0.408,0,0,0,92.6,84.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.7,-34.3,75.5,68.6);
p.frameBounds = [rect, null];


(lib.b2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.instance = new lib.Layer48copy_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.408,0.408,0,0,0,72.4,80.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-29.6,-33,59.2,66.2);
p.frameBounds = [rect, null];


(lib.aa11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.shoe4copy_3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,30.5,33.5);
	this.instance.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30.5,-33.5,61,67);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.fullscreenbut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap30();
	this.instance.parent = this;
	this.instance.setTransform(-15,-22);

	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(11.3,-8.7,1,1,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-54.6,74,97.1);
p.frameBounds = [rect];


(lib.elsashoe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{shoe11:0,shoe22:1,shoe33:2,shoe44:3,shoe55:4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// shoe1
	this.instance = new lib.ee1();
	this.instance.parent = this;
	this.instance.setTransform(37.5,39.5);

	this.instance_1 = new lib.ee2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(37.5,44);

	this.instance_2 = new lib.ee3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(38.5,40);

	this.instance_3 = new lib.ee4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(37.5,45);

	this.instance_4 = new lib.ee5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(37.5,40.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(1,0,73,79);
p.frameBounds = [rect, new cjs.Rectangle(0,5,75,78), new cjs.Rectangle(2,0,73,80), new cjs.Rectangle(0,6,75,78), new cjs.Rectangle(1,1,73,79)];


(lib.elsaface = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 24
	this.instance = new lib.Layer24_1();
	this.instance.parent = this;
	this.instance.setTransform(391.5,74,1,1,0,0,0,38.5,14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 6
	this.instance_1 = new lib.Layer6_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(398.5,127.5,1,1,0,0,0,58.5,127.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 5
	this.instance_2 = new lib.Layer5_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(390.5,110.5,1,1,0,0,0,16.5,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 12 copy
	this.instance_3 = new lib.Layer12copy_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(392,76.5,1,1,0,0,0,35,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer 11 copy
	this.instance_4 = new lib.Layer11copy_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(392.5,77.5,1,1,0,0,0,25.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Layer 13 copy
	this.instance_5 = new lib.Layer13copy_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(394,60,1,1,0,0,0,39,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Layer 4
	this.instance_6 = new lib.Layer4_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(399,74.5,1,1,0,0,0,46,52.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(340,0,117,255);
p.frameBounds = [rect];


(lib.elsadress = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{end:0,dress11:1,dress22:2,dress33:3,dress44:4,dress55:5,dress66:6,dress77:7});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8));

	// elsadress1
	this.instance = new lib.Layer23copy_1();
	this.instance.parent = this;
	this.instance.setTransform(135,164.7,1.141,1.141,0,0,0,79,152.5);

	this.instance_1 = new lib.cc1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(135,202);

	this.instance_2 = new lib.cc2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(137,165.5);

	this.instance_3 = new lib.cc3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(139,175.5);

	this.instance_4 = new lib.cc4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(140.5,175);

	this.instance_5 = new lib.cc5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(136.5,172);

	this.instance_6 = new lib.cc6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(136.5,192.5);

	this.instance_7 = new lib.cc7();
	this.instance_7.parent = this;
	this.instance_7.setTransform(139,175.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(44.8,-9.4,180.3,348.1);
p.frameBounds = [rect, new cjs.Rectangle(34,4,202,396), new cjs.Rectangle(48,0,178,331), new cjs.Rectangle(27,1,224,349), new cjs.Rectangle(6,4,269,342), new cjs.Rectangle(67,4,139,336), new cjs.Rectangle(0,0,273,385), new cjs.Rectangle(27,1,224,349)];


(lib.elsabag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"end":0,bag11:0,bag22:1,bag33:2,bag44:3,bag55:4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// bag1
	this.instance = new lib.vv1();
	this.instance.parent = this;
	this.instance.setTransform(250.5,47.5);

	this.instance_1 = new lib.vv2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(44,68);

	this.instance_2 = new lib.vv3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(243,56.5);

	this.instance_3 = new lib.vv5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(60,56);

	this.instance_4 = new lib.vv6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(245,62);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(208,0,85,95);
p.frameBounds = [rect, new cjs.Rectangle(0,2,88,132), new cjs.Rectangle(182,2,122,109), new cjs.Rectangle(6,7,108,98), new cjs.Rectangle(216,0,58,124)];


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
p.nominalBounds = rect = new cjs.Rectangle(10.9,-12.4,798.2,1612.7);
p.frameBounds = [rect, new cjs.Rectangle(10.9,-14,798.2,1612.7), new cjs.Rectangle(10.9,-15.7,798.2,1612.8), new cjs.Rectangle(10.9,-17.3,798.2,1612.8), new cjs.Rectangle(10.9,-18.9,798.2,1612.8), new cjs.Rectangle(10.9,-20.5,798.2,1612.8), new cjs.Rectangle(10.9,-22.1,798.2,1612.8), new cjs.Rectangle(10.9,-23.8,798.2,1612.8), new cjs.Rectangle(10.9,-25.4,798.2,1612.8), new cjs.Rectangle(10.9,-27,798.2,1612.8), new cjs.Rectangle(10.9,-28.6,798.2,1612.8), new cjs.Rectangle(10.9,-30.2,798.2,1612.8), new cjs.Rectangle(10.9,-31.8,798.2,1612.8), new cjs.Rectangle(10.9,-33.5,798.2,1612.9), new cjs.Rectangle(10.9,-35.1,798.2,1612.8), new cjs.Rectangle(10.9,-36.7,798.2,1612.8), new cjs.Rectangle(10.9,-38.3,798.2,1612.9), new cjs.Rectangle(10.9,-39.9,798.2,1612.9), new cjs.Rectangle(10.9,-41.5,798.2,1612.9), new cjs.Rectangle(10.9,-43.2,798.2,1612.9), new cjs.Rectangle(10.9,-44.8,798.2,1612.9), new cjs.Rectangle(10.9,-46.4,798.2,1612.9), new cjs.Rectangle(10.9,-48,798.2,1612.9), new cjs.Rectangle(10.9,-49.6,798.2,1612.9), new cjs.Rectangle(10.9,-51.2,798.2,1612.9), new cjs.Rectangle(10.9,-52.9,798.2,1613), new cjs.Rectangle(10.9,-54.5,798.2,1613), new cjs.Rectangle(10.9,-56.1,798.2,1612.9), new cjs.Rectangle(10.9,-57.7,798.2,1613), new cjs.Rectangle(10.9,-59.3,798.2,1612.9), new cjs.Rectangle(10.9,-60.9,798.2,1613), new cjs.Rectangle(10.9,-62.6,798.2,1613), new cjs.Rectangle(10.9,-64.2,798.2,1613), new cjs.Rectangle(10.9,-65.8,798.2,1613), new cjs.Rectangle(10.9,-67.4,798.2,1613), new cjs.Rectangle(10.9,-69,798.2,1613), new cjs.Rectangle(10.9,-70.6,798.2,1613), new cjs.Rectangle(10.9,-72.3,798.2,1613.1), new cjs.Rectangle(10.9,-73.9,798.2,1613.1), new cjs.Rectangle(10.9,-75.5,798.2,1613), new cjs.Rectangle(10.9,-77.1,798.2,1613.1), new cjs.Rectangle(10.9,-78.7,798.2,1613.1), new cjs.Rectangle(10.9,-80.3,798.2,1613.1), new cjs.Rectangle(10.9,-82,798.2,1613.1), new cjs.Rectangle(10.9,-83.6,798.2,1613.1), new cjs.Rectangle(10.9,-85.2,798.2,1613.1), new cjs.Rectangle(10.9,-86.8,798.2,1613.1), new cjs.Rectangle(10.9,-88.4,798.2,1613.1), new cjs.Rectangle(10.9,-90,798.2,1613.1), new cjs.Rectangle(10.9,-91.7,798.2,1613.2), new cjs.Rectangle(10.9,-93.3,798.2,1613.1), new cjs.Rectangle(10.9,-94.9,798.2,1613.2), new cjs.Rectangle(10.9,-96.5,798.2,1613.1), new cjs.Rectangle(10.9,-98.1,798.2,1613.2), new cjs.Rectangle(10.9,-99.8,798.2,1613.2), new cjs.Rectangle(10.9,-101.4,798.2,1613.2), new cjs.Rectangle(10.9,-103,798.2,1613.2), new cjs.Rectangle(10.9,-104.6,798.2,1613.1), new cjs.Rectangle(10.9,-106.2,798.2,1613.2), new cjs.Rectangle(10.9,-107.8,798.2,1613.2), new cjs.Rectangle(10.9,-109.5,798.2,1613.3), new cjs.Rectangle(10.9,-111.1,798.2,1613.3), new cjs.Rectangle(10.9,-112.7,798.2,1613.2), new cjs.Rectangle(10.9,-114.3,798.2,1613.3), new cjs.Rectangle(10.9,-115.9,798.2,1613.3), new cjs.Rectangle(10.9,-117.5,798.2,1613.3), new cjs.Rectangle(10.9,-119.2,798.2,1613.3), new cjs.Rectangle(10.9,-120.8,798.2,1613.3), new cjs.Rectangle(10.9,-122.4,798.2,1613.3), new cjs.Rectangle(10.9,-124,798.2,1613.3), new cjs.Rectangle(10.9,-125.6,798.2,1613.3), new cjs.Rectangle(10.9,-127.2,798.2,1613.3), new cjs.Rectangle(10.9,-128.9,798.2,1613.4), new cjs.Rectangle(10.9,-130.5,798.2,1613.4), new cjs.Rectangle(10.9,-132.1,798.2,1613.4), new cjs.Rectangle(10.9,-133.7,798.2,1613.4), new cjs.Rectangle(10.9,-135.3,798.2,1613.4), new cjs.Rectangle(10.9,-137,798.2,1613.4), new cjs.Rectangle(10.9,-138.6,798.2,1613.4), new cjs.Rectangle(10.9,-140.2,798.2,1613.4), new cjs.Rectangle(10.9,-141.8,798.2,1613.4), new cjs.Rectangle(10.9,-143.4,798.2,1613.4), new cjs.Rectangle(10.9,-145,798.2,1613.4), new cjs.Rectangle(10.9,-146.7,798.2,1613.5), new cjs.Rectangle(10.9,-148.3,798.2,1613.5), new cjs.Rectangle(10.9,-149.9,798.2,1613.4), new cjs.Rectangle(10.9,-151.5,798.2,1613.5), new cjs.Rectangle(10.9,-153.1,798.2,1613.5), new cjs.Rectangle(10.9,-154.7,798.2,1613.5), new cjs.Rectangle(10.9,-156.4,798.2,1613.5), new cjs.Rectangle(10.9,-158,798.2,1613.5), new cjs.Rectangle(10.9,-159.6,798.2,1613.4), new cjs.Rectangle(10.9,-161.2,798.2,1613.5), new cjs.Rectangle(10.9,-162.8,798.2,1613.5), new cjs.Rectangle(10.9,-164.4,798.2,1613.5), new cjs.Rectangle(10.9,-166.1,798.2,1613.6), new cjs.Rectangle(10.9,-167.7,798.2,1613.6), new cjs.Rectangle(10.9,-169.3,798.2,1613.5), new cjs.Rectangle(10.9,-170.9,798.2,1613.6), new cjs.Rectangle(10.9,-172.5,798.2,1613.6), new cjs.Rectangle(10.9,-174.2,798.2,1613.6), new cjs.Rectangle(10.9,-175.8,798.2,1613.6), new cjs.Rectangle(10.9,-177.4,798.2,1613.6), new cjs.Rectangle(10.9,-179,798.2,1613.6), new cjs.Rectangle(10.9,-180.6,798.2,1613.6), new cjs.Rectangle(10.9,-182.2,798.2,1613.6), new cjs.Rectangle(10.9,-183.9,798.2,1613.7), new cjs.Rectangle(10.9,-185.5,798.2,1613.7), new cjs.Rectangle(10.9,-187.1,798.2,1613.6), new cjs.Rectangle(10.9,-188.7,798.2,1613.6), new cjs.Rectangle(10.9,-190.3,798.2,1613.6), new cjs.Rectangle(10.9,-191.9,798.2,1613.7), new cjs.Rectangle(10.9,-193.5,798.2,1613.6), new cjs.Rectangle(10.9,-195.2,798.2,1613.7), new cjs.Rectangle(10.9,-196.8,798.2,1613.6), new cjs.Rectangle(10.9,-198.4,798.2,1613.7), new cjs.Rectangle(10.9,-200,798.2,1613.7), new cjs.Rectangle(10.9,-201.6,798.2,1613.7), new cjs.Rectangle(10.9,-203.3,798.2,1613.8), new cjs.Rectangle(10.9,-204.9,798.2,1613.8), new cjs.Rectangle(10.9,-206.5,798.2,1613.8), new cjs.Rectangle(10.9,-208.1,798.2,1613.8), new cjs.Rectangle(10.9,-209.7,798.2,1613.8), new cjs.Rectangle(10.9,-211.3,798.2,1613.8), new cjs.Rectangle(10.9,-213,798.2,1613.8), new cjs.Rectangle(10.9,-214.6,798.2,1613.8), new cjs.Rectangle(10.9,-216.2,798.2,1613.8), new cjs.Rectangle(10.9,-217.8,798.2,1613.8), new cjs.Rectangle(10.9,-219.4,798.2,1613.8), new cjs.Rectangle(10.9,-221.1,798.2,1613.9), new cjs.Rectangle(10.9,-222.7,798.2,1613.9), new cjs.Rectangle(10.9,-224.3,798.2,1613.9), new cjs.Rectangle(10.9,-225.9,798.2,1613.8), new cjs.Rectangle(10.9,-227.5,798.2,1613.9), new cjs.Rectangle(10.9,-229.1,798.2,1613.9), new cjs.Rectangle(10.9,-230.8,798.2,1613.9), new cjs.Rectangle(10.9,-232.4,798.2,1613.9), new cjs.Rectangle(10.9,-234,798.2,1613.9), new cjs.Rectangle(10.9,-235.6,798.2,1613.9), new cjs.Rectangle(10.9,-237.2,798.2,1613.9), new cjs.Rectangle(10.9,-238.8,798.2,1613.9), new cjs.Rectangle(10.9,-240.5,798.2,1614), new cjs.Rectangle(10.9,-242.1,798.2,1613.9), new cjs.Rectangle(10.9,-243.7,798.2,1614), new cjs.Rectangle(10.9,-245.3,798.2,1613.9), new cjs.Rectangle(10.9,-246.9,798.2,1614), new cjs.Rectangle(10.9,-248.5,798.2,1614), new cjs.Rectangle(10.9,-250.2,798.2,1614), new cjs.Rectangle(10.9,-251.8,798.2,1614), new cjs.Rectangle(10.9,-253.4,798.2,1614), new cjs.Rectangle(10.9,-255,798.2,1614), new cjs.Rectangle(10.9,-256.6,798.2,1614), new cjs.Rectangle(10.9,-258.2,798.2,1614), new cjs.Rectangle(10.9,-259.9,798.2,1614.1), new cjs.Rectangle(10.9,-261.5,798.2,1614.1), new cjs.Rectangle(10.9,-263.1,798.2,1614), new cjs.Rectangle(10.9,-264.7,798.2,1614.1), new cjs.Rectangle(10.9,-266.3,798.2,1614.1), new cjs.Rectangle(10.9,-267.9,798.2,1614.1), new cjs.Rectangle(10.9,-269.6,798.2,1614.1), new cjs.Rectangle(10.9,-271.2,798.2,1614.1), new cjs.Rectangle(10.9,-272.8,798.2,1614.1), new cjs.Rectangle(10.9,-274.4,798.2,1614.1), new cjs.Rectangle(10.9,-276,798.2,1614.1), new cjs.Rectangle(10.9,-277.6,798.2,1614.1), new cjs.Rectangle(10.9,-279.3,798.2,1614.1), new cjs.Rectangle(10.9,-280.9,798.2,1614.2), new cjs.Rectangle(10.9,-282.5,798.2,1614.1), new cjs.Rectangle(10.9,-284.1,798.2,1614.2), new cjs.Rectangle(10.9,-285.7,798.2,1614.2), new cjs.Rectangle(10.9,-287.4,798.2,1614.2), new cjs.Rectangle(10.9,-289,798.2,1614.2), new cjs.Rectangle(10.9,-290.6,798.2,1614.2), new cjs.Rectangle(10.9,-292.2,798.2,1614.2), new cjs.Rectangle(10.9,-293.8,798.2,1614.2), new cjs.Rectangle(10.9,-295.4,798.2,1614.2), new cjs.Rectangle(10.9,-297.1,798.2,1614.3), new cjs.Rectangle(10.9,-298.7,798.2,1614.3), new cjs.Rectangle(10.9,-300.3,798.2,1614.2), new cjs.Rectangle(10.9,-301.9,798.2,1614.3), new cjs.Rectangle(10.9,-303.5,798.2,1614.3), new cjs.Rectangle(10.9,-305.1,798.2,1614.3), new cjs.Rectangle(10.9,-306.8,798.2,1614.3), new cjs.Rectangle(10.9,-308.4,798.2,1614.3), new cjs.Rectangle(10.9,-310,798.2,1614.3), new cjs.Rectangle(10.9,-311.6,798.2,1614.3), new cjs.Rectangle(10.9,-313.2,798.2,1614.3), new cjs.Rectangle(10.9,-314.8,798.2,1614.3), new cjs.Rectangle(10.9,-316.5,798.2,1614.4), new cjs.Rectangle(10.9,-318.1,798.2,1614.4), new cjs.Rectangle(10.9,-319.7,798.2,1614.4), new cjs.Rectangle(10.9,-321.3,798.2,1614.4), new cjs.Rectangle(10.9,-322.9,798.2,1614.4), new cjs.Rectangle(10.9,-324.6,798.2,1614.4), new cjs.Rectangle(10.9,-326.2,798.2,1614.4), new cjs.Rectangle(10.9,-327.8,798.2,1614.4), new cjs.Rectangle(10.9,-329.4,798.2,1614.4), new cjs.Rectangle(10.9,-331,798.2,1614.4), new cjs.Rectangle(10.9,-332.6,798.2,1614.4), new cjs.Rectangle(10.9,-334.3,798.2,1614.5), new cjs.Rectangle(10.9,-335.9,798.2,1614.4), new cjs.Rectangle(10.9,-337.5,798.2,1614.5), new cjs.Rectangle(10.9,-339.1,798.2,1614.4), new cjs.Rectangle(10.9,-340.7,798.2,1614.5), new cjs.Rectangle(10.9,-342.3,798.2,1614.4), new cjs.Rectangle(10.9,-344,798.2,1614.5), new cjs.Rectangle(10.9,-345.6,798.2,1614.5), new cjs.Rectangle(10.9,-347.2,798.2,1614.5), new cjs.Rectangle(10.9,-348.8,798.2,1614.5), new cjs.Rectangle(10.9,-350.4,798.2,1614.5), new cjs.Rectangle(10.9,-352,798.2,1614.5), new cjs.Rectangle(10.9,-353.7,798.2,1614.6), new cjs.Rectangle(10.9,-355.3,798.2,1614.6), new cjs.Rectangle(10.9,-356.9,798.2,1614.6), new cjs.Rectangle(10.9,-358.5,798.2,1614.6), new cjs.Rectangle(10.9,-360.1,798.2,1614.6), new cjs.Rectangle(10.9,-361.7,798.2,1614.6), new cjs.Rectangle(10.9,-363.4,798.2,1614.6), new cjs.Rectangle(10.9,-365,798.2,1614.6), new cjs.Rectangle(10.9,-366.6,798.2,1614.6), new cjs.Rectangle(10.9,-368.2,798.2,1614.6), new cjs.Rectangle(10.9,-369.8,798.2,1614.6), new cjs.Rectangle(10.9,-371.5,798.2,1614.7), new cjs.Rectangle(10.9,-373.1,798.2,1614.7), new cjs.Rectangle(10.9,-374.7,798.2,1614.7), new cjs.Rectangle(10.9,-376.3,798.2,1614.7), new cjs.Rectangle(10.9,-377.9,798.2,1614.7), new cjs.Rectangle(10.9,-379.5,798.2,1614.6), new cjs.Rectangle(10.9,-381.2,798.2,1614.7), new cjs.Rectangle(10.9,-382.8,798.2,1614.7), new cjs.Rectangle(10.9,-384.4,798.2,1614.7), new cjs.Rectangle(10.9,-386,798.2,1614.7), new cjs.Rectangle(10.9,-387.6,798.2,1614.7), new cjs.Rectangle(10.9,-389.2,798.2,1614.7), new cjs.Rectangle(10.9,-390.9,798.2,1614.8), new cjs.Rectangle(10.9,-392.5,798.2,1614.8), new cjs.Rectangle(10.9,-394.1,798.2,1614.8), new cjs.Rectangle(10.9,-395.7,798.2,1614.8), new cjs.Rectangle(10.9,-397.3,798.2,1614.8), new cjs.Rectangle(10.9,-398.9,798.2,1614.8), new cjs.Rectangle(10.9,-400.6,798.2,1614.8), new cjs.Rectangle(10.9,-402.2,798.2,1614.8), new cjs.Rectangle(10.9,-403.8,798.2,1614.8), new cjs.Rectangle(10.9,-405.4,798.2,1614.8), new cjs.Rectangle(10.9,-407,798.2,1614.8), new cjs.Rectangle(10.9,-408.7,798.2,1614.9), new cjs.Rectangle(10.9,-410.3,798.2,1614.9), new cjs.Rectangle(10.9,-411.9,798.2,1614.9), new cjs.Rectangle(10.9,-413.5,798.2,1614.9), new cjs.Rectangle(10.9,-415.1,798.2,1614.9), new cjs.Rectangle(10.9,-416.7,798.2,1614.9), new cjs.Rectangle(10.9,-418.3,798.2,1614.9), new cjs.Rectangle(10.9,-420,798.2,1614.9), new cjs.Rectangle(10.9,-421.6,798.2,1614.9), new cjs.Rectangle(10.9,-423.2,798.2,1614.9), new cjs.Rectangle(10.9,-424.8,798.2,1614.9), new cjs.Rectangle(10.9,-426.4,798.2,1614.9), new cjs.Rectangle(10.9,-428.1,798.2,1614.9), new cjs.Rectangle(10.9,-429.7,798.2,1615), new cjs.Rectangle(10.9,-431.3,798.2,1615), new cjs.Rectangle(10.9,-432.9,798.2,1615), new cjs.Rectangle(10.9,-434.5,798.2,1615), new cjs.Rectangle(10.9,-436.1,798.2,1614.9), new cjs.Rectangle(10.9,-437.8,798.2,1615), new cjs.Rectangle(10.9,-439.4,798.2,1615), new cjs.Rectangle(10.9,-441,798.2,1615), new cjs.Rectangle(10.9,-442.6,798.2,1615.1), new cjs.Rectangle(10.9,-444.2,798.2,1615), new cjs.Rectangle(10.9,-445.8,798.2,1615), new cjs.Rectangle(10.9,-447.5,798.2,1615.1), new cjs.Rectangle(10.9,-449.1,798.2,1615.1), new cjs.Rectangle(10.9,-450.7,798.2,1615.1), new cjs.Rectangle(10.9,-452.3,798.2,1615.1), new cjs.Rectangle(10.9,-453.9,798.2,1615.1), new cjs.Rectangle(10.9,-455.5,798.2,1615.1), new cjs.Rectangle(10.9,-457.2,798.2,1615.1), new cjs.Rectangle(10.9,-458.8,798.2,1615.1), new cjs.Rectangle(10.9,-460.4,798.2,1615.1), new cjs.Rectangle(10.9,-462,798.2,1615.1), new cjs.Rectangle(10.9,-463.6,798.2,1615.1), new cjs.Rectangle(10.9,-465.2,798.2,1615.1), new cjs.Rectangle(10.9,-466.9,798.2,1615.2), new cjs.Rectangle(10.9,-468.5,798.2,1615.2), new cjs.Rectangle(10.9,-470.1,798.2,1615.2), new cjs.Rectangle(10.9,-471.7,798.2,1615.2), new cjs.Rectangle(10.9,-473.3,798.2,1615.2), new cjs.Rectangle(10.9,-475,798.2,1615.2), new cjs.Rectangle(10.9,-476.6,798.2,1615.2), new cjs.Rectangle(10.9,-478.2,798.2,1615.2), new cjs.Rectangle(10.9,-479.8,798.2,1615.3), new cjs.Rectangle(10.9,-481.4,798.2,1615.2), new cjs.Rectangle(10.9,-483,798.2,1615.2), new cjs.Rectangle(10.9,-484.7,798.2,1615.3), new cjs.Rectangle(10.9,-486.3,798.2,1615.3), new cjs.Rectangle(10.9,-487.9,798.2,1615.3), new cjs.Rectangle(10.9,-489.5,798.2,1615.3), new cjs.Rectangle(10.9,-491.1,798.2,1615.3), new cjs.Rectangle(10.9,-492.7,798.2,1615.3), new cjs.Rectangle(10.9,-494.4,798.2,1615.3), new cjs.Rectangle(10.9,-496,798.2,1615.3), new cjs.Rectangle(10.9,-497.6,798.2,1615.4), new cjs.Rectangle(10.9,-499.2,798.2,1615.3), new cjs.Rectangle(10.9,-500.8,798.2,1615.3), new cjs.Rectangle(10.9,-502.4,798.2,1615.3), new cjs.Rectangle(10.9,-504.1,798.2,1615.4), new cjs.Rectangle(10.9,-505.7,798.2,1615.4), new cjs.Rectangle(10.9,-507.3,798.2,1615.4), new cjs.Rectangle(10.9,-508.9,798.2,1615.4), new cjs.Rectangle(10.9,-510.5,798.2,1615.4), new cjs.Rectangle(10.9,-512.2,798.2,1615.4), new cjs.Rectangle(10.9,-513.8,798.2,1615.4), new cjs.Rectangle(10.9,-515.4,798.2,1615.4), new cjs.Rectangle(10.9,-517,798.2,1615.5), new cjs.Rectangle(10.9,-518.6,798.2,1615.4), new cjs.Rectangle(10.9,-520.2,798.2,1615.4), new cjs.Rectangle(10.9,-521.9,798.2,1615.4), new cjs.Rectangle(10.9,-523.5,798.2,1615.5), new cjs.Rectangle(10.9,-525.1,798.2,1615.4), new cjs.Rectangle(10.9,-526.7,798.2,1615.5), new cjs.Rectangle(10.9,-528.3,798.2,1615.4), new cjs.Rectangle(10.9,-529.9,798.2,1615.5), new cjs.Rectangle(10.9,-531.6,798.2,1615.5), new cjs.Rectangle(10.9,-533.2,798.2,1615.5), new cjs.Rectangle(10.9,-534.8,798.2,1615.5), new cjs.Rectangle(10.9,-536.4,798.2,1615.5), new cjs.Rectangle(10.9,-538,798.2,1615.5), new cjs.Rectangle(10.9,-539.6,798.2,1615.5), new cjs.Rectangle(10.9,-541.3,798.2,1615.6), new cjs.Rectangle(10.9,-542.9,798.2,1615.6), new cjs.Rectangle(10.9,-544.5,798.2,1615.6), new cjs.Rectangle(10.9,-546.1,798.2,1615.6), new cjs.Rectangle(10.9,-547.7,798.2,1615.6), new cjs.Rectangle(10.9,-549.3,798.2,1615.6), new cjs.Rectangle(10.9,-551,798.2,1615.6), new cjs.Rectangle(10.9,-552.6,798.2,1615.6), new cjs.Rectangle(10.9,-554.2,798.2,1615.6), new cjs.Rectangle(10.9,-555.8,798.2,1615.6), new cjs.Rectangle(10.9,-557.4,798.2,1615.6), new cjs.Rectangle(10.9,-559.1,798.2,1615.7), new cjs.Rectangle(10.9,-560.7,798.2,1615.7), new cjs.Rectangle(10.9,-562.3,798.2,1615.6), new cjs.Rectangle(10.9,-563.9,798.2,1615.7), new cjs.Rectangle(10.9,-565.5,798.2,1615.6), new cjs.Rectangle(10.9,-567.1,798.2,1615.7), new cjs.Rectangle(10.9,-568.8,798.2,1615.7), new cjs.Rectangle(10.9,-570.4,798.2,1615.7), new cjs.Rectangle(10.9,-572,798.2,1615.7), new cjs.Rectangle(10.9,-573.6,798.2,1615.8), new cjs.Rectangle(10.9,-575.2,798.2,1615.7), new cjs.Rectangle(10.9,-576.8,798.2,1615.7), new cjs.Rectangle(10.9,-578.5,798.2,1615.8), new cjs.Rectangle(10.9,-580.1,798.2,1615.8), new cjs.Rectangle(10.9,-581.7,798.2,1615.8), new cjs.Rectangle(10.9,-583.3,798.2,1615.8), new cjs.Rectangle(10.9,-584.9,798.2,1615.8), new cjs.Rectangle(10.9,-586.5,798.2,1615.8), new cjs.Rectangle(10.9,-588.2,798.2,1615.8), new cjs.Rectangle(10.9,-589.8,798.2,1615.8), new cjs.Rectangle(10.9,-591.4,798.2,1615.8), new cjs.Rectangle(10.9,-593,798.2,1615.9), new cjs.Rectangle(10.9,-594.6,798.2,1615.8), new cjs.Rectangle(10.9,-596.3,798.2,1615.9), new cjs.Rectangle(10.9,-597.9,798.2,1615.9), new cjs.Rectangle(10.9,-599.5,798.2,1615.9), new cjs.Rectangle(10.9,-601.1,798.2,1615.9), new cjs.Rectangle(10.9,-602.7,798.2,1615.9), new cjs.Rectangle(10.9,-604.3,798.2,1615.9), new cjs.Rectangle(10.9,-605.9,798.2,1615.9), new cjs.Rectangle(10.9,-607.6,798.2,1615.9), new cjs.Rectangle(10.9,-609.2,798.2,1615.9), new cjs.Rectangle(10.9,-610.8,798.2,1616), new cjs.Rectangle(10.9,-612.4,798.2,1615.9), new cjs.Rectangle(10.9,-614,798.2,1615.9), new cjs.Rectangle(10.9,-615.7,798.2,1616), new cjs.Rectangle(10.9,-617.3,798.2,1615.9), new cjs.Rectangle(10.9,-618.9,798.2,1615.9), new cjs.Rectangle(10.9,-620.5,798.2,1615.9), new cjs.Rectangle(10.9,-622.1,798.2,1615.9), new cjs.Rectangle(10.9,-623.7,798.2,1616), new cjs.Rectangle(10.9,-625.4,798.2,1616), new cjs.Rectangle(10.9,-627,798.2,1616), new cjs.Rectangle(10.9,-628.6,798.2,1616), new cjs.Rectangle(10.9,-630.2,798.2,1616.1), new cjs.Rectangle(10.9,-631.8,798.2,1616), new cjs.Rectangle(10.9,-633.5,798.2,1616.1), new cjs.Rectangle(10.9,-635.1,798.2,1616.1), new cjs.Rectangle(10.9,-636.7,798.2,1616.1), new cjs.Rectangle(10.9,-638.3,798.2,1616.1), new cjs.Rectangle(10.9,-639.9,798.2,1616.1), new cjs.Rectangle(10.9,-641.5,798.2,1616.1), new cjs.Rectangle(10.9,-643.1,798.2,1616.1), new cjs.Rectangle(10.9,-644.8,798.2,1616.1), new cjs.Rectangle(10.9,-646.4,798.2,1616.1), new cjs.Rectangle(10.9,-648,798.2,1616.2), new cjs.Rectangle(10.9,-649.6,798.2,1616.1), new cjs.Rectangle(10.9,-651.2,798.2,1616.1), new cjs.Rectangle(10.9,-652.8,798.2,1616.1), new cjs.Rectangle(10.9,-654.5,798.2,1616.2), new cjs.Rectangle(10.9,-656.1,798.2,1616.2), new cjs.Rectangle(10.9,-657.7,798.2,1616.2), new cjs.Rectangle(10.9,-659.3,798.2,1616.2), new cjs.Rectangle(10.9,-660.9,798.2,1616.2), new cjs.Rectangle(10.9,-662.6,798.2,1616.2), new cjs.Rectangle(10.9,-664.2,798.2,1616.2), new cjs.Rectangle(10.9,-665.8,798.2,1616.2), new cjs.Rectangle(10.9,-667.4,798.2,1616.3), new cjs.Rectangle(10.9,-669,798.2,1616.3), new cjs.Rectangle(10.9,-670.6,798.2,1616.2), new cjs.Rectangle(10.9,-672.3,798.2,1616.3), new cjs.Rectangle(10.9,-673.9,798.2,1616.3), new cjs.Rectangle(10.9,-675.5,798.2,1616.3), new cjs.Rectangle(10.9,-677.1,798.2,1616.3), new cjs.Rectangle(10.9,-678.7,798.2,1616.3), new cjs.Rectangle(10.9,-680.3,798.2,1616.3), new cjs.Rectangle(10.9,-682,798.2,1616.3), new cjs.Rectangle(10.9,-683.6,798.2,1616.3), new cjs.Rectangle(10.9,-685.2,798.2,1616.4), new cjs.Rectangle(10.9,-686.8,798.2,1616.3), new cjs.Rectangle(10.9,-688.4,798.2,1616.3), new cjs.Rectangle(10.9,-690,798.2,1616.3), new cjs.Rectangle(10.9,-691.7,798.2,1616.4), new cjs.Rectangle(10.9,-693.3,798.2,1616.4), new cjs.Rectangle(10.9,-694.9,798.2,1616.4), new cjs.Rectangle(10.9,-696.5,798.2,1616.4), new cjs.Rectangle(10.9,-698.1,798.2,1616.4), new cjs.Rectangle(10.9,-699.8,798.2,1616.4), new cjs.Rectangle(10.9,-701.4,798.2,1616.4), new cjs.Rectangle(10.9,-703,798.2,1616.4), new cjs.Rectangle(10.9,-704.6,798.2,1616.4), new cjs.Rectangle(10.9,-706.2,798.2,1616.5), new cjs.Rectangle(10.9,-707.8,798.2,1616.4), new cjs.Rectangle(10.9,-709.5,798.2,1616.5), new cjs.Rectangle(10.9,-711.1,798.2,1616.5), new cjs.Rectangle(10.9,-712.7,798.2,1616.5), new cjs.Rectangle(10.9,-714.3,798.2,1616.5), new cjs.Rectangle(10.9,-715.9,798.2,1616.5), new cjs.Rectangle(10.9,-717.5,798.2,1616.4), new cjs.Rectangle(10.9,-719.2,798.2,1616.5), new cjs.Rectangle(10.9,-720.8,798.2,1616.5), new cjs.Rectangle(10.9,-722.4,798.2,1616.5), new cjs.Rectangle(10.9,-724,798.2,1616.6), new cjs.Rectangle(10.9,-725.6,798.2,1616.5), new cjs.Rectangle(10.9,-727.2,798.2,1616.5), new cjs.Rectangle(10.9,-728.9,798.2,1616.6), new cjs.Rectangle(10.9,-730.5,798.2,1616.6), new cjs.Rectangle(10.9,-732.1,798.2,1616.6), new cjs.Rectangle(10.9,-733.7,798.2,1616.6), new cjs.Rectangle(10.9,-735.3,798.2,1616.6), new cjs.Rectangle(10.9,-737,798.2,1616.6), new cjs.Rectangle(10.9,-738.6,798.2,1616.6), new cjs.Rectangle(10.9,-740.2,798.2,1616.6), new cjs.Rectangle(10.9,-741.8,798.2,1616.6), new cjs.Rectangle(10.9,-743.4,798.2,1616.7), new cjs.Rectangle(10.9,-745,798.2,1616.6), new cjs.Rectangle(10.9,-746.7,798.2,1616.7), new cjs.Rectangle(10.9,-748.3,798.2,1616.7), new cjs.Rectangle(10.9,-749.9,798.2,1616.7), new cjs.Rectangle(10.9,-751.5,798.2,1616.7), new cjs.Rectangle(10.9,-753.1,798.2,1616.7), new cjs.Rectangle(10.9,-754.7,798.2,1616.7), new cjs.Rectangle(10.9,-756.3,798.2,1616.7), new cjs.Rectangle(10.9,-758,798.2,1616.7), new cjs.Rectangle(10.9,-759.6,798.2,1616.7), new cjs.Rectangle(10.9,-761.2,798.2,1616.8), new cjs.Rectangle(10.9,-762.8,798.2,1616.7), new cjs.Rectangle(10.9,-764.4,798.2,1616.7), new cjs.Rectangle(10.9,-766.1,798.2,1616.8), new cjs.Rectangle(10.9,-767.7,798.2,1616.8), new cjs.Rectangle(10.9,-769.3,798.2,1616.8), new cjs.Rectangle(10.9,-770.9,798.2,1616.8), new cjs.Rectangle(10.9,-772.5,798.2,1616.8), new cjs.Rectangle(10.9,-774.1,798.2,1616.8), new cjs.Rectangle(10.9,-775.8,798.2,1616.8), new cjs.Rectangle(10.9,-777.4,798.2,1616.8), new cjs.Rectangle(10.9,-779,798.2,1616.8), new cjs.Rectangle(10.9,-780.6,798.2,1616.9), new cjs.Rectangle(10.9,-782.2,798.2,1616.9), new cjs.Rectangle(10.9,-783.9,798.2,1616.9), new cjs.Rectangle(10.9,-785.5,798.2,1616.9), new cjs.Rectangle(10.9,-787.1,798.2,1616.9), new cjs.Rectangle(10.9,-788.7,798.2,1616.9), new cjs.Rectangle(10.9,-790.3,798.2,1616.9), new cjs.Rectangle(10.9,-791.9,798.2,1616.9), new cjs.Rectangle(10.9,-793.5,798.2,1616.9), new cjs.Rectangle(10.9,-795.2,798.2,1616.9), new cjs.Rectangle(10.9,-796.8,798.2,1616.9), new cjs.Rectangle(10.9,-798.4,798.2,1617), new cjs.Rectangle(10.9,-800,798.2,1616.9), new cjs.Rectangle(10.9,-801.6,798.2,1616.9), new cjs.Rectangle(10.9,-803.3,798.2,1616.9), new cjs.Rectangle(10.9,-804.9,798.2,1616.9), new cjs.Rectangle(10.9,-806.5,798.2,1617), new cjs.Rectangle(10.9,-808.1,798.2,1617), new cjs.Rectangle(10.9,-809.7,798.2,1617), new cjs.Rectangle(10.9,-811.3,798.2,1617), new cjs.Rectangle(10.9,-813,798.2,1617), new cjs.Rectangle(10.9,-814.6,798.2,1617)];


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
p.nominalBounds = rect = new cjs.Rectangle(-250.4,-93,1033,214.7);
p.frameBounds = [rect];


(lib.q = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.shape6145("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-53.9,35.7,0.047,0.047);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.25,scaleY:0.25,x:-64.8,y:24.8},4).to({scaleX:0.1,scaleY:0.1,x:-56.5,y:32.1},2).to({_off:true},1).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.3,29.4,18.9,18.2);
p.frameBounds = [rect, new cjs.Rectangle(-71.9,19.8,39.4,37.8), new cjs.Rectangle(-82.5,10.3,59.8,57.5), new cjs.Rectangle(-93.2,0.7,80.3,77.1), new cjs.Rectangle(-103.9,-8.8,100.8,96.8), new cjs.Rectangle(-88.1,4.9,70.8,68), new cjs.Rectangle(-72.3,18.5,40.8,39.2), rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.sprite519_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance_1 = new lib.shape518_1("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1.8,-3.1,744,278);
p.frameBounds = [rect];


(lib.sprite517copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.shape516_1("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1.7,274.8,744,279);
p.frameBounds = [rect];


(lib.sprite517copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.shape516("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1.7,274.8,744,279);
p.frameBounds = [rect];


(lib.StylishMommytoBe_flaTimeline_114_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_8 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(1));

	// Layer 1
	this.instance = new lib.sprite383copy3();
	this.instance.parent = this;
	this.instance.setTransform(-374,-519.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-261.3},2).to({y:-292.3},2).to({y:-261.3},2).to({y:-271.3},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.3,-442.9,408,285);
p.frameBounds = [rect, new cjs.Rectangle(-37.3,-313.9,408,285), new cjs.Rectangle(-37.3,-184.9,408,285), new cjs.Rectangle(-37.3,-200.4,408,285), new cjs.Rectangle(-37.3,-215.9,408,285), new cjs.Rectangle(-37.3,-200.4,408,285), new cjs.Rectangle(-37.3,-184.9,408,285), new cjs.Rectangle(-37.3,-189.9,408,285), new cjs.Rectangle(-37.3,-194.9,408,285)];


(lib.StylishMommytoBe_flaTimeline_114_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_8 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(1));

	// Layer 1
	this.instance_1 = new lib.sprite383copy2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-374,-519.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-261.3},2).to({y:-292.3},2).to({y:-261.3},2).to({y:-271.3},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.3,-442.9,408,285);
p.frameBounds = [rect, new cjs.Rectangle(-37.3,-313.9,408,285), new cjs.Rectangle(-37.3,-184.9,408,285), new cjs.Rectangle(-37.3,-200.4,408,285), new cjs.Rectangle(-37.3,-215.9,408,285), new cjs.Rectangle(-37.3,-200.4,408,285), new cjs.Rectangle(-37.3,-184.9,408,285), new cjs.Rectangle(-37.3,-189.9,408,285), new cjs.Rectangle(-37.3,-194.9,408,285)];


(lib.cover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var frequency = 10;
		stage.enableMouseOver(frequency);
		this.moregames.cursor = "pointer";
		this.logo.cursor = "pointer";
		this.playbutton.cursor = "pointer";
		//this.addthegame.cursor = "pointer";
		var buttonsArray = [this.playbutton,this.moregames,this.logo];
		var buttonsArrayString = ["playbutton","moregames","logo"];
		var buttonClicked = "";
		for(var i=0; i<buttonsArray.length;i++){
			buttonsArray[i].name = buttonsArrayString[i];
			buttonsArray[i].addEventListener("mouseover", hoverButtons.bind(this));
			buttonsArray[i].addEventListener("mouseout", houtButtons.bind(this));
		}
		
		function hoverButtons(event) {
			event.currentTarget.alpha = .8;
			event.currentTarget.shadow = new createjs.Shadow("#000000", 4, 4, 10);
		}
		
		function houtButtons(event) {
			event.currentTarget.alpha = 1;
			event.currentTarget.shadow = new createjs.Shadow("#000000", 0, 0, 0);
		}
		
		this.moregames.addEventListener("click", moregamesfunctionhere.bind(this));
		
		function moregamesfunctionhere(event) {
			exportRoot.moregamesfunction();
		}
		
		this.logo.addEventListener("click", logofunctionhere.bind(this));
		function logofunctionhere(event) {
			exportRoot.logofunction();
		}
		
		/*this.addthegame.addEventListener("click", addthegamefunction.bind(this));
		function addthegamefunction(event) {
			exportRoot.addthegame();
		}*/
		this.playbutton.addEventListener("click", playfunctionhere.bind(this));
		function playfunctionhere(event) {
			//exportRoot.animInterLevels = "cover";
			exportRoot.goanim();
			exportRoot.gotoAndStop(1);
			exportRoot.showAds();
			
			
		}
		
		var animelsa = this.elsacover;
		createjs.Tween.get(animelsa, {loop:false})
		   .to({alpha:1}, 3000, createjs.Ease.backOut)
		   
		   var animariel = this.arielcover;
		createjs.Tween.get(animariel, {loop:false})
		   .to({alpha:1}, 4000, createjs.Ease.backOut)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.arielcover = new lib.Symbol16();
	this.arielcover.parent = this;
	this.arielcover.setTransform(834,419,1,1,0,0,0,86.5,200.3);
	this.arielcover.alpha = 0.102;

	this.instance = new lib.StylishMommytoBe_flaTimeline_114_1();
	this.instance.parent = this;
	this.instance.setTransform(289.5,232.9,0.732,0.732);

	this.moregames = new lib.playbbutcopy3();
	this.moregames.parent = this;
	this.moregames.setTransform(990.8,561.8,1.322,1.322);
	this.moregames.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);

	this.playbutton = new lib.playbbutcopy();
	this.playbutton.parent = this;
	this.playbutton.setTransform(476.4,457.8,0.9,0.9);

	this.logo = new lib.Symbol4();
	this.logo.parent = this;
	this.logo.setTransform(367,571.7,0.708,0.708,0,0,0,134,81);

	this.elsacover = new lib.Symbol13();
	this.elsacover.parent = this;
	this.elsacover.setTransform(552,240.2,0.539,0.539,0,0,0,67.5,64.3);
	this.elsacover.alpha = 0.102;

	this.instance_1 = new lib.Bitmap10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(493.6,218.7,0.741,0.741);

	this.instance_2 = new lib.Layer1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(571.7,363.3,1.183,1.183,0,0,0,483.1,307);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.elsacover},{t:this.logo},{t:this.playbutton},{t:this.moregames},{t:this.instance},{t:this.arielcover}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-91.4,1143.1,818);
p.frameBounds = [rect];


(lib.Symbol1copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AhdBgQgogoAAg4IABgIQADgyAkgkQAogoA2AAQA4AAAoAoIAHAHQAQAbgXAOQgRAIgUgZQgZgWgiAAQgiAAgaAZQgVAWgDAeIAAAIQAAAkAYAXQAaAYAfgCQAagBATgWIgYgVQgHgIACgHQADgIARgFQBKgXARAOQANAHgHBPIAAACQAAAOgGAHQgHAHgMgHIgVgRQgfArg1AAQg2AAgogng");
	this.shape.setTransform(-0.9,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.instance = new lib.Symbol2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34.8,-46.2,71,96.4);
p.frameBounds = [rect];


(lib.Symbol1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AgZCFIgxg3IgHgHQgLgLgOgCIgXAAQgrAEgGgkIgBgFIAAgmQADgsAvAEIAXAAQAOgCALgLIAHgHIAxg3QAZgdAPAdQANA+ACA7QABBJgQBHQgIAPgIAAQgLAAgNgPgACkA2IgogoIgqApQgDACgEAAQgDAAgDgDQgCgDAAgDQAAgEACgCIApgpIgpgoQgCgCAAgEQAAgEACgCQADgDADAAQAEAAADADIAqAoIAogoQADgDADAAQAEAAAEADQACACAAAEQAAAEgDADIgpAnIApApQADACAAAEQAAADgDADQgDADgEAAQgDAAgDgDg");
	this.shape.setTransform(-0.3,13.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.instance = new lib.Symbol2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34.8,-46.2,71,96.4);
p.frameBounds = [rect];


(lib.Layer67_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.fff2copy();
	this.instance.parent = this;
	this.instance.setTransform(55.4,169.1,1.165,1.165);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.fff2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(50.5,106);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11.1,0,126.8,292.6);
p.frameBounds = [rect];


(lib.anashoecopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{shoe1:0,shoe2:1,shoe3:2,shoe4:3,shoe5:4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// shoe1
	this.p1 = new lib.qq1copy();
	this.p1.parent = this;
	this.p1.setTransform(32,34.5);

	this.p2 = new lib.aa11();
	this.p2.parent = this;
	this.p2.setTransform(32.5,33.5);

	this.instance = new lib.qq3();
	this.instance.parent = this;
	this.instance.setTransform(32,35.5);

	this.instance_1 = new lib.qq4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(32.5,33.5);

	this.instance_2 = new lib.qq6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(32,39);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.p1}]}).to({state:[{t:this.p2}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(1,0,62,69);
p.frameBounds = [rect, new cjs.Rectangle(2,0,61,67), new cjs.Rectangle(1,1,62,69), new cjs.Rectangle(2,0,61,67), new cjs.Rectangle(0,6,64,66)];


(lib.anadress7copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.ddw1();
	this.instance.parent = this;
	this.instance.setTransform(62.5,160.5);
	this.instance.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,125,321);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.anadress7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(62.5,160.5,1,1,0,0,0,62.5,160.5);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, 0, 37))];
	this.instance.cache(-2,-2,129,325);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,129,325);
p.frameBounds = [rect, null];


(lib.anadress6copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.ddw2();
	this.instance.parent = this;
	this.instance.setTransform(104.5,148.5);
	this.instance.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,209,297);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.anadress6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ddw2();
	this.instance.parent = this;
	this.instance.setTransform(104.5,148.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,209,297);
p.frameBounds = [rect];


(lib.anadress4copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.ddw4();
	this.instance.parent = this;
	this.instance.setTransform(104.5,148.5);
	this.instance.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,209,297);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.anadress4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ddw4();
	this.instance.parent = this;
	this.instance.setTransform(104.5,148.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,209,297);
p.frameBounds = [rect];


(lib.anadress3copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.dde5();
	this.instance.parent = this;
	this.instance.setTransform(115,162);
	this.instance.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,230,324);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.anadress3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dde5();
	this.instance.parent = this;
	this.instance.setTransform(115,162);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,230,324);
p.frameBounds = [rect];


(lib.anadress2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.ddw6();
	this.instance.parent = this;
	this.instance.setTransform(94.5,156);
	this.instance.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,189,312);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.anadress2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ddw6();
	this.instance.parent = this;
	this.instance.setTransform(94.5,156);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,189,312);
p.frameBounds = [rect];


(lib.anadress1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.ddw7();
	this.instance.parent = this;
	this.instance.setTransform(57.5,133.5);
	this.instance.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,115,267);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.anadress1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ddw7();
	this.instance.parent = this;
	this.instance.setTransform(57.5,133.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,115,267);
p.frameBounds = [rect];


(lib.anadress = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{dress1:1,dress2:2,dress3:3,dress4:4,dress5:5,dress6:6,dress7:7});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8));

	// ana dress1
	this.instance = new lib.dree2();
	this.instance.parent = this;
	this.instance.setTransform(117.8,164.9);

	this.rochie1 = new lib.anadress7copy();
	this.rochie1.parent = this;
	this.rochie1.setTransform(111.5,168.5,1,1,0,0,0,62.5,160.5);

	this.rochie1_1 = new lib.anadress6copy();
	this.rochie1_1.parent = this;
	this.rochie1_1.setTransform(112.5,151.5,1,1,0,0,0,104.5,148.5);

	this.instance_1 = new lib.ddw3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(116.5,140);

	this.instance_2 = new lib.anadress4copy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(112.5,151.5,1,1,0,0,0,104.5,148.5);

	this.instance_3 = new lib.anadress3copy();
	this.instance_3.parent = this;
	this.instance_3.setTransform(115,163,1,1,0,0,0,115,162);

	this.instance_4 = new lib.anadress2copy();
	this.instance_4.parent = this;
	this.instance_4.setTransform(116.5,156,1,1,0,0,0,94.5,156);

	this.instance_5 = new lib.anadress1copy();
	this.instance_5.parent = this;
	this.instance_5.setTransform(114.5,159.5,1,1,0,0,0,57.5,133.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.rochie1}]},1).to({state:[{t:this.rochie1_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-8.2,6.4,252,325);
p.frameBounds = [rect, new cjs.Rectangle(49,8,125,321), new cjs.Rectangle(8,3,209,297), new cjs.Rectangle(41,2,151,276), new cjs.Rectangle(8,3,209,297), new cjs.Rectangle(0,1,230,324), new cjs.Rectangle(22,0,189,312), new cjs.Rectangle(57,26,115,267)];


(lib.bag5copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.xxq1();
	this.instance.parent = this;
	this.instance.setTransform(47.5,60);
	this.instance.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,95,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.bag5copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.Tween8("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(47.5,60);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.Tween9("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(47.5,60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},9).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,95,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.bag3copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.Tween13("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(47.5,60);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.Tween14("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(47.5,60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},9).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,95,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.bag2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(37,55.5,1,1,0,0,0,37,55.5);
	this.instance_1.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,74,111);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.anabag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{bag1:1,bag2:2,bag3:3,bag4:4,bag5:5});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// bag1
	this.instance = new lib.bag5copy2();
	this.instance.parent = this;
	this.instance.setTransform(-171.5,3.7,1,1,0,0,0,47.5,60);

	this.instance_1 = new lib.bag5copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(47.5,69,1,1,0,0,0,47.5,60);

	this.instance_2 = new lib.zz2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(229.2,-54.3,1,1,0,0,0,0.4,0.3);

	this.instance_3 = new lib.bag3copy();
	this.instance_3.parent = this;
	this.instance_3.setTransform(47.5,69,1,1,0,0,0,47.5,60);

	this.instance_4 = new lib.bag2_2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(43,62.5,1,1,0,0,0,37,55.5);

	this.instance_5 = new lib.err1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(234.7,-51.5,1,1,0,0,0,-1.1,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-219,-56.3,95,120);
p.frameBounds = [rect, new cjs.Rectangle(0,9,95,120), new cjs.Rectangle(174.2,-97.1,109,85), new cjs.Rectangle(0,9,95,120), new cjs.Rectangle(6,7,74,111), new cjs.Rectangle(189.6,-103.9,89,100)];


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
	this.logo = new lib.Symbol4();
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
p.nominalBounds = rect = new cjs.Rectangle(38.7,-17,1033,335.5);
p.frameBounds = [rect, new cjs.Rectangle(28.6,-17,1033,335.5), new cjs.Rectangle(18.6,-17,1033,335.4), new cjs.Rectangle(8.6,-17,1033,335.4), new cjs.Rectangle(-1.5,-17,1033,335.4), new cjs.Rectangle(-11.5,-17,1033,335.4), new cjs.Rectangle(-21.5,-17,1033,335.3), new cjs.Rectangle(-31.5,-17,1033,335.3), new cjs.Rectangle(-41.6,-17,1033,335.3), new cjs.Rectangle(-51.6,-17,1033,335.3), new cjs.Rectangle(-61.6,-17,1033,335.3), new cjs.Rectangle(-71.7,-17,1033,335.2), new cjs.Rectangle(-81.7,-17,1033,335.2), new cjs.Rectangle(-91.7,-17,1033,335.2), new cjs.Rectangle(-101.8,-17,1033,335.2), new cjs.Rectangle(-111.8,-17,1033,335.2), new cjs.Rectangle(-121.8,-17,1033,335.1), new cjs.Rectangle(-131.9,-17,1033,335.1), new cjs.Rectangle(-141.9,-17,1033,335.1), new cjs.Rectangle(-151.9,-17,1033,335.1), new cjs.Rectangle(-162,-17,1033,335.1), new cjs.Rectangle(-172,-17,1033,335), new cjs.Rectangle(-182,-17,1033,335), new cjs.Rectangle(-192.1,-17,1033,335), new cjs.Rectangle(-202.1,-17,1033,335), new cjs.Rectangle(-212.1,-17,1033,334.9), new cjs.Rectangle(-222.2,-17,1033,334.9), new cjs.Rectangle(-232.2,-17,1033,334.9), new cjs.Rectangle(-242.2,-17,1033,334.9), new cjs.Rectangle(-252.3,-17,1033,334.9), new cjs.Rectangle(-262.3,-17,1033,334.8), new cjs.Rectangle(-272.3,-17,1040.5,334.8), new cjs.Rectangle(-282.4,-17,1050.5,334.8), new cjs.Rectangle(-292.4,-17,1060.5,334.8), new cjs.Rectangle(-302.4,-17,1070.6,334.8), new cjs.Rectangle(-312.4,-17,1080.6,334.7), new cjs.Rectangle(-322.5,-17,1090.6,334.7), new cjs.Rectangle(-332.5,-17,1100.7,334.7), new cjs.Rectangle(-342.6,-17,1110.7,334.7), new cjs.Rectangle(-352.6,-17,1120.7,334.7), new cjs.Rectangle(-362.6,-17,1130.8,334.6), new cjs.Rectangle(-372.6,-17,1140.8,334.6), new cjs.Rectangle(-382.7,-17,1150.8,334.6), new cjs.Rectangle(-392.7,-17,1160.9,334.6), new cjs.Rectangle(-402.7,-17,1170.9,334.5), new cjs.Rectangle(-412.8,-17,1180.9,334.5), new cjs.Rectangle(-422.8,-17,1191,334.5), new cjs.Rectangle(-432.8,-17,1201,334.5), new cjs.Rectangle(-442.9,-17,1211,334.5), new cjs.Rectangle(-452.9,-17,1221,334.4), new cjs.Rectangle(-462.9,-17,1231.1,334.4), new cjs.Rectangle(-473,-17,1241.1,334.4), new cjs.Rectangle(-483,-17,1251.1,334.4), new cjs.Rectangle(-493,-17,1261.2,334.4), new cjs.Rectangle(-503.1,-17,1271.2,334.3), new cjs.Rectangle(-513.1,-17,1281.3,334.3), new cjs.Rectangle(-523.1,-17,1291.3,334.3), new cjs.Rectangle(-533.2,-17,1301.3,334.3), new cjs.Rectangle(-543.2,-17,1311.3,334.2), new cjs.Rectangle(-553.2,-17,1321.4,334.2), new cjs.Rectangle(-563.3,-17,1331.4,334.2), new cjs.Rectangle(-573.3,-17,1341.5,334.2), new cjs.Rectangle(-583.3,-17,1351.5,334.2), new cjs.Rectangle(-593.4,-17,1361.5,334.1), new cjs.Rectangle(-603.4,-17,1371.6,334.1), new cjs.Rectangle(-613.4,-17,1381.6,334.1), new cjs.Rectangle(-623.5,-17,1391.6,334.1), new cjs.Rectangle(-633.5,-17,1401.7,334), new cjs.Rectangle(-643.5,-17,1411.7,334), new cjs.Rectangle(-653.6,-17,1421.7,334), new cjs.Rectangle(-663.6,-17,1431.7,334), new cjs.Rectangle(-673.6,-17,1441.8,334), new cjs.Rectangle(-683.7,-17,1451.8,333.9), new cjs.Rectangle(-693.7,-17,1461.8,333.9), new cjs.Rectangle(-703.7,-17,1471.9,333.9), new cjs.Rectangle(-713.8,-17,1481.9,333.9), new cjs.Rectangle(-723.8,-17,1491.9,333.8), new cjs.Rectangle(-733.8,-17,1502,333.8), new cjs.Rectangle(-743.9,-17,1512,333.8), new cjs.Rectangle(-753.9,-17,1522.1,333.8), new cjs.Rectangle(-763.9,-17,1532.1,333.8), new cjs.Rectangle(-774,-17,1542.1,333.7), new cjs.Rectangle(-784,-17,1552.1,333.7), new cjs.Rectangle(-794,-17,1562.2,333.7), new cjs.Rectangle(-804,-17,1572.2,333.7), new cjs.Rectangle(-814.1,-17,1582.2,333.7), new cjs.Rectangle(-824.1,-17,1592.3,333.6), new cjs.Rectangle(-834.2,-17,1602.3,333.6), new cjs.Rectangle(-844.2,-17,1612.3,333.6), new cjs.Rectangle(-854.2,-17,1622.4,333.6), new cjs.Rectangle(-864.3,-17,1632.4,333.5), new cjs.Rectangle(-874.3,-17,1642.4,333.5), new cjs.Rectangle(-884.3,-17,1652.5,333.5), new cjs.Rectangle(-894.3,-17,1662.5,333.5), new cjs.Rectangle(-904.4,-17,1672.5,333.5), new cjs.Rectangle(-914.4,-17,1682.6,333.4), new cjs.Rectangle(-924.5,-17,1692.6,333.4), new cjs.Rectangle(-934.5,-17,1702.6,333.4), new cjs.Rectangle(-944.5,-17,1712.7,333.4), new cjs.Rectangle(-954.6,-17,1722.7,333.3), new cjs.Rectangle(-964.6,-17,1732.7,333.3), new cjs.Rectangle(-974.6,-17,1742.8,333.3), new cjs.Rectangle(-984.7,-17,1752.8,333.3), new cjs.Rectangle(-994.7,-17,1762.8,333.3), new cjs.Rectangle(-1004.7,-17,1772.9,333.2), new cjs.Rectangle(-1014.7,-17,1782.9,333.2), new cjs.Rectangle(-1024.8,-17,1792.9,333.2), new cjs.Rectangle(-1034.8,-17,1803,333.2), new cjs.Rectangle(-1044.8,-17,1813,333.1), new cjs.Rectangle(-1054.9,-17,1823,333.1), new cjs.Rectangle(-1064.9,-17,1833.1,333.1), new cjs.Rectangle(-1075,-17,1843.1,333.1), new cjs.Rectangle(-1085,-17,1853.1,333.1), new cjs.Rectangle(-1095,-17,1863.2,333), new cjs.Rectangle(-1105,-17,1873.2,333), new cjs.Rectangle(-1115.1,-17,1883.2,333), new cjs.Rectangle(-1125.1,-17,1893.3,333), new cjs.Rectangle(-1135.1,-17,1903.3,333), new cjs.Rectangle(-1145.2,-17,1913.3,332.9), new cjs.Rectangle(-1155.2,-17,1923.3,332.9), new cjs.Rectangle(-1165.3,-17,1933.4,332.9), new cjs.Rectangle(-1175.3,-17,1943.4,332.9), new cjs.Rectangle(-1185.3,-17,1953.5,332.8), new cjs.Rectangle(-1195.3,-17,1963.5,332.8), new cjs.Rectangle(-1205.4,-17,1973.5,332.8), new cjs.Rectangle(-1215.4,-17,1983.5,332.8), new cjs.Rectangle(-1225.4,-17,1993.6,332.8), new cjs.Rectangle(-1235.5,-17,2003.6,332.7), new cjs.Rectangle(-1245.5,-17,2013.6,332.7), new cjs.Rectangle(-1255.5,-17,2023.7,332.7), new cjs.Rectangle(-1265.6,-17,2033.7,332.7), new cjs.Rectangle(-1275.6,-17,2043.8,332.6), new cjs.Rectangle(-1285.6,-17,2053.8,332.6), new cjs.Rectangle(-1295.7,-17,2063.8,332.6), new cjs.Rectangle(-1305.7,-17,2073.8,332.6), new cjs.Rectangle(-1315.7,-17,2083.9,332.6), new cjs.Rectangle(-1325.8,-17,2093.9,332.5), new cjs.Rectangle(-1335.8,-17,2104,332.5), new cjs.Rectangle(-1345.8,-17,2114,332.5), new cjs.Rectangle(-1355.9,-17,2124,332.5), new cjs.Rectangle(-1365.9,-17,2134.1,332.5), new cjs.Rectangle(-1375.9,-17,2144.1,332.4), new cjs.Rectangle(-1386,-17,2154.1,332.4), new cjs.Rectangle(-1396,-17,2164.1,332.4), new cjs.Rectangle(-1406,-17,2174.2,332.4), new cjs.Rectangle(-1416,-17,2184.2,332.3), new cjs.Rectangle(-1426.1,-17,2194.3,332.3), new cjs.Rectangle(-1436.1,-17,2204.3,332.3), new cjs.Rectangle(-1446.2,-17,2214.3,332.3), new cjs.Rectangle(-1456.2,-17,2224.3,332.3), new cjs.Rectangle(-1466.2,-17,2234.4,332.2), new cjs.Rectangle(-1476.3,-17,2244.4,332.2), new cjs.Rectangle(-1486.3,-17,2254.4,332.2), new cjs.Rectangle(-1496.3,-17,2264.5,332.2), new cjs.Rectangle(-1506.3,-17,2274.5,332.1), new cjs.Rectangle(-1516.4,-17,2284.5,332.1), new cjs.Rectangle(-1526.4,-17,2294.6,332.1), new cjs.Rectangle(-1536.5,-17,2304.6,332.1), new cjs.Rectangle(-1546.5,-17,2314.6,332.1), new cjs.Rectangle(-1556.5,-17,2324.7,332), new cjs.Rectangle(-1566.6,-17,2334.7,332), new cjs.Rectangle(-1576.6,-17,2344.7,332), new cjs.Rectangle(-1586.6,-17,2354.8,332), new cjs.Rectangle(-1596.6,-17,2364.8,332), new cjs.Rectangle(-1606.7,-17,2374.8,331.9), new cjs.Rectangle(-1616.7,-17,2384.9,331.9), new cjs.Rectangle(-1626.8,-17,2394.9,331.9), new cjs.Rectangle(-1636.8,-17,2404.9,331.9), new cjs.Rectangle(-1646.8,-17,2415,331.8), new cjs.Rectangle(-1656.8,-17,2425,331.8), new cjs.Rectangle(-1666.9,-17,2435,331.8), new cjs.Rectangle(-1676.9,-17,2445.1,331.8), new cjs.Rectangle(-1687,-17,2455.1,331.8), new cjs.Rectangle(-1697,-17,2465.1,331.7), new cjs.Rectangle(-1707,-17,2475.2,331.7), new cjs.Rectangle(-1717,-17,2485.2,331.7), new cjs.Rectangle(-1727.1,-17,2495.2,331.7), new cjs.Rectangle(-1737.1,-17,2505.3,331.6), new cjs.Rectangle(-1747.1,-17,2515.3,331.6), new cjs.Rectangle(-1757.2,-17,2525.3,331.6), new cjs.Rectangle(-1767.2,-17,2535.4,331.6), new cjs.Rectangle(-1777.3,-17,2545.4,331.6), new cjs.Rectangle(-1787.3,-17,2555.4,331.5), new cjs.Rectangle(-1797.3,-17,2565.5,331.5), new cjs.Rectangle(-1807.3,-17,2575.5,331.5), new cjs.Rectangle(-1817.4,-17,2585.5,331.5), new cjs.Rectangle(632.2,-17,135.9,222), new cjs.Rectangle(-493.1,-17,1261.3,233.6), new cjs.Rectangle(-495.3,-17,1263.5,234.6), new cjs.Rectangle(-497.4,-17,1265.6,235.6), new cjs.Rectangle(-499.7,-17,1267.8,236.6), new cjs.Rectangle(-501.8,-17,1270,237.6), new cjs.Rectangle(-504,-17,1272.1,238.6), new cjs.Rectangle(-506.1,-17,1274.3,239.6), new cjs.Rectangle(-508.3,-17,1276.5,240.6), new cjs.Rectangle(-510.4,-17,1278.6,241.5), new cjs.Rectangle(-512.6,-17,1280.8,242.5), new cjs.Rectangle(-514.9,-17,1283,243.5), new cjs.Rectangle(-517,-17,1285.1,244.5), new cjs.Rectangle(-519.1,-17,1287.3,245.5), new cjs.Rectangle(-521.3,-17,1289.5,246.5), new cjs.Rectangle(-523.5,-17,1291.6,247.5), new cjs.Rectangle(-525.6,-17,1293.8,248.6), new cjs.Rectangle(-527.8,-17,1296,249.5), new cjs.Rectangle(-530,-17,1298.1,250.5), new cjs.Rectangle(-532.1,-17,1300.3,251.6), new cjs.Rectangle(-534.3,-17,1302.5,252.5), new cjs.Rectangle(-536.5,-17,1304.6,253.5), new cjs.Rectangle(-538.7,-17,1306.8,254.5), new cjs.Rectangle(-540.9,-17,1309,255.5), new cjs.Rectangle(-543,-17,1311.1,256.5), new cjs.Rectangle(-545.2,-17,1313.3,257.5), new cjs.Rectangle(-547.3,-17,1315.5,258.5), new cjs.Rectangle(-549.5,-17,1317.6,259.4), new cjs.Rectangle(-551.6,-17,1319.8,260.4), new cjs.Rectangle(-553.8,-17,1322,261.5), new cjs.Rectangle(-556,-17,1324.1,262.5), new cjs.Rectangle(-558.2,-17,1326.3,263.4), new cjs.Rectangle(-560.4,-17,1328.5,264.4), new cjs.Rectangle(-562.5,-17,1330.7,265.4), new cjs.Rectangle(-564.7,-17,1332.8,266.4), new cjs.Rectangle(-566.9,-17,1335,267.4), new cjs.Rectangle(-647.4,-475.6,1415.5,727.1), new cjs.Rectangle(-647.4,-458.5,1415.5,710.9), new cjs.Rectangle(-647.4,-441.3,1415.5,694.7), new cjs.Rectangle(-647.4,-424.2,1415.5,678.6), new cjs.Rectangle(-647.4,-407.1,1415.5,662.5), new cjs.Rectangle(-647.4,-390,1415.5,646.3), new cjs.Rectangle(-647.4,-372.8,1415.5,630.2), new cjs.Rectangle(-647.3,-355.6,1415.5,614), new cjs.Rectangle(-647.3,-338.5,1415.5,597.9), new cjs.Rectangle(-647.3,-321.4,1415.5,581.7), new cjs.Rectangle(-647.3,-304.2,1415.5,565.6), new cjs.Rectangle(-647.3,-287.1,1415.5,549.5), new cjs.Rectangle(-647.3,-269.9,1415.4,533.3), new cjs.Rectangle(-647.3,-252.8,1415.4,517.2), new cjs.Rectangle(-647.3,-235.6,1415.4,501), new cjs.Rectangle(-647.3,-218.5,1415.4,484.9), new cjs.Rectangle(-647.3,-201.4,1415.4,468.7), new cjs.Rectangle(-647.3,-184.2,1415.4,452.5), new cjs.Rectangle(-647.3,-167.1,1415.4,436.5), new cjs.Rectangle(-647.2,-149.9,1415.4,420.2), new cjs.Rectangle(-647.2,-132.8,1415.4,416.9), new cjs.Rectangle(-647.2,-115.6,1415.4,414.6), new cjs.Rectangle(-647.2,-98.5,1415.4,412.3), new cjs.Rectangle(-647.2,-81.4,1415.4,410), new cjs.Rectangle(-647.2,-64.2,1415.4,407.7), new cjs.Rectangle(-647.2,-47.1,1415.4,405.4), new cjs.Rectangle(-647.2,-30,1415.4,403.1), new cjs.Rectangle(-647.2,-17,1415.4,405), new cjs.Rectangle(-647.2,-17,1415.3,419.7), new cjs.Rectangle(-982.2,21.7,1046.3,457.4), new cjs.Rectangle(-970.8,21.7,1024.6,454.9), new cjs.Rectangle(-959.3,21.7,1002.9,452.5), new cjs.Rectangle(-947.9,21.7,981.3,450.1), new cjs.Rectangle(-936.4,21.7,959.5,447.7), new cjs.Rectangle(-925,21.7,937.9,445.3), new cjs.Rectangle(-913.5,21.7,916.2,442.8), new cjs.Rectangle(-902.1,21.7,894.5,440.7), new cjs.Rectangle(-890.6,21.7,872.8,438.7), new cjs.Rectangle(-879.1,21.7,851.1,436.6), new cjs.Rectangle(-867.7,21.7,829.5,434.4), new cjs.Rectangle(-856.3,21.7,807.7,432.3), new cjs.Rectangle(-844.8,21.7,786,430.3), new cjs.Rectangle(-833.4,21.7,764.4,428.2), new cjs.Rectangle(-821.9,21.7,742.6,426.1), new cjs.Rectangle(-810.5,21.7,721.1,424), new cjs.Rectangle(-799,21.7,699.3,421.8), new cjs.Rectangle(-787.6,21.7,677.6,419.8), new cjs.Rectangle(-776.1,21.7,655.9,417.7), new cjs.Rectangle(-764.7,21.7,634.2,415.6), new cjs.Rectangle(-753.3,21.7,612.6,413.5), new cjs.Rectangle(-741.8,21.7,590.9,411.4), new cjs.Rectangle(-730.3,21.7,569.2,409.3), new cjs.Rectangle(-718.9,21.7,547.4,407.2), new cjs.Rectangle(-707.4,21.7,525.7,405.1), new cjs.Rectangle(-696,21.7,504.1,403), new cjs.Rectangle(-684.6,21.7,482.4,400.9), new cjs.Rectangle(-673.1,21.7,460.8,398.8), new cjs.Rectangle(-661.6,21.7,439,396.7), new cjs.Rectangle(-650.2,21.7,422.9,395.7), rect=new cjs.Rectangle(-647.4,21.7,420.1,395.7), rect];


(lib.Symbol18 = function(mode,startPosition,loop) {
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
			var gamename = 'princesses-closet';
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
	this.instance = new lib.Symbol21();
	this.instance.parent = this;
	this.instance.setTransform(91.1,165,1,1,0,0,0,105.1,112.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.bigbutton = new lib.Symbol4copy5();
	this.bigbutton.parent = this;
	this.bigbutton.setTransform(-863.2,-12.5,1.005,1.005);

	this.timeline.addTween(cjs.Tween.get(this.bigbutton).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-852.3,-25.1,1909.9,1620.4);
p.frameBounds = [rect];


(lib.sudicon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 2
	this.snd1_mc = new lib.dff();
	this.snd1_mc.parent = this;
	this.snd1_mc.setTransform(-0.4,-1.7,1.488,1.488);

	this.timeline.addTween(cjs.Tween.get(this.snd1_mc).wait(2));

	// Layer 1
	this.instance = new lib.Symbol1copy8();
	this.instance.parent = this;
	this.instance.setTransform(6.1,-13.7,0.925,0.925);
	this.instance.shadow = new cjs.Shadow("#000000",0,0,4);

	this.instance_1 = new lib.Symbol1copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(6.1,-13.7,0.925,0.925);
	this.instance_1.shadow = new cjs.Shadow("#000000",0,0,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35.9,-66.5,83.4,108);
p.frameBounds = [rect, new cjs.Rectangle(-35.9,-61.5,84.4,103)];


(lib.replayBut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol1copy2();
	this.instance.parent = this;
	this.instance.setTransform(-4.5,-18.5,1.24,1.24);
	this.instance.shadow = new cjs.Shadow("#000000",0,0,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.4,-80.9,99,131);
p.frameBounds = [rect];


(lib.dd7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.instance = new lib.anadress1_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.67,0.67,0,0,0,57.5,133.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38.5,-89.4,77,178.9);
p.frameBounds = [rect, null];


(lib.dd6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag3NwQkIgDibgiQhYgUgpgLQARi8AXg4IA1iFIA5iVQAjhbgMg8QAChbAZguQAZgwAZhTQAZhTAIgWQAZg4AAhMIgQiuQgQipgmgvQglgvCWgmQCWgmCdAAQBiAAAbAKQAaAJAZAdQAZAcgFBCIgJCDQgDBAgqAwQgpAwApBAQAqBABpEOQBpEMgSBQQgRBRBgCgQBgChgCBEQgCBEhmgOQhmgOi7AvQhUAVgcAKQgwgChqgCg");
	mask.setTransform(0.4,9.4);

	// Layer 1
	this.instance = new lib.anadress2_1();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0,0.603,0.603,0,0,0,94.5,156);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57,-79,114,173.1);
p.frameBounds = [rect, null];


(lib.dd5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApdMuQgxgzAAgiQAAgHAHgJQAGgGABgMIAQABQAugcAmg9QAkg6AAgoQgyiLAAgGQAAgXAsgvQA0g4ATg5IAdhcQATg6AnhIQAohLArkAQAAg/grhdQgqhdAAhTQAAhwAZgpQAegyBaAAQB/AAAeBkQAMAyAHATQANAfAdAAQASgDARgHQAjgMAAgNQAAgEgIgfQgHgeAAgKQAAgVAZgTQAbgUAjAAQBFAAAdBKQAeBJgUBIQgUBHgDA8QgCA8gZA8QgZA8CIEhQCJEfBJBPQBKBQAAAaQAAAJgZAaQgZAbgZgfQgagfB2C6QAqBMgJA3QgJA2ktBbQhqAgidAAQkMAAmiheg");
	mask.setTransform(-0.9,-1.7);

	// Layer 1
	this.instance = new lib.anadress3_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0.1,0.536,0.536,0,0,0,115,162.1);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.6,-86.8,123.3,173.7);
p.frameBounds = [rect, null];


(lib.dd4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjYOAQhPAKi1gzQi0gyAAhZQCuiRB7mAQB6l9gJg9QgKg8hnjZQhmjYAAggQAAgJBug2QBvg3AYAAQAqAAAdBxQAQBAAFANQANAjARAAQBqAAAsgrQAdgcAKhDQALhJANgVQAbgrBpAAQBqABAXA+QAXA9AcBmQAbBng8AlQg7AkgYAsQgZArgmA7QgmA6ASBYQASBYAwBmQAvBlCRFDQCQFDAWBLQAVBKkyA0QkzA0i5ANQgQg+hPAJg");
	mask.setTransform(-2,-2.3);

	// Layer 1
	this.instance = new lib.anadress4_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.603,0.603,0,0,0,104.5,148.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63,-89.5,126,179.1);
p.frameBounds = [rect, null];


(lib.dd2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoLOzQilgyAAieQAAgvACgFQALgZA0AAIAEAEQBZhMCJmLQA3idApiTQAniNAAghQAAhig3hyQgdg8gJgYQgRgwAAgxQAAh8AjhBQArhRBhAAQA4AAAMBdQABBjABAIQBkhZA1grQB7hhAuAAQAaAAAOAnQAKAbAAAVQAAAGgFAhQgFAhAAAFQAAB+AlAwQAUAZAGATQAMAiAABFQAAApggBgQghBfAAAqQBuDYBuDnQDcHOAABHQAABZlyBFQiHAZiZAPQiEAOhGABQj+gBhigdg");
	mask.setTransform(-2.4,-0.7);

	// Layer 1
	this.instance = new lib.anadress6_1();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0,0.603,0.603,0,0,0,104.6,148.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63,-89.5,126,179.1);
p.frameBounds = [rect, null];


(lib.b1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.instance = new lib.Layer67_1();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0.1,0.454,0.454,0,0,0,50.6,106.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-27.9,-48.1,57.5,132.8);
p.frameBounds = [rect, null];


(lib.Group1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// elsa face
	this.instance = new lib.elsaface();
	this.instance.parent = this;
	this.instance.setTransform(-116,24.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// elsa bag
	this.elsabag = new lib.elsabag();
	this.elsabag.parent = this;
	this.elsabag.setTransform(285,438.7,1,1,0,0,0,152,67);

	this.timeline.addTween(cjs.Tween.get(this.elsabag).wait(1));

	// elsa shoe
	this.elsashoe = new lib.elsashoe();
	this.elsashoe.parent = this;
	this.elsashoe.setTransform(293.5,736.7,1,1,0,0,0,37.5,42);

	this.timeline.addTween(cjs.Tween.get(this.elsashoe).wait(1));

	// hand
	this.instance_1 = new lib.hand_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(288,348.7,1,1,0,0,0,124,72);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// elsa dress
	this.elsadress = new lib.elsadress();
	this.elsadress.parent = this;
	this.elsadress.setTransform(286.5,370.7,1,1,0,0,0,137.5,200);

	this.timeline.addTween(cjs.Tween.get(this.elsadress).wait(1));

	// body
	this.instance_2 = new lib.body_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(288,445.2,1,1,0,0,0,124,328.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.298)").s().p("AppDjQj/heAAiFQAAiED/heQEAhdFpAAQFpAAEBBdQD/BeAACEQAACFj/BeQkBBdlpABQlpgBkAhdg");
	this.shape.setTransform(292.6,753.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(164,24.7,262,761);
p.frameBounds = [rect];


(lib.sprite6148copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		exportRoot.sparklesSound();
	}
	this.frame_27 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(26).call(this.frame_27).wait(1));

	// JS
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(-110,-280,1,1,0,0,0,29.6,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(27));

	// Layer 237
	this.instance_1 = new lib.q();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-114.4,-147.1,0.272,0.272,-68.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({_off:false},0).wait(8));

	// Layer 232
	this.instance_2 = new lib.q();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-103.5,-149.6,0.272,0.272,-68.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).wait(8));

	// Layer 227
	this.instance_3 = new lib.q();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-106.2,-228.9,0.63,0.63,-68.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).wait(9));

	// Layer 222
	this.instance_4 = new lib.q();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-112.1,-180.8,0.63,0.63,-68.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).wait(9));

	// Layer 217
	this.instance_5 = new lib.q();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-103.5,-140.5,0.272,0.272,-68.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(18).to({_off:false},0).wait(10));

	// Layer 212
	this.instance_6 = new lib.q();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-89.6,-181.1,0.272,0.272,-68.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(18).to({_off:false},0).wait(10));

	// Layer 207
	this.instance_7 = new lib.q();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-94.4,-177.3,0.272,0.272,-68.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(17).to({_off:false},0).wait(11));

	// Layer 202
	this.instance_8 = new lib.q();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-112,-153.7,0.272,0.272,-68.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(17).to({_off:false},0).wait(11));

	// Layer 197
	this.instance_9 = new lib.q();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-111.1,-169.1,0.272,0.272,-68.2);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(17).to({_off:false},0).wait(11));

	// Layer 192
	this.instance_10 = new lib.q();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-114.4,-136.9,0.272,0.272,-68.2);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(16).to({_off:false},0).wait(12));

	// Layer 187
	this.instance_11 = new lib.q();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-97,-167.3,0.272,0.272,-68.2);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(16).to({_off:false},0).wait(12));

	// Layer 182
	this.instance_12 = new lib.q();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-101.8,-185.5,0.272,0.272,-68.2);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(16).to({_off:false},0).wait(12));

	// Layer 177
	this.instance_13 = new lib.q();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-112,-167.3,0.272,0.272,-68.2);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(15).to({_off:false},0).wait(13));

	// Layer 172
	this.instance_14 = new lib.q();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-103.5,-173.9,0.272,0.272,-68.2);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(15).to({_off:false},0).wait(13));

	// Layer 167
	this.instance_15 = new lib.q();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-112,-193.5,0.272,0.272,-68.2);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(15).to({_off:false},0).wait(13));

	// Layer 162
	this.instance_16 = new lib.q();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-118.7,-216.5,0.63,0.63,-68.2);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(14).to({_off:false},0).wait(14));

	// Layer 157
	this.instance_17 = new lib.q();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-131.1,-204.9,0.63,0.63,-68.2);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(14).to({_off:false},0).wait(14));

	// Layer 147
	this.instance_18 = new lib.q();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-123.6,-189.8,0.272,0.272,-68.2);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(13).to({_off:false},0).wait(15));

	// Layer 137
	this.instance_19 = new lib.q();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-114.4,-170.7,0.272,0.272,-68.2);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(12).to({_off:false},0).wait(16));

	// Layer 127
	this.instance_20 = new lib.q();
	this.instance_20.parent = this;
	this.instance_20.setTransform(-94.4,-208,0.272,0.272,-68.2);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(11).to({_off:false},0).wait(17));

	// Layer 122
	this.instance_21 = new lib.q();
	this.instance_21.parent = this;
	this.instance_21.setTransform(-110.4,-200.8,0.712,0.712,-68.2);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(10).to({_off:false},0).wait(18));

	// Layer 117
	this.instance_22 = new lib.q();
	this.instance_22.parent = this;
	this.instance_22.setTransform(-124.2,-190.8,0.712,0.712,-68.2);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(10).to({_off:false},0).wait(18));

	// Layer 112
	this.instance_23 = new lib.q();
	this.instance_23.parent = this;
	this.instance_23.setTransform(-110,-165.2,0.272,0.272,-68.2);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(9).to({_off:false},0).wait(19));

	// Layer 107
	this.instance_24 = new lib.q();
	this.instance_24.parent = this;
	this.instance_24.setTransform(-116.5,-143.8,0.272,0.272,-68.2);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(9).to({_off:false},0).wait(19));

	// Layer 97
	this.instance_25 = new lib.q();
	this.instance_25.parent = this;
	this.instance_25.setTransform(-122.2,-146.9,0.272,0.272,-68.2);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(9).to({_off:false},0).wait(19));

	// Layer 92
	this.instance_26 = new lib.q();
	this.instance_26.parent = this;
	this.instance_26.setTransform(-114.4,-153.5,0.272,0.272,-68.2);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(8).to({_off:false},0).wait(20));

	// Layer 87
	this.instance_27 = new lib.q();
	this.instance_27.parent = this;
	this.instance_27.setTransform(-124.9,-143.5,0.272,0.272,-68.2);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(7).to({_off:false},0).wait(21));

	// Layer 62
	this.instance_28 = new lib.q();
	this.instance_28.parent = this;
	this.instance_28.setTransform(-126.8,-143.7,0.54,0.54,-68.2);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(5).to({_off:false},0).wait(23));

	// Layer 37
	this.instance_29 = new lib.q();
	this.instance_29.parent = this;
	this.instance_29.setTransform(-114.4,-133,0.272,0.272,-68.2);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(3).to({_off:false},0).wait(25));

	// Layer 32
	this.instance_30 = new lib.q();
	this.instance_30.parent = this;
	this.instance_30.setTransform(-117,-118.8,0.272,0.272,-68.2);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(2).to({_off:false},0).wait(26));

	// Layer 22
	this.instance_31 = new lib.q();
	this.instance_31.parent = this;
	this.instance_31.setTransform(-127.3,-108.3,0.272,0.272,-68.2);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(2).to({_off:false},0).wait(26));

	// Layer 17
	this.instance_32 = new lib.q();
	this.instance_32.parent = this;
	this.instance_32.setTransform(-123.9,-108.4,0.272,0.272,-68.2);
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(1).to({_off:false},0).wait(27));

	// Layer 12
	this.instance_33 = new lib.q();
	this.instance_33.parent = this;
	this.instance_33.setTransform(-118.4,-106.3,0.272,0.272,-68.2);
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(1).to({_off:false},0).wait(27));

	// Layer 7
	this.instance_34 = new lib.q();
	this.instance_34.parent = this;
	this.instance_34.setTransform(-115.3,-110.2,0.272,0.272,-68.2);
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(1).to({_off:false},0).wait(27));

	// Layer 2
	this.instance_35 = new lib.q();
	this.instance_35.parent = this;
	this.instance_35.setTransform(-112.7,-125.4,0.272,0.272,-68.2);
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(1).to({_off:false},0).wait(27));

	// Layer 1
	this.instance_36 = new lib.shape6147("synched",0);
	this.instance_36.parent = this;
	this.instance_36.setTransform(-112.7,-125.4,0.096,0.192);
	this.instance_36.alpha = 0;
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(1).to({_off:false},0).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-139.6,-300,59.3,40);
p.frameBounds = [rect, rect=new cjs.Rectangle(-147.7,-175.4,70,100), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-147.7,-194.3,70,118.9), rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-147.7,-197.2,70,121.7), rect, rect, rect, rect, rect, rect, rect, rect];


(lib.Effect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		exportRoot.sparklesSound();
	}
	this.frame_27 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(26).call(this.frame_27).wait(1));

	// JS
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(-110,-280,1,1,0,0,0,29.6,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(27));

	// Layer 237
	this.instance_1 = new lib.q();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-114.4,-147.1,0.272,0.272,-68.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({_off:false},0).wait(8));

	// Layer 232
	this.instance_2 = new lib.q();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-103.5,-149.6,0.272,0.272,-68.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).wait(8));

	// Layer 227
	this.instance_3 = new lib.q();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-106.2,-228.9,0.63,0.63,-68.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).wait(9));

	// Layer 222
	this.instance_4 = new lib.q();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-112.1,-180.8,0.63,0.63,-68.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).wait(9));

	// Layer 217
	this.instance_5 = new lib.q();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-103.5,-140.5,0.272,0.272,-68.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(18).to({_off:false},0).wait(10));

	// Layer 212
	this.instance_6 = new lib.q();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-89.6,-181.1,0.272,0.272,-68.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(18).to({_off:false},0).wait(10));

	// Layer 207
	this.instance_7 = new lib.q();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-94.4,-177.3,0.272,0.272,-68.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(17).to({_off:false},0).wait(11));

	// Layer 202
	this.instance_8 = new lib.q();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-112,-153.7,0.272,0.272,-68.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(17).to({_off:false},0).wait(11));

	// Layer 197
	this.instance_9 = new lib.q();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-111.1,-169.1,0.272,0.272,-68.2);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(17).to({_off:false},0).wait(11));

	// Layer 192
	this.instance_10 = new lib.q();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-114.4,-136.9,0.272,0.272,-68.2);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(16).to({_off:false},0).wait(12));

	// Layer 187
	this.instance_11 = new lib.q();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-97,-167.3,0.272,0.272,-68.2);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(16).to({_off:false},0).wait(12));

	// Layer 182
	this.instance_12 = new lib.q();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-101.8,-185.5,0.272,0.272,-68.2);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(16).to({_off:false},0).wait(12));

	// Layer 177
	this.instance_13 = new lib.q();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-112,-167.3,0.272,0.272,-68.2);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(15).to({_off:false},0).wait(13));

	// Layer 172
	this.instance_14 = new lib.q();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-103.5,-173.9,0.272,0.272,-68.2);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(15).to({_off:false},0).wait(13));

	// Layer 167
	this.instance_15 = new lib.q();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-112,-193.5,0.272,0.272,-68.2);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(15).to({_off:false},0).wait(13));

	// Layer 162
	this.instance_16 = new lib.q();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-118.7,-216.5,0.63,0.63,-68.2);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(14).to({_off:false},0).wait(14));

	// Layer 157
	this.instance_17 = new lib.q();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-131.1,-204.9,0.63,0.63,-68.2);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(14).to({_off:false},0).wait(14));

	// Layer 147
	this.instance_18 = new lib.q();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-123.6,-189.8,0.272,0.272,-68.2);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(13).to({_off:false},0).wait(15));

	// Layer 137
	this.instance_19 = new lib.q();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-114.4,-170.7,0.272,0.272,-68.2);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(12).to({_off:false},0).wait(16));

	// Layer 127
	this.instance_20 = new lib.q();
	this.instance_20.parent = this;
	this.instance_20.setTransform(-94.4,-208,0.272,0.272,-68.2);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(11).to({_off:false},0).wait(17));

	// Layer 122
	this.instance_21 = new lib.q();
	this.instance_21.parent = this;
	this.instance_21.setTransform(-110.4,-200.8,0.712,0.712,-68.2);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(10).to({_off:false},0).wait(18));

	// Layer 117
	this.instance_22 = new lib.q();
	this.instance_22.parent = this;
	this.instance_22.setTransform(-124.2,-190.8,0.712,0.712,-68.2);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(10).to({_off:false},0).wait(18));

	// Layer 112
	this.instance_23 = new lib.q();
	this.instance_23.parent = this;
	this.instance_23.setTransform(-110,-165.2,0.272,0.272,-68.2);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(9).to({_off:false},0).wait(19));

	// Layer 107
	this.instance_24 = new lib.q();
	this.instance_24.parent = this;
	this.instance_24.setTransform(-116.5,-143.8,0.272,0.272,-68.2);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(9).to({_off:false},0).wait(19));

	// Layer 97
	this.instance_25 = new lib.q();
	this.instance_25.parent = this;
	this.instance_25.setTransform(-122.2,-146.9,0.272,0.272,-68.2);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(9).to({_off:false},0).wait(19));

	// Layer 92
	this.instance_26 = new lib.q();
	this.instance_26.parent = this;
	this.instance_26.setTransform(-114.4,-153.5,0.272,0.272,-68.2);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(8).to({_off:false},0).wait(20));

	// Layer 87
	this.instance_27 = new lib.q();
	this.instance_27.parent = this;
	this.instance_27.setTransform(-124.9,-143.5,0.272,0.272,-68.2);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(7).to({_off:false},0).wait(21));

	// Layer 62
	this.instance_28 = new lib.q();
	this.instance_28.parent = this;
	this.instance_28.setTransform(-126.8,-143.7,0.54,0.54,-68.2);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(5).to({_off:false},0).wait(23));

	// Layer 37
	this.instance_29 = new lib.q();
	this.instance_29.parent = this;
	this.instance_29.setTransform(-114.4,-133,0.272,0.272,-68.2);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(3).to({_off:false},0).wait(25));

	// Layer 32
	this.instance_30 = new lib.q();
	this.instance_30.parent = this;
	this.instance_30.setTransform(-117,-118.8,0.272,0.272,-68.2);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(2).to({_off:false},0).wait(26));

	// Layer 22
	this.instance_31 = new lib.q();
	this.instance_31.parent = this;
	this.instance_31.setTransform(-127.3,-108.3,0.272,0.272,-68.2);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(2).to({_off:false},0).wait(26));

	// Layer 17
	this.instance_32 = new lib.q();
	this.instance_32.parent = this;
	this.instance_32.setTransform(-123.9,-108.4,0.272,0.272,-68.2);
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(1).to({_off:false},0).wait(27));

	// Layer 12
	this.instance_33 = new lib.q();
	this.instance_33.parent = this;
	this.instance_33.setTransform(-118.4,-106.3,0.272,0.272,-68.2);
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(1).to({_off:false},0).wait(27));

	// Layer 7
	this.instance_34 = new lib.q();
	this.instance_34.parent = this;
	this.instance_34.setTransform(-115.3,-110.2,0.272,0.272,-68.2);
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(1).to({_off:false},0).wait(27));

	// Layer 2
	this.instance_35 = new lib.q();
	this.instance_35.parent = this;
	this.instance_35.setTransform(-112.7,-125.4,0.272,0.272,-68.2);
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(1).to({_off:false},0).wait(27));

	// Layer 1
	this.instance_36 = new lib.shape6147("synched",0);
	this.instance_36.parent = this;
	this.instance_36.setTransform(-112.7,-125.4,0.096,0.192);
	this.instance_36.alpha = 0;
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(1).to({_off:false},0).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-139.6,-300,59.3,40);
p.frameBounds = [rect, rect=new cjs.Rectangle(-147.7,-175.4,70,100), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-147.7,-194.3,70,118.9), rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-147.7,-197.2,70,121.7), rect, rect, rect, rect, rect, rect, rect, rect];


(lib.StylishMommytoBe_flaTimeline_176 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_28 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(28).call(this.frame_28).wait(1));

	// Layer 7
	this.instance = new lib.StylishMommytoBe_flaTimeline_114_1();
	this.instance.parent = this;
	this.instance.setTransform(580.1,74.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({_off:true},22).wait(4));

	// Layer 4
	this.instance_1 = new lib.sprite519copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(369.5,-573.8,1.037,1.037);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-382.6},2).wait(1).to({y:-287},0).wait(22).to({y:-573.8},3).wait(1));

	// Layer 1
	this.instance_2 = new lib.sprite517copy3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(369.5,-1.7,1.037,1.037);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-191.9},2).wait(1).to({y:-287},0).wait(22).to({y:-1.7},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(181.8,-600.7,1114.2,1278.2);
p.frameBounds = [rect, new cjs.Rectangle(181.8,-505.1,1114.2,1087.4), new cjs.Rectangle(181.8,-409.6,1114.2,896.8), rect=new cjs.Rectangle(181.8,-368.5,1114.2,760.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(181.8,-314,1114.2,706.1), new cjs.Rectangle(181.8,-409.5,1114.2,896.8), new cjs.Rectangle(181.8,-505.1,1114.2,1087.4), new cjs.Rectangle(181.8,-600.7,1114.2,1278.2)];


(lib.StylishMommytoBe_flaTimeline_176_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_28 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(28).call(this.frame_28).wait(1));

	// Layer 7
	this.instance = new lib.StylishMommytoBe_flaTimeline_114_2();
	this.instance.parent = this;
	this.instance.setTransform(763.2,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({_off:true},22).wait(4));

	// Layer 4
	this.instance_1 = new lib.sprite519_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(369.5,-573.8,1.037,1.037);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-382.6},2).wait(1).to({y:-287},0).wait(22).to({y:-573.8},3).wait(1));

	// Layer 1
	this.instance_2 = new lib.sprite517copy2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(369.5,-1.7,1.037,1.037);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-191.9},2).wait(1).to({y:-287},0).wait(22).to({y:-1.7},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(367.6,-577,771.6,1149.5);
p.frameBounds = [rect, new cjs.Rectangle(367.6,-481.3,771.6,958.7), new cjs.Rectangle(367.6,-385.8,771.6,768.1), rect=new cjs.Rectangle(367.6,-442.9,771.6,730.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(367.6,-290.2,771.6,577.4), new cjs.Rectangle(367.6,-385.8,771.6,768.1), new cjs.Rectangle(367.6,-481.3,771.6,958.7), new cjs.Rectangle(367.6,-577,771.6,1149.5)];


(lib.StylishMommytoBe_flaTimeline_176_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_28 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(28).call(this.frame_28).wait(1));

	// Layer 7
	this.instance = new lib.StylishMommytoBe_flaTimeline_114();
	this.instance.parent = this;
	this.instance.setTransform(763.2,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({_off:true},22).wait(4));

	// Layer 4
	this.instance_1 = new lib.sprite519();
	this.instance_1.parent = this;
	this.instance_1.setTransform(369.5,-573.8,1.037,1.037);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-382.6},2).wait(1).to({y:-287},0).wait(22).to({y:-573.8},3).wait(1));

	// Layer 1
	this.instance_2 = new lib.sprite517copy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(369.5,-1.7,1.037,1.037);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-191.9},2).wait(1).to({y:-287},0).wait(22).to({y:-1.7},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(367.6,-577,771.6,1149.5);
p.frameBounds = [rect, new cjs.Rectangle(367.6,-481.3,771.6,958.7), new cjs.Rectangle(367.6,-385.8,771.6,768.1), rect=new cjs.Rectangle(367.6,-442.9,771.6,730.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(367.6,-290.2,771.6,577.4), new cjs.Rectangle(367.6,-385.8,771.6,768.1), new cjs.Rectangle(367.6,-481.3,771.6,958.7), new cjs.Rectangle(367.6,-577,771.6,1149.5)];


(lib.Group1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance_3 = new lib.Symbol17();
	this.instance_3.parent = this;
	this.instance_3.setTransform(288.6,138.2,1,1,0,0,0,88.5,101.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// ana shoe
	this.arielshoe = new lib.anashoecopy();
	this.arielshoe.parent = this;
	this.arielshoe.setTransform(278,640,1,1,0,0,0,32,36);

	this.timeline.addTween(cjs.Tween.get(this.arielshoe).wait(1));

	// ana bag
	this.bag = new lib.anabag();
	this.bag.parent = this;
	this.bag.setTransform(265.5,393.5,1,1,0,0,0,127.5,64.5);

	this.timeline.addTween(cjs.Tween.get(this.bag).wait(1));

	// hand
	this.instance_4 = new lib.hand_2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(272.6,315.4,1,1,0,0,0,104,60.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// ana dress
	this.dress = new lib.anadress();
	this.dress.parent = this;
	this.dress.setTransform(271,325.9,1,1,0,0,0,115,164.5);

	this.timeline.addTween(cjs.Tween.get(this.dress).wait(1));

	// body
	this.instance_5 = new lib.body_2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(273,395,1,1,0,0,0,104,276);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Layer 5
	this.instance_6 = new lib.suvita1pngcopy();
	this.instance_6.parent = this;
	this.instance_6.setTransform(295.8,208.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Layer 4
	this.instance_7 = new lib.suvitapngcopy();
	this.instance_7.parent = this;
	this.instance_7.setTransform(349,192.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.298)").s().p("AoIDjQjXheAAiFQAAiEDXheQDYheEwAAQExAADYBeQDXBeAACEQAACFjXBeQjYBdkxAAQkwAAjYhdg");
	this.shape_1.setTransform(282.8,655.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81,36.7,508,650.8);
p.frameBounds = [rect];


// stage content:
(lib.PrincessCloset = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{level1:1,preloader:0});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
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
		
		}
		
		function rand(min, max, interval) {
			if (typeof (interval) === 'undefined') interval = 1;
			var r = Math.floor(Math.random() * (max - min + interval) / interval);
			return r * interval + min;
		}
		// -- << more games
		
		
		
		/*function poza1function(event) {
			exportRoot.poza1link();
		}*/
		
		createjs.Touch.enable(stage);
		
		this.showAds = function(){
					
						exportRoot.stopSnd();
							exportRoot.removeSnd();
							window[preroll.config.loaderObjectName].refetchAd();
						
				}
		
		
		this.moregamesfunction = function () {
			exportRoot.stopSnd();
			var gamename = 'princesses-closet';
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
			var gamename = 'princesses-closet';
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
			var gamename = 'princesses-closet';
			var mainwebsite = 'https://www.azgametv.com/game/3805/Elsa_And_Rapunzel_Selfie_Time.html';
			var stringHost = detect_parent();
		
			if (stringHost == "rosy") {
				stringHost = window.location.hostname;
			}
			var urlsite = mainwebsite + "?utm_source=" + stringHost + "&utm_medium=html5game&utm_content=Elsa_And_Rapunzel_Selfie_Time&utm_campaign=" + gamename;
			realClick(urlsite);
		}
		this.poza2link = function () {
			exportRoot.stopSnd();
			var gamename = 'princesses-closet';
			var mainwebsite = 'https://www.azgametv.com/game/4212/BFF_Selfie_Time.html';
			var stringHost = detect_parent();
		
			if (stringHost == "rosy") {
				stringHost = window.location.hostname;
			}
			var urlsite = mainwebsite + "?utm_source=" + stringHost + "&utm_medium=html5game&utm_content=BFF_Selfie_Time&utm_campaign=" + gamename;
			realClick(urlsite);
		}
		
		
		
		
		
		
		
		
		this.addthegame = function () {
			window.open("http://www.playrosy.com/ourgames.html?thegame=rapunzel-and-flynn-happy-family", "_blank");
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
		exportRoot.fullscreenBtn.addEventListener("mousedown", toggleFullScreen);
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
		this.goanim = function(){
			this.animatie.gotoAndPlay(1);
		}
	}
	this.frame_1 = function() {
		this.stop();
		
		this.animStars = function(){
			this.mcEffect.gotoAndPlay(1);
		}
		this.animStars1 = function(){
			this.star.gotoAndPlay(1);
		}
		
		
		var frequency = 10;
		stage.enableMouseOver(frequency);
		this.logo.cursor = "pointer";
		this.moregames.cursor = "pointer";
		this.nextlevel.cursor = "pointer";
		var currentTargetNumChildren;
		var buttonsArray = [this.logo,this.moregames,this.nextlevel,this.dress1,this.dress2,this.dress3,this.dress4,this.dress5,this.dress6,this.dress7
		,this.bag1,this.bag2,this.bag3,this.bag4,this.bag5,this.shoe1,this.shoe2,this.shoe3,this.shoe4,this.shoe5];
		var buttonsArrayString = ["logo","moregames","nextlevel","dress1","dress2","dress3","dress4","dress5","dress6","dress7","bag1","bag2","bag3","bag4","bag5","shoe1","shoe2","shoe3","shoe4","shoe5"];
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
				//exportRoot.animInterLevels = "interlevelscreen";
				//exportRoot.interlevel.visible = true;
				//exportRoot.fadeInElement(exportRoot.interlevel);
				exportRoot.goanim();
				this.gotoAndStop(2);
				
			}
		/*	if(event.currentTarget.name.indexOf("moregames") > -1){
				exportRoot.moregamesfunction();
			}
			if(event.currentTarget.name.indexOf("logo") > -1){
				exportRoot.logofunction();
			}*/
			if(event.currentTarget.name.indexOf("dress") > -1){
				this.changeClothes(event.currentTarget.name , "dress");
				this.animStars();
				
			}
			if(event.currentTarget.name.indexOf("bag") > -1){
				this.changebags(event.currentTarget.name , "bag");
				this.animStars();
			}
			if(event.currentTarget.name.indexOf("shoe") > -1){
				this.changeshoes(event.currentTarget.name , "arielshoe");
				this.animStars();
				
				
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
		/*this.sortDresses = function(){
		
		}*/
		function rand(min,max,interval)
		{
		    if (typeof(interval)==='undefined') interval = 1;
		    var r = Math.floor(Math.random()*(max-min+interval)/interval);
		    return r*interval+min;
		}
		this.changeClothes = function(arg,arg2){
				switch(arg2){
					case "dress":
						exportRoot.ariel.dress.gotoAndStop(arg);
						
						break;
						
				}	
				
		}
		
		this.changeshoes = function(arg){
		exportRoot.ariel.arielshoe.gotoAndStop(arg);
			
			
		
		}
		this.changebags = function(arg){
		exportRoot.ariel.bag.gotoAndStop(arg);
		
		}
		
		
		
		/*this.animatieEliza = function(arg){
			 createjs.Tween.get(arg)
					 .to({y:4}, 700 , createjs.Ease.getPowInOut(2.2))
					 .to({y:7}, 700 , createjs.Ease.getPowInOut(2.2));
		}
		this.animatieEliza(exportRoot.level1.eliza);*/
	}
	this.frame_2 = function() {
		var frequency = 10;
		stage.enableMouseOver(frequency);
		this.moregames.cursor = "pointer";
		this.poza2.cursor = "pointer";
		this.logo.cursor = "pointer";
		this.nextlevel.cursor = "pointer";
		//this.addthegame.cursor = "pointer";
		var buttonsArray = [this.nextlevel,this.moregames,this.logo,this.poza2];
		var buttonsArrayString = ["nextlevel","logo","moregames","poza2"];
		var buttonClicked = "";
		for(var i=0; i<buttonsArray.length;i++){
			buttonsArray[i].name = buttonsArrayString[i];
			buttonsArray[i].addEventListener("mouseover", hoverButtons.bind(this));
			buttonsArray[i].addEventListener("mouseout", houtButtons.bind(this));
		}
		
		function hoverButtons(event) {
			event.currentTarget.alpha = .8;
			event.currentTarget.shadow = new createjs.Shadow("#000000", 4, 4, 10);
		}
		
		function houtButtons(event) {
			event.currentTarget.alpha = 1;
			event.currentTarget.shadow = new createjs.Shadow("#000000", 0, 0, 0);
		}
		
		
		this.nextlevel.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.gotoAndStop(3);
			//gdApi.showBanner();
			if(this.currentFrame == 3){
				
			}
			
		}
		
		this.moregames.addEventListener("click", moregamesfunctionhere.bind(this));
		
		function moregamesfunctionhere(event) {
			exportRoot.moregamesfunction();
		}
		
		
		this.logo.addEventListener("click", logofunctionhere.bind(this));
		function logofunctionhere(event) {
			exportRoot.logofunction();
		}
		this.poza2.addEventListener("click", poza2function.bind(this));
		function poza2function(event) {
			exportRoot.poza2link();
		}
	}
	this.frame_3 = function() {
		this.stop();
		
		this.animStars1 = function(){
			this.mcEffect1.gotoAndPlay(1);
		}
		
		
		var frequency = 10;
		stage.enableMouseOver(frequency);
		this.nextlevel.cursor = "pointer";
		var currentTargetNumChildren;
		var buttonsArray = [this.nextlevel,this.dress11,this.dress22,this.dress33,this.dress44,this.dress55,this.dress66,this.dress77
		,this.bag11,this.bag22,this.bag33,this.bag44,this.bag55,this.shoe11,this.shoe22,this.shoe33,this.shoe44,this.shoe55];
		var buttonsArrayString = ["nextlevel","dress11","dress22","dress33","dress44","dress55","dress66","dress77","bag11","bag22","bag33","bag44","bag55","shoe11","shoe22","shoe33","shoe44","shoe55"];
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
				//exportRoot.animInterLevels = "interlevelscreen";
				//exportRoot.interlevel.visible = true;
				//exportRoot.fadeInElement(exportRoot.interlevel);
				exportRoot.goanim();
				exportRoot.gotoAndStop(4);
				
			}
		/*	if(event.currentTarget.name.indexOf("moregames") > -1){
				exportRoot.moregamesfunction();
			}
			if(event.currentTarget.name.indexOf("logo") > -1){
				exportRoot.logofunction();
			}*/
			if(event.currentTarget.name.indexOf("dress") > -1){
				this.changeClothes(event.currentTarget.name , "elsadress");
				this.animStars1();
				
			}
			if(event.currentTarget.name.indexOf("bag") > -1){
				this.changebags(event.currentTarget.name , "elsabag");
				this.animStars1();
			}
			if(event.currentTarget.name.indexOf("shoe") > -1){
				this.changeshoes(event.currentTarget.name , "elsashoe");
				this.animStars1();
				
				
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
		/*this.sortDresses = function(){
		
		}*/
		function rand(min,max,interval)
		{
		    if (typeof(interval)==='undefined') interval = 1;
		    var r = Math.floor(Math.random()*(max-min+interval)/interval);
		    return r*interval+min;
		}
		this.changeClothes = function(arg){
				
						exportRoot.elsa.elsadress.gotoAndStop(arg);
						
					
						
				}	
				
		
		
		this.changeshoes = function(arg){
		exportRoot.elsa.elsashoe.gotoAndStop(arg);
			
			
		
		}
		this.changebags = function(arg){
		exportRoot.elsa.elsabag.gotoAndStop(arg);
		
		}
		
			
		
		/*this.animatieEliza = function(arg){
			 createjs.Tween.get(arg)
					 .to({y:4}, 700 , createjs.Ease.getPowInOut(2.2))
					 .to({y:7}, 700 , createjs.Ease.getPowInOut(2.2));
		}
		this.animatieEliza(exportRoot.level1.eliza);*/
	}
	this.frame_4 = function() {
		var frequency = 10;
		stage.enableMouseOver(frequency);
		this.moregames.cursor = "pointer";
		this.poza3.cursor = "pointer";
		this.poza1.cursor = "pointer";
		this.replayBut.cursor = "pointer";
		//this.addthegame.cursor = "pointer";
		this.stop();
		
		var buttonsArray = [this.replayBut,this.poza1,this.poza3];
		var buttonsArrayString = ["replay","poza1","poza3"];
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
		
		
		
		
		
		
		this.replayBut.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_2()
		{
		location.reload();
		}
		
		this.poza3.addEventListener("click", poza3function.bind(this));
		function poza3function(event) {
			exportRoot.poza2link();
		}
		this.poza1.addEventListener("click", poza1function.bind(this));
		function poza1function(event) {
			exportRoot.poza1link();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// preloader
	this.preloader = new lib.Symbol18();
	this.preloader.parent = this;
	this.preloader.setTransform(866.7,39.6,1,1,0,0,0,16.5,16.5);

	this.timeline.addTween(cjs.Tween.get(this.preloader).to({_off:true},1).wait(4));

	// animatie
	this.animatie = new lib.StylishMommytoBe_flaTimeline_176();
	this.animatie.parent = this;
	this.animatie.setTransform(-406.6,284,1.049,1.049,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.animatie).wait(5));

	// Layer 2
	this.instance = new lib.Symbol13();
	this.instance.parent = this;
	this.instance.setTransform(482.7,94.5,0.695,0.695,0,0,0,67.5,64.3);

	this.logo = new lib.Symbol4();
	this.logo.parent = this;
	this.logo.setTransform(399,95.4,0.708,0.708,0,0,0,134,81);

	this.moregames = new lib.playbbutcopy3();
	this.moregames.parent = this;
	this.moregames.setTransform(405.9,498.7,1.483,1.483);

	this.poza2 = new lib.Symbol102copy();
	this.poza2.parent = this;
	this.poza2.setTransform(404.5,322.2,0.853,0.853,0,0,0,100,100.1);

	this.instance_1 = new lib.Tween7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(400.1,337.4);

	this.butoane = new lib.Symbol5();
	this.butoane.parent = this;
	this.butoane.setTransform(615.6,526.4,1,1,0,0,0,183.3,69.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.poza2},{t:this.moregames},{t:this.logo},{t:this.instance}]},2).to({state:[{t:this.butoane}]},1).to({state:[]},1).wait(1));

	// butoane
	this.sndBtn = new lib.sudicon();
	this.sndBtn.parent = this;
	this.sndBtn.setTransform(752.5,37.4,0.955,0.955);

	this.fullscreenBtn = new lib.fullscreenbut();
	this.fullscreenBtn.parent = this;
	this.fullscreenBtn.setTransform(724.9,38.7,1,1,0,0,0,52,9.7);

	this.butoane_1 = new lib.Symbol5();
	this.butoane_1.parent = this;
	this.butoane_1.setTransform(615.6,530.4,1,1,0,0,0,183.3,69.7);

	this.nextlevel = new lib.Symbol1copy5();
	this.nextlevel.parent = this;
	this.nextlevel.setTransform(377.6,522,0.943,0.943);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fullscreenBtn},{t:this.sndBtn,p:{regX:0,x:752.5,y:37.4}}]}).to({state:[{t:this.nextlevel,p:{scaleX:0.943,scaleY:0.943,x:377.6,y:522}},{t:this.sndBtn,p:{regX:11.6,x:768.4,y:36.3}},{t:this.butoane_1}]},1).to({state:[{t:this.nextlevel,p:{scaleX:0.674,scaleY:0.674,x:755.3,y:543.8}},{t:this.sndBtn,p:{regX:0,x:756.4,y:36.3}}]},1).to({state:[{t:this.nextlevel,p:{scaleX:0.816,scaleY:0.816,x:370.9,y:518.3}},{t:this.sndBtn,p:{regX:0,x:754.8,y:43.3}}]},1).to({state:[{t:this.sndBtn,p:{regX:0,x:754.8,y:43.3}}]},1).wait(1));

	// haine
	this.bag4 = new lib.bb4();
	this.bag4.parent = this;
	this.bag4.setTransform(320.7,215,0.721,0.721);
	this.bag4.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);

	this.bag3 = new lib.bb3();
	this.bag3.parent = this;
	this.bag3.setTransform(273.4,222.5,0.721,0.721);
	this.bag3.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);

	this.bag2 = new lib.bb2();
	this.bag2.parent = this;
	this.bag2.setTransform(341.9,287.4,0.721,0.721);
	this.bag2.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);

	this.bag1 = new lib.bb1();
	this.bag1.parent = this;
	this.bag1.setTransform(366.5,222,0.721,0.721);
	this.bag1.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);

	this.bag5 = new lib.bb5();
	this.bag5.parent = this;
	this.bag5.setTransform(271.7,283.8,0.721,0.721);

	this.shoe5 = new lib.ss6();
	this.shoe5.parent = this;
	this.shoe5.setTransform(303.6,404.7,0.844,0.844);
	this.shoe5.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);

	this.shoe4 = new lib.ss5();
	this.shoe4.parent = this;
	this.shoe4.setTransform(360.7,405.9,0.844,0.844);
	this.shoe4.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);

	this.shoe3 = new lib.ss3();
	this.shoe3.parent = this;
	this.shoe3.setTransform(258,405.6,0.81,0.81);
	this.shoe3.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);

	this.shoe2 = new lib.ss2();
	this.shoe2.parent = this;
	this.shoe2.setTransform(330,345.9,0.829,0.829);
	this.shoe2.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);

	this.shoe1 = new lib.ss1();
	this.shoe1.parent = this;
	this.shoe1.setTransform(275.6,346.8,0.887,0.887);
	this.shoe1.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);

	this.dress1 = new lib.anadress7_1();
	this.dress1.parent = this;
	this.dress1.setTransform(750.6,341.2,0.558,0.558,0,0,180,62.6,160.6);

	this.instance_2 = new lib.Layer42_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(752.5,248.8,0.833,0.833,0,0,180,35.6,14.6);

	this.dress2 = new lib.dd2();
	this.dress2.parent = this;
	this.dress2.setTransform(707.6,345.6,0.945,0.945,0,0,180);

	this.instance_3 = new lib.Layer42_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(708.5,261.9,0.945,0.945,0,0,180,35.5,14.6);

	this.dress7 = new lib.dd7();
	this.dress7.parent = this;
	this.dress7.setTransform(582.8,329.4,0.797,0.797,0,0,180);

	this.instance_4 = new lib.Layer42_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(587.9,259.1,0.797,0.797,0,0,180,35.5,14.5);

	this.dress5 = new lib.dd5();
	this.dress5.parent = this;
	this.dress5.setTransform(540.7,324.9,0.797,0.797,0,0,180);

	this.instance_5 = new lib.Layer42_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(541.9,259,0.797,0.797,0,0,180,35.5,14.6);

	this.dress6 = new lib.dd6();
	this.dress6.parent = this;
	this.dress6.setTransform(501.3,321,0.797,0.797,0,0,180);

	this.instance_6 = new lib.Layer42_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(505.5,260.1,0.797,0.797,0,0,180,35.5,14.5);

	this.dress3 = new lib.dd3();
	this.dress3.parent = this;
	this.dress3.setTransform(679,345.5,0.945,0.945,0,0,180);

	this.instance_7 = new lib.Layer42_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(685.2,268.2,0.945,0.945,0,0,180,35.5,14.5);

	this.dress4 = new lib.dd4();
	this.dress4.parent = this;
	this.dress4.setTransform(463.7,326.3,0.785,0.787,0,0,180);

	this.instance_8 = new lib.Layer42_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(467.2,260,0.785,0.787,0,0,180,35.6,14.5);

	this.instance_9 = new lib.Bitmap12_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(237.2,182.1);

	this.bag22 = new lib.b5();
	this.bag22.parent = this;
	this.bag22.setTransform(312.8,216.1,0.765,0.765);

	this.bag33 = new lib.b4();
	this.bag33.parent = this;
	this.bag33.setTransform(344.6,291.1,0.765,0.765);

	this.bag44 = new lib.b3();
	this.bag44.parent = this;
	this.bag44.setTransform(284.7,286.2,0.765,0.765);

	this.bag11 = new lib.b2();
	this.bag11.parent = this;
	this.bag11.setTransform(363.7,226.1,0.765,0.765);

	this.bag55 = new lib.b1();
	this.bag55.parent = this;
	this.bag55.setTransform(262.1,211.2,0.765,0.765);

	this.shoe55 = new lib.s5();
	this.shoe55.parent = this;
	this.shoe55.setTransform(332.2,345.1,0.764,0.764);

	this.shoe44 = new lib.s4();
	this.shoe44.parent = this;
	this.shoe44.setTransform(287.4,343.5,0.764,0.764);

	this.shoe33 = new lib.s3();
	this.shoe33.parent = this;
	this.shoe33.setTransform(368.5,398.4,0.849,0.849,-15);

	this.shoe22 = new lib.s2();
	this.shoe22.parent = this;
	this.shoe22.setTransform(314.7,398.7,0.849,0.849,5.7);

	this.shoe11 = new lib.s1();
	this.shoe11.parent = this;
	this.shoe11.setTransform(261.4,398.2,0.849,0.849);

	this.dress11 = new lib.d1();
	this.dress11.parent = this;
	this.dress11.setTransform(746.3,356.8,0.95,0.95,0,0,180);

	this.dress22 = new lib.d2();
	this.dress22.parent = this;
	this.dress22.setTransform(706.8,347.1,1,1,0,0,180);

	this.dress33 = new lib.d3();
	this.dress33.parent = this;
	this.dress33.setTransform(671.7,346.5,0.809,0.809,0,0,180);

	this.dress44 = new lib.d5();
	this.dress44.parent = this;
	this.dress44.setTransform(584.6,327.3,0.719,0.719,0,0,180);

	this.dress55 = new lib.d4();
	this.dress55.parent = this;
	this.dress55.setTransform(540.8,328.5,0.719,0.719,0,0,180);

	this.dress66 = new lib.d6();
	this.dress66.parent = this;
	this.dress66.setTransform(498,320,0.751,0.751,0,0,180);

	this.dress77 = new lib.d7();
	this.dress77.parent = this;
	this.dress77.setTransform(459.3,322.5,0.751,0.751,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8,p:{scaleX:0.785,scaleY:0.787,x:467.2,y:260}},{t:this.dress4},{t:this.instance_7,p:{scaleX:0.945,scaleY:0.945,x:685.2,y:268.2}},{t:this.dress3},{t:this.instance_6,p:{scaleX:0.797,scaleY:0.797,x:505.5,y:260.1}},{t:this.dress6},{t:this.instance_5,p:{regX:35.5,regY:14.6,scaleX:0.797,scaleY:0.797,x:541.9,y:259}},{t:this.dress5},{t:this.instance_4,p:{scaleX:0.797,scaleY:0.797,x:587.9,y:259.1}},{t:this.dress7},{t:this.instance_3,p:{regY:14.6,scaleX:0.945,scaleY:0.945,x:708.5,y:261.9}},{t:this.dress2},{t:this.instance_2,p:{regX:35.6,regY:14.6,scaleX:0.833,scaleY:0.833,x:752.5,y:248.8}},{t:this.dress1},{t:this.shoe1},{t:this.shoe2},{t:this.shoe3},{t:this.shoe4},{t:this.shoe5},{t:this.bag5},{t:this.bag1},{t:this.bag2},{t:this.bag3},{t:this.bag4}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_8,p:{scaleX:0.751,scaleY:0.751,x:464.1,y:256.4}},{t:this.dress77},{t:this.instance_7,p:{scaleX:0.751,scaleY:0.751,x:499.8,y:254.2}},{t:this.instance_6,p:{scaleX:0.719,scaleY:0.719,x:588.1,y:258}},{t:this.dress66},{t:this.instance_5,p:{regX:35.6,regY:14.5,scaleX:0.719,scaleY:0.719,x:545.9,y:258}},{t:this.dress55},{t:this.dress44},{t:this.instance_4,p:{scaleX:1,scaleY:1,x:683.3,y:268.7}},{t:this.dress33},{t:this.instance_3,p:{regY:14.5,scaleX:1,scaleY:1,x:720.3,y:260}},{t:this.dress22},{t:this.instance_2,p:{regX:35.5,regY:14.5,scaleX:1,scaleY:1,x:753.8,y:251}},{t:this.dress11},{t:this.shoe11},{t:this.shoe22},{t:this.shoe33},{t:this.shoe44},{t:this.shoe55},{t:this.bag55},{t:this.bag11},{t:this.bag44},{t:this.bag33},{t:this.bag22}]},1).to({state:[]},1).wait(1));

	// Elsa
	this.mcEffect1 = new lib.sprite6148copy();
	this.mcEffect1.parent = this;
	this.mcEffect1.setTransform(4.9,-39.4,3.663,2.92,-14.8,0,0,-110,-279.9);

	this.elsa = new lib.Group1();
	this.elsa.parent = this;
	this.elsa.setTransform(135.6,317.1,0.673,0.673,0,0,180,276.4,377);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.elsa},{t:this.mcEffect1}]},3).wait(2));

	// ariel
	this.star = new lib.star_2();
	this.star.parent = this;
	this.star.setTransform(-284.5,50);

	this.mcEffect = new lib.Effect();
	this.mcEffect.parent = this;
	this.mcEffect.setTransform(-4.5,-38.6,3.663,2.92,-14.8,0,0,-110,-279.9);

	this.star_1 = new lib.star_2();
	this.star_1.parent = this;
	this.star_1.setTransform(-287.1,138.5,1.531,1.531,-90);
	this.star_1.filters = [new cjs.ColorFilter(1, 1, 1, 1, 0, 74, 13, 0)];
	this.star_1.cache(-24,-34,61,55);

	this.ariel = new lib.Group1_1();
	this.ariel.parent = this;
	this.ariel.setTransform(106.4,304,0.781,0.781,0,0,0,257.4,313.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.ariel},{t:this.star_1},{t:this.mcEffect},{t:this.star}]},1).to({state:[]},2).wait(2));

	// fundal
	this.cover = new lib.cover();
	this.cover.parent = this;
	this.cover.setTransform(321.2,331.9,1,1,0,0,0,571.6,363.3);

	this.instance_10 = new lib.Layer1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(321.8,328.4,1.183,1.183,0,0,0,483.1,307);

	this.poza3 = new lib.Symbol14();
	this.poza3.parent = this;
	this.poza3.setTransform(571.1,325.6,0.905,0.905,0,0,0,95,95);
	this.poza3.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,7);

	this.butoane_2 = new lib.Symbol5();
	this.butoane_2.parent = this;
	this.butoane_2.setTransform(463,515.7,1,1,0,0,0,183.3,69.7);

	this.replayBut = new lib.replayBut();
	this.replayBut.parent = this;
	this.replayBut.setTransform(40,63,0.754,0.754);
	this.replayBut.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);

	this.poza1 = new lib.Symbol102();
	this.poza1.parent = this;
	this.poza1.setTransform(352.5,330.5,0.905,0.905,0,0,0,100,99.9);
	this.poza1.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,7);

	this.instance_11 = new lib.dreamMc();
	this.instance_11.parent = this;
	this.instance_11.setTransform(169,164,0.761,0.761,6.7);

	this.instance_12 = new lib.Bitmap10();
	this.instance_12.parent = this;
	this.instance_12.setTransform(242.2,184.1,0.741,0.741);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cover}]}).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10},{t:this.instance_12},{t:this.instance_11},{t:this.poza1},{t:this.replayBut},{t:this.butoane_2},{t:this.poza3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(149.6,-46.1,2158.2,1964.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(63.3,-46.1,1288.9,1340.3), rect, rect=new cjs.Rectangle(150.1,-46.1,1202.2,1340.3), rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;