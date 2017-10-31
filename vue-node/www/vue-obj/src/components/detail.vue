<template>
    <div>
        <h4>{{deta.title}}</h4>
       <p v-html="deta.qinfo"></p>
        <hr/>
       <img :src="'../'+deta.src"/>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                deta:[]
            }
        },
        mounted(){
          this.axios({
               url:'../../data/dt.data',
               method:'get'
           }).then((res)=>{
            // console.log(res)
             this.deta=res.data[this.$route.params.id-1]
           }).catch((res)=>{
              console.log(res)
          })
        }
    }
</script>