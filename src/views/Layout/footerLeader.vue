<template>
  <footer class="footer ifooter">

    <div class="irow-footer-content">
      <div class="copyright text-center text-lg-left text-white-60">
        <b-nav class="nav-footer " align="left">
          <b-nav-item>
            <div class="ib-nav-item-content">{{$t('page.docs')}}</div>
          </b-nav-item>
          <b-nav-item>
            <div class="ib-nav-item-content">{{$t('page.github')}}</div>
          </b-nav-item>
          <b-nav-item>
            <div class="ib-nav-item-content">{{$t('page.privacyPolicy')}}</div>
          </b-nav-item>
        </b-nav>
      </div>
      <div class="copyright text-center text-lg-left text-white-60">
        <b-nav class="nav-footer " align="left">
          <b-nav-item>
            <div class="ib-nav-item-content">{{$t('page.termsofUse')}}</div>
          </b-nav-item>
          <b-nav-item>
            <div class="ib-nav-item-content">{{$t('page.NFTMarketplace')}}</div>
          </b-nav-item>
          <b-nav-item>
            <div class="ib-nav-item-content">{{$t('page.blockChain')}}</div>
          </b-nav-item>
        </b-nav>
      </div>
      <div class="copyright text-center text-lg-left text-white-60">
        <b-nav align="right">
          <b-nav-item>
            <div class="ib-nav-item-content">
              <!-- <b-img fluid class="ilogo-social" src="img/icons/logo/twitter.png"></b-img><span></span> -->
              <b-img fluid class="ilogo-social" :src="require('../../assets/imgs/news/tg-1.svg')"></b-img>
              <span></span>
            </div>
          </b-nav-item>
          <b-nav-item>
            <div class="ib-nav-item-content">
              <!-- <b-img fluid class="ilogo-social" src="img/icons/logo/telegram.png"></b-img><span></span> -->
              <b-img fluid class="ilogo-social" :src="require('../../assets/imgs/news//Twitter-2.svg')"></b-img>
              <span></span>
            </div>
          </b-nav-item>
          <b-nav-item>
            <div class="ib-nav-item-content">
              <b-img fluid class="ilogo-social" :src="require('../../assets/imgs/news/Discord-2.svg')"></b-img>
              <span></span>
            </div>
          </b-nav-item>
          <b-nav-item>
            <div class="ib-nav-item-content">
              <b-img fluid class="ilogo-social" :src="require('../../assets/imgs/news/yb-2.svg')"></b-img>
              <span></span>
            </div>
          </b-nav-item>
        </b-nav>
      </div>
    </div>
    <div class="barList-b2">
      <div class="barList-b2-div">
        <div class="barList-div barList-reser-a">
          <ul style="margin-right: 11rem;">
            <li><a href="#home">Docs</a></li>
            <li><a href="#news">Github</a></li>
            <li><a href="#contact">privacy Policy</a></li>
          </ul>
        </div>
        <div class="barList-div barList-reser-a">
          <ul>
            <li><a href="#home">Terms of Use</a></li>
            <li><a href="#news">NFTMarketplace</a></li>
            <li><a href="#contact">Blockchain</a></li>
          </ul>
        </div>
      </div>
      <div class="barList-div" style="margin-top: 0px;justify-content: center;">
        <img src="../../assets/imgs/news/tg-1.svg" />
        <img src="../../assets/imgs/news/Twitter-2.svg" />
        <img src="../../assets/imgs/news/Discord-2.svg" />
        <img style="margin-right: 0px;" src="../../assets/imgs/news/yb-2.svg" />
      </div>
    </div>
    <div class="barList">
      <div class="open">
        <!-- <img src='../assets/img/OpenPublish.svg' /> -->
        <h2>Open<span>Publish</span></h2>
      </div>
      <div class="barList-reser">
        <img src='../../assets/imgs/news/logo.svg' />
        2022｜OpenPublish | All rights reserved.
      </div>
    </div>
  </footer>
