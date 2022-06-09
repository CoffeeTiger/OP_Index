<template>
  <div class="icontainer-subpage-v2">

    <div class="infts-thumbnail-lists">

      <router-link :to="{name:'publish', params:{id:'0090'}}">
        <profileImg pid="nft001.jpg" pname="OP-20220314-0090" pvalue="Ethereum"></profileImg>
      </router-link>

      <router-link :to="{name:'publish', params:{id:'0090'}}">
        <profileImg pid="nft002.jpg" pname="OP-20220314-0091" pvalue="Ethereum"></profileImg>
      </router-link>

      <router-link :to="{name:'publish', params:{id:'0090'}}">
        <profileImg pid="nft005.jpg" pname="OP-20220314-0092" pvalue="Ethereum"></profileImg>
      </router-link>

      <router-link :to="{name:'publish', params:{id:'0090'}}">
        <profileImg pid="nft006.jpg" pname="OP-20220314-0093" pvalue="Ethereum"></profileImg>
      </router-link>

      <router-link :to="{name:'publish', params:{id:'0090'}}">
        <profileImg pid="nft007.jpg" pname="OP-20220314-0094" pvalue="Ethereum"></profileImg>
      </router-link>

      <router-link :to="{name:'publish', params:{id:'0090'}}">
        <profileImg pid="nft008.jpg" pname="OP-20220314-0095" pvalue="Ethereum"></profileImg>
      </router-link>

      <router-link :to="{name:'publish', params:{id:'0090'}}">
        <profileImg pid="nft000.jpg" pname="OP-20220314-0095" pvalue="Ethereum"></profileImg>
      </router-link>

      <router-link :to="{name:'publish', params:{id:'0090'}}">
        <profileImg pid="nft003.webp" pname="OP-20220314-0095" pvalue="Ethereum"></profileImg>
      </router-link>

      <router-link :to="{name:'publish', params:{id:'0090'}}">
        <profileImg pid="nft004.jpg" pname="OP-20220314-0095" pvalue="Ethereum"></profileImg>
      </router-link>


    </div>
    <br />

  </div>
</template>

<script>
  import profileImg from '../../components/publish/publishImg.vue'
  export default{
    name:'publishlist',
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
</style>
