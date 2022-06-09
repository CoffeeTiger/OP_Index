<template>
  <div>
    <b-row class="iuserinfo">
      <b-col xs="12" sm="12" md="4" class="iuserinfo-left-with">
        <b-card no-body class="userinfo-panel ">
          <b-card-body class="userinfo-panel-left">
            <b-card-text>
              <div class="iuserinfos">
                  <div class="iheader" @click="editHeader">
                    <img :src="userheader" class="iheader-img" />
                  </div>
                  <div class="inikename" @click="editHeader">
                    <img src="../../assets/imgs/useals.png" class="iuseal" />
                    <div class="iname">{{username==''?'nickname':username}}</div>
                  </div>
                  <div class="iaddress">
                    <img src="../../assets/imgs/eth.png" class="icurrtype" />
                    <div class="iname">{{address.substr(0, 6) +'...'+ address.substr(-4)}}</div>
                  </div>
                  <div class="ijoin">
                    <div class="ivalue">{{$t('page.joined')}} 02/25 2020</div>
                  </div>
              </div>
            </b-card-text>
          </b-card-body>
        </b-card>
      </b-col>

      <b-col xs="12" sm="12" md="8" class="iuserinfo-right-with">
        <b-card no-body  class="userinfo-panel userinfo-panel-purple">
          <b-card-body class="userinfo-panel-right">
            <b-card-text>
              <div class="iuserinfos-right">
                <b-row class="iuserinfos-right-sec1">
                  <b-col xs="12" sm="7" md="7" lg="8" class="iuserinfos-decr-position">
                    <div class="icell-top-left">
                      <div class="value">{{balance}} veOPH</div>
                      <div>{{$t('page.balance')}}</div>
                    </div>
                  </b-col>
                  <b-col xs="12" sm="5" md="5" lg="4" class="iuserinfos-btn-position">
                    <div class="icell-top-right ">
                      <div class="ibtn-contain ibtn-contain-deposit">
                        <img src="../../assets/imgs/deposit.png" class="ibtn-img"/>
                        <div class="ibtn-text">{{$t('page.deposit')}}</div>
                      </div>
                    </div>
                  </b-col>
                </b-row>
                <b-row class="iuserinfos-right-sec2">
                  <b-col xs="12" sm="7" md="7" lg="8" class="iuserinfos-decr-position">
                    <router-link :to="{name:'original'}" class="ilinks">
                      <div class="icell-bottom">
                        <div class="value">590.58</div>
                        <div>{{$t('page.yesterdaysreward')}}</div>
                      </div>
                    </router-link>
                  </b-col>
                  <b-col xs="12" sm="5" md="5" lg="4" class="iuserinfos-btn-position">
                    <div class="ibtn-contain ibtn-contain-widthdraw">
                      <img src="../../assets/imgs/withdraw.png" class="ibtn-img"/>
                      <div class="ibtn-text">{{$t('page.withdraw')}}</div>
                    </div>
                  </b-col>
                  <!-- <b-col xs="12" sm="4" md="4">
                    <router-link :to="{name:'original'}" class="ilinks">
                    <div class="icell-bottom">
                      <div class="value">3256.58</div>
                      <div>{{$t('page.yesterdaysreward')}}</div>
                    </div>
                    </router-link>
                  </b-col>
                  <b-col xs="12" sm="3" md="3">
                    <router-link :to="{name:'original'}" class="ilinks">
                    <div class="icell-bottom">
                      <div class="value">121.7%</div>
                      <div>{{$t('page.APY')}}</div>
                    </div>
                    </router-link>
                  </b-col> -->
                </b-row>
              </div>
            </b-card-text>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import api from '../../util/network.js'
  export default{
    name:'userinfo',
    data() {
      return {
        userheader: '',
        username:'',
        address:'',
        balance:'0',
      }
    }, created(){
      let u = api.getStore('user')
      if (!(u == undefined || u == null || u == '')) {
        let _jsonStr = JSON.parse(u)
        this.userheader = _jsonStr.headImgUrl
        if (this.userheader == 'default') {
          this.userheader = 'img/brand/userheader.png'
        }
        this.username = _jsonStr.nickName
        this.address = _jsonStr.address
      }
      this.init()
    },methods: {
      init(){
        let that = this
        let pars = JSON.stringify({})
        api.getAction('/logined/acc/getLoginAccInfo', pars, function(res) {
          api.log(res)
          if (res.code == 200) {
            that.balance = res.result.balance
            that.username = res.result.nickName
            that.userheader = res.result.headImgUrl
            if (that.userheader == 'default') {
              that.userheader = 'img/brand/userheader.png'
            }
            api.setStore('user', JSON.stringify(res.result))
          } else {
            api.iToastServer(that, res.code, 'secondary')
          }
        })
      },
      editHeader() {
        this.$router.push({name:'set'})
      }
    },
  }
</script>

