/*
Documentation and source code modified and adapted from:
    W3schools: https://www.w3schools.com/xml/xpath_examples.asp tutorial
    Mozilla Developer Network (MDN): https://developer.mozilla.org/en-US/docs/Web/XPath
*/

var xpathPhrase1 = "/country[@name='Austria']/name"; /* Insert XPath expression to display the name of the country - Austria. */
var xpathPhrase2 = "/country[@name='Austria']/province/city/name"; /* Insert XPath expression to display capital cities of all provinces in Austria (Klagenfurt, Bregenz, Vienna, ...) */
var xpathPhrase3 = "/country[@name='Austria']/province/@name | /country[@name='Austria']/province/@population"; /* Insert XPath expression to display all provinces in Austria (Burgenland, Carinthia, Vorarlberg, ...) and their population. */
var xpathPhrase4 = "/country/ethnicgroups | /country/ethnicgroups/@percentage"; /* Insert XPath expression to display ethnic groups and their percentages. */
var xpathPhrase5 = "/country/border[@length > 400]/@length"; /* Insert XPath expression to display border lengths where the length is more than 400. */

var req = new XMLHttpRequest();
req.open("GET", "austria.xml");
req.send();
req.onreadystatechange = function() {

    
        showResult(req.responseXML,xpathPhrase1,1);
        showResult(req.responseXML,xpathPhrase2,2);
        showResult(req.responseXML,xpathPhrase3,3);
        showResult(req.responseXML,xpathPhrase4,4);
        showResult(req.responseXML,xpathPhrase5,5);
    
};

function showResult(xmlDoc,xpathPhr,idNumber) {
  var textToShow = "";
  var path = xpathPhr;
  var nodes = xmlDoc.evaluate(path,xmlDoc,null,XPathResult.ANY_TYPE,null);
  var result = nodes.iterateNext();

  while (result) {
    textToShow += result.textContent + "<br>";
    result = nodes.iterateNext();
  }

  document.getElementById("worldData" + idNumber).innerHTML = textToShow;
}
