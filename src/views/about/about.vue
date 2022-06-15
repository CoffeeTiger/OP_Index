<template>
  <div class="about">
    <div class="about-our">
      <div class="about-our-title">Our Team</div>
      <div class="about-our-con">
        OpenPublish was developed by a group of ambitious professionals who not only
        They are in their respective fields, but also have a passion for cryptocurrencies in their professional and
        personal lives.
        Together they came up with the idea for OpenPublish - a sustainable blockchain-based business that provides
        Bringing tangible benefits to global NFT enthusiasts.
      </div>
    </div>
    <div class="about-list">
      <div class="about-list-img">
        <div class="about-list-m1 img-top">
          <div class="about-list-name">
            <div class="about-list-n1">
              <p class="p1">Hironaka Hiroe</p>
              <p class="p2">Co-founder & CEO</p>
            </div>
            <div class="about-list-n2">
              <p>in</p>
            </div>
          </div>
          <img src="../../assets/imgs/news/about3.png" />
        </div>
        <div class="about-list-m1">
          <div class="about-list-name">
            <div class="about-list-n1" style="margin-right: 2.1875rem;">
              <p class="p1">Roelof Bekkenenks</p>
              <p class="p2">Co-founder & CTO</p>
            </div>
            <div class="about-list-n2">
              <p>in</p>
            </div>
          </div>
          <img src="../../assets/imgs/news/about2.png" />
        </div>
        <div class="about-list-m1" style="margin-right:0px">
          <div class="about-list-name">
            <div class="about-list-n1" style="margin-right: 3.3125rem;">
              <p class="p1">Vương Mộng Nhi</p>
              <p class="p2">CBDO</p>
            </div>
            <div class="about-list-n2">
              <p>in</p>
            </div>
          </div>
          <img src="../../assets/imgs/news/about1.png" />
        </div>
      </div>
    </div>
    <div class="about-btn">
      <div class="about-btn-list">
        <div class="about-btn-list-l1">
          <div>Email press</div>
          <div class="about-btn-a"><a>press@OpenPublish.io</a></div>
        </div>
        <div class="about-btn-list-l2">
          <div>Email business</div>
          <div class="about-btn-a"><a>business@OpenPublish.io</a></div>
        </div>
        <div class="about-btn-list-l3">
          <div>Follow</div>
          <div class="about-btn-a about-btn-list-a">
            <a href="https://t.me/openpublishTGcn" target="_blank"><img src="../../assets/imgs/news/tg-1.svg" /></a>
            <a href="https://twitter.com/OpenPublishNFT" target="_blank"> <img
                src="../../assets/imgs/news/Twitter-2.svg" /></a>
            <a href="https://discord.gg/openpublish" target="_blank"><img
                src="../../assets/imgs/news/Discord-2.svg" /></a>
            <a href="https://www.youtube.com/c/Openpublish"><img style="margin-right: 0px;"
                src="../../assets/imgs/news/yb-2.svg" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
</script>

