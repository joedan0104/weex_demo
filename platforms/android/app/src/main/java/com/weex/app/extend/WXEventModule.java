package com.weex.app.extend;

import android.content.Intent;
import android.net.Uri;
import android.text.TextUtils;
import android.widget.Toast;

import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.common.WXModule;
import com.taobao.weex.utils.WXLogUtils;
import com.weex.app.WXPageActivity;


public class WXEventModule extends WXModule {
    @JSMethod()
    public void openURL(String url) {
        if (TextUtils.isEmpty(url)) {
            return;
        }
        Uri uri = Uri.parse(url);
        String scheme = uri.getScheme();

        if (scheme.equals("http") || scheme.equals("https") || scheme.equals("file")) {
            Intent renderIntent = new Intent(mWXSDKInstance.getContext(), WXPageActivity.class);
            renderIntent.setData(uri);
            mWXSDKInstance.getContext().startActivity(renderIntent);
        } else {
            Intent intent = new Intent(Intent.ACTION_VIEW);
            intent.setData(uri);
            mWXSDKInstance.getContext().startActivity(intent);
        }
    }

    /**
     * 打开购物车
     */
    @JSMethod
    public void ShoppingCart() {
        WXLogUtils.d("WXEventModule", "ShoppingCart");
        Toast.makeText(mWXSDKInstance.getContext(), "购物车", Toast.LENGTH_SHORT).show();

    }
}
