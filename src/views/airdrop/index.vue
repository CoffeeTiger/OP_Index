<template>
  <div class="airdiop">
    <div class="aitdiop-head">
      <div class="aitdiop-head-title">OpenPublish<br /> Airdrop</div>
      <div class="aitdiop-head-token">OpenPublish Airdrop is worth up to 9 OPH tokens (~$ 9). Share your referral link
        to earn 1 OPH token (~$ 1)
        for every referral, the referred friend will also earn 1 OPH token (~$ 1).</div>
      <div class="aitdiop-head-about">About OpenPublish</div>
      <div class="aitdiop-head-connter">OpenPublish is the world’s first decentralized NFT Publisher. Our goal is to
        build a high liquidity NFTs
        market. Our expectation is to grow the value of the NFTs market, our platform revenue, and OPH’s market cap, not
        only to provide benefits/rewards but also to create riches for our platform participants.</div>
    </div>
    <div class="aitdiop-btn">
      <div class="aitdiop-btn-left">
        <img src="../../assets/imgs/news/air-left.svg" />
      </div>

      <div class="aitdiop-btn-connter">
        <div class="aitdiop-trumpet">
          <img src="../../assets/imgs/news/air-trumpet.png" />
        </div>
        <div class="aitdiop-btn-title">Step-by-Step Guide OpenPublish Airdrop</div>
        <!-- <div class="aitdrop-list">
          <img class="airdiop-list-img" src="../../assets/imgs/news/air-niu.svg" />
          Visit our website <a href="https://openpublish.io" target="_blank"> OpenPublish.io </a> daily +1
        </div> -->
        <div class="aitdrop-list">
          <img class="airdiop-list-img2" src="../../assets/imgs/news/air-you.svg" />
          Watch on <a href="https://www.youtube.com/c/Openpublish" target="_blank"> YouTube </a> +1
        </div>
        <div class="aitdrop-list">
          <img class="airdiop-list-img2" src="../../assets/imgs/news/air-twitter.svg" />
          Follow on <a href="https://twitter.com/OpenPublishNFT" target="_blank">Twitter </a> +1
        </div>
        <div class="aitdrop-list">
          <img class="airdiop-list-img2" src="../../assets/imgs/news/air-discord.svg" />
          Join our <a href="https://discord.com/invite/openpublish" target="_blank"> Discord </a> server +5
        </div>
        <div class="aitdrop-list">
          <img class="airdiop-list-img2" src="../../assets/imgs/news/air-tg.svg" />
          Join on <a href="https://t.me/openpublishTGcn" target="_blank"> Telegram </a> +2
        </div>
        <div class="icollapse imargin-bottom-24">
          <div :class="open1?'icollapse-title-contain':'icollapse-title-contain icollapse-title-contain-close'">
            <div class="icollapse-title" @click="listShow(1)">
              <img class="icollapse-img-i1" src="../../assets/imgs/news/air-niu.svg" />
              <div class="ititle">Recommend to share with friends to participate in this event +1</div>
              <div class="iarrow-i1">
                <img src="../../assets/imgs/arrow-down.png" class="icollepse-arrow" v-if="!open1" />
                <img src="../../assets/imgs/arrow-up.png" class="icollepse-arrow" v-if="open1" />
              </div>
            </div>
          </div>
          <div :class="open1?'ibody-open':'ibody-close'">
            <div class="icontent">
              <div class="icollapse-addres-list">
                <div class="icollapse-list-l1">
                  <p class="icollapse-addres-p">Email address*</p>
                </div>
                <div class="recInput">
                  <div class="icollapse-recInput">
                    <input @blur="recmailShow" v-model="recMail" placeholder="www.zuoxiaotang123@gmail.com" />
                  </div>
                  <div class="icollapse-link" @click="shareClick">Generate link</div>
                </div>
                <div class="aitdiop-hint" v-if="recShow">
                  <img src="../../assets/imgs/news/air-hint.svg" />
                  <p>This question is required</p>
                </div>
                <div class="aitdiop-hint" v-if="mustRecShow">
                  <img src="../../assets/imgs/news/air-hint.svg" />
                  <p>Must be a valid email address</p>
                </div>
              </div>
              <div class="list-content" v-if="shareShow">
                <div ref="link">Share link: https://openpublish.io/airdrop/---</div>
                <img @click="copyAddress(2)" src="../../assets/imgs/news/air-copy.svg" />
              </div>
            </div>
          </div>
        </div>
        <div class="icollapse imargin-bottom-24">
          <div :class="open2?'icollapse-title-contain':'icollapse-title-contain icollapse-title-contain-close'">
            <div class="icollapse-title" @click="listShow(2)">
              <img class="icollapse-img" src="../../assets/imgs/news/air-eth.svg" />
              <div class="ititle">Submit your Ethereum wallet address and details to the Form.</div>
              <div class="iarrow">
                <img src="../../assets/imgs/arrow-down.png" class="icollepse-arrow" v-if="!open2" />
                <img src="../../assets/imgs/arrow-up.png" class="icollepse-arrow" v-if="open2" />
              </div>
            </div>
          </div>
          <div :class="open2?'ibody-open':'ibody-close'">
            <div class="icontent-ic2">
              <div class="icollapse-ico-list">
                <div class="icollapse-list">
                  <p class="icollapse-list-p">Email address*</p>
                </div>
                <div class="icollapse-list-input">
                  <input @blur="inputShow" v-model="email" placeholder="Your email" />
                </div>
                <div class="aitdiop-hint" v-if="emailShow">
                  <img src="../../assets/imgs/news/air-hint.svg" />
                  <p>This question is required</p>
                </div>
                <div class="aitdiop-hint" v-if="mustShow">
                  <img src="../../assets/imgs/news/air-hint.svg" />
                  <p>Must be a valid email address</p>
                </div>
              </div>
              <div class="icollapse-ico-list">
                <div class="icollapse-list-l1">
                  <p class="icollapse-list-p">Discord Username*</p>
                  <p class="icollapse-list-p2">Discord usernames should look like: Your Username#1234</p>
                </div>
                <div class="icollapse-list-input">
                  <input @blur="discordShow" v-model="disName" placeholder="Your answer" />
                </div>
                <div class="aitdiop-hint" v-if="disNameShow">
                  <img src="../../assets/imgs/news/air-hint.svg" />
                  <p>This question is required</p>
                </div>
              </div>
              <div class="icollapse-ico-list">
                <div class="icollapse-list-l1">
                  <p class="icollapse-list-p">Twitter Username*</p>
                  <p class="icollapse-list-p2">Don't include the @</p>
                </div>
                <div class="icollapse-list-input">
                  <input @blur="twitterShow" v-model="twitterName" placeholder="Your answer" />
                </div>
                <div class="aitdiop-hint" v-if="twitterNameShow">
                  <img src="../../assets/imgs/news/air-hint.svg" />
                  <p>This question is required</p>
                </div>
              </div>
              <div class="icollapse-ico-list">
                <div class="icollapse-list-l1">
                  <p class="icollapse-list-p">Telegram Username*</p>
                  <p class="icollapse-list-p2">Don't include the @</p>
                </div>
                <div class="icollapse-list-input">
                  <input @blur="teletShow" v-model="teletName" placeholder="Your answer" />
                </div>
                <div class="aitdiop-hint" v-if="teletNameShow">
                  <img src="../../assets/imgs/news/air-hint.svg" />
                  <p>This question is required</p>
                </div>
              </div>
              <div class="icollapse-ico-list">
                <div class="icollapse-list-l1">
                  <p class="icollapse-list-p">YouTube Username*</p>
                  <p class="icollapse-list-p2">Don't include the @</p>
                </div>
                <div class="icollapse-list-input">
                  <input @blur="youShow" v-model="youName" placeholder="Your answer" />
                </div>
                <div class="aitdiop-hint" v-if='youNameShow'>
                  <img src="../../assets/imgs/news/air-hint.svg" />
                  <p>This question is required</p>
                </div>
              </div>
              <div class="icollapse-ico-list">
                <div class="icollapse-list-l1">
                  <p class="icollapse-list-p">Submit your Ethereum wallet address*</p>
                </div>
                <div class="icollapse-list-input">
                  <input @blur="adrShow" v-model="address" placeholder="Your answer" />
                </div>
                <div class="aitdiop-hint" v-if="addressShow">
                  <img src="../../assets/imgs/news/air-hint.svg" />
                  <p>This question is required</p>
                </div>
              </div>
            </div>
            <b-modal v-model="modalShow" no-close-on-backdrop hide-footer title="BootstrapVue">
              <div class="captcha" id="grecaptcha"></div>
            </b-modal>
            <div class="icollapse-list-btn">
              <div class="icollapse-list-b1">
                <div @click="showModal()" class="ibutton-recaptha">Submit</div>
              </div>
              <div class="icollapse-list-b2" @mouseover="mouseOver" @mouseleave="mouseLeave" :style="active">
                <p ref="acp">Clear form content</p>
              </div>
            </div>
          </div>
        </div>
        <div class="aitdrop-node">
          Note: Tokens are going to be locked up for a period of 10 months after the end of each airdrop round. After
          the
          lock-up period, your tokens will be distributed to your wallet. (10% of your final amount will be unlocked
          each
          month)
        </div>
        <div class="aitdiop-table-head">
          <div class="aitdiop-node-title">
            <img class="aitdiop-node-img" src="../../assets/imgs/news/air-jinbi.png">
            <div class="aitdiop-node-d">Rewards by ranking on xx</div>
          </div>
          <table class="aitdiop-table" border="1">
            <tr class="airdiop-tr">
              <td class="airdiop-td" style="padding-right: 4.0625rem;padding-left: 3.5rem;">Ranking</td>
              <td class="airdiop-td2">Award</td>
            </tr>
            <tr class="airdiop-tr">
              <td class="airdiop-td">
                <img src="../../assets/imgs/news/air-list1.svg" />1st Place
              </td>
              <td class="airdiop-td2">$2,000</td>
            </tr>
            <tr class="airdiop-tr">
              <td class="airdiop-td">
                <img src="../../assets/imgs/news/air-list2.svg" />2nd Place
              </td>
              <td class="airdiop-td2">$1,000</td>
            </tr>
            <tr class="airdiop-tr">
              <td class="airdiop-td">
                <img src="../../assets/imgs/news/air-list3.svg" />3rd Place
              </td>
              <td class="airdiop-td2">$500</td>
            </tr>
            <tr class="airdiop-tr airdiop-font-color">
              <td class="airdiop-td">4th-10th
              </td>
              <td class="airdiop-td2">$250</td>
            </tr>
            <tr class="airdiop-tr airdiop-font-color">
              <td class="airdiop-td">11th-50th
              </td>
              <td class="airdiop-td2">$80</td>
            </tr>
            <tr class="airdiop-tr airdiop-font-color">
              <td class="airdiop-td">51th-201th
              </td>
              <td class="airdiop-td2">$50</td>
            </tr>
            <tr class="airdiop-tr airdiop-font-color">
              <td class="airdiop-td">202th-401th
              </td>
              <td class="airdiop-td2">$20</td>
            </tr>
            <tr class="airdiop-tr airdiop-font-color">
              <td class="airdiop-td">402th-1001th</td>
              <td class="airdiop-td2">$5</td>
            </tr>
            <tr class="airdiop-tr airdiop-font-color">
              <td class="airdiop-td">1002th-5001th</td>
              <td class="airdiop-td2">$1</td>
            </tr>
          </table>
          <div class="aitdiop-trumpet-down">
            <img src="../../assets/imgs/news/jinbi-1.png" />
          </div>
        </div>
      </div>
      <div class="aitdiop-btn-right">
        <img src="../../assets/imgs/news/air-right.svg" />
      </div>
    </div>
  </div>
