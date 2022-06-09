<template>
  <div>
    <div class="iprofileimg-contain iborder">
      <div class="ip-img-contain">
        <img src="../../assets/imgs/nfts/nft000.jpg" class="ip-img"/>
      </div>
      <!-- <ul class="ip-content">
        <li class="ip-name">
          <img class="ieth_logo" src="../../assets/imgs/eth.png"/>
        </li>
      </ul> -->
    </div>
  </div>
</template>

<script>
  export default{
    name:'tradeImg',
    props: {
      pid: {
        type: String,
        default: ''
      },
      nftid:{
        type: String,
        default:'nft000.jpg'
      }
    },created(){

    }
  }
</script>

<style scoped="scoped">
  @import url("../../assets/scss/com.css");
  .iprofileimg-contain{
    /* width: 22.222222rem;
    height: 2.5rem; */
    /* max-height: 460px; */
    /* margin: 0.64rem auto; */
    margin: 0 auto;
    border: 1px solid #eeeeee;
    border-radius: 0.64rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .iprofileimg-contain .ip-img-contain{
    width: 22.222222rem;
    height: 22.5rem;
    text-align: center;
    overflow:hidden;
  }
  .iprofileimg-contain .ip-img-contain .ip-img{
    width: 100%;
    height: auto;
    width: 22.222222rem;
    height: 22.5rem;
    /* max-width: 390px;
    max-height: 450px; */
    /* margin-top: 5px; */
  }
  .iprofileimg-contain .ip-content{
    width: -webkit-calc(100% - 1.2rem);
    margin: 0.6rem auto;
    line-height: 1.6rem;
    color: #787676;
  }
  .iprofileimg-contain .ip-content .ip-name{
    font-weight: bolder;
    color: #3b3b3b;
  }
</style>
