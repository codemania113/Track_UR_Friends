var MapModule = require('ti.map');
 Ti.include('adv1.js');
 getUserData();
var win1 = Ti.UI.createWindow({
    backgroundColor:"white",
    top: '8%',
    left: 140,
    width: '100%',
    height: '84%',
    exitOnClose:true
});

//http://km.support.apple.com/library/APPLE/APPLECARE_ALLGEOS/HT1549/en_US/HT1549-MtLion-FileSharing-002-en.png
var longi =75.75;var lati = 22.860;
/*Titanium.Geolocation.DistanceFilter = 10;
Titanium.Geolocation.getCurrentPosition(function(e){
	if(e.error)
	{
		return;
	}
	longi = e.coords.longitude;
	lati = e.coords.latitude;
	
	
});*/

var bridge = MapModule.createAnnotation({
    latitude: lati,
    longitude: longi,
    pincolor: MapModule.ANNOTATION_ROSE,
    // Even though we are creating a button, it does not respond to Button events or animates.
    // Use the Map View's click event and monitor the clicksource property for 'leftPane'.
    leftView: Ti.UI.createButton({title: 'Detail'}),
    // For eventing, use the Map View's click event
    // and monitor the clicksource property for 'rightPane'.
    rightButton: '/android/appicon.png',    
    title: 'hello abc',
    subtitle: 'Have a good day'
});

var map1 = MapModule.createView({
    userLocationButton: true,
    regionFit:true,
    mapType: MapModule.NORMAL_TYPE,
    animate: true,
    region: {latitude: lati, longitude: longi, latitudeDelta: 15, longitudeDelta: 15 },
    height: '100%',
    top: 0,
    left: 0,
   // annotations: [bridge],
    width: '100%'
});
/*map1.addEventListener("regionchanged",function(e){
	map1.region{latitude:friendscontacts[0], longitude:friendscontacts[0], latitudeDelta=2,longitudeDelta=2};
})*/
var view01 = Ti.UI.createView({
	top:0,
	left:0,
	width:"100%",
	height:"100%",
	backgroundColor:"darkgray"
});

view01.add(map1);


var button02 = Titanium.UI.createButton({
	title:"<<",
	//font:{fontSize:Titanium.Platform.displayCaps.platformWidth*25/100 },
	backgroundColor:"#008B8B",
	top:0,
	left:0,
	color : '#ffffff',
	font:{fontSize:'20%',fontWeight:'bold'},
	height:'8.6%',
	width:140,
	id:"Custom Button1"
})

var button01 = Titanium.UI.createButton({
	title:">>",
	backgroundColor:"#008B8B",
	top:0,
	left:0,
	color : '#ffffff',
	font:{fontSize:'20%',fontWeight:'bold'},
	height: '100%',
	width:140,
	id:"Custom Button2"
});

var test=0;

var win4 = Ti.UI.createWindow({
    top:60,
    right: 0,
    width:100,
    height:0,
    backgroundColor:"darkgray" 
});

//Ti.App.myGlobalVar=imageContainer;
var imageContainer = Ti.UI.createView({
    top :'0%',
    right:'2%',
    height : '100%',
    width : '40%',
    bottom: '2%'
    
    //backgroundColor : 'black'
});

 
var image03 = Titanium.UI.createImageView({
	image: 'images/Blankprofile.jpg',
	url:"",
	right:'1%',
	top:'1%',
	height:'95%',
	//bottom: '1%',
	width:'40%'
});

imageContainer.add(image03);
	var fg=0;
image03.addEventListener("click",function(e){

	
	var modal = require('modalWindow').modalWin;
	var popupWin = new modal();
	popupWin.open();
;	/*if(fg==0)
	{
		fg=1;
		var anim1 = Ti.UI.createAnimation({
        right:0,
        top:0,
        width:100,
        height:240,
        duration: 1000
    });
    //win1.animate(anim1);
    win4.animate(anim1);
		
	}
	else
	{
		fg=0;
		 var anim1 = Ti.UI.createAnimation({
        right:0,
        top:0,
        width:100,
        height:0,
        duration: 1000
    });
    //win1.animate(anim1);
    win4.animate(anim1);
		
		
	}*/
})

var image04 = Ti.App.Properties.getString("a");
//imageContainer.add(image04);

var label33 = Titanium.UI.createLabel({
	text:"",
	textAlign:"center",
	//backgroundColor:"maroon",
	left:'30%',
	color : '#ffffff',
	font:{fontSize:'20%',fontWeight:'bold'},
	top:0,
	height:'100%',
	width:'40%'
});
var h; 

