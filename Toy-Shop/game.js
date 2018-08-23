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
		{src:"images/game_atlas_.png?1534326052604", id:"game_atlas_"},
		{src:"images/game_atlas_2.png?1534326052604", id:"game_atlas_2"},
		{src:"images/game_atlas_3.png?1534326052604", id:"game_atlas_3"},
		{src:"images/game_atlas_4.png?1534326052611", id:"game_atlas_4"},
		{src:"sounds/bgmusic.mp3?1534326052613", id:"bgmusic"},
		{src:"sounds/sparkles.mp3?1534326052613", id:"sparkles"}
	]
};



lib.ssMetadata = [
		{name:"game_atlas_", frames: [[0,0,1200,900]]},
		{name:"game_atlas_2", frames: [[951,0,920,1124],[0,0,949,1117],[0,1119,808,608],[810,1126,800,600]]},
		{name:"game_atlas_3", frames: [[0,0,800,600],[802,0,800,600],[0,1191,514,737],[1604,0,218,565],[799,602,800,300],[1604,567,217,550],[1601,1119,217,550],[1151,1206,217,550],[1370,1206,217,550],[0,602,797,587],[516,1206,633,290],[516,1498,467,325],[799,904,800,300]]},
		{name:"game_atlas_4", frames: [[1023,233,312,231],[237,206,312,231],[1337,233,312,231],[597,847,129,186],[1651,233,140,488],[102,1030,67,65],[1965,101,35,39],[976,1095,91,68],[805,1091,90,75],[1023,0,312,231],[1337,0,312,231],[1651,0,312,231],[803,466,404,149],[237,0,443,204],[551,250,379,175],[551,427,250,250],[237,439,250,250],[597,679,189,166],[1114,853,163,138],[1612,997,123,96],[0,909,177,119],[788,816,187,147],[1836,997,100,100],[1481,832,155,155],[1638,840,155,155],[1795,840,155,155],[0,1030,100,100],[531,1035,100,100],[489,523,59,73],[1400,956,71,29],[449,1157,49,52],[677,1231,67,17],[489,598,50,79],[52,1211,67,26],[921,1174,52,46],[1854,1231,66,15],[1927,1099,71,70],[500,1197,71,28],[1533,1115,61,59],[803,427,71,32],[1340,1120,50,68],[551,206,65,37],[192,451,42,58],[1295,1190,65,31],[1392,1174,60,50],[1960,722,35,29],[723,1083,80,86],[1952,840,48,53],[489,439,53,82],[1965,0,31,50],[865,1174,54,57],[1965,142,32,34],[1397,1115,66,57],[192,651,41,35],[1612,1095,81,75],[531,986,51,47],[728,847,50,76],[1965,52,31,47],[897,1091,77,81],[1129,1156,51,58],[1209,466,271,197],[192,561,37,43],[728,925,50,38],[1960,589,37,43],[573,1210,50,38],[192,606,37,43],[625,1210,50,38],[1960,634,37,43],[0,1192,50,39],[332,691,128,228],[1965,178,30,35],[988,250,30,28],[1960,753,35,23],[179,914,102,184],[1793,233,180,354],[977,918,100,175],[1938,997,59,66],[1737,997,97,110],[932,250,54,205],[1465,1115,66,55],[1194,993,82,133],[1114,617,71,46],[1481,730,289,100],[988,337,24,34],[682,0,339,248],[239,1205,69,28],[728,965,122,116],[988,431,24,32],[1836,1099,89,67],[1183,1128,58,58],[1938,1065,60,24],[0,1132,58,58],[1036,1216,60,24],[500,1137,58,58],[1098,1216,60,24],[560,1137,58,58],[310,1217,60,24],[269,1145,58,58],[1794,1228,58,20],[620,1150,58,58],[1160,1229,58,20],[60,1151,58,58],[1220,1229,58,20],[120,1151,58,58],[1582,1230,58,20],[1069,1156,58,58],[372,1217,68,21],[329,1157,58,58],[1654,1217,68,21],[389,1157,58,58],[1724,1217,68,21],[1695,1157,58,58],[1295,1223,68,21],[1755,1157,58,58],[921,1225,60,21],[976,1165,58,58],[1365,1226,60,21],[805,1168,58,58],[1520,1226,60,21],[1815,1168,58,58],[442,1227,60,21],[680,1171,58,58],[121,1211,57,21],[740,1171,58,58],[504,1227,57,21],[1875,1171,58,58],[180,1228,57,21],[1935,1171,58,58],[800,1228,57,21],[489,679,106,305],[0,728,163,179],[876,427,50,37],[385,1112,113,43],[1243,1181,50,42],[102,1100,113,49],[1182,1188,53,39],[1069,1108,112,46],[618,206,57,40],[1695,1109,112,46],[1520,1176,60,48],[1278,1049,117,69],[192,511,40,48],[633,1035,88,113],[1465,1172,53,61],[1279,862,119,185],[1960,679,34,41],[1400,862,76,92],[217,1100,50,75],[992,617,120,299],[1596,1172,56,56],[192,691,138,221],[1278,1120,60,59],[1793,589,165,249],[180,1177,57,49],[283,921,140,120],[425,921,62,62],[1302,665,177,195],[852,965,104,124],[425,986,104,124],[1400,989,104,124],[1506,989,104,124],[988,373,28,29],[1079,993,113,113],[0,451,190,275],[0,0,235,449],[1114,665,186,186],[803,617,187,197],[1482,466,159,262],[988,310,33,25],[1975,215,19,35],[988,404,31,25],[988,280,30,28],[283,1043,100,100]]}
];


// symbols:



(lib._1pngcopy = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.baseicontray = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bgagenda = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bganna = function() {
	this.spriteSheet = ss["game_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bgcameraingame = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1copy2 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1copy3 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1copy4 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap13 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap17 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2_1 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap23 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap24 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap25 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap26 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap27 = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap28 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap29 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap823 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap824 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.blurrybgjpgcopy = function() {
	this.spriteSheet = ss["game_atlas_2"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bluza1categoria1 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.bluza1categoria2 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.bluza1categoria3 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.bluza2categoria1 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.bluza2categoria2 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.bot = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bt_fullscreen = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.bt_moregames11 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.bt_play = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.bt_replayhover = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.bt_soundoff = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.bt_soundon = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.cercei1ic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.cercei1 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.cercei2ic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.cercei2 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.cercei3ic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.cercei3 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.cercei4ic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.cercei4 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.cercei5ic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.cercei5 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.cercei6ic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.cercei6 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.cercei7ic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.cercei7 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.cercei8ic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.cercei8 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.colier1ic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.colier1 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.colier2ic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.colier2 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.colier3ic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.colier3 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.colier4ic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.colier4 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.colier5ic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.colier5 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.colier6ic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.colier6 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.colier7ic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.colier7 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.colier8ic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.colier8 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.cooltext295698094828745 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.corp1manageanta = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.corp1mana = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.corp1 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.corp2manageanta = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.corp2mana = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.corp2 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.corp3manageanta = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.corp3mana = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.corp3 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.corp4manageanta = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.corp4mana = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.corp4 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.dresses_6 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.dresses_ic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.earrings_ic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.eyes_ic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.fusta1categoria1 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.fusta1categoria3 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.fusta2categoria1 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.geanta1categoria1ic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.geanta1categoria1 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.geanta1categoria2 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.geanta1categoria3 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.geanta2categoria2 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.geanta2categoria3 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.googleplaybutton = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.hair_ic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.interfacewardrobe = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.messageboard = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.more = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.more_games_button = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.necklaces_ic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.nextbuton = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.ochi1albastriic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.ochi1albastri = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.ochi1capruiic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.ochi1caprui = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.ochi1negriic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.ochi1negri = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.ochi1verziic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.ochi1verzi = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.ochi2albastriic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.ochi2albastri = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.ochi2capruiic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.ochi2caprui = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.ochi2negriic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.ochi2negri = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.ochi2verziic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.ochi2verzi = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.ochi3albastriic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.ochi3albastri = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.ochi3capruiic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.ochi3caprui = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.ochi3negriic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.ochi3negri = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.ochi3verziic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.ochi3verzi = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.ochi4albastriic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.ochi4albastri = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.ochi4capruiic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.ochi4caprui = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.ochi4negriic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.ochi4negri = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.ochi4verziic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.ochi4verzi = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.ochi5albastriic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.ochi5albastri = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.ochi5capruiic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.ochi5caprui = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.ochi5negriic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.ochi5negri = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.ochi5verziic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.ochi5verzi = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.pantalon1categoria2 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.pantalon2categoria2 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.pantofi1categoria1ic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.pantofi1categoria1 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.pantofi1categoria2ic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.pantofi1categoria2 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.pantofi1categoria3ic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.pantofi1categoria3 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.pantofi2categoria1ic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.pantofi2categoria1 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib.pantofi2categoria2ic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib.pantofi2categoria2 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib.par1ic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(141);
}).prototype = p = new cjs.Sprite();



(lib.par1 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(142);
}).prototype = p = new cjs.Sprite();



(lib.par2ic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(143);
}).prototype = p = new cjs.Sprite();



(lib.par2 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(144);
}).prototype = p = new cjs.Sprite();



(lib.par3ic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(145);
}).prototype = p = new cjs.Sprite();



(lib.par3 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(146);
}).prototype = p = new cjs.Sprite();



(lib.par4ic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(147);
}).prototype = p = new cjs.Sprite();



(lib.par4 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(148);
}).prototype = p = new cjs.Sprite();



(lib.par5ic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(149);
}).prototype = p = new cjs.Sprite();



(lib.par5 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(150);
}).prototype = p = new cjs.Sprite();



(lib.par6ic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(151);
}).prototype = p = new cjs.Sprite();



(lib.par6 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(152);
}).prototype = p = new cjs.Sprite();



(lib.par7ic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(153);
}).prototype = p = new cjs.Sprite();



(lib.par7 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(154);
}).prototype = p = new cjs.Sprite();



(lib.par8ic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(155);
}).prototype = p = new cjs.Sprite();



(lib.par8 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(156);
}).prototype = p = new cjs.Sprite();



(lib.piele1ic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(157);
}).prototype = p = new cjs.Sprite();



(lib.piele2ic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(158);
}).prototype = p = new cjs.Sprite();



(lib.piele3ic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(159);
}).prototype = p = new cjs.Sprite();



(lib.piele4ic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(160);
}).prototype = p = new cjs.Sprite();



(lib.purses_ic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(161);
}).prototype = p = new cjs.Sprite();



(lib.reset11 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(162);
}).prototype = p = new cjs.Sprite();



