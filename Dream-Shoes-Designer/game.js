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
		{src:"images/game_atlas_.png?1533726575807", id:"game_atlas_"},
		{src:"images/game_atlas_2.png?1533726575808", id:"game_atlas_2"},
		{src:"images/game_atlas_3.png?1533726575811", id:"game_atlas_3"},
		{src:"sounds/annaSound.mp3?1533726575814", id:"annaSound"},
		{src:"sounds/bgmusic.mp3?1533726575814", id:"bgmusic"},
		{src:"sounds/sparkles.mp3?1533726575814", id:"sparkles"}
	]
};



lib.ssMetadata = [
		{name:"game_atlas_", frames: [[0,1445,800,300],[597,0,800,600],[802,602,800,600],[0,843,800,600],[0,0,595,841],[802,1204,800,600]]},
		{name:"game_atlas_2", frames: [[0,0,800,300],[802,0,338,600],[1396,1246,140,488],[1721,1750,259,239],[1721,1498,250,250],[1538,1246,250,250],[0,302,439,441],[767,602,251,583],[260,1685,388,261],[0,745,258,600],[441,302,324,590],[1116,1422,278,323],[1020,811,800,174],[1142,292,800,190],[0,1347,258,600],[650,1613,228,294],[260,1250,269,433],[624,1187,278,424],[1020,987,275,433],[1297,987,274,257],[260,894,362,354],[1142,484,467,325],[1822,775,148,470],[1116,1747,339,248],[1457,1736,262,240],[1142,0,633,290],[904,1422,210,514],[1611,484,316,289]]},
		{name:"game_atlas_3", frames: [[576,1563,53,58],[213,847,45,50],[974,1496,89,46],[426,1497,89,46],[1645,241,116,61],[55,1566,54,55],[213,899,47,47],[593,1302,111,113],[1652,1290,249,96],[72,642,57,28],[783,0,258,239],[1960,323,30,32],[397,1328,61,119],[769,1200,59,87],[1120,1518,80,47],[1003,241,212,216],[0,1048,185,85],[1688,1388,100,100],[1549,709,155,155],[1823,870,155,155],[1495,1207,155,155],[1318,1259,155,155],[1790,1388,100,100],[1892,1405,100,100],[1475,1388,211,51],[706,1302,144,84],[251,1328,144,84],[852,1347,144,84],[998,1362,144,84],[1431,459,188,62],[1760,1562,71,45],[503,1563,71,45],[1859,323,99,204],[1331,1069,162,188],[1211,1197,105,245],[812,802,66,36],[0,642,70,28],[693,1503,82,48],[777,1507,82,48],[473,459,44,34],[1903,1290,92,113],[706,1388,92,113],[0,1299,121,134],[123,1299,126,119],[789,241,212,217],[287,1516,52,72],[1318,1416,85,72],[478,1200,289,100],[519,241,268,183],[1043,1197,166,163],[1763,241,53,73],[1706,541,278,163],[1217,241,212,216],[1144,1362,53,73],[1065,1496,53,73],[1431,241,212,216],[861,1507,53,73],[1645,323,212,216],[916,1507,53,73],[519,426,216,212],[1231,1516,52,72],[259,459,212,215],[233,1516,52,73],[1003,459,212,215],[341,1521,52,72],[1217,459,212,215],[1652,1207,71,70],[852,1004,212,171],[1513,1034,212,171],[1231,1444,71,70],[1300,873,211,194],[353,1449,71,70],[1086,873,212,194],[213,975,211,194],[0,847,211,199],[593,1417,85,72],[426,975,211,194],[639,1004,211,194],[1885,1507,53,73],[1940,1507,53,73],[0,0,259,239],[0,1509,53,73],[1377,1515,53,73],[261,0,259,239],[971,1544,52,72],[1043,0,258,239],[395,1545,52,72],[449,1545,52,72],[1303,0,258,239],[693,1553,52,72],[1563,0,258,239],[1304,1490,71,70],[0,241,257,239],[1666,1490,71,70],[259,241,258,216],[1739,1490,71,70],[522,0,259,239],[123,1420,85,72],[737,460,262,169],[460,1423,85,72],[737,631,262,169],[800,1433,85,72],[473,640,262,169],[1431,541,273,166],[1432,1515,53,73],[1001,676,272,162],[1487,1515,53,73],[1706,706,272,162],[1542,1515,53,73],[1275,709,272,162],[747,1557,52,72],[264,811,272,162],[801,1557,52,72],[1285,1562,52,72],[538,811,272,162],[1652,1562,52,72],[812,840,272,162],[1549,870,272,162],[1812,1490,71,70],[0,482,230,158],[547,1491,71,70],[852,1177,189,168],[620,1491,71,70],[265,1171,211,155],[887,1433,85,72],[1727,1034,263,126],[0,1435,85,72],[1066,1069,263,126],[1405,1441,85,72],[1727,1162,263,126],[0,1171,263,126],[87,1494,71,70],[1492,1441,85,72],[1579,1441,85,72],[0,676,262,169],[1597,1515,53,73],[1706,1562,52,72],[160,1494,71,70],[631,1563,53,58],[1144,1444,85,72],[478,1302,113,119],[1823,0,177,321],[974,1448,116,46],[264,676,201,123],[251,1414,100,100]]}
];


// symbols:



(lib.accessories1ic = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.accessories1 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.accessories2ic = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.accessories2icpngcopy = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.accessories2 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.accessories3ic = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.accessories3 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.accessories_1 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.animjos = function() {
	this.spriteSheet = ss["game_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.animsus = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.annamodel = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.AwesomeIwillhavetocreateapairofshoestowearat = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.basecover = function() {
	this.spriteSheet = ss["game_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.baseicontray = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.basic_designer_hands_scissorspngcopy = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.bg = function() {
	this.spriteSheet = ss["game_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap10 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap11 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap12 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap15 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap16 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap476 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap477 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.blurrybgjpgcopy = function() {
	this.spriteSheet = ss["game_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Brunchwithfriends = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.bt_fullscreen = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.bt_moregames1111 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.bt_next = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.bt_play = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.bt_replayhover = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.bt_soundoff = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.bt_soundon = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.bubbleboxbase = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Businesslunch = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.but_frills4 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.but_frills5 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.but_frills6 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.but_frills6_1 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.characters11 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Charitygala = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.color_button_green = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.color_button_yellow = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.corp = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.coverclothes = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.covercmchar = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.coverhandbrush = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.coverobjectstable = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.covershoehand = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.covertable = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.designer = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.dress_1_trumpetvintagedress_embroidery_1pngcopy = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.dress_1_trumpetvintagedress_embroidery_2pngcopy = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.dress_1_trumpetvintagedress_pattern_5_button = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.dress_1_trumpetvintagedress_pattern_6_button = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.dress_3_tealenghtoutdoordress_emboidery_1 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.dress_6_mermaidmoderndress_frill_1 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.dress_6_mermaidmoderndress_frill_4 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.dress_6_mermaidmoderndress_frill_5 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.dress_6_mermaidmoderndress_frill_6 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.dress_6_mermaidmoderndress_pattern_1 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.dress_6_mermaidmoderndress_pattern_5 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.dress_6_mermaidmoderndress_pattern_6 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.elizabasepngcopy = function() {
	this.spriteSheet = ss["game_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.enthusiastichandsjuryst = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.enthusiastichands = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.envelopebutton = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.galbenmic = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.galben = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.googleplaybutton = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.IvereceivedaninvitationfromFashionWeekEventsLetsse = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.idlehandsjuryst = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.idlehands = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.jurybg = function() {
	this.spriteSheet = ss["game_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.logop = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.manequin = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.maron = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.messageboardfinal = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.messageboard = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.model1officebase = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.model1officecolor1ic = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.model1officecolor1icpngcopy2 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.model1officecolor1 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.model1officecolor2ic = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.model1officecolor2 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.model1officecolor3ic = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.model1officecolor4 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.model1officegradient1ic = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.model1officegradient1 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.model1officegradient2ic = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.model1officegradient2 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.model1officegradient3ic = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.model1officegradient3 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.model1officepattern1ic = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.model1officepattern1 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.model1officepattern1pngcopy = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.model1officepattern2ic = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.model1officepattern2 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.model1officepattern3ic = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.model1officepattern3 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.model1officesole1 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.model1officesole2 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.model1officesole3ic = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.model1officesole3 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.model1officesole4 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.model2casualbase = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.model2casualcolor1ic = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.model2casualcolor1icpngcopy = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.model2casualcolor1 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.model2casualcolor2ic = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.model2casualcolor3ic = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.model2casualcolor3 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.model2casualgradient1ic = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.model2casualgradient1 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.model2casualgradient2ic = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.model2casualgradient2icpngcopy = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.model2casualgradient2 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.model2casualgradient3ic = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.model2casualgradient3 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.model2casualpattern1ic = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.model2casualpattern1 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.model2casualpattern2ic = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.model2casualpattern2 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.model2casualpattern3ic = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.model2casualpattern3 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.model2casualsole1ic = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.model2casualsole1 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.model2casualsole2ic = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.model2casualsole2 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.model2casualsole3ic = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.model2casualsole3 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.model3casualbase = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.model3casualcolor1ic = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.model3casualcolor1 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.model3casualcolor2ic = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.model3casualcolor2 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.model3casualcolor3ic = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.model3casualcolor3 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.model3casualgradient1ic = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.model3casualgradient1 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.model3casualgradient2ic = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.model3casualgradient2icpngcopy = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.model3casualgradient2 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.model3casualgradient3ic = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.model3casualgradient3 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.model3casualgradient4 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.model3casualpattern1ic = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.model3casualpattern1 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.model3casualpattern2ic = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.model3casualpattern2 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.model3casualpattern3ic = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.model3casualpattern3 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.model3casualsole1ic = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.model3casualsole1 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.model3casualsole2ic = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.model3casualsole2 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.model3casualsole3ic = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.model3casualsole3 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.model3casualsole4 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.model4socialeventspattern2icpngcopy = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.model5socialeventssole1ic = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.model6freetimesole1ic = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.mov = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.negru = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.no = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.no2 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.no3 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib.nop = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib.par = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib.podiumpngcopy = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(141);
}).prototype = p = new cjs.Sprite();



(lib.podiumbuc = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(142);
}).prototype = p = new cjs.Sprite();



(lib.shoetable = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.Symbol93 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.text = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(143);
}).prototype = p = new cjs.Sprite();



(lib.titletext = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.YoutubeButtons7326 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(144);
}).prototype = p = new cjs.Sprite();



(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.animjos();
	this.instance.parent = this;
	this.instance.setTransform(-400,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-400,-150,800,300);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.animsus();
	this.instance.parent = this;
	this.instance.setTransform(-400,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-400,-150,800,300);


(lib.Symbol100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8));

	// Layer 1
	this.instance = new lib.Bitmap11();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,30,32);


(lib.Symbol99 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_79 = function() {
		exportRoot.level1.bg.jurat.gotoAndStop(1);
		exportRoot.level1.finish_but.visible=true;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(79).call(this.frame_79).wait(1));

	// Layer 1
	this.text = new cjs.Text("10", "bold 33px 'Comic Sans MS'", "#4BD1F4");
	this.text.textAlign = "center";
	this.text.lineHeight = 48;
	this.text.lineWidth = 46;
	this.text.parent = this;
	this.text.setTransform(489.9,-392.1);

	this.text_1 = new cjs.Text("9", "bold 33px 'Comic Sans MS'", "#4BD1F4");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 48;
	this.text_1.lineWidth = 46;
	this.text_1.parent = this;
	this.text_1.setTransform(605.9,-392.1);

	this.text_2 = new cjs.Text("10", "bold 33px 'Comic Sans MS'", "#4BD1F4");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 48;
	this.text_2.lineWidth = 46;
	this.text_2.parent = this;
	this.text_2.setTransform(722.4,-392.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_2,p:{x:722.4,y:-392.1}},{t:this.text_1,p:{x:605.9,y:-392.1,text:"9"}},{t:this.text,p:{x:489.9,y:-392.1,text:"10"}}]}).to({state:[{t:this.text_2,p:{x:722.4,y:-392.1}},{t:this.text_1,p:{x:605.9,y:-392.1,text:"9"}},{t:this.text,p:{x:489.9,y:-392.1,text:"10"}}]},1).to({state:[{t:this.text,p:{x:24.8,y:2,text:"9"}}]},29).to({state:[{t:this.text_1,p:{x:140.8,y:2,text:"10"}},{t:this.text,p:{x:24.8,y:2,text:"9"}}]},16).to({state:[{t:this.text_2,p:{x:257.3,y:2}},{t:this.text_1,p:{x:140.8,y:2,text:"10"}},{t:this.text,p:{x:24.8,y:2,text:"9"}}]},16).to({state:[{t:this.text_2,p:{x:257.3,y:2}},{t:this.text_1,p:{x:140.8,y:2,text:"10"}},{t:this.text,p:{x:24.8,y:2,text:"9"}}]},17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(465.1,-394.1,282.1,58.7);


(lib.Symbol98 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol93();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(42));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210,514);


