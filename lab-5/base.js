var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        GetNeededData(this);
    }
};
xmlhttp.open("GET" "http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=570&count=3&maxlength=500&format=xml", true);
xmlhttp.send();

function GetNeededData(xml) {
    var xmlDoc = xml.responseXML;
    var w = document.getElementById("tb"); 

    var items = w.getElementsByTagName("td");
    
    var title = xmlDoc.getElementsByTagName("title");
    items[0].innerHTML = title[1].textContent;
    
    var url = xmlDoc.getElementsByTagName("url");
    items[1].innerHTML = url[1].textContent;

    var contents = xmlDoc.getElementsByTagName("contents");
    items[2].innerHTML = contents[1].textContent;
}
