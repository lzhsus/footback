<template>
    <div>
        <div class="teamBtn" v-for="(item,index) in yingArr" :key="index">
             <img :src="item.Pig01" alt=""> 
             <span>{{item.name}}</span>  
             <span>{{item.enname}}</span>
             <button>关注</button>
        </div>
    </div>
</template>
<script>
import Pig01 from "../../assets/images/yingchao/arsenal.png"
import Pig02 from "../../assets/images/yingchao/bounmouth.png"
import Pig03 from "../../assets/images/yingchao/brighton.png"
import Pig04 from "../../assets/images/yingchao/burnley.png"
import Pig05 from "../../assets/images/yingchao/cardiff.png"
import Pig06 from "../../assets/images/yingchao/chelsea.png"
import Pig07 from "../../assets/images/yingchao/crystal.png"
import Pig08 from "../../assets/images/yingchao/everton.jpg"
import Pig09 from "../../assets/images/yingchao/hotspur.png"
import Pig10 from "../../assets/images/yingchao/huddersfield.png"
import Pig11 from "../../assets/images/yingchao/leicester.png"
import Pig12 from "../../assets/images/yingchao/liverpool.png"
import Pig13 from "../../assets/images/yingchao/manCity.png"
import Pig14 from "../../assets/images/yingchao/watford.png"
import Pig15 from "../../assets/images/yingchao/westHam.png"
import Pig16 from "../../assets/images/yingchao/wolves.png"
import Pig17 from "../../assets/images/yingchao/manUnited.jpg"
import Pig18 from "../../assets/images/yingchao/newcastle.png"
import Pig19 from "../../assets/images/yingchao/pulham.png"
import Pig20 from "../../assets/images/yingchao/southhampton.png"
export default {
    data(){
        return{
            yingArr:[
                {
                    Pig01,
                    name:"阿森纳",
                    enname:"Arsenal"
                },
                  {
                    Pig01,
                    name:"阿森纳",
                    enname:"Arsenal"
                },
                  {
                    Pig01,
                    name:"阿森纳",
                    enname:"Arsenal"
                },
            ]
        }
    }
}
</script>
<style scoped>
.teamBtn{
    width:80px;
    text-align: center;
    border:1px solid #ccc;
    margin-left:20px;
    float: left;
}
.teamBtn>img{
    width:64px;
}
.teamBtn>span:nth-of-type(1){
    font-size:18px;
}
.teamBtn>span:nth-of-type(2){
    font-size:16px;
}
</style>
