<template>
  <div class="navChannel">
      <div class="mychannel">
        <div class="mytit">
          <span>{{mychannelTit}}</span><span>{{mychannelTowTit}}</span>
        </div>
        <div class="myok">
          <div v-for="(item, index) in mychannel" :key="index" id="item.id">
            <span>{{item.tit}}</span>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  name: "navChannel",
  data() {
    return {
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
  }
};
</script>
<style>
.mychannel>div{
  width: 100%;
  margin: 40px;
  box-sizing: border-box;
}
.mychannel>.mytit span:nth-of-type(1){
  font-size: 50px;
  color: #000;
  margin-right: 20px;
}
.mychannel>div:nth-of-type(1) span:nth-of-type(2){
  font-size: 30px;
  color: #ccc;
}
.mychannel>div:nth-of-type(2)::after{
  display: block;
  clear: both;
  content: ""
}
.mychannel>div:nth-of-type(2){
  box-sizing: border-box;
}
.mychannel>div:nth-of-type(2) div{
  float: left;
  margin: 30px;
}
.mychannel>div:nth-of-type(2) span:nth-of-type(1){
  font-size: 40px;
  color: #000;
  padding: 10px 20px;
  border: 1px solid #ccc;
}
</style>

