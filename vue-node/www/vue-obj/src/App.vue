<template>
  <div id="app">
      <i_top v-show="top"></i_top>
      <loading v-show="loading"></loading>
      <router-view></router-view>
      <btn v-show="btn"></btn>
  </div>
</template>

<script>
    import i_top from './components/index/i_top.vue'
    import dingzhiswiper from './components/dingzhiswiper.vue'
    import btn from './components/index/btn.vue'
    import {mapGetters} from 'vuex'
  export default {
      name: 'app',
      data () {
        return {
          msg: ''
        }
      },
      mouted(){
          this.Change(this.$route);
      },
    components: {
        i_top, btn,dingzhiswiper
    },
      methods:{
          Change(to){
                  let path = to.path
                  if(/home/.test(path)){
                      this.$store.dispatch('showtop');
                      this.$store.dispatch('showbtn');
                  };
                  if(/reg|login|dingzhi|detail|repass|user/.test(path)){
                      this.$store.dispatch('hidetop');
                      this.$store.dispatch('hidebtn');
                  };
                  if(/zhuti/.test(path)){
                      this.$store.dispatch('hidetop');
                      this.$store.dispatch('showbtn');
                  };
              if(/err/.test(path)){
                  this.$store.dispatch('hidetop');
                  this.$store.dispatch('hidebtn');
              };
          }
      },

      computed:mapGetters(['top','btn','loading']),
      watch:{
        $route(route){
            this.Change(route)
        }
      }
}
</script>

<style>
</style>
