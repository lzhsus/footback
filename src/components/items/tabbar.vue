<template>
  <div class="tabbarWrap">
     <Item txt='首页' mark='home' :sel='selected' @change="getVal">
            <img src="../../assets/images/icon/home-act.png" alt="" slot="activeImg">
            <img src="../../assets/images/icon/home.png" alt="" slot="normalImg">
        </Item>
        <Item txt='新闻' mark='news' :sel='selected' @change="getVal">
            <img src="../../assets/images/icon/news-act.png" alt="" slot="activeImg">
            <img src="../../assets/images/icon/news.png" alt="" slot="normalImg">
        </Item>
        <Item txt='赛程' mark='competition' :sel='selected' @change="getVal">
             <img src="../../assets/images/icon/compete-act.png" alt="" slot="activeImg">
            <img src="../../assets/images/icon/compete.png" alt="" slot="normalImg">
        </Item>
        <Item txt='排行榜' mark='rankinglist' :sel='selected' @change="getVal">
             <img src="../../assets/images/icon/rank-act.png" alt="" slot="activeImg">
            <img src="../../assets/images/icon/rank.png" alt="" slot="normalImg">
        </Item>
        <Item txt='我的' mark='mymain' :sel='selected' @change="getVal">
             <img src="../../assets/images/icon/mine-act.png" alt="" slot="activeImg">
            <img src="../../assets/images/icon/mine.png" alt="" slot="normalImg">
        </Item>
  </div>
</template>
<script>
import Item from "./baritem";
export default {
  data() {
    return {
      selected: "home"
    };
  },
  components: {
    Item
  },
  methods:{
      getVal:function(val){
          this.selected=val;
          this.$router.push('/'+val);
      }
  }
};
</script>
<style>
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
.tabbarWrap {
  width: 100%;
  height: 70px;
  padding-top:5px;
  padding-bottom:5px;
  border-top: 1px solid #ccc;
  /* background-color:#ccc; */
  position: fixed;
  left: 0;
  bottom: 0;
  z-index:5;
}
</style>

