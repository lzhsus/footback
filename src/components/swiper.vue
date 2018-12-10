<template>
  <el-carousel arrow="never" :interval="4000" type height="200px">
    <el-carousel-item v-for="(item, index) in arrSwiper" :key="index">
      <img :id="item.id" :name="item.name" :src="item.imgUrl" alt srcset>
      <div>
        <span name="tit">{{item.tit}}</span>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  name: "swiper",
  data() {
    return {};
  },
  props: ["arrSwiper"]
};
</script>
<style>
.el-carousel__item img {
  width: 100%;
  height: 100%;
}
.el-carousel__item div {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #000;
  opacity: 0.7;
}

.el-carousel__item span {
  display: block;
  width: 70%;
  overflow: hidden;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  color: #fff;
  padding-left: 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.el-carousel__indicators {
  bottom: 0px;
  left: 74%;
  transform: translateX(0);
}
.el-carousel__button {
  width: 12px;
  height: 4px;
  background-color: #fff;
}
.el-carousel__indicator.is-active button.el-carousel__button {
  background-color: red;
}
</style>

