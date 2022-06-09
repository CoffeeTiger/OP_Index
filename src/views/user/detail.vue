<template>
  <div class="icontainer-subpage-v2">
    
  </div>
</template>

<script>
  import api from '../../util/network.js'
  export default{
    name:'detail',
    data() {
      return {
        type: 'all',
      }
    },created() {
      let _type = this.$route.params.type
      if (!api.empty(_type)) {
        this.type = _type
      }
    },methods:{

    }
  }
</script>

<style>
</style>
