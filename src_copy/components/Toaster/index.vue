<template>
    <vue-toast v-ref:toast></vue-toast>
</template>

<script>
import vueToast from 'vue-toast'
import {showMsg,hideMsg} from '../../vuex/actions'

export default{
    components:{vueToast},
    vuex:{
        getters:{
            msg:({showMsg})=>showMsg.message
        },
        actions:{
            showMsg,
            hideMsg
        }
    },
    watch:{
        'msg':{
            handler:function (val,oldVal) {
                if(val.content!==''){
                    this.showToastr(val.content,val.type);
                    this.hideMsg();
                }
            },
            deep:true
        }
    },
    methods:{
        showToastr(content,type='error',position='top right'){
            this.$refs.toast.setOptionss({
                maxToasts:3,
                position:position
            });
            this.$refs.toast.showToast(content,{
                theme:type,
                timeLife:2000,
                closeBtn:false
            })
        }
    }
}
</script>

<style scoped>

</style>