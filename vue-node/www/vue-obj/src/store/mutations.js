import * as type from './type'
export default {
    [type.SHOW_TOP]:(state)=>{
        state.top=true
    },
    [type.HIDE_TOP]:(state)=>{
        state.top=false
    },
    [type.SHOW_BTN]:(state)=>{
        state.btn=true
    },
    [type.HIDE_BTN]:(state)=>{
        state.btn=false
    },
    [type.SHOW_Loading]:(state)=>{
        state.loading=true;
    },
    [type.HIDE_Loading]:(state)=>{
        state.loading=false;
    }
}