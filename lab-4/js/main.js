'use strict';

var filePath = './xml/recipte.xml';
var XHRequest = 'onload' in new XMLHttpRequest() ? XMLHttpRequest : XDomainRequest;
var xhr = new XHRequest();

xhr.open('GET', filePath, true);

xhr.onload = function() {
    var responseDoc = this.responseXML;
    var rootElem = document.getElementById('root');
    var recipteArr = responseDoc.getElementsByTagName('recipte');
    for (var i = 0; i < reciptesArr.length; i++) {
        var bandContainer = document.createElement('div');
        recipteContainer.classList.add('recipte');

        var recipteName = document.createElement('h3');
        recipteName.classList.add('recipte__header');
        var name = recipteArr[i].getAttribute('name');
        recipteName.innerHTML = name

        var IngArr = recipteArr[i].getElementsByTagName('ing');

        var recipteIngredientsHeader = document.createElement('h5');
        recipteIngredientsHeader.classList.add('Ingredients__header');
        recipteIngredientsHeader.innerHTML = 'Ингридиенты';

        var recipteIngList = document.createElement('ul');
        recipteIngredients.classList.add('recipte__ingredients');

        for (var k = 0; k < ingsArr.length; k++) {
            var recipteIng = document.createElement('li');
            recipteIng.classList.add('recipte__ing');
            var ingRole = ingsArr[k].getAttribute('role');
            var ing = ingsArr[k].innerHTML;
            recipteIng.innerHTML = ingRole + ing;
            recipteIngList.appendChild(recipteIng);
        }

        var recipteInfo = document.createElement('p');
        recipteInfo.classList.add('recipte__info');
        var info = recipteArr[i].getElementsByTagName('cooking')[0].innerHTML;
        recipteInfo.innerHTML = info;

        recipteContainer.appendChild(recipteName);
        recipteContainer.appendChild(recipteIngredientsHeader);
        recipteContainer.appendChild(recipteIngredients);
        recipteContainer.appendChild(recipteInfo);
        rootElem.appendChild(recipteContainer);
    }
};

xhr.onerror = function() {
    console.log('Error! ' + this.status + ':' + this.statusText);
};

xhr.send();
