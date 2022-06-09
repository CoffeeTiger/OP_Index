<template>
  <div class="ihometop">
    <div class="ihometop-contain">
      <div class="ihome-info">
        <div class="ititle-big">{{$t('page.headerTitle1')}}<br />{{$t('page.headerTitle2')}}<br />{{$t('page.headerTitle3')}} </div>
        <div class="ititle-small">{{$t('page.headerSubTitle1')}}{{$t('page.headerSubTitle2')}} </div>
        <div class="ishare">
          <a href="https://twitter.com/OpenPublishNFT" target="_blank"><img src="../../assets/imgs/home-top-tw.png" class="ishare-img"/></a>
          <a href="https://t.me/+YC_Eo3UDdZIzNGZk" target="_blank"><img src="../../assets/imgs/home-top-tg.png" class="ishare-img" /></a>
          <a href="https://discord.gg/tKMbjCdVYf" target="_blank"><img src="../../assets/imgs/home-top-dis.png" class="ishare-img" /></a>
        </div>
        <div class="ilearn">
          <a href="https://wiki.openpublish.io" target="_blank">{{$t('page.learnmoreaboutOpenPublish')}}<b-icon icon="chevron-right" variant="Secondary"></b-icon></a>
        </div>
      </div>
      <div class="ihome-logo">
        <img src="../../assets/imgs/abc123.png" class="ihome-top-logo"/>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped="scoped">
.ihometop{
  width: 100%;
  padding-top: 4.166666rem;
}
.ihometop-contain{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.ihome-info-out{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 5.555555rem;
}
.ihome-info{
  width: 32.388888rem;
}
.ihome-info .ititle-big{
  width: 100%;
  font-size: 1.777777rem;
  font-weight: bold;
  font-family: BMDoHyeon-OTF, BMDoHyeon;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ihome-info .ititle-small{
  width: 21.444444rem;
  height: 4rem;
  line-height: 1rem;
  margin: 0.8rem 0;
  font-size: 0.5rem;
  font-weight: 300;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ihome-info .ishare{
  width: 100%;
  line-height: 5.555555rem;
}
.ihome-info .ishare .ishare-img{
  width: 1.777777rem;
  height: 1.777777rem;
  margin-right: 1.8rem;
}
.ihome-info .ishare .ishare-img:hover{
  opacity: 0.8;
}
.ihome-info .ilearn{
  width: 100%;
  line-height: 1.222222rem;
  font-size: 1rem;
  font-weight: 400;
}
.ihome-info .ilearn > a{
  color: #4D5BF1 !important;
}
.ihometop-contain .ihome-logo{
  width: 22.888888rem;
  text-align: center;
}
.ihome-logo .ihome-top-logo{
  /* max-width: 24.64rem;
  max-height: 27.2rem; */
  width: 22.888888rem;
  height: 27.722222rem;
  /* width: 90%;
  height: auto; */
  border-radius: 0.555555rem;
}

@media only screen and (min-width: 0px) and (max-width: 767px){
  /* .ihometop-header, .ihometop-bottom{
    width: 100%;
    height: 2rem;
  }
  .ihome-info .ititle-big{
    width: 100%;
    font-size: 1.8rem;
    font-weight: 600;
  }
  .ihome-info .ititle-small{
    width: 100%;
    margin: 0.8rem 0;
    font-size: 1.2rem;
    font-weight: 400;
  }

  .ihometop-contain{
    padding: 0 1rem;
    margin: 0;
  }

  .ihometop-contain .ihome-logo{
    width: 100%;
    text-align: center;
    margin-top: 2rem;
  } */

  /* .ihome-logo .ihome-top-logo{
    max-width: 20rem;
    max-height: 20rem;
    width: 80%;
    height: auto;
  } */

}
</style>