(lib.rochie1categoria1 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(163);
}).prototype = p = new cjs.Sprite();



(lib.rochie1categoria3 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(164);
}).prototype = p = new cjs.Sprite();



(lib.rochie2categoria3 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(165);
}).prototype = p = new cjs.Sprite();



(lib.rochie3categoria3 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(166);
}).prototype = p = new cjs.Sprite();



(lib.rochie4categoria3 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(167);
}).prototype = p = new cjs.Sprite();



(lib.shoetable = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.shoes_ic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(168);
}).prototype = p = new cjs.Sprite();



(lib.skincolor_ic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(169);
}).prototype = p = new cjs.Sprite();



(lib.skirt_iccopy = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(170);
}).prototype = p = new cjs.Sprite();



(lib.Symbol2 = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.top = function() {
	this.spriteSheet = ss["game_atlas_3"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.top_ic = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(171);
}).prototype = p = new cjs.Sprite();



(lib.YoutubeButtons7326 = function() {
	this.spriteSheet = ss["game_atlas_4"];
	this.gotoAndStop(172);
}).prototype = p = new cjs.Sprite();



(lib.Tween38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqMO1QkoABAAkpIAA0ZQAAkpEoAAIUZAAQEpAAAAEpIAAUZQAAEpkpgBg");
	mask.setTransform(-5,-4);

	// Layer 1
	this.instance = new lib.Bitmap823();
	this.instance.parent = this;
	this.instance.setTransform(-105,-105,0.8,0.8);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-99,190,190);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bot();
	this.instance.parent = this;
	this.instance.setTransform(-400,-149);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-400,-149,800,300);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.top();
	this.instance.parent = this;
	this.instance.setTransform(-399,-152);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-399,-152,800,300);


(lib.Symbol168 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,312,231);


(lib.Symbol167 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.interfacewardrobe();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,797,587);


(lib.Symbol163 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.par8ic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62,62);


(lib.Symbol159 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.par7ic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57,49);


(lib.Symbol155 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ochi5verziic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58,58);


(lib.Symbol154 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ochi5negriic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58,58);


(lib.Symbol153 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.par6ic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60,59);


(lib.Symbol152 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{corp1:0,corp2:1,corp3:2,corp4:3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer 1
	this.instance = new lib.corp1mana();
	this.instance.parent = this;
	this.instance.setTransform(-185,151);

	this.instance_1 = new lib.corp2mana();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-185,151);

	this.instance_2 = new lib.corp3mana();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-185,151);

	this.instance_3 = new lib.corp4mana();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-185,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// Layer 2
	this.instance_4 = new lib.corp1manageanta();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-306,211);

	this.instance_5 = new lib.corp2manageanta();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-306,211);

	this.instance_6 = new lib.corp3manageanta();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-306,211);

	this.instance_7 = new lib.corp4manageanta();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-306,211);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-306,151,171,103);


(lib.Symbol148 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.reset11();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,113,113);


(lib.Symbol147 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.reset11();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,113,113);


(lib.Symbol146 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.reset11();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,113,113);


(lib.Symbol145 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.reset11();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,113,113);


(lib.Symbol144 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.reset11();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,113,113);


(lib.Symbol143 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.reset11();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,113,113);


(lib.Symbol142 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.reset11();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,113,113);


(lib.Symbol141 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.reset11();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,113,113);


(lib.Symbol140 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.reset11();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,113,113);


(lib.Symbol139 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.reset11();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,113,113);


(lib.Symbol138 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ochi5capruiic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58,58);


(lib.Symbol137 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ochi5albastriic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58,58);


(lib.Symbol136 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ochi4verziic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58,58);


(lib.Symbol135 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ochi4negriic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58,58);


(lib.Symbol134 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ochi4capruiic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58,58);


(lib.Symbol133 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ochi4albastriic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58,58);


(lib.Symbol132 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ochi3verziic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58,58);


(lib.Symbol131 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ochi3negriic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58,58);


(lib.Symbol130 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ochi3capruiic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58,58);


(lib.Symbol129 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ochi3albastriic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58,58);


(lib.Symbol128 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ochi2verziic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58,58);


(lib.Symbol127 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ochi2negriic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58,58);


(lib.Symbol126 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ochi2capruiic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58,58);


(lib.Symbol125 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ochi2albastriic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58,58);


(lib.Symbol124 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ochi1verziic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58,58);


(lib.Symbol123 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ochi1negriic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58,58);


(lib.Symbol122 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ochi1capruiic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58,58);


(lib.Symbol121 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ochi1albastriic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58,58);


(lib.Symbol120 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// Layer 1
	this.instance = new lib.Bitmap13();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35,39);


(lib.Symbol114 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.nextbuton();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,89,67);


(lib.Symbol111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.par5ic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56,56);


(lib.Symbol110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.par4ic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,75);


(lib.Symbol109 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.par3ic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34,41);


(lib.Symbol108 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.par2ic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53,61);


(lib.Symbol107 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.par1ic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40,48);


(lib.Symbol84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.piele4ic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104,124);


(lib.Symbol83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.piele3ic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104,124);


(lib.Symbol82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.piele2ic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104,124);


(lib.Symbol81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.piele1ic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104,124);


(lib.Symbol80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cercei8ic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42,58);


(lib.Symbol79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cercei7ic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,68);


(lib.Symbol78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cercei6ic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,61,59);


(lib.Symbol77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cercei5ic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71,70);


(lib.Symbol76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cercei3ic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,79);


(lib.Symbol75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cercei1ic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,59,73);


(lib.Symbol74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cercei2ic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49,52);


(lib.Symbol73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cercei4ic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52,46);


(lib.Symbol72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.colier8ic();
	this.instance.parent = this;
	this.instance.setTransform(1,-3);

	this.instance_1 = new lib.Bitmap17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.78,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3,78,81);


(lib.Symbol71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.colier6ic();
	this.instance.parent = this;
	this.instance.setTransform(-21,0);

	this.instance_1 = new lib.Bitmap17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-11,-8,0.78,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-8,81,83);


(lib.Symbol70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.colier7ic();
	this.instance.parent = this;

	this.instance_1 = new lib.Bitmap17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-9,-10,0.78,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-10,71,86);


(lib.Symbol69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.colier5ic();
	this.instance.parent = this;

	this.instance_1 = new lib.Bitmap17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.78,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71,68);


(lib.Symbol68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.colier3ic();
	this.instance.parent = this;

	this.instance_1 = new lib.Bitmap2_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-9,0.822,0.822);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-9,74,91);


(lib.Symbol67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.colier4ic();
	this.instance.parent = this;

	this.instance_1 = new lib.Bitmap17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-8,-3,0.78,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-3,71,68);


(lib.Symbol66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.colier2ic();
	this.instance.parent = this;

	this.instance_1 = new lib.Bitmap17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.78,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,86);


(lib.Symbol65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.colier1ic();
	this.instance.parent = this;

	this.instance_1 = new lib.Bitmap17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-7,-6,0.78,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-6,71,68);


(lib.Symbol64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.geanta2categoria3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71,46);


(lib.Symbol63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.geanta2categoria2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,82,133);


(lib.Symbol62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.geanta1categoria3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,66,55);


(lib.Symbol61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.geanta1categoria2();
	this.instance.parent = this;
	this.instance.setTransform(0,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-4,54,205);


(lib.Symbol60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.geanta1categoria1ic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,59,66);


(lib.Symbol59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pantofi1categoria3ic();
	this.instance.parent = this;

	this.instance_1 = new lib.Bitmap1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-7,-4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-4,67,65);


(lib.Symbol58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pantofi2categoria2ic();
	this.instance.parent = this;

	this.instance_1 = new lib.Bitmap1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-9,-7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-7,69,65);


(lib.Symbol57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pantofi1categoria2ic();
	this.instance.parent = this;

	this.instance_1 = new lib.Bitmap1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-5,-5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,67,65);


(lib.Symbol56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pantofi2categoria1ic();
	this.instance.parent = this;

	this.instance_1 = new lib.Bitmap1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,0,67,65);


(lib.Symbol55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pantofi1categoria1ic();
	this.instance.parent = this;

	this.instance_1 = new lib.Bitmap1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67,65);


(lib.Symbol54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bluza1categoria3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,123,96);


(lib.Symbol53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bluza2categoria2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,187,147);


(lib.Symbol52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bluza1categoria2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,163,138);


(lib.Symbol51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.427,0.427);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,199.6,138.9);


(lib.Symbol50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bt_replayhover();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155,155);


(lib.Symbol48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bluza2categoria1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,177,119);


(lib.Symbol47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bluza1categoria1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,189,166);


(lib.Symbol46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.fusta1categoria1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102,184);