(lib.Symbol95 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shoetable();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,633,290);


(lib.Symbol94 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.corp();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,324,590);


(lib.Symbol92copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap16();
	this.instance.parent = this;
	this.instance.setTransform(52,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(52,32,59,87);


(lib.Symbol92 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap15();
	this.instance.parent = this;
	this.instance.setTransform(52,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(52,0,61,119);


(lib.Symbol88 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.coverclothes();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,278,323);


(lib.Symbol87 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("I'm so glad that the jury liked my shoes design!", "bold 19px 'Comic Sans MS'", "#CC0099");
	this.text.textAlign = "center";
	this.text.lineHeight = 23;
	this.text.lineWidth = 217;
	this.text.parent = this;
	this.text.setTransform(111.6,6.2);

	this.instance = new lib.messageboard();
	this.instance.parent = this;
	this.instance.setTransform(219.6,0,0.648,0.432,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,222.2,107);


(lib.Symbol86 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.envelopebutton();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,212,217);


(lib.Symbol83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.podiumbuc();
	this.instance.parent = this;
	this.instance.setTransform(21,0,1.129,1.649);

	this.instance_1 = new lib.podiumpngcopy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,177,339);


(lib.Symbol81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.coverhandbrush();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,162,188);


(lib.Symbol66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Thank you for your help!\nThe shoes look great!", "bold 19px 'Comic Sans MS'", "#CC0099");
	this.text.textAlign = "center";
	this.text.lineHeight = 23;
	this.text.lineWidth = 217;
	this.text.parent = this;
	this.text.setTransform(-114.5,72.4);

	this.instance = new lib.messageboard();
	this.instance.parent = this;
	this.instance.setTransform(-6.4,67,0.648,0.432,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-226,67,222.1,107);


(lib.Symbol65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.manequin();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,148,470);


(lib.Symbol51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logop();
	this.instance.parent = this;
	this.instance.setTransform(1,1,0.628,0.628);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,293.1,204);


(lib.Symbol50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bt_replayhover();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155,155);


(lib.Symbol48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{broderie:1,broderie1:2,broderie2:3,broderie3:4,broderie4:5,broderie5:6});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		exportRoot.annaSound();
		exportRoot.level1.rapunzel.personaj.gotoAndPlay(1);
	}
	this.frame_4 = function() {
		exportRoot.annaSound();
		exportRoot.level1.rapunzel.personaj.gotoAndPlay(1);
	}
	this.frame_6 = function() {
		exportRoot.annaSound();
		exportRoot.level1.rapunzel.personaj.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(2).call(this.frame_4).wait(2).call(this.frame_6).wait(1));

	// Layer 1
	this.instance = new lib.dress_3_tealenghtoutdoordress_emboidery_1();
	this.instance.parent = this;
	this.instance.setTransform(-35,-981);

	this.instance_1 = new lib.model3casualsole1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-94,162);

	this.instance_2 = new lib.model3casualsole2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-94,162);

	this.instance_3 = new lib.model3casualsole3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-94,162);

	this.instance_4 = new lib.model3casualsole4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-94,162);

	this.instance_5 = new lib.dress_1_trumpetvintagedress_embroidery_1pngcopy();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-3,9,0.706,0.706);

	this.instance_6 = new lib.dress_1_trumpetvintagedress_embroidery_2pngcopy();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-6,11,0.728,0.728);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-981,44,34);


(lib.Symbol47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{pattern:1,pattern1:2,pattern2:3,pattern3:4,pattern4:5,pattern5:6});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		exportRoot.annaSound();
		exportRoot.level1.rapunzel.personaj.gotoAndPlay(1);
	}
	this.frame_4 = function() {
		exportRoot.annaSound();
		exportRoot.level1.rapunzel.personaj.gotoAndPlay(1);
	}
	this.frame_6 = function() {
		exportRoot.annaSound();
		exportRoot.level1.rapunzel.personaj.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(2).call(this.frame_4).wait(2).call(this.frame_6).wait(1));

	// Layer 1
	this.instance = new lib.dress_6_mermaidmoderndress_pattern_1();
	this.instance.parent = this;
	this.instance.setTransform(-137,-1357);

	this.instance_1 = new lib.model3casualgradient1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(4,148);

	this.instance_2 = new lib.model3casualgradient2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(4,148);

	this.instance_3 = new lib.model3casualgradient3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(4,148);

	this.instance_4 = new lib.model3casualgradient4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(4,148);

	this.instance_5 = new lib.dress_6_mermaidmoderndress_pattern_5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-9,32);

	this.instance_6 = new lib.dress_6_mermaidmoderndress_pattern_6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-6,23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137,-1357,269,433);


(lib.Symbol46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{frills:1,frills1:2,frills2:3,frills3:4,frills4:5,frills5:6});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		exportRoot.annaSound();
		exportRoot.level1.rapunzel.personaj.gotoAndPlay(1);
	}
	this.frame_4 = function() {
		exportRoot.annaSound();
		exportRoot.level1.rapunzel.personaj.gotoAndPlay(1);
	}
	this.frame_6 = function() {
		exportRoot.annaSound();
		exportRoot.level1.rapunzel.personaj.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(2).call(this.frame_4).wait(2).call(this.frame_6).wait(1));

	// Layer 1
	this.instance = new lib.dress_6_mermaidmoderndress_frill_1();
	this.instance.parent = this;
	this.instance.setTransform(56,-1084);

	this.instance_1 = new lib.model3casualpattern1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(26,165);

	this.instance_2 = new lib.model3casualpattern2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(29,153);

	this.instance_3 = new lib.model3casualpattern3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(25,165);

	this.instance_4 = new lib.dress_6_mermaidmoderndress_frill_4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(101,41);

	this.instance_5 = new lib.dress_6_mermaidmoderndress_frill_5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(38,118);

	this.instance_6 = new lib.dress_6_mermaidmoderndress_frill_6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(82,131);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(56,-1084,92,113);


(lib.Symbol44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{culoare:0,culoare3:1,culoare1:2,culoare2:3});

	// timeline functions:
	this.frame_0 = function() {
		exportRoot.annaSound();
		exportRoot.level1.rapunzel.personaj.gotoAndPlay(1);
		this.stop();
	}
	this.frame_3 = function() {
		exportRoot.annaSound();
		exportRoot.level1.rapunzel.personaj.gotoAndPlay(1);
	}
	this.frame_5 = function() {
		exportRoot.annaSound();
		exportRoot.level1.rapunzel.personaj.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(2).call(this.frame_5).wait(1));

	// Layer 1
	this.instance = new lib.model3casualcolor1();
	this.instance.parent = this;
	this.instance.setTransform(0,1);

	this.instance_1 = new lib.model3casualcolor2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,1);

	this.instance_2 = new lib.model3casualcolor3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(2));

	// Layer 2
	this.instance_3 = new lib.model3casualbase();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:true},3).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,273,166);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 3
	this.instance = new lib.annamodel();
	this.instance.parent = this;
	this.instance.setTransform(-78,-77,0.909,0.909);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2));

	// Layer 1
	this.instance_1 = new lib.manequin();
	this.instance_1.parent = this;

	this.instance_2 = new lib.messageboardfinal();
	this.instance_2.parent = this;
	this.instance_2.setTransform(329,41,0.565,0.565);

	this.instance_3 = new lib.Bitmap6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(210,-29,0.822,0.822);

	this.instance_4 = new lib.text();
	this.instance_4.parent = this;
	this.instance_4.setTransform(215,-83,0.865,0.865);

	this.instance_5 = new lib.messageboard();
	this.instance_5.parent = this;
	this.instance_5.setTransform(426.7,-103,0.754,0.754,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_5},{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,148,470);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15));

	// Layer 4
	this.instance = new lib.designer();
	this.instance.parent = this;
	this.instance.setTransform(-2,0,2,2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(14));

	// Layer 2
	this.instance_1 = new lib.basic_designer_hands_scissorspngcopy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(429,560,2.064,2.064);

	this.instance_2 = new lib.characters11();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-2,0,2,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).to({state:[]},1).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,0,548.7,1199.8);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bt_next();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155,155);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bt_fullscreen();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.instance = new lib.bt_soundon();
	this.instance.parent = this;

	this.instance_1 = new lib.bt_soundoff();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bt_play();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155,155);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bt_moregames1111();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155,155);


(lib.Tween38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqMO1QkoABAAkpIAA0ZQAAkpEoAAIUZAAQEpAAAAEpIAAUZQAAEpkpgBg");
	mask.setTransform(-5,-4);

	// Layer 1
	this.instance = new lib.Bitmap476();
	this.instance.parent = this;
	this.instance.setTransform(-104,-104,0.8,0.8);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-99,190,190);


(lib.Symbol76copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.but_frills6();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.556,0.555);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,46.7);


(lib.Symbol75copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,47);


(lib.Symbol74copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 1
	this.instance = new lib.model1officesole3ic();
	this.instance.parent = this;

	this.instance_1 = new lib.model2casualsole3ic();
	this.instance_1.parent = this;

	this.instance_2 = new lib.model3casualsole3ic();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,85,72);


(lib.Symbol73copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.but_frills6_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.556,0.555);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,46.7);


(lib.Symbol72copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.but_frills5();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.556,0.555);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,46.7);


(lib.Symbol71copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.but_frills4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.556,0.555);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,46.7);


(lib.Symbol70copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dress_1_trumpetvintagedress_pattern_6_button();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,82,48);


(lib.Symbol69copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dress_1_trumpetvintagedress_pattern_5_button();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,82,48);


(lib.Symbol68copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 1
	this.instance = new lib.model1officegradient3ic();
	this.instance.parent = this;

	this.instance_1 = new lib.galbenmic();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52,72);


(lib.Symbol67copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.color_button_yellow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71,45);


(lib.Symbol65_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.manequin();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,148,470);


(lib.Symbol64copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.color_button_green();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71,45);


(lib.Symbol63copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 1
	this.instance = new lib.model1officecolor3ic();
	this.instance.parent = this;

	this.instance_1 = new lib.model2casualcolor3ic();
	this.instance_1.parent = this;

	this.instance_2 = new lib.model3casualcolor1ic();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53,73);


(lib.Symbol62copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.no();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52,72);


(lib.Symbol61copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.nop();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,85,72);


