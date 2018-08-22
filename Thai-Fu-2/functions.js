// JavaScript Document
function CreateLinksInGame(NameID,Screen,Button,GameId){
	GameId = typeof GameId !== 'undefined' ? GameId : "";
	var domain=document.referrer;
	var url="https://www.azgametv.com/";
	NameID=CreatNameId(NameID);
	if(typeof GameId  === 'undefined' || GameId == "" || GameId == "undefined"){
    	
    }else{
		//url = url+"&pic="+GameId;
		url = url+"?pic="+GameId;
	}
    if(typeof domain  === 'undefined' || domain == "" || domain == "undefined"){
    	domain="unknown";
    }else{
    	domain=domain.split('/')[2];
    }
	if(url.indexOf("?") > -1){
		url=url+"&";
	}else{
		url=url+"?";
	}
	url=url+"utm_source="+domain+"&utm_medium="+Screen+"-"+Button+"&utm_campaign=game-"+NameID;
	window.open(url);
}
function CreatNameId(name){	
		name=name.toLowerCase();
		name=name.replace(/(^\s*)|(\s*$)/g, "");  //delete space at header and end		
		name=name.replace(/[^A-Za-z0-9-]+/g,' ');	//replace non letter-number
		name=name.replace(/\b\w+\b/g,change);	//Upcase letters
		name=name.replace(/\s/g,"-");	//replace space to dash
		name=name.replace(/--/g,"-");
		name=name.replace(/--/g,"-");		
		name=name.replace(/--/g,"-");
		name=name.replace(/--/g,"-");		
		name=name.replace(/--/g,"-");		
		name=name.replace(/(^-*)|(-*$)/g, "");  //delete dash at header and end
		return(name);
}
function change(word){
	return word.substring(0,1).toUpperCase()+word.substring(1,word.length);;
}