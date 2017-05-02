var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        GetNeededData(this);
    }
};
xmlhttp.open("GET" "https://api.musixmatch.com/ws/1.1/artist.get?format=xml&callback=callback&artist_id=13895270&apikey=bc88031de91241ce35ce00054f3e73a2", true);
xmlhttp.send();

function GetNeededData(xml) {
    var xmlDoc = xml.responseXML;
    var w = document.getElementById("tb"); 

    var items = w.getElementsByTagName("td");
    
    var artist_name = xmlDoc.getElementsByTagName("artist_name");
    items[0].innerHTML = artist_name[1].textContent;
    
    var artist_country = xmlDoc.getElementsByTagName("artist_country");
    items[1].innerHTML = artist_country[1].textContent;

    var artist_rating = xmlDoc.getElementsByTagName("artist_rating");
    items[2].innerHTML = artist_rating[1].textContent;
    
    var music_genre_name = xmlDoc.getElementsByTagName("music_genre_name");
    items[3].innerHTML = music_genre_name[1].textContent;
}
