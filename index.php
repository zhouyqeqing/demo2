<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="style/index.css">
    <script src="tool/vue.js"></script>
    <script src="tool/jquery-3.3.1.js"></script>
    <script src="js/index.js"></script>
    <title>登陆</title>
</head>
<body>
<div id="content">
    <div id="img">
        <img src="img/logo.jpg" alt="" id="logo">
    </div>
    <div id="main">
        <ul>
            <li>
                <input type="text" v-model="name" placeholder="请输入你的用户名" id="name" class="input">
                <span v-if="textSeen" id="deleteIco1" @touchstart="tap(textBackspace)">
                        <img src="img/delete.png" alt="" class="delete">
                </span>
            </li>
            <li>
                <input type="password" v-model="password" placeholder="请输入你的密码" id="password" class="input">
                <span v-if="passwordSeen" id="deleteIco2" @touchstart="tap(passwordBackspace)">
                        <img src="img/delete.png" alt="" class="delete">
                </span>
            </li>
        </ul>
        <div id="main1">
            <input type="checkbox" id="remember" v-model="checkbox">
            <label for="remember">记住登陆状态</label>
        </div>
        <div id="main2" @touchstart="tap(landMethod)">登陆</div>
    </div>
    <div id="footer">
        <span id="forget" @touchstart="tap(forgetMethod)">忘了密码？</span>
        <span id="newID" @touchstart="tap(newIDMethod)">注册新账号</span>
    </div>
    <div id="tip1" v-if="tip1Message">
        <span id="tip1Ico"></span>
        <span id="tip1Message">{{tip1Message}}</span>
    </div>
</div>
</body>
</html>

<?php
/**
 * Created by PhpStorm.
 * User: 周叶青
 * Date: 2018/8/5 0005
 * Time: 19:32
 */