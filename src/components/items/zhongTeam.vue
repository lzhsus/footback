<template>
  <div>
    <div class="teamBtn" v-for="(item,index) in yingArr" :key="index">
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
export default {
  data() {
    return {
      yingArr: [
        {
          imgUlr: Pig01,
          name: "富力",
          enname: "Arsenal",
          city: "伦敦",
          home: "酋长球场",
          time: "1886-1-1",
          btnFlag: true
        },
        {
          imgUlr: Pig02,
          name: "伯恩茅斯",
          enname: "Bournemouth",
          city: "般尼茅夫",
          home: "健身第一球場",
          time: "1899",
          btnFlag: true
        },
        {
          imgUlr: Pig03,
          name: "布莱顿",
          enname: "	Brighton Hove Albion",
          city: "白禮頓",
          home: "白禮頓-域夫甸球場",
          time: "1901",
          btnFlag: true
        },
        {
          imgUlr: Pig04,
          name: "伯恩利",
          enname: "Burnley",
          city: "般尼",
          home: "摩亚球场",
          time: "1882",
          btnFlag: true
        },
        {
          imgUlr: Pig05,
          name: "	卡迪夫城",
          enname: "Cardiff City",
          city: "卡迪夫",
          home: "利尼安公園卡迪夫球場",
          time: "1899",
          btnFlag: true
        },
        {
          imgUlr: Pig06,
          name: "切尔西",
          enname: "Chelsea",
          city: "伦敦",
          home: "斯坦福桥球场",
          time: "1905-3-10",
          btnFlag: true
        },
        {
          imgUlr: Pig07,
          name: "水晶宫",
          enname: "Crystal Palace",
          city: "伦敦",
          home: "塞爾赫斯特公園球場",
          time: "1905-9-10",
          btnFlag: true
        },

        {
          imgUlr: Pig08,
          name: "埃弗顿",
          enname: "Everton",
          city: "利物浦",
          home: "葛迪遜公園球場",
          time: "1878",
          btnFlag: true
        },
        {
          imgUlr: Pig09,
          name: "托特纳姆热刺",
          enname: "Tottenham Hotspur",
          city: "伦敦",
          home: "白鹿徑球場",
          time: "1882",
          btnFlag: true
        },
        {
          imgUlr: Pig10,
          name: "哈德斯菲尔德",
          enname: "Huddersfield Town",
          city: "哈德斯菲爾德",
          home: "基爾岩球場",
          time: "1895",
          btnFlag: true
        },
        {
          imgUlr: Pig11,
          name: "莱切斯特城",
          enname: "Leicester City",
          city: "莱斯特",
          home: "禾克斯球場",
          time: "1884",
          btnFlag: true
        },
        {
          imgUlr: Pig12,
          name: "利物浦",
          enname: "Liverpool",
          city: "利物浦",
          home: "安菲尔德球场",
          time: "1892",
          btnFlag: true
        },
        {
          imgUlr: Pig13,
          name: "曼彻斯特城",
          enname: "Manchester City",
          city: "曼彻斯特",
          home: "伊蒂哈德球场",
          time: "1894",
          btnFlag: true
        },
        {
          imgUlr: Pig14,
          name: "沃特福德",
          enname: "Watford",
          city: "哈特福郡",
          home: "维卡里吉路球场",
          time: "1881",
          btnFlag: true
        },
        {
          imgUlr: Pig15,
          name: "西汉姆联",
          enname: "West Ham United",
          city: "伦敦",
          home: "厄普顿公园球场",
          time: "1895",
          btnFlag: true
        },
        {
          imgUlr: Pig16,
          name: "狼队",
          enname: "Wolverhampton",
          city: "胡佛漢頓",
          home: "莫里纽克斯球场",
          time: "1877",
          btnFlag: true
        }
      ]
    };
  },
   methods: {
    sel: function(index) {
      this.yingArr[index].btnFlag = !this.yingArr[index].btnFlag;
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
