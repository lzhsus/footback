<template>
  <div class="home">
    <swiper :arrSwiper="arrSwiper">
    </swiper>
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
        "imgUrl":'http://oss.suning.com/snsis/channel_content/bEkKBI4wJCRLO51rNcAoaanl-yY1HN32ZQy_xmTlEs3w9kSfkBEWp814EYI_tXfR.jpg?format=700w_700h_80Q',
        "id":1,
        "name":'swiper1',
        "tit":"奇葩亚洲杯之巴林：被金钱淹没的巴林佛系足球"
      },
      {
     "imgUrl":'http://oss.suning.com/snsis/channel_content/YpP7gTZtJdZ8YhE1VjBJRBQrrkdMXifZpVgxJPzL60auEgsfmPLhsss0mT0DrRFW.jpg?format=700w_700h_80Q',
        "id":2,
        "name":'swiper2',
        "tit":"巴萨客场4-0西班牙人 梅西任意球双响+助攻"
      },{
       "imgUrl":'http://oss.suning.com/snsis/channel_content/i_W4Z3cbwIj3qTIYwvnGJBHk-KnJzY4K98hMyOJQ6tHelDIMcp_mREJI1o5qUOBT.jpg?format=700w_700h_80Q',
        "id":3,
        "name":'swiper3',
        "tit":"连续包月上线特惠，首月仅需18元！"
      },{
       "imgUrl":'http://oss.suning.com/snsis/channel_content/l9Zz4m-rSexmH5cX3G38kdipFessV8xH0RoN3EQYimEb53zzF2LzZ1h7yGkR6bah.jpg?format=700w_700h_80Q',
        "id":4,
        "name":'swiper4',
        "tit":"22:50起播西甲-韦斯卡VS皇马：双方队史首交锋"
      }]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
