<template>
  <div class="index-infos-contain">
    <b-row class="index-info">
      <b-col xs="12" sm="12" md="1"></b-col>
      <b-col xs="12" sm="12" md="4">
        <div class="infos">
          <div class="title-bg">OpenPublish</div>
          <b-nav vertical>
            <b-nav-item href="https://docs.openpublish.io" target="_blank">
              <div class="title-sub">
                <span>Whitepaper</span>
                <img class="title-sub-img" src="../../assets/imgs/index-right.png" />
              </div>
            </b-nav-item>
            <b-nav-item :to="{name:'home'}" >
              <div class="title-sub">
                <span>Official website demo</span>
                <img class="title-sub-img" src="../../assets/imgs/index-right.png" />
              </div>
            </b-nav-item>
          </b-nav>
        </div>

      </b-col>
      <b-col xs="12" sm="12" md="6" class="index-logo-contain">
        <img class="index-logo" src="../../assets/imgs/index-logo.png" />
      </b-col>
      <b-col xs="12" sm="12" md="1"></b-col>

    </b-row>
  </div>
</template>

<script>
</script>

<style scoped="scoped">
  a:link,a:visited{color: #FFFFFF;text-decoration: none;}
  a:hover{color: #FFFFFF;text-decoration: none;opacity: 0.6;}

.index-infos-contain{
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #181c61;
  overflow: hidden;
}
.index-info{
  width: -webkit-calc(100% - 2.4rem);
  color: #FFFFFF;
  overflow: hidden;
  margin: 0 auto;
}
.infos{
  width: -webkit-calc(100% - 5rem);
  margin-left: 5rem;
}
.index-info .title-bg{
  padding-top: 4rem;
  padding-bottom: 2rem;
  font-size: 2.72rem;
  font-weight: 500;
}
.index-info .title-sub{
  font-size: 1.44rem;
  font-size: 300;
  margin-top: 0.75rem;
}
.index-info .title-sub .title-sub-img{
 width: 1.44rem;
 height: 1.08rem;
 margin: 0 1rem;
}
.index-logo-contain{
  text-align: center;
}
.index-logo{
  width: 30rem;
  height: 36.8rem;
}
/* @media only screen and (min-width: 993px) and (max-width: 2560px){

    .index-info .title-bg{
      padding-top: 2.4rem;
      padding-bottom: 2.4rem;
      font-size: 2.72rem;
      font-weight: 600;
    }
    .index-info .title-sub{
      font-size: 1.2rem;
      font-size: 300;
    }
    .index-logo{
      width: 20rem;
      height: 24.52rem;
    }
  }
 */
@media only screen and (min-width: 576px) and (max-width: 992px){

    .index-info .title-bg{
      padding-top: 2.4rem;
      padding-bottom: 2.4rem;
      font-size: 2.72rem;
      font-weight: 600;
    }
    .index-info .title-sub{
      font-size: 1.2rem;
      font-size: 300;
    }
    .index-logo{
      width: 20rem;
      height: 24.52rem;
    }
  }

  @media only screen and (min-width: 0px) and (max-width: 576px){

    .index-info .title-bg{
      padding-top: 1.8rem;
      padding-bottom: 1.8rem;
      font-size: 2rem;
      font-weight: 500;
    }
    .index-info .title-sub{
      font-size: 1.2rem;
      font-size: 300;
    }

    .index-logo{
      width: 20rem;
      height: 24.52rem;
    }
  }

  .nav-link{
    padding: 0.5rem 0;
  }
</style>
