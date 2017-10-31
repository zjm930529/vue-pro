import * as type from './type'
   export default {
       showtop:({commit,state})=>{
           commit(type.SHOW_TOP)
       },
       hidetop:({commit,state})=>{
           commit(type.HIDE_TOP)
       },
       showbtn:({commit,state})=>{
           commit(type.SHOW_BTN)
       },
       hidebtn:({commit,state})=>{
           commit(type.HIDE_BTN)
       },
       showloading:({commit,state})=>{
           //console.log('loaidng')
           commit(type.SHOW_Loading)
       },
       hideloading:({commit,state})=>{
           commit(type.HIDE_Loading)
       }
}