(lib.Symbol60copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.no2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71,70);


(lib.Symbol59copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.no3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53,58);


(lib.Symbol56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.accessories2ic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,89,46);


(lib.Symbol55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.model1officesole3ic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,85,72);


(lib.Symbol54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.model4socialeventspattern2icpngcopy();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71,70);


(lib.Symbol53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.model2casualgradient2ic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52,72);


(lib.Symbol52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.model1officecolor1ic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53,73);


(lib.Symbol51_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.logop();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.643,0.643);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300.5,209.1);


(lib.Symbol43copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{accesorii:1,accesorii1:2,accesorii2:3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		exportRoot.annaSound();
		exportRoot.level1.rapunzel.personaj.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(1));

	// Layer 1
	this.instance = new lib.accessories_1();
	this.instance.parent = this;
	this.instance.setTransform(-1223,-995,0.391,0.391);

	this.instance_1 = new lib.accessories1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-108.2,-34.3,0.439,0.451,0,-72.8,-30.5);

	this.instance_2 = new lib.accessories2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-144.1,-25.8,0.506,0.76,0,-78.8,-29);

	this.instance_3 = new lib.accessories3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-93.9,-44.1,0.536,0.414,0,56.2,16.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1223,-995,43.3,44.1);


(lib.Symbol43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"accesorii":1,"accesorii1":2,"accesorii2":3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		exportRoot.annaSound();
		exportRoot.level1.rapunzel.personaj.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(1));

	// Layer 1
	this.instance = new lib.accessories_1();
	this.instance.parent = this;
	this.instance.setTransform(-1223,-995,0.391,0.391);

	this.instance_1 = new lib.accessories1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-47.7,243.8,0.439,0.451,0,-80.5,-38.2);

	this.instance_2 = new lib.accessories2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-87.6,247.3,0.506,0.76,0,-78.8,-29);

	this.instance_3 = new lib.accessories3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-34.4,229,0.536,0.414,0,56.2,16.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1223,-995,43.3,44.1);


(lib.Symbol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"frills":1,"frills1":2,"frills2":3,"frills3":4,"frills4":5,"frills5":6});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		exportRoot.annaSound();
		exportRoot.level1.rapunzel.personaj.gotoAndPlay(1);
	}
	this.frame_4 = function() {
		exportRoot.annaSound();
		exportRoot.level1.rapunzel.personaj.gotoAndPlay(1);
	}
	this.frame_6 = function() {
		exportRoot.annaSound();
		exportRoot.level1.rapunzel.personaj.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(2).call(this.frame_4).wait(2).call(this.frame_6).wait(1));

	// Layer 2
	this.instance = new lib.model2casualpattern1();
	this.instance.parent = this;
	this.instance.setTransform(-469,-682);

	this.instance_1 = new lib.model2casualpattern2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(83,41);

	this.instance_2 = new lib.model2casualpattern3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(81,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:-469,y:-682}}]}).to({state:[{t:this.instance,p:{x:83,y:18}}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-469,-682,257,239);


(lib.Symbol41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"broderie":1,"broderie1":2,"broderie2":3,"broderie3":4,"broderie4":5,"broderie5":6});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		exportRoot.annaSound();
		exportRoot.level1.rapunzel.personaj.gotoAndPlay(1);
	}
	this.frame_4 = function() {
		exportRoot.annaSound();
		exportRoot.level1.rapunzel.personaj.gotoAndPlay(1);
	}
	this.frame_6 = function() {
		exportRoot.annaSound();
		exportRoot.level1.rapunzel.personaj.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(2).call(this.frame_4).wait(2).call(this.frame_6).wait(1));

	// Layer 1
	this.instance = new lib.model2casualsole1();
	this.instance.parent = this;
	this.instance.setTransform(225,-1189);

	this.instance_1 = new lib.model2casualsole2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(11,36);

	this.instance_2 = new lib.model2casualsole3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(11,36);

	this.instance_3 = new lib.mov();
	this.instance_3.parent = this;
	this.instance_3.setTransform(11,36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:225,y:-1189}}]}).to({state:[{t:this.instance,p:{x:11,y:36}}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(225,-1189,262,169);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"pattern":1,"pattern1":2,"pattern2":3,"pattern3":4,"pattern4":5,"pattern5":6});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		exportRoot.annaSound();
		exportRoot.level1.rapunzel.personaj.gotoAndPlay(1);
	}
	this.frame_4 = function() {
		exportRoot.annaSound();
		exportRoot.level1.rapunzel.personaj.gotoAndPlay(1);
	}
	this.frame_6 = function() {
		exportRoot.annaSound();
		exportRoot.level1.rapunzel.personaj.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(2).call(this.frame_4).wait(2).call(this.frame_6).wait(1));

	// Layer 1
	this.instance = new lib.model2casualgradient1();
	this.instance.parent = this;
	this.instance.setTransform(-303,-1257);

	this.instance_1 = new lib.model2casualgradient2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(84,19);

	this.instance_2 = new lib.model2casualgradient3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(84,19);

	this.instance_3 = new lib.Bitmap10();
	this.instance_3.parent = this;
	this.instance_3.setTransform(84,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:-303,y:-1257}}]}).to({state:[{t:this.instance,p:{x:84,y:19}}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-303,-1257,258,239);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"culoare":0,"culoare1":1,"culoare2":2,"culoare3":3,culoare4:4,culoare5:5});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		exportRoot.annaSound();
		exportRoot.level1.rapunzel.personaj.gotoAndPlay(1);
	}
	this.frame_3 = function() {
		exportRoot.annaSound();
		exportRoot.level1.rapunzel.personaj.gotoAndPlay(1);
	}
	this.frame_5 = function() {
		exportRoot.annaSound();
		exportRoot.level1.rapunzel.personaj.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(2).call(this.frame_3).wait(2).call(this.frame_5).wait(1));

	// Layer 1
	this.instance = new lib.model2casualcolor1();
	this.instance.parent = this;
	this.instance.setTransform(65,-2);

	this.instance_1 = new lib.Bitmap12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(65,-2);

	this.instance_2 = new lib.model2casualcolor3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(65,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(2));

	// Layer 2
	this.instance_3 = new lib.model2casualbase();
	this.instance_3.parent = this;
	this.instance_3.setTransform(62,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},4).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(62,-2,262,240);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"frills":1,"frills1":2,"frills2":3,"broderie3":4,"broderie4":5,"broderie5":6});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		exportRoot.annaSound();
		exportRoot.level1.rapunzel.personaj.gotoAndPlay(1);
	}
	this.frame_4 = function() {
		exportRoot.annaSound();
		exportRoot.level1.rapunzel.personaj.gotoAndPlay(1);
	}
	this.frame_6 = function() {
		exportRoot.annaSound();
		exportRoot.level1.rapunzel.personaj.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(2).call(this.frame_4).wait(2).call(this.frame_6).wait(1));

	// Layer 1
	this.instance = new lib.model1officepattern1();
	this.instance.parent = this;
	this.instance.setTransform(-1069,-943);

	this.instance_1 = new lib.model1officepattern1pngcopy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-92,208);

	this.instance_2 = new lib.model1officepattern2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-91,188);

	this.instance_3 = new lib.model1officepattern3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-92,187);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1069,-943,212,171);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"broderie":1,"broderie1":2,"broderie2":3,"broderie3":4,"frills4":5,"frills5":6});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		exportRoot.annaSound();
		exportRoot.level1.rapunzel.personaj.gotoAndPlay(1);
	}
	this.frame_4 = function() {
		exportRoot.annaSound();
		exportRoot.level1.rapunzel.personaj.gotoAndPlay(1);
	}
	this.frame_6 = function() {
		exportRoot.annaSound();
		exportRoot.level1.rapunzel.personaj.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(2).call(this.frame_4).wait(2).call(this.frame_6).wait(1));

	// Layer 1
	this.instance = new lib.model1officesole1();
	this.instance.parent = this;
	this.instance.setTransform(-505,-1064);

	this.instance_1 = new lib.model1officesole2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-6,236);

	this.instance_2 = new lib.model1officesole3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-6,241);

	this.instance_3 = new lib.model1officesole4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-6,241);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:-505,y:-1064}}]}).to({state:[{t:this.instance,p:{x:-6,y:241}}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-505,-1064,211,194);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"pattern":1,"pattern1":2,"pattern2":3,"pattern3":4,"pattern4":5,"pattern5":6});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		exportRoot.annaSound();
		exportRoot.level1.rapunzel.personaj.gotoAndPlay(1);
	}
	this.frame_4 = function() {
		exportRoot.annaSound();
		exportRoot.level1.rapunzel.personaj.gotoAndPlay(1);
	}
	this.frame_6 = function() {
		exportRoot.annaSound();
		exportRoot.level1.rapunzel.personaj.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(2).call(this.frame_4).wait(2).call(this.frame_6).wait(1));

	// Layer 1
	this.instance = new lib.model1officecolor4();
	this.instance.parent = this;
	this.instance.setTransform(-30,-1065);

	this.instance_1 = new lib.model1officegradient1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(76,212);

	this.instance_2 = new lib.model1officegradient2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(76,212);

	this.instance_3 = new lib.model1officegradient3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(76,212);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:-30,y:-1065}}]}).to({state:[{t:this.instance,p:{x:74,y:214}}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-1065,216,212);


(lib.Symbol32copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"culoare":0,"culoare1":1,"culoare2":2,"culoare3":3,"culoare4":4,"culoare5":5});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		exportRoot.annaSound();
		exportRoot.level1.rapunzel.personaj.gotoAndPlay(1);
	}
	this.frame_3 = function() {
		exportRoot.annaSound();
		exportRoot.level1.rapunzel.personaj.gotoAndPlay(1);
	}
	this.frame_5 = function() {
		exportRoot.annaSound();
		exportRoot.level1.rapunzel.personaj.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(2).call(this.frame_3).wait(2).call(this.frame_5).wait(1));

	// Layer 1
	this.instance = new lib.model1officebase();
	this.instance.parent = this;

	this.instance_1 = new lib.model1officecolor1();
	this.instance_1.parent = this;

	this.instance_2 = new lib.model1officecolor2();
	this.instance_2.parent = this;

	this.instance_3 = new lib.Bitmap9();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,212,216);


(lib.Symbol31copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 1
	this.instance = new lib.model2casualcolor1ic();
	this.instance.parent = this;

	this.instance_1 = new lib.negru();
	this.instance_1.parent = this;

	this.instance_2 = new lib.maron();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53,73);


(lib.Symbol30copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 1
	this.instance = new lib.model1officecolor1icpngcopy2();
	this.instance.parent = this;

	this.instance_1 = new lib.model2casualcolor1icpngcopy();
	this.instance_1.parent = this;

	this.instance_2 = new lib.model3casualcolor2ic();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53,73);


(lib.Symbol29copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 1
	this.instance = new lib.model1officecolor2ic();
	this.instance.parent = this;

	this.instance_1 = new lib.model2casualcolor2ic();
	this.instance_1.parent = this;

	this.instance_2 = new lib.model3casualcolor3ic();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53,73);


(lib.Symbol28copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 1
	this.instance = new lib.model1officegradient2ic();
	this.instance.parent = this;

	this.instance_1 = new lib.model2casualgradient3ic();
	this.instance_1.parent = this;

	this.instance_2 = new lib.model3casualgradient3ic();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52,73);


(lib.Symbol27copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 1
	this.instance = new lib.model1officegradient1ic();
	this.instance.parent = this;

	this.instance_1 = new lib.model2casualgradient2icpngcopy();
	this.instance_1.parent = this;

	this.instance_2 = new lib.model3casualgradient2icpngcopy();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52,72);


