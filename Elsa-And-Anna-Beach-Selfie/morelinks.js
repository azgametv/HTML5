




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
 function logolink(url) {
 openlogo();
}
function morelink(url){
openmoregames();
}
function poza1link(url){
openpoza1();
}
function poza2link(url){
openpoza2();
}
function preloaderlink(url){
openpreloader();
}
 function ads(){
	showads();
	 
 }
 function pozamobil1(url) {
 openmobil1();
}
 function pozamobil2(url) {
 openmobil2();
}
 function pozainter(url) {
 openinter();
}
 function pozamobilinter(url) {
 openmobilinter();
}
 function showads(){
	 
	 window[preroll.config.loaderObjectName].refetchAd();
	 
 }

function openlogo(url){
var gamename = 'elsa-anna-beach-selfie';
	var mainwebsite = 'https://www.azgametv.com/';
	var stringHost = detect_parent();

	if (stringHost == "rosy") {
		stringHost = window.location.hostname;
	}
	var urlsite = mainwebsite + "?utm_source=" + stringHost + "&utm_medium=html5game&utm_content=logo&utm_campaign=" + gamename;
 realClick(urlsite);
 }
function openmoregames(url){
var gamename = 'elsa-anna-beach-selfie';
	var mainwebsite = 'https://www.azgametv.com/';
	var stringHost = detect_parent();

	if (stringHost == "rosy") {
		stringHost = window.location.hostname;
	}
	var urlsite = mainwebsite + "?utm_source=" + stringHost + "&utm_medium=html5game&utm_content=moregames&utm_campaign=" + gamename;
 realClick(urlsite);
 }
function openpoza1(url){
var gamename = 'elsa-anna-beach-selfie';
	var mainwebsite = 'https://www.azgametv.com/';
	var stringHost = detect_parent();

	if (stringHost == "rosy") {
		stringHost = window.location.hostname;
	}
	var urlsite = mainwebsite + "?utm_source=" + stringHost + "&utm_medium=html5game&utm_content=Elsa_and_Anna_Shopping_Time&utm_campaign=" + gamename;
 realClick(urlsite);
 }
 function openpoza2(url){
var gamename = 'elsa-anna-beach-selfie';
	var mainwebsite = 'https://www.azgametv.com/';
	var stringHost = detect_parent();

	if (stringHost == "rosy") {
		stringHost = window.location.hostname;
	}
	var urlsite = mainwebsite + "?utm_source=" + stringHost + "&utm_medium=html5game&utm_content=princesses-baby-room&utm_campaign=" + gamename;
 realClick(urlsite);
 }
  function openmobil1(url){
var gamename = 'elsa-anna-beach-selfie';
	var mainwebsite = 'https://www.azgametv.com/';
	var stringHost = detect_parent();

	if (stringHost == "rosy") {
		stringHost = window.location.hostname;
	}
	var urlsite = mainwebsite + "?utm_source=" + stringHost + "&utm_medium=html5game&utm_content=princesses-baby-room&utm_campaign=" + gamename;
 realClick(urlsite);
 }
   function openmobil2(url){
var gamename = 'elsa-anna-beach-selfie';
	var mainwebsite = 'https://www.azgametv.com/';
	var stringHost = detect_parent();

	if (stringHost == "rosy") {
		stringHost = window.location.hostname;
	}
	var urlsite = mainwebsite + "?utm_source=" + stringHost + "&utm_medium=html5game&utm_content=princesses-baby-room&utm_campaign=" + gamename;
 realClick(urlsite);
 }
  function openpreloader(url){
var gamename = 'elsa-anna-beach-selfie';
	var mainwebsite = 'https://www.azgametv.com/';
	var stringHost = detect_parent();

	if (stringHost == "rosy") {
		stringHost = window.location.hostname;
	}
	var urlsite = mainwebsite + "?utm_source=" + stringHost + "&utm_medium=html5game&utm_content=preloader&utm_campaign=" + gamename;
 realClick(urlsite);
 }