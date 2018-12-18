<template>
  <div class="navChannel">
    <div class="chammelTop">
      <div>
        <router-link to="/home">
          <i class="el-icon-arrow-left"></i>
        </router-link>
      </div>
      <div>管理我的频道</div>
      <div>
        <router-link to="/home">完成</router-link>
      </div>
    </div>

    <div class="mychannel">
      <div class="mytit">
        <span>{{mychannelTit}}</span>
        <span>{{mychannelTowTit}}</span>
      </div>
      <div class="myok">
        <div v-for="(item, index) in mychannel" :key="index" :id="item.id">
          <span>{{item.tit}}</span>
          <i :id="item.id" class="el-icon-close" @click="delChannel(item.id)"></i>
        </div>
      </div>
    </div>

    <div class="mychannel">
      <div class="mytit">
        <span>{{newchannelTit}}</span>
        <span>{{newchannelTowTit}}</span>
      </div>
      <div class="myok">
        <div v-for="(item, index) in newchannel" :key="index" :id="item.id">
          <span @click="addChannel(item.id)">+{{item.tit}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import store from "../../vuex/store";
export default {
  name: "navChannel",
  data() {
    return {

      mychannel: [],
      mychannelTit: "我的频道",
      mychannelTowTit: "拖拽可以排序",
      newchannelTit: "频道推荐",
      newchannelTowTit: "点击添加频道",
      newchannel: [],

      tabFlag:false,
      mychannel:[
        {"tit":'热门',"id":'0'},
         {"tit":'热门',"id":'2'},
          {"tit":'热门',"id":'3'},
           {"tit":'热门',"id":'4'},
            {"tit":'热门',"id":'5'},
             {"tit":'热门',"id":'6'},
              {"tit":'热门',"id":'7'},
               {"tit":'热门',"id":'8'},
                {"tit":'热门',"id":'9'},
      ],
      mychannelTit:'我的频道',
      mychannelTowTit:'拖拽可以排序',
      newchannel:[]

    };
  },
  methods: {
    //返回到首页
    goHome: function() {
      this.$route({ path: "/home" });
    },
    //删除选择的频道
    delChannel(id) {
      // 读取本地存储 newlist
      var selectIDlistMy = store.fetchIDlist("newlist") || []; //读取
      // 删除本地存储 mylist
      store.removeIDlist("mylist");
      var mynewArr = []
      for (var i = 0; i < this.mychannel.length; i++) {
        var index = i;
        if (this.mychannel[i].id != parseInt(id)) {
          mynewArr.push(this.mychannel[i]);
        } else {
          selectIDlistMy.push(this.mychannel[i]);
        }
      }
      // 创建 保存本地存储 mylist
      store.saveIDlist(mynewArr, "mylist"); //保存
      this.mychannel = mynewArr;
      // 获取 保存到本地存储 newlist
      store.saveIDlist(selectIDlistMy, "newlist"); //保存
      this.newchannel = selectIDlistMy;
    },
    addChannel(id) {
      // 读取本地存储 newlist
      var selectIDlistMy = store.fetchIDlist("mylist") || []; //读取
      store.removeIDlist("newlist");
      var newArr = [];
      for (var i = 0; i < this.newchannel.length; i++) {
        var index = i;
        if (this.newchannel[i].id != parseInt(id)) {
          newArr.push(this.newchannel[i]);
        } else {
          selectIDlistMy.push(this.newchannel[i]);
        }
      }
      // 创建 保存本地存储 mylist
      store.saveIDlist(selectIDlistMy, "mylist"); //保存
      this.mychannel = selectIDlistMy;
      // 获取 保存到本地存储 newlist
      store.saveIDlist(newArr, "newlist"); //保存
      this.newchannel = newArr;
    }
  },
  mounted() {
    var selectIDlistMy = store.fetchIDlist("mylist"); //读取
    var selectIDlistNew = store.fetchIDlist("newlist"); //读取
    this.mychannel = selectIDlistMy;
    this.newchannel = selectIDlistNew;
  }
};
</script>
<style>
.chammelTop {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  font-size: 20px;
  background-color: rgb(244, 247, 247);
}
.chammelTop i {
  font-size: 26px;
}

.mychannel > .mytit {
  width: 100%;
  padding: 0px 20px 0;
  box-sizing: border-box;
}
.mychannel > .mytit span:nth-of-type(1) {
  font-size: 20px;
  color: #000;
  margin-right: 10px;
}
.mychannel > .mytit span:nth-of-type(2) {
  font-size: 15px;
  color: #ccc;
}
.mychannel > div:nth-of-type(2)::after {
  display: block;
  clear: both;
  content: "";
}
.mychannel > .myok {
  box-sizing: border-box;
  padding: 0 20px;
}
.mychannel > .myok div {
  float: left;
  margin: 0 4px;
  position: relative;
}
.mychannel > .myok span {
  font-size: 18px;
  color: #000;
  border: 1px solid #ccc;
  padding: 6px 20px;
}
.mychannel > .myok i {
  border: 1px solid rgb(212, 212, 212);
  border-radius: 50%;
  font-size: 10px;
  position: absolute;
  right: -6px;
  top: 14px;
}
</style>