(lib.Symbol26copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 1
	this.instance = new lib.model3casualgradient2ic();
	this.instance.parent = this;

	this.instance_1 = new lib.model2casualgradient1ic();
	this.instance_1.parent = this;

	this.instance_2 = new lib.model3casualgradient1ic();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52,72);


(lib.Symbol25copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 1
	this.instance = new lib.model2casualsole3ic();
	this.instance.parent = this;

	this.instance_1 = new lib.model2casualsole2ic();
	this.instance_1.parent = this;

	this.instance_2 = new lib.model3casualsole2ic();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,85,72);


(lib.Symbol24copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 1
	this.instance = new lib.model5socialeventssole1ic();
	this.instance.parent = this;

	this.instance_1 = new lib.model2casualsole1ic();
	this.instance_1.parent = this;

	this.instance_2 = new lib.model3casualsole1ic();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,85,72);


(lib.Symbol23copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 1
	this.instance = new lib.galben();
	this.instance.parent = this;

	this.instance_1 = new lib.model6freetimesole1ic();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,85,72);


(lib.Symbol22copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 1
	this.instance = new lib.model1officepattern1ic();
	this.instance.parent = this;

	this.instance_1 = new lib.model2casualpattern1ic();
	this.instance_1.parent = this;

	this.instance_2 = new lib.model3casualpattern1ic();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71,70);


(lib.Symbol21copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 1
	this.instance = new lib.model1officepattern2ic();
	this.instance.parent = this;

	this.instance_1 = new lib.model2casualpattern2ic();
	this.instance_1.parent = this;

	this.instance_2 = new lib.model3casualpattern2ic();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71,70);


(lib.Symbol20copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 1
	this.instance = new lib.model1officepattern3ic();
	this.instance.parent = this;

	this.instance_1 = new lib.model2casualpattern3ic();
	this.instance_1.parent = this;

	this.instance_2 = new lib.model3casualpattern3ic();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71,70);


(lib.Symbol19copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.accessories1ic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53,58);


(lib.Symbol18copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.accessories2icpngcopy();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,89,46);


(lib.Symbol17copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.accessories3ic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54,55);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.YoutubeButtons7326();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.Symbol15copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap477();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.Symbol12copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.googleplaybutton();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.86,0.86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,248.6,86);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer 2
	this.instance = new lib.Brunchwithfriends();
	this.instance.parent = this;
	this.instance.setTransform(124,133);

	this.instance_1 = new lib.Businesslunch();
	this.instance_1.parent = this;
	this.instance_1.setTransform(110,147);

	this.instance_2 = new lib.Charitygala();
	this.instance_2.parent = this;
	this.instance_2.setTransform(119,139);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// Layer 3
	this.instance_3 = new lib.AwesomeIwillhavetocreateapairofshoestowearat();
	this.instance_3.parent = this;
	this.instance_3.setTransform(90,33);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).wait(3));

	// Layer 1
	this.instance_4 = new lib.IvereceivedaninvitationfromFashionWeekEventsLetsse();
	this.instance_4.parent = this;
	this.instance_4.setTransform(83,34);

	this.instance_5 = new lib.bubbleboxbase();
	this.instance_5.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,388,261);


(lib.Symbol9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.bt_next();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155,155);


(lib.Symbol3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.bt_moregames1111();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155,155);


(lib.Symbol97 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.instance = new lib.Symbol92copy();
	this.instance.parent = this;
	this.instance.setTransform(141.6,120.6,0.51,0.51,0,0,0,56.5,59.6);

	this.instance_1 = new lib.idlehandsjuryst();
	this.instance_1.parent = this;
	this.instance_1.setTransform(45,105);

	this.instance_2 = new lib.Symbol98();
	this.instance_2.parent = this;
	this.instance_2.setTransform(106.5,257,1,1,0,0,0,105.5,258);

	this.text = new lib.Symbol87();
	this.text.parent = this;
	this.text.setTransform(276.1,-11.5,1,1,0,0,0,111.1,53.5);

	this.instance_3 = new lib.enthusiastichandsjuryst();
	this.instance_3.parent = this;
	this.instance_3.setTransform(52,68);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance,p:{y:120.6}}]}).to({state:[{t:this.instance_2},{t:this.instance_3},{t:this.text},{t:this.instance,p:{y:120.8}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,-1,210,514);


(lib.Symbol96 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 2
	this.stand2 = new lib.Symbol83();
	this.stand2.parent = this;
	this.stand2.setTransform(666.7,414.5,1,1,0,0,0,88.5,169.5);
	this.stand2.visible = false;

	this.stand1 = new lib.Symbol83();
	this.stand1.parent = this;
	this.stand1.setTransform(458.6,414.5,1,1,0,0,0,88.5,169.5);
	this.stand1.visible = false;

	this.instance = new lib.Symbol83();
	this.instance.parent = this;
	this.instance.setTransform(240.5,414.5,1,1,0,0,0,88.5,169.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.stand1},{t:this.stand2}]},1).wait(1));

	// Layer 1
	this.jurat = new lib.Symbol97();
	this.jurat.parent = this;
	this.jurat.setTransform(-517.6,401.6,1,1,0,0,0,44.5,332);

	this.instance_1 = new lib.blurrybgjpgcopy();
	this.instance_1.parent = this;

	this.note = new lib.Symbol99();
	this.note.parent = this;
	this.note.setTransform(512.7,353.8,1,1,0,0,0,141.1,29.3);

	this.instance_2 = new lib.jurybg();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.jurat,p:{regX:44.5,regY:332,scaleX:1,scaleY:1,x:-517.6,y:401.6}}]}).to({state:[{t:this.instance_2},{t:this.jurat,p:{regX:105.6,regY:258,scaleX:0.84,scaleY:0.84,x:122.5,y:349}},{t:this.note}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-561.1,0,1361.1,600);


(lib.Symbol84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.instance = new lib.par();
	this.instance.parent = this;
	this.instance.setTransform(191,199);

	this.instance_1 = new lib.idlehands();
	this.instance_1.parent = this;
	this.instance_1.setTransform(39,224);

	this.instance_2 = new lib.Symbol94();
	this.instance_2.parent = this;
	this.instance_2.setTransform(182,294,1,1,0,0,0,162,295);

	this.instance_3 = new lib.Symbol92();
	this.instance_3.parent = this;
	this.instance_3.setTransform(247.5,258,1,1,0,0,0,56.5,59.5);

	this.instance_4 = new lib.enthusiastichands();
	this.instance_4.parent = this;
	this.instance_4.setTransform(54,150);

	this.instance_5 = new lib.corp();
	this.instance_5.parent = this;
	this.instance_5.setTransform(20,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(20,-1,381,590);


(lib.Symbol80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol81();
	this.instance.parent = this;
	this.instance.setTransform(-1,237,1,1,0,0,0,-1,188);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-0.9,rotation:5.2,x:-0.9},24).to({regX:-1,rotation:0,x:-1},25).wait(1));

	// Layer 2
	this.instance_1 = new lib.covershoehand();
	this.instance_1.parent = this;
	this.instance_1.setTransform(160,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,4,265,245);


(lib.Symbol79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol80();
	this.instance.parent = this;
	this.instance.setTransform(705.5,163.5,1,1,0,0,0,131.5,122.5);

	this.instance_1 = new lib.covercmchar();
	this.instance_1.parent = this;
	this.instance_1.setTransform(635,90);

	this.instance_2 = new lib.Symbol88();
	this.instance_2.parent = this;
	this.instance_2.setTransform(678,267.5,1,1,0,0,0,139,161.5);

	this.instance_3 = new lib.elizabasepngcopy();
	this.instance_3.parent = this;
	this.instance_3.setTransform(596,-90,0.354,0.354);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(539,-90,300,519);


(lib.Symbol77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 2
	this.instance = new lib.Bitmap8();
	this.instance.parent = this;
	this.instance.setTransform(4,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer 1
	this.personaj = new lib.Symbol12();
	this.personaj.parent = this;
	this.personaj.setTransform(57.1,139,0.494,0.494,0,0,0,115.7,281.6);

	this.timeline.addTween(cjs.Tween.get(this.personaj).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,270.9,592.3);


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
	this.instance.setTransform(400,147);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},1).to({y:450},8).to({startPosition:0},1).to({y:147},9).wait(1));

	// Layer 2
	this.instance_1 = new lib.Tween3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(400,1048);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:0},1).to({y:750},8).to({startPosition:0},1).to({y:1048},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3,800,1201);


(lib.Symbol45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// accesorii
	this.accesorii = new lib.Symbol43copy();
	this.accesorii.parent = this;
	this.accesorii.setTransform(219.2,244.8,1,1,0,0,0,-83,-30);

	this.timeline.addTween(cjs.Tween.get(this.accesorii).wait(1));

	// pattern
	this.frills = new lib.Symbol46();
	this.frills.parent = this;
	this.frills.setTransform(81.5,120.5,1,1,0,0,0,104.5,134.5);

	this.timeline.addTween(cjs.Tween.get(this.frills).wait(1));

	// broderie
	this.broderie = new lib.Symbol48();
	this.broderie.parent = this;
	this.broderie.setTransform(128.8,43.2,1,1,0,0,0,22,17);

	this.timeline.addTween(cjs.Tween.get(this.broderie).wait(1));

	// frills
	this.pattern = new lib.Symbol47();
	this.pattern.parent = this;
	this.pattern.setTransform(125.5,140,1,1,0,0,0,127.5,140);

	this.timeline.addTween(cjs.Tween.get(this.pattern).wait(1));

	// culoare
	this.culoare = new lib.Symbol44();
	this.culoare.parent = this;
	this.culoare.setTransform(129,287,1,1,0,0,0,126.5,139);

	this.timeline.addTween(cjs.Tween.get(this.culoare).wait(1));

	// Layer 5
	this.dress3_manechin = new lib.Symbol65();
	this.dress3_manechin.parent = this;
	this.dress3_manechin.setTransform(-427,-644.1,1,1,0,0,0,74,235);
	this.dress3_manechin.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.dress3_manechin).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-920.8,-1357,1196.4,1671);


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
	this.googleplay = new lib.Symbol12copy2();
	this.googleplay.parent = this;
	this.googleplay.setTransform(126.8,43.4,0.914,0.914,0,0,0,124.5,43.1);
	this.googleplay.visible = false;

	this.playbutton = new lib.Symbol4();
	this.playbutton.parent = this;
	this.playbutton.setTransform(639,383);

	this.moregames = new lib.Symbol3();
	this.moregames.parent = this;
	this.moregames.setTransform(561.5,381.5,1,1,0,0,0,77.5,77.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.moregames},{t:this.playbutton},{t:this.googleplay}]}).wait(1));

	// Layer 1
	this.fullscreenBtn = new lib.Symbol6();
	this.fullscreenBtn.parent = this;
	this.fullscreenBtn.setTransform(717.2,47.7,0.6,0.6,0,0,0,77.7,77.7);

	this.youtube = new lib.Symbol17();
	this.youtube.parent = this;
	this.youtube.setTransform(903.3,-186.7,0.66,0.66,0,0,0,50,50);

	this.logo = new lib.Symbol51();
	this.logo.parent = this;
	this.logo.setTransform(947.7,-146.2,0.384,0.384,0,0,0,122.6,132.8);

	this.instance = new lib.titletext();
	this.instance.parent = this;
	this.instance.setTransform(441,59,0.791,0.791);

	this.instance_1 = new lib.coverobjectstable();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1,428);

	this.instance_2 = new lib.covertable();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,411);

	this.instance_3 = new lib.Symbol79();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-325.7,373.8,1,1,0,0,0,139,203.5);

	this.instance_4 = new lib.basecover();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.logo},{t:this.youtube},{t:this.fullscreenBtn}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-219.7,1013.6,821.8);


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
p.nominalBounds = new cjs.Rectangle(-4,-4,200,200);