(lib.Symbol45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.fusta1categoria3();
	this.instance.parent = this;
	this.instance.setTransform(-61,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61,0,180,354);


(lib.Symbol44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pantalon1categoria2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106,305);


(lib.Symbol43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pantalon2categoria2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,163,179);


(lib.Symbol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.fusta2categoria1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,175);


(lib.Symbol41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dresses_6();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70.4,125.3);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rochie2categoria3();
	this.instance.parent = this;
	this.instance.setTransform(-0.6,0,1,1,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,0,205.7,205.7);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rochie4categoria3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,159,262);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rochie3categoria3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,187,197);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rochie1categoria1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,190,275);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rochie1categoria3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,235,449);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{geanta1:1,geanta2:2,geanta3:3,geanta4:4,geanta5:5});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// Layer 1
	this.instance = new lib.geanta1categoria1();
	this.instance.parent = this;
	this.instance.setTransform(-1306,-575);

	this.instance_1 = new lib.geanta1categoria2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-136,-169);

	this.instance_2 = new lib.geanta2categoria2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-206,-6);

	this.instance_3 = new lib.geanta1categoria3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-207,-20);

	this.instance_4 = new lib.geanta2categoria3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-193,-7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:-1306,y:-575}}]}).to({state:[{t:this.instance,p:{x:-216,y:-6}}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1306,-575,97,110);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{cercei1:1,cercei2:2,cercei3:3,cercei4:4,cercei5:5,cercei6:6,cercei7:7,cercei8:8});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9));

	// Layer 1
	this.instance = new lib.cercei1();
	this.instance.parent = this;
	this.instance.setTransform(-1086,-100);

	this.instance_1 = new lib.cercei2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2,2);

	this.instance_2 = new lib.cercei3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(3,0);

	this.instance_3 = new lib.cercei4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(3,1);

	this.instance_4 = new lib.cercei5();
	this.instance_4.parent = this;

	this.instance_5 = new lib.cercei6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,1);

	this.instance_6 = new lib.cercei7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(3,0);

	this.instance_7 = new lib.cercei8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(3,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:-1086,y:-100}}]}).to({state:[{t:this.instance,p:{x:0,y:0}}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1086,-100,71,29);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{lant1:1,lant2:2,lant3:3,lant4:4,lant5:5,lant6:6,lant7:7,lant8:8});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9));

	// Layer 1
	this.instance = new lib.colier1();
	this.instance.parent = this;
	this.instance.setTransform(-1074,-205);

	this.instance_1 = new lib.colier2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(91,66);

	this.instance_2 = new lib.colier3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(100,65);

	this.instance_3 = new lib.colier4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(98,64);

	this.instance_4 = new lib.colier5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(95,65);

	this.instance_5 = new lib.colier6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(89,58);

	this.instance_6 = new lib.colier7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(100,67);

	this.instance_7 = new lib.colier8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(90,58);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:-1074,y:-205}}]}).to({state:[{t:this.instance,p:{x:97,y:66}}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1074,-205,35,29);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{pantofi1:0,pantofi2:1,pantofi3:2,pantofi4:3,pantofi5:4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// Layer 1
	this.instance = new lib.pantofi1categoria1();
	this.instance.parent = this;
	this.instance.setTransform(132,4);

	this.instance_1 = new lib.pantofi2categoria1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(132,0);

	this.instance_2 = new lib.pantofi1categoria2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(131,-4);

	this.instance_3 = new lib.pantofi2categoria2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(126,-19);

	this.instance_4 = new lib.pantofi1categoria3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(130,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(132,4,113,43);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{tricou1:0,tricou2:1,tricou3:2,tricou4:3,tricou5:4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// Layer 1
	this.instance = new lib.bluza1categoria1();
	this.instance.parent = this;
	this.instance.setTransform(-50,-6);

	this.instance_1 = new lib.bluza2categoria1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-42,11);

	this.instance_2 = new lib.bluza1categoria2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-32,1);

	this.instance_3 = new lib.bluza2categoria2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-53,6);

	this.instance_4 = new lib.bluza1categoria3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-23,-4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-6,189,166);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{pantaloni1:0,pantaloni2:1,pantaloni3:2,pantaloni4:3,pantaloni5:4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// Layer 1
	this.instance = new lib.fusta1categoria1();
	this.instance.parent = this;
	this.instance.setTransform(52,-3);

	this.instance_1 = new lib.fusta2categoria1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(52,0);

	this.instance_2 = new lib.pantalon1categoria2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(52,2);

	this.instance_3 = new lib.pantalon2categoria2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(25,-4);

	this.instance_4 = new lib.fusta1categoria3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-27,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(52,-3,102,184);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{rochie1:0,rochie2:1,rochie3:2,rochie4:3,rochie5:4,rochie6:5});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// Layer 1
	this.instance = new lib.rochie1categoria1();
	this.instance.parent = this;
	this.instance.setTransform(-186,98);

	this.instance_1 = new lib.rochie1categoria3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-187,110);

	this.instance_2 = new lib.rochie2categoria3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-193,138);

	this.instance_3 = new lib.rochie3categoria3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-192,140);

	this.instance_4 = new lib.rochie4categoria3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-168,104);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186,98,190,275);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{ochii1:0,ochii2:1,ochii3:2,ochii4:3,ochii5:4,ochii6:5,ochii7:6,ochii8:7,ochii9:8,ochii10:9,ochii11:10,ochii12:11,ochii13:12,ochii14:13,ochii15:14,ochii16:15,ochii17:16,ochii18:17,ochii19:18,ochii20:19});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20));

	// Layer 1
	this.instance = new lib.ochi1albastri();
	this.instance.parent = this;
	this.instance.setTransform(163,242);

	this.instance_1 = new lib.ochi1caprui();
	this.instance_1.parent = this;
	this.instance_1.setTransform(163,242);

	this.instance_2 = new lib.ochi1negri();
	this.instance_2.parent = this;
	this.instance_2.setTransform(163,242);

	this.instance_3 = new lib.ochi1verzi();
	this.instance_3.parent = this;
	this.instance_3.setTransform(163,242);

	this.instance_4 = new lib.ochi2albastri();
	this.instance_4.parent = this;
	this.instance_4.setTransform(164,243);

	this.instance_5 = new lib.ochi2caprui();
	this.instance_5.parent = this;
	this.instance_5.setTransform(164,243);

	this.instance_6 = new lib.ochi2negri();
	this.instance_6.parent = this;
	this.instance_6.setTransform(164,243);

	this.instance_7 = new lib.ochi2verzi();
	this.instance_7.parent = this;
	this.instance_7.setTransform(164,243);

	this.instance_8 = new lib.ochi3albastri();
	this.instance_8.parent = this;
	this.instance_8.setTransform(159,243);

	this.instance_9 = new lib.ochi3caprui();
	this.instance_9.parent = this;
	this.instance_9.setTransform(159,243);

	this.instance_10 = new lib.ochi3negri();
	this.instance_10.parent = this;
	this.instance_10.setTransform(159,243);

	this.instance_11 = new lib.ochi3verzi();
	this.instance_11.parent = this;
	this.instance_11.setTransform(159,243);

	this.instance_12 = new lib.ochi4albastri();
	this.instance_12.parent = this;
	this.instance_12.setTransform(163,243);

	this.instance_13 = new lib.ochi4caprui();
	this.instance_13.parent = this;
	this.instance_13.setTransform(163,243);

	this.instance_14 = new lib.ochi4negri();
	this.instance_14.parent = this;
	this.instance_14.setTransform(163,243);

	this.instance_15 = new lib.ochi4verzi();
	this.instance_15.parent = this;
	this.instance_15.setTransform(163,243);

	this.instance_16 = new lib.ochi5albastri();
	this.instance_16.parent = this;
	this.instance_16.setTransform(165,243);

	this.instance_17 = new lib.ochi5caprui();
	this.instance_17.parent = this;
	this.instance_17.setTransform(165,243);

	this.instance_18 = new lib.ochi5negri();
	this.instance_18.parent = this;
	this.instance_18.setTransform(165,243);

	this.instance_19 = new lib.ochi5verzi();
	this.instance_19.parent = this;
	this.instance_19.setTransform(165,243);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(163,242,60,24);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{par1:0,par2:1,par3:2,par4:3,par5:4,par6:5,par7:6,par8:7});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8));

	// Layer 1
	this.instance = new lib.par1();
	this.instance.parent = this;

	this.instance_1 = new lib.par2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-15,-1);

	this.instance_2 = new lib.par3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(5,-28);

	this.instance_3 = new lib.par4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-17,-5);

	this.instance_4 = new lib.par5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-24,3);

	this.instance_5 = new lib.par6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-43,3);

	this.instance_6 = new lib.par7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-21,-3);

	this.instance_7 = new lib.par8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-58,-7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,88,113);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.more();
	this.instance.parent = this;
	this.instance.setTransform(23,41);

	this.instance_1 = new lib.more_games_button();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-8,-4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-4,122,116);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hair_ic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24,34);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.eyes_ic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35,23);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.skincolor_ic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19,35);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.earrings_ic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30,28);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.necklaces_ic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24,32);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.purses_ic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28,29);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shoes_ic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33,25);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.top_ic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30,28);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.skirt_iccopy();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31,25);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dresses_ic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30,35);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"corp1":0,"corp2":1,"corp3":2,"corp4":3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer 3
	this.instance = new lib.corp1();
	this.instance.parent = this;
	this.instance.setTransform(0,4);

	this.instance_1 = new lib.corp2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,4);

	this.instance_2 = new lib.corp3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,4);

	this.instance_3 = new lib.corp4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,4,217,550);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.instance = new lib.Bitmap25();
	this.instance.parent = this;

	this.instance_1 = new lib._3();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,312,231);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.instance = new lib.Bitmap24();
	this.instance.parent = this;

	this.instance_1 = new lib._1pngcopy();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,312,231);


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
	this.instance = new lib.bt_moregames11();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155,155);


(lib.Symbol95 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shoetable();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,633,290);


(lib.Symbol17_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.YoutubeButtons7326();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.Symbol15_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Bitmap824();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-4,-7,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-7,200,200);


(lib.Symbol12copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.googleplaybutton();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.86,0.86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,248.6,86);


(lib.Symbol6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AknASIAvjZIIgC1IgvDZg");
	this.shape.setTransform(29.6,20);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,59.3,40);


(lib.shape6147 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Eg5MAooMAAAhRPMByZAAAMAAABRPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-366.1,-260,732.2,520.1);


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
p.nominalBounds = new cjs.Rectangle(-155.9,-134.1,402,386.4);


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
	this.instance.setTransform(-2.3,0.7,1,1,0,0,0,95,95);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95,-95.4,190,190);


