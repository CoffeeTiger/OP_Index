<template>
  <div>
    <b-row class="irow">

      <b-col sx="12" sm="6" md="4" lg="3">
        <profileImg pid="nft008.jpg"></profileImg>
      </b-col>
      <b-col sx="12" sm="6" md="4" lg="3">
        <profileImg pid="nft007.jpg"></profileImg>
      </b-col>
      <b-col sx="12" sm="6" md="4" lg="3">
        <profileImg pid="nft006.jpg"></profileImg>
      </b-col>
      <b-col sx="12" sm="6" md="4" lg="3">
        <profileImg pid="nft005.jpg"></profileImg>
      </b-col>

      <b-col sx="12" sm="6" md="4" lg="3">
        <profileImg pid="nft002.jpg"></profileImg>
      </b-col>
      <b-col sx="12" sm="6" md="4" lg="3">
        <profileImg pid="nft001.jpg"></profileImg>
      </b-col>
      <b-col sx="12" sm="6" md="4" lg="3">
        <profileImg pid="nft008.jpg"></profileImg>
      </b-col>
      <b-col sx="12" sm="6" md="4" lg="3">
        <profileImg pid="nft000.jpg"></profileImg>
      </b-col>

    </b-row>
  </div>
</template>

<script>
  import profileImg from './profileImg.vue'
  export default{
    name:'profileImgListFour',
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
