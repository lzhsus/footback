<template>
  <div>
     <div>
      <el-button class="roundBtn" round type="text" @click="finish()">完成</el-button>
    </div>
    <div class="teamBtn" v-for="(item,index) in zhongArr" :key="index">
      <div class="btnLeft">
        <img :src="item.imgUlr" alt>
        <span>{{item.name}}</span>
        <span>{{item.enname}}</span>
      </div>
      <div class="btnCenter">
        <span>所在城市：{{item.city}}</span>
        <br>
        <span>球队主场：{{item.home}}</span>
        <br>
        <span>成立时间：{{item.time}}</span>
        <br>
      </div>
      <div class="btnRight">
        <el-button class="roundBtn" v-if="item.btnFlag" round type="primary" @click="sel(index)">关注</el-button>
        <el-button class="roundBtn" v-else round @click="sel(index)">取消</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import Pig01 from "../../assets/images/zhongchao/fuli.png";
import Pig02 from "../../assets/images/zhongchao/guoan.png";
import Pig03 from "../../assets/images/zhongchao/hengda.png";
import Pig04 from "../../assets/images/zhongchao/huaxia.jpg";
import Pig05 from "../../assets/images/zhongchao/jianye.png";
import Pig06 from "../../assets/images/zhongchao/luneng.png";
import Pig07 from "../../assets/images/zhongchao/quanjian.png";
import Pig08 from "../../assets/images/zhongchao/renhe.png";
import Pig09 from "../../assets/images/zhongchao/shanggang.png";
import Pig10 from "../../assets/images/zhongchao/shenhua.png";
import Pig11 from "../../assets/images/zhongchao/siwei.png";
import Pig12 from "../../assets/images/zhongchao/suning.png";
import Pig13 from "../../assets/images/zhongchao/taida.png";
import Pig14 from "../../assets/images/zhongchao/yatai.png";
import Pig15 from "../../assets/images/zhongchao/yifang.png";
import Pig16 from "../../assets/images/zhongchao/hengfeng.png";
import store from "../../vuex/store";
export default {
  data() {
    return {
      arrList: [],
      zhongArr: [
        {
          id: 21,
          imgUlr: Pig01,
          name: "广州富力",
          enname: "Fuli FC",
          city: "广州",
          home: "越秀山体育场",
          time: "1986",
          btnFlag: true
        },
        {
          id: 22,
          imgUlr: Pig02,
          name: "北京国安",
          enname: "Beijing Guoan",
          city: "北京",
          home: "北京工人体育场",
          time: "	1992",
          btnFlag: true
        },
        {
          id: 23,
          imgUlr: Pig03,
          name: "广州恒大",
          enname: "Evergrande FC",
          city: "广州",
          home: "	广州市天河体育中心",
          time: "	2002-2-1",
          btnFlag: true
        },
        {
          id: 24,
          imgUlr: Pig04,
          name: "河北华夏幸福",
          enname: "Fortune FC ",
          city: "河北",
          home: "廊坊市体育场",
          time: "1882",
          btnFlag: true
        },
        {
          id: 25,
          imgUlr: Pig05,
          name: "	河南建业",
          enname: "Jianye",
          city: "河南郑州",
          home: "郑州航海体育场",
          time: "1994-1-1",
          btnFlag: true
        },
        {
          id: 26,
          imgUlr: Pig06,
          name: "山东鲁能",
          enname: "Luneng",
          city: "济南",
          home: "济南奥体中心体育场",
          time: "1994-03-01",
          btnFlag: true
        },
        {
          id: 27,
          imgUlr: Pig07,
          name: "天津权健",
          enname: "Quanjian",
          city: "天津",
          home: "天津奥林匹克中心体育场",
          time: "2006",
          btnFlag: true
        },

        {
          id: 28,
          imgUlr: Pig08,
          name: "北京人和",
          enname: "Renhe",
          city: "贵阳",
          home: "贵阳奥林匹克体育场",
          time: "	1995-2-3",
          btnFlag: true
        },
        {
          id: 29,
          imgUlr: Pig09,
          name: "上海上港",
          enname: "Shanggang",
          city: "上海",
          home: "上海八万人体育场",
          time: "2005-12-25",
          btnFlag: true
        },
        {
          id: 30,
          imgUlr: Pig10,
          name: "上海申花",
          enname: "Shenhua",
          city: "上海",
          home: "上海虹口体育场",
          time: "1993-12-10",
          btnFlag: true
        },
        {
          id: 31,
          imgUlr: Pig11,
          name: "重庆斯威",
          enname: "Siwei",
          city: "重庆",
          home: "重庆奥林匹克体育中心",
          time: "	1995-12-01",
          btnFlag: true
        },
        {
          id: 32,
          imgUlr: Pig12,
          name: "江苏苏宁",
          enname: "Suning",
          city: "南京市",
          home: "南京奥林匹克体育中心",
          time: "1994-3-28",
          btnFlag: true
        },
        {
          id: 33,
          imgUlr: Pig13,
          name: "天津泰达",
          enname: "Teda",
          city: "天津",
          home: "天津民园体育场",
          time: "1994-01-01",
          btnFlag: true
        },
        {
          id: 34,
          imgUlr: Pig14,
          name: "长春亚泰",
          enname: "Yatai",
          city: "长春",
          home: "长春体育场",
          time: "1996-6-6",
          btnFlag: true
        },
        {
          id: 35,
          imgUlr: Pig15,
          name: "大连一方",
          enname: "Yifang",
          city: "大连",
          home: "金州体育场",
          time: "2009",
          btnFlag: true
        },
        {
          id: 36,
          imgUlr: Pig16,
          name: "贵州恒丰",
          enname: "Hengfeng",
          city: "贵阳",
          home: "白云区体育场",
          time: "2005",
          btnFlag: true
        }
      ]
    };
  },
  mounted() {
    this.arrList = store.fetchIDlist("teamList")||[];
    console.log(this.arrList)
    if(this.arrList.length>0){
      for(let i in this.arrList){
        console.log(this.arrList[i].id);
        for(let j in this.zhongArr){
          if(this.zhongArr[j].id==this.arrList[i].id){
            this.zhongArr[j].btnFlag=!this.zhongArr[j].btnFlag;
          }
        }
      }
    }
  },
  methods: {
    sel: function(index) {
      this.zhongArr[index].btnFlag = !this.zhongArr[index].btnFlag;
      var arr = [];
      arr = {
        id: this.zhongArr[index].id,
        name: this.zhongArr[index].name,
        btnFlag:this.zhongArr[index].btnFlag
      };
      // console.log(arr);
      //读取
      if (!this.zhongArr[index].btnFlag) {
        this.arrList.push(arr);
        // console.log(this.arrList);
        store.saveIDlist(this.arrList, "teamList");
      }
       else {
        for(let i in this.arrList){
          if(this.arrList[i].id==arr.id){
            this.arrList.splice(i,1);
          }
        }
        //  console.log(this.arrList);
        store.saveIDlist(this.arrList,"teamList");
      }
      // store.saveIDlist(arrList,"teamList");
    },
    finish() {
      this.$router.push({ path: "/news" });
    }
  }
};
</script>
<style scoped>
.teamBtn {
  width: 98%;
  text-align: center;
  border: 1px solid #7ab2e1;
  border-bottom: none;
  margin-left: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  /* background-color: #28abe3; */
}
.teamBtn:last-child {
  border-bottom: 1px solid #7ab2e1;
}
.btnLeft {
  width: 20%;
}
.btnLeft > img {
  width: 47px;
}
.btnLeft > span {
  display: block;
  width: 80px;
  height: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.btnLeft > span:nth-of-type(1) {
  font-size: 14px;
  vertical-align: 1px;
}
.btnLeft > span:nth-of-type(2) {
  font-size: 12px;
  /* vertical-align: 2.5px; */
}
.btnCenter {
  margin-left: 20px;
  margin-right: 10px;
  /* width:60%; */
  text-align: left;
  font-size: 14px;
  /* line-height:35px; */
}
.btnCenter > span {
  display: block;
  width: 160px;
  /* height:20px; */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
