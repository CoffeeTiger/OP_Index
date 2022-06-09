<template>
  <div>
    <b-row class="irow">
      <b-col sm="12" md="2"></b-col>
      <b-col sm="12" md="8">

        <div class="inologin-desc">
          <h3 class="color_yellow">{{$t('page.connectyourwallet')}}</h3>
          <p class="">{{$t('page.connectyourwalletdesc')}}</p>
        </div>

        <div>
          <b-list-group>
            <b-list-group-item href="#" @click="connect(1)" class="iwallet-list">
              <div class="iwallet-list-left">
                <img src="../../assets/imgs/logo/metamask-alternative.webp" class="iwallet-logo" />
                <span>MetaMask</span>
              </div>
              <div class="iwallet-list-right">{{$t('page.popular')}}</div>
            </b-list-group-item>

            <!-- <b-list-group-item href="#" @click="connect(2)" class="iwallet-list">
              <div class="iwallet-list-left">
                <img src="../../assets/imgs/logo/walletlink-alternative.webp" class="iwallet-logo" />
                <span>MetaMask</span>
              </div>
              <div class="iwallet-list-right">(not supported now)</div>
            </b-list-group-item>

            <b-list-group-item href="#" @click="connect(3)" class="iwallet-list">
              <div class="iwallet-list-left">
                <img src="../../assets/imgs/logo/walletconnect-alternative.webp" class="iwallet-logo" />
                <span>MetaMask</span>
              </div>
              <div class="iwallet-list-right">(not supported now)</div>
            </b-list-group-item> -->

            <b-list-group-item href="#" @click="connect(3)" class="iwallet-list">
              <div class="iwallet-list-left">...</div>
              <div class="iwallet-list-right"></div>
            </b-list-group-item>

          </b-list-group>
        </div>
      </b-col>
      <b-col sm="12" md="2"></b-col>
    </b-row>

  </div>
</template>

<script>
  import ebus from '../../util/ebus.js'
  export default {
    name: 'nologin',
    methods: {
      connect(type) {
        if (type == 1) {
          ebus.$emit('emsg', 'relogin')
        }
      }
    },
    mounted() {
      ebus.$on('emsgreturn', (res) => {
        if (res == 'ok') {
          this.$router.go(-1)
        }
      })
    }
  }
</script>

<style scoped="scoped">
  @import url("../../assets/scss/com.css");

  .inologin_contain {
    margin: 0 auto;
  }

  .inologin-desc {
    width: 100%;
    padding-top: 8rem;
  }
  
  .inologin-desc{
    font-size: 1.7777rem;
    font-family: Poppins-Bold, Poppins;
    font-weight: 400;
  }

  .inologin-desc>p {
    font-size: 1.3333rem;
    font-weight: 300;
    color: #979797;
    margin: 2.6666rem 0 1.3333rem;
  }

  .iwallet-list {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .iwallet-list .iwallet-list-left {
    font-size: 1.2rem;
    font-weight: 500;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .iwallet-list .iwallet-list-left .iwallet-logo {
    width: 2.8rem;
    height: 2.8rem;
    margin-right: 1rem;
  }

  .iwallet-list .iwallet-list-right {
    font-size: 1rem;
    color: #5d5d5d;
  }
</style>
<style>
  .list-group-item {
    background: #252525 !important;
    border: 1px solid rgb(0 0 0 / 67%);
  }
</style>
