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
for (let i = 0; i < xmlDoc.getElementsByTagName("catalogue")[0].children.length; i++) { // построение объекта по шаблону из index.html
	htmlObj = htmlObj + '<div class="swiper-slide product-slide"><div class="product" id="product' + (i + 1) + '">' +
	'<div class="product-image"><img src="images/' + xmlDoc.getElementsByTagName("promoImage")[i].childNodes[0].nodeValue + '"></div>' +
	'<div class="product-description">' +
	'<div>' + xmlDoc.getElementsByTagName("year")[i].childNodes[0].nodeValue + ' | ' + 
	xmlDoc.getElementsByTagName("state")[i].childNodes[0].nodeValue + '</div>' +
	'<div class="product-name">' + xmlDoc.getElementsByTagName("name")[i].childNodes[0].nodeValue + '</div>' +
	'<div class="product-description-text">' + xmlDoc.getElementsByTagName("promoText")[i].childNodes[0].nodeValue + '</div>' +
	'<div class="product-price">От ' + xmlDoc.getElementsByTagName("price")[i].childNodes[0].nodeValue + ' BYN</div>' +
	'<a href="products/' + xmlDoc.getElementsByTagName("link")[i].childNodes[0].nodeValue + '"class="product-link">Узнать больше</a>' + '</div>' +
	'</div></div>'
}

document.getElementById("swiperWrapper").innerHTML = htmlObj;