</template>

<script>
  import api from '../../util/network.js'
  export default {
    name: 'homecontent',
    data() {
      return {
        open1: false,
        open2: false,
        email: '',
        emailShow: false,
        disNameShow: false,
        disName: '',
        twitterNameShow: false,
        twitterName: '',
        teletNameShow: false,
        teletName: '',
        youNameShow: false,
        youName: '',
        addressShow: false,
        address: '',
        active: "",
        mustShow: false,
        recMail: "",
        recShow: false,
        mustRecShow: false,
        shareShow: false,
        modalShow: false,
        sitekey: "6LeHfl8gAAAAAFH26t3IKu6j9a6naZusSdAJQTOQ",
      }
    },
    created() {},
    methods: {
      loaded() {
        setTimeout(() => {
          window.grecaptcha.render("grecaptcha", {
            sitekey: this.sitekey,
            callback: this.submit
          });
        }, 200);
      },
      showModal() {
        this.loaded();
        // this.modalShow = true
      },
      submit: function(token) {
        console.log(token, '====-098')
      },
      shareClick() {
        var emls = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
        if (this.recMail == "") {
          this.recShow = true
          this.mustRecShow = false
          this.shareShow = false
        } else if (!emls.test(this.recMail)) {
          this.recShow = false
          this.mustRecShow = true
          this.shareShow = false
        } else if (emls.test(this.recMail)) {
          this.recShow = false
          this.mustRecShow = false
          this.shareShow = true
        }
      },
      mouseOver() {
        this.active =
          "background-color:#3E3D3D;";
        var acps = this.$refs.acp
      },
      mouseLeave() {
        this.active = "";
      },
      copyAddress(e) {
        let that = this
        if (e == 1) {
          this.$copyText(this.$refs.code).then(function(e) {
            api.iToast(that, 'Copy successful.', 'secondary')
          }, function(e) {})
        } else if (e == 2) {
          this.$copyText(this.$refs.link).then(function(e) {
            api.iToast(that, 'Copy successful.', 'secondary')
          }, function(e) {})
        }

      },
      recmailShow() {
        var emls = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
        if (this.recMail == '') {
          this.recShow = true
          this.mustRecShow = false
        } else if (!emls.test(this.recMail)) {
          this.recShow = false
          this.mustRecShow = true
        } else if (emls.test(this.recMail)) {
          this.recShow = false
          this.mustRecShow = false
        }
      },
      adrShow() {
        if (this.address == '') {
          this.addressShow = true
        } else {
          this.addressShow = false
        }
      },
      youShow() {
        if (this.youName == '') {
          this.youNameShow = true
        } else {
          this.youNameShow = false
        }
      },
      teletShow() {
        if (this.teletName == '') {
          this.teletNameShow = true
        } else {
          this.teletNameShow = false
        }
      },
      twitterShow() {
        if (this.twitterName == '') {
          this.twitterNameShow = true
        } else {
          this.twitterNameShow = false
        }
      },
      discordShow() {
        if (this.disName == '') {
          this.disNameShow = true
        } else {
          this.disNameShow = false
        }
      },
      listShow(v) {
        if (v == 1) {
          this.open1 = !this.open1
        } else if (v == 2) {
          this.open2 = !this.open2
        }
      },
      inputShow() {
        var eml = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
        if (this.email == '') {
          this.emailShow = true
          this.mustShow = false
        } else if (!eml.test(this.email)) {
          this.emailShow = false
          this.mustShow = true
        } else if (eml.test(this.email)) {
          this.emailShow = false
          this.mustShow = false
        }
      }
    },
  }
