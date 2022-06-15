<template>
  <div>
    <b-navbar toggleable="lg" class="ib-navbar ib-navbar-Purple" fixed="top">
      <div class="inavbar-contain">

        <b-navbar-brand href="/" class="open">
          <h2>Open<span>Publish</span></h2>
        </b-navbar-brand>

        <!--  <b-navbar-toggle target="nav-collapse"></b-navbar-toggle> -->
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/forParters" class="inav-item" @click="title(1)">
              <span class="nav-link-inner--text i-nav-link-font" :class="titlechk==1?'i-nav-link-font-check':''">For
                partners</span>
            </b-nav-item>
            <b-nav-item to="/reward" class="inav-item" @click="title(2)">
              <span class="nav-link-inner--text i-nav-link-font"
                :class="titlechk==2?'i-nav-link-font-check':''">Reward</span>
            </b-nav-item>
            <b-nav-item class="inav-item" @click="title(3)">
              <span @click="toLocal('/#faq_id')" class="nav-link-inner--text i-nav-link-font"
                :class="titlechk==3?'i-nav-link-font-check':''">FAQ</span>
            </b-nav-item>
            <b-nav-item class="inav-item" @click="title(5)">
              <span class="nav-link-inner--text i-nav-link-font"
                :class="titlechk==5?'i-nav-link-font-check':''">Blog</span>
            </b-nav-item>
            <b-nav-item to="/about" class="inav-item" @click="title(4)">
              <span class="nav-link-inner--text i-nav-link-font"
                :class="titlechk==4?'i-nav-link-font-check':''">About</span>
            </b-nav-item>
            <b-nav-item href="https://app.openpublish.io" target="_blank" class="inav-item" @click="title(6)">
              <span class="nav-link-inner--text i-nav-link-font"
                :class="titlechk==6?'i-nav-link-font-check':''">EnterApp</span>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
        <div class="menu-btn" @click="btnClick">
          <img src="../../assets/imgs/appnews/list.svg" />
        </div>
        <div v-if="menuShow" class="menu-ul-u2">
          <ul>
            <li @click="menuClick">
              <router-link class="menu-rotlink" to="/forParters">For partners</router-link>
            </li>
            <li @click="menuClick">
              <router-link class="menu-rotlink" to="/reward">Reward</router-link>
            </li>
            <li @click="menuClick">
              <router-link class="menu-rotlink" @click.native="toLocal('/#faq_id')" to="">FAQ</router-link>
            </li>
            <li @click="menuClick">
              <router-link class="menu-rotlink" to="" >Blog</router-link>
            </li>
            <li @click="menuClick">
              <router-link class="menu-rotlink" to="/about">About</router-link>
            </li>
            <li style="border: none;" class="menu-rotlink">
              <a href="https://m.openpublish.io" target="_blank">EnterApp</a>
            </li>
          </ul>
        </div>
      </div>
    </b-navbar>
  </div>
</template>

