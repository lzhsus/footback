<template>
  <div>
    <div>
      <el-button class="roundBtn" round type="text" @click="finish()">完成</el-button>
    </div>
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
import Pig01 from "../../assets/images/yingchao/arsenal.png";
import Pig02 from "../../assets/images/yingchao/bounmouth.png";
import Pig03 from "../../assets/images/yingchao/brighton.png";
import Pig04 from "../../assets/images/yingchao/burnley.png";
import Pig05 from "../../assets/images/yingchao/cardiff.png";
import Pig06 from "../../assets/images/yingchao/chelsea.png";
import Pig07 from "../../assets/images/yingchao/crystal.png";
import Pig08 from "../../assets/images/yingchao/everton.jpg";
import Pig09 from "../../assets/images/yingchao/hotspur.png";
import Pig10 from "../../assets/images/yingchao/huddersfield.png";
import Pig11 from "../../assets/images/yingchao/leicester.png";
import Pig12 from "../../assets/images/yingchao/liverpool.png";
import Pig13 from "../../assets/images/yingchao/manCity.jpg";
import Pig14 from "../../assets/images/yingchao/watford.png";
import Pig15 from "../../assets/images/yingchao/westHam.png";
import Pig16 from "../../assets/images/yingchao/wolves.png";
import Pig17 from "../../assets/images/yingchao/manUnited.jpg";
import Pig18 from "../../assets/images/yingchao/newcastle.png";
import Pig19 from "../../assets/images/yingchao/pulham.png";
import Pig20 from "../../assets/images/yingchao/southhampton.png";
export default {
  data() {
    return {
      arrList:[],
      teamList:[],
      yingArr: [
        {
          id:1,
          imgUlr: Pig01,
          name: "阿森纳",
          enname: "Arsenal",
          city: "伦敦",
          home: "酋长球场",
          time: "1886-1-1",
          btnFlag: true
        },
        {
          id:2,
          imgUlr: Pig02,
          name: "伯恩茅斯",
          enname: "Bournemouth",
          city: "般尼茅夫",
          home: "健身第一球場",
          time: "1899",
          btnFlag: true
        },
        {
          id:3,
          imgUlr: Pig03,
          name: "布莱顿",
          enname: "	Brighton Hove Albion",
          city: "白禮頓",
          home: "白禮頓-域夫甸球場",
          time: "1901",
          btnFlag: true
        },
        {
          id:4,
          imgUlr: Pig04,
          name: "伯恩利",
          enname: "Burnley",
          city: "般尼",
          home: "摩亚球场",
          time: "1882",
          btnFlag: true
        },
        {
          id:5,
          imgUlr: Pig05,
          name: "	卡迪夫城",
          enname: "Cardiff City",
          city: "卡迪夫",
          home: "利尼安公園卡迪夫球場",
          time: "1899",
          btnFlag: true
        },
        {
          id:6,
          imgUlr: Pig06,
          name: "切尔西",
          enname: "Chelsea",
          city: "伦敦",
          home: "斯坦福桥球场",
          time: "1905-3-10",
          btnFlag: true
        },
        {
          id:7,
          imgUlr: Pig07,
          name: "水晶宫",
          enname: "Crystal Palace",
          city: "伦敦",
          home: "塞爾赫斯特公園球場",
          time: "1905-9-10",
          btnFlag: true
        },

        {
          id:8,
          imgUlr: Pig08,
          name: "埃弗顿",
          enname: "Everton",
          city: "利物浦",
          home: "葛迪遜公園球場",
          time: "1878",
          btnFlag: true
        },
        {
          id:9,
          imgUlr: Pig09,
          name: "托特纳姆热刺",
          enname: "Tottenham Hotspur",
          city: "伦敦",
          home: "白鹿徑球場",
          time: "1882",
          btnFlag: true
        },
        {
          id:10,
          imgUlr: Pig10,
          name: "哈德斯菲尔德",
          enname: "Huddersfield Town",
          city: "哈德斯菲爾德",
          home: "基爾岩球場",
          time: "1895",
          btnFlag: true
        },
        {
          id:11,
          imgUlr: Pig11,
          name: "莱切斯特城",
          enname: "Leicester City",
          city: "莱斯特",
          home: "禾克斯球場",
          time: "1884",
          btnFlag: true
        },
        {
          id:12,
          imgUlr: Pig12,
          name: "利物浦",
          enname: "Liverpool",
          city: "利物浦",
          home: "安菲尔德球场",
          time: "1892",
          btnFlag: true
        },
        {
          id:13,
          imgUlr: Pig13,
          name: "曼彻斯特城",
          enname: "Manchester City",
          city: "曼彻斯特",
          home: "伊蒂哈德球场",
          time: "1894",
          btnFlag: true
        },
        {
          id:14,
          imgUlr: Pig14,
          name: "沃特福德",
          enname: "Watford",
          city: "哈特福郡",
          home: "维卡里吉路球场",
          time: "1881",
          btnFlag: true
        },
        {
          id:15,
          imgUlr: Pig15,
          name: "西汉姆联",
          enname: "West Ham United",
          city: "伦敦",
          home: "厄普顿公园球场",
          time: "1895",
          btnFlag: true
        },
        {
          id:16,
          imgUlr: Pig16,
          name: "狼队",
          enname: "Wolverhampton",
          city: "胡佛漢頓",
          home: "莫里纽克斯球场",
          time: "1877",
          btnFlag: true
        },
        {
          id:17,
          imgUlr: Pig17,
          name: "曼彻斯特联",
          enname: "Manchester United",
          city: "曼彻斯特",
          home: "老特拉福德球场",
          time: "1878",
          btnFlag: true
        },
        {
          id:18,
          imgUlr: Pig18,
          name: "纽卡斯尔联",
          enname: "Newcastle United",
          city: "纽卡斯尔",
          home: "中心球場",
          time: "1881",
          btnFlag: true
        },
        {
          id:19,
          imgUlr: Pig19,
          name: "富勒姆",
          enname: "	Fulham",
          city: "伦敦",
          home: "卡雲球場",
          time: "1879-1-1",
          btnFlag: true
        },
        {
          id:20,
          imgUlr: Pig20,
          name: "南安普敦",
          enname: "Southampton",
          city: "修咸顿",
          home: "德尔球场",
          time: "1885",
          btnFlag: true
        }
      ]
    };
  },
  methods: {
    sel: function(index) {
      this.yingArr[index].btnFlag = !this.yingArr[index].btnFlag;
      var arr=[];
      arr={
        id:this.yingArr[index].id,
        name:this.yingArr[index].name
      }
      console.log(arr)
      // arrList=sessionStorage.getItem("teamList")
      if (!this.yingArr[index].btnFlag) {
        this.arrList.push(arr);
      console.log(this.arrList);
        sessionStorage.setItem("teamList",this.arrList);
      } else {
        for(let i in this.arrList){
          if(this.arrList[i].id==arr.id){
            this.arrList.splice(i,1);
          }
        }
         sessionStorage.setItem("teamList",this.arrList);
      }
      console.log(teamList);
    },
    finish() {
      this.$emit("choose", this.chooseArr);
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
  box-sizing: border-box;
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
.roundBtn {
  /* border-color:#fff; */
  outline: none;
  outline-color: rgba(255, 255, 255, 0);
}
/* .el-button--primary:focus, .el-button--primary:hover{
    border-color:#fff;
    border-radius: 20px;
} */
</style>
