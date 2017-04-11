var MapModule = require('ti.map');
Ti.include('adv1.js');
var win11 = Ti.UI.createWindow({
    backgroundColor:"white",
    top: '8%',
    left: 0,
    width: '100%',
    height: '84%',
    exitOnClose:true
});//http://km.support.apple.com/library/APPLE/APPLECARE_ALLGEOS/HT1549/en_US/HT1549-MtLion-FileSharing-002-en.png


var longi = Ti.App.Properties.getString("longii");
var lati = Ti.App.Properties.getString("latii");
var name = Ti.App.Properties.getString("namee");
var number = Ti.App.Properties.getString("numberr");
var frndPic = Ti.App.Properties.getString("fpic");
var image03 = Titanium.UI.createImageView({
	image: 'images/Blankprofile.jpg',
	right:0,
	top:0,
	height:20,
	width:20
});


var bridge = MapModule.createAnnotation({
    latitude: lati,
    longitude: longi,
    pincolor: MapModule.ANNOTATION_VIOLET,
    // Even though we are creating a button, it does not respond to Button events or animates.
    // Use the Map View's click event and monitor the clicksource property for 'leftPane'.
    //rightView: Ti.UI.createButton({title: 'Detail'}),
    //title: 'have a good day',
    // For eventing, use the Map View's click event
    // and monitor the clicksource property for 'rightPane'.
    leftButton: frndPic,  
    rightButton:  'images/call.png',  
    title: name
});

var map1 = MapModule.createView({
    userLocation: true,
    mapType: MapModule.NORMAL_TYPE,
    animate: true,
    region: {latitude: lati, longitude: longi, latitudeDelta: 1, longitudeDelta: 1 },
    height: '100%',
    top: 0,
    left: 0,
    annotations: [bridge],
    width: '100%'
});
	var fg=0;
map1.addEventListener('click',function(e) {
	if (e.clicksource == 'rightPane') {
			var thenum = number;
			Ti.Platform.openURL("tel:"+thenum);
    }
});

/*var button01 = Titanium.UI.createButton({
	title:"back",
	backgroundColor:"#1874CD",
	top:0,
	left:0,
	height:60,
	width:140,
	id:"Custom Button"
});*/

var button01 = Titanium.UI.createButton({
	title:"Back",
	backgroundColor:"#1874CD",
	top:0,
	left:0,
	height: '100%',
	width:140,
	id:"Custom Button2"
});

var button01 = Ti.UI.createButton({
	title : '',
	height:'98%',
	backgroundImage:'images/back.png',
	width : '27%',
	left:'2%',
	top : '1%'	
});
button01.addEventListener('click', function() {
	
	 var WinHome = Ti.UI.createWindow({
			url: 'FriendList.js'	
	});
	
	WinHome.open();
});	

 var uname = Titanium.App.Properties.getString("UserName");
/*var label33 = Titanium.UI.createLabel({
	text:"Welcome "+uname,
	textAlign:"center",
	backgroundColor:"gray",
	
	left:200,
	top:0,
	height:60,
	width:120
})*/
var label33 = Titanium.UI.createLabel({
	text:"Welcome "+uname,
	color : '#ffffff',
	font:{fontSize:'30%',fontWeight:'bold'},
	height:'100%',
	//backgroundImage:'images/titalbar_2.png',
	backgroundColor:'#008B8B',
	width : '100%',
	top:'0%',
	//right:'5%',
	textAlign : 'center'
});
/*
var win31 = Ti.UI.createWindow({
    top:0,
    width:"100%",
    height:60,
    backgroundColor:"gray",
    exitOnClose:true
});*/
var win31 = Ti.UI.createWindow({
    top:0,
    width:"100%",
    height:'8%',
    backgroundColor:"#008B8B",
    exitOnClose:true
});
/*
button01.addEventListener("click", function(){
   
   var transWin = Ti.UI.createWindow({
   	url:"FriendList.js"
   });
   transWin.open();
});*/
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
var alertmsg =Titanium.UI.createAlertDialog({ title: 'Exit Application', message: 'Do you want to exit ?', 
buttonNames: ['Yes', 'No'], cancel: 1 });
alertmsg.addEventListener('click', function(e) { 
    //now you can use parameter e to switch/case

   switch (e.index) {
      case 0: var activity = Titanium.Android.currentActivity; activity.finish();
      break;

      
      case 1: 
      break;
      
      default:
      break;

  }
});
win11.addEventListener('android:back', function (e) {
    alertmsg.show();
});	
win11.add(map1);

win31.add(label33);
win31.add(button01);
advWin5.open();
win31.open();
win11.open();





