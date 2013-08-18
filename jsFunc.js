function c2F(value) {
    return value*9/5+32;
}

function write2Para(paraID, text) {
    document.getElementById(paraID).innerHTML=text;
}

function writeTemp(paraID, cTemp) {
    var fTemp=c2F(cTemp)
    //var strWrite="Temperature in Celsius: "+cTemp+ "degrees <br />Temperature in Fahrenheit: "+fTemp+" degrees<br />";
    var strWrite=cTemp
    write2Para(paraID, strWrite)
}
