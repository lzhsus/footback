<template>
  <div class="home">
    <swiper :arrSwiper="arrSwiper"></swiper>
  </div>
</template>

<script>
import Swiper from "../swiper";
export default {
  name: "home",
  components: {
    Swiper
  },
  data() {
    return {
      arrSwiper: [{
        "imgUrl":'../../assets/logo.png',
        "id":1,
        "name":'swiper1'
      },
      {
     "imgUrl":'../../assets/logo.png',
        "id":2,
        "name":'swiper2'
      },{
       "imgUrl":'../../assets/logo.png',
        "id":3,
        "name":'swiper3'
      },{
       "imgUrl":'../../assets/logo.png',
        "id":4,
        "name":'swiper4'
      }]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
