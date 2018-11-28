package com.weex.app;

import android.app.Application;

import com.cdel.weex.extend.ImageAdapter;
import com.cdel.weex.util.AppConfig;
import com.weex.app.extend.WXEventModule;
import com.alibaba.weex.plugin.loader.WeexPluginContainer;
import com.taobao.weex.InitConfig;
import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.common.WXException;

public class WXApplication extends Application {

  @Override
  public void onCreate() {
    super.onCreate();
    WXSDKEngine.addCustomOptions("appName", "WXSample");
    WXSDKEngine.addCustomOptions("appGroup", "WXApp");
    WXSDKEngine.initialize(this,
        new InitConfig.Builder().setImgAdapter(new ImageAdapter()).build()
    );
    try {
      WXSDKEngine.registerModule("navevent", WXEventModule.class);
    } catch (WXException e) {
      e.printStackTrace();
    }

    AppConfig.init(this);
    WeexPluginContainer.loadAll(this);
  }
}