var win2 = Ti.UI.createWindow({
    top:0,
    left: 0,
    width:140,
    height:"92%",
    backgroundColor:"darkgray",
    exitOnClose:true 
});



var flag=0;
function create()
{
	flag=1;
	
}
var singleValue = ['fullName'];
var multiValue = ['phone'];
var people = Ti.Contacts.getAllPeople();

var contact = [];
var name = [];
 var j=0;
for (var i=0, ilen=people.length;i<ilen; i++){
  
  var person = people[i];
  if(JSON.stringify(person[multiValue[0]])=="{}")
  {
  	i++;
  }
  else
  {
	name[j] = person['fullname'];
	contact[j] = person['phone'].mobile;
	j++;
 }
  
}

var json;
var resData = "";
var j=0;
var i=0;
var row1;
var friendscontacts = [];
var friends = [];
var friendslatitude = [];
var friendslongitude = [];
var friendpropic = [];
var group = [];
var count1=0;
var count0=0;
var mainflag =1;
var MyData = contact.toString();//alert(MyData);
var url = "http://www.visitindia.com/PeopleTracker/CheckContacts.php?mobilenumbers="+MyData;
	var client = Ti.Network.createHTTPClient({
     // function called when the response data is available
     onload : function(e) {
     	//alert(this.responseText);
     	resData = this.responseText;
     	 json = JSON.parse(this.responseText);
     	 //alert(json.length);
     	 for (j=0;j<json.length;j++)
		{
			row1 = json[j];
	 		friends[i] = row1.FullName;
			friendscontacts[i] = row1.mobile;
			friendslatitude[i] = row1.Latitude;
			friendslongitude[i] = row1.Longitude;
			friendpropic[i] = row1.ProfilePic;
			if((row1.Longitude)>15)
			{
				group[i]=1;
				count1++;
			}
			else
			{
				group[i]=0;
				count0++;
			}
		 	i++;
		}
     	if((count0)>(count1))
     	{
     		mainflag = 0;
     	}
     	else
     	{
     		mainflag =1;
     	}
		create();
	 },
     
     // function called when an error occurs, including a timeout
     onerror : function(e) {
         Ti.API.debug(e.error);
        // alert('error');
     },
     timeout : 5000  // in milliseconds
 	});
 	// Prepare the connection.
 	client.open("GET", url);
 	// Send the request.
 	client.send();
 	

 
var win3 = Ti.UI.createWindow({
    top:0,
    width:"100%",
    height:'8%',
    backgroundColor:"#008B8B",
    exitOnClose:true
});



var button03 = Titanium.UI.createButton({
	title:"take photo",
	backgroundColor:"#1874CD",
	top:65,
	right:5,
	height:50,
	width:90,
	id:"Custom Button"
});

var button04 = Titanium.UI.createButton({
	title:"upload photo",
	backgroundColor:"#1874CD",
	top:125,
	right:5,
	height:50,
	width:90,
	id:"Custom Button"
});

var button05 = Titanium.UI.createButton({
	title:"remove image",
	backgroundColor:"#1874CD",
	top:185,
	right:5,
	height:50,
	width:90,
	id:"Custom Button"
});

/*win1.addEventListener('swipe', function(){
   
    win1.animate(anim1);
    win2.animate(anim2);
});*/

button03.addEventListener("click",function(e){
	Titanium.Media.showCamera({
    success:function(event)
    {
        var image = event.media;
        var f = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,'camera_photo.png');
        f.write(image);
        win4.backgroundImage = f.nativePath;
 
        var data_to_send = { 
            "file": f.read(), 
            "name": 'camera_photo.png' 
        };
        xhr = Titanium.Network.createHTTPClient();
        xhr.open("POST","http://www.visitindia.com/PeopleTracker/UploadPic.php");
       // xhr.setRequestHeader("enctype", "multipart/form-data");
        //xhr.setRequestHeader("Content-Type", "image/png");
        xhr.setRequestHeader("contentType", "multipart/form-data");
        
        xhr.send(data_to_send); 
        xhr.onload = function() {
            textfield.value = this.responseText;
            Ti.API.info(this.responseText); 
        };
 
    },
    cancel:function()
    {
 
    },
    error:function(error)
    {
        // create alert
        var a = Titanium.UI.createAlertDialog({title:'Camera'});
        // set message
        if (error.code == Titanium.Media.NO_CAMERA)
        {
            a.setMessage('Device does not have video recording capabilities');
        }
        else
        {
            a.setMessage('Unexpected error: ' + error.code);
        }
        // show alert
        a.show();
    },
});
});

