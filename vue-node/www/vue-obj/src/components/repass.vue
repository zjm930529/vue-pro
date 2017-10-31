<template>
    <div class="container">
        <div class="tllcolse"><a href="login.html"><img src="../images/ico/ico_close.png" alt=""></a></div><!--//.tllcolse-->
        <div class="alogo"><a href="index.html"><img src="../images/logo1.png" alt=""></a></div><!--//.alogo-->
        <form>
            <div class="lobox">
                <div class="container">

                    <div class="row lolist">
                        <div class="col-xs-2"><img src="../images/ico/ico_phone.png" alt=""></div>
                        <div class="col-xs-10 pdlnone "><input type="text" class="txt_com" placeholder="手机号码"></div>
                    </div>
                    <div class="row lolist">
                        <div class="col-xs-2"><img src="../images/ico/ico_mail.png" alt=""></div>
                        <div class="col-xs-5 pdlnone "><input type="text" class="txt_com" placeholder="短信验证码"></div>
                        <div class="col-xs-5 pdlnone "><input type="button" class="btn_com" id="btnyzm" value="发送验证码"></div>
                    </div>
                    <div class="row lolist">
                        <div class="col-xs-2"><img src="../images/ico/ico_pass.png" alt=""></div>
                        <div class="col-xs-10 pdlnone "><input type="password" class="txt_com" placeholder="新密码"></div>
                    </div>
                    <div class="row lolist">
                        <div class="col-xs-2"><img src="../images/ico/ico_pass.png" alt=""></div>
                        <div class="col-xs-10 pdlnone "><input type="password" class="txt_com" placeholder="确认密码"></div>
                    </div>
                </div>
            </div><!--//.lobox-->
            <div class="lopush">
                <div class="row">
                    <div class="col-xs-12 txc"><input type="submit" class="sub_com" value="完成" ></div>

                </div>
            </div><!--//.lopush-->

        </form>
    </div>
</template>
<!--<script type="text/javascript">-->
  <!--window.onload=function () {-->
      <!--var wait=60;-->
      <!--function time(o) {-->
          <!--if (wait == 0) {-->
              <!--o.removeAttribute("disabled");-->
              <!--o.value="发送验证码";-->
              <!--wait = 60;-->
          <!--} else {-->
              <!--o.setAttribute("disabled", true);-->
              <!--o.value="(" + wait + ")后可重新发送";-->
              <!--wait&#45;&#45;;-->
              <!--setTimeout(function() {-->
                      <!--time(o)-->
                  <!--},-->
                  <!--1000)-->
          <!--}-->
      <!--}-->
      <!--document.getElementById("btnyzm").onclick=function(){time(this)}-->
  <!--}-->
<!--</script>-->