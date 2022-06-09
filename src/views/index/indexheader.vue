<template>
  <div class="index-header-contain">
    <div class="index-header-inner">
      <b-row class="index-row">
        <!-- <b-col xs="0" sm="0" md="2" lg="2"></b-col> -->
        <b-col xs="12" sm="12">
          <b-nav class="iindex-header" align="right">
            <b-nav-item href="https://twitter.com/OpenPublishNFT" target="_blank">
              <div class="iindex-header-name">Twitter</div>
            </b-nav-item>
            <b-nav-item href="https://t.me/+YC_Eo3UDdZIzNGZk" target="_blank">
              <div class="iindex-header-name">Telegram</div>
            </b-nav-item>
            <b-nav-item href="https://discord.gg/tKMbjCdVYf" target="_blank">
              <div class="iindex-header-name">Discord</div>
            </b-nav-item>
          </b-nav>
        </b-col>
        <!-- <b-col xs="0" sm="0" md="2" lg="2"></b-col> -->
      </b-row>
    </div>
  </div>
</template>

<script>
</script>

<style scoped="scoped">
  @import url("../../assets/scss/com.css");
  .index-header-contain{
    width: 100%;
    height: auto;
    /* background: linear-gradient(132deg, #181c61 0, #181c61 100%); */
    background-color: #181c61;
  }
  .index-header-inner{
    margin: 0 auto;
    width: 100%;
    max-width: 1920px;
  }
  .iindex-header{
    width: 100%;

  }
  .iindex-header .iindex-header-name{
    line-height: 7.2rem;
    margin: 0 1rem;
    font-size: 1rem;
    font-weight: 300;
    color: #FFFFFF !important;
  }
  .iindex-header .iindex-header-name:hover{
    opacity: 0.6;
  }
  @media only screen and (min-width: 0px) and (max-width: 992px){
    .iindex-header .iindex-header-name{
      line-height: 3rem;
      margin: 0;
      font-size: 1rem;
      font-weight: 300;
      color: #FFFFFF !important;
    }
  }

  @media only screen and (min-width: 0px) and (max-width: 768px){
    .iindex-header .iindex-header-name{
      line-height: 2.4rem;
      font-size: 1rem;
      font-weight: 300;
      margin: 0;
      color: #FFFFFF !important;
    }
  }

  @media only screen and (min-width: 0px) and (max-width: 360px){
    .iindex-header .iindex-header-name{
      line-height: 2.4rem;
      font-size: 1rem;
      font-weight: 300;
      margin: 0;
      color: #FFFFFF !important;
    }
  }

  .index-row{
    margin: 0;
  }
  .nav-link{
    padding: 0.5rem 0;
  }
</style>
