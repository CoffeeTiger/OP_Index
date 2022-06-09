<template>
  <div>
    <listingsImgListThree></listingsImgListThree>
  </div>
</template>

<script>
  /* import profileListingsLists from '../../components/nfts/profileListingsLists.vue' */
  import listingsImgListThree from '../../components/user/listingsImgListThree.vue'
  export default{
    name:'listings',
    components: {
      listingsImgListThree
    },props: {
      propName: {
        type: Number,
        default: 1
      },
    },
  }
</script>

<style>
</style>
