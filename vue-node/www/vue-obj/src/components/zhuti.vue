<template>
    <div>
        <zhutides></zhutides>
        <!--<btn v-show="btn"></btn>-->
        <zt></zt>
    </div>
</template>

<script>
    import zhutides from './zhutides.vue'
//    import btn from './index/btn.vue'
    import zt from './zt.vue'

export default{
    data(){
        return {}
    },
    components:{
        zhutides,zt
    }
}
</script>


<!--<script type="text/javascript">-->
    <!--function sai(){-->
        <!--$("body").addClass("sbody");-->
        <!--$(".saibox").animate({left:"15%"});-->
        <!--$(".sbody>div.container>.qmain").animate({right:"40%"});-->
    <!--}-->
    <!--function closesai(){-->
        <!--$("body").removeClass("sbody");-->
    <!--}-->

<!--</script>-->
<style></style>