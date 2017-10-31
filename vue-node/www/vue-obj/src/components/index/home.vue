<template>
<div>
    <i_banner></i_banner>
    <itheme></itheme>
    <i_center></i_center>
    <irecom></irecom>
    <icomp></icomp>
    <partner></partner>

</div>
</template>
<script>

    import i_banner from './i_banner.vue'
    import i_center from './icomp.vue'
    import itheme from './itheme.vue'
    import irecom from './irecom.vue'
    import icomp from './icomp.vue'
    import partner from './partner.vue'



    //测试
    // import dizhi from './components/dizhi.vue'

    export default {
        name: 'app',
        data () {
            return {

            }
        },
        components:{
            i_banner,
            i_center,
            itheme,
            irecom,
            icomp,
            partner

        }
    }
</script>