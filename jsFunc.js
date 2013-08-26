function c2F(value) {
    return value*9/5+32;
}

function write2Para(paraID, text) {
    document.getElementById(paraID).innerHTML=text;
}

function writeTemp(paraID, cTemp) {
    var fTemp=c2F(cTemp);
    var strWrite="Temperature in Celsius: "+cTemp.toString()+ " degrees <br />Temperature in Fahrenheit: "+fTemp.toString()+" degrees<br />";
    write2Para(paraID, strWrite);
}

function tellTime(paraID) {

    var now = new Date();
    var out = "<br /> "+now.toDateString()+" "+now.toTimeString()+"<br />";
    write2Para(paraID,out);
}

function describeLiverpool(paraID) {
    var desc = "Liverpool is a great club!";
    var adj = prompt("new adjective to describe LFC","great");
    var desc2=desc.replace("great", adj);
    write2Para(paraID,desc2);
}

function dispBanner(arrBanner, bannerID) {
    var counter=1;
    setInterval(function(){cycle(bannerID)}, 2000);

    function cycle(bannerID) {
	counter++;
	document.getElementById(bannerID).src=arrBanner[counter%arrBanner.length];
    }
}

function Pokemon(pokemonName, pokemonPic, pokemonAbility) {
    this.name=pokemonName;
    this.pic=pokemonPic;
    this.ability=pokemonAbility;
}

function dispPokemon(pokemon) {
    var strWrite="<br />"+charmander.name+" can use "+charmander.ability+"</ br>";
    write2Para("poke1", strWrite)
    document.getElementById("poke1pic").src=charmander.pic

}

function showEvent() {
    var out = "";
    document.getElementById("btnTest").onclick=function(e) {
	if (!e) var e = window.event;
	for (i in e) {
	    out += i+" = " + e[i] + "</br>";
	}
	write2Para("eventDesc", out);
    }
}

function createContentsByTag(tag, menuDiv) {
    //this function takes a tagname as a string (tag) and returns a dynamic menu bar at a specified div (menuDiv) containing all the ID of that tag.

    var tagArr = document.getElementsByTagName(tag);
    var menuHtml = "<ol>";
    for (i in tagArr) {
	menuHtml = menuHtml + "<li>" + addOneMenu(tagArr[i])+"</li>";
    }
    menuHtml = menuHtml+"</ol>";
    write2Para(menuDiv, menuHtml);
}

function addOneMenu(tagID) {
    //This function adds the ID of the tag and an html ref to it
    return "<a href=#"+tagID+">"+tagID+"</a>";
}
