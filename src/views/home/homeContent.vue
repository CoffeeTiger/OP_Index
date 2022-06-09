<template>
  <div class="icontainer-homepage">
    <div class="ihome-publicity">
      <div class="ipublicity-left">
        <div class="islogans">
          <p class="index-title">Get your Rewards<br /> Any Time Any <br />size Only at<br /><span
              style="color: #F7B62D">OpenPublish</span>
          </p>
        </div>
        <div class="ishares">
          <a target="_blank"><img src="../../assets/imgs/news/tg.svg" class="ihome-share" /></a>
          <a target="_blank"><img src="../../assets/imgs/news/Twitter.svg" class="ihome-share" /></a>
          <a target="_blank"><img src="../../assets/imgs/news/xiaoren.svg" class="ihome-share" /></a>
          <a target="_blank"><img src="../../assets/imgs/news/yb.svg" class="ihome-share" /></a>
        </div>
        <div class="imore">
          <a target="_blank">
            <span class="imore-desc">{{$t('page.learnmoreaboutOpenPublish')}}</span>
            <img src="../../assets/imgs/arrow-right.png" class="ihome-more" />
          </a>
        </div>
      </div>
      <div class="ipublicity-right">
        <img src="../../assets/imgs/home-logo.png" class="ihome-logo" />
      </div>
    </div>

    <div class="ihome-panel">
      <div class="ipanel-header">
        <div class="ititle color_yellow">{{$t('page.roadMap')}}</div>
      </div>
      <div class="ipanel-body">
        <div class="roadmap">
          <div class="roadmap-top">
            <div>
              <h3>2022/04/08</h3>
              <p>OP Official</p>
              <p>Twitter,Reddit,</p>
              <p>and Discord Launch</p>
            </div>
            <div>
              <h3>2022/06/16</h3>
              <p>“OP Alpha” Online</p>
            </div>
            <div>
              <h3>2022/08/10</h3>
              <p>OP ILO Launch</p>
            </div>
            <div>
              <h3>2022/08/10</h3>
              <p>OP ILO Launch</p>
            </div>
          </div>
          <div class="roadmap-img">
            <div>
              <img src="../../assets/imgs/news/1.svg" />
            </div>
            <div>
              <img src="../../assets/imgs/news/2.svg" />
            </div>
            <div>
              <img src="../../assets/imgs/news/3.svg" />
            </div>
            <div>
              <img src="../../assets/imgs/news/4.svg" />
            </div>
          </div>
          <div class="roadmap-bottom">
            <div class="roadmap-b">
              <h3>2022/04/16</h3>
              <p>OP Official Site<br />Launch</p>
            </div>
            <div class="roadmap-b">
              <h3>2022/07/16</h3>
              <p>“OP Beta” Online<br /></p>
            </div>
            <div class="roadmap-b">
              <h3>2022/08/16</h3>
              <p>OP V1 Launch</p>
            </div>
            <div class="roadmap-b">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="ihome-panel ">
      <div class="ipanel-header">
        <div class="ititle color_yellow">{{$t('page.howToGetInvolved')}}</div>
      </div>
      <div class="ipanel-body1 iinvote-contain">

        <div class="iinvote bg_lightgray">
          <div class="iinvote-title">NFTs</div>
          <div class="iinvote-content">{{$t('page.involvedNfts1')}} <br />{{$t('page.involvedNfts2')}}</div>
          <!--  <div class="ibtn ibtn-invote">
              <router-link :to="{name:'nfts'}"><span class="color_black">NFTs</span></router-link>
            </div> -->
        </div>

        <div class="iinvote bg_lightgray">
          <div class="iinvote-title">{{$t('page.trading')}}</div>
          <div class="iinvote-content">{{$t('page.involvedTrading')}}</div>
          <!-- <div class="ibtn ibtn-invote color_black">NFTs</div> -->
        </div>

        <div class="iinvote bg_lightgray">
          <div class="iinvote-title">{{$t('page.staking')}}</div>
          <div class="iinvote-content">{{$t('page.involvedStaking1')}} <br />{{$t('page.involvedStaking2')}}
            <br />{{$t('page.involvedStaking3')}}
          </div>
          <!-- <div class="ibtn ibtn-invote">
              <router-link :to="{name:'rewards'}"><span class="color_black">{{$t('page.STAKE1')}}</span></router-link>
            </div> -->
        </div>

        <div class="iinvote bg_lightgray">
          <div class="iinvote-title">{{$t('page.bonding')}}</div>
          <div class="iinvote-content">{{$t('page.involvedBonding1')}}
            <br />{{$t('page.involvedBonding2')}}<br />{{$t('page.involvedBonding3')}}
          </div>
          <!-- <div class="ibtn ibtn-invote color_black">
              <router-link :to="{name:'bond'}"><span class="color_black">{{$t('page.BOND1')}}</span></router-link>
            </div> -->
        </div>

      </div>
    </div>

    <div class="ihome-panel">
      <div class="ipanel-header">
        <div class="ititle color_yellow">{{$t('page.aboutOpenPublish')}}</div>
      </div>
      <div class="ipanel-body1">
        <div class="ihome-media-contain bg_lightgray">
          <iframe class="ivideo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen frameborder="0" sandbox="allow-same-origin allow-scripts allow-presentation"
            src="https://www.youtube.com/embed/7bS9bz-fDI8?autoplay=0&amp;controls=1&amp;loop=1&amp;modestbranding=1&amp;rel=0"
            title="Meet OpenSea"></iframe>
        </div>
      </div>
    </div>

    <div class="ihome-panel">
      <div class="ipanel-header" style="margin-bottom: 3.75rem;">
        <div class="ititle color_yellow">FAQ</div>
      </div>
      <div class="faq-list">
        <div>Got questions? Get answers.</div>
        <div class="faq-find" style="margin-bottom: 1.875rem;">
          Find answers to the post common questions below. Have a query that we haven’t covered? Join our
          <a>Discord</a> or <a>Telegram</a> and reach out us.
        </div>
      </div>
      <div class="ipanel-body1">
        <div class="icollapse imargin-bottom-24">
          <div :class="open1?'icollapse-title-contain':'icollapse-title-contain icollapse-title-contain-close'">
            <div class="icollapse-title" @click="show(1)">
              <div class="ititle">{{$t('page.faqATitle1')}}</div>
              <div class="iarrow">
                <img src="../../assets/imgs/arrow-down.png" class="icollepse-arrow" v-if="!open1" />
                <img src="../../assets/imgs/arrow-up.png" class="icollepse-arrow" v-if="open1" />
              </div>
            </div>
          </div>
          <div :class="open1?'ibody-open':'ibody-close'">
            <div class="icontent">{{$t('page.faqAContant1')}}<br /><br /> {{$t('page.faqAContant2')}}</div>
          </div>
        </div>

        <div class="icollapse imargin-bottom-24 ">
          <div :class="open2?'icollapse-title-contain':'icollapse-title-contain icollapse-title-contain-close'">
            <div class="icollapse-title" @click="show(2)">
              <div class="ititle">{{$t('page.faqBTitle1')}}</div>
              <div class="iarrow">
                <img src="../../assets/imgs/arrow-down.png" class="icollepse-arrow" v-if="!open2" />
                <img src="../../assets/imgs/arrow-up.png" class="icollepse-arrow" v-if="open2" />
              </div>
            </div>
          </div>
          <div :class="open2?'ibody-open-v2':'ibody-close'">
            <div class="icontent">{{$t('page.faqBContant1')}}</div>
          </div>
        </div>

        <div class="icollapse imargin-bottom-24 ">
          <div :class="open3?'icollapse-title-contain':'icollapse-title-contain icollapse-title-contain-close'">
            <div class="icollapse-title" @click="show(3)">
              <div class="ititle ititle-v2">{{$t('page.faqCTitle1')}}</div>
              <div class="iarrow">
                <img src="../../assets/imgs/arrow-down.png" class="icollepse-arrow" v-if="!open3" />
                <img src="../../assets/imgs/arrow-up.png" class="icollepse-arrow" v-if="open3" />
              </div>
            </div>
          </div>
          <div :class="open3?'ibody-open':'ibody-close'">
            <div class="icontent">
              <div class="ilittle_title">{{$t('page.faqCContant1')}}</div>
              <ul>
                <li>{{$t('page.faqCContant2')}}</li>
                <li>{{$t('page.faqCContant3')}}</li>
                <li>{{$t('page.faqCContant4')}}</li>
                <li>{{$t('page.faqCContant5')}}</li>
                <li>{{$t('page.faqCContant6')}}</li>
                <li>{{$t('page.faqCContant7')}}</li>
                <li>{{$t('page.faqCContant8')}}</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="icollapse imargin-bottom-24">
          <div :class="open4?'icollapse-title-contain':'icollapse-title-contain icollapse-title-contain-close'">
            <div class="icollapse-title" @click="show(4)">
              <div class="ititle ititle-v2">{{$t('page.faqDTitle1')}}</div>
              <div class="iarrow">
                <img src="../../assets/imgs/arrow-down.png" class="icollepse-arrow" v-if="!open4" />
                <img src="../../assets/imgs/arrow-up.png" class="icollepse-arrow" v-if="open4" />
              </div>
            </div>
          </div>
          <div :class="open4?'ibody-open-v3':'ibody-close'">
            <div class="icontent">
              <ul>
                <li>{{$t('page.faqDContant1')}}</li>
                <li>{{$t('page.faqDContant2')}}</li>
                <li>{{$t('page.faqDContant3')}}</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="icollapse imargin-bottom-24 ">
          <div :class="open5?'icollapse-title-contain':'icollapse-title-contain icollapse-title-contain-close'">
            <div class="icollapse-title" @click="show(5)">
              <div class="ititle">{{$t('page.faqBTitle5')}}</div>
              <div class="iarrow">
                <img src="../../assets/imgs/arrow-down.png" class="icollepse-arrow" v-if="!open5" />
                <img src="../../assets/imgs/arrow-up.png" class="icollepse-arrow" v-if="open5" />
              </div>
            </div>
          </div>
          <div :class="open5?'ibody-open-v2':'ibody-close'">
            <div class="icontent">{{$t('page.faqBContant5')}}</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'homecontent',
    data() {
      return {
        open1: false,
        open2: false,
        open3: false,
        open4: false,
        open5: false
      }
    },
    methods: {
      show(v) {
        // let contentDiv = document.getElementsByClassName("ibody-open");
        // if (parseInt(contentDiv[v].style.height) != contentDiv[v].scrollHeight) {
        //   contentDiv[v].style.height = contentDiv[v].scrollHeight + "px";
        // } else {
        //   contentDiv[v].style.height = "0px";
        // }

        if (v == 1) {
          this.open1 = !this.open1

        } else if (v == 2) {
          this.open2 = !this.open2
        } else if (v == 3) {
          this.open3 = !this.open3
        } else if (v == 4) {
          this.open4 = !this.open4
        } else if (v == 5) {
          this.open5 = !this.open5
        }
      }
    }
  }
