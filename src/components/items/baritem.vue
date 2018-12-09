<template>
    <div class="itemWrap"  @click='fn'>
         <span v-show="flag"><slot name="activeImg"></slot><br></span>
         <span v-show="!flag"><slot name="normalImg"></slot><br></span>
        <span :class="{active:flag}">{{txt}}</span>
    </div>
</template>
<script>
export default {
    computed:{
        flag:function(){
            if(this.mark==this.sel){
                return true;
            }
            else{
                return false;
            }
        }
    },
    props:['txt','mark','sel'],
    methods:{
        fn:function(){
            this.$emit("change",this.mark)
        }
    }
}
</script>
<style>
 .itemWrap{
        width:20%;
        text-align: center;
        float:left;
    }
    .itemWrap img{
        width:25px;
    }
    .itemWrap .active{
        color:#7AB2E1;
    }
</style>
