<template>
  <el-carousel arrow="never" :interval="4000" type height="200px">
    <el-carousel-item v-for="(item, index) in arrSwiper" :key="index">
     <img :id="item.id" :name="item.name" :src="item.imgUrl" alt="" srcset="">
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  name: "swiper",
  data() {
    return {

    };
  },
  props: ["arrSwiper"]
};
</script>
<style>
.el-carousel__item img{
  width: 100%;
  height: 100%;
}
.el-carousel__button {
  width: 14px;
  background-color: #ccc;
}
.el-carousel__indicator.is-active button.el-carousel__button {
  background-color: red;
}
</style>