</script>

<style scoped>
  .roadmap-bottom {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 1.5rem;
    /*  align-items: flex-end; */
  }

  .roadmap-img {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: flex-start;
  }

  .roadmap-img div {
    width: 24%;
  }

  .roadmap-img div img {
    width: 100%;
  }

  .faq-list {
    font-size: 2rem;
    font-family: var(--index-family);
    font-weight: 600;
    color: #FFFFFF;
    line-height: 3rem;
    margin-left: 22.5rem;
    text-align: start;
  }

  .faq-find>a {
    color: #F7B62D;
    margin-right: 0.375rem;
  }

  .faq-find {
    width: 66.875rem;
    font-size: 1.25rem;
    font-family: Poppins-Medium, Poppins;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 2.1875rem;
  }

  .roa-img1 {
    height: 100%;
    width: 100%;
    margin-bottom: 7.9rem;
    margin-top: 1.25rem;
  }

  .roadmap-top {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
  }

  .roadmap-top div {
    padding-left: 1.6875rem;
    width: 24%;
    display: flex;
    flex-direction: column;


  }

  .roadmap-top div h3 {
    color: #FFFFFF;
    font-family: Poppins-Bold, Poppins;
    font-weight: bold;
    font-size: 1.25rem;
    line-height: 1.875rem;
  }

  .roadmap-top div p {
    font-size: 1.125rem;
    font-family: OpenSans-Regular, OpenSans;
    font-weight: 400;
    color: #949494;
    line-height: 1.5rem;
  }


  .roadmap {
    display: flex;
    margin: 0 auto;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    overflow: hidden;
  }

  .roadmap-list-l1 {
    /* position: relative; */
    display: flex;
    flex-direction: column;
    width: 24%;
    align-items: baseline;
    color: #FFFFFF;
  }

  .roadmap-list-l1 p {
    font-size: 1.125rem;
    line-height: 1.5rem;
    font-weight: 400;
    color: #949494;
    text-align: left;
    display: flex;
    align-items: flex-end;
    font-family: OpenSans-Regular, OpenSans;
  }

  .roadmap-list-l1 h3 {
    text-align: left;
    color: #FFFFFF;
    font-size: 1.25rem;
    font-family: Poppins-Bold, Poppins;
    line-height: 1.875rem;
    font-weight: bold;
  }

  .roa-img {
    width: 100%;
    height: 100%;
    /* margin-left: -2rem; */
  }

  .roadmap-p {
    width: 100%;
    height: 2.5rem;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    margin-left: 1.875rem;
  }

  .roadmap-b {
    width: 24%;
    display: flex;
    /* justify-content: flex-start; */
    align-items: flex-start;
    flex-direction: column;
  }

  .roadmap-b h3 {
    color: #FFFFFF;
    font-family: Poppins-Bold, Poppins;
    font-weight: bold;
    font-size: 1.25rem;
    line-height: 1.875rem;
    align-self: center;
  }

  .roadmap-b p {
    font-size: 1.125rem;
    font-family: OpenSans-Regular, OpenSans;
    font-weight: 400;
    color: #949494;
    line-height: 1.5rem;
    align-self: center;
  }

  .ihome-publicity {
    height: 37.1111rem;
    display: flex;
    justify-content: space-between;
    margin-top: 9.3125rem;
    margin-bottom: 11.4375rem;
    margin-left: 15rem;
    margin-right: 15rem;
  }

  .index-title {
    font-size: 4.375rem;
    font-family: Poppins-Bold, Poppins;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 5.375rem;
  }

  .ipublicity-left {
    width: 55%;
    z-index: 2;
  }

  .ipublicity-left .islogans {
    width: 100%;
    padding-top: 2rem;
    line-height: 5.375rem;
    font-size: 4.375rem;
    font-family: Poppins-Bold, Poppins;
    font-weight: 600;
  }

  .ipublicity-left .ishares {
    width: 100%;
    margin-top: 8.0625rem;
    margin-bottom: 1.8125rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .ipublicity-left .ishares .ihome-share {
    width: 3rem;
    height: 3rem;
    margin-right: 2.25rem;
  }

  .ipublicity-left .ishares .ihome-share:hover {
    opacity: 0.6;
  }

  .ipublicity-left .imore {
    width: 100%;
  }

  .ipublicity-left .imore .imore-desc {
    line-height: 1.6875rem;
    font-size: 1.125rem;
    font-family: Poppins-Medium, Poppins;
    font-weight: 500;
    color: #A1730E !important;
  }

  .ipublicity-left .imore .ihome-more {
    width: 2.0625rem;
    height: 1.75rem;
    margin-left: 0.5rem;
  }

  .ipublicity-left .imore:hover {
    opacity: 0.6;
  }

  .ipublicity-right {
    width: 45%;
  }

  .ipublicity-right .ihome-logo {
    width: 100%;
    height: auto;
    z-index: 1;
  }

  .ihome-panel {
    width: 100%;
    margin-bottom: 6.1111rem;
    /* padding: 0rem 7.375rem; */
  }

  .ihome-panel .ipanel-header .ititle {
    line-height: 3.8333rem;
    font-size: 2.3333rem;
    font-family: Poppins-Bold, Poppins;
    font-weight: bold;
    margin-left: 22.5625rem;
  }

  .ihome-panel .ipanel-body {
    width: calc(100% - 48.875rem);
    margin-top: 3.75rem;
    margin-left: 24.4375rem;
    margin-right: 24.4375rem;
  }

  .ihome-panel .ipanel-body1 {
    width: calc(100% - 45rem);
    margin-top: 3.75rem;
    margin-left: 22.5rem;
    margin-right: 22.5rem;
  }

  .ihistory-contain {
    width: -webkit-calc(100% - 0.2222rem);
    height: 36.2777rem;
    border-radius: 0.8888rem;
    border: 0.1111rem solid #3F4142;
    overflow: hidden;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .ihistory-contain .ihistory {
    width: 65rem;
    height: 34.8333rem;
  }

  .iinvote-contain {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .iinvote-contain .iinvote {
    width: calc(50% - 0.625rem);
    overflow: hidden;
    padding: 1.6666rem 1.3888rem;
    border-radius: 1rem;
    margin-bottom: 1.1111rem;
    background: #252525;
    border: 0.125rem solid #3F4142;
  }

  .iinvote-contain .iinvote .iinvote-title {
    width: 100%;
    line-height: 2.625rem;
    font-size: 1.75rem;
    font-family: Poppins-SemiBold, Poppins;
    margin-bottom: 0.0625rem;
    font-weight: 600;
    color: #FFFFFF;
  }

  .iinvote-contain .iinvote .iinvote-content {
    width: 100%;
    min-height: 15.5555rem;
    line-height: 2rem;
    font-size: 1.125rem;
    font-family: Poppins-Regular, Poppins;
    font-weight: 400;
    color: #B4B4B4;
  }

  .iinvote-contain .iinvote .ibtn-invote {
    width: 8.2222rem;
    height: 2.7777rem;
    margin-top: 1.6666rem;
    line-height: 2.7777rem;
    border-radius: 1.3888rem;
    font-size: 1.5rem;
    font-family: Poppins-SemiBold, Poppins;
    font-weight: 600;
  }

  .ihome-media-contain {
    /* width: 13.8rem;
  opacity: 0.9;
  overflow: hidden;
  background-color: #FFFFFF6e; */
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    /* border: 0.04rem solid #3F4142;
  border-radius: 0.36rem;
  overflow: hidden; */
  }

  .ihome-media-contain .ivideo {
    /* width: 100%;
  height: auto;
  margin: 0 auto; */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }


  .icollapse {
    width: 100%;
    border: 0.1111rem solid #3F4142;
    border-radius: 0.8888rem;
    overflow: hidden;
    font-family: Poppins-Regular, Poppins;
  }

  .icollapse .icollapse-title-contain {
    width: 100%;
    background-color: #252525;
    border-top-left-radius: 0.8888rem;
    border-top-right-radius: 0.8888rem;
  }

  .icollapse .icollapse-title-contain-close {
    border-bottom-left-radius: 0.8888rem;
    border-bottom-right-radius: 0.8888rem;
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
    width: -webkit-calc(100% - 3.3333rem);
    margin-left: 1.875rem;
  }

  .icollapse .icollapse-title-contain .icollapse-title .ititle-v2 {
    line-height: 2.2222rem;
  }

  .icollapse .icollapse-title-contain .icollapse-title .icollepse-arrow {
    width: 1rem;
    height: 0.5555rem;
    margin-right: 1.875rem;
  }

  .ibody-open {
    width: 100%;
    /* height: 23.8888rem; */
    /* min-height: 9.6rem;
		transition: min-height .5s; */
    background: #3a3a3a;
    border-radius: 0 0 0.8888rem 0.8888rem;
    overflow: hidden;
    transition: all .3s ease .1s;
  }

  .ibody-open-v2 {
    width: 100%;
    height: 15.8888rem;
    /* min-height: 9.6rem;
  	transition: min-height .5s; */
    background: #3a3a3a;
    border-radius: 0 0 0.8888rem 0.8888rem;
    overflow: hidden;
    transition: all .3s ease .1s;
  }

  .ibody-open-v3 {
    width: 100%;
    height: 13.5555rem;
    /* min-height: 9.6rem;
  	transition: min-height .5s; */
    background: #3a3a3a;
    border-radius: 0 0 0.8888rem 0.8888rem;
    overflow: hidden;
    transition: all .3s ease .1s;
  }

  .ibody-close {
    width: 100%;
    height: 0;
    /* height: 0;
		min-height: 0;
		transition: min-height .5s; */
    background: #3a3a3a;
    border-radius: 0 0 0.8888rem 0.8888rem;
    overflow: hidden;
    transition: all .3s ease .1s;
  }

  .icollapse .icontent {
    width: -webkit-calc(100% - 3.3333rem);
    margin: 0 auto;
    padding: 1.6666rem 0;
    line-height: 2rem;
    font-size: 1.3333rem;
    font-weight: 300;
    color: #B4B4B4;
    font-family: Poppins-Regular, Poppins;
  }

  .icollapse .ilittle_title {
    margin: 1.9444rem 0 1.6666rem;
  }

  .icollapse .icontent ul {
    width: 100%;
  }

  .icollapse .icontent ul>li {
    line-height: 2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0.6666rem auto;
  }
</style>
