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
        <br/><br/>
        <p>
            <input type="text" v-model="username"/>
        </p>
        <br/>
        <p>
            <input type="text" v-model="userpwd"/>
        </p>
        <br/>
        <router-link to="/reg">
            <input type="button" value="注册" @click="rg"/>
        </router-link>
        <router-link to="/login">
            <input type="button" value="登录"/>
        </router-link>

        <form>
            <!--<div class="lobox">-->
                <!--<div class="container">-->
                    <!--<div class="row lolist">-->
                        <!--<div class="col-xs-2"><img src="../images/ico/ico_name.png" alt=""></div>-->
                        <!--<div class="col-xs-10 pdlnone "><input type="text" class="txt_com" placeholder="用户名"></div>-->
                    <!--</div>-->
                    <!--<div class="row lolist">-->
                        <!--<div class="col-xs-2"><img src="../images/ico/ico_phone.png" alt=""></div>-->
                        <!--<div class="col-xs-10 pdlnone ">-->
                            <!--<input type="text" class="txt_com" placeholder="手机号码">-->
                        <!--</div>-->
                    <!--</div>-->
                    <!--<div class="row lolist">-->
                        <!--<div class="col-xs-2"><img src="../images/ico/ico_mail.png" alt=""></div>-->
                        <!--<div class="col-xs-5 pdlnone ">-->
                            <!--<input type="text" class="txt_com" placeholder="短信验证码">-->
                        <!--</div>-->
                        <!--<div class="col-xs-5 pdlnone ">-->
                            <!--<input type="button" class="btn_com" id="btnyzm" value="发送验证码">-->
                        <!--</div>-->
                    <!--</div>-->
                    <!--<div class="row lolist">-->
                        <!--<div class="col-xs-2"><img src="../images/ico/ico_pass.png" alt=""></div>-->
                        <!--<div class="col-xs-10 pdlnone "><input type="password" class="txt_com" placeholder="密码"></div>-->
                    <!--</div>-->
                    <!--<div class="row lolist">-->
                        <!--<div class="col-xs-2"><img src="../images/ico/ico_pass.png" alt=""></div>-->
                        <!--<div class="col-xs-10 pdlnone "><input type="password" class="txt_com" placeholder="确认密码"></div>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>&lt;!&ndash;//.lobox&ndash;&gt;-->
            <!--<div class="lopush">-->
                <!--<div class="row">-->
                    <!--<router-link-->
                            <!--active-class="col-xs-6 txl"-->
                            <!--to="/reg"-->
                    <!--&gt;<input type="button" class=" sub_com" value="注册" @click="rg()">-->
                    <!--</router-link>-->
                    <!--<router-link-->
                            <!--active-class="col-xs-6 txr"-->
                            <!--to="/login"-->
                    <!--&gt;<a  class="sub2_com">登录</a>-->
                    <!--</router-link>-->
                <!--</div>-->
            <!--</div>&lt;!&ndash;//.lopush&ndash;&gt;-->
            <!--<div class="lofoot demo">-->
                <!--<input type="checkbox" checked> <a href="agreement.html">同意游加旅游网协议</a>-->
            <!--</div>&lt;!&ndash;//.lofoot&ndash;&gt;-->
        </form>

    </div>
</template>
<script>
//    import '../css/fancyfields.css'
    export default {
        data(){
            return{
               username:'',
               userpwd:''
            }
        },
        methods:{
            rg(){
                this.axios({
                    url: 'http://localhost:3000/reg',
                    withCredentials:true,
                    method: 'get',
                    params:{
                        username:this.username,
                        userpwd:this.userpwd
                    }
                }).then((res) => {
                  //  console.log(res)
                    alert(res.data)
                }).catch((res)=>{
                     console.log(res)
                })
            }
        }
    }
</script>
<style></style>