button04.addEventListener("click",function(e){
	Titanium.Media.openPhotoGallery({
	success:function(event) {
		/* success callback fired after media retrieved from gallery */
		var xhr = Titanium.Network.createHTTPClient();
		xhr.onload = function(e) {
			Ti.UI.createAlertDialog({
			      title:'Success',
			      message:'status code ' + this.status
		    }).show();
		};
		xhr.open('POST','https://myserver.com/api/uploadAndPost.do');
		xhr.send({
		    theImage:event.media,  /* event.media holds blob from gallery */
		    username:'foo',
		    password:'bar'
		  });
	}
});
fg=1;
});


 
button02.addEventListener("click", function(){
   
    var anim2 = Ti.UI.createAnimation({
        left:0,
        width:0,
        height:"92%",
        duration: 500
    });
   var anim1 = Ti.UI.createAnimation({
    	top:'8%',
    	left:0,
    	height:"84%",
    	width:"100%",
    	 duration: 500
    });
   
   	win1.animate(anim1);
    win2.animate(anim2);
    
});

button01.addEventListener("click", function(){
   
    var anim2 = Ti.UI.createAnimation({
        left:0,
        top:0,
        width:140,
        height:"92%",
        duration: 500
    });
    var anim1 = Ti.UI.createAnimation({
    	top:'8%',
    	left:140,
    	height:"84%",
    	width:"100%",
    duration: 500
    });
    
    win1.animate(anim1);
    win2.animate(anim2);
});

var label01 = Titanium.UI.createLabel({
	text:"View My Friends",
	textAlign:"center",
	top:5,
	left:10,
	width:120,
	height:90,
	backgroundColor:"darkgray"
});

var label02 = Titanium.UI.createLabel({
	text:"View All Friends",
	textAlign:"center",
	top:5,
	left:10,
	width:120,
	height:90,
	backgroundColor:"darkgray"
});

var label03 = Titanium.UI.createLabel({
	text:"My Location",
	textAlign:"center",
	top:5,
	left:10,
	width:120,
	height:90,
	backgroundColor:"darkgray"
});

var label04 = Titanium.UI.createLabel({
	text:"Find Path to a Place",
	textAlign:"center",
	top:5,
	left:10,
	width:120,
	height:90,
	backgroundColor:"darkgray"
});


var label05 = Titanium.UI.createLabel({
	text:"Find Path to a Friend",
	textAlign:"center",
	top:5,
	left:10,
	width:120,
	height:90,
	backgroundColor:"darkgray"
});

var label06 = Titanium.UI.createLabel({
	text:"Invite Friends",
	textAlign:"center",
	top:5,
	left:10,
	width:120,
	height:90,
	backgroundColor:"darkgray"
});

var label07 = Titanium.UI.createLabel({
	text:"Log Out",
	textAlign:"center",
	top:5,
	left:10,
	width:120,
	height:90,
	backgroundColor:"darkgray"
});

var leftView = Titanium.UI.createView({
	backgroundColor: 'white',
    width:'100', height: '100',
    top: 0, left: 0
});
var viewImage = Titanium.UI.createImageView({
	image: 'images/Blankprofile.jpg',
	url:"",
	right:'1%',
	top:'1%',
	height:'50',
	//bottom: '1%',
	width:'50'
});
leftView.add(viewImage);
label01.addEventListener("click",function(e){
	var testLen = JSON.parse(resData);
	//alert(testLen);
	if(testLen.length==0)
	{
		alert("Your friends not registered with us !!!");
	}else
	{
		var transWin = Ti.UI.createWindow({
		url:"FriendList.js"		
		});
		if(flag==1)
		{		
			Ti.App.Properties.setString("value",resData);
			transWin.open();
		}
	}
	
});
var mview;
var thenum;
//var boston = {latitude:42.334537,longitude:-71.170101,latitudeDelta:10, longitudeDelta:10};

