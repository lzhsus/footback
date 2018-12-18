<template>
  <div class="news">这是新闻
    <div>
      <span>没看到喜欢的？去关注：</span>
      <div class="btns">
        <el-button round type="primary" @click="navTeam_01">英超</el-button>
        <el-button round type="primary" @click="navTeam_02">中超</el-button>
      </div>
      <div v-for="(item,index) in selTeam" :key="index">{{item.name}}</div>
    </div>
  </div>
</template>
<script>
import store from "../../store/store";
export default {
  name: "news",
  data() {
    return {
      selTeam:[]
    };
  },
  methods: {
    navTeam_01() {
      this.$router.push({ path: "/yingTeam" });
    },
    navTeam_02() {
      this.$router.push({ path: "/zhongTeam" });
    },
  },
  mounted(){
    this.selTeam=store.fetchIDlist("teamList")||[];
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  font-size: 20px;
}
.btns{
  /* text-align: center; */
  padding-left:20px;
  margin-top:20px;
}
</style>
