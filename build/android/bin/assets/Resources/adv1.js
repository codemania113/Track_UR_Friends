var url="http://www.visitindia.com/servlet/HTMLAdv?hTCategory=SpecialDeals&randomNum="+Math.random()*5,adText="",adLink="",client=Ti.Network.createHTTPClient({onload:function(){var a=Ti.XML.parseString(this.responseText);a.documentElement.getElementsByTagName("HTInfo");adText=a.getElementsByTagName("HTInfo").item(0).getAttribute("HTShortName");adLink=a.getElementsByTagName("HTInfo").item(0).getAttribute("HTWebsite");advLabel.text=adText},onerror:function(){},timeout:5E3});client.open("GET",url);client.send();