label02.addEventListener("click",function(e){
var testLen = JSON.parse(resData);
	if(testLen.length==0)
	{
		alert('Your friends not registered with us !!!');
	}else{
	test=1;
var X = 0;
var Y = 0;
var Z = 0;
var x,y,z;
var la,lo;
var total = 0;
for(i=0;i<friends.length;i++)
{
	if(group[i]==mainflag)
	{
	la = friendslatitude[i] * Math.PI / 180;
	lo = friendslongitude[i] * Math.PI / 180;
	x = Math.cos(la)*Math.cos(lo);
	y = Math.cos(la)*Math.sin(lo);
	z = Math.sin(la);
	X=X+x;
	Y=Y+y;
	Z=Z+z;
	total++;
	}

}
X=X/total;
Y=Y/total;
Z=Z/total;

var Lon = Math.atan2(Y, X);
var Hyp = Math.sqrt(X * X + Y * Y);
var Lat = Math.atan2(Z, Hyp);

var Lat = Lat * 180 / Math.PI;
var Lon = Lon * 180 / Math.PI;
	
	if(flag==1)
	{
		map1.removeAllAnnotations();
			map1.region={latitude: Lat, longitude: Lon, latitudeDelta: 30, longitudeDelta: 30 };
		
		/*map1.regionFit=true;
		map1.userLocation=true;
		map1.region.latitude=friendslatitude[0];
		map1.region.longitude=friendslongitude[0];
		map1.region.latitudeDelta=.1;
		map1.region.longitudeDelta=.1;
		map1.addRegionFit(true);
		map1.setLocation(friendslatitude[0],friendslongitude[0]);*/
		for (i=0; i < friends.length; i++) 
    		{
            thenum = friendscontacts[i];
            mview = MapModule.createAnnotation(
            {
                latitude:friendslatitude[i],
                longitude:friendslongitude[i],
                title:friends[i],
                //subtitle:'Mountain View, CA',
                pincolor: MapModule.ANNOTATION_VIOLET ,
                leftButton:  friendpropic[i],  
                rightButton: 'images/call.png',
				//rightButton:  'images/call.png'  ,
                //animate:true,
                myid:thenum // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS
               
                
            });
            map1.addAnnotation(mview);
            map1.addEventListener('click',function(e) {
			if (e.clicksource == 'rightPane') {
			//alert("hiiii");
			Ti.Platform.openURL("tel:"+e.annotation.myid);
    			}
			});
			
			
		}
		
	}
	
	}
	
});


label03.addEventListener("click",function(e){
	test=0;
	getMyLocation();
	/*if(flag==1)
	{
		map1.removeAllAnnotations();
		
		map1.region={latitude: lati, longitude: longi, latitudeDelta: 2, longitudeDelta: 2 };
		mview = MapModule.createAnnotation(
        {
                latitude: lati,
                longitude:longi,
                //title:friends[i],
                //subtitle:'Mountain View, CA',
                pincolor: MapModule.ANNOTATION_ROSE ,
                leftView: Ti.UI.createButton({title: 'Detail'}),
    			// For eventing, use the Map View's click event
    			// and monitor the clicksource property for 'rightPane'.
    			rightButton: '/images/appicon.png',    
    			title: 'hello abc',
   			 subtitle: 'Have a good day'
         	});
            map1.addAnnotation(mview);
           
		}*/
	
});

label04.addEventListener("click",function(e){
	var pathplaceWin = Ti.UI.createWindow({
		url:"PathToPlace.js",
		
		
	});
	if(flag==1)
	{
		pathplaceWin.open();
	}
	
});
label05.addEventListener("click",function(e){
	var mylatlong = lati+","+longi;
	Ti.App.Properties.setString("myLatLong",mylatlong);
	var pathtofrndWin = Ti.UI.createWindow({
		url:"PathToFriend.js"		
	});
	if(flag==1)
	{
		
     Ti.App.Properties.setString("value",resData);
	 pathtofrndWin.open();
	}
	/*if(flag==1)
	{
		if(test==0)
		{
			for (i=0; i < friends.length; i++) 
    			{
            		mview = MapModule.createAnnotation(
            		{
                latitude:friendslatitude[i],
                longitude:friendslongitude[i],
                //title:friends[i],
                //subtitle:'Mountain View, CA',
                pincolor: MapModule.ANNOTATION_VIOLET ,
                leftButton:  'images/Blankprofile.jpg',  
    				rightButton:  " images/path.jpg"  ,
                //animate:true,
                myid:i // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECT 
            		});
            
            		map1.addAnnotation(mview);
            		map1.addEventListener('click',function(e) {
				if (e.clicksource == 'rightPane') {
				
				}
				});
			}
           
		}
		else if(test==1)
		{
			map1.removeAllAnnotations();
			for (i=0; i < friends.length; i++) 
    			{
            		mview = MapModule.createAnnotation(
            		{
                latitude:friendslatitude[i],
                longitude:friendslongitude[i],
                //title:friends[i],
                //subtitle:'Mountain View, CA',
                pincolor: MapModule.ANNOTATION_VIOLET ,
                leftButton:  'images/Blankprofile.jpg',  
    				rightButton:  "images/path.jpg"  ,
                //animate:true,
                myid:i // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECT 
            		});
            
            		map1.addAnnotation(mview);
            		map1.addEventListener('click',function(e) {
				if (e.clicksource == 'leftPane') {
				alert(friendslatitude[i]);
				alert(friendslongitude[i]);
    				}
				});
            		
			}
			mview = MapModule.createAnnotation(
        		{
                latitude: lati,
                longitude:longi,
                //title:friends[i],
                //subtitle:'Mountain View, CA',
                pincolor: MapModule.ANNOTATION_ROSE ,
                leftButton:  'images/Blankprofile.jpg',  
    				rightButton:  'find path'  ,
                //animate:true,
                //myid:i // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS
         	});
            map1.addAnnotation(mview);
           
		}
	}	*/
});