(lib.Symbol119 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer 1
	this.instance = new lib.blurrybgjpgcopy();
	this.instance.parent = this;
	this.instance.setTransform(1,1);

	this.instance_1 = new lib.Bitmap26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(472,159,0.53,0.53);

	this.instance_2 = new lib.messageboard();
	this.instance_2.parent = this;
	this.instance_2.setTransform(688.6,154,0.648,0.432,0,0,180);

	this.masa = new lib.Symbol95();
	this.masa.parent = this;
	this.masa.setTransform(375.6,471.6,0.383,0.537,0,0,0,316.8,145.3);

	this.instance_3 = new lib.Bitmap1copy2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(359,241,0.302,0.302);

	this.instance_4 = new lib.Bitmap27();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-1,-1);

	this.instance_5 = new lib.Bitmap28();
	this.instance_5.parent = this;
	this.instance_5.setTransform(530,158,0.488,0.488);

	this.instance_6 = new lib.Bitmap1copy3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(268,115,0.31,0.31);

	this.instance_7 = new lib.bgcameraingame();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1,1);

	this.instance_8 = new lib.Bitmap29();
	this.instance_8.parent = this;
	this.instance_8.setTransform(541,147,0.577,0.577);

	this.instance_9 = new lib.Bitmap1copy4();
	this.instance_9.parent = this;
	this.instance_9.setTransform(291,112,0.309,0.309);

	this.instance_10 = new lib.bganna();
	this.instance_10.parent = this;
	this.instance_10.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.masa,p:{x:375.6,y:471.6}},{t:this.instance_2,p:{x:688.6,y:154}},{t:this.instance_1}]},1).to({state:[{t:this.instance_7},{t:this.instance_2,p:{x:746.6,y:152}},{t:this.instance_6},{t:this.masa,p:{x:376.7,y:471.7}},{t:this.instance_5}]},1).to({state:[{t:this.instance_10},{t:this.instance_2,p:{x:759.6,y:141}},{t:this.instance_9},{t:this.masa,p:{x:380.2,y:473.5}},{t:this.instance_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,800,600);


(lib.Symbol102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween38();
	this.instance.parent = this;
	this.instance.setTransform(100,100);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.03,scaleY:1.03},14).to({scaleX:1,scaleY:1},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,200,200);


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
	this.instance_1.setTransform(400,1048);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:0},1).to({x:401,y:749},8).to({startPosition:0},1).to({x:400,y:1048},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2,801,1201);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.doll_mana = new lib.Symbol152();
	this.doll_mana.parent = this;
	this.doll_mana.setTransform(331.9,51,1,1,0,0,0,27,15);

	this.timeline.addTween(cjs.Tween.get(this.doll_mana).wait(1));

	// geanta
	this.doll_geanta = new lib.Symbol35();
	this.doll_geanta.parent = this;
	this.doll_geanta.setTransform(212,341.5,1,1,0,0,0,27,70);

	this.timeline.addTween(cjs.Tween.get(this.doll_geanta).wait(1));

	// cercei
	this.doll_cercei = new lib.Symbol34();
	this.doll_cercei.parent = this;
	this.doll_cercei.setTransform(114.3,76.3,1.038,1.038,0,0,0,30.1,17.6);

	this.timeline.addTween(cjs.Tween.get(this.doll_cercei).wait(1));

	// colier
	this.doll_lant = new lib.Symbol33();
	this.doll_lant.parent = this;
	this.doll_lant.setTransform(29.9,54.9,1,1,0,0,0,24.5,22);

	this.timeline.addTween(cjs.Tween.get(this.doll_lant).wait(1));

	// rochie
	this.doll_rochie = new lib.Symbol29();
	this.doll_rochie.parent = this;
	this.doll_rochie.setTransform(264.5,125,1,1,0,0,0,47.5,134);

	this.timeline.addTween(cjs.Tween.get(this.doll_rochie).wait(1));

	// bluza
	this.doll_tricou = new lib.Symbol31();
	this.doll_tricou.parent = this;
	this.doll_tricou.setTransform(154.5,178,1,1,0,0,0,71.5,86.5);

	this.timeline.addTween(cjs.Tween.get(this.doll_tricou).wait(1));

	// par
	this.doll_par = new lib.Symbol27();
	this.doll_par.parent = this;
	this.doll_par.setTransform(147.4,111.9,1,1,0,0,0,72.2,114.9);

	this.timeline.addTween(cjs.Tween.get(this.doll_par).wait(1));

	// pantaloni
	this.doll_pantaloni = new lib.Symbol30();
	this.doll_pantaloni.parent = this;
	this.doll_pantaloni.setTransform(66.5,337,1,1,0,0,0,46.5,140.5);

	this.timeline.addTween(cjs.Tween.get(this.doll_pantaloni).wait(1));

	// pantofi
	this.doll_pantofi = new lib.Symbol32();
	this.doll_pantofi.parent = this;
	this.doll_pantofi.setTransform(-57.4,534.5,1,1,0,0,0,22,22.5);

	this.timeline.addTween(cjs.Tween.get(this.doll_pantofi).wait(1));

	// ochii
	this.doll_ochii = new lib.Symbol28();
	this.doll_ochii.parent = this;
	this.doll_ochii.setTransform(145.6,40.2,0.98,0.98,0,0,0,219.2,244.8);

	this.timeline.addTween(cjs.Tween.get(this.doll_ochii).wait(1));

	// Layer 1
	this.doll_corp = new lib.Symbol12();
	this.doll_corp.parent = this;
	this.doll_corp.setTransform(102,287.5,1,1,0,0,0,102,287.5);

	this.timeline.addTween(cjs.Tween.get(this.doll_corp).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1121,-303.5,1343,862.5);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// Layer 1
	this.rochie_reset = new lib.Symbol139();
	this.rochie_reset.parent = this;
	this.rochie_reset.setTransform(178.6,448.6,0.858,0.858,0,0,0,56.6,56.6);

	this.rochie6 = new lib.Symbol41();
	this.rochie6.parent = this;
	this.rochie6.setTransform(-281.2,-357.3,1,1,0,0,0,35.1,62.6);

	this.rochie3 = new lib.Symbol40();
	this.rochie3.parent = this;
	this.rochie3.setTransform(38.1,80.1,0.609,0.609,-6.7,0,0,33.7,66);

	this.rochie5 = new lib.Symbol39();
	this.rochie5.parent = this;
	this.rochie5.setTransform(178.1,209.8,0.565,0.565,0,0,0,31,72.9);

	this.rochie4 = new lib.Symbol38();
	this.rochie4.parent = this;
	this.rochie4.setTransform(158.7,87.5,0.594,0.594,0,0,0,29.2,73.8);

	this.rochie1 = new lib.Symbol37();
	this.rochie1.parent = this;
	this.rochie1.setTransform(19.5,208,0.487,0.487,0,0,0,23.6,66.7);

	this.rochie2 = new lib.Symbol36();
	this.rochie2.parent = this;
	this.rochie2.setTransform(102.5,240.7,0.396,0.396,0,0,0,25,62.7);

	this.pantaloni_reset = new lib.Symbol140();
	this.pantaloni_reset.parent = this;
	this.pantaloni_reset.setTransform(178.6,448.6,0.858,0.858,0,0,0,56.6,56.6);

	this.pantaloni1 = new lib.Symbol46();
	this.pantaloni1.parent = this;
	this.pantaloni1.setTransform(201.4,87.8,0.667,0.667,0,0,0,30.4,91.8);

	this.pantaloni5 = new lib.Symbol45();
	this.pantaloni5.parent = this;
	this.pantaloni5.setTransform(117.4,132.6,0.595,0.595,0,0,0,30.4,94.2);

	this.pantaloni3 = new lib.Symbol44();
	this.pantaloni3.parent = this;
	this.pantaloni3.setTransform(29,253.6,0.667,0.667,0,0,0,30.8,100.9);

	this.pantaloni4 = new lib.Symbol43();
	this.pantaloni4.parent = this;
	this.pantaloni4.setTransform(158.5,320.7,0.669,0.669,0,0,0,30.4,92.2);

	this.pantaloni2 = new lib.Symbol42();
	this.pantaloni2.parent = this;
	this.pantaloni2.setTransform(12.4,26.6,0.667,0.667);

	this.tricou_reset = new lib.Symbol141();
	this.tricou_reset.parent = this;
	this.tricou_reset.setTransform(178.6,448.6,0.858,0.858,0,0,0,56.6,56.6);

	this.tricou5 = new lib.Symbol54();
	this.tricou5.parent = this;
	this.tricou5.setTransform(193.2,236.4,0.886,0.886,0,0,0,56.6,71);

	this.tricou4 = new lib.Symbol53();
	this.tricou4.parent = this;
	this.tricou4.setTransform(83.5,307.7,0.738,0.738,0,0,0,42.1,66.7);

	this.tricou3 = new lib.Symbol52();
	this.tricou3.parent = this;
	this.tricou3.setTransform(48.6,177,0.74,0.74,0,0,0,47.1,36.7);

	this.tricou2 = new lib.Symbol48();
	this.tricou2.parent = this;
	this.tricou2.setTransform(149.8,111.2,0.725,0.725,0,0,0,35.9,65.7);

	this.tricou1 = new lib.Symbol47();
	this.tricou1.parent = this;
	this.tricou1.setTransform(32.5,58.2,0.646,0.646,0,0,0,50.3,60.8);

	this.pantofi_reset = new lib.Symbol142();
	this.pantofi_reset.parent = this;
	this.pantofi_reset.setTransform(178.6,448.6,0.858,0.858,0,0,0,56.6,56.6);

	this.pantofi5 = new lib.Symbol59();
	this.pantofi5.parent = this;
	this.pantofi5.setTransform(145.5,272.8,1.495,1.495);

	this.pantofi4 = new lib.Symbol58();
	this.pantofi4.parent = this;
	this.pantofi4.setTransform(70.4,309.9,1.495,1.495,0,0,0,33.5,32.5);

	this.pantofi3 = new lib.Symbol57();
	this.pantofi3.parent = this;
	this.pantofi3.setTransform(141.4,218.5,1.495,1.495,0,0,0,33.5,32.5);

	this.pantofi2 = new lib.Symbol56();
	this.pantofi2.parent = this;
	this.pantofi2.setTransform(200.6,99.7,1.495,1.495,0,0,0,33.5,32.5);

	this.pantofi1 = new lib.Symbol55();
	this.pantofi1.parent = this;
	this.pantofi1.setTransform(78,99.7,1.495,1.495,0,0,0,33.5,32.5);

	this.geanta_reset = new lib.Symbol143();
	this.geanta_reset.parent = this;
	this.geanta_reset.setTransform(178.6,448.6,0.858,0.858,0,0,0,56.6,56.6);

	this.geanta5 = new lib.Symbol64();
	this.geanta5.parent = this;
	this.geanta5.setTransform(197.6,103.1,1.118,1.118,0,0,0,37,38);

	this.geanta3 = new lib.Symbol63();
	this.geanta3.parent = this;
	this.geanta3.setTransform(74.5,276,1,1,0,0,0,39.5,36);

	this.geanta4 = new lib.Symbol62();
	this.geanta4.parent = this;
	this.geanta4.setTransform(90,152,1.136,1.136);

	this.geanta2 = new lib.Symbol61();
	this.geanta2.parent = this;
	this.geanta2.setTransform(203,190,1,1,0,0,0,30,28);

	this.geanta1 = new lib.Symbol60();
	this.geanta1.parent = this;
	this.geanta1.setTransform(54.2,143.7,1.429,1.429,0,0,0,27,70);

	this.lant_reset = new lib.Symbol144();
	this.lant_reset.parent = this;
	this.lant_reset.setTransform(178.6,448.6,0.858,0.858,0,0,0,56.6,56.6);

	this.lant8 = new lib.Symbol72();
	this.lant8.parent = this;
	this.lant8.setTransform(159,298.3,0.893,0.893);

	this.lant6 = new lib.Symbol71();
	this.lant6.parent = this;
	this.lant6.setTransform(77.4,330.4,0.893,0.893,0,0,0,37.1,30.9);

	this.lant7 = new lib.Symbol70();
	this.lant7.parent = this;
	this.lant7.setTransform(140.1,265.5,1.136,1.136,0,0,0,37.1,31.1);

	this.lant5 = new lib.Symbol69();
	this.lant5.parent = this;
	this.lant5.setTransform(210.5,222,1.136,1.136,0,0,0,37.1,30.9);

	this.lant3 = new lib.Symbol68();
	this.lant3.parent = this;
	this.lant3.setTransform(64.1,210.8,1.136,1.136,0,0,0,37,30.8);

	this.lant4 = new lib.Symbol67();
	this.lant4.parent = this;
	this.lant4.setTransform(106.5,114,1.136,1.136,19);

	this.lant2 = new lib.Symbol66();
	this.lant2.parent = this;
	this.lant2.setTransform(201.1,70.9,0.942,0.942,0,0,0,37.1,31.1);

	this.lant1 = new lib.Symbol65();
	this.lant1.parent = this;
	this.lant1.setTransform(33.5,52.6,1.136,1.136);

	this.cercei_reset = new lib.Symbol145();
	this.cercei_reset.parent = this;
	this.cercei_reset.setTransform(178.6,448.6,0.858,0.858,0,0,0,56.6,56.6);

	this.cercei8 = new lib.Symbol80();
	this.cercei8.parent = this;
	this.cercei8.setTransform(222.3,306.5,1,1,0,0,0,47,20.5);

	this.cercei7 = new lib.Symbol79();
	this.cercei7.parent = this;
	this.cercei7.setTransform(88,306.5,1,1,0,0,0,47,20.5);

	this.cercei6 = new lib.Symbol78();
	this.cercei6.parent = this;
	this.cercei6.setTransform(205.1,229.6,0.872,0.872,0,0,0,47.1,20.6);

	this.cercei5 = new lib.Symbol77();
	this.cercei5.parent = this;
	this.cercei5.setTransform(81.4,234.1,0.695,0.695,0,0,0,47,20.6);

	this.cercei3 = new lib.Symbol76();
	this.cercei3.parent = this;
	this.cercei3.setTransform(95,146.3,1,1,0,0,0,47,20.5);

	this.cercei1 = new lib.Symbol75();
	this.cercei1.parent = this;
	this.cercei1.setTransform(89,62.5,1,1,0,0,0,47,20.5);

	this.cercei2 = new lib.Symbol74();
	this.cercei2.parent = this;
	this.cercei2.setTransform(215.3,69.5,1,1,0,0,0,47,20.5);

	this.cercei4 = new lib.Symbol73();
	this.cercei4.parent = this;
	this.cercei4.setTransform(212.3,158.3,1,1,0,0,0,47,20.5);

	this.corp_reset = new lib.Symbol146();
	this.corp_reset.parent = this;
	this.corp_reset.setTransform(178.6,448.6,0.858,0.858,0,0,0,56.6,56.6);

	this.corp4 = new lib.Symbol84();
	this.corp4.parent = this;
	this.corp4.setTransform(192.1,273.4,1.171,1.171,0,0,0,53,53.5);

	this.corp3 = new lib.Symbol83();
	this.corp3.parent = this;
	this.corp3.setTransform(70.3,294.4,1.171,1.171,0,0,0,53,53.5);

	this.corp2 = new lib.Symbol82();
	this.corp2.parent = this;
	this.corp2.setTransform(130,22.1,1.171,1.171);

	this.corp1 = new lib.Symbol81();
	this.corp1.parent = this;
	this.corp1.setTransform(76.5,128.2,1.171,1.171,0,0,0,53,53.5);

	this.ochii20 = new lib.Symbol155();
	this.ochii20.parent = this;
	this.ochii20.setTransform(202,314.4,1.014,1.014,0,0,0,20.1,20.1);

	this.ochii19 = new lib.Symbol154();
	this.ochii19.parent = this;
	this.ochii19.setTransform(145.8,314.4,1.014,1.014,0,0,0,20.1,20.1);

	this.ochii_reset = new lib.Symbol147();
	this.ochii_reset.parent = this;
	this.ochii_reset.setTransform(178.6,448.6,0.858,0.858,0,0,0,56.6,56.6);

	this.ochii18 = new lib.Symbol138();
	this.ochii18.parent = this;
	this.ochii18.setTransform(110.2,313.9,1.014,1.014,0,0,0,42.5,19.6);

	this.ochii17 = new lib.Symbol137();
	this.ochii17.parent = this;
	this.ochii17.setTransform(55,313.9,1.014,1.014,0,0,0,42.6,19.6);

	this.ochii16 = new lib.Symbol136();
	this.ochii16.parent = this;
	this.ochii16.setTransform(224.8,252.2,1.014,1.014,0,0,0,42.6,19.6);

	this.ochii15 = new lib.Symbol135();
	this.ochii15.parent = this;
	this.ochii15.setTransform(168.5,252.2,1.014,1.014,0,0,0,42.5,19.6);

	this.ochii14 = new lib.Symbol134();
	this.ochii14.parent = this;
	this.ochii14.setTransform(110.2,252.2,1.014,1.014,0,0,0,42.5,19.6);

	this.ochii13 = new lib.Symbol133();
	this.ochii13.parent = this;
	this.ochii13.setTransform(55,252.2,1.014,1.014,0,0,0,42.6,19.6);

	this.ochii12 = new lib.Symbol132();
	this.ochii12.parent = this;
	this.ochii12.setTransform(227.8,190.1,1.014,1.014,0,0,0,45.6,19.6);

	this.ochii11 = new lib.Symbol131();
	this.ochii11.parent = this;
	this.ochii11.setTransform(171.6,190.1,1.014,1.014,0,0,0,45.6,19.6);

	this.ochii10 = new lib.Symbol130();
	this.ochii10.parent = this;
	this.ochii10.setTransform(113.3,189.9,1.014,1.014,0,0,0,45.6,19.6);

	this.ochii9 = new lib.Symbol129();
	this.ochii9.parent = this;
	this.ochii9.setTransform(58,190.1,1.014,1.014,0,0,0,45.6,19.6);

	this.ochii8 = new lib.Symbol128();
	this.ochii8.parent = this;
	this.ochii8.setTransform(227.8,126.9,1.014,1.014,0,0,0,45.6,19.6);

	this.ochii7 = new lib.Symbol127();
	this.ochii7.parent = this;
	this.ochii7.setTransform(171.6,124.8,1.014,1.014,0,0,0,45.6,19.6);

	this.ochii6 = new lib.Symbol126();
	this.ochii6.parent = this;
	this.ochii6.setTransform(111.2,124.8,1.014,1.014,0,0,0,43.5,19.6);

	this.ochii5 = new lib.Symbol125();
	this.ochii5.parent = this;
	this.ochii5.setTransform(56,124.8,1.014,1.014,0,0,0,43.6,19.6);

	this.ochii4 = new lib.Symbol124();
	this.ochii4.parent = this;
	this.ochii4.setTransform(225.8,62.9,1.014,1.014,0,0,0,43.6,19.6);

	this.ochii3 = new lib.Symbol123();
	this.ochii3.parent = this;
	this.ochii3.setTransform(169.5,62.9,1.014,1.014,0,0,0,43.5,19.6);

	this.ochii2 = new lib.Symbol122();
	this.ochii2.parent = this;
	this.ochii2.setTransform(111.2,62.9,1.014,1.014,0,0,0,43.5,19.6);

	this.ochii1 = new lib.Symbol121();
	this.ochii1.parent = this;
	this.ochii1.setTransform(56,62.9,1.014,1.014,0,0,0,43.6,19.6);

	this.par8 = new lib.Symbol163();
	this.par8.parent = this;
	this.par8.setTransform(124.8,258.6,1.464,1.464,0,0,0,31.1,31.1);

	this.par7 = new lib.Symbol159();
	this.par7.parent = this;
	this.par7.setTransform(196.8,367.9,1.582,1.582,0,0,0,30.1,41.5);

	this.par6 = new lib.Symbol153();
	this.par6.parent = this;
	this.par6.setTransform(44.8,358.9,1.561,1.561,0,0,0,24.6,39.5);

	this.par_reset = new lib.Symbol148();
	this.par_reset.parent = this;
	this.par_reset.setTransform(178.6,448.6,0.858,0.858,0,0,0,56.6,56.6);

	this.par4 = new lib.Symbol110();
	this.par4.parent = this;
	this.par4.setTransform(50.3,206,1.52,1.52,0,0,0,30.8,36.1);

	this.par3 = new lib.Symbol109();
	this.par3.parent = this;
	this.par3.setTransform(148.8,166.4,1.846,1.846,0,0,0,33.3,36.6);

	this.par5 = new lib.Symbol111();
	this.par5.parent = this;
	this.par5.setTransform(227.8,199.7,1.566,1.566,0,0,0,44.3,35.3);

	this.par2 = new lib.Symbol108();
	this.par2.parent = this;
	this.par2.setTransform(206.3,70.6,1.555,1.555,0,0,0,34,35.6);

	this.par1 = new lib.Symbol107();
	this.par1.parent = this;
	this.par1.setTransform(79,76.5,1.598,1.598,0,0,0,36,34.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.rochie2},{t:this.rochie1},{t:this.rochie4},{t:this.rochie5},{t:this.rochie3},{t:this.rochie6},{t:this.rochie_reset}]}).to({state:[{t:this.pantaloni2},{t:this.pantaloni4},{t:this.pantaloni3},{t:this.pantaloni5},{t:this.pantaloni1},{t:this.pantaloni_reset}]},1).to({state:[{t:this.tricou1},{t:this.tricou2},{t:this.tricou3},{t:this.tricou4},{t:this.tricou5},{t:this.tricou_reset}]},1).to({state:[{t:this.pantofi1},{t:this.pantofi2},{t:this.pantofi3},{t:this.pantofi4},{t:this.pantofi5},{t:this.pantofi_reset}]},1).to({state:[{t:this.geanta1},{t:this.geanta2},{t:this.geanta4},{t:this.geanta3},{t:this.geanta5},{t:this.geanta_reset}]},1).to({state:[{t:this.lant1},{t:this.lant2},{t:this.lant4},{t:this.lant3},{t:this.lant5},{t:this.lant7},{t:this.lant6},{t:this.lant8},{t:this.lant_reset}]},1).to({state:[{t:this.cercei4},{t:this.cercei2},{t:this.cercei1},{t:this.cercei3},{t:this.cercei5},{t:this.cercei6},{t:this.cercei7},{t:this.cercei8},{t:this.cercei_reset}]},1).to({state:[{t:this.corp1},{t:this.corp2},{t:this.corp3},{t:this.corp4},{t:this.corp_reset}]},1).to({state:[{t:this.ochii1},{t:this.ochii2},{t:this.ochii3},{t:this.ochii4},{t:this.ochii5},{t:this.ochii6},{t:this.ochii7},{t:this.ochii8},{t:this.ochii9},{t:this.ochii10},{t:this.ochii11},{t:this.ochii12},{t:this.ochii13},{t:this.ochii14},{t:this.ochii15},{t:this.ochii16},{t:this.ochii17},{t:this.ochii18},{t:this.ochii_reset},{t:this.ochii19},{t:this.ochii20}]},1).to({state:[{t:this.par1},{t:this.par2},{t:this.par5},{t:this.par3},{t:this.par4},{t:this.par_reset},{t:this.par6},{t:this.par7},{t:this.par8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-316.3,-419.9,568.8,917);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// butoane menu
	this.moregames = new lib.Symbol24();
	this.moregames.parent = this;
	this.moregames.setTransform(256.2,511.6,0.858,0.858,0,0,0,62.3,56.6);

	this.par_but = new lib.Symbol23();
	this.par_but.parent = this;
	this.par_but.setTransform(-397.3,593.3,1.472,1.472,0,0,0,30.1,19);

	this.ochii_but = new lib.Symbol22();
	this.ochii_but.parent = this;
	this.ochii_but.setTransform(-388.7,572,1.472,1.472);

	this.corp_but = new lib.Symbol21();
	this.corp_but.parent = this;
	this.corp_but.setTransform(-288.5,605.2,1.472,1.472,0,0,0,28.2,28.1);

	this.cercei_but = new lib.Symbol20();
	this.cercei_but.parent = this;
	this.cercei_but.setTransform(82.3,609.8,1.472,1.472,0,0,0,28.2,28.2);

	this.lant_but = new lib.Symbol19();
	this.lant_but.parent = this;
	this.lant_but.setTransform(-8.5,568.3,1.472,1.472);

	this.geanta_but = new lib.Symbol18();
	this.geanta_but.parent = this;
	this.geanta_but.setTransform(-59.6,566.9,1.472,1.472,0,0,0,0.1,0.1);

	this.pantofi_but = new lib.Symbol17();
	this.pantofi_but.parent = this;
	this.pantofi_but.setTransform(-120.9,569.2,1.472,1.472,0,0,0,0.1,0.1);

	this.shirt_but = new lib.Symbol16();
	this.shirt_but.parent = this;
	this.shirt_but.setTransform(-236.7,572,1.472,1.472);

	this.pants_but = new lib.Symbol15();
	this.pants_but.parent = this;
	this.pants_but.setTransform(-138.3,613.3,1.472,1.472,0,0,0,28.1,28.1);

	this.dress_but = new lib.Symbol14();
	this.dress_but.parent = this;
	this.dress_but.setTransform(-293.5,563.8,1.472,1.472);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dress_but},{t:this.pants_but},{t:this.shirt_but},{t:this.pantofi_but},{t:this.geanta_but},{t:this.lant_but},{t:this.cercei_but},{t:this.corp_but},{t:this.ochii_but},{t:this.par_but},{t:this.moregames}]}).wait(1));

	// rochie
	this.haine = new lib.Symbol25();
	this.haine.parent = this;
	this.haine.setTransform(368.2,261.8,1,1,0,0,0,181.2,199.6);

	this.timeline.addTween(cjs.Tween.get(this.haine).wait(1));

	// bg
	this.instance = new lib.Symbol167();
	this.instance.parent = this;
	this.instance.setTransform(529,257.5,1,1,0,0,0,400,294.5);

	this.instance_1 = new lib.baseicontray();
	this.instance_1.parent = this;
	this.instance_1.setTransform(123.8,519,0.965,1.284,89.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-503,-357.8,1429,1015.7);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.instance = new lib.Symbol168();
	this.instance.parent = this;
	this.instance.setTransform(156.5,116,1,1,0,0,0,156.5,116);

	this.instance_1 = new lib.Bitmap23();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,312,231);


