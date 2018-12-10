<template>
  <div class="news">
    这是新闻
  <YingTeam></YingTeam>
  </div>
</template>

<script>
import YingTeam from '../items/yingTeam'
export default {
  name: 'news',
  data () {
    return {

    }
  },
  components:{
    YingTeam,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  font-size:20px;
}
</style>
