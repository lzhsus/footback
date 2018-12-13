<template>
  <div class="mymain">
    <div class="main_top">
      <div class="main_top_phone" @click="getPhoneMsg">
        <img src="../../assets/icon/saoma.png" alt>
      </div>
      <div class="main_top_set">
        <i class="el-icon-setting"></i>
        <i class="el-icon-message"></i>
      </div>
    </div>
    <div class="user">
      <div class="userInfo">
        <div class="userInfo_img">
          <img src="../../assets/icon/main.png" alt srcset>
        </div>
        <div class="userInfo_tit">
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
  </div>
</template>

<script>
export default {
  name: "mymain",
  data() {
    return {};
  },
  methods: {
    getPhoneMsg() {
      console.log(111);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mymain {
  background-color: rgb(173, 171, 171);
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
  background-color: rgb(61, 58, 58);
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
</style>
