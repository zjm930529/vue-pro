
import home from '../components/index/home.vue'
import login from '../components/login.vue'
import user from '../components/user.vue'
import reg from '../components/reg.vue'
import repass from '../components/repass.vue'
import zhuti from '../components/zhuti.vue'
import dingzhi from '../components/dingzhi.vue'
import detail from '../components/detail.vue'
import error from '../components/error.vue'

const routes =[
    {path:'/home',component:home},
    {path:'/login',component:login},
    {path:'/user',component:user},
    {path:'/reg',component:reg},
    {path:'/repass',component:repass},
    {path:'/zhuti',component:zhuti},
    {path:'/dingzhi',component:dingzhi},
    {path:'/detail/:id',component:detail},
    {path:'/',redirect:'/home'},
    {path:'*',component:error}
];
export default {
    routes,
    mode:'history'
}