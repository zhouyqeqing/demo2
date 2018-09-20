window.onload = function () {
    let timeoutID = 0;
    let contentVue = new Vue({
        el: '#content',
        data: {
            name: "",
            password: "",
            tip1Message: "",
            checkbox: true,
            textSeen: false,
            passwordSeen: false,
        },
        methods: {
            forgetMethod: function () {
                window.location.href = "forgetPage.php";
            },
            newIDMethod: function () {
                window.location.href = "registerPage.php";
            },
            landMethod: function () {
                if (!this.name) {
                    this.tip1Message = "你还没有输入账号！";
                    clearTimeout(timeoutID);
                    timeoutID = setTimeout(function () {
                        contentVue.tip1Message = "";
                    }, 3000)
                } else if (!this.password) {
                    this.tip1Message = "你还没有输入密码！";
                    clearTimeout(timeoutID);
                    timeoutID = setTimeout(function () {
                        contentVue.tip1Message = "";
                    }, 3000)
                } else {
                    //*************************此处还需加入Ajax请求，然后判断是应该跳转还是发出错误警告**********************************************
                    window.location.href = "homePage.php?" + encodeURI(encodeURI("name=" + this.name + "&password=" + this.password));
                }
            },
            textBackspace: function () {
                this.name = "";
            },
            passwordBackspace: function () {
                this.password = "";
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
        },
        watch: {
            name: function () {
                this.name ? this.textSeen = true : this.textSeen = false;
            },
            password: function () {
                this.password ? this.passwordSeen = true : this.passwordSeen = false;
            }
        }
    });
    console.log(contentVue.name + "分隔符" + contentVue.password);
};