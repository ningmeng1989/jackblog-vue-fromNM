<template>
    <div class="col-sm-3 sidebar-box">
        <div class="cover-img" :style="{backgroundImage:'url('+indexImg+')'}">
        </div>
        <div class="bottom-block">
            <h1>Jianbo Wang</h1>
            <h3>第二个Vue学习项目</h3>
            <h3>from jackblog-vue</h3>
        </div>
    </div>
</template>

<script>
export default{
    props:['indexImg']
}
</script>

<style scoped>

</style>