(lib.Symbol57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.funda_but = new lib.Symbol56();
	this.funda_but.parent = this;
	this.funda_but.setTransform(627.2,57.9,1.398,1.398,0,0,0,42.6,35);

	this.aplicatii_but = new lib.Symbol55();
	this.aplicatii_but.parent = this;
	this.aplicatii_but.setTransform(368.3,31.1,1.398,1.398,0,0,0,41.6,36);

	this.embroidery_but = new lib.Symbol54();
	this.embroidery_but.parent = this;
	this.embroidery_but.setTransform(505.8,39.5,1.398,1.398,0,0,0,43.6,42);

	this.model_but = new lib.Symbol53();
	this.model_but.parent = this;
	this.model_but.setTransform(223.3,-26,1.398,1.398);

	this.color_but = new lib.Symbol52();
	this.color_but.parent = this;
	this.color_but.setTransform(193.4,29.2,1.398,1.398,0,0,0,49.6,40.5);

	this.instance = new lib.covertable();
	this.instance.parent = this;
	this.instance.setTransform(0,-77);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.color_but},{t:this.model_but},{t:this.embroidery_but},{t:this.aplicatii_but},{t:this.funda_but}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-77,800,190);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// accesorii
	this.accesorii = new lib.Symbol43copy();
	this.accesorii.parent = this;
	this.accesorii.setTransform(273.3,206.1,1,1,0,0,0,-83,-30);

	this.timeline.addTween(cjs.Tween.get(this.accesorii).wait(1));

	// frills
	this.frills = new lib.Symbol42();
	this.frills.parent = this;
	this.frills.setTransform(57.8,93,1,1,0,0,0,52.5,86.5);

	this.timeline.addTween(cjs.Tween.get(this.frills).wait(1));

	// broderie
	this.broderie = new lib.Symbol41();
	this.broderie.parent = this;
	this.broderie.setTransform(94.5,73,1,1,0,0,0,21.5,13);

	this.timeline.addTween(cjs.Tween.get(this.broderie).wait(1));

	// pattern
	this.pattern = new lib.Symbol40();
	this.pattern.parent = this;
	this.pattern.setTransform(101,237,1,1,0,0,0,96,231);

	this.timeline.addTween(cjs.Tween.get(this.pattern).wait(1));

	// culoare
	this.culoare = new lib.Symbol38();
	this.culoare.parent = this;
	this.culoare.setTransform(121,261.1,1,1,0,0,0,99,234);

	this.timeline.addTween(cjs.Tween.get(this.culoare).wait(1));

	// Layer 5
	this.dress2_manechin = new lib.Symbol65_1();
	this.dress2_manechin.parent = this;
	this.dress2_manechin.setTransform(-546.7,30.1,1,1,0,0,0,74,235);
	this.dress2_manechin.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.dress2_manechin).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-866.7,-1251,1426.7,1516.1);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// accesorii
	this.accesorii = new lib.Symbol43();
	this.accesorii.parent = this;
	this.accesorii.setTransform(244,115);

	this.timeline.addTween(cjs.Tween.get(this.accesorii).wait(1));

	// Layer 4
	this.frills = new lib.Symbol36();
	this.frills.parent = this;
	this.frills.setTransform(170.8,43.6,1,1,0,0,0,33,18);

	this.timeline.addTween(cjs.Tween.get(this.frills).wait(1));

	// Layer 3
	this.broderie = new lib.Symbol35();
	this.broderie.parent = this;
	this.broderie.setTransform(218,120,1,1,0,0,0,166,127);

	this.timeline.addTween(cjs.Tween.get(this.broderie).wait(1));

	// Layer 2
	this.pattern = new lib.Symbol34();
	this.pattern.parent = this;
	this.pattern.setTransform(132.5,213,1,1,0,0,0,162.5,213);

	this.timeline.addTween(cjs.Tween.get(this.pattern).wait(1));

	// Layer 1
	this.culoare = new lib.Symbol32copy();
	this.culoare.parent = this;
	this.culoare.setTransform(211,434.1,1,1,0,0,0,165,222);

	this.timeline.addTween(cjs.Tween.get(this.culoare).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-979,-1071,1237,1499.1);


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
	this.instance.setTransform(-114.2,96.8,0.978,0.978,0,0,0,100,100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-215.8,-4.9,195.5,195.5);


(lib.Symbol16copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// Layer 6
	this.noacc = new lib.Symbol59copy2();
	this.noacc.parent = this;
	this.noacc.setTransform(122.6,-306.1,1.04,1.04,0,0,0,50.1,29.2);

	this.accesorii = new lib.Symbol19copy2();
	this.accesorii.parent = this;
	this.accesorii.setTransform(96.2,-520.3,1,1,0,0,0,23.5,24);

	this.accesorii1 = new lib.Symbol18copy2();
	this.accesorii1.parent = this;
	this.accesorii1.setTransform(89.5,-450.6,0.885,0.885,0,0,0,34.6,25.7);

	this.accesorii2 = new lib.Symbol17copy3();
	this.accesorii2.parent = this;
	this.accesorii2.setTransform(83,-392.3,1,1,0,0,0,12.5,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.accesorii2,p:{x:83,y:-392.3}},{t:this.accesorii1,p:{x:89.5,y:-450.6}},{t:this.accesorii,p:{x:96.2,y:-520.3}},{t:this.noacc,p:{x:122.6,y:-306.1}}]}).to({state:[{t:this.accesorii2,p:{x:81.5,y:159}},{t:this.accesorii1,p:{x:87.9,y:100.7}},{t:this.accesorii,p:{x:94.6,y:31}},{t:this.noacc,p:{x:121.1,y:245.2}}]},4).wait(1));

	// Layer 5
	this.frills5 = new lib.Symbol73copy2();
	this.frills5.parent = this;
	this.frills5.setTransform(793.2,-750,1,1,0,0,0,40,23.3);

	this.frills4 = new lib.Symbol72copy2();
	this.frills4.parent = this;
	this.frills4.setTransform(793.2,-840,1,1,0,0,0,40,23.3);

	this.frills3 = new lib.Symbol71copy2();
	this.frills3.parent = this;
	this.frills3.setTransform(926.2,-796.6,1,1,0,0,0,40,23.3);

	this.nofrills = new lib.Symbol60copy2();
	this.nofrills.parent = this;
	this.nofrills.setTransform(344.6,-312.3,0.831,0.831,0,0,0,45.1,26.4);

	this.frills = new lib.Symbol22copy();
	this.frills.parent = this;
	this.frills.setTransform(337.7,-546.5,0.843,0.843,0,0,0,38.6,29.9);

	this.frills1 = new lib.Symbol21copy();
	this.frills1.parent = this;
	this.frills1.setTransform(305.5,-488.8,0.854,0.854);

	this.frills2 = new lib.Symbol20copy();
	this.frills2.parent = this;
	this.frills2.setTransform(336.3,-387.5,0.828,0.828,0,0,0,35,28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frills2,p:{x:336.3,y:-387.5}},{t:this.frills1,p:{x:305.5,y:-488.8}},{t:this.frills,p:{x:337.7,y:-546.5}},{t:this.nofrills,p:{x:344.6,y:-312.3}},{t:this.frills3,p:{x:926.2,y:-796.6}},{t:this.frills4,p:{x:793.2,y:-840}},{t:this.frills5,p:{x:793.2,y:-750}}]}).to({state:[{t:this.frills2,p:{x:93.2,y:168.7}},{t:this.frills1,p:{x:62.4,y:67.4}},{t:this.frills,p:{x:94.7,y:9.7}},{t:this.nofrills,p:{x:101.6,y:243.9}},{t:this.frills3,p:{x:683.2,y:-240.4}},{t:this.frills4,p:{x:550.1,y:-283.8}},{t:this.frills5,p:{x:550.1,y:-193.8}}]},3).to({state:[{t:this.frills2,p:{x:210.3,y:-334.5}},{t:this.frills1,p:{x:179.5,y:-435.7}},{t:this.frills,p:{x:211.7,y:-493.4}},{t:this.nofrills,p:{x:218.6,y:-259.3}},{t:this.frills3,p:{x:800.2,y:-743.6}},{t:this.frills4,p:{x:667.2,y:-786.9}},{t:this.frills5,p:{x:667.2,y:-696.9}}]},1).wait(1));

	// Layer 4
	this.broderie5 = new lib.Symbol76copy2();
	this.broderie5.parent = this;
	this.broderie5.setTransform(525.3,-742.9,1,1,0,0,0,40,23.3);

	this.broderie4 = new lib.Symbol75copy2();
	this.broderie4.parent = this;
	this.broderie4.setTransform(525.3,-832.7,1,1,0,0,0,40,23.5);

	this.broderie2 = new lib.Symbol74copy2();
	this.broderie2.parent = this;
	this.broderie2.setTransform(85.4,-423,0.834,0.834,-25,0,0,40.1,23.4);

	this.nobroderie = new lib.Symbol61copy2();
	this.nobroderie.parent = this;
	this.nobroderie.setTransform(91.4,-297.7,0.834,0.834,-25,0,0,40.1,23.5);

	this.broderie1 = new lib.Symbol25copy2();
	this.broderie1.parent = this;
	this.broderie1.setTransform(82.1,-504.9,0.833,0.836,-25,0,0,40.6,13.1);

	this.broderie = new lib.Symbol24copy2();
	this.broderie.parent = this;
	this.broderie.setTransform(82.4,-578.1,0.844,0.846,-25,0,0,38.6,16.6);

	this.broderie3 = new lib.Symbol23copy2();
	this.broderie3.parent = this;
	this.broderie3.setTransform(89.1,-365.3,0.867,0.869,-25,0,0,36.6,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.broderie3,p:{x:89.1,y:-365.3}},{t:this.broderie,p:{x:82.4,y:-578.1}},{t:this.broderie1,p:{x:82.1,y:-504.9}},{t:this.nobroderie,p:{x:91.4,y:-297.7}},{t:this.broderie2,p:{x:85.4,y:-423}},{t:this.broderie4,p:{x:525.3,y:-832.7}},{t:this.broderie5,p:{x:525.3,y:-742.9}}]}).to({state:[{t:this.broderie3,p:{x:86.1,y:178.9}},{t:this.broderie,p:{x:79.4,y:-33.9}},{t:this.broderie1,p:{x:79.1,y:39.2}},{t:this.nobroderie,p:{x:88.4,y:246.5}},{t:this.broderie2,p:{x:82.4,y:121.2}},{t:this.broderie4,p:{x:522.3,y:-288.6}},{t:this.broderie5,p:{x:522.3,y:-198.8}}]},2).to({state:[{t:this.broderie3,p:{x:342.8,y:-305.3}},{t:this.broderie,p:{x:336.1,y:-518.1}},{t:this.broderie1,p:{x:335.8,y:-444.9}},{t:this.nobroderie,p:{x:345.1,y:-237.7}},{t:this.broderie2,p:{x:339.1,y:-363}},{t:this.broderie4,p:{x:779,y:-772.7}},{t:this.broderie5,p:{x:779,y:-682.9}}]},1).wait(2));

	// Layer 3
	this.pattern5 = new lib.Symbol70copy2();
	this.pattern5.parent = this;
	this.pattern5.setTransform(451.2,-776.2,1,1,0,0,0,41,24);

	this.pattern4 = new lib.Symbol69copy2();
	this.pattern4.parent = this;
	this.pattern4.setTransform(557.2,-772.2,1,1,0,0,0,41,24);

	this.pattern3 = new lib.Symbol68copy();
	this.pattern3.parent = this;
	this.pattern3.setTransform(185.1,-398.1);

	this.nopattern = new lib.Symbol62copy2();
	this.nopattern.parent = this;
	this.nopattern.setTransform(224.1,-300.3,1,1,0,0,0,40,23.3);

	this.pattern2 = new lib.Symbol28copy();
	this.pattern2.parent = this;
	this.pattern2.setTransform(226.1,-450.1,1,1,0,0,0,41,24);

	this.pattern1 = new lib.Symbol27copy();
	this.pattern1.parent = this;
	this.pattern1.setTransform(226.1,-524.1,1,1,0,0,0,41,24);

	this.pattern = new lib.Symbol26copy();
	this.pattern.parent = this;
	this.pattern.setTransform(226.1,-597.6,1,1,0,0,0,41,24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pattern,p:{x:226.1,y:-597.6}},{t:this.pattern1,p:{x:226.1,y:-524.1}},{t:this.pattern2,p:{x:226.1,y:-450.1}},{t:this.nopattern,p:{x:224.1,y:-300.3}},{t:this.pattern3,p:{x:185.1,y:-398.1}},{t:this.pattern4,p:{x:557.2,y:-772.2}},{t:this.pattern5,p:{x:451.2,y:-776.2}}]}).to({state:[{t:this.pattern,p:{x:111,y:-42.5}},{t:this.pattern1,p:{x:111,y:31}},{t:this.pattern2,p:{x:111,y:105}},{t:this.nopattern,p:{x:109,y:254.8}},{t:this.pattern3,p:{x:70,y:157}},{t:this.pattern4,p:{x:442.1,y:-217.1}},{t:this.pattern5,p:{x:336.1,y:-221.1}}]},1).to({state:[{t:this.pattern,p:{x:297.1,y:-548.6}},{t:this.pattern1,p:{x:297.1,y:-475.1}},{t:this.pattern2,p:{x:297.1,y:-401.1}},{t:this.nopattern,p:{x:295.1,y:-251.3}},{t:this.pattern3,p:{x:256.1,y:-349.1}},{t:this.pattern4,p:{x:628.2,y:-723.2}},{t:this.pattern5,p:{x:522.2,y:-727.2}}]},1).wait(3));

	// Layer 2
	this.culoare5 = new lib.Symbol67copy2();
	this.culoare5.parent = this;
	this.culoare5.setTransform(304.7,-208.6,1,1,0,0,0,35.5,22.5);

	this.culoare4 = new lib.Symbol64copy2();
	this.culoare4.parent = this;
	this.culoare4.setTransform(304.7,-293.6,1,1,0,0,0,35.5,22.5);

	this.culoare3 = new lib.Symbol63copy();
	this.culoare3.parent = this;
	this.culoare3.setTransform(70,219.1);

	this.culoare = new lib.Symbol31copy2();
	this.culoare.parent = this;
	this.culoare.setTransform(104.5,-12,1,1,0,0,0,35.5,22);

	this.culoare1 = new lib.Symbol30copy();
	this.culoare1.parent = this;
	this.culoare1.setTransform(70,49);

	this.culoare2 = new lib.Symbol29copy();
	this.culoare2.parent = this;
	this.culoare2.setTransform(105.5,156.6,1,1,0,0,0,35.5,22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.culoare2,p:{x:105.5,y:156.6}},{t:this.culoare1,p:{x:70,y:49}},{t:this.culoare,p:{x:104.5,y:-12}},{t:this.culoare3,p:{regX:0,regY:0,x:70,y:219.1}},{t:this.culoare4,p:{x:304.7,y:-293.6}},{t:this.culoare5,p:{x:304.7,y:-208.6}}]}).to({state:[{t:this.culoare2,p:{x:265.6,y:-336.6}},{t:this.culoare1,p:{x:230.1,y:-444.2}},{t:this.culoare,p:{x:264.6,y:-505.2}},{t:this.culoare3,p:{regX:35.5,regY:22.5,x:265.6,y:-251.6}},{t:this.culoare4,p:{x:464.8,y:-786.7}},{t:this.culoare5,p:{x:464.8,y:-701.7}}]},1).wait(4));

	// Layer 1
	this.instance = new lib.baseicontray();
	this.instance.parent = this;
	this.instance.setTransform(37,-61,0.829,0.829);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleY:0.9,y:-93},0).wait(2).to({scaleY:0.83,y:-61},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(37,-863.3,929.2,1206.7);


(lib.Symbol14copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween17("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(95,95);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.02,scaleY:1.02},11).to({scaleX:1,scaleY:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.4,190,190);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol86();
	this.instance.parent = this;
	this.instance.setTransform(105.5,108.3,1,1,0,0,0,105.5,108.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,212,217);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var frequency = 10;
		stage.enableMouseOver(frequency);
		this.moregames.cursor = "pointer";
		this.message_but.cursor = "pointer";
		this.nextlevel.cursor = "pointer";
		this.logo.cursor = "pointer";
		var buttonsArray = [this.logo,this.message_but,this.nextlevel,this.moregames];
		var buttonsArrayString = ["logo","message_but","nextlevel","moregames"];
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
		
		this.nextlevel.addEventListener("click", nextlevelfunctionhere.bind(this));
		function nextlevelfunctionhere(event) {
			if(this.bubble.currentFrame == 1){
			exportRoot.animInterLevels = "level1";	
			this.bubble.visible=false;
			exportRoot.goAnim();
			}
			else if(this.bubble.currentFrame == 2){
			exportRoot.animInterLevels = "level2";
				this.bubble.visible=false;
			exportRoot.goAnim();
			}
			else if(this.bubble.currentFrame == 3){
			exportRoot.animInterLevels = "level3";	
			exportRoot.goAnim();
			}else{}
			
			this.girl.gotoAndStop(0);
		
		}
		this.message_but.addEventListener("click", message_butfunctionhere.bind(this));
		function message_butfunctionhere(event) {
			exportRoot.goAnim();
			exportRoot.animInterLevels = "message";	
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.logo = new lib.Symbol51_1();
	this.logo.parent = this;
	this.logo.setTransform(56.1,55.1,0.449,0.449,0,0,0,122.6,122.6);

	this.bubble = new lib.Symbol10();
	this.bubble.parent = this;
	this.bubble.setTransform(576.5,191,1,1,0,0,0,169.5,124);

	this.nextlevel = new lib.Symbol9_1();
	this.nextlevel.parent = this;
	this.nextlevel.setTransform(734.7,538.5,0.716,0.716,0,0,0,77.5,77.5);

	this.moregames = new lib.Symbol3_1();
	this.moregames.parent = this;
	this.moregames.setTransform(58.2,538.5,0.716,0.716,0,0,0,77.5,77.5);

	this.message_but = new lib.Symbol8();
	this.message_but.parent = this;
	this.message_but.setTransform(649,448.5,1,1,0,0,0,61,65.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.message_but},{t:this.moregames},{t:this.nextlevel},{t:this.bubble},{t:this.logo}]}).wait(1));

	// Layer 1
	this.girl = new lib.Symbol84();
	this.girl.parent = this;
	this.girl.setTransform(300,304,1,1,0,0,0,181,296);

	this.instance = new lib.bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.girl}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,800,600);


