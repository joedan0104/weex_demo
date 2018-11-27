# Introduction

This boilerplate is targeted towards large, serious projects and assumes you are somewhat familiar with Webpack and `weex-loader`. 

## Quickstart

To use this template, scaffold a project with [weexpack v1.1.1+](https://github.com/weexteam/weex-pack).

``` bash
$ npm install -g weex-toolkit
$ weex create my-project # default will create the webpack template
$ cd my-project && npm start
```

## How to use less/sass/pug

Take `sass` for example:

```
$ npm i node-sass sass-loader --save
```

Then, you just need to change the `style` tag as: `<style lang="sass"><style>`.

## How to create your own template

See [How-to-create-your-own-template](https://github.com/weex-templates/How-to-create-your-own-template).


# Weex项目构建和部署
1、项目根目录下进行构建（最好使用WebStorm）
$ weex compile src dist

2、添加对应的平台

$ weex platform add [android|ios]

3.  构建android和ios的APP并且运行

$ weex run android

构建完成以后，会在项目的platform下生成安卓的APP 项目。

4. 通过Android Studio导入生成的APP，进行编译和安装。

这样可以正常使用app程序了。
