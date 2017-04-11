var service = Titanium.Android.currentService;
var intent = service.intent;
var mobilenumber = Titanium.App.Properties.getString("MobileNumber");
if(mobilenumber!=null && mobilenumber!="")
{
Ti.App.GeoApp = {};
Ti.Geolocation.preferredProvider = Titanium.Geolocation.PROVIDER_GPS;
Ti.Geolocation.purpose = "testing";
Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
Titanium.Geolocation.distanceFilter = 10;

if( Titanium.Geolocation.locationServicesEnabled === false ) {
    Ti.API.debug('Your device has GPS turned off. Please turn it on.');
}

function updatePosition(e) {

    if( ! e.success || e.error ) {
        //alert("Unable to get your location.");
        //Ti.API.debug(JSON.stringify(e));
       // Ti.API.debug(e);
        return;
    }

    Ti.App.fireEvent("app:got.location", {
        "coords" : e.coords
    });
};

Ti.App.addEventListener("app:got.location", function(d) {
    Ti.App.GeoApp.f_lng = d.longitude;
    Ti.App.GeoApp.f_lat = d.latitude;
    Ti.API.debug(JSON.stringify(d));

    // you need to remove this listener, see the blog post mentioned above
    Ti.Geolocation.removeEventListener('location', updatePosition);
    ///alert(d.coords.longitude+"-----"+d.coords.latitude);
    var UserLatitude = d.coords.latitude;
    var UserLongitude = d.coords.longitude;
    updateGPS(UserLatitude,UserLongitude);
    //alert(JSON.stringify(d));

});




//
// create base UI tab and root window
//


Titanium.Geolocation.getCurrentPosition( updatePosition );
Titanium.Geolocation.addEventListener( 'location', updatePosition );
}
function updateGPS(lati,longi)
{
var webUrl = "http://www.visitindia.com/PeopleTracker/UpdateGps.php?mno="+mobilenumber+"&longi="+longi+"&lati="+lati;
 //alert(webUrl)
 var client = Ti.Network.createHTTPClient({
     // function called when the response data is available
     onload : function(e) {
         //Ti.API.info("Received text: " + this.responseText);
        // alert(this.responseText);
     },
     // function called when an error occurs, including a timeout
     onerror : function(e) {
         Ti.API.debug(e.error);
        // alert('error');
     },
     timeout : 5000  // in milliseconds
 });
 // Prepare the connection.
 client.open("GET", webUrl);
 // Send the request.
 client.send();
}
//var message = intent.getStringExtra("message_to_echo");
//alert("Hello World!  I am a Service.  I have this to say: ");
//Titanium.Geolocation.DistanceFilter = 10;
//var longi = ""; var lati= "";var ifError = "ok"
/*Titanium.Geolocation.getCurrentPosition(function(e){
	if(e.error)
	{
		ifError = "error";
		return;
	}
	else
	{
	longi = e.coords.longitude;
	lati = e.coords.latitude;
	}
	
});*/
/*
Ti.App.GeoApp = {};

Ti.Geolocation.preferredProvider = Titanium.Geolocation.PROVIDER_GPS;
Ti.Geolocation.purpose = "Show User Location";
Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
Titanium.Geolocation.distanceFilter = 10;
if( Titanium.Geolocation.locationServicesEnabled === false ) {
    alert('Your device has GPS turned off. Please turn it on.');
}
function updatePosition(e) {
alert(e.success);
    if(e.error ) {
       alert("Unable to get your location.");
       ifError = "error";
        return;
    }
    if(e.success){alert('success --------------')
    Ti.App.fireEvent("app:got.location", {
        "coords" : e.coords
    });
    }
};

Ti.App.addEventListener("app:got.location", function(d) {
    Ti.App.GeoApp.f_lng = d.longitude;
    Ti.App.GeoApp.f_lat = d.latitude;
    Ti.API.debug('json --->'+JSON.stringify(d));
     longi = d.coords.longitude;
	lati = d.coords.latitude;
    // you need to remove this listener, see the blog post mentioned above
    Ti.Geolocation.removeEventListener('location', updatePosition);
     
	ifError = "ok";
    //alert(JSON.stringify(d));
    if(ifError != "error" && mobilenumber != null && mobilenumber!="")
     {
     	//alert('going to update gps on web');
        updateGPS();
     }
});

if(ifError != "error" && mobilenumber != null && mobilenumber!="")
{
	//updateGPS();
}
else
{
	alert('some error--'+ifError+'--'+mobilenumber);
}

Titanium.Geolocation.getCurrentPosition( updatePosition );
Titanium.Geolocation.addEventListener( 'location', updatePosition );*/
