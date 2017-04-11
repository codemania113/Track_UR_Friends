var CheckUserStatus = Titanium.App.Properties.getString("MobileNumber");
Ti.API.info(CheckUserStatus);
//CheckUserStatus = CheckUserStatus.trim();CheckUserStatus = CheckUserStatus.ltrim();CheckUserStatus = CheckUserStatus.rtrim();
//alert(CheckUserStatus);
if (CheckUserStatus != null && CheckUserStatus != '') {
	//alert('User Already Logedin '); 
	var newWin = Ti.UI.createWindow({
				//backgroundColor: '#000000',
				url: 'Home.js'		
				});	
	    		newWin.open();
}
else
{
	var newWinReg = Ti.UI.createWindow({
				//backgroundColor: '#000000',
				url: 'LoginWindow.js'		
				});	
	    		newWinReg.open();
}
String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"");}
String.prototype.ltrim=function(){return this.replace(/^\s+/,"");}
String.prototype.rtrim=function(){return this.replace(/\s+$/,"");}