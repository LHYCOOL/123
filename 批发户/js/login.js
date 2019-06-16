$(function () {
    

    let isUsePwd = true;
    let formNote = $("#normalLogin");
    let formPwd = $(".bdbox");
    let oPhone = $(".phone:visible");
    let oNoteCode = $(".register-yzm:visible");
    let regPhone = /^[1][3,4,5,7,8]\d{9}$/;
    let oTishi = $(".sign-hint");


    // 使用密码或者短信登录   
    $(".note-text").click(function () {
        isUsePwd = !isUsePwd;
        if (isUsePwd) {
            // $(this).text("短信快捷登录丨注册");
            formNote.eq(0).hide();
            formPwd.eq(1).show();
        }
    });
    $(".note-text1").click(function () {
        isUsePwd = !isUsePwd;
        if (isUsePwd){
            // $(this).text("使用密码登录");
            formNote.eq(0).show();
            formPwd.eq(1).hide();
            $(".phone").attr("placeholder", "请输入您的手机号码")
        }
    });

   
    $(".btn-hd-login").click(() => {
        // $(".ly_r").hide();
        // $(".ly_rt").show();
        oTishi.hide();
        let userPhone = myCookie.getItem("userPhone");
        let userPwd = myCookie.getItem("userPwd");
        if (userPhone && userPwd) {
            let o = {
                userPhone,
                userPwd
            };
            if ($(".login-box").is(":visible")) {
                netWork($.param(o));
            }
        }
    });

    
    // $(".ly_r .status").click(function () {
    //     if ($(this).is(":checked")) {
    //         $(".ly_r .sign-btn-submit")
    //             .attr("disabled", false)
    //             .css({
    //                 "background": "#f1156f",
    //                 "color": "white"
    //             }).removeClass("jinyong");
    //     } else {
    //         $(".ly_r .sign-btn-submit")
    //             .attr("disabled", true)
    //             .addClass("jinyong");
    //     }
    // });

    // 开始注册模块
    let noteCode = "";
    let oGetNote = $("#span_register");
    let oPwd = $("#passwd:visible");
    // 验证码
    oGetNote.click(function () {
        oPhone = $("#phone");
        oPwd = $("#passwd:visible");
        // 手机号验证
        let res = regPhone.test(oPhone.val());
        if (!res) {
            oTishi.show().children("p").text("请输入有效的11手机号码");
            oPhone.focus();
            return;
        }
        oTishi.hide();

        noteCode = getNumber();
        console.log(noteCode);
        alert("你的验证吗是：" + noteCode);

        let Nowtime = 60;
        let timer = setInterval(() => {
            Nowtime--;
            oGetNote.text(Nowtime + "秒后重新获取");
            if (Nowtime == 0) {
                clearInterval(timer);
                oGetNote.attr("disabled", true).text("获取验证码").removeClass("jinyong");
            }
        }, 1000);
        oGetNote.attr("disabled", false).addClass("jinyong");

    });

    // 点击注册
    $(".register-btn").click(function () {
        oPhone = $("#phone");
        oPwd = $("#passwd:visible");
        // 手机号验证
        let res = regPhone.test($.trim(oPhone.val()));
        if (!res) {
            oTishi.show().children("p").text("请输入有效的11手机号码");
            oPhone.focus();
            return;
        }
        oTishi.hide();
        // 验证验证码是否正确
        if ($.trim(oNoteCode.val()) != noteCode) {
            oTishi.show().children("p").text("验证码不正确");
            oNoteCode.focus();
            return;
        }
        // 验证密码长度
        let pwd = $.trim(oPwd.val());
        if (pwd.length < 6 || pwd.length > 16) {
            oTishi.show().children("p").text("密码长度为6到16位");
            oPwd.focus();
            return;
        }
        // 发送请求，查看手机号是否注册，未注册的就给它注册
        $.ajax({
            "url": "api/register.php",
            "data": {
                "userPhone": oPhone.val(),
                "userPwd": pwd,
            },
            "success": function (res, status, xhr) {
                if (status == "success") {
                    console.log();
                    if (xhr.responseText == "ok") {
                        alert("注册成功！请登录");
                        location.href = "login.html";
                    }

                    if (xhr.responseText == "用户已经存在") {
                        oTishi.show().children("p").text("该手机号码已经注册,请直接登录");
                    }
                }
            }
        });
    });

    // 登录模块
    let userPhone = myCookie.getItem("userPhone");
    let userPwd = myCookie.getItem("userPwd");
    if (userPhone && userPwd) {
        let o = {
            userPhone,
            userPwd
        };
        if ($(".login-box").is(":visible")) {
            netWork($.param(o));
        }
    } else {
        $(".login-btn").click(function () {
            oPhone = $(".phone:visible");
            oPwd = $("#pswds:visible");
            let phone = $.trim(oPhone.val());
            let pwd = $.trim(oPwd.val());

            // 手机号验证
            let res = regPhone.test($.trim(oPhone.val()));
            if (!res) {
                oTishi.show().children("p").text("请输入有效的11手机号码");
                oPhone.focus();
                return;
            }
            oTishi.hide();

            if ($(".left .status:visible").is(":checked")) {
                myCookie.setItem("userPhone", phone, 14);
                myCookie.setItem("userPwd", pwd, 14);
            }
            netWork(`userPhone=${phone}&userPwd=${pwd}`);
        });
    }

    function netWork(queryString) {
        $.get({
            url: "api/login.php",
            data: queryString,
            success(res) {
                if (JSON.parse(res) == "success") {
                    location.href = "index.html";
                } else {
                    myCookie.clear();
                }
            }
        });
    }
})