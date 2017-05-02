var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        GetNeededData(this);
    }
};
xmlhttp.open("GET", "http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=570&count=3&maxlength=500&format=xml");
xmlhttp.send();

function GetNeededData(xml) {
    var xmlDoc = xml.responseXML;
    var w = document.getElementById("tb"); 

    var items = w.getElementsByTagName("td");
    
    var maxtempC = xmlDoc.getElementsByTagName("maxtempC");
    items[0].innerHTML = maxtempC[1].textContent;
    
    var mintempC = xmlDoc.getElementsByTagName("mintempC");
    items[1].innerHTML = mintempC[1].textContent;

    var windspeedKmph = xmlDoc.getElementsByTagName("windspeedKmph");
    items[2].innerHTML = windspeedKmph[1].textContent;
}
