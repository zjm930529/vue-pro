<template>
    <div class="container">
        <div class="tllcolse">
            <a href="javascript:window.history.go(-1)">
                <img src="../images/ico/ico_close.png" alt="">
            </a>
        </div><!--//.tllcolse-->
        <div class="alogo">
            <router-link to="/home">
                <img src="../images/logo1.png" alt="">
            </router-link>
        </div><!--//.alogo-->
        <form  action="myoujia.html">
            <div class="lobox1">
                <div class="lonav">
                    <!--<div class="sjdl cur col-xs-6">手机登录</div>-->
                    <div class="zhdl  col-xs-6">账户登录</div>
                </div><!--//.lonav-->
                <div class="lonavbox">
                    <div class="container" >
                        <div class="row lolist">
                            <div class="col-xs-2"><img src="../images/ico/ico_name.png" alt=""></div>
                            <div class="col-xs-10 pdlnone ">
                                <input type="text" class="txt_com" placeholder="用户名" v-model="username">
                            </div>
                        </div>

                        <div class="row lolist">
                            <div class="col-xs-2"><img src="../images/ico/ico_pass.png" alt=""></div>
                            <div class="col-xs-10 pdlnone ">
                                <input type="password" class="txt_com" placeholder="密码" v-model="userpwd">
                            </div>
                        </div>
                        <div class="row lolist">
                            <div class="col-xs-2"><img src="../images/ico/ico_yzm.png" alt=""></div>
                            <div class="col-xs-5 pdlnone "><input type="text" class="txt_com" placeholder="请输入验证码"></div>
                            <div class="col-xs-5 pdlnone  txr"><img src="../images/yzm.png" alt="" class="yzm"></div>
                        </div>

                    </div>
                </div><!--//.lonavbox-->
            </div><!--//.lobox-->
            <div class="lopush">
                <div class="row">
                    <div class="col-xs-6 txl">
                       <router-link to="/reg"  >
                           <a class=" sub2_com"  >注册</a>
                       </router-link>
                    </div>
                    <div class="col-xs-6 txr">
                        <!--<router-link >-->
                            <input type="button" class="sub_com" value="登录" @click="ulogin()" >
                        <!--</router-link>-->

                    </div>
                </div>
            </div><!--//.lopush-->
            <div class="foget">
                <router-link to="/repass">忘记密码？</router-link>
            </div>
        </form>
    </div>
</template>
<!--form美化-->
<!--<script type="text/javascript" src="js/jquery-1.9.1.min.js"></script>-->
<!-- custom jquery-ui with  minimum requirements for Custom scroll bar -->
<!--<script src="js/jquery-ui-1.10.2.custom.min.js" type="text/javascript"></script>-->

<!-- Fancy fields js & css files -->
<!--<script src="js/fancyfields-1.2.min.js" type="text/javascript"></script>-->
<link href="css/fancyfields.css" rel="stylesheet" type="text/css" />

<!-- Fancy fields add-on for custom scroll bar -->
<!--<script src="js/fancyfields.csb.min.js" type="text/javascript"></script>-->

<script type="text/javascript">
//    $(document).ready(function () {
//        $(".demo").fancyfields();
//        $(".customSBDemo").fancyfields({ customScrollBar: true });
//
//        $("#demoReset").click(function () {
//            $(".demo").fancyfields("reset");
//            $(".customSBDemo").fancyfields("reset");
//        });
//    });
</script>
<script>
    export default {
        data(){
            return{
                username:'',
                userpwd:''
            }
        },
        methods:{
            ulogin(){
                this.axios({
                    url: 'http://localhost:3000/login',
                    withCredentials:true,
                    method: 'get',
                    params:{
                        username:this.username,
                        userpwd:this.userpwd
                    }
                }).then((res) => {
                   let info = res.data // console.log(res.data
                    //console.log(info)
                    if(info.err==0){
                        //alert('ok')
                        this.$router.push({path:"/user"})
                    }
                }).catch((res) => {
                    console.log(res)
                });
            }
        }
//        },
//        created(){
//            this.qr();
//        }
    }
</script>