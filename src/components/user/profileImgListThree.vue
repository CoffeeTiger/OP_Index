<template>
  <div class="infts-thumbnail-lists"> 

    <router-link :to="{name:'trade', params:{id: '1'}}">
      <profileImg pid="nft008.jpg" pname="OP-20220120-58" blockValue="Ethereum"></profileImg>
    </router-link>

    <router-link :to="{name:'trade', params:{id: '1'}}">
      <profileImg pid="nft007.jpg" pname="OP-20220120-58" blockValue="Ethereum"></profileImg>
    </router-link>

    <router-link :to="{name:'trade', params:{id: '1'}}">
      <profileImg pid="nft006.jpg" pname="OP-20220120-58" blockValue="Ethereum"></profileImg>
    </router-link>

    <router-link :to="{name:'trade', params:{id: '1'}}">
      <profileImg pid="nft005.jpg" pname="OP-20220120-58" blockValue="Ethereum"></profileImg>
    </router-link>

    <router-link :to="{name:'trade', params:{id: '1'}}">
      <profileImg pid="nft002.jpg" pname="OP-20220120-58" blockValue="Ethereum"></profileImg>
    </router-link>

    <router-link :to="{name:'trade', params:{id: '1'}}">
      <profileImg pid="nft001.jpg" pname="OP-20220120-58" blockValue="Ethereum"></profileImg>
    </router-link>


  </div>
</template>

<script>
  import profileImg from './profileImg.vue'
  export default{
    name:'profileImgListThree',
    components: {
      profileImg
    },
    props: {
      propName: {
        type: Number,
        default: 1,
      },
    },
    methods: {
      name() {

      }
    },
  }
</script>

<style>
  @import url("../../assets/scss/com.css");
</style>
