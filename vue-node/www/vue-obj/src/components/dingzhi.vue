
<template>
    <div>
        <transition enter-active-class="animated zoomInLeft">
            <form action="dingzhi-succ.html">
                <input type="hidden" name="mdd1" id="mdd1">
                <input type="hidden" name="mdd2" id="mdd2">
                <div class="dtop">
                    <div class="container">
                        <div class="odtop">
                            <div class="row">
                                <div class="col-xs-2 "><a href="javascript:window.history.go(-1)"><img src="../images/ico/ico_back.png"  alt=""></a></div>
                                <div class="col-xs-10">专属旅游顾问  让您轻松预约</div>
                            </div>
                        </div><!--//.odtop-->
                        <div class="dform">

                            <div class="row">
                                <div class="col-xs-6"><input type="text" class="dz_txt" placeholder="姓名"></div>
                                <div class="col-xs-6"><input type="text" class="dz_txt" placeholder="手机号"></div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 ">
                                    <div class="sel_mdd">
                                        <a class="purple1">目的地<span>（若暂无目的地，可不填写）</span></a>
                                        <div class="mddbox">
                                            <div class="mddtll"><span class="">目的地<i class="icon iconfont1 mddclose">&#xe617;</i></span><span class="mddspan closemdd"></span>
                                            </div><!--//.mddtll-->
                                            <div class="mddcon">
                                                <a data-val="1">北美洲</a>
                                                <a data-val="2">南美洲</a>
                                                <a data-val="3">非洲&中东</a>
                                                <a data-val="4">欧洲</a>
                                                <a data-val="5">中国</a>
                                                <a data-val="6">港澳台</a>
                                            </div><!--//.mddcon-->
                                            <div class="mddcon2">
                                                <ul>
                                                    <li>
                                                        <a data-val="1">二级</a>
                                                        <a data-val="2">南美洲</a>
                                                        <a data-val="3">非洲&中东</a>
                                                        <a data-val="4">欧洲</a>
                                                        <a data-val="5">中国</a>
                                                        <a data-val="6">港澳台</a>
                                                    </li>
                                                    <li>
                                                        <a data-val="1">二级</a>
                                                        <a data-val="2">南美洲</a>
                                                        <a data-val="3">非洲&中东</a>
                                                        <a data-val="4">欧洲</a>
                                                        <a data-val="5">中国</a>
                                                        <a data-val="6">港澳台</a>
                                                    </li>
                                                    <li>
                                                        <a data-val="1">二级</a>
                                                        <a data-val="2">南美洲</a>
                                                        <a data-val="3">非洲&中东</a>
                                                        <a data-val="4">欧洲</a>
                                                        <a data-val="5">中国</a>
                                                        <a data-val="6">港澳台</a>
                                                    </li>
                                                    <li>
                                                        <a data-val="1">北美洲</a>
                                                        <a data-val="2">二级</a>
                                                        <a data-val="3">非洲&中东</a>
                                                        <a data-val="4">欧洲</a>
                                                        <a data-val="5">中国</a>
                                                        <a data-val="6">港澳台</a>
                                                    </li>
                                                    <li>
                                                        <a data-val="1">北美洲</a>
                                                        <a data-val="2">南美洲</a>
                                                        <a data-val="3">二级&中东</a>
                                                        <a data-val="4">欧洲</a>
                                                        <a data-val="5">中国</a>
                                                        <a data-val="6">港澳台</a>
                                                    </li>
                                                    <li>
                                                        <a data-val="1">北美洲</a>
                                                        <a data-val="2">二级</a>
                                                        <a data-val="3">非洲&中东</a>
                                                        <a data-val="4">欧洲</a>
                                                        <a data-val="5">中国</a>
                                                        <a data-val="6">港澳台</a>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div><!--//.mddbox-->
                                    </div>
                                </div>

                            </div>
                            <div class="row">
                                <div class="col-xs-6 demo">
                                    <select>
                                        <option value="0">出行天数</option>
                                        <option value="1">不确定</option>
                                        <option value="2">1-5天</option>
                                        <option value="3">6-10天</option>
                                        <option value="4">11天以上</option>
                                    </select>
                                </div>
                                <div class="col-xs-6 demo">
                                    <input type="text" class="dz_txt"  id="dateTime"  placeholder="出发日期"  date-time="2016-4-7,2016-4-8,2016-4-17,2016-4-18" readonly>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-6 demo">
                                    <select>

                                        <option value="0">不确定(成人)</option>
                                        <option value="1">1人(成人)</option>
                                        <option value="1">2人(成人)</option>
                                        <option value="1">3人(成人)</option>
                                        <option value="1">4人(成人)</option>
                                        <option value="1">5人以上(成人)</option>
                                    </select>
                                </div>
                                <div class="col-xs-6 demo">
                                    <select>

                                        <option value="0">不确定(儿童)</option>
                                        <option value="1">1人(儿童)</option>
                                        <option value="1">2人(儿童)</option>
                                        <option value="1">3人(儿童)</option>
                                        <option value="1">4人(儿童)</option>
                                        <option value="1">5人以上(儿童)</option>
                                    </select>
                                </div>
                            </div>

                        </div><!--//.dform-->
                    </div>
                </div><!--//.dtop-->
                <div class="dzbot">
                    <input type="submit" value="预约定制" class="sub_dz">
                </div><!--//.dzbot-->
                <div class="dztitle">
                    <div class="container">
                        <div class="dztll">—— 上海 ——</div><!--//.dztll-->
                    </div>
                </div><!--//.dztitle-->
            </form>
        </transition>


        <dingzhiswiper></dingzhiswiper>
    </div>
</template>


<script>
    import dingzhiswiper from './dingzhiswiper.vue'
    export default {
        data(){
            return {}
        },
        components:{
            dingzhiswiper
        }
    }
</script>
<link rel="stylesheet" type="text/css" href="css/manhuaDate.1.0.css">
<!--//.日历控件-->
<script type="text/javascript" src="js/jquery-1.7.2.min.js"></script>
<script type="text/javascript" src="js/manhuaDate.1.0.js"></script>
<script type="text/javascript">
    $(function(){

        $("#dateTime").manhuaDate({
            Event : "click",//可选
            Left : 0,//弹出时间停靠的左边位置
            Top : 0,//弹出时间停靠的顶部边位置
            fuhao : "-",//日期连接符默认为-
            isTime : false,//是否开启时间值默认为false
            beginY : 2016,//年份的开始默认为1949
            endY :2017//年份的结束默认为2049
        });
    })
</script>
<!--form美化-->

<!-- custom jquery-ui with  minimum requirements for Custom scroll bar -->
<script src="js/jquery-ui-1.10.2.custom.min.js" type="text/javascript"></script>

<!-- Fancy fields js & css files -->
<script src="js/fancyfields-1.2.min.js" type="text/javascript"></script>
<link href="css/fancyfields.css" rel="stylesheet" type="text/css" />

<!-- Fancy fields add-on for custom scroll bar -->
<script src="js/fancyfields.csb.min.js" type="text/javascript"></script>

<script type="text/javascript">
   window.onload=function () {
       $(document).ready(function () {
           $(".demo").fancyfields();
           $(".customSBDemo").fancyfields({ customScrollBar: true });

           $("#demoReset").click(function () {
               $(".demo").fancyfields("reset");
               $(".customSBDemo").fancyfields("reset");
           });
       });
   }
</script>



