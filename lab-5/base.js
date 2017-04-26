var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        GetNeededData(this);
    }
};
xmlhttp.open("GET", "http://api.worldweatheronline.com/premium/v1/weather.ashx?key=293fde5989a044348ad180530172204&q=Kremenchuk&format=xml&num_of_days=3", true);
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