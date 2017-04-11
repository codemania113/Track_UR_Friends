 Ti.include('adv1.js');
var UsrName =  Titanium.App.Properties.getString("UserName");
var nwin=Titanium.UI.createWindow({  
    height:Ti.Platform.displayCaps.platformHeight,  
    width:Ti.Platform.displayCaps.platformWidth,  
    fullscreen:true,  
    backgroundColor:'#90EE90', 
    navBarHidden:true,
    orientationModes: [
    Ti.UI.LANDSCAPE_LEFT,
    Ti.UI.LANDSCAPE_RIGHT,
    Ti.UI.PORTRAIT,
    Ti.UI.UPSIDE_PORTRAIT
    ] 
});  
Titanium.Gesture.addEventListener('orientationchange', function(e) {
    nwin.height = Ti.Platform.displayCaps.platformHeight;
    nwin.width = Ti.Platform.displayCaps.platformWidth;
    localWebview.height = '84%';
    localWebview.width = Ti.Platform.displayCaps.platformWidth;
});
// Create a Label.
var aLabel = Ti.UI.createLabel({
	text : 'Welcome '+UsrName,
	//color : '#BF9FAF',
	color : '#ffffff',
	font:{fontSize:'20%',fontWeight:'bold'},
	height:'8%',
	//backgroundImage:'images/titalbar_2.png',
	backgroundColor:'#008B8B',
	width : '100%',
	top:'0%',
	//right:'5%',
	textAlign : 'center'
});

var Back = Ti.UI.createButton({
	title : '',
	height:'6%',
	backgroundImage:'images/back.png',
	width : '27%',
	left:'2%',
	top : '1%'	
});
Back.addEventListener('click', function() {
	
	 var WinHome = Ti.UI.createWindow({
			url: 'Home.js'	
	});
	
	WinHome.open();
});	
Ti.App.fireEvent('show_indicator');
var url1 = 'http://www.visitindia.com/PeopleTracker/ShowPath.jsp?DestinationName=';
var localWebview = Titanium.UI.createWebView({
    top:'8%',
    left:0,
    url:url1,
    height:'84%',
    width:Ti.Platform.displayCaps.platformWidth,
    backgroundColor:'transparent',
    touchEnabled:true
});
localWebview.addEventListener('load', function() {
    Ti.App.fireEvent('hide_indicator'); //Hide the Loading indicator after the webview loaded
});




var bLabel = Ti.UI.createLabel({
	text : '',
	backgroundColor:' #008B8B',
	font:{fontSize:30,fontWeight:'bold'},
	height:'8%',
	width : '100%',
	bottom:'0%',
	textAlign : 'center'
});
var advLabel = Ti.UI.createLabel({
	text : '',
	font:{fontSize:'13%',fontWeight:'bold'},
	color : '#ffffff',
	height:'7%',
	width : '100%',
	textAlign: 'center',
	top:'93%',
});
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
nwin.addEventListener('android:back', function (e) {
    alertmsg.show();
});		

//share prenwin.passName='Enter your Name';
nwin.add(aLabel);
nwin.add(bLabel);
nwin.add(Back);
nwin.add(localWebview);
nwin.add(advLabel),
nwin.open(); 


String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"");}
String.prototype.ltrim=function(){return this.replace(/^\s+/,"");}
String.prototype.rtrim=function(){return this.replace(/\s+$/,"");}