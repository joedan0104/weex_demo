package com.cdel.weex.util;

public class Constants {

    public static final String BUNDLE_URL = "http://t.cn?_wx_tpl=http://g.tbcdn.cn/weex/weex-tc/0.1.0/build/TC__Home.js";

    public static final String TEST_BUNDLE_URL = BUNDLE_URL;

    public static final String WEEX_SAMPLES_KEY = "?weex-samples";

    public static final String WEEX_TPL_KEY = "_wx_tpl";

    public static final String WEEX_BUNDLE_KEY = "WeexBundle";

    public static final String WEEX_WS_KEY = "Ws";

    /**
     * Weex的启动URL
     */
    public static final String PARAM_LAUNCH_URL = "launch_url";

    /**
     * Weex的Bundle URL
     */
    public static final String PARAM_BUNDLE_URL = "bundle_url";

    /**
     * Weex的Local URL
     */
    public static final String PARAM_LOCAL_URL = "local_url";

    /**
     * Weex是否从本地加载
     */
    public static final String PARAM_LAUNCH_LOCALLY = "launch_locally";

    //hot refresh
    public static final int HOT_REFRESH_CONNECT = 0x111;

    public static final int HOT_REFRESH_DISCONNECT = HOT_REFRESH_CONNECT + 1;

    public static final int HOT_REFRESH_REFRESH = HOT_REFRESH_DISCONNECT + 1;

    public static final int HOT_REFRESH_CONNECT_ERROR = HOT_REFRESH_REFRESH + 1;

    /**
     * Weex跳转OpenUrl
     */
    public static final String ACTION_OPEN_URL = "com.alibaba.weex.protocol.openurl";
}
