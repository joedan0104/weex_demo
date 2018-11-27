#!/usr/bin/env python
#-*- coding: utf-8 -*-
#在项目目录下执行
import os
import os.path
import sys
import socket
import hashlib
# import md5
import json
import zipfile

# nginx服务器的路径
nginxServePath = "/usr/local/var/www/"
# weex.json文件目录
nginxWeexJsonFilePath = nginxServePath + "weex.json"
# js文件夹的路径，即bundle文件夹路径
jsFileInNginxPath = nginxServePath + "bundle"
# js的zip压缩包路径，即bundle.zip文件夹路径
jsZipFileInNginxPath = nginxServePath + "bundle.zip"
# 图片所有文件夹路径
imgFileInNginxPath = nginxServePath + "imgs"
# 图片压缩包所有文件夹路径
imgZipFileInNginxPath = nginxServePath + "imgs.zip"
# 另一种命名，js文件夹的路径，即bundle文件夹路径
jsFileInNginxPath2 = nginxServePath + "dist"
# 另一种命名，js的zip压缩包路径，即bundle.zip文件夹路径
jsZipFileInNginxPath2 = nginxServePath + "dist.zip"

def GetFileMd5(filename):
    if not os.path.isfile(filename):
        return
    myhash = hashlib.md5()
    f = open(filename,'rb')
    while True:
        b = f.read(8096)
        if not b :
            break
        myhash.update(b)
    f.close()
    return myhash.hexdigest()

def get_host_ip():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(('8.8.8.8', 80))
        ip = s.getsockname()[0]
    finally:
        s.close()

    return ip

def zip_dir(dirname,zipfilename):  
    filelist = []  
    if os.path.isfile(dirname):  
        filelist.append(dirname)  
    else :  
        for root, dirs, files in os.walk(dirname):  
            for name in files:  
                filelist.append(os.path.join(root, name))  
          
    zf = zipfile.ZipFile(zipfilename, "w", zipfile.zlib.DEFLATED)  
    for tar in filelist:  
        arcname = tar[len(dirname):]   
        zf.write(tar,arcname)  
    zf.close()

# 删除之前存在的相关文件
filePaths = [nginxWeexJsonFilePath, jsFileInNginxPath, jsZipFileInNginxPath, imgFileInNginxPath, imgZipFileInNginxPath, jsFileInNginxPath2, jsZipFileInNginxPath2]
for filePath in filePaths:
    if os.path.exists(filePath):
        os.system('rm -rf ' + filePath)

# reload(sys)
# sys.setdefaultencoding("utf-8")
pageDicts = []
weexJsonDict={}
jsFileInNginxPaths = []
os.system('weex compile src/ /usr/local/var/www/bundle')
os.system('echo .......... processing ..........')

#检查incluce文件夹
includeFolderPath = os.path.abspath(os.curdir)+'/src/include'
if os.path.exists(includeFolderPath):
    if os.path.exists(jsFileInNginxPath+'/include'):
        #检查遗漏的js文件
        f_list = os.listdir(includeFolderPath)
        for i in f_list:
            if os.path.splitext(i)[1] == '.js':
                os.system('cp -r ' +  includeFolderPath +'/'+i +' '+ jsFileInNginxPath+'/include/'+i)

    else:
        #include文件里不包含vue文件
        os.system('cp -r ' + includeFolderPath +' '+ jsFileInNginxPath+'/include')


imgsPath = os.path.abspath(os.curdir)+'/src/imgs'
if os.path.exists(imgsPath):
    os.system('cp -r ' + imgsPath +' '+ imgFileInNginxPath)
    zip_dir(imgsPath,imgZipFileInNginxPath)



for parent,dirnames,filenames in os.walk(jsFileInNginxPath):
    for filename in filenames:
        path = os.path.join(parent, filename)
        if path.endswith('.js'):
            jsFileInNginxPaths.append(path)

# 压缩bundle文件夹为bundle.zip
zip_dir(jsFileInNginxPath,jsFileInNginxPath+'.zip')

#写入weex.json
if jsFileInNginxPaths.count > 0:
    localIP = get_host_ip()
    baseUrl = "http://" + localIP + ":8888/"
    for jsFileInNginxPath in jsFileInNginxPaths:
        jsFileInNginxPaths = jsFileInNginxPath.replace(nginxServePath, baseUrl)
        jsFileName = os.path.basename(jsFileInNginxPath)
        # m = md5.new()
        # m.update(jsFileInNginxPath)
        jsFileMD5 = GetFileMd5(jsFileInNginxPath)
        pageDicts.append({"md5":jsFileMD5,"page":jsFileName,"url":jsFileInNginxPaths})
    weexJsonDict["pages"] = pageDicts
    weexJsonDict["patch"] = {}
    # m = md5.new()
    # m.update(jsFileInNginxPath+'.zip')
    # bundleZipFileMD5 = m.hexdigest()
    print('zipPatch'+nginxServePath + 'bundle.zip')
    bundleZipFileMD5 = GetFileMd5(nginxServePath + 'bundle.zip')
    weexJsonDict["zip"] = {"md5":bundleZipFileMD5,"url":baseUrl+'bundle.zip'}
    jsonStr = json.dumps( weexJsonDict, ensure_ascii=False, encoding='UTF-8')
    print('jsonStr'+jsonStr)
    with open(nginxWeexJsonFilePath, 'wt') as f:
        f.write(jsonStr)
    os.system('echo .......... done ..........')