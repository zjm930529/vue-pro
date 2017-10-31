<template>
    <swipe class="my-swipe">
        <swipe-item class="slide1">
            <img src="../images/focus.jpg"/>
        </swipe-item>
        <swipe-item class="slide2">
            <img src="../images/focus.jpg"/>
        </swipe-item>
        <swipe-item class="slide3">
            <img src="../images/focus.jpg"/>
        </swipe-item>
    </swipe>
</template>

<script>
    import 'vue-swipe/dist/vue-swipe.css'
    import { Swipe, SwipeItem } from 'vue-swipe';

    export default {
        components: {
            'swipe': Swipe,
            'swipe-item': SwipeItem
        }
    }
</script>
<style>
    .my-swipe {
        height: 200px;
        color: #fff;
        font-size: 30px;
        text-align: center;
    }

    .slide1 {
        background:#0f0f0f;
        color: #fff;
    }


    .slide2 {
        background-color: #ffd705;
        color: #000;
    }

    .slide3 {
        background-color: #ff2d4b;
        color: #fff;
    }
</style>