(lib.Symbol2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var frequency = 10;
		stage.enableMouseOver(frequency);
		this.moregames.cursor = "pointer";
		this.firstlevel.cursor = "pointer";
		this.secondlevel.cursor = "pointer";
		this.thirdlevel.cursor = "pointer";
		this.logo.cursor = "pointer";
		var buttonsArray = [this.logo,this.firstlevel,this.moregames,this.secondlevel,this.thirdlevel];
		var buttonsArrayString = ["logo","firstlevel","moregames","secondlevel","thirdlevel"];
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
		
		this.moregames.addEventListener("click", moregamesfunctionhere1.bind(this));
		function moregamesfunctionhere1(event) {
			exportRoot.moregamesfunction();
		}
		this.logo.addEventListener("click", logofunctionhere.bind(this));
		function logofunctionhere(event) {
			exportRoot.logofunction();
		}
		
		this.firstlevel.addEventListener("click", dressupfunctionhere.bind(this));
		function dressupfunctionhere(event) {
			if(this.firstlevel.currentFrame == 0){
			exportRoot.animInterLevels = "level1";	
			exportRoot.goAnim();	
			}
		}
		this.secondlevel.addEventListener("click", roomdecorfunctionhere.bind(this));
		function roomdecorfunctionhere(event) {
			if(this.secondlevel.currentFrame == 1){
			exportRoot.animInterLevels = "level2";	
			exportRoot.goAnim();
			}
		}
		this.thirdlevel.addEventListener("click", thirdlevelfunctionhere.bind(this));
		function thirdlevelfunctionhere(event) {
			if(this.thirdlevel.currentFrame == 1){
			exportRoot.animInterLevels = "level3";	
			exportRoot.goAnim();
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.instance = new lib._4();
	this.instance.parent = this;
	this.instance.setTransform(513,371);

	this.logo = new lib.Symbol51();
	this.logo.parent = this;
	this.logo.setTransform(588.2,137.1,0.774,0.774,0,0,0,122.7,122.7);

	this.moregames = new lib.Symbol3();
	this.moregames.parent = this;
	this.moregames.setTransform(712.5,499.5,0.716,0.716,0,0,0,77.5,77.5);

	this.thirdlevel = new lib.Symbol10();
	this.thirdlevel.parent = this;
	this.thirdlevel.setTransform(429.2,163.8,0.896,0.896,0,0,0,-0.6,1.4);

	this.firstlevel = new lib.Symbol9();
	this.firstlevel.parent = this;
	this.firstlevel.setTransform(213.5,171.9,0.909,0.909,0,0,0,154.2,108.2);

	this.secondlevel = new lib.Symbol8();
	this.secondlevel.parent = this;
	this.secondlevel.setTransform(216.8,404.1,1.043,1.043,0,0,0,154.3,107.7);

	this.instance_1 = new lib.bgagenda();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.secondlevel},{t:this.firstlevel},{t:this.thirdlevel},{t:this.moregames},{t:this.logo},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,800,600);


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

	// Layer 3
	this.youtube = new lib.Symbol17_1();
	this.youtube.parent = this;
	this.youtube.setTransform(911.5,-244,0.66,0.66,0,0,0,50,50);

	this.googleplay = new lib.Symbol12copy2();
	this.googleplay.parent = this;
	this.googleplay.setTransform(199.7,733.8,0.914,0.914,0,0,0,124.5,43.1);
	this.googleplay.visible = false;

	this.logo = new lib.Symbol51();
	this.logo.parent = this;
	this.logo.setTransform(100,89,0.774,0.774,0,0,0,123.3,123.3);

	this.playbutton = new lib.Symbol4();
	this.playbutton.parent = this;
	this.playbutton.setTransform(672.3,477,0.768,0.768);

	this.moregames = new lib.Symbol3();
	this.moregames.parent = this;
	this.moregames.setTransform(604.3,536.5,0.768,0.768,0,0,0,77.5,77.5);

	this.fullscreenBtn = new lib.Symbol6();
	this.fullscreenBtn.parent = this;
	this.fullscreenBtn.setTransform(723.1,49.2,0.6,0.6,0,0,0,77.7,77.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fullscreenBtn},{t:this.moregames},{t:this.playbutton},{t:this.logo},{t:this.googleplay},{t:this.youtube}]}).wait(1));

	// Layer 1
	this.instance = new lib.cooltext295698094828745();
	this.instance.parent = this;
	this.instance.setTransform(545,164,0.882,0.882);

	this.instance_1 = new lib.Bitmap2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(160,157,0.472,0.472);

	this.masa = new lib.Symbol95();
	this.masa.parent = this;
	this.masa.setTransform(207.5,486,0.562,0.788,0,0,0,316.8,145.3);

	this.instance_2 = new lib.Bitmap1copy2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(236,137,0.443,0.443);

	this.instance_3 = new lib.Bitmap27();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-296,-203,1.467,1.467);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.masa},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-296,-277,1240.5,1050);