label06.addEventListener("click",function(e){
	/*var modal = require('invite').modalWin;
	var popupWin = new modal();
	popupWin.open();*/
	alert('Coming Soon');
});

label07.addEventListener("click",function(e){
	/*var welcomeWin = Ti.UI.createWindow({
		url: "app.js"
	});
	welcomeWin.open();*/
	Titanium.App.Properties.removeProperty("MobileNumber");
	///Ti.Android.stopService(intent);
	var backLogin = Ti.UI.createWindow({
				//backgroundColor: '#000000',
				url: 'LoginWindow.js'		
				});	
	    		backLogin.open();
	
})

 var row01= Ti.UI.createView({
    backgroundColor: 'darkgray',
    borderColor: '#bbb',
    borderWidth: 1,
    width:140, height: 100,
    top: 0, left: 0
  });

 var row02= Ti.UI.createView({
    backgroundColor: 'darkgray',
    borderColor: '#bbb',
    borderWidth: 1,
    width:140, height: 100,
    top: 0, left: 0
  });

 var row03= Ti.UI.createView({
    backgroundColor: 'darkgray',
    borderColor: '#bbb',
    borderWidth: 1,
    width:140, height: 100,
    top: 0, left: 0
  });

 var row04= Ti.UI.createView({
    backgroundColor: 'darkgray',
    borderColor: '#bbb',
    borderWidth: 1,
    width:140, height: 100,
    top: 0, left: 0
  });

 var row05= Ti.UI.createView({
    backgroundColor: 'darkgray',
    borderColor: '#bbb',
    borderWidth: 1,
    width:140, height: 100,
    top: 0, left: 0
  });
  
 var row06= Ti.UI.createView({
    backgroundColor: 'darkgray',
    borderColor: '#bbb',
    borderWidth: 1,
    width:140, height: 100,
    top: 0, left: 0
  });

 var row07= Ti.UI.createView({
    backgroundColor: 'darkgray',
    borderColor: '#bbb',
    borderWidth: 1,
    width:140, height: 100,
    top: 0, left: 0
  }); 
  
row01.add(label01);
row02.add(label02);
row03.add(label03);
row04.add(label04);
row05.add(label05);
row06.add(label06);
row07.add(label07);
     
var scrollView = Ti.UI.createScrollView({
	top:'8.6%',width:140,
	height: '86%',
    contentHeight: 'auto',
  layout: 'vertical'
});

scrollView.add(row01);
scrollView.add(row02);
scrollView.add(row03);
scrollView.add(row04);
scrollView.add(row05);
scrollView.add(row06);
scrollView.add(row07);


var advWin5 = Ti.UI.createWindow({
    backgroundColor:"#008B8B",
    left: 0,
    width: '100%',
    height: '8%',
    bottom: '0%',
    exitOnClose:true
});
var advLabel = Ti.UI.createLabel({
	text : '',
	//font:{fontSize:'100%',fontWeight:'bold'},
	color : '#ffffff',
	height:'100%',
	width : '100%',
	textAlign : 'center',
	top:'10%'
});
advWin5.add(advLabel);
advLabel.addEventListener('click', function(e) {	
	Ti.Platform.openURL(adLink);
	});

win1.add(view01);
win3.add(button01);
win3.add(imageContainer);
win3.add(label33);


