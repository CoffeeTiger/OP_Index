<template>
  <div class="irow">

    <div class="ifind-lists">
      <profileImgListThree></profileImgListThree>
    </div>

  </div>
</template>

<script> 
  import profileImgListThree from '../../components/user/profileImgListThree.vue'
  export default {
    name: 'original',
    components: {
      profileImgListThree
    },
    data() {
      return {
        listshow:'3',
        form: {
          search: '',
          sigle: null,
          recive: null
        },
        sigles: [{
          text: ' Signle Items',
          value: null
        }, {
          text: 'sigle One',
          value: 'sigle1'
        }, {
          text: 'sigle two',
          value: 'sigle2'
        }],
        recives: [{
          text: ' Recently Receiived',
          value: null
        }, {
          text: 'recive One',
          value: 'recive1'
        }, {
          text: 'recive two',
          value: 'recive2'
        }],
      }
    },methods: {
      listSHow(v) {
        this.listshow = v
      }
    },
  }
</script>

<style>
  @import url("../../assets/scss/com.css");

  .iprofile-search {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .ibtns-sort {
    text-align: right;
  }


</style>
