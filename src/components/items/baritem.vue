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
        height:100%;
        text-align: center;
        float:left;
    }
    .itemWrap img{
        /* margin-top:-20px;
        height:25px; */
        width:25px;
    }
    .itemWrap .active{
        color:#7AB2E1;
    }
    .itemWrap>span:nth-of-type(1),.itemWrap>span:nth-of-type(2){
        height:25px;
        margin-top:-20px;
        display: block;
    }
    .itemWrap>span:nth-of-type(3){
        font-size:20px;
    }
</style>