win2.add(scrollView);
win2.add(button02);
//win4.add(button03);
//win4.add(button04);
//win4.add(button05);


//win4.open();
win3.open();
advWin5.open();
win1.open();
win2.open();

Ti.App.addEventListener('updateImage',function(data){
	//alert(data.imageData);
	
	image03.image = data.imageData;
})
var MyUserName = "";
var UserProPic = "";
function getUserData()
{//alert('getDataCall');
	var mnumber = Titanium.App.Properties.getString("MobileNumber");

if (mnumber != null || mnumber != '') {
	//alert('User Already Logedin '); 
	

	var url = "http://www.visitindia.com/PeopleTracker/GetUserData.php?mobilenumber="+mnumber;
 var userData = "";var row="";
 var client = Ti.Network.createHTTPClient({
     // function called when the response data is available
     onload : function(e) {
       
        userData = JSON.parse(this.responseText);
        row = userData[0];
        var fullname= row.FullName;
        var pic = row.ProfilePic;
        
        MyUserName = fullname;
        UserProPic = pic;
        
        Titanium.App.Properties.setString("UserName",fullname);
        label33.text = 'Welcome '+fullname;
  		image03.image = pic;
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
 }else
{
	var newWin = Ti.UI.createWindow({
				backgroundColor: '#000000',
				title: 'Test 000',
				url: 'app.js'		
				});	
	    		newWin.open();
}
}
var intent;
function StartService()
{//alert('in StartService');
	var SECS = 10;
var URL = 'gpsservice.js';
if (Ti.Android.isServiceRunning(Ti.Android.createServiceIntent({url: URL}))) {
		//addMsg('Service IS running');
} else {
		//alert('in else');
		//addMsg('Service is NOT running');
		 intent = Ti.Android.createServiceIntent({
		url: URL
	});
	intent.putExtra('interval', SECS * 1000 * 30);
	//intent.putExtra('message', 'Hi from started service');
	Ti.Android.startService(intent);
	
	//alert('service start');
	
	/*var intent2 = Ti.Android.createServiceIntent({
		url: URL
	});
	intent2.putExtra('interval', SECS * 1000);
	//intent2.putExtra('message', 'Hi from bound service');
	var service = Ti.Android.createService(intent2);
	service.addEventListener('start', function(e) {
	//addMsg('Starting... Instance #' + e.source.serviceInstanceId + ' (bound)');
	});
	service.addEventListener('pause',function(e) {
		//addMsg('Bound instance #' + e.source.serviceInstanceId + ' paused (iteration #' + e.iteration + ')');
		if (e.iteration == 3) {
			//addMsg('Bound instance #' + e.source.serviceInstanceId + ' has had 3 iterations... going to stop it now.');
			e.source.stop();
		}
	});
	service.addEventListener('resume',function(e) {
		//addMsg('Bound instance #' + e.source.serviceInstanceId + ' resumed (iteration #' + e.iteration + ')');
	});
	service.start();*/
	}
}
StartService();
Ti.App.addEventListener('gps_service_fire', function(data) {
	//addMsg('Service says: "' + data.message + '"');
});
getMyLocation();
function getMyLocation()
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
        alert("Unable to get your location.");
        Ti.API.debug(JSON.stringify(e));
        Ti.API.debug(e);
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
     
    //alert(JSON.stringify(d));
    
    map1.removeAllAnnotations();
		
		map1.region={latitude: UserLatitude, longitude: UserLongitude, latitudeDelta: 2, longitudeDelta: 2 };
		mview = MapModule.createAnnotation(
        {
                latitude: UserLatitude,
                longitude: UserLongitude,
                //title:friends[i],,
                //subtitle:'Mountain View, CA',
                pincolor: MapModule.ANNOTATION_ROSE ,
                //rightButton: '/images/appicon.png',    
    				title:MyUserName,
                leftButton:  UserProPic,  
                
         	});
            map1.addAnnotation(mview);
          
    updateUserGPS(UserLatitude,UserLongitude);

});

Titanium.Geolocation.getCurrentPosition( updatePosition );
Titanium.Geolocation.addEventListener( 'location', updatePosition );
}
function updateUserGPS(lati,longi)
{
	var userno = Titanium.App.Properties.getString("MobileNumber");
var webUrl = "http://www.visitindia.com/PeopleTracker/UpdateGps.php?mno="+userno+"&longi="+longi+"&lati="+lati;
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