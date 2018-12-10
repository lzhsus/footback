<template>
  <div :class="isShow?'show':''">
    <div class="navheader">
      <ul :style='"width:"+navWidth+"px"'>
        <li v-for="(item, index) in navBars" :key="index" @click="setChange(index)">
          <a :class="{active:index==navIndex}" href="#">{{item.tit}}</a>
        </li>
      </ul>
      <div class="more" @click="navMore">
        <router-link class="toNav" to="/navChannel">
        <img src="../assets/images/icon/more-nav.png" alt srcset>
        </router-link>
      </div>
    </div>
    <div v-show="isShow" class="search" @click="searchInput">
      <img src="../assets/images/icon/sousuo-nav.png" alt srcset>
      {{vule}}
    </div>
  </div>
</template>
<script>
// import $ from 'zepto'
export default {
  name: "navheaderbar",
  data() {
    return {
      navBars: [
        { tit: "热门", sel: "false"},
        { tit: "英超", sel: "false"},
        { tit: "意超", sel: "false" },
        { tit: "西超", sel: "false" },
        { tit: "中超", sel: "false" },
        { tit: "德超", sel: "false" },
        { tit: "法超", sel: "false"},
        { tit: "严州杯", sel: "false"},
          { tit: "欧冠", sel: "false"},
        { tit: "欧联", sel: "false"},
         { tit: "国足", sel: "false"},
          { tit: "亚冠", sel: "false"},
        { tit: "国际足球", sel: "false"}
      ],
      vule: "这是搜索跳转",
      navIndex: 0,
      navWidth:0
    };
  },
  props: ["isShow"],
  methods: {
    // 点击 切换导航栏
    setChange: function(index) {
      this.navIndex = index;
    },
    // 跳转到搜索按钮
    searchInput(){
      console.log("搜索按钮")
    },
    // 选择自定义 频道
    navMore(){
      console.log("频道")
      this.$router.resolve({path: './navChannel/navChannel'});
    }
  },
  mounted() {
    var num=0
    var number=parseInt(Math.random()*$('li').length)
    for(var i=0;i<$('li').length;i++){
      num+=($('li')[i].clientWidth+20)
    }
    this.navWidth=num+20
    this.vule=this.navBars[number].tit
  }
};
</script>
<style scoped>
.navheader {
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: #000;
  overflow-x: scroll;
  overflow-y: hidden;
  position: relative;
}
.show {
  margin-bottom: 40px;
}
ul::after {
  display: block;
  clear: both;
  content: "";
}

ul > li {
  float: left;
  height: 100%;
}
li a {
  display: block;
  padding: 0 5px 0 15px;
  height: 100%;
  color: #ccc;
  font-size: 12px;
}
a.active {
  font-size: 20px;
  color: #fff;
}
.more {
  position: fixed;
  right: 0;
  top: 0;
  height: 40px;
  width: 40px;
  color: #fff;
  background-color: rgb(15, 13, 13);
  text-align: center;
  padding:2px 6px 2px;
  box-sizing: border-box;
}
.more img {
  width: 100%;
  height: 100%;
}
.toNav{
  display: inline-block;
  height: 100%;
  width: 100%;
}
.search {
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding-left: 40px;
  background-color: rgb(0, 0, 0);
  opacity: 0.9;
  color: #999;
  z-index: 999;
  font-size: 12px;
}
.search img {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 5px;
  left: 8px;
}
</style>