<style scoped="scoped">
  .about-list-name {
    background-color: #F7B62D;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0.875rem;
    position: absolute;
    font-family: Poppins-SemiBold, Poppins;
    padding: 1.25rem 1rem;
    margin-left: 4.875rem;
    margin-top: -1.6875rem
  }

  .about-list-n1 {
    color: #313131;
    margin-right: 4.6875rem
  }

  .about-list-n1 .p1 {
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1rem;
  }

  .about-list-n1 .p2 {
    font-size: 1rem;
    font-family: Poppins-Regular, Poppins;
    font-weight: 400;
    line-height: 1rem;
    margin-bottom: 0rem
  }

  .about-list-n2>p {
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 2.75rem;
    color: #313131;
    margin-bottom: 0px;
  }

  .about-btn-a {
    margin-top: 1.3125rem;
    text-decoration: underline;
  }

  .about-btn-a img {
    width: 2.125rem;
    height: 1.75rem;
    margin-right: 2.3125rem;
  }

  .about-btn-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    margin: 0 12.125rem;
    width: calc(100% - 24.25rem);
    font-size: 1.25rem;
    font-family: Poppins-Regular, Poppins;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 1.875rem;
    padding: 4.75rem 0;
  }

  .about-btn {
    margin: 0 2.875rem;
    background-color: #121619;
    width: calc(100% - 5.75rem);
  }

  .about-list-m1 img {
    width: 100%;
    height: 100%;
  }

  .about-list-m1 {
    width: 33%;
    margin-right: 6.25rem;
    /* padding-right: 6.25rem; */
  }

  .about {
    background-color: #F7B62D;
    margin-top: 6.6rem;
    padding: 2.5rem 0;
  }

  .about .about-our {
    margin: 0 2.875rem;
    background-color: #ffffff;
    width: calc(100% - 5.75rem);
    padding-left: 19.625rem;
    margin-bottom: 2.5rem;
  }

  .about-list {
    margin: 0 2.875rem;
    background-color: #121619;
    width: calc(100% - 5.75rem);
    margin-bottom: 2.5rem;
  }

  .about .about-our .about-our-title {
    font-size: 4.375rem;
    font-family: Poppins-Bold, Poppins;
    font-weight: bold;
    color: #313131;
    line-height: 5.75rem;
    padding-top: 2.875rem;
    margin-bottom: 2.875rem;
  }

  .about-our-con {
    font-size: 1.125rem;
    font-family: Poppins-Regular, Poppins;
    font-weight: 400;
    color: #313131;
    line-height: 2.375rem;
    padding-bottom: 7rem;
    padding-right: 30.9375rem;
  }

  .about-list-img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 4.125rem;
    padding-bottom: 4.0625rem;
    padding-left: 19.625rem;
    padding-right: 19.625rem;
  }

  @media only screen and (min-width: 0px) and (max-width: 750px) {
    .about {
      padding: 2.5rem 0rem;
    }

    .about .about-our {
      padding-left: 0rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      text-align: left;
      margin: 0 1.875rem;
      width: calc(100% - 3.75rem);
      margin-bottom: 1.875rem;
    }

    .about-our-con {
      padding: 2.125rem 1.1875rem 3rem 1.375rem;
      font-size: 1.625rem;
    }

    .about-list {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      margin: 0 1.875rem;
      background-color: #121619;
      width: calc(100% - 3.75rem);
    }

    .about-list-img {
      display: flex;
      flex-direction: column;
      padding: 0;
      text-align: left;
    }

    .about-list-m1 {
      width: 100%;
      padding: 0rem 6.6875rem 9.25rem 5.1875rem;
      margin-right: 0rem;
    }

    .img-top {
      padding-top: 9.25rem;
    }

    .about-list-name {
      padding: 0.5625rem 1.375rem;
      color: #313131;
      margin-left: 0rem;
      margin-top: -1.875rem;
      right: 7.0625rem;
    }

    .about-list-n1 .p1 {
      font-weight: 600;
      font-size: 1.625rem;
      line-height: 2rem;
      margin-bottom: 0rem;
    }

    .about-list-n1 .p2 {
      font-size: 1.625rem;
      font-family: Poppins-Regular, Poppins;
      font-weight: 400;
      line-height: 2rem;
    }

    .about-list-n2 {
      font-size: 2.5rem;
      font-weight: 600;
      font-family: Poppins-SemiBold, Poppins;
      line-height: 3.75rem;
    }

    .about-btn {
      margin: 1.875rem 1.875rem 0rem 1.875rem;
      background-color: #121619;
      width: calc(100% - 3.75rem);
    }

    .about-btn-list {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: left;
      align-items: flex-start;
      margin-left: 3.125rem;
      padding: 3.1875rem 0;
      font-size: 1.625rem;
    }

    .about-btn-list-l1 {
      margin-bottom: 5.25rem;
    }

    .about-btn-list-l2 {
      margin-bottom: 4.375rem;
    }

    .about-btn-list-a {
      margin-top: 2.5rem;
    }

    .about-btn-a img {
      width: 3rem;
      height: 2.5rem;
      margin-right: 3.1875rem;
    }

    .about .about-our .about-our-title {
      font-size: 4.375rem;
      margin-left: 1.375rem;
      margin-bottom: 0rem;
    }
  }
</style>
