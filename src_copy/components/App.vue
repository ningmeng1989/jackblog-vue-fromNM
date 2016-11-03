<template>
    <div class="top-box">
        <Navbar></Navbar>
        <router-view></router-view>
        <Toaster></Toaster>
    </div>
</template>

<style>

</style>

<script>
import store from '../Vuex/store'
import Navbar from './Navbar'
import Toaster from './Toaster'

export default{
    store,
    components:{
        Navbar,
        Toaster
    }
}

</script>
