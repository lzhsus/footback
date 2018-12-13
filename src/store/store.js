import Vue from 'vue';
// 这是状态管理器，用来管理Vue的所有组件状态
import Vuex from 'vuex';
Vue.use(Vuex);

<<<<<<< HEAD
const MY_TEAMLIST="teamList" 
=======
const MY_IDLIST_KEY = 'mylist'; //定义常量保存键值
const New_IDLIST_KEY = 'newlist'; //定义常量保存键值

export default {

  saveIDlist(data, value) {
    if (value == "mylist") {
      window.localStorage.setItem(MY_IDLIST_KEY, JSON.stringify(data));
    } else if (value == "newlist") {
      window.localStorage.setItem(New_IDLIST_KEY, JSON.stringify(data));
    }
  },

  fetchIDlist(value) {
    if (value == "mylist") {
      return JSON.parse(window.localStorage.getItem(MY_IDLIST_KEY) || '[]');
    } else if (value == "newlist") {
      return JSON.parse(window.localStorage.getItem(New_IDLIST_KEY) || '[]');
    }
  },
  removeIDlist(value){
    if (value == "mylist") {
      window.localStorage.removeItem('MY_IDLIST_KEY')
    } else if (value == "newlist") {
      window.localStorage.removeItem('New_IDLIST_KEY')
    }
  }
}
>>>>>>> 387dbd9772b089787dbc89655c5a5c6afe329ced
