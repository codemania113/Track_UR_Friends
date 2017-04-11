 Ti.include('adv1.js');

//-- Create our main window that will contain all our sub windows  
/*var nwin=Titanium.UI.createWindow
({  
    height:Ti.Platform.displayCaps.platformHeight,  
    width:Ti.Platform.displayCaps.platformWidth,  
    fullscreen:true,  
    backgroundColor:'#90EE90', 
    exitOnClose:true,  
    //backgroundImage:'images/Home.png',
    navBarHidden:true  
});  
*/

var nwin=Titanium.UI.createWindow({  
    height:Ti.Platform.displayCaps.platformHeight,  
    width:Ti.Platform.displayCaps.platformWidth,  
    fullscreen:true,  
    backgroundColor:'#90EE90', 
    exitOnClose:true,
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
    //aLabel.height = '8%'
});
// Create a Label.
var aLabel = Ti.UI.createLabel({
	text : 'Track Your Friends',
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

var tracelbl = Ti.UI.createLabel({
	text : '',
	color : '#F78181',
	//color : '#ffffff',
	font:{fontSize:'38%',fontWeight:'bold'},
	height:'10%',
	width : '100%',
	top:'10%',
	//right:'5%',
	textAlign : 'center'
});
var logoimage = Ti.UI.createButton({
	title : '',
	height : '6%',
    backgroundImage:'images/Logo.png',
	width : '20%',
	left:'2%',
	//bottom:'1%',
	top : '1%'	
});
// Create a TextField.
var moblenum = Ti.UI.createTextField({
	height : '10%',
	top :'25%',
	width : '80%',
	hintText : 'Enter your Mobile Number',
	color:'#000000',
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
var password = Ti.UI.createTextField({
	height : '10%',
	top :'40%',
	width : '80%',
	hintText : 'Enter your Password',
	passwordMask:true,
	color:'#000000',
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
// Create a Button.
var login = Ti.UI.createButton({
	height : '8%',
	textAlign : 'center',
	top : '55%',	
	title : '',	
	backgroundImage:'images/Login.png',
	width : '50%',
});
 login.addEventListener('click', function(e) {
 	//alert('login');
         validateInput();
});
var newUser = Ti.UI.createLabel({
	text : 'New User ? Register here.',
	color : '#000000',
	font:{fontSize:'20%',fontWeight:'bold'},
	height : '10%',
	width : '80%',
	backgroundColor:'#90EE90', 
	top : '65%',
	//left : myLeft,
	textAlign : 'center'
});
var Register = Ti.UI.createButton({
	title : '',
	height : '8%',
	textAlign : 'center',
	width : '50%',
	backgroundImage:'images/Register.png',
	top : '75%'	
});
Register.addEventListener('click', function(e) {
 	//alert('Register');
        var newWin = Ti.UI.createWindow({
		backgroundColor: '#000000',
		title: 'Test 000',
		url: 'Register.js'		
	});	
	    newWin.open();	
});
var bLabel = Ti.UI.createLabel({
	text : '',
	color : '#BF9FAF',
	font:{fontSize:35,fontWeight:'bold'},
	height:'10%',
	width : '100%',
	backgroundColor:'#008B8B',
	//backgroundImage:'images/titalbar_2.png',
    top:'93%',
	left : '0%'
       
	
});
var bLabel = Ti.UI.createLabel({
	text : '',
	backgroundColor:' #008B8B',
	font:{fontSize:30,fontWeight:'bold'},
	height:'8%',
	width : '100%',
	top:'92%',
	textAlign : 'center'
});
var advLabel = Ti.UI.createLabel({
	text : '',
	font:{fontSize:'13%',fontWeight:'bold'},
	color : '#ffffff',
	height:'7%',
	width : '65%',
	left : '35%',
	top:'93%',
});
advLabel.addEventListener('click', function(e) {	
	Ti.Platform.openURL(adLink);
	});
	
var supportButton = Ti.UI.createButton({
	title : '',
	height : '7%',
	width : '27%',
	backgroundImage:'images/support.png',
	top : '93%',
	left : '2%'
});
supportButton.addEventListener('click', function (e) {
     var modal = require('supportWindow').modalWin;
     var popupWin = new modal();
     popupWin.open();
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
nwin.add(logoimage);
nwin.add(tracelbl);
nwin.add(advLabel),
nwin.add(moblenum);
nwin.add(password);
nwin.add(login);
nwin.add(newUser);
nwin.add(Register);
nwin.add(supportButton);
nwin.open(); 

function validateInput() {
	
	
    var _mobileNum =  moblenum.value;
  
    var _password = password.value;
   // Ti.API.info(_firstName);
 
    _mobileNum = _mobileNum.trim();_mobileNum=_mobileNum.ltrim();_mobileNum=_mobileNum.rtrim();
    _password = _password.trim();_password=_password.ltrim();_password=_password.rtrim();
    //var _passwordVerify = passwordVerifyField.value;
//Ti.API.info(_firstName);
  
    var passwordMatch = false;
    var mobileCheck1 = false;
    var mobileCheck2 = false;

    //variable must be initialized to an empty string.
    var alertMessage = '';

 

     //Validate Mobile Number
     if(isNaN(_mobileNum)||_mobileNum.indexOf(" ")!=-1)
           {
              //alert("Enter numeric value")
              //return false; 
               alertMessage += 'Please enter a Valid Mobile Number.\n';
           }
           else
           {
           	mobileCheck1 = true;
           }
           if ((_mobileNum.length < 1) || (_mobileNum.length > 10))
           {
                 alertMessage += 'Your Mobile Number must be 1 to 10 Integers.\n';
               // return false;
           }
           else
           {
           	mobileCheck2 =true;
           }
     
   
    //VALIDATE PASSWORD MATCH
    //if(_password === _passwordVerify && _password !== '') {
    if(_password !== '') {
        passwordMatch = true;
    } else {
          alertMessage += 'Passwords cannot be blank.\n';       
    }

   
    
    
    // VALIDATE INPUT
    if(passwordMatch === true && mobileCheck1 === true && mobileCheck2 === true) {
      //  w.open();
      //RegisterUser(_firstName,_mobileNum,_email,_password);
      CheckLogin(_mobileNum,_password);
    // alert('success');
    } else {
        var invalidInputAlert = Titanium.UI.createAlertDialog({
            title : 'Attention',
            message : alertMessage
        });
        invalidInputAlert.show();
    }
}
function CheckLogin(_mobileNum,_password)
{
	
	var url = "http://www.visitindia.com/PeopleTracker/UserLogin.php?mnumber="+_mobileNum+"&password="+_password;
	var client = Ti.Network.createHTTPClient({
     // function called when the response data is available
     onload : function(e) {
     	var response = this.responseText;
     	 response = response.trim();response = response.ltrim();response = response.rtrim();  
     	// alert(response);	
     	 if(response === 'Login')
     	 {
     	 	//alert('You are Login Successfully !!!');
     	 	Titanium.App.Properties.setString("MobileNumber",_mobileNum);
     	 	 var newWin = Ti.UI.createWindow({
				backgroundColor: '#000000',
				title: 'Test 000',
				url: 'Home.js'		
				});	
	    		newWin.open();
     	 }
     	 else
     	 {
     	 	alert('Please Check your Mobile Number and Password !!!')
     	 }
     	/*var fakeWin=Ti.UI.createWindow({
				url:"fake.js"
			});*/
		//var win1= Ti.UI.createWindow({
		//		url:"swipe.js"
		//	});
	
		//	win1.open();
			//fakeWin.open();
     		
     	
     },
     // function called when an error occurs, including a timeout
     onerror : function(e) {
         Ti.API.debug(e.error);
         //alert('error');
     },
     timeout : 5000  // in milliseconds
 	});
 	// Prepare the connection.
 	client.open("GET", url);
 	// Send the request.
 	client.send();
 	
}

String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"");}
String.prototype.ltrim=function(){return this.replace(/^\s+/,"");}
String.prototype.rtrim=function(){return this.replace(/\s+$/,"");}