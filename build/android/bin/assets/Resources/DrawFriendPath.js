Ti.include("adv1.js");var UsrName=Titanium.App.Properties.getString("UserName"),frndLatLong=Titanium.App.Properties.getString("frndLatLong"),myLatLong=Titanium.App.Properties.getString("myLatLong"),nwin=Titanium.UI.createWindow({height:Ti.Platform.displayCaps.platformHeight,width:Ti.Platform.displayCaps.platformWidth,fullscreen:!0,backgroundColor:"#90EE90",navBarHidden:!0,orientationModes:[Ti.UI.LANDSCAPE_LEFT,Ti.UI.LANDSCAPE_RIGHT,Ti.UI.PORTRAIT,Ti.UI.UPSIDE_PORTRAIT]});
Titanium.Gesture.addEventListener("orientationchange",function(){nwin.height=Ti.Platform.displayCaps.platformHeight;nwin.width=Ti.Platform.displayCaps.platformWidth;localWebview.height="84%";localWebview.width=Ti.Platform.displayCaps.platformWidth});
var aLabel=Ti.UI.createLabel({text:"Welcome "+UsrName,color:"#ffffff",font:{fontSize:"20%",fontWeight:"bold"},height:"8%",backgroundColor:"#008B8B",width:"100%",top:"0%",textAlign:"center"}),Back=Ti.UI.createButton({title:"",height:"6%",backgroundImage:"images/back.png",width:"27%",left:"2%",top:"1%"});Back.addEventListener("click",function(){Ti.UI.createWindow({url:"PathToFriend.js"}).open()});Ti.App.fireEvent("show_indicator");
var url1="http://www.visitindia.com/PeopleTracker/ShowPath.jsp?DestinationName="+frndLatLong+"&Source="+myLatLong,localWebview=Titanium.UI.createWebView({top:"8%",left:0,url:url1,height:"84%",width:Ti.Platform.displayCaps.platformWidth,backgroundColor:"transparent",touchEnabled:!0});localWebview.addEventListener("load",function(){Ti.App.fireEvent("hide_indicator")});
var bLabel=Ti.UI.createLabel({text:"",backgroundColor:" #008B8B",font:{fontSize:30,fontWeight:"bold"},height:"8%",width:"100%",bottom:"0%",textAlign:"center"}),advLabel=Ti.UI.createLabel({text:"",font:{fontSize:"13%",fontWeight:"bold"},color:"#ffffff",height:"7%",width:"100%",textAlign:"center",top:"93%"});advLabel.addEventListener("click",function(){Ti.Platform.openURL(adLink)});
var alertmsg=Titanium.UI.createAlertDialog({title:"Exit Application",message:"Do you want to exit ?",buttonNames:["Yes","No"],cancel:1});alertmsg.addEventListener("click",function(a){switch(a.index){case 0:Titanium.Android.currentActivity.finish()}});nwin.addEventListener("android:back",function(){alertmsg.show()});nwin.add(aLabel);nwin.add(bLabel);nwin.add(Back);nwin.add(localWebview);nwin.add(advLabel);nwin.open();String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")};
String.prototype.ltrim=function(){return this.replace(/^\s+/,"")};String.prototype.rtrim=function(){return this.replace(/\s+$/,"")};
