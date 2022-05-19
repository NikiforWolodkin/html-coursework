let htmlObj, xmlDoc, xmlhttp;
        
if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
}
else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

xmlhttp.open("GET", "data.xml", false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;

htmlObj = "";
for (let i = 0; i < xmlDoc.getElementsByTagName("catalogue")[0].children.length; i++) { // построение объекта по шаблону из catalogue.html
    htmlObj = htmlObj + '<div class="product"><a href="products/' + xmlDoc.getElementsByTagName("link")[i].childNodes[0].nodeValue + '">' +
    '<img src="images/' + xmlDoc.getElementsByTagName("image")[i].childNodes[0].nodeValue + '">' +
    '<div class="product-name">' + xmlDoc.getElementsByTagName("name")[i].childNodes[0].nodeValue + '</div>' +
    '<div class="product-price">От ' + xmlDoc.getElementsByTagName("price")[i].childNodes[0].nodeValue + ' BYN | ' +
    xmlDoc.getElementsByTagName("state")[i].childNodes[0].nodeValue + '</div>' + '</a>' +
    '</div>';
}

document.getElementById("catalogue").innerHTML = htmlObj;