(lib.Symbol31copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance = new lib.Symbol14copy();
	this.instance.parent = this;
	this.instance.setTransform(308.9,93.4,0.978,0.978,0,0,0,95,95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(210.1,-2.5,195.6,195.6);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.animStars1 = function(){
			exportRoot.sparklesSound();
		}
		
		
		var frequency = 10;
		stage.enableMouseOver(frequency);
		var currentTargetNumChildren;
		var buttonsArray = [this.dulap.noacc,this.dulap.nofrills,this.dulap.nopattern,this.dulap.nobroderie,this.logo,this.poza1,this.poza2,this.replay_but,this.moregames,this.moregames1,this.nextlevel,this.finish_but,this.butoane.color_but,this.butoane.model_but,this.butoane.embroidery_but,this.butoane.aplicatii_but,this.butoane.funda_but,
		this.dulap.culoare,this.dulap.culoare1,this.dulap.culoare2,this.dulap.culoare3,this.dulap.culoare4,this.dulap.culoare5,this.dulap.pattern,this.dulap.pattern1,this.dulap.pattern2,this.dulap.pattern3,this.dulap.pattern4,this.dulap.pattern5,this.dulap.broderie,this.dulap.broderie1,this.dulap.broderie2,this.dulap.broderie3,this.dulap.broderie4,this.dulap.broderie5,this.dulap.frills,this.dulap.frills1,this.dulap.frills2,this.dulap.frills3,this.dulap.frills4,this.dulap.frills5,this.dulap.accesorii,this.dulap.accesorii1,this.dulap.accesorii2];
		var buttonsArrayString = ["noacc","nofrills","nopattern","nobroderie","logo","poza1","poza2","replay_but","moregames","moregames1","nextlevel","finish_but","color_but","model_but","embroidery_but","aplicatii_but","funda_but","culoare","culoare1","culoare2","culoare3","culoare4","culoare5","pattern","pattern1","pattern2","pattern3","pattern4","pattern5","broderie","broderie1","broderie2","broderie3","broderie4","broderie5","frills","frills1","frills2","frills3","frills4","frills5","accesorii","accesorii1","accesorii2"];
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
				exportRoot.animInterLevels = "interlevel";
				
				exportRoot.goAnim();
				//gdApi.showBanner();
				//exportRoot.fadeInElement(exportRoot.interlevel);
				
			}
			if(event.currentTarget.name.indexOf("finish_but") > -1){
				exportRoot.animInterLevels = "urmatorulevel";
				exportRoot.goAnim();
				//gdApi.showBanner();
				//exportRoot.fadeInElement(exportRoot.interlevel);
				
			}
			if(event.currentTarget.name.indexOf("finallevel1") > -1){
				exportRoot.animInterLevels = "final";
				exportRoot.goAnim();
				//gdApi.showBanner();
				//exportRoot.fadeInElement(exportRoot.interlevel);
				
			}
			
			
				if(event.currentTarget.name.indexOf("replay_but") > -1){
				exportRoot.animInterLevels = "replay";
				exportRoot.goAnim();
					location.reload();
				//exportRoot.fadeInElement(exportRoot.interlevel);
				
			}
			if(event.currentTarget.name.indexOf("poza1") > -1){
				exportRoot.poza1link();
			}
			if(event.currentTarget.name.indexOf("poza2") > -1){
				
				exportRoot.poza2link();
			}
			if(event.currentTarget.name.indexOf("moregames") > -1){
				exportRoot.moregamesfunction();
			}
			if(event.currentTarget.name.indexOf("logo") > -1){
				exportRoot.logofunction();
			}
			if(event.currentTarget.name.indexOf("noacc") > -1){
				this.nochange1();
			}
			if(event.currentTarget.name.indexOf("pattern") > -1){
				this.nochange2();
			}
			if(event.currentTarget.name.indexOf("frills") > -1){
				this.nochange3();
			}
			if(event.currentTarget.name.indexOf("broderie") > -1){
				this.nochange4();
			}
			
			if(event.currentTarget.name.indexOf("color_but") > -1){
				this.dulap.gotoAndStop(0);
				
			}
			if(event.currentTarget.name.indexOf("model_but") > -1){
				this.dulap.gotoAndStop(1);
				
			}
			if(event.currentTarget.name.indexOf("embroidery_but") > -1){
				this.dulap.gotoAndStop(3);
				
			}
			if(event.currentTarget.name.indexOf("aplicatii_but") > -1){
				this.dulap.gotoAndStop(2);
				
			}
			if(event.currentTarget.name.indexOf("funda_but") > -1){
				this.dulap.gotoAndStop(4);
				
			}
			
			
			
			if(event.currentTarget.name.indexOf("culoare") > -1){
				this.change1(event.currentTarget.name , "culoare");
				this.animStars1();
				
				
				
			}
			if(event.currentTarget.name.indexOf("pattern") > -1){
				this.change2(event.currentTarget.name , "pattern");
				this.animStars1();
				
			}
			if(event.currentTarget.name.indexOf("broderie") > -1){
				this.change3(event.currentTarget.name , "broderie");
				this.animStars1();
				
				
				
			}
			if(event.currentTarget.name.indexOf("frills") > -1){
				this.change4(event.currentTarget.name , "frills");
				this.animStars1();
		
				
				
			}
			if(event.currentTarget.name.indexOf("accesorii") > -1){
				this.change5(event.currentTarget.name , "accesorii");
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
		this.nochange1 = function(arg){
			if(this.dress1.visible == true){
		this.dress1.accesorii.gotoAndStop(0);			
				}
			else if(this.dress2.visible == true){
		this.dress2.accesorii.gotoAndStop(0);			
				}
				else if(this.dress3.visible == true){
		this.dress3.accesorii.gotoAndStop(0);			
				}
			}
			
			
			
			this.nochange2 = function(arg){
			if(this.dress1.visible == true){
		this.dress1.pattern.gotoAndStop(0);			
				}
			else if(this.dress2.visible == true){
		this.dress2.pattern.gotoAndStop(0);			
				}
				else if(this.dress3.visible == true){
		this.dress3.pattern.gotoAndStop(0);			
				}
			}
			
			
			
			this.nochange3 = function(arg){
			if(this.dress1.visible == true){
		this.dress1.frills.gotoAndStop(0);			
				}
			else if(this.dress2.visible == true){
		this.dress2.frills.gotoAndStop(0);			
				}
				else if(this.dress3.visible == true){
		this.dress3.frills.gotoAndStop(0);			
				}
			}
			
			this.nochange4 = function(arg){
			if(this.dress1.visible == true){
		this.dress1.broderie.gotoAndStop(0);			
				}
			else if(this.dress2.visible == true){
		this.dress2.broderie.gotoAndStop(0);			
				}
				else if(this.dress3.visible == true){
		this.dress3.broderie.gotoAndStop(0);			
				}
			}
			
			
		this.change1 = function(arg){
			if(this.dress1.visible == true){
		this.dress1.culoare.gotoAndStop(arg);			
				}
			else if(this.dress2.visible == true){
		this.dress2.culoare.gotoAndStop(arg);			
				}
				else if(this.dress3.visible == true){
		this.dress3.culoare.gotoAndStop(arg);			
				}
			}
		
		
		this.change2 = function(arg){
		if(this.dress1.visible == true){
		this.dress1.pattern.gotoAndStop(arg);			
				}
			else if(this.dress2.visible == true){
		this.dress2.pattern.gotoAndStop(arg);			
				}
				else if(this.dress3.visible == true){
		this.dress3.pattern.gotoAndStop(arg);			
				}
		
		
		}
		this.change3 = function(arg){
		if(this.dress1.visible == true){
		this.dress1.broderie.gotoAndStop(arg);			
				}
			else if(this.dress2.visible == true){
		this.dress2.broderie.gotoAndStop(arg);			
				}
				else if(this.dress3.visible == true){
		this.dress3.broderie.gotoAndStop(arg);			
				}
		
		}
		this.change4 = function(arg){
		if(this.dress1.visible == true){
		this.dress1.frills.gotoAndStop(arg);			
				}
			else if(this.dress2.visible == true){
		this.dress2.frills.gotoAndStop(arg);			
				}
				else if(this.dress3.visible == true){
		this.dress3.frills.gotoAndStop(arg);			
				}
		
		}
		this.change5 = function(arg){
		if(this.dress1.visible == true){
		this.dress1.accesorii.gotoAndStop(arg);			
				}
			else if(this.dress2.visible == true){
		this.dress2.accesorii.gotoAndStop(arg);			
				}
				else if(this.dress3.visible == true){
		this.dress3.accesorii.gotoAndStop(arg);			
				}
		
		}
		
		
		this.finishlevel = function(){
			//this.manechin.gotoAndStop(1);
			//this.rapunzel.visible=false;
			
			//this.poza1.visible=true;
		/*	if (stringHostDaria == "www.google.com" || stringHostDaria == "www.azgametv.com"){
								this.poza1.visible=false;
							}else{
								this.poza1.visible=true;
							}*/
							if(this.checklevel.currentFrame == 0){
							this.dress1.scaleX = 0.3;
							this.dress1.scaleY = 0.3;
							this.dress1.x = 240;
							this.dress1.y = 215;
								
							}else if(this.checklevel.currentFrame == 1){
							this.dress1.visible=false;
							this.dress2.scaleX = 0.3;
							this.dress2.scaleY = 0.3;
							this.dress2.x = 200;
							this.dress2.y = 270;
								
							}
							else if(this.checklevel.currentFrame == 2){
							this.dress3.scaleX = 0.3;
							this.dress3.scaleY = 0.3;
							this.dress3.x = 240;
							this.dress3.y = 231;
							
							}
			this.masa.visible=false;
			this.butoane.visible=false;
			this.dulap.visible=false;
			this.nextlevel.visible=false;
							this.finish_but.visible=false;
							this.bg.gotoAndStop(1);
							this.bg.note.gotoAndPlay(1);
							this.poza1.visible=true;
			
		}
		
		this.level2 = function(){
			//this.manechin.gotoAndStop(0);
			//this.rapunzel.visible=true;
			this.butoane.visible=true;
			this.dulap.visible=true;
			this.bg.note.gotoAndStop(0);
			this.dulap.gotoAndStop(0);
			this.poza1.visible=false;
			this.poza2.visible=false;
			this.nextlevel.visible=true;
			this.finish_but.visible=false;
			this.dress1.visible=false;
			this.dress2.visible=true;
			this.checklevel.gotoAndStop(1);
			this.bg.jurat.gotoAndStop(0);
		}
		
		this.level3 = function(){
			this.manechin.gotoAndStop(0);
			this.rapunzel.visible=true;
			this.butoane.visible=true;
			this.dulap.visible=true;
			this.dulap.gotoAndStop(0);
			this.masa.visible=true;
			this.poza1.visible=false;
			this.poza2.visible=false;
			this.nextlevel.visible=true;
			this.finish_but.visible=false;
			this.dress1.visible=false;
			this.dress2.visible=false;
			this.dress3.visible=true;
			this.bg.gotoAndStop(0);
			this.checklevel.gotoAndStop(2);
			this.changebut1();
			this.bg.note.gotoAndStop(0);
		this.bg.jurat.gotoAndStop(0);
		}
		
		
		this.finallevel = function() {
					this.textfinal.visible=true;
					this.rapunzel.gotoAndStop(1);
					this.butoane.visible=false;
					this.dulap.visible=false;
					this.logo.visible=false;
					this.poza1.visible=true;
					this.poza2.visible=true;
					this.dress1.visible=true;
					this.dress2.visible=true;
					this.poza1.x = 600;
					this.poza2.x = -70;
					this.poza2.y = 520;
					this.dress1.x = 250;
					this.dress2.x = 625;
					this.dress3.x = 452;
					this.nextlevel.visible=false;
					this.finish_but.visible=false;
					this.replay_but.visible=true;
					this.moregames1.visible=true;
					this.moregames.visible=false;
					this.textfinal.visible=true;
			this.bg.stand1.visible=true;
			this.bg.stand2.visible=true;
			this.bg.note.gotoAndStop(0);
			this.bg.jurat.text.visible=false;
		}
		
		this.replaylevel = function(){
			this.manechin.gotoAndStop(0);
			this.rapunzel.visible=true;
			this.butoane.visible=true;
			this.dulap.visible=true;
			this.dulap.gotoAndStop(0);
			this.poza1.visible=false;
			this.poza2.visible=false;
			this.nextlevel.visible=true;
			this.finish_but.visible=false;
			this.dress1.visible=true;
			this.dress2.visible=false;
			this.dress3.visible=false;
			this.moregames.visible=true;
			
		}
		this.resetgame = function(){
			
			this.dress1.culoare.gotoAndStop(0);	
			this.dress2.culoare.gotoAndStop(0);
			this.dress3.culoare.gotoAndStop(0);
			this.dress1.pattern.gotoAndStop(0);	
			this.dress2.pattern.gotoAndStop(0);
			this.dress3.pattern.gotoAndStop(0);
			this.dress1.broderie.gotoAndStop(0);	
			this.dress2.broderie.gotoAndStop(0);
			this.dress3.broderie.gotoAndStop(0);
			this.dress1.frills.gotoAndStop(0);	
			this.dress2.frills.gotoAndStop(0);
			this.dress3.frills.gotoAndStop(0);
			this.dress1.accesorii.gotoAndStop(0);	
			this.dress2.accesorii.gotoAndStop(0);
			this.dress3.accesorii.gotoAndStop(0);
			
		}
		
		this.changebut = function(){
			
			this.dulap.culoare.gotoAndStop(1);	
			this.dulap.culoare1.gotoAndStop(1);	
			this.dulap.culoare2.gotoAndStop(1);	
			this.dulap.culoare3.gotoAndStop(1);	
			this.dulap.pattern.gotoAndStop(1);
			this.dulap.pattern1.gotoAndStop(1);
			this.dulap.pattern2.gotoAndStop(1);
			this.dulap.pattern3.gotoAndStop(1);
			this.dulap.broderie.gotoAndStop(1);
			this.dulap.broderie1.gotoAndStop(1);
			this.dulap.broderie2.gotoAndStop(1);
			this.dulap.broderie3.gotoAndStop(1);
			this.dulap.frills.gotoAndStop(1);
			this.dulap.frills1.gotoAndStop(1);
			this.dulap.frills2.gotoAndStop(1);
		}
		this.changebut1 = function(){
			
			this.dulap.culoare.gotoAndStop(2);	
			this.dulap.culoare1.gotoAndStop(2);	
			this.dulap.culoare2.gotoAndStop(2);	
			this.dulap.culoare3.gotoAndStop(2);	
			this.dulap.pattern.gotoAndStop(2);
			this.dulap.pattern1.gotoAndStop(2);
			this.dulap.pattern2.gotoAndStop(2);
			this.dulap.pattern3.gotoAndStop(2);
			this.dulap.broderie.gotoAndStop(2);
			this.dulap.broderie1.gotoAndStop(2);
			this.dulap.broderie2.gotoAndStop(2);
			this.dulap.broderie3.gotoAndStop(2);
			this.dulap.frills.gotoAndStop(2);
			this.dulap.frills1.gotoAndStop(2);
			this.dulap.frills2.gotoAndStop(2);
		}
		/*this.animatieEliza = function(arg){
			 createjs.Tween.get(arg)
					 .to({y:4}, 700 , createjs.Ease.getPowInOut(2.2))
					 .to({y:7}, 700 , createjs.Ease.getPowInOut(2.2));
		}
		this.animatieEliza(exportRoot.level1.eliza);*/
		
		
		
		//functie replay
		//exportRoot.btnReplay.addEventListener("click", function () {location.reload();});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// final
	this.poza1 = new lib.Symbol32copy2();
	this.poza1.parent = this;
	this.poza1.setTransform(446.4,448.6,0.752,0.752,0,0,0,-212,4);

	this.poza2 = new lib.Symbol31copy3();
	this.poza2.parent = this;
	this.poza2.setTransform(433.6,321.8,0.752,0.752,0,0,0,92,95.4);

	this.moregames1 = new lib.Symbol3();
	this.moregames1.parent = this;
	this.moregames1.setTransform(412.6,518.1,0.932,0.932,0,0,0,77.9,78);

	this.replay_but = new lib.Symbol50();
	this.replay_but.parent = this;
	this.replay_but.setTransform(59.8,58,0.606,0.606,0,0,0,77.4,77.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.replay_but},{t:this.moregames1},{t:this.poza2},{t:this.poza1}]}).wait(1));

	// butoane
	this.finish_but = new lib.Symbol9();
	this.finish_but.parent = this;
	this.finish_but.setTransform(749.1,528.7,0.516,0.516,0,0,0,77.6,77.6);

	this.logo = new lib.Symbol51();
	this.logo.parent = this;
	this.logo.setTransform(59.1,59.1,0.449,0.449,0,0,0,122.6,122.6);

	this.nextlevel = new lib.Symbol9();
	this.nextlevel.parent = this;
	this.nextlevel.setTransform(749.1,528.7,0.516,0.516,0,0,0,77.6,77.6);

	this.moregames = new lib.Symbol3();
	this.moregames.parent = this;
	this.moregames.setTransform(57.1,527.8,0.645,0.645,0,0,0,77.9,77.9);

	this.butoane = new lib.Symbol57();
	this.butoane.parent = this;
	this.butoane.setTransform(399,529,1,1,0,0,0,400,42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.butoane},{t:this.moregames},{t:this.nextlevel},{t:this.logo},{t:this.finish_but}]}).wait(1));

	// dulap1
	this.checklevel = new lib.Symbol100();
	this.checklevel.parent = this;
	this.checklevel.setTransform(961.7,130,1,1,0,0,0,14,15);

	this.timeline.addTween(cjs.Tween.get(this.checklevel).wait(1));

	// dulap
	this.dulap = new lib.Symbol16copy();
	this.dulap.parent = this;
	this.dulap.setTransform(726.6,260.3,1,1,0,0,0,74.5,115);

	this.timeline.addTween(cjs.Tween.get(this.dulap).wait(1));

	// rochie2
	this.dress2 = new lib.Symbol39();
	this.dress2.parent = this;
	this.dress2.setTransform(273,359,1,1,0,0,0,99,234);

	this.timeline.addTween(cjs.Tween.get(this.dress2).wait(1));

	// rochie3
	this.dress3 = new lib.Symbol45();
	this.dress3.parent = this;
	this.dress3.setTransform(392.6,239,0.919,0.919,0,0,0,126.5,139);

	this.timeline.addTween(cjs.Tween.get(this.dress3).wait(1));

	// rochie1
	this.dress1 = new lib.Symbol33();
	this.dress1.parent = this;
	this.dress1.setTransform(421.9,180,1,1,0,0,0,165,222);

	this.timeline.addTween(cjs.Tween.get(this.dress1).wait(1));

	// bg
	this.masa = new lib.Symbol95();
	this.masa.parent = this;
	this.masa.setTransform(76,298.1,1,1.117);

	this.rapunzel = new lib.Symbol77();
	this.rapunzel.parent = this;
	this.rapunzel.setTransform(1049.7,-50.8,1,1,0,0,0,61.9,2.2);

	this.textfinal = new lib.Symbol66();
	this.textfinal.parent = this;
	this.textfinal.setTransform(526.1,60.5,1,1,0,0,0,109.8,53.5);
	this.textfinal.visible = false;

	this.manechin = new lib.Symbol37();
	this.manechin.parent = this;
	this.manechin.setTransform(-980.1,-598.2,1,1,0,0,0,74,235);

	this.bg = new lib.Symbol96();
	this.bg.parent = this;
	this.bg.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bg},{t:this.manechin},{t:this.textfinal},{t:this.rapunzel},{t:this.masa}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1054.1,-1136,2672.4,1757.9);


