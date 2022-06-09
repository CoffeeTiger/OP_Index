<template>
  <div>
    <div class="iprofileimg-contain bg_lightgray" @click="tradePage">
      <div class="iprofileimg">
        <!-- <img src="../../assets/imgs/list-img.png" class="ip-img"/> -->
        <img :src="require('../../assets/imgs/nfts/' + pid)" class="ip-img"/>
      </div>
      <ul class="ip-content">
        <li class="ip-name color_yellow">{{pname}}</li>
        <li class="ip-value">{{$t('page.blockChain')}} : <span class="ivalue">{{blockValue}}</span></li>
        <!-- <li class="ip-value">#8858</li> -->
        <!-- <li class="ip-name">CrpyAPI</li>
        <li class="ip-value">#88858</li> -->
      </ul>
    </div>
  </div>
</template>

<script>
  export default{
    name:'profileImg',
    props: {
      pid: {
        type: String,
        default: ''
      },
      pname:{
        type:String,
        default:'OP-20220120-58'
      },
      pvalue:{
        type:String,
        default:''
      },
      blockValue:{
        type:String,
        default:'Ethereum'
      }
    },methods: {
      tradePage() {
       this.$router.push({path:'/trade', params:{id: this.pid}})
      }
    },
  }
</script>

<style scoped="scoped">
  @import url("../../assets/scss/com.css");
  @import url("../../assets/scss/profile.css");
</style>
