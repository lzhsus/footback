Skip to content

Search or jump to…

Pull requests
Issues
Marketplace
Explore
 @lzhsus
Sign out
 Watch 0
 Unstar 1  Fork 1 lzhsus/footback
 Code  Issues 0  Pull requests 0  Projects 0  Wiki  Insights  Settings
Branch: master Find file Copy path footback/src/components/NavHeaderBar.vue
d8f630a  5 days ago
@lzhsus lzhsus 首页频道展示
1 contributor
RawBlameHistory
179 lines (173 sloc)  4.06 KB
<template>
  <div :class="isShow?'show':''">
    <div class="navheader">
      <ul :style="'width:'+navWidth+'px'">
        <li
          style="float: left;height: 100%"
          v-for="(item, index) in navBars"
          :key="index"
          @click="setChange(index)"
        >
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
import store from "../vuex/store";
export default {
  name: "navheaderbar",
  data() {
    return {
      navBars: [],
      vule: "这是搜索跳转",
      navIndex: 0,
      navWidth: 1000
    };
  },
  props: ["isShow"],
  methods: {
    // 点击 切换导航栏
    setChange: function(index) {
      this.navIndex = index;
    },
    // 跳转到搜索按钮
    searchInput() {
      console.log("搜索按钮");
    },
    // 选择自定义 频道
    navMore() {
      console.log("频道");
      this.$router.resolve({ path: "./navChannel/navChannel" });
    }
  },
  mounted() {
    var selectIDlistMy = store.fetchIDlist("mylist") || []; //读取
    // selectIDlistMy.concat=this.navBars
    if (selectIDlistMy.length == 0) {
      store.saveIDlist(
        [
          { tit: "热门", sel: "false", id: "1" },
          { tit: "英超", sel: "false", id: "2" },
          { tit: "意超", sel: "false", id: "3" },
          { tit: "西超", sel: "false", id: "4" },
          { tit: "中超", sel: "false", id: "5" },
          { tit: "德超", sel: "false", id: "6" },
          { tit: "法超", sel: "false", id: "7" },
          { tit: "严州杯", sel: "false", id: "8" },
          { tit: "欧冠", sel: "false", id: "9" },
          { tit: "欧联", sel: "false", id: "10" },
          { tit: "国足", sel: "false", id: "11" },
          { tit: "亚冠", sel: "false", id: "12" },
          { tit: "国际足球", sel: "false", id: "13" },
          { tit: "西甲", sel: "false", id: "14" },
          { tit: "中甲", sel: "false", id: "15" },
          { tit: "足协杯", sel: "false", id: "16" },
          { tit: "意甲", sel: "false", id: "17" },
          { tit: "德甲", sel: "false", id: "18" }
        ],
        "mylist"
      ); //保存
      var selectIDlistMy = store.fetchIDlist("mylist"); //读取
      this.navBars = selectIDlistMy;
    } else {
      this.navBars = selectIDlistMy;
    }
    var num = 0;
    var number = parseInt(Math.random() * $("li").length);
    // for (var i = 0; i < $("li").length; i++) {
    //   num +=$($("li")[i]).clientWidth + 17;
    //   console.log(num)
    // }
    // this.navWidth = num;
    this.vule = this.navBars[number].tit;
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
  padding: 0px 6px 6px;
  box-sizing: border-box;
}
.more img {
  width: 100%;
  height: 100%;
}
.toNav {
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


© 2018 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
Press h to open a hovercard with more details.