// stage content:
(lib.game = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.level1.visible=false;
		this.sndBtn.cursor = "pointer";
		this.levelpick.visible = false;
		
		
		var animInterLevels;
		createjs.Touch.enable(stage);
		this.goAnim = function(){
			this.animinterlevel.gotoAndPlay(1);
		}
		this.goNextScene = function(){
			switch(this.animInterLevels){
				case "cover":
					
				this.levelpick.message_but.visible=true;
				this.levelpick.nextlevel.visible=false;
					exportRoot.levelpick.visible = true;
					exportRoot.cover.visible = false;
					//exportRoot.level1.finish_but.visible = false;
					//exportRoot.level1.moregames1.visible = false;
					//exportRoot.level1.logo1.visible = false;
					//exportRoot.level1.rpl.visible = false;
					//exportRoot.level1.poza1.visible = false;
					//exportRoot.level1.poza2.visible = false;
					
				
				break;
				
				case "level1":
					exportRoot.level1.visible = true;
					exportRoot.levelpick.visible = false;
					//exportRoot.level1.startlevel();
			
					exportRoot.level1.finish_but.visible=false;
				exportRoot.level1.replay_but.visible=false;
				exportRoot.level1.moregames1.visible=false;
				exportRoot.level1.poza1.visible=false;
				exportRoot.level1.poza2.visible=false;
				exportRoot.level1.dress1.visible=true;
				exportRoot.level1.dress2.visible=false;
				exportRoot.level1.dress3.visible=false;
				
				break;
				case "message":
					this.levelpick.bubble.gotoAndStop(this.levelpick.bubble.currentFrame + 1);
			this.levelpick.message_but.visible=false;
				this.levelpick.bubble.visible=true;
			this.levelpick.nextlevel.visible=true;
				this.levelpick.girl.gotoAndStop(1);
				break;
				
				
				
					case "interlevel":
					exportRoot.level1.finishlevel();
				break;
					
					case "urmatorulevel":
						if(exportRoot.level1.dress3.visible == true){
							exportRoot.level1.finallevel();
						}else{
					exportRoot.level1.visible = false;
					this.levelpick.message_but.visible=true;
				this.levelpick.nextlevel.visible=false;
					exportRoot.levelpick.visible = true;
						}
				break;
					
				case "level2":
					exportRoot.level1.visible=true;
				exportRoot.levelpick.visible = false;
					exportRoot.level1.level2();
				exportRoot.level1.poza1.visible=false;
				exportRoot.level1.bg.gotoAndStop(0);
				
				exportRoot.level1.masa.visible=true;
					exportRoot.showAds();
				exportRoot.level1.changebut();
				
				break;
			
				case "level3":
					exportRoot.level1.visible=true;
				exportRoot.levelpick.visible = false;
					exportRoot.level1.level3();
					if (stringHostDaria == "www.google.com" || stringHostDaria == "www.azgametv.com" || stringHostDaria == "www.girlg.com" || stringHostDaria == "m.girlg.com" || stringHostDaria == "www.girlsplay.com" || stringHostDaria == "m.girlsplay.com"){}
								else{exportRoot.showAds();}
				
				
				break;
			
				
				case "final":
				if(this.level1.dulapmaini.currentFrame == 1){
						exportRoot.level1.finallevel();
					}else{
						exportRoot.level1.changelevel();
		exportRoot.level1.dulapmaini.gotoAndStop(exportRoot.level1.dulapmaini.currentFrame +1);
					}
				
				
				
				break;
				case "replay":
				exportRoot.level1.replaylevel();
				exportRoot.level1.resetgame();
					this.cover.visible = true;
					this.level1.visible = false;
				this.levelpick.bubble.gotoAndStop(0);
					gdApi.showBanner();
					
					
				
				
				break;
			}
		}
		
		//this.fadeInElement = function(arg){
		//	arg.alpha = 0;
		//		createjs.Tween.get(arg, { loop: false })
		//  .to({ alpha: 1 }, 500, createjs.Ease.getPowInOut(2));
		//}
		//this.fadeOutElement = function(arg){
		//	arg.alpha = 1;
		//		createjs.Tween.get(arg, { loop: false })
		//  .to({ alpha: 0 }, 500, createjs.Ease.getPowInOut(2));
		//}
		//this.nextFrame = function(arg , arg2){
		//	var nextFrameVar = arg.currentFrame + 1;
		//	if(arg2 == "play"){
		//		arg.gotoAndPlay(nextFrameVar);
		//	}else if(arg2 == "stop"){
		//		arg.gotoAndStop(nextFrameVar);
		//	}
		//}
			this.showAds = function(){
								
								exportRoot.stopSnd();
									exportRoot.removeSnd();
									window[preroll.config.loaderObjectName].refetchAd();
								
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
			var gamename = 'dream-shoes-design';
			var mainwebsite = 'http://www.azgametv.com/';
			var stringHost = detect_parent();
		
			if (stringHost == "rosy") {
				stringHost = window.location.hostname;
			}
			var urlsite = mainwebsite + "?utm_source=" + stringHost + "&utm_medium=html5game&utm_content=moregames&utm_campaign=" + gamename;
			realClick(urlsite);
		}
		this.logofunction = function () {
			exportRoot.stopSnd();
			var gamename = 'dream-shoes-design';
			var mainwebsite = 'http://www.azgametv.com/';
			var stringHost = detect_parent();
		
			if (stringHost == "rosy") {
				stringHost = window.location.hostname;
			}
			var urlsite = mainwebsite + "?utm_source=" + stringHost + "&utm_medium=html5game&utm_content=logo&utm_campaign=" + gamename;
			realClick(urlsite);
		}
		
		
		this.poza1link = function () {
			exportRoot.stopSnd();
			var gamename = 'dream-shoes-design';
			var mainwebsite = 'http://www.azgametv.com/';
			var stringHost = detect_parent();
		
			if (stringHost == "rosy") {
				stringHost = window.location.hostname;
			}
			var urlsite = mainwebsite + "?utm_source=" + stringHost + "&utm_medium=html5game&utm_content=Miraculous_Hero_Closet&utm_campaign=" + gamename;
			realClick(urlsite);
		}
		this.poza2link = function () {
			exportRoot.stopSnd();
			var gamename = 'dream-shoes-design';
			var mainwebsite = 'http://www.azgametv.com/';
			var stringHost = detect_parent();
		
			if (stringHost == "rosy") {
				stringHost = window.location.hostname;
			}
			var urlsite = mainwebsite + "?utm_source=" + stringHost + "&utm_medium=html5game&utm_content=Miraculous_Hero_Design_Rivals&utm_campaign=" + gamename;
			realClick(urlsite);
		}
		
		
		this.youtubelink = function () {
			exportRoot.stopSnd();
			var gamename = 'dream-shoes-design';
			var mainwebsite = 'https://www.youtube.com/c/PrincessGamesCartoons';
			var stringHost = detect_parent();
		
			if (stringHost == "rosy") {
				stringHost = window.location.hostname;
			}
			var urlsite = mainwebsite + "?utm_source=" + stringHost + "&utm_medium=html5game&utm_content=youtube-button&utm_campaign=" + gamename;
			realClick(urlsite);
		}
		
		
		
		exportRoot.cover.youtube.addEventListener("click", youtubefunctionhere.bind(this));
		function youtubefunctionhere(event) {
			exportRoot.youtubelink();
		}
		
		
		/*this.addthegame = function () {
			window.open("http://www.playrosy.com/ourgames.html?thegame=rapunzel-and-flynn-happy-family", "_blank");
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
			
			if (soundOn == 1 ) {
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
	this.sndBtn.setTransform(782.5,47.5,0.6,0.6,0,0,0,77.5,77.5);

	this.timeline.addTween(cjs.Tween.get(this.sndBtn).wait(1));

	// level1
	this.level1 = new lib.Symbol11();
	this.level1.parent = this;
	this.level1.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.level1).wait(1));

	// intro
	this.levelpick = new lib.Symbol7();
	this.levelpick.parent = this;
	this.levelpick.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.levelpick).wait(1));

	// cover
	this.cover = new lib.Symbol1();
	this.cover.parent = this;
	this.cover.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.cover).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-654.1,-836,2672.4,2035);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;