<template>
  <div>
    <b-row class="irow">

      <!-- <b-col sm="12" md="6" lg="4">
        <div class="text">1</div>
      </b-col>
      <b-col sm="12" md="6" lg="8">
        <div class="text">2</div>
      </b-col> -->
      <template v-if="findPanelOpen">
        <b-col sm="12" md="6" lg="4">
          <div class="text">1</div>
        </b-col>
        <b-col sm="12" md="6" lg="8">
          <div class="text">2</div>
        </b-col>
      </template>
      <template v-else>
        <b-col sm="12" md="1">
          <div class="text-1">1</div>
        </b-col>
        <b-col sm="12" md="11">
          <div class="text-2">2</div>
        </b-col>
      </template>

      <b-button @click="tt" >Button</b-button>

    </b-row>
  </div>
</template>

<script>
  export default{
    name:'explorelist-test',
    data() {
      return {
        findPanelOpen: false
      }
    },methods: {
      tt() {
        this.findPanelOpen = !this.findPanelOpen
      }
    },
  }
</script>

<style>
  @import url("../../assets/scss/com.css");
  .text{
    width: 100%;
    height: 50px;
    background-color: #0066CC;
  }
  .text-1{
    width: 100%;
    min-width: 64px;
    height: 500px;
    background-color: #0066CC;
  }
  .text-2{
    width: 100%;
    height: 500px;
    background-color: #0066CC;
  }
</style>
