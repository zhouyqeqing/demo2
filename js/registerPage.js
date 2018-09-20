window.onload = function () {
    let contentVue = new Vue({
        el: '#content',
        data: {
            name: "",
            password1: "",
            password2: "",
            invitationCode: "",
            verificationCode: "",
        },
        methods: {
            nameBackspace: function () {
                this.name = "";
            },
            password1Backspace: function () {
                this.password1 = "";
            },
            password2Backspace: function () {
                this.password2 = "";
            },
            invitationCodeBackspace: function () {
                this.invitationCode = "";
            },
            verificationCodeBackspace: function () {
                this.verificationCode = "";
            },
            submission: function () {
                switch (false) {
                    case !!this.name :
                        errorThrow('请输入用户名');
                        break;
                    case (this.name.length >= 6 && this.name.length <= 12) :
                        errorThrow('用户名的长度不符合要求');
                        break;
                    case !!this.password1 :
                        errorThrow('请输入密码');
                        break;
                    case (this.password1.length >= 6 && this.password1.length <= 18) :
                        errorThrow('密码长度不符合要求');
                        break;
                    case (this.password1 === this.password2) :
                        errorThrow('二次密码输入不一致');
                        break;
                    case !!this.invitationCode :
                        errorThrow('请输入邀请码');
                        break;
                    case (this.invitationCode === "123456") :
                        errorThrow('邀请码错误');
                        break;
                    case !!this.verificationCode :
                        errorThrow('请输入验证码');
                        break;
                    case (this.verificationCode === "3n3D") :
                        errorThrow('验证码错误');
                        break;
                    case false :
                        errorThrow('注册成功,你的密钥为：0000000001          如忘记密码，可以使用密钥找回密码。 在系统中可以查看你的密钥');
                        //window.location.href = "index.php";
                        break;
                }
            },
            tap: function (methodName) {
                let key = true,
                    target = event.target,
                    oldDate = new Date(),
                    oldTouch = event.touches[0],
                    oldX = oldTouch.pageX,
                    oldY = oldTouch.pageY;
                target.ontouchmove = function (e) {
                    let newTouch = e.touches[0],
                        newX = newTouch.pageX,
                        newY = newTouch.pageY;
                    if (newX - oldX > 20 || newX - oldX < -20 || newY - oldY > 20 || newY - oldY < -20) {
                        key = false;
                    }
                };
                target.ontouchend = function () {
                    let newDate = new Date();
                    if (newDate - oldDate <= 300 && key) {
                        methodName();
                    }
                };
            }
        }
    });
    let errorVue = new Vue({
        el: '#error',
        data: {
            errorMessage: '',
            errorSeen: false
        },
        methods: {
            reset: function () {
                if (this.errorMessage.slice(0, 4) === "注册成功") {
                    window.location.href = "index.php";
                } else {
                    this.errorSeen = false;
                    this.errorMessage = '';
                    contentVue.password1 = '';
                    contentVue.password2 = '';
                }
            },
            tap: function (methodName) {
                let key = true,
                    target = event.target,
                    oldDate = new Date(),
                    oldTouch = event.touches[0],
                    oldX = oldTouch.pageX,
                    oldY = oldTouch.pageY;
                target.ontouchmove = function (e) {
                    let newTouch = e.touches[0],
                        newX = newTouch.pageX,
                        newY = newTouch.pageY;
                    if (newX - oldX > 20 || newX - oldX < -20 || newY - oldY > 20 || newY - oldY < -20) {
                        key = false;
                    }
                };
                target.ontouchend = function () {
                    let newDate = new Date();
                    if (newDate - oldDate <= 300 && key) {
                        methodName();
                    }
                };
            }
        }
    });

    function errorThrow(errorText) {   //抛出错误，阻止跳转
        errorVue.errorMessage = errorText;
        errorVue.errorSeen = true;
    }
};