<script>
  import api from '../../util/network.js'
  import ebus from '../../util/ebus.js'
  export default {
    name: 'headerNavBar',
    data() {
      return {
        ustat: false,
        acount: '',
        userheader: '',
        chainid: '0x1',
        Ethereum: '',
        web3: '',
        titlechk: 0,
        checklang: 'en-us',
        changlangItem: 'ilang-select-item',
        menuShow: false
      }
    },
    mounted() {
      document.addEventListener('click', e => {
        if (!this.$el.contains(e.target)) {
          this.menuShow = false
        }
      })
      ebus.$on('emsg', (res) => {
        if (res == 'relogin') {
          this.propertyIsOk()
        } else if (res == 'refresh') {
          let _userheader = api.getStore('userheader')
          if (!api.empty(_userheader)) {
            this.userheader = _userheader
          }
        }
      })
    },
    methods: {
      menuClick() {
        this.menuShow = false;
      },
      toLocal(loc) {
        this.$router.push({
          path: loc
        })
      },
      btnClick() {
        this.menuShow = !this.menuShow
      },
      title(v) {
        this.titlechk = v
      },
      profile() {
        this.titlechk = 0
      },
      login() {
        if (api.empty(this.chainid)) {
          this.chainid = api.getStore('chain')
        }

        let that = this
        let pars = JSON.stringify({
          accAddress: this.acount,
          networkId: this.web3.utils.hexToNumberString(this.chainid),
          nonce: '',
          sign: ''
        })
        /* /jeecg-website/unlogin/acc/getNonce */
        api.postAction('/unlogin/acc/getNonce', pars, function(res) {
          api.log(res)
          if (res.code == 200) {

            that.web3.eth.personal.sign(that.web3.utils.utf8ToHex(res.result), that.acount).then((err) => {
              let pars1 = JSON.stringify({
                accAddress: that.acount,
                networkId: that.web3.utils.hexToNumberString(that.chainid),
                nonce: res.result,
                sign: err
              })
              api.postAction('/unlogin/acc/login', pars1, function(res1) {
                api.log(res1)
                if (res1.code == 0) {
                  that.ustat = true
                  api.setStore('token', res1.result.token)
                  api.setStore('user', JSON.stringify(res1.result))

                  //user header img
                  /* that.userheader = 'img/brand/userheader.png' */
                  that.userheader = res1.result.headImgUrl

                  if (that.userheader == 'default') {
                    that.userheader = 'img/brand/userheader.png'
                  }

                  api.setStore('userheader', that.userheader)

                  ebus.$emit('emsgreturn', 'ok')

                } else {
                  that.ustat = false
                  api.iToastServer(that, res1.code, 'secondary')
                }
              })
            });

          } else {
            api.iToastServer(that, res.code, 'secondary')
          }
        })

      },
      logout() {
        api.clearStore()
        this.ustat = false
        this.acount = ''
        this.userheader = ''
      },
      lang(v) {
        this.checklang = v
        localStorage.setItem("lang", v)
        this.$router.go(0)
      },
      search() {
        console.info('search')
      },
      initLoginStatus() {
        let token = api.getStore('token')
        if (!api.empty(token)) {
          this.ustat = true
          this.acount = api.getStore('acount')
          this.userheader = api.getStore('userheader')
        }
      },
      /**
       * Click on wallet to check the environment
       */
      async propertyIsOk() {
        if (typeof window.ethereum !== 'undefined') {

          let b = ethereum.isConnected();
          if (b) {

            let accounts = await ethereum.request({
              method: 'eth_requestAccounts'
            }).then((accounts) => {
              this.handleAccountsChanged(accounts)
            }).catch((err) => {
              if (err.code === 4001) {
                // EIP-1193 userRejectedRequest error
                // If this happens, the user rejected the connection request.
                api.iToastClient(this, '90005', 'warning')
              }
              if (err.code === -32002) {
                api.iToastClient(this, '90004', 'warning')
              } else {
                api.log(err);
              }
            });

            await ethereum.request({
              method: 'eth_chainId'
            }).then((chainId) => {
              this.chainid = chainId
              api.log(chainId)
            }).catch((err) => {
              if (err.code === 4001) {
                api.iToastClient(this, '90005', 'warning')
              }
              if (err.code === -32002) {
                api.iToastClient(this, '90004', 'warning')
              } else {
                api.log(err);
              }
            });

          } else {
            api.iToastClient(this, '90003', 'warning')
          }

        } else {
          /* api.iToastClient(this, '90001', 'warning') */
          /* location.href = 'https://metamask.io/download/' */
          location.href = 'https://metamask.app.link/dapp/openpublish.io'
        }
      },
      /**
       * Get current account [current account or account after account changes]
       * @param {Object} accounts
       */
      handleAccountsChanged(accounts) {
        if (accounts.length === 0) {
          api.iToastClient(this, '90002', 'warning')
        } else {
          if (this.acount != accounts[0] || !this.ustat) {
            this.acount = accounts[0]
            this.login()
          }
        }
      },
    },
    created() {
      this.initLoginStatus()

      var Web3 = require('web3');
      this.web3 = new Web3(Web3.givenProvider || api.RPCUrl);

      if (typeof window.ethereum !== 'undefined') {

        /* console.info(window.ethereum)
        console.info(window.ethereum.chainId)
        console.info(window.ethereum.networkVersion) */

        /* if (window.ethereum.chainId != null) {
          this.chainid = window.ethereum.chainId
          api.setStore('chain', this.chainid)
        } */

        ethereum.on('accountsChanged', (d) => {
          if (this.ustat) {
            this.handleAccountsChanged(d)
          }
        });

        ethereum.on('disconnect', (error) => {
          if (this.ustat) {
            this.logout()
          }
        });

        ethereum.on('chainChanged', (chainId) => {
          this.chainid = chainId
          api.setStore('chain', this.chainid)

          /* if (this.ustat) {
            api.iToastClient(this, '90007', 'warning')
            this.logout()
          } */
        });

      } else {
        api.log('wallet has not been installed')
        /* api.iToastClient(this, '90001', 'warning') */
      }

      let lang = localStorage.getItem("lang")
      if (!(lang == undefined || lang == '' || lang == null)) {
        this.checklang = lang
      }

    }
  }
</script>
<style>
  .dropdown-menu {
    /* background-color: #252525; */
    font-size: 1.1666rem;
    font-family: Poppins-Medium, Poppins;
    font-weight: 400;
    color: #000;
  }

  .dropdown-menu a:link,
  .dropdown-menu a:visited {
    color: #000000 !important;
  }
