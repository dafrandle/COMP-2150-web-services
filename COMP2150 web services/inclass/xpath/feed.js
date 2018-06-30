/* XML and XPath tutorial */

/*
Documentation and source code modified and adapted from:
    W3schools: https://www.w3schools.com/xml/xpath_examples.asp tutorial
    Mozilla Developer Network (MDN): https://developer.mozilla.org/en-US/docs/Web/XPath
*/

/*
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
TASK: Create new XMLHttpRequest by using XMLHttpRequest constructor.
INFO: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/
var req = new XMLHttpRequest();
req.open("GET","http://w1.weather.gov/xml/current_obs/KFRM.xml");
req.send();

/*
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
TASK: Execute a callback function when the readyState attribute changes.
That means, when there was a response to our XML HTTP request.
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/
req.onreadystatechange = function(){
    /*
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    TASK: Create an if() statement that tests for the type of response for our request.
    If the request was successful, call showResult() function.
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    */

    if(this.readyState == 4 && this.status == 200){
        showResult(req.responseXML);
    }

}
/* TASK: Create showResult() function to show the result of this request */

function showResult(xmlDoc){
  /* TASK: Create a variable that shows the result of the function */

    var textToShow = "";

  /* TASK: Create a variable that stores the XPath path expression used to retrieve data */

    var path = "/current_observation/*";

  /*
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  TASK: Use evaluate() XPath function to get the node you want and store it in the "nodes" variable
  INFO: https://developer.mozilla.org/en-US/docs/Web/API/Document/evaluate
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  */

    var nodes = xmlDoc.evaluate(path, xmlDoc, null, XPathResult.ANY_TYPE, null);

  /* TASK: Use iterateNext() function to return the nodes from the specified path
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  INFO: (MDN): "The XPathResult object returned is a node-set of matched nodes which will behave as an iterator,
  allowing us to access the individual nodes contained by using the iterateNext() method of the XPathResult.
  Once we have iterated over all of the individual matched nodes, iterateNext() will return null."
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  */

    var result = nodes.iterateNext();

  /* TASK: Loop through the nodes to return them all */

    while (result) {
    /* TASK: Retrieve the text from the current node and assign to the textToShow variable */
        textToShow += "<tr><td>" + result.textContent + "</td></tr>";
        result = nodes.iterateNext();
    }

  /* TASK: Insert the text to show into an HTML element with an id="weatherData" */

    document.getElementById("weatherData").innerHTML = textToShow;

}
