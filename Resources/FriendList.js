 Ti.include('adv1.js');
var transWin =Titanium.UI.createWindow({  
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

 var UsrName =  Titanium.App.Properties.getString("UserName");
var a=Ti.App.Properties.getString("value");
//alert(a.length);
//alert(a);

var j=0;
var i=0;
var row1;
var json;
var friendscontacts = [];
var friends = [];
var friendslatitude = [];
var friendslongitude = [];
var profilepic = [];
 json = JSON.parse(a);
for (j=0;j<json.length;j++)
	{
		
		
	 row1 = json[j];
	 friends[i] = row1.FullName;
	
	 friendscontacts[i] = row1.mobile;
	
	 friendslatitude[i] = row1.Latitude;
	friendslongitude[i] = row1.Longitude;
	 profilepic[i] = row1.ProfilePic;
	
	 
	 i++;
}

/*if (Ti.UI.Android){
  transWin.windowSoftInputMode = Ti.UI.Android.SOFT_INPUT_ADJUST_PAN;
}*/

function createRow(i,fname,fcon,flatitude,flongitude,ppic) {
  var row = Ti.UI.createView({
    backgroundColor: '#90EE90',
    borderColor: '#bbb',
    borderWidth: 1,
    width:'100%', height: '8%',
    top: 0, left: 0
  });
   var label01 = Ti.UI.createLabel({
   	text:fname,
   	//textAlign:"center",
   	top:5,
   	color: 'white',
   	font:{fontSize:'30%',fontWeight:'bold'},
   	left:"23%",width:"70%",
   	height:'95%'
   });
   
     /* var label02 = Ti.UI.createLabel({
   	text:contact[i],
   	textAlign:"center",
   	top:10,
   	left:"60%",width:"40%",
   	height:60
   });*/
  var image03 = Titanium.UI.createImageView({
	image: ppic,
	left:'1%',
	top:5,
	height:'90%',
	width:"20%",
	bottom:5,
});
  
  label01.addEventListener("click",function(e){
  	var win11=Ti.UI.createWindow({
				url:"ViewFriends.js"
			});
		
	
			//win1.open();
			Ti.App.Properties.setString("longii",flongitude);
			Ti.App.Properties.setString("latii",flatitude);
			Ti.App.Properties.setString("namee",fname);
			Ti.App.Properties.setString("numberr",fcon);
			Ti.App.Properties.setString("fpic",ppic);
			win11.open();
  	
  });
  
  
  
    
   /* var inputTextField = Ti.UI.createTextField({
    hintText: 'Enter value ' + i,
    keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
    top: 10, left: '10%',
    width: '80%', height: 60
  });*/
 row.add(image03);
  row.add(label01);
  //row.add(label02);
  return row;
}

var scrollView = Ti.UI.createScrollView({
  top:'10%',  
  contentHeight: 'auto',
  layout: 'vertical'
});







for(i = 0; i <friends.length; i++){
var row = createRow(i,friends[i],friendscontacts[i],friendslatitude[i],friendslongitude[i],profilepic[i]);
  scrollView.add(row);
}

transWin.add(scrollView);

/*var label = Ti.UI.createLabel({
  backgroundColor:'darkgray',
  text: 'Your Friend List',
  textAlign: 'center',
  top:0,right:0,
  width:"60%", 
  height:60
});*/
var aLabel = Ti.UI.createLabel({
	text : UsrName+' Friends',
	//color : '#BF9FAF',
	color : '#ffffff',
	font:{fontSize:'30%',fontWeight:'bold'},
	height:'8%',
	//backgroundImage:'images/titalbar_2.png',
	backgroundColor:'#008B8B',
	width : '100%',
	top:'0%',
	//right:'5%',
	textAlign : 'center'
});
/*
var button = Titanium.UI.createButton({
	title:"Back",
	backgroundColor:"#1874CD",
	top:0,
	left:0,
	height: '8%',
	width:140,
	id:"Custom Button2"
});*/
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
/*var button = Titanium.UI.createButton({
	title:"go back",
	textAlign:"center",
	
	backgroundColor:"#1874CD",
	top:0,
	left:0,
	height:60,
	width:"40%",
	id:"Simple Button"
});*/
/*
button.addEventListener("click",function(e){
	var win1=Ti.UI.createWindow({
				url:"Home.js"
			});
		
	
			win1.open();
			//win2.open();
});*/
var advLabel = Ti.UI.createLabel({
	text : '',
	font:{fontSize:'13%',fontWeight:'bold'},
	color : '#ffffff',
	height:'8%',
	width : '100%',
	textAlign: 'center',
	bottom:'0%',
});
advLabel.addEventListener('click', function(e) {	
	Ti.Platform.openURL(adLink);
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
transWin.addEventListener('android:back', function (e) {
    alertmsg.show();
});	

transWin.add(aLabel);
transWin.add(Back);
transWin.add(bLabel);
transWin.add(advLabel);
transWin.open();
