'use strict';

function ratesRequest(xmlpath, xmldiv) {
  var XHRequest = 'onload' in new XMLHttpRequest() ? XMLHttpRequest : XDomainRequest;
  var xhr = new XHRequest();

xhr.open('GET', xmlpath, true);

xhr.onload = function() {
    var responseDoc = this.responseXML;
    var recipteElem = document.getElementById('recipte');
    var recipteArr = responseDoc.getElementsByTagName('recipte');
    for (var i = 0; i < recipteArr.length; i++) {
        var recipteContainer = document.createElement('div');
        recipteContainer.classList.add('recipte');

        var recipteName = document.createElement('h3');
        recipteName.classList.add('recipte__header');
        var name = recipteArr[i].getAttribute('name');
        recipteName.innerHTML = name

        var ingsArr = recipteArr[i].getElementsByTagName('ing');

        var recipteIngredientsHeader = document.createElement('h5');
        recipteIngredientsHeader.classList.add('recipte__ingredients-header');
        recipteIngredientsHeader.innerHTML = 'Ингридиенты';

        var recipteIngredients = document.createElement('ul');
        recipteIngredients.classList.add('recipte__ingredients');

        for (var k = 0; k < ingsArr.length; k++) {
            var recipteIng = document.createElement('li');
            recipteIng.classList.add('recipte__ing');
            var ingRole = ingsArr[k].getAttribute('role');
            var ing = ingsArr[k].innerHTML;
            recipteIng.innerHTML = ingRole + ing;
            recipteIngredients.appendChild(recipteIng);
        }

        var recipteInfo = document.createElement('p');
        recipteInfo.classList.add('recipte__info');
        var info = recipteArr[i].getElementsByTagName('cooking')[0].innerHTML;
        recipteInfo.innerHTML = info;

        recipteContainer.appendChild(recipteName);
        recipteContainer.appendChild(recipteIngredientsHeader);
        recipteContainer.appendChild(recipteIngredients);
        recipteContainer.appendChild(recipteInfo);
        recipteElem.appendChild(recipteContainer);
    }
};

xhr.onerror = function() {
    console.log('Error! ' + this.status + ':' + this.statusText);
};

xhr.send();
}
 var xmlpath = 'https://nighthat.github.io/lab-4/xml/recipte.xml';
 var xmldiv = 'recipte';
 ratesRequest(xmlpath, xmldiv);