</style>
<style scoped="scoped">
  .menu-ul-u2 ul li>a:hover {
    color: #F7B62D !important;
  }

  .menu-btn {
    display: none;
  }

  .open {
    height: 6.5rem;
    line-height: 8.4375rem;
    display: flex;
    align-items: center;
  }

  .open h2 {
    margin-bottom: 0px;
    font-family: 'Russo One', sans-serif;
    font-size: 2rem;
    color: #ffffff;
    line-height: 8.4375rem;

  }

  .open h2 span {
    color: #F7B62D;
  }

  .inavbar-contain {
    width: calc(100% - 44rem);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 22rem;
    font-family: Poppins-Regular, Poppins;
  }

  .inavbar-contain-samll-header {
    width: 100%;
  }

  .navbar {
    padding: 0.5rem 1rem;
  }




  .ib-navbar {
    width: 100%;
    /* max-width: 1920px; */
    margin: 0 auto;
    /* border-bottom: 1px solid #f0f0f0; */
    /* background-color: #FFFFFF; */
    /* padding: 0.8rem 1rem !important; */
  }

  .ib-navbar-Purple {
    width: 100%;
    height: 6.5rem;
    max-height: 6.5rem;
    background: #121619;
    /* background: linear-gradient(100deg, #f2f2f2 0, #f2f2f2 100%) !important; */
    border-bottom: 0.1111rem solid #121619;
  }

  .navbar-collapse {
    position: relative !important;
    background-color: #26136e00;
  }

  .brand-img {
    width: 13.5555rem;
    height: 3.2777rem;
  }

  .i-nav-link-font {
    padding-left: 1.2rem;
    padding-right: 1.2rem;
    font-size: 1.1666rem;
    font-weight: 400;
    font-family: Poppins-Medium, Poppins;
    color: #ffffff;
  }

  .i-nav-link-font:hover {
    color: #F7B62D;
  }

  .i-nav-link-font-check {
    color: #F7B62D;
  }

  .iwallet:hover {
    opacity: 0.8;
  }

  .nav-link {
    padding: 0 .5rem !important;
  }

  /* header search */
  .isearch-outer {
    width: 25.7222rem;
    height: 2.2222rem;
    line-height: 2.2222rem;
    min-width: 11.2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0.2rem 1.2rem;
    background: #605E5E;
    border-radius: 1.5rem;
    margin: 0 2.1111rem 0 3.0555rem;
    border: 0.0555rem solid #8A8A8A;
  }

  .isearch-outer .isearch-img {
    font-size: 1.3333rem;
    padding: 0 .6rem 0 0;
    color: #B4B4B4;
  }

  .isearch-outer .isearch-input {
    width: 18.8888rem;
    background-color: #FFFFFF00;
    font-size: 1.1666rem;
    font-family: Poppins-Regular, Poppins;
    font-weight: 400;
    color: #ececec;
  }

  .isearch-outer:focus {
    color: #FFFFFF;
    border: 0.1111rem solid #FFFFFF;
  }

  @media only screen and (min-width: 0px) and (max-width: 750px) {
    .menu-ul-u2 {
      display: grid;
      position: absolute;
      width: 16.5rem;
      background: #252525;
      border: 0.125rem solid #3C3C3C;
      right: 3.75rem;
      top: 6rem;
      border-radius: 1.625rem;
    }

    ul {
      margin-bottom: 0rem;
    }

    li {
      display: flex;
      margin: 0 1.25rem;
      border-bottom: 0.125rem solid #3C3C3C;
      height: 5.6875rem;
      justify-content: flex-start;
      align-items: center;
    }

    .menu-rotlink {
      font-size: 1.625rem;
      font-family: Poppins-Regular, Poppins;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 2.4375rem;
    }

    .menu-rotlink:hover {
      color: #F7B62D;
      text-decoration: underline;
    }

    /* .menu-rotlink .router-link-exact-active {
      color: #F7B62D;
      cursor: pointer;
    }
 */
    .menu-btn {
      display: block;
      width: 2.375rem;
      margin-right: 1.9375rem;
      position: absolute;
      top: 2.4rem;
      right: 0rem;
      /* height: 31px; */
    }

    .menu-btn img {
      width: 100%;
      height: auto;
    }

    .inavbar-contain {
      width: 100%;
      max-width: 1920px;
      display: block;
      margin: 0 auto;
    }

    .navbar-toggler {
      float: right;
      margin-top: 0.25rem;
    }

    .navbar-collapse {
      width: 100%;
      margin: 0.75rem auto;
    }
  }
</style>
