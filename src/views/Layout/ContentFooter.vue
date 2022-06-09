<template>
  <footer class="footer ifooter px-4">
    <b-row class="irow-footer-content">
      <b-col>
        <div class="irow-footer-up irow-footer-lists">
          <div class="irow-footer-list">
            <b-nav vertical class=" nav-footer justify-content-lg-end">
              <b-nav-item disabled><span class="list_title">Community</span></b-nav-item>
              <b-nav-item>Team + Advisors</b-nav-item>
              <b-nav-item>Resources</b-nav-item>
              <b-nav-item>FAQ</b-nav-item>
            </b-nav>
          </div>
          <div class="irow-footer-list">
            <b-nav vertical class=" nav-footer justify-content-lg-end">
              <b-nav-item disabled><span class="list_title">Developers</span></b-nav-item>
              <b-nav-item>Documents</b-nav-item>
              <b-nav-item>GitHub</b-nav-item>
            </b-nav>
          </div>
          <div class="irow-footer-list">
            <b-nav vertical class=" nav-footer justify-content-lg-end">
              <b-nav-item disabled><span class="list_title">Products</span></b-nav-item>
              <b-nav-item>Construction</b-nav-item>
            </b-nav>
          </div>
          <div class="irow-footer-list">
            <b-nav vertical class=" nav-footer justify-content-lg-end li_padding_left_2">
              <b-nav-item disabled><span class="list_title">OpenPublish</span></b-nav-item>
              <b-nav-item>Ecosystem</b-nav-item>
              <b-nav-item>Whitepaper</b-nav-item>
              <b-nav-item>Careers</b-nav-item>
              <b-nav-item>Contact</b-nav-item>
            </b-nav>
          </div>
          <div class="irow-footer-list">
            <b-nav vertical class=" nav-footer justify-content-lg-end li_padding_left_3" align="right" justified>
              <b-nav-item disabled><span class="list_title">Social</span></b-nav-item>
              <b-nav-item>
                <div class="ib-nav-item-content">
                  <b-img fluid class="ilogo-social" src="img/icons/logo/twitter.png"></b-img><span>Twitter</span>
                </div>
              </b-nav-item>
              <b-nav-item>
                <div class="ib-nav-item-content">
                  <b-img fluid class="ilogo-social" src="img/icons/logo/telegram.png"></b-img><span>Telegram</span>
                </div>
              </b-nav-item>
              <b-nav-item>
                <div class="ib-nav-item-content">
                  <b-img fluid class="ilogo-social" src="img/icons/logo/discord.png"></b-img><span>Discord</span>
                </div>
              </b-nav-item>
              <b-nav-item>
                <div class="ib-nav-item-content">
                  <b-img fluid class="ilogo-social" src="img/icons/logo/youtube.png"></b-img><span>Youtube</span>
                </div>
              </b-nav-item>
            </b-nav>
          </div>
        </div>
        <hr class="ihr-footer" />
        <b-row align-v="center" class="justify-content-lg-between">
          <b-col lg="6">
            <div class="copyright text-center text-lg-left text-white-60">
              © {{year_start}}-{{year_end}} Ozone Networks, Inc
            </div>
          </b-col>
          <b-col lg="6">
            <b-nav align="center" class="nav-footer justify-content-lg-end">
              <b-nav-item href="#" target="_blank">
                Privacy Policy
              </b-nav-item>
              <b-nav-item href="https://twitter.com/the_x2y2" target="_blank">
                Terms of Use
              </b-nav-item>
            </b-nav>
          </b-col>
        </b-row>

      </b-col>
    </b-row>
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
  @import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');

  .irow-footer-content {
    max-width: 1200px;
    margin: 0 auto;
  }

  .ifooter {
    background-color: #47418d;
  }

  .ihr-footer {
    border-top: 1px solid #625bb6 !important;
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

  @media only screen and (min-width: 992px) {
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
  }

  .ilogo-social {
    width: 1.44rem;
    height: 1.44rem;
    margin-right: 0.6rem;
    opacity: 0.6;
  }

  .ib-nav-item-content:hover img {
    opacity: 1;
  }

  .copyright {
    color: #b4c8fa;
  }
</style>
