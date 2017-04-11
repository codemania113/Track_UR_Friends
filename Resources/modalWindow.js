//Function to show modal window
Ti.include('Home.js');
exports.modalWin = function(){
var _mobileNumber = Titanium.App.Properties.getString("MobileNumber");
//Popup win
var popupWin = Ti.UI.createWindow({
//backgroundColor : '#000000',
backgroundColor : '#008B8B',
opacity            : 0.5,
fullscreen        : true,
id                : 'popupWin'
});

var popupView = Ti.UI.createView({
width    : '50%',
height    : '40%',
backgroundColor : '#008B8B',

borderRadius : 5,
borderColor : 'white',
borderWidth : 3
});

var button01 = Titanium.UI.createButton({
	title:"",
	backgroundImage:'images/camera.png',
	top:"5%",
	left : '5%',
	height:'15%',
	width:'90%',
	id:"Custom Button"
});

var button02 = Titanium.UI.createButton({
	title:"",
	backgroundImage:'images/gallery.png',
	top:'25%',
	left : '5%',
	height:'15%',
	width:'90%',
	id:"Custom Button"
});

var button03 = Titanium.UI.createButton({
	title:"",
	backgroundImage:'images/removeimage.png',
	top:'45%',
	left : '5%',
	height:'15%',
	width:'90%',
	id:"Custom Button"
});
var flag=0;
function back()
{
	flag =1;
}
button03.addEventListener("click",function(e)
{
	var url = "http://www.visitindia.com/PeopleTracker/RemovePic.php?mno="+_mobileNumber;

 var client = Ti.Network.createHTTPClient({
     // function called when the response data is available
     onload : function(e) {
       
         var resdata = this.responseText;
            Ti.API.info(this.responseText); 
           
			resdata = resdata.trim();
			resdata = resdata.ltrim();	
			resdata = resdata.rtrim();		
				var n = resdata.charAt(0);
				if(n=='S')
				{
					
					var res = resdata.split("*~*");
					
					var newwin = Ti.UI.currentWindow;
					Ti.App.fireEvent('updateImage',{imageData:res[1]});
					
					newwin.close();
					//popupWin.close();
					//Ti.App.image03.url=res[1];
				}
				else
				{
					alert("there is some error in the image file you are uploading. Please check it and try again");
				}
		
  		
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
});
var image04;
button01.addEventListener("click",function(e){
	Titanium.Media.showCamera({
    success:function(event)
    {
        var image = event.media;
      
        var image1 = image.imageAsResized(80,80);
        var f = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,'camera_photo.png');
        f.write(image1);
        //win.backgroundImage = f.nativePath;
 
        var data_to_send = { 
            "file": f.read(), 
            "name": 'camera_photo.png',
            "mno":_mobileNumber
        };
        xhr = Titanium.Network.createHTTPClient();
        xhr.open("POST","http://www.visitindia.com/PeopleTracker/UploadPic.php");
       // xhr.setRequestHeader("enctype", "multipart/form-data");
        //xhr.setRequestHeader("Content-Type", "image/png");
        xhr.setRequestHeader("contentType", "multipart/form-data");
        
        xhr.send(data_to_send); 
        xhr.onload = function() {
        	//alert( this.responseText);
           var resdata = this.responseText;
           // Ti.API.info(this.responseText); 
           
			resdata = resdata.trim();
			resdata = resdata.ltrim();	
			resdata = resdata.rtrim();		
				var n = resdata.charAt(0);
				if(n=='S')
				{
					
					var res = resdata.split("*~*");
					
					var newwin = Ti.UI.currentWindow;
					Ti.App.fireEvent('updateImage',{imageData:res[1]});
					
					newwin.close();
					//popupWin.close();
					//Ti.App.image03.url=res[1];
				}
				else
				{
					alert("there is some error in the image file you are uploading. Please check it and try again");
				}
				
			
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

button02.addEventListener("click",function(e){
	Titanium.Media.openPhotoGallery({
	success:function(event) {
		
		 var image = event.media;
		 var image1 = image.imageAsResized(80,80);
		 //var blob= image.toBlob();
		 //var smallblob = blob.imageAsResized(80,80);
        var f = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,'camera_photo.png');
        f.write(image1);
        //win.backgroundImage = f.nativePath;
 
        var data_to_send = { 
            "file": f.read(), 
            "name": 'camera_photo.png',
            "mno":_mobileNumber
        };
        xhr = Titanium.Network.createHTTPClient();
        xhr.open("POST","http://www.visitindia.com/PeopleTracker/UploadPic.php");
       // xhr.setRequestHeader("enctype", "multipart/form-data");
        //xhr.setRequestHeader("Content-Type", "image/png");
        xhr.setRequestHeader("contentType", "multipart/form-data");
        
        xhr.send(data_to_send); 
        xhr.onload = function() {//alert( this.responseText);
           var resdata = this.responseText;
            Ti.API.info(this.responseText); 
           
			resdata = resdata.trim();
			resdata = resdata.ltrim();	
			resdata = resdata.rtrim();		
				var n = resdata.charAt(0);
				if(n=='S')
				{
					var res = resdata.split("*~*");
					var newwin = Ti.UI.currentWindow;
					Ti.App.fireEvent('updateImage',{imageData:res[1]});
					newwin.close();
					//popupWin.close();
					//Ti.App.image03.url=res[1];
				}
				else
				{
					alert("there is some error in the image file you are uploading. Please check it and try again");
				}
				
			
        };
		
		/* success callback fired after media retrieved from gallery */
		/*var xhr = Titanium.Network.createHTTPClient();
		xhr.onload = function(e) {
			Ti.UI.createAlertDialog({
			      title:'Success',
			      message:'status code ' + this.status
		    }).show();
		};
		xhr.open('POST','https://myserver.com/api/uploadAndPost.do');
		xhr.send({
		    theImage:event.media,  /* event.media holds blob from gallery 
		    username:'foo',
		    password:'bar'
		  });*/
	}
});
});


/*
var cbutton= Ti.UI.createButton({
    title : 'close',
	height : '20%',
	width : '80%',
	backgroundColore:'#25587E',
	top : '65%',
	color:'#25587E',
	left : '10%',
	font  :    { fontSize : '12%', fontWeight : 'bold'}
	});
*/

var cbutton = Titanium.UI.createButton({
	title:"",
	backgroundImage:'images/close.png',
	top:'65%',
	left : '5%',
	height:'15%',
	width:'90%',
	id:"Custom Button"
});	
cbutton.addEventListener('click',function(e)
    {
       popupWin.close();
  

  	});      


popupView.add(cbutton);
popupView.add(button01);
popupView.add(button02);
popupView.add(button03);
popupWin.add(popupView);
//Event to close the popup window
/*popupWin.addEventListener('click', function(e){
if(e.source.id != null){
popupWin.close();
}
});*/

return popupWin;
};
String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"");}
String.prototype.ltrim=function(){return this.replace(/^\s+/,"");}
String.prototype.rtrim=function(){return this.replace(/\s+$/,"");}