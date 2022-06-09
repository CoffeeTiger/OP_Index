<template>
  <div>
    <div class="iprofileimg-contain bg_lightgray">
      <div class="iprofileimg">
        <!-- <img src="../../assets/imgs/list-img.png" class="ip-img"/> -->
        <img :src="require('../../assets/imgs/nfts/' + pid)" class="ip-img"/>
      </div>
      <ul class="ip-content">
        <li class="ip-name color_yellow">{{pname}}</li>
        <li class="ip-value">{{$t('page.blockChain')}} : <span class="ivalue">{{pvalue}}</span></li>
        <!-- <li class="ip-value">#88858</li> -->
        <!-- <li class="ip-name">CrpyAPI</li>
        <li class="ip-value">#88858</li> -->
      </ul>
    </div>
  </div>
</template>

<script>
  export default{
    name:'publishImg',
    props: {
      pid: {
        type: String,
        default: ''
      },
      pname:{
        type:String,
        default:''
      },
      pvalue:{
        type:String,
        default:''
      }
    },methods: {
      /* tradePage() {
       this.$router.push({name:'publish', params:{id: this.pid}})
      } */
    },
  }
</script>

<style scoped="scoped">
  @import url("../../assets/scss/com.css");
  .iprofileimg-contain{
    width: 21.3333rem;
    height: 28.1111rem;
    margin: 1.3333rem auto 0;
    padding: 1.5555rem 1.7222rem;
    border: 0.1111rem solid #3F4142;
    border-radius: 1.1666rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .iprofileimg-contain:hover{
    transition: all .2s ease-in .1s;
    border: 0.1111rem solid #606060;
    filter: brightness(0.9);
  }
  .iprofileimg{
    width: 17.8888rem;
    height: 19.3888rem;
    border-radius: 0.8888rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .iprofileimg-contain .ip-img{
    width: 100%;
  }
  .iprofileimg-contain .ip-content{
    width: 100%;
    margin: 1.3333rem auto 1.5555rem;
    line-height: 2.1666rem;
    color: #979797;
  }
  .iprofileimg-contain .ip-content .ip-name{
    width: 100%;
    font-size: 1.5555rem;
    font-family: Poppins-Medium, Poppins;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .iprofileimg-contain .ip-content .ip-value{
    width: 100%;
    font-size: 1.4444rem;
    font-family: Poppins-Light, Poppins;
    font-weight: 300;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
 /* .iprofileimg-contain .ip-content .ip-value .ivalue{
    color: #3b3b3b;
  } */
</style>
