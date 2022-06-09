<template>
  <div class="b-container">
    <div class="index-content">
       <indexheader></indexheader>
       <div class="infos-contain">
         <indexinfo></indexinfo>
       </div>
    </div>
  </div>
</template>

<script>
  import indexheader from './indexheader.vue'
  import indexinfo from './indexinfo.vue'
  export default{
    name:'index',
    components: {
      indexheader, indexinfo
    },
  }

</script>

<style scoped="scoped">
  @import url("../../assets/scss/com.css");
  .index-content{
    height: 100vh;
    background-color: #181c61;
  }
  .infos-contain{
    width: 100%;
    margin: 0 auto;
    background-color: #181c61;
    overflow: hidden;
  }
</style>
