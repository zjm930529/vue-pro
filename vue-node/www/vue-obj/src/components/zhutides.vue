<template>
    <div class="container">
        <div class="qtll">
            <div class="row">
                <div class="col-xs-2">
                    <a href="javascript:window.history.go(-1)" >
                        <img src="../images/ico/ico_back.png" width="35" alt="">
                    </a>
                </div>
                <div class="col-xs-8 qtllcon">
                    <img src="../images/qstll.jpg" alt="">
                </div>
                <div class="col-xs-2 txr">
                    <a href="javascript:;">
                        <img src="../images/ico/ico_sai.png" alt="">
                    </a>
                </div>
            </div>
        </div><!--//.qtll-->
        <div class="qmain">
            <ul>
                <transition-group
                        enter-active-class="animated zoomInLeft"
                >
                <li v-for="(item,index) in list" :key="item.id">
                    <div class="cour">{{item.title}}</div>
                    <div class="q_img">


                           <router-link
                                   :to="'/detail/'+item.id"
                                   :key="item.id"
                           >
                               <img :src="item.src" alt="">
                           </router-link>

                    </div>
                    <div class="q_con">
                        <div class="q_title"><router-link to="/detail">【梦寻香格里拉】丽江金茂君悦＋恬居香</router-link></div>
                        <div class="q_info">探访香格里拉，寻找心中的日月</div>
                    </div><!--//.q_con-->
                </li>
                </transition-group>
            </ul>
        </div>
        <div class="irm_more">
            <a href="javascript:;"><img src="../images/ico/ico_down.png" alt="">查看更多</a>
        </div>
        <div class="qsx"></div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
            list:[]
            }
        },
        mounted(){
            //this.$store.dispatch('showloading')
            //console.log(this.axios)
            this.axios({
                url:'../../data/dt.data',
                methods:'get'
            }).then((res)=>{
                   //this.$store.dispatch('hideloading')
                   this.list=res.data
            }).catch((res)=>{
                console.log(res)
            })
        }
    }
</script>