</script>

<style scoped="scoped">
  .ibutton-recaptha {
    display: flex;
    justify-content: center;
  }

  .airdiop {
    display: flex;
    flex-direction: column;
    margin-top: 6.5rem;
    background-color: #F7B62D;
  }

  .aitdiop-head {
    padding-left: 19.625rem;
    padding-top: 2.875rem;
    color: #313131;
    background-color: #ffffff;
    width: calc(100% - 5.75rem);
    margin: 2.5rem 2.875rem;
  }

  .aitdiop-head-title {
    font-size: 3.375rem;
    font-family: Poppins-Bold, Poppins;
    font-weight: bold;
    line-height: 4.5625rem;
  }

  .aitdiop-head-token {
    font-size: 1.125rem;
    font-family: Poppins-Regular, Poppins;
    font-weight: 400;
    line-height: 2rem;
    margin-top: 2.875rem;
    padding-right: 27.25rem;
  }

  .aitdiop-head-about {
    margin-top: 1.625rem;
    font-size: 1.5rem;
    font-family: Poppins-SemiBold, Poppins;
    font-weight: 600;
    line-height: 2.1875rem;
    margin-bottom: 0.875rem;
  }

  .aitdiop-head-connter {
    font-size: 1.125rem;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    line-height: 2rem;
    margin-bottom: 2.875rem;
    padding-right: 29.75rem;
  }

  .aitdiop-btn {
    width: 100%;
    background: #121619;
    display: flex;
    justify-content: space-between;
    position: relative;
  }

  .aitdiop-btn-connter {
    width: 58.625rem;
    margin: 0 15.625rem;
    margin-top: 6.75rem;
    background: #252525;
    border-radius: 0.5rem;
    border: 0.125rem solid #3F4142;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 2.875rem 3.625rem 3.4375rem 3.625rem;
    margin-bottom: 8rem;
  }

  .aitdiop-btn-title {
    width: 100%;
    font-size: 1.625rem;
    font-family: Poppins-SemiBold, Poppins;
    font-weight: 600;
    color: #FFFFFF;
    line-height: 2.4375rem;
    padding: 0rem 4.5rem;
    margin-bottom: 2.6875rem;
  }

  .aitdrop-list {
    background: #3E3E3E;
    border-radius: 0.625rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.5rem;
    font-family: Poppins-Regular, Poppins;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 2.1875rem;
    margin-bottom: 1.5rem;
  }

  .airdiop-list-img2 {
    width: 2.125rem;
    height: 1.875rem;
    margin: 1.6875rem 1.625rem 1.6875rem 1.875rem;
  }

  .airdiop-list-img {
    width: 2.125rem;
    height: 2.6875rem;
    margin: 1.1875rem 1.625rem 1.1875rem 1.875rem;
  }

  .aitdrop-list>a {
    color: #F7B62D !important;
    margin: 0rem 0.2rem;
  }

  .airdiop-list-btn {
    width: 7.4375rem;
    height: 2.5625rem;
    background: #F7B62D;
    border-radius: 0.5rem;
    font-size: 1.25rem;
    font-family: Poppins-SemiBold, Poppins;
    font-weight: 600;
    color: #313131;
    line-height: 1.875rem;
    margin-left: 4.875rem;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  }


  .aitdrop-node {
    margin-top: 0.625rem;
    font-size: 1.125rem;
    font-family: Poppins-Regular, Poppins;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 1.6875rem;
    text-align: left;
  }

  .aitdiop-table-head {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .aitdiop-node-title {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin-top: 3.3125rem;
  }

  .aitdiop-node-img {
    margin-right: 2.0625rem;
    width: 4.75rem;
    height: 3rem;
  }

  .aitdiop-node-d {
    font-size: 1.625rem;
    font-family: Poppins-SemiBold, Poppins;
    font-weight: 600;
    color: #FFFFFF;
    line-height: 2.4375rem;
  }

  .aitdiop-table {
    width: 32.6875rem;
    border: 0.125rem solid #3F4142 !important;
    margin-top: 1.5rem;
  }

  .airdiop-tr {
    font-size: 1.375rem;
    font-family: Poppins-Regular, Poppins;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 2.0625rem;
  }

  .airdiop-td {
    padding: 0.625rem 0rem;
    padding-left: 2rem;
    padding-right: 1.625rem;
    text-align: left;
    border: 0.125rem solid #3F4142 !important;
  }

  .airdiop-td>img {
    width: 1.3125rem;
    height: 1.3125rem;
    margin-bottom: 0.375rem;
    margin-right: 0.5rem;
  }

  .airdiop-font-color {
    color: #979797;
  }


  .airdiop-td2 {
    text-align: left;
    padding: 0 7rem;
    border: 0.125rem solid #3F4142 !important;
  }

  .aitdiop-trumpet {
    position: absolute;
    left: 28rem;
    top: 3.375rem;
  }

  .aitdiop-trumpet img {
    width: 11rem;
    height: 10rem;
  }

  .aitdiop-trumpet-down {
    position: absolute;
    bottom: 5.625rem;
    right: 26.125rem;
  }

  .aitdiop-trumpet-down img {
    width: 7.4375rem;
    height: 7.5rem;
  }

  .aitdiop-btn-left {
    width: 15.0625rem;
    position: relative;
    overflow: hidden;
  }

  .aitdiop-btn-left>img {
    position: absolute;
    right: 0;
    top: 0;
    height: auto;
    padding: 1.25rem 0;
  }

  .aitdiop-btn-right {
    width: 12.5rem;
    position: relative;
    overflow: hidden;
  }

  .aitdiop-btn-right>img {
    position: absolute;
    top: 0;
    height: auto;
    padding: 1.25rem 0;
    left: 0;
  }

  .icollapse {
    width: 100%;
    /* border: 0.1111rem solid #3E3E3E; */
    border-radius: 0.625rem;
    overflow: hidden;
    font-family: Poppins-Regular, Poppins;
    /* background: #303131; */
  }

  .icollapse .icollapse-title-contain {
    width: 100%;
    border-top-left-radius: 0.625rem;
    border-top-right-radius: 0.625rem;
    background-color: #3E3E3E;
  }

  .icollapse .icollapse-title-contain-close {
    border-bottom-left-radius: 0.625rem;
    border-bottom-right-radius: 0.625rem;
  }

  .icollapse .icollapse-title-contain .icollapse-title {
    height: 6.3888rem;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5555rem;
    font-weight: 400;
  }

  .icollapse .icollapse-title-contain .icollapse-title .ititle {
    text-align: left;
    font-size: 1.5rem;
    font-family: Poppins-Regular, Poppins;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 2.1875rem;
  }

  .icollapse .icollapse-title-contain .icollapse-title .ititle-v2 {
    line-height: 2.2222rem;
  }

  .icollapse .icollapse-title-contain .icollapse-title .icollepse-arrow {
    width: 1rem;
    height: 0.5555rem;
    margin-right: 1.875rem;
  }

  .icollapse-img-i1 {
    width: 2.125rem;
    height: 2.625rem;
    margin: 2.125rem 1.5rem 2.125rem 1.875rem;
  }

  .icollapse-img {
    width: 2.25rem;
    height: 2.25rem;
    margin: 2.125rem 1.5rem 2.125rem 1.875rem;
  }

  .iarrow-i1 {
    margin-left: 6.3125rem;
  }

  .iarrow {
    margin-left: 1.5rem;
  }

  .ibody-close {
    width: 100%;
    height: 0;
    background: #303131;
    border-radius: 0 0 0.625rem 0.625rem;
    overflow: hidden;
    transition: all .3s ease .1s;
  }

  .ibody-open {
    width: 100%;
    background: #303131;
    border-radius: 0 0 0.625rem 0.625rem;
    overflow: hidden;
    transition: all .3s ease .1s;
  }

  .icontent {
    padding: 2.125rem 1.4375rem 2.875rem 1.875rem;
    text-align: left;
    font-size: 1.125rem;
    font-family: Poppins-Regular, Poppins;
    font-weight: 400;
    color: #2DBBF7;
    line-height: 1.6875rem;
  }

  .icontent-ic2 {
    padding-left: 1.875rem;
    text-align: left;
    font-size: 1.5rem;
    font-family: Poppins-Regular, Poppins;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 2.1875rem;
  }

  .list-content {
    display: flex;
    margin-top: 4.0625rem;
  }

  /* .list-content:first-child {
    margin-bottom: 1.125rem;
  } */

  .list-content>img {
    margin-left: 3rem;
    width: 1.5rem;
    height: 1.5rem;
  }

  .ititle>a {
    margin-left: 0.45rem;
    color: #F7B62D !important;
  }

  .aitdiop-hint {
    display: flex;
    text-align: center;
    justify-content: flex-start;
    align-items: center;
    margin-top: 1.375rem;
  }

  .icollapse-list-p {
    font-size: 1.5rem;
    font-family: Poppins-Regular, Poppins;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 2.1875rem;
    margin-bottom: 0.75rem;
  }

  .icollapse-list-p2 {
    font-size: 1.125rem;
    font-family: Poppins-Regular, Poppins;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 1.6875rem;
    margin-bottom: 0rem;
  }


  .aitdiop-hint>img {
    width: 1.25rem;
    height: 1.25rem;
    margin-bottom: 0.25rem;
  }

  #userName:-ms-input-placeholder {
    color: red;
  }

  .aitdiop-hint>p {
    margin-bottom: 0px !important;
    margin-left: 0.5rem;
    font-size: 1.125rem;
    font-family: Poppins-Regular, Poppins;
    font-weight: 400;
    color: #D81F1F;
    line-height: 1.6875rem;
  }

  .icollapse-list {
    display: flex;
    margin-bottom: 2.25rem;
  }

  .icollapse-list-l1 {
    display: flex;
    flex-direction: column;
    margin-bottom: 2.25rem
  }

  .icollapse-list-input {
    margin-right: 12rem;
    border-bottom: 0.125rem solid #3F4142;
    outline: none;
    border-radius: 0;
  }

  .icollapse-list-input>input {
    width: 100%;
    background-color: #303131;
    color: #ffffff;
    font-size: 1.5rem;
  }

  input::-webkit-input-placeholder {
    color: #3F4142;

  }

  input:-moz-placeholder {
    color: #3F4142;
  }

  input::-moz-placeholder {
    color: #3F4142;
  }

  input:-ms-input-placeholder {
    color: #3F4142;
  }


  .icollapse-ico-list {
    margin-top: 2.25rem;
  }

  .icollapse-list-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2.25rem 0rem 2.3125rem 1.875rem;
    font-family: Poppins-SemiBold, Poppins;
    font-weight: 600;
    font-size: 1.25rem;
  }

  .icollapse-list-b1 {
    display: flex;
    text-align: center;
    align-items: center;
    width: 7.4375rem;
    height: 2.5625rem;
    background: #F7B62D;
    border-radius: 0.5rem;
    justify-content: center;
    color: #313131;
    line-height: 1.875rem;
    font-size: 1.25rem;
  }

  .icollapse-list-b2 {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 13.6875rem;
    height: 2.5625rem;
    background: #303131;
    border-radius: 0.5rem;
    color: #F7B62D;
    line-height: 1.875rem;
    margin-right: 12rem;
  }

  .icollapse-list-b2>p {
    margin-bottom: 0rem;
    font-size: 1.25rem;
    font-family: Poppins-Regular, Poppins;
    font-weight: 400;
    color: #F7B62D;
    line-height: 1.875rem;
  }

  .list-content-link {
    margin-bottom: 0rem;
    font-size: 1.125rem !important;
    font-family: Poppins-Regular, Poppins;
    font-weight: 400;
    color: #49A5F7;
    line-height: 1.6875rem;
  }

  .icollapse-addres-list {
    margin-top: 0rem;
  }

  .icollapse-addres-p {
    font-size: 1.5rem;
    line-height: 2.1875rem;
    margin-bottom: 0rem;
    font-family: Poppins-Regular, Poppins;
    font-weight: 400;
    color: #FFFFFF;
  }

  .icollapse-link {
    width: 13.125rem;
    height: 2.1875rem;
    background: #F7B62D;
    border-radius: 0.625rem;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    font-size: 1.25rem;
    font-family: Poppins-SemiBold, Poppins;
    font-weight: 600;
    color: #313131;
    padding: 0rem 0.8125rem;
  }

  .recInput {
    display: flex;
    text-align: center;
    justify-content: space-between;
  }

  .icollapse-recInput {
    width: 100%;
    border-bottom: 0.125rem solid #3F4142;
    margin-right: 0.4375rem;
    outline: none;
    border-radius: 0;
  }

  .icollapse-recInput>input {
    width: 100%;
    background-color: #303131;
    color: #ffffff;
    font-size: 1.5rem;
  }

  .captcha {
    display: flex;
    justify-content: center;
  }

  @media only screen and (min-width: 0px) and (max-width: 750px) {
    .aitdiop-head {
      padding-left: 1.375rem;
      padding-top: 3rem;
    }

    .aitdiop-head-title {
      font-size: 3.75rem;
      line-height: 5.1875rem;
    }

    .aitdiop-head-token {
      font-size: 1.625rem;
      line-height: 2.4375rem;
      margin-top: 2.125rem;
      padding-right: 1.8125rem;
    }

    .aitdiop-head-about {
      margin-top: 3.25rem;
      font-size: 1.875rem;
      line-height: 2.875rem;
      margin-bottom: 1.25rem;
    }

    .aitdiop-head-connter {
      font-size: 1.625rem;
      font-family: Poppins-Regular, Poppins;
      line-height: 2.4375rem;
      margin-bottom: 3rem;
      padding-right: 1.875rem;
    }

    .aitdiop-btn-left {
      display: none;
    }

    .aitdiop-btn-right {
      display: none;
    }

    .aitdiop-btn-connter {
      margin: 0 1.875rem;
      margin-top: 3rem;
      padding: 0;
      margin-bottom: 5.0625rem;
    }

    .aitdiop-btn-title {
      padding: 5.625rem 3.0625rem 2.375rem 3.0625rem;
      margin-bottom: 0rem;

      font-size: 1.75rem;
      line-height: 2.625rem;
    }

    .aitdiop-trumpet>img {
      width: 7.625rem;
      height: 6.8125rem;
    }

    .aitdiop-trumpet {
      left: 1rem;
      top: 1.375rem;
    }

    .airdiop-list-img2 {
      margin: 1.875rem 1rem 1.875rem 1.625rem;
    }

    .airdiop-list-img {
      margin: 2.625rem 1rem 2.625rem 1.625rem;
    }

    .airdiop-list-img:first-child {
      margin: 1.875rem 1rem 1.875rem 1.625rem;
    }

    .airdiop-list-img:last-child {
      width: 2.375rem;
      height: 2.9375rem;
    }

    .aitdrop-list {
      margin: 0 1.875rem;
      margin-bottom: 1.5rem;
      font-size: 1.625rem;
      line-height: 2.4375rem;
      text-align: left;
    }

    .icollapse {
      width: calc(100% - 3.75rem);
      margin: 0 1.875rem;
      margin-bottom: 1.5rem;
    }

    .iarrow-i1 {
      margin-left: 3.3125rem;
    }

    .icontent {
      font-size: 1.375rem;
      line-height: 2.0625rem;
      margin: 1.75rem 0rem 1.75rem 1.625rem;
      padding: 0
    }

    /* .list-content:first-child {
      margin-bottom: 0.875rem;
    } */

    .aitdrop-node {
      margin: 0 1.875rem;
      margin-top: 0.25rem;
      font-size: 1.5rem;
      line-height: 2.1875rem;
    }

    .airdiop-list-btn {
      width: 7.4375rem;
      height: 3rem;
      border-radius: 0.5rem;
      font-size: 1.5rem;
      line-height: 2.1875rem;
      margin-right: 1.625rem;
      margin-left: 1.9375rem;
    }

    .aitdiop-table {
      margin-top: 1.9375rem;
      margin-bottom: 3rem;
    }

    .aitdiop-node-img {
      margin-right: 2rem;
      width: 4.8125rem;
      height: 3rem;
    }

    .aitdiop-node-d {
      font-size: 1.75rem;
      line-height: 2.625rem;
    }

    .airdiop-tr {
      font-size: 1.625rem;
      line-height: 2.4375rem;
    }

    .airdiop-td>img {
      width: 1.625rem;
      height: 1.625rem;
      margin-bottom: 0.625rem;
      margin-right: 0.375rem;
    }

    .aitdiop-trumpet-down {
      bottom: 2.625rem;
      right: 0.2rem;
    }

    .aitdiop-trumpet-down img {
      width: 5.8125rem;
      height: 5.75rem;
    }

    .airdiop-td {
      padding-left: 1.8125rem;
      padding-right: 0.625rem;
    }

    .airdiop-td2 {
      padding: 0 6.375rem;
    }

    .list-content>img {
      margin-left: 0.625rem;
      margin-top: 0.25rem;
    }

    .icollapse .icollapse-title-contain .icollapse-title .ititle {
      font-size: 1.625rem;
      line-height: 2.4375rem
    }

    .icollapse-img-i1 {
      margin: 2.625rem 1.5rem 2.625rem 1.875rem;
    }

    .icollapse .icollapse-title-contain .icollapse-title {
      height: 7.8125rem;
    }

    .icollapse-img {
      width: 2.25rem;
      height: 2.25rem;
      margin: 2.75rem 1.5rem 2.75rem 1.875rem;
    }

    .list-content-link {
      margin-bottom: 0rem;
      font-size: 1.375rem !important
    }

    .icollapse-list-p {
      font-size: 1.5rem;
      line-height: 2.1875rem;
      margin-bottom: 0rem;
    }

    .icollapse-list-input {
      margin-right: 1.875rem;
    }

    .icollapse-list-input>input {
      font-size: 1.75rem;
    }

    .aitdiop-hint>p {
      margin-bottom: 0px !important;
      font-size: 1.375rem;
      line-height: 2.0625rem;
    }

    .icollapse-list-p2 {
      font-size: 1.375rem;
      line-height: 2.0625rem;
      margin-bottom: 0rem;
      color: #979797;
    }

    .icollapse-list-b1 {
      width: 11.0625rem;
      height: 3.125rem;
      border-radius: 0.625rem;
      font-size: 1.625rem;
      line-height: 2.4375rem;
    }

    .icollapse-list-b2 {
      width: 16.6875rem;
      height: 3.125rem;
      border-radius: 0.625rem;
      line-height: 2.4375rem;
      margin-right: 1.5rem;
    }

    .icollapse-list-b2>p {
      font-size: 1.625rem;
      line-height: 2.4375rem;
    }

    .icollapse-link {
      width: 14.125rem;
      height: 2.1875rem;
      margin-right: 1rem;
    }
  }
</style>
