package com.cdel.weex.util;

import android.content.Context;


/**
 * Created by budao on 2016/10/12.
 */
public class AppConfig {
    private static final String TAG = "AppConfig";

    private static AppPreferences sPreferences = new AppPreferences();

    public static void init(Context context) {
        loadAppSetting(context);
    }

    public static String getLaunchUrl() {
        if (isLaunchLocally()) {
            return sPreferences.getString(Constants.PARAM_LOCAL_URL, "file://assets/index.js");
        }
        return sPreferences.getString(Constants.PARAM_LAUNCH_URL, "http://192.168.190.153:8888/bundle/index1.js");
    }

    public static Boolean isLaunchLocally() {
        return sPreferences.getBoolean(Constants.PARAM_LAUNCH_LOCALLY, false);
    }

    private static void loadAppSetting(Context context) {
        AppConfigXmlParser parser = new AppConfigXmlParser();
        parser.parse(context);
        sPreferences = parser.getPreferences();
    }
}
