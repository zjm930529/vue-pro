<template>
    <div class="ibanner">
        <div class="ibposi">
            <div class="container">
                <div class="row">
                    <div class="col-xs-2 txl">
                        <a href="javascript:;">
                            <img src="../../images/ico/ico13.png" alt="">
                        </a>
                    </div>
                    <div class="col-xs-8"></div>
                    <router-link
                            active-class="col-xs-2 txr"
                            tag="div"
                            to="/login"
                            >
                        <a href="javascript:;">
                            <img src="../../images/ico/ico14.png" alt="">
                        </a>
                    </router-link>
                </div>
            </div>
        </div><!--//.ibposi-->
        <div class="ibcon">
            <router-link to="/dingzhi">
                <img src="../../images/i_top.jpg" alt="" width="100%">
            </router-link>
        </div><!--//.ibcon-->
    </div><!--//.ibanner-->

</template>
<script>
    import {mapGetters} from 'vuex'
    export default {
        data(){
            return{
            }
        },
        computed:mapGetters([
            'top','btn'
        ])
    }
</script>
<style></style>