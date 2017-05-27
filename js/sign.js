 $(function () {
        //将checkbox渲染为icheck样式
        // $('input').iCheck({
        //     checkboxClass: 'icheckbox_square-red',
        //     radioClass: 'iradio_square-red',
        //     increaseArea: '20%' // optional
        // });

        //此处为校验的核心代码
        $("#register-form").bootstrapValidator({
            submitHandler: function (valiadtor, loginForm, submitButton) {

                valiadtor.defaultSubmit();
            },
            fields: {
                userName: {
                    validators: {
                        notEmpty: {
                            message: '用户名不能为空'
                        },
                        stringLength: {
                            /*长度提示*/
                            min: 4,
                            max: 30,
                            message: '用户名长度必须在4到30之间'
                        }
                    }
                },
                loginName: {
                    validators: {
                        notEmpty: {
                            message: '登录邮箱名或用户名不能为空'
                        },
                        stringLength: {
                            /*长度提示*/
                            min: 4,
                            max: 30,
                            message: '用户名长度必须在4到30之间'
                        },
                        threshold: 4,//只有4个字符以上才发送ajax请求
                        remote: {
                            url: "${basePath}/oauth/checkUnique",
                            data: function (validator) {
                                return {
                                    loginName: $("#loginName").val(),
                                    userId: null
                                };
                            },
                            message: '该登录名已被使用，请使用其他登录名',
                            delay:2000
                        }
                    }
                },
                password: {
                    validators: {
                        notEmpty: {
                            message: '密码不能为空'
                        },
                        stringLength: {
                            /*长度提示*/
                            min: 6,
                            max: 30,
                            message: '密码长度必须在6到30之间'
                        },
                        different: {//不能和用户名相同
                            field: 'loginName',//需要进行比较的input name值
                            message: '不能和用户名相同'
                        },
                        regexp: {
                            regexp: /^[a-zA-Z0-9_\.]+$/,
                            message: '密码由数字字母下划线和.组成'
                        }
                    }
                },
                repassword: {
                    message: '密码无效',
                    validators: {
                        notEmpty: {
                            message: '密码不能为空'
                        },
                        stringLength: {
                            min: 6,
                            max: 30,
                            message: '用户名长度必须在6到30之间'
                        },
                        identical: {//相同
                            field: 'password',
                            message: '两次密码不一致'
                        },
                        different: {//不能和用户名相同
                            field: 'loginName',
                            message: '不能和用户名相同'
                        },
                        regexp: {//匹配规则
                            regexp: /^[a-zA-Z0-9_\.]+$/,
                            message: '密码由数字字母下划线和.组成'
                        }
                    }
                }

            }
        });

    });