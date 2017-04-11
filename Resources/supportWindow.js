//Function to show modal window
exports.modalWin = function(){

//Popup win
var popupWin = Ti.UI.createWindow({
opacity            : 1,
fullscreen        : true,
id                : 'popupWin'
});

//View that used to show the msg
var popupView = Ti.UI.createView({
width    : '60%',
height    : '40%',
backgroundColor : 'white',
borderRadius : 5,
borderColor : 'white',
borderWidth : 3
});

//A message label is added to the view
popupView.add(Ti.UI.createLabel({ width : '94%', backgroundColor:'#ffffff',  height : '60%', top : '15%', color:'#000000',
text : 'Brought to you by Primosoft Inc, USA Please provide any feedback or bug report to: support@primosoft.us', 
font  :    { fontSize : '16%', fontWeight:'italic'}}));

popupView.add(Ti.UI.createLabel({ width : '100%', height : '20%', top : '0%' , color:'#ffffff',left:'0%', right:'0%',
text : '  Support', backgroundColor :'#000000',
font  :    { fontSize : '15%', fontWeight : 'bold'}}));

var cbutton= Ti.UI.createButton({
    title : 'close',
	height : '15%',
	width : '21%',
	backgroundColore:'#25587E',
	top : '80%',
	color:'#25587E',
	left : '5%',
	font  :    { fontSize : '12%', fontWeight : 'bold'}
	});
	
cbutton.addEventListener('click',function(e)
    {
       popupWin.close();
  

  	});      
  
popupWin.add(popupView);
popupView.add( cbutton);
//Event to close the popup window
popupWin.addEventListener('click', function(e){
if(e.source.id != null){
popupWin.close();
}
});

return popupWin;
};
















 


