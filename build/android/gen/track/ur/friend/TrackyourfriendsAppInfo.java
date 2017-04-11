package track.ur.friend;

import org.appcelerator.titanium.ITiAppInfo;
import org.appcelerator.titanium.TiApplication;
import org.appcelerator.titanium.TiProperties;
import org.appcelerator.kroll.common.Log;

/* GENERATED CODE
 * Warning - this class was generated from your application's tiapp.xml
 * Any changes you make here will be overwritten
 */
public final class TrackyourfriendsAppInfo implements ITiAppInfo
{
	private static final String LCAT = "AppInfo";
	
	public TrackyourfriendsAppInfo(TiApplication app) {
		TiProperties properties = app.getSystemProperties();
		TiProperties appProperties = app.getAppProperties();
					
					properties.setString("ti.ui.defaultunit", "system");
					appProperties.setString("ti.ui.defaultunit", "system");
					
					properties.setString("ti.deploytype", "production");
					appProperties.setString("ti.deploytype", "production");
	}
	
	public String getId() {
		return "track.ur.friend";
	}
	
	public String getName() {
		return "TrackYourFriends";
	}
	
	public String getVersion() {
		return "1.0";
	}
	
	public String getPublisher() {
		return "compind";
	}
	
	public String getUrl() {
		return "http://";
	}
	
	public String getCopyright() {
		return "2013 by compind";
	}
	
	public String getDescription() {
		return "not specified";
	}
	
	public String getIcon() {
		return "appicon.png";
	}
	
	public boolean isAnalyticsEnabled() {
		return true;
	}
	
	public String getGUID() {
		return "0748c5fe-f067-4bb9-8b3a-6688da07c889";
	}
	
	public boolean isFullscreen() {
		return false;
	}
	
	public boolean isNavBarHidden() {
		return false;
	}
}
