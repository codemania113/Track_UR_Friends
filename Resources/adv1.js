var url = "http://www.visitindia.com/servlet/HTMLAdv?hTCategory=SpecialDeals&randomNum="+Math.random()*5;
 var adText = "";var adLink = "";
 var client = Ti.Network.createHTTPClient({
     // function called when the response data is available
     onload : function(e) {
       
         var xml = Ti.XML.parseString(this.responseText);
		var adsList = xml.documentElement.getElementsByTagName("HTInfo");
		
		
		 adText = xml.getElementsByTagName("HTInfo").item(0).getAttribute("HTShortName");
  		 adLink = xml.getElementsByTagName("HTInfo").item(0).getAttribute("HTWebsite");
  		 advLabel.text = adText;
  		
     },
     // function called when an error occurs, including a timeout
     onerror : function(e) {
                // alert('error');
     },
     timeout : 5000  // in milliseconds
 });
 // Prepare the connection.
 client.open("GET", url);
 // Send the request.
 client.send(); 
 