(lib.Symbol32_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance_5 = new lib.Symbol102();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-88.9,96.8,0.978,0.978,0,0,0,100,100);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-191.5,-5.9,195.6,195.6);


(lib.Symbol14_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Tween17("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(95,95);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.02,scaleY:1.02},11).to({scaleX:1,scaleY:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.4,190,190);


(lib.q = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.shape6145("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-53.9,35.7,0.047,0.047);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.25,scaleY:0.25,x:-64.8,y:24.8},4).to({scaleX:0.1,scaleY:0.1,x:-56.5,y:32.1},2).to({_off:true},1).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.3,29.4,18.9,18.2);


(lib.Symbol31_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance_5 = new lib.Symbol14_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(93,93.4,0.978,0.978,0,0,0,95,95);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.1,-5.8,195.5,195.6);


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
	this.instance = new lib.Symbol6_1();
	this.instance.parent = this;
	this.instance.setTransform(-82.4,-384.2,1,1,0,0,0,29.6,20);

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
p.nominalBounds = new cjs.Rectangle(-112,-404.2,59.3,40);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.animStars1 = function(){
			exportRoot.sparklesSound();
		}
		this.stelute = function(){
			this.mcEffect.gotoAndPlay(1);
		}
		
		var frequency = 10;
		stage.enableMouseOver(frequency);
		var currentTargetNumChildren;
		var buttonsArray = [this.logo,this.poza1,this.poza2,this.replay_but,this.butoane.moregames,this.moregames1,this.nextlevel,this.butoane.dress_but,this.butoane.pants_but,this.butoane.shirt_but,this.butoane.pantofi_but,this.butoane.geanta_but,this.butoane.lant_but,this.butoane.cercei_but,this.butoane.corp_but,this.butoane.ochii_but,this.butoane.par_but,
		this.butoane.haine.rochie1,this.butoane.haine.rochie2,this.butoane.haine.rochie3,this.butoane.haine.rochie4,this.butoane.haine.rochie5,this.butoane.haine.rochie6,
		this.butoane.haine.pantaloni1,this.butoane.haine.pantaloni2,this.butoane.haine.pantaloni3,this.butoane.haine.pantaloni4,this.butoane.haine.pantaloni5,
		this.butoane.haine.tricou1,this.butoane.haine.tricou2,this.butoane.haine.tricou3,this.butoane.haine.tricou4,this.butoane.haine.tricou5,
		this.butoane.haine.pantofi1,this.butoane.haine.pantofi2,this.butoane.haine.pantofi3,this.butoane.haine.pantofi4,this.butoane.haine.pantofi5,
		this.butoane.haine.geanta1,this.butoane.haine.geanta2,this.butoane.haine.geanta3,this.butoane.haine.geanta4,this.butoane.haine.geanta5,
		this.butoane.haine.lant1,this.butoane.haine.lant2,this.butoane.haine.lant3,this.butoane.haine.lant4,this.butoane.haine.lant5,this.butoane.haine.lant6,this.butoane.haine.lant7,this.butoane.haine.lant8,
		this.butoane.haine.cercei1,this.butoane.haine.cercei2,this.butoane.haine.cercei3,this.butoane.haine.cercei4,this.butoane.haine.cercei5,this.butoane.haine.cercei6,this.butoane.haine.cercei7,this.butoane.haine.cercei8,
		this.butoane.haine.corp1,this.butoane.haine.corp2,this.butoane.haine.corp3,this.butoane.haine.corp4,
		this.butoane.haine.ochii1,this.butoane.haine.ochii2,this.butoane.haine.ochii3,this.butoane.haine.ochii4,this.butoane.haine.ochii5,this.butoane.haine.ochii6,this.butoane.haine.ochii7,this.butoane.haine.ochii8,this.butoane.haine.ochii9,this.butoane.haine.ochii10,
		this.butoane.haine.ochii11,this.butoane.haine.ochii12,this.butoane.haine.ochii13,this.butoane.haine.ochii14,this.butoane.haine.ochii15,this.butoane.haine.ochii16,this.butoane.haine.ochii17,this.butoane.haine.ochii18,this.butoane.haine.ochii19,this.butoane.haine.ochii20,
		this.butoane.haine.par1,this.butoane.haine.par2,this.butoane.haine.par3,this.butoane.haine.par4,this.butoane.haine.par5,this.butoane.haine.par6,this.butoane.haine.par7,this.butoane.haine.par8,
		this.butoane.haine.rochie_reset,this.butoane.haine.pantaloni_reset,this.butoane.haine.geanta_reset,this.butoane.haine.tricou_reset,this.butoane.haine.pantofi_reset,this.butoane.haine.lant_reset,this.butoane.haine.cercei_reset,this.butoane.haine.corp_reset,this.butoane.haine.ochii_reset,this.butoane.haine.par_reset];
		
		var buttonsArrayString = ["logo","poza1","poza2","replay_but","moregames","moregames1","nextlevel","dress_but","pants_but","shirt_but","pantofi_but","geanta_but","lant_but","cercei_but","corp_but","ochii_but","par_but",
		"rochie1","rochie2","rochie3","rochie4","rochie5","rochie6","pantaloni1","pantaloni2","pantaloni3","pantaloni4","pantaloni5",
		"tricou1","tricou2","tricou3","tricou4","tricou5","pantofi1","pantofi2","pantofi3","pantofi4","pantofi5",
		"geanta1","geanta2","geanta3","geanta4","geanta5","lant1","lant2","lant3","lant4","lant5","lant6","lant7","lant8",
		"cercei1","cercei2","cercei3","cercei4","cercei5","cercei6","cercei7","cercei8",
		"corp1","corp2","corp3","corp4",
		"ochii1","ochii2","ochii3","ochii4","ochii5","ochii6","ochii7","ochii8","ochii9","ochii10","ochii11","ochii12","ochii13","ochii14","ochii15","ochii16","ochii17","ochii18","ochii19","ochii20",
		"par1","par2","par3","par4","par5","par6","par7","par8",
		"rochie_reset","pantaloni_reset","geanta_reset","tricou_reset","pantofi_reset","lant_reset","cercei_reset","corp_reset","ochii_reset","par_reset"];
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
				
				
			}
			
				if(event.currentTarget.name.indexOf("replay_but") > -1){
				//exportRoot.animInterLevels = "replay";
				//exportRoot.goAnim();
				//	gdApi.showBanner();
				//exportRoot.fadeInElement(exportRoot.interlevel);
				location.reload();
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
			if(event.currentTarget.name.indexOf("dress_but") > -1){
				this.butoane.haine.gotoAndStop(0);
				
			}
			if(event.currentTarget.name.indexOf("pants_but") > -1){
				this.butoane.haine.gotoAndStop(1);
				
			}if(event.currentTarget.name.indexOf("shirt_but") > -1){
				this.butoane.haine.gotoAndStop(2);
				
			}if(event.currentTarget.name.indexOf("pantofi_but") > -1){
				this.butoane.haine.gotoAndStop(3);
				
			}if(event.currentTarget.name.indexOf("geanta_but") > -1){
				this.butoane.haine.gotoAndStop(4);
				
			}if(event.currentTarget.name.indexOf("lant_but") > -1){
				this.butoane.haine.gotoAndStop(5);
				
			}if(event.currentTarget.name.indexOf("cercei_but") > -1){
				this.butoane.haine.gotoAndStop(6);
				
			}if(event.currentTarget.name.indexOf("corp_but") > -1){
				this.butoane.haine.gotoAndStop(7);
				
			}if(event.currentTarget.name.indexOf("ochii_but") > -1){
				this.butoane.haine.gotoAndStop(8);
				
			}if(event.currentTarget.name.indexOf("par_but") > -1){
				this.butoane.haine.gotoAndStop(9);
				
			}
			if(event.currentTarget.name.indexOf("rochie_reset") > -1){
				this.doll.doll_rochie.gotoAndStop(0);	
				
			}
			if(event.currentTarget.name.indexOf("tricou_reset") > -1){
				this.doll.doll_tricou.gotoAndStop(0);	
				
			}
			if(event.currentTarget.name.indexOf("pantaloni_reset") > -1){
				this.doll.doll_pantaloni.gotoAndStop(0);	
				
			}
			if(event.currentTarget.name.indexOf("pantofi_reset") > -1){
				this.doll.doll_pantofi.gotoAndStop(0);	
				
			}
			if(event.currentTarget.name.indexOf("geanta_reset") > -1){
				this.doll.doll_geanta.gotoAndStop(0);	
				
			}
			if(event.currentTarget.name.indexOf("lant_reset") > -1){
				this.doll.doll_lant.gotoAndStop(0);	
				
			}
			if(event.currentTarget.name.indexOf("cercei_reset") > -1){
				this.doll.doll_cercei.gotoAndStop(0);	
				
			}
			if(event.currentTarget.name.indexOf("corp_reset") > -1){
				this.doll.doll_corp.gotoAndStop(0);	
				
			}
			if(event.currentTarget.name.indexOf("ochii_reset") > -1){
				this.doll.doll_ochii.gotoAndStop(0);	
				
			}
			if(event.currentTarget.name.indexOf("par_reset") > -1){
				this.doll.doll_par.gotoAndStop(0);	
				
			}
			
			if(event.currentTarget.name.indexOf("rochie") > -1){
				this.change1(event.currentTarget.name , "doll_rochie");
				this.animStars1();
				
				
				
			}
			if(event.currentTarget.name.indexOf("pantaloni") > -1){
				this.change2(event.currentTarget.name , "doll_pantaloni");
				this.animStars1();
				
			}
			if(event.currentTarget.name.indexOf("tricou") > -1){
				this.change3(event.currentTarget.name , "doll_tricou");
				this.animStars1();
				
				
				
			}
			if(event.currentTarget.name.indexOf("pantofi") > -1){
				this.change4(event.currentTarget.name , "doll_pantofi");
				this.animStars1();
		
				
				
			}
			if(event.currentTarget.name.indexOf("geanta") > -1){
				this.change5(event.currentTarget.name , "doll_geanta");
				this.animStars1();
				
				
				
			}
			if(event.currentTarget.name.indexOf("lant") > -1){
				this.change6(event.currentTarget.name , "doll_lant");
				this.animStars1();
				
				
				
			}
			if(event.currentTarget.name.indexOf("cercei") > -1){
				this.change7(event.currentTarget.name , "doll_cercei");
				this.animStars1();
				
				
				
			}
			if(event.currentTarget.name.indexOf("corp") > -1){
				this.change8(event.currentTarget.name , "doll_corp");
				this.change11(event.currentTarget.name , "doll_mana");
				this.animStars1();
				
				
				
			}
			if(event.currentTarget.name.indexOf("ochii") > -1){
				this.change9(event.currentTarget.name , "doll_ochii");
				this.animStars1();
				
				
				
			}
			if(event.currentTarget.name.indexOf("par") > -1){
				this.change10(event.currentTarget.name , "doll_par");
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
		
		this.change1 = function(arg){
			
			this.doll.doll_rochie.gotoAndStop(arg);
			this.doll.doll_rochie.visible=true;	
			this.doll.doll_tricou.visible=false;	
			this.doll.doll_pantaloni.visible=false;	
			}
		
		
		this.change2 = function(arg){
		this.doll.doll_pantaloni.gotoAndStop(arg);			
			this.doll.doll_tricou.visible=true;	
			this.doll.doll_pantaloni.visible=true;	
			this.doll.doll_rochie.visible=false;	
				}
		
		
		
		this.change3 = function(arg){
		this.doll.doll_tricou.gotoAndStop(arg);			
			this.doll.doll_tricou.visible=true;	
			this.doll.doll_pantaloni.visible=true;	
			this.doll.doll_rochie.visible=false;	
		
		}
		this.change4 = function(arg){
		this.doll.doll_pantofi.gotoAndStop(arg);	
		
		}
		
		this.change5 = function(arg){
		this.doll.doll_geanta.gotoAndStop(arg);	
		
		}
		this.change6 = function(arg){
		this.doll.doll_lant.gotoAndStop(arg);	
		
		}
		this.change7 = function(arg){
		this.doll.doll_cercei.gotoAndStop(arg);	
		
		}
		this.change8 = function(arg){
		this.doll.doll_corp.gotoAndStop(arg);	
		
		}
		this.change9 = function(arg){
		this.doll.doll_ochii.gotoAndStop(arg);	
		
		}
		this.change10 = function(arg){
		this.doll.doll_par.gotoAndStop(arg);	
		
		}
		this.change11 = function(arg){
		this.doll.doll_mana.gotoAndStop(arg);	
		
		}
		this.finishlevel = function(){
			if(this.checklevel.currentFrame ==0){
			this.movedoll();
			this.butoane.visible=false;
				this.fundal.gotoAndStop(1);
				this.checklevel.gotoAndStop(1);
				this.finallevel();
				exportRoot.showAds();
			}
			else if(this.checklevel.currentFrame ==1){
				exportRoot.level1.visible=false;
				exportRoot.levelpick.visible=true;
				exportRoot.levelpick.firstlevel.gotoAndStop(1);
				exportRoot.levelpick.secondlevel.gotoAndStop(1);
			this.doll.y = 45;
			this.doll.x = 408;
			this.butoane.visible=true;
			exportRoot.level1.resetgame();
			this.fundal.gotoAndStop(0);
				this.checklevel.gotoAndStop(2);
				
				this.entergame();
			}
			else if(this.checklevel.currentFrame ==2){
			this.movedoll();
			this.butoane.visible=false;
			this.fundal.gotoAndStop(2);
				this.checklevel.gotoAndStop(3);
				this.finallevel();
				if (stringHostDaria == "www.google.com" || stringHostDaria == "www.azgametv.com"){}else{exportRoot.showAds();}
			}
			else if(this.checklevel.currentFrame ==3){
					exportRoot.level1.visible=false;
				exportRoot.levelpick.visible=true;
				exportRoot.levelpick.firstlevel.gotoAndStop(1);
				exportRoot.levelpick.secondlevel.gotoAndStop(0);
				exportRoot.levelpick.thirdlevel.gotoAndStop(1);
			this.doll.y = 45;
			this.doll.x = 408;
			this.butoane.visible=true;
					exportRoot.level1.resetgame();
			this.fundal.gotoAndStop(0);
				this.checklevel.gotoAndStop(4);
				this.entergame();
			}
			else if(this.checklevel.currentFrame ==4){
			this.movedoll();
			this.butoane.visible=false;
			this.fundal.gotoAndStop(3);
				this.checklevel.gotoAndStop(4);
				this.completelevel();
				if (stringHostDaria == "www.google.com" || stringHostDaria == "www.azgametv.com"){}else{exportRoot.showAds();}
			}
		}
		
		
		
		
		this.finallevel = function() {
			if (stringHostDaria == "www.google.com" || stringHostDaria == "www.azgametv.com"){
						this.poza2.visible=false;
						this.poza1.visible=false;
					}else{
						this.poza2.visible=true;
						this.poza1.visible=true;
					}
			this.moregames1.visible=false;
			this.butoane.moregames.visible=false;
			this.nextlevel.visible=false;
		}
		this.completelevel = function() {
			this.poza1.visible=true;
			this.poza2.visible=true;
			this.moregames1.visible=true;
			this.butoane.moregames.visible=false;
			createjs.Tween.get(exportRoot.level1.replay_but, {override:true}).wait(2000).to({alpha:1, visible:true}, 2000);
			this.nextlevel.visible=false;
		
		}
		
		this.entergame = function(){
			this.masa.visible=true;
			this.moregames1.visible=false;
			this.butoane.moregames.visible=true;
			this.poza1.x = -200;
			this.poza2.x = 825;
			this.nextlevel.visible=true;
		}
		this.resetgame = function(){
			
			this.doll.doll_rochie.gotoAndStop(0);	
			this.doll.doll_pantaloni.gotoAndStop(0);
			this.doll.doll_tricou.gotoAndStop(0);
			this.doll.doll_geanta.gotoAndStop(0);	
			this.doll.doll_lant.gotoAndStop(0);
			this.doll.doll_cercei.gotoAndStop(0);
			this.doll.doll_corp.gotoAndStop(0);	
			this.doll.doll_ochii.gotoAndStop(0);	
			this.doll.doll_par.gotoAndStop(0);
			this.butoane.haine.gotoAndStop(9);
			this.doll.doll_rochie.visible=true;
			this.doll.doll_pantaloni.visible=false;
			this.doll.doll_tricou.visible=false;
			this.fundal.gotoAndStop(0);
			this.doll.scaleX = 0.6;
			this.doll.scaleY = 0.6;					
			this.doll.y = 35;
			this.doll.x = 225;
		}
		this.movedoll = function(){
		this.doll.scaleX = 0.3;
		this.doll.scaleY = 0.3;					
		this.doll.y = 265;
		this.masa.visible=false;
		createjs.Tween.get(this.doll, {override:true}).to({x:340},0).call(handleComplete);
		this.nextlevel.visible=false;
		}
		function handleComplete() {
			if(exportRoot.level1.checklevel.currentFrame ==4){ exportRoot.level1.mcEffect.gotoAndPlay(1);
			createjs.Tween.get(exportRoot.level1.poza1, {override:true}).to({x:50},1000);
			createjs.Tween.get(exportRoot.level1.poza2, {override:true}).to({x:600},1000);}
			else{
		     exportRoot.level1.mcEffect.gotoAndPlay(1);
			createjs.Tween.get(exportRoot.level1.poza1, {override:true}).to({x:50},1000);
			createjs.Tween.get(exportRoot.level1.poza2, {override:true}).to({x:600},1000);
			
			createjs.Tween.get(exportRoot.level1.nextlevel, {override:true}).to({alpha:1, visible:true}, 2000);
		    }}
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

	// Layer 3
	this.checklevel = new lib.Symbol120();
	this.checklevel.parent = this;
	this.checklevel.setTransform(997.5,159.5,1,1,0,0,0,17.5,19.5);

	this.timeline.addTween(cjs.Tween.get(this.checklevel).wait(1));

	// final
	this.moregames1 = new lib.Symbol3();
	this.moregames1.parent = this;
	this.moregames1.setTransform(501,549.2,0.645,0.645,0,0,0,77.9,78);

	this.replay_but = new lib.Symbol50();
	this.replay_but.parent = this;
	this.replay_but.setTransform(257.1,549.1,0.645,0.645,0,0,0,77.7,77.8);

	this.poza1 = new lib.Symbol32_1();
	this.poza1.parent = this;
	this.poza1.setTransform(-151.2,352.3,0.752,0.752,0,0,0,-181.3,-1.2);

	this.poza2 = new lib.Symbol31_1();
	this.poza2.parent = this;
	this.poza2.setTransform(841.4,358,0.752,0.752,0,0,0,1.6,-1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.poza2},{t:this.poza1},{t:this.replay_but},{t:this.moregames1}]}).wait(1));

	// butoane
	this.nextlevel = new lib.Symbol114();
	this.nextlevel.parent = this;
	this.nextlevel.setTransform(707.5,528.5,0.877,0.877,0,0,0,-0.5,-2.5);

	this.logo = new lib.Symbol51();
	this.logo.parent = this;
	this.logo.setTransform(102,95,0.774,0.774,0,0,0,122.7,122.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo},{t:this.nextlevel}]}).wait(1));

	// personaj
	this.mcEffect = new lib.sprite6148copy();
	this.mcEffect.parent = this;
	this.mcEffect.setTransform(235.9,42.2,3.663,2.92,-14.8,0,0,-110,-279.9);

	this.doll = new lib.Symbol26();
	this.doll.parent = this;
	this.doll.setTransform(230.3,48.7,0.565,0.565,0,0,0,0.2,-6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.doll},{t:this.mcEffect}]}).wait(1));

	// chenar
	this.butoane = new lib.Symbol13();
	this.butoane.parent = this;
	this.butoane.setTransform(575.1,263,0.806,0.806,0,0,0,220,234);

	this.timeline.addTween(cjs.Tween.get(this.butoane).wait(1));

	// bg
	this.masa = new lib.Symbol95();
	this.masa.parent = this;
	this.masa.setTransform(291.6,444.4,0.52,1,0,0,0,316.6,145);

	this.fundal = new lib.Symbol119();
	this.fundal.parent = this;
	this.fundal.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fundal},{t:this.masa}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-403.7,-362.4,1548.1,967.2);


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
					
					exportRoot.levelpick.visible = true;
					exportRoot.cover.visible = false;
					exportRoot.level1.resetgame();
				if (stringHostDaria == "www.google.com" || stringHostDaria == "www.azgametv.com"){
						
						exportRoot.level1.logo.y = 100;
					}
				break;
				
				
			
				
				
					case "interlevel":
					exportRoot.level1.finishlevel();
				break;
					
				case "level1":
					exportRoot.level1.visible = true;
					exportRoot.levelpick.visible = false;
				exportRoot.level1.replay_but.visible=false;
				exportRoot.level1.moregames1.visible=false;
				exportRoot.level1.poza1.visible=false;
				exportRoot.level1.poza2.visible=false;
				exportRoot.levelpick.firstlevel.gotoAndStop(1);
				exportRoot.levelpick.secondlevel.gotoAndStop(1);
				
				break;
					
				case "level2":
					exportRoot.level1.visible=true;
				exportRoot.levelpick.visible = false;
				
				
				
				break;
			
				case "level3":
					exportRoot.level1.visible=true;
				exportRoot.levelpick.visible = false;
					
					
				
				
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
			var gamename = 'princess-event-agenda';
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
			var gamename = 'princess-event-agenda';
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
			var gamename = 'princess-event-agenda';
			var mainwebsite = 'https://www.azgametv.com/';
			var stringHost = detect_parent();
		
			if (stringHost == "rosy") {
				stringHost = window.location.hostname;
			}
			var urlsite = mainwebsite + "?utm_source=" + stringHost + "&utm_medium=html5game&utm_content=Music_Festival_Party&utm_campaign=" + gamename;
			realClick(urlsite);
		}
		this.poza2link = function () {
			exportRoot.stopSnd();
			var gamename = 'princess-event-agenda';
			var mainwebsite = 'https://www.azgametv.com';
			var stringHost = detect_parent();
		
			if (stringHost == "rosy") {
				stringHost = window.location.hostname;
			}
			var urlsite = mainwebsite + "?utm_source=" + stringHost + "&utm_medium=html5game&utm_content=Modern_Princess&utm_campaign=" + gamename;
			realClick(urlsite);
		}
		
		
		this.youtubelink = function () {
			exportRoot.stopSnd();
			var gamename = 'princess-event-agenda';
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
	this.sndBtn.setTransform(783.5,48.5,0.6,0.6,0,0,0,77.5,77.5);

	this.timeline.addTween(cjs.Tween.get(this.sndBtn).wait(1));

	// level1
	this.level1 = new lib.Symbol11();
	this.level1.parent = this;
	this.level1.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.level1).wait(1));

	// intro
	this.levelpick = new lib.Symbol2_1();
	this.levelpick.parent = this;
	this.levelpick.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.levelpick).wait(1));

	// cover
	this.cover = new lib.Symbol1();
	this.cover.parent = this;
	this.cover.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.cover).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.7,-62.4,1548.1,1262.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;