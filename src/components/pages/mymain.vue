<template>
  <div class="mymain">
    <div class="main_top">
      <div class="main_top_phone">
        <img src="../../assets/icon/saoma.png" alt>
      </div>
      <div class="main_top_set">
        <i class="el-icon-setting"></i>
        <i class="el-icon-message"></i>
      </div>
    </div>
    <div class="user">
      <div class="userInfo">
        <div class="userInfo_img" @click="userInfo">
          <img src="../../assets/icon/main.png" alt srcset>
        </div>
        <div class="userInfo_tit"  @click="userInfo">
          <div>登录/注册</div>
          <div>登录可享受更多服务</div>
        </div>
      </div>
      <el-button type="primary" size="mini" round>开通会员</el-button>
    </div>
    <div class="usermsg">
      <div>
        <span>{{false?'':"- -"}}</span>
        <span>红包(元)</span>
      </div>
      <div>
        <span>{{false?'':"- -"}}</span>
        <span>金币</span>
      </div>
      <div>
        <span>{{false?'':"- -"}}</span>
        <span>代金券</span>
      </div>
      <div>
        <span>{{false?'':"- -"}}</span>
        <span>观赛卷</span>
      </div>
      <div>
        <span>
          <img src="../../assets/icon/qianbao.png" alt srcset>
        </span>
        <span>
          我的钱包
          <i class="el-icon-arrow-right"></i>
        </span>
      </div>
    </div>
    <div class="huiyuan">
      <div>
        <div></div>
        <div>
          <div>会员中心</div>
          <div>连续包月首月特惠</div>
        </div>
      </div>
      <div>
        <div></div>
        <div>
          <div>每日奖励</div>
          <div>年费领好礼</div>
        </div>
      </div>
    </div>
    <!-- 个人服务 -->
    <div class="server">
      <div>
        <h2>个人服务</h2>
        <div>
          <ul>
            <li><img src="../../assets/icon/jingcai.png" alt="" srcset="">
            <span>我的竞猜</span></li>
             <li><img src="../../assets/icon/jilu.png" alt="" srcset="">
            <span>播放记录</span></li>
             <li><img src="../../assets/icon/dingdan.png" alt="" srcset="">
            <span>我的订单</span></li>
             <li><img src="../../assets/icon/guanzhu.png" alt="" srcset="">
            <span>我的关注</span></li>
             <li><img src="../../assets/icon/fabiao.png" alt="" srcset="">
            <span>我的发表</span></li>
             <li><img src="../../assets/icon/shoucang.png" alt="" srcset="">
            <span>我的收藏</span></li>
             <li><img src="../../assets/icon/help.png" alt="" srcset="">
            <span>帮助反馈</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mymain",
  data() {
    return {
      codeUrl: "",
      isShow: true
    };
  },
  methods: {
    userInfo(){

      this.$router.resolve({ path: "../login" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mymain {
  background-color: rgb(235, 230, 230);
}
.main_top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: rgb(61, 58, 58);
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.main_top_phone {
  width: 30px;
}
.main_top_phone img {
  width: 100%;
  height: 100%;
}
.userInfo_img {
  padding: 3px;
}
.userInfo_img img {
  width: 100%;
  height: 100%;
}
.main_top_set {
  width: 70px;
  height: 30px;
  /* background-color: #623852; */
  font-size: 30px;
  color: #ccc;
}
.main_top_set,
.userInfo,
.usermsg,
.huiyuan {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.user {
  margin-top: 50px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(77, 72, 72);
  height: 80px;
  padding: 0 20px;
}
.userInfo {
  width: 180px;
}
.userInfo_img {
  width: 50px;
  height: 50px;
  background-color: rgb(243, 239, 239);
  border-radius: 50%;
}
.userInfo_tit div:nth-of-type(1) {
  font-size: 10px;
  color: #fff;
  margin-bottom: 6px;
}
.userInfo_tit div:nth-of-type(2) {
  font-size: 12px;
  transform: scaleY(0.8);
  color: rgb(92, 88, 88);
}
.usermsg {
  background-color: rgb(77, 75, 75);
  padding: 10px 20px;
}
.usermsg div > span {
  display: block;
  text-align: center;
  width: 100%;
  font-size: 12px;
  color: rgb(245, 236, 236);
}
.usermsg div > span :nth-of-type(1) {
  height: 20px;
}
.usermsg div img {
  width: 40px;
  height: 30px;
}
.huiyuan > div {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.huiyuan {
  padding: 10px 20px;
  background-color: #fff;
}
.huiyuan > div {
  width: 100%;
}
.huiyuan > div > div:nth-of-type(1) {
  width: 30px;
  height: 30px;
  background-color: red;
}
.huiyuan > div > div:nth-of-type(2) {
  width: 100%;
}
.huiyuan > div > div:nth-of-type(2) > div:nth-of-type(1) {
  font-size: 14px;
  text-align: left;
  width: 100%;
  color: red;
  margin-left: 10px;
}
.huiyuan > div > div:nth-of-type(2) > div:nth-of-type(2) {
  width: 100%;
  font-size: 12px;
  color: rgb(51, 50, 50);
  margin-left: 10px;
  text-align: left;
  transform: scale(0.6) translateX(-32%);
}
.server{
  width: 100%;
  height: 200px;
  background-color: #fff;
  margin: 10px 0;
}
.server h2{
  font-size: 16px;
  width: 100%;
  text-align: left;
  padding: 10px 20px;
}
.server li{
  float: left;
  width: 25%;
  padding: 4px;
  box-sizing: border-box
}
.server li img{
  width:40px;
  transform: translateX(70%)
}
.server li span{
display: block;
width: 100%;
text-align:center;
font-size: 12px;
color: #999;
}
</style>
