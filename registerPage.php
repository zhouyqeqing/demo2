<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="style/registerPage.css">
    <script src="tool/vue.js"></script>
    <script src="tool/jquery-3.3.1.js"></script>
    <script src="js/registerPage.js"></script>
    <title>注册</title>
</head>
<body>
<div id="content">
    <form action="" id="form" method="post">
        <ul>
            <li>
                <input type="text" placeholder="输入用户名：6-12位" class="input" v-model="name" name="name">
                <span v-if="name" class="inputIco" @touchstart="tap(nameBackspace)">
                        <img src="img/delete.png" alt="" class="delete">
                </span>
            </li>
            <li>
                <input type="password" placeholder="输入密码：6-18位" class="input" v-model="password1" name="password1">
                <span v-if="password1" class="inputIco" @touchstart="tap(password1Backspace)">
                        <img src="img/delete.png" alt="" class="delete">
                </span>
            </li>
            <li>
                <input type="password" placeholder="确认密码：再输入一遍密码" class="input" v-model="password2" name="password2">
                <span v-if="password2" class="inputIco" @touchstart="tap(password2Backspace)">
                        <img src="img/delete.png" alt="" class="delete">
                </span>
            </li>
            <li>
                <input type="text" name="invitationCode" placeholder="输入邀请码" class="input" v-model="invitationCode">
                <span v-if="invitationCode" class="inputIco" @touchstart="tap(invitationCodeBackspace)">
                        <img src="img/delete.png" alt="" class="delete">
                </span>
            </li>
            <li>
                <input type="text" name="verificationCode" placeholder="输入验证码" id="verification"
                       v-model="verificationCode">
                <span v-if="verificationCode" id="inputIcon" @touchstart="tap(verificationCodeBackspace)">
                        <img src="img/delete.png" alt="" class="delete">
                </span>
                <span id="verificationSpan"><img src="img/verification.png" alt="验证码图片" id="verificationImg"></span>
            </li>
        </ul>
        <input type="submit" value="注 册" id="submit" @touchstart.prevent="tap(submission)">
    </form>
</div>
<div id="error" v-if="errorSeen">
    <div id="errorDiv">
        <div id="upDiv">{{errorMessage}}</div>
        <div id="downDiv" @touchstart="tap(reset)">确定</div>
    </div>
</div>
</body>
</html>

<?php
/**
 * Created by PhpStorm.
 * User: 周叶青
 * Date: 2018/8/6 0006
 * Time: 14:02
 */