</template>
<script>
  export default {
    data() {
      return {
        year_end: new Date().getFullYear(),
        year_start: new Date().getFullYear() - 4
      };
    }
  };
</script>
<style scoped>
  .barList-b2 {
    display: none;
  }

  .barList {
    text-align: center;
    margin-top: 4.875rem;
  }

  .barList-reser-img {
    height: 70px;
    width: 379px;
  }

  .barList-reser {
    font-weight: 500;
    line-height: 33px;
    margin-top: 17px;
  }

  .open h2 {
    font-family: 'Russo One', sans-serif;
    font-size: 2.125rem;
    color: #ffffff;
    line-height: 2.1875rem;

  }

  .open h2 span {
    color: #F7B62D;
  }

  .irow-footer-content {
    /* width: 63.9375rem; */
    /* max-width: 1440px; */
    width: calc(100% - 56.125rem);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 4.5rem;
  }

  .ifooter {
    width: 100%;
    height: 29.625rem;
    line-height: 5.7222rem;
    /* max-width: 1920px; */
    margin: 0 auto;
    background-color: #313131;
    overflow: hidden;
  }

  .nav-footer {
    display: flex;
    flex-direction: column;
  }

  .irow-footer-up {
    color: #FFFF00;
  }

  .irow-footer-lists {
    width: 96%;
    margin: 0 0 0 auto;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .irow-footer-lists .irow-footer-list {
    width: 20%;
    max-width: 240px;
    min-width: 180px;
    text-align: left;
  }

  .irow-footer-lists .irow-footer-list .list_title {
    font-size: 1.6rem;
    font-weight: bold;
    color: #88a6f2 !important;
  }

  @media only screen and (min-width: 0px) and (max-width: 750px) {
    .barList-reser {
      margin-top: 0.625rem;
    }
    .open h2 {
      margin-bottom: 0rem;
    }

    .barList {
      text-align: center;
      margin-top: 2.375rem;
    }

    .barList-reser-a {
      text-decoration: underline;
    }

    .barList-b2-div {
      display: flex;
      width: 100%;
      margin-top: 2.25rem;
    }

    .barList-div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: left;
    }

    .barList-div>ul {
      margin-bottom: 0px;
    }

    .barList-div>ul li {
      font-size: 1.5rem;
      line-height: 2.1875rem;
      margin-bottom: 1.5625rem;
    }

    .barList-div img {
      width: 2.5625rem;
      height: 2rem;
      margin-right: 4.9375rem;
      margin-top: 2.375rem;
    }

    .barList-b2 {
      display: block;
      display: grid;
      justify-content: center;
      width: calc(100% - 11.375rem);
      margin-left: 5.6875rem;
      margin-right: 5.6875rem;
    }

    .irow-footer-content {
      display: none;
      /* width: calc(100% - 11.375rem); */
      /* margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-top: 4.5rem; */

    }

    .irow-footer-lists .irow-footer-list .li_padding_left_3 {
      padding-left: 3rem;
    }

    .irow-footer-lists .irow-footer-list .li_padding_left_2 {
      padding-left: 1.5rem;
    }
  }

  @media only screen and (max-width: 640px) {
    .irow-footer-lists .irow-footer-list .li_padding_left_3 {
      padding-left: 0;
    }

    .irow-footer-lists .irow-footer-list .li_padding_left_2 {
      padding-left: 0;
    }
  }

  .ib-nav-item-content {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.375rem;
    font-family: Poppins-Regular, Poppins;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 2.0625rem;
    padding-bottom: 1.875rem;
    text-decoration: underline
  }

  .ilogo-social {
    width: 2.1875rem;
    height: 2.1875rem;
  }

  .ib-nav-item-content:hover img {
    opacity: 1;
  }

  .copyright {
    color: #979797;
  }

  .ifooter-btn-col {
    text-align: center;
  }

  .ifooter-btn {
    width: 11.2rem;
    margin: 1.2rem auto;
    color: #979797 !important;
  }

  .nav-link {
    padding: 0 1rem;
  }
</style>