<style scoped="scoped">
  @import url("../../assets/scss/com.css");
  .iuserinfo{
    width: 100%;
    margin: 0 auto;
  }
  .iuserinfo-left-with{
    width: 100%;
    padding: 0 1rem 0 0;
    margin-bottom: 0.5rem;
  }
  .iuserinfo-right-with{
    width: 100%;
    padding:0 0 0 1rem;
    margin-bottom: 0.5rem;
  }
  @media only screen and (min-width: 0px) and (max-width: 767px){
    .iuserinfo-left-with{
      width: 100%;
      padding: 0 15px;
    }
    .iuserinfo-right-with{
      width: 100%;
      padding: 0 15px;
    }
  }
  .userinfo-panel{
    max-width: 100%;
    /* margin:2rem auto 0; */
    /* margin-top: 2rem; */
    border-radius: 0.64rem;
    background-color: #acaedd;
    color: #FFF;
    overflow: hidden;
  }
  .userinfo-panel-left{
    background: url(../../assets/imgs/circle1.png) no-repeat;
    background-size: 230px 200px;
    background-position: 140% -140%;
  }
  .userinfo-panel .iuserinfos{
    width: 100%;
    height: 16rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .userinfo-panel .iuserinfos .iheader{
    width: 128px;
    height: 128px;
    border-radius: 64px;
    border: 0.08rem solid #F0F0F0;
    overflow: hidden;
  }
  .userinfo-panel .iuserinfos .iheader:hover{
    filter: brightness(.8);
    border-color: #FFFFFF;
  }
  .userinfo-panel .iuserinfos .iheader .iheader-img{
    width: 100%;
    height: auto;
  }
  .userinfo-panel .iuserinfos .inikename{
    width: 160px;
    line-height: 2.56rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 2rem;
    font-weight: 500;
  }
  .userinfo-panel .iuserinfos .inikename:hover{
    opacity: 0.8;
  }
  .userinfo-panel .iuserinfos .inikename .iuseal{
    width: 30px;
    height: 30px;
    margin-right: 4px;
  }
  .userinfo-panel .iuserinfos .inikename .iname{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .userinfo-panel .iuserinfos .iaddress{
    width: 160px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 400;
  }
  .userinfo-panel .iuserinfos .iaddress .icurrtype{
    width: 20px;
    height: 20px;
  }
  .userinfo-panel .iuserinfos .ijoin{
    width: 100%;
    text-align: center;
  }
  .ivalue{
    width: 100%;
    font-size: 1.2rem;
    font-weight: 400;
  }

  .userinfo-panel-purple{
     background-color: #7955ff;
  }
  .iuserinfos-right{
    width: -webkit-calc(100% - 6rem);
    margin: 0rem auto;
    min-height: 14rem;
    height: 16rem;
    overflow: hidden;
    font-size: 1.2rem;
    font-weight: 400;
  }
  @media only screen and (min-width: 0px) and (max-width: 767px){
    .iuserinfos-right{
      width: -webkit-calc(100% - 2rem);
      margin: 1rem auto;
      min-height: 14rem;
      font-size: 1.2rem;
      font-weight: 400;
    }
  }


  .userinfo-panel-right{
    background: url(../../assets/imgs/circle2.png) no-repeat;
    background-size: 260px 200px;
    background-position: 105% -80%;
  }

  .iuserinfos-right .icell-top-left .value{
    line-height: 2.56rem;
    font-size: 1.92rem;
    font-weight: 500;
  }
  .iuserinfos-right .icell-top-right .value{
    line-height: 2.56rem;
    text-align: right;
  }

  .iuserinfos-right .icell-bottom .value{
    font-size: 1.68rem;
    font-weight: 500;
  }
  .iuserinfos-right .icell-bottom:hover{
    opacity: 0.8;
  }
  .iuserinfos-right-sec1{
    /* margin-top: 1.2rem; */
    height: 8rem;
  }
  .iuserinfos-right-sec2{
    /* margin-top: 2rem; */
    height: 8rem;
  }

  @media only screen and (min-width: 0px) and (max-width: 960px){
    .iuserinfos-right .icell-top-left .value{
      line-height: 2.56rem;
      font-size: 1.4rem;
      font-weight: 500;
    }
    .iuserinfos-right .icell-bottom .value{
      font-size: 1.4rem;
      font-weight: 500;
    }

  }


  .ilinks{
    color: #FFFFFF;
  }

  .ibtn-contain{
   /* width: 100%;
    min-width: 8rem;
    max-width: 10rem; */
    width: 9rem;
    height: 3.44rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.65rem;
    font-size: 1.28rem;
    font-weight: 500;
  }
  .ibtn-contain .ibtn-img{
    width: auto;
    height: 1.44rem;
    margin: 0 0.65rem;
  }
  .ibtn-contain:hover{
    opacity: 0.8;
  }
  .ibtn-contain-deposit{
    background-color: #e161ff;
  }
  .ibtn-contain-widthdraw{
    background-color: #76c2f4;
  }
  .iuserinfos-btn-position{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .iuserinfos-decr-position{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

</style>
