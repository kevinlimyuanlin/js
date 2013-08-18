function c2F(value) {
    return value*9/5+32;
}

function write2Para(paraID, text) {
    document.getElementById(paraID).innerHTML=text;
}

function writeTemp(paraID, cTemp) {
    var fTemp=c2F(cTemp);
    var strWrite="Temperature in Celsius: "+cTemp.toString()+ "degrees <br />Temperature in Fahrenheit: "+fTemp.toString()+" degrees<br />";
//    var strWrite=fTemp.toString();
    write2Para(paraID, strWrite);
}
