<template>
  <div id="app">
    <router-view/>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from './components/items/tabbar'
export default {
  name: 'App',
  components:{
    Tabbar
  },
    beforeCreate:function(){
    this.$router.push("/");
  }
}
</script>

<style>
*{margin: 0;padding: 0;list-style: none;text-decoration: none;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
