<template>
    <ul class="sort-tags list-unstyled clearfix">
        <li>
            <a href="javascript:;" :class="{'active':(options.sortName=='publish_time')}" @click.prevent="changeSort('publish_time')">
                最新
            </a>
        </li>
        <li>
            <a href="javascript:;" :class="{'active':(options.sortName=='visit_count')}" @click.prevent="changeSort('visit_count')">
                热门
            </a>
        </li>
        <li v-for="tag in tagList">
            <a href="javascript:;" :class="{'active':(options.tagId==tag._id)}" @click.prevent="changeTag(tag._id)">
                {{tag.name}}
            </a>
        </li>
        <li>
            <img v-show="isFetching" class="loader-tiny" :src="loadingImg" alt="Tiny">
        </li>
    </ul>
</template>

<script>
import tiny from '../../assets/images/tiny.gif'

export default{
    props:['tagList','options','isFetching'],
    data(){
        return{
            loadingImg:tiny
        }
    },
    methods:{
        changeSort(sortName){
            this.$parent.handleChange({
                'currentPage':1,'sortName':sortName,'tagId':''
            })
        },
        changeTag(tagId){
            this.$parent.handleChange({
                'currentPage':1,'sortName':'','tagId':tagId
            })
        }
    }
}
</script>

<style scoped>

</style>