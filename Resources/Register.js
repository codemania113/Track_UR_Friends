 Ti.include('adv1.js');

//-- Create our main window that will contain all our sub windows   
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
});
// Create a Label.
var aLabel = Ti.UI.createLabel({
	text : '',
	//color : '#BF9FAF',
	color : '#ffffff',
	font:{fontSize:'30%',fontWeight:'bold'},
	height:'8%',
	//backgroundImage:'images/titalbar_2.png',
	backgroundColor:'#008B8B',
	width : '100%',
	top:'0%',
	textAlign : 'center'
	//right:'5%',
	//
});
var appnameLabel = Ti.UI.createLabel({
	text : 'Track Your Friends',
	//color : '#BF9FAF',
	color : '#ffffff',
	textAlign: 'right',
	font:{fontSize:'30%',fontWeight:'bold'},
	height:'8%',
	//backgroundImage:'images/titalbar_2.png',
	width : '80%',
	top:'0%'	
	//right:'5%',
	//
});
var imagelogo = Ti.UI.createLabel({
	text : '',
    font:{fontSize:35,fontWeight:'bold'},
	height:'5%',
	width : '15%',
	backgroundImage:'images/Logo.png',
	top:'1%',
	left : '2%'
	      
	
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
	
	 var logWin = Ti.UI.createWindow({
			url: 'LoginWindow.js'	
	});
	
	logWin.open();
});	
// Create a TextField.
var fullName = Ti.UI.createTextField({
	height : '10%',
	top :'20%',
	width : '80%',
	hintText : 'Enter your Full Name.',
	color:'#000000',

	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});
var mobilenum= Ti.UI.createTextField({
	height : '10%',
	top :'35%',
	width : '80%',
	hintText : 'Enter your Mobile Number',
	color:'#000000',

	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});
var emailid = Ti.UI.createTextField({
	height : '10%',
	top :'50%',
	width : '80%',
	hintText : 'Enter your Email id',
	color:'#000000',
	keyboardType:Titanium.UI.KEYBOARD_EMAIL,
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});
var password = Ti.UI.createTextField({
	height : '10%',
	top :'65%',
	width : '80%',
	passwordMask:true,
	hintText : 'Enter your password',
	color:'#000000',

	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

var Register = Ti.UI.createButton({
	title : '',
	height : '8%',
	textAlign : 'center',
	width : '50%',
	backgroundImage:'images/Register.png',
	top : '80%'	
});
Register.addEventListener('click', function(e) {
 	//alert('Register');
    /*    var newWin = Ti.UI.createWindow({
		backgroundColor: '#000000',
		title: 'Test 000',
		url: 'app.js'		
	});	
	    newWin.open();	*/
	   validateInput();
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
	width : '100%',
	textAlign : 'center',
	top:'93%'
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
     var modal = require('modalWindow').modalWin;
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
nwin.add(appnameLabel);
nwin.add(bLabel);
nwin.add(Back);
//nwin.add(imagelogo);
nwin.add(advLabel),
nwin.add(fullName);
nwin.add(password);
nwin.add(emailid);
nwin.add(mobilenum);
nwin.add(Register);
nwin.open();  

function validateInput() {
	
	//,mobilenum,,
    var _firstName = fullName.value;
   // var _lastName = lastNameField.value;
    var _mobileNum =  mobilenum.value;
    var _email = emailid.value;
    var _password = password.value;
   // Ti.API.info(_firstName);
    _firstName = _firstName.trim();_firstName=_firstName.ltrim();_firstName=_firstName.rtrim();
    _mobileNum = _mobileNum.trim();_mobileNum=_mobileNum.ltrim();_mobileNum=_mobileNum.rtrim();
    _email = _email.trim();_email=_email.ltrim();_email=_email.rtrim();
    _password = _password.trim();_password=_password.ltrim();_password=_password.rtrim();
    //var _passwordVerify = passwordVerifyField.value;
//Ti.API.info(_firstName);
    var noBlanks = false;
    var noNumbers = true;
    var isValidEmail = false;
    var passwordMatch = false;
    var mobileCheck1 = false;
    var mobileCheck2 = false;

    //variable must be initialized to an empty string.
    var alertMessage = '';

    var w = Ti.UI.createWindow({
        url : '',
        firstName : _firstName,
        //lastName : _lastName,
        tabBarHidden : false
    });

   // if(_firstName !== "" && _lastName !== "") {
   	if(_firstName !== "") {
        noBlanks = true;
    } else {
        alertMessage += 'Please provide your Good Name.\n';
    }
    
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
     
    //VALIDATE EMAIL ADDRESS
    var validateEmail = /([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/g;

    if(validateEmail.test(_email) && _email !== '') {
        isValidEmail = true;
    } else {
        if(_email === '') {
            alertMessage += 'Please enter a valid email address.\n';
        } else {
            alertMessage += _email + ' is invalid email id. Please re-enter.\n';
        }
    }

    //VALIDATE PASSWORD MATCH
    //if(_password === _passwordVerify && _password !== '') {
    if(_password !== '') {
        passwordMatch = true;
    } else {
          alertMessage += 'Passwords cannot be blank.\n';       
    }

    //TEST FIELDS FOR NUMBER CHARACTERS
    var hasNumbers = /[0-9]+(?:\.[0-9]*)?/;
    var testFields = [_firstName];

    for(var i = 0, j = testFields.length; i < j; i++) {
        if(hasNumbers.test(testFields[i])) {
            alertMessage += 'Fullname fields cannot contain numbers.\n';
            noNumbers = false;
            break;
        }
    }
    
    
    
    // VALIDATE INPUT
    if(noNumbers === true && noBlanks === true && isValidEmail === true && passwordMatch === true && mobileCheck1 === true && mobileCheck2 === true) {
      //  w.open();
      RegisterUser(_firstName,_mobileNum,_email,_password);
     
    } else {
        var invalidInputAlert = Titanium.UI.createAlertDialog({
            title : 'Attention',
            message : alertMessage
        });
        invalidInputAlert.show();
    }
}
function RegisterUser(_firstName,_mobileNum,_email,_password)
{
	
	var url = "http://www.visitindia.com/PeopleTracker/UserReg.php?name="+_firstName+"&emailid="+_email+"&mnumber="+_mobileNum+"&password="+_password;
	var client = Ti.Network.createHTTPClient({
     // function called when the response data is available
         onload : function(e) {
     	 var response = this.responseText;
     	 response = response.trim();response = response.ltrim();response = response.rtrim();
     	 if(response === 'Success')
     	 {
     	 	alert('You are Register Successfully. Please Login to Continue');
     	 	  var loginWin = Ti.UI.createWindow({
				//backgroundColor: '#000000',
				title: 'Test 000',
				url: 'LoginWindow.js'		
				});	
	    loginWin.open();	
     	 }
     	 if(response == 'User Exists')
     	 {
     	 	alert(_mobileNum+' Already register with us !!! Please check your mobile number.')
     	 }
     },
     // function called when an error occurs, including a timeout
     onerror : function(e) {
         Ti.API.debug(e.error);
         alert('error');
     },
     timeout : 5000  // in milliseconds
 	});
 	// Prepare the connection.
 	client.open("GET", url);
 	// Send the request.
 	client.send();
 	
 		//var successfulregistrationWin=Ti.UI.createWindow({
		//		url:"successfulregistration.js"
		///	});
	
		//	successfulregistrationWin.open();
	

}
String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"");}
String.prototype.ltrim=function(){return this.replace(/^\s+/,"");}
String.prototype.rtrim=function(){return this.replace(/\s+$/,"");}