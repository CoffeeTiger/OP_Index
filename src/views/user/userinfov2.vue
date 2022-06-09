<template>
  <div>
    <div class="iuserinfo bg_lightgray">
      <div class="iuser-left userinfo-panel">
        <div class="iuserinfos">
            <div class="iheader" >
              <router-link :to="{name:'set', params:{}}">
              <img :src="userheader" class="iheader-img" />
              </router-link>
            </div>
            <div class="inikename">
              <div class="iname color_yellow">{{username==''?'nickname':username}}</div>
              <img src="../../assets/imgs/level/level01.svg" class="iuseal" />
            </div>
            <div class="iaddress" @click="copytoken">
              <img src="../../assets/imgs/logo/eth3.png" class="icurrtype" />
              <div class="iname">{{address.substr(0, 6) +'...'+ address.substr(-4)}}</div>
            </div>
            <!-- <div class="ijoin">
              <div class="ivalue">{{$t('page.joined')}} 02/25 2020</div>
            </div> -->
        </div>
      </div>
      <div class="iuser-mid"></div>
      <div class="iuser-right">

        <div class="iright-cell">
          <div class="ititle">
            <div>{{$t('page.balance')}}</div>
            <img src="../../assets/imgs/eye-close.svg" class="iuserinfo-eye" v-if="!open" @click="showdata()"/>
            <img src="../../assets/imgs/eye-open.svg" class="iuserinfo-eye" v-if="open" @click="showdata()"/>
          </div>
          <div class="icell">
            <div :class="!open?'ivalue-dots':''">
              <template v-if="open">{{balance}}</template>
              <template v-if="!open">******</template>
            </div>
            <div class="ivalue-unit">OPH</div>
            <img src="../../assets/imgs/arrow-right.svg" class="iarr-img"/>
          </div>
          <div class="ibtn ibtn-balance color_black">{{$t('page.withdraw')}}</div>
        </div>

        <div class="iright-cell">
          <div class="ititle">
            <div>{{$t('page.yesterdaysreward')}}</div>
          </div>
          <div class="icell">
            <div :class="!open?'ivalue-dots':''">
              <template v-if="open">{{ydayreward}}</template>
              <template v-if="!open">******</template>
            </div>
            <div class="ivalue-unit">OPH</div>
            <img src="../../assets/imgs/arrow-right.svg" class="iarr-img"/>
          </div>
          <div class="ibtn ibtn-balance color_black">{{$t('page.deposit')}}</div>
        </div>

      </div>

      <!-- <div class="iuserinfo-right-with" v-if="false">
        <b-card no-body  class="userinfo-panel userinfo-panel-purple">
          <b-card-body>
            <b-card-text>
              <div class="iuserinfos-right">
                <div class="iuserinfo-top">
                  <div>{{$t('page.myAccount')}}</div>
                  <img src="../../assets/imgs/eye-close.png" class="iuserinfo-top-img" v-if="!open" @click="showdata()"/>
                  <img src="../../assets/imgs/eye-open.png" class="iuserinfo-top-img" v-if="open" @click="showdata()"/>
                </div>
                <div class="iuserinfo-mid">
                  <b-row>
                    <b-col sm="12" md="5">
                      <div class="icell">
                        <div>{{$t('page.balance')}}(OPH)</div>
                        <div>
                          <template v-if="open">{{balance}}</template>
                          <template v-if="!open">******</template>
                        </div>
                      </div>
                    </b-col>
                    <b-col sm="12" md="6">
                      <div class="icell">
                        <div>{{$t('page.yesterdaysreward')}}</div>
                        <div>
                          <template v-if="open">{{ydayreward}}</template>
                          <template v-if="!open">******</template>
                        </div>
                      </div>
                    </b-col>
                  </b-row>
                </div>
                <div class="iuserinfo-bot">
                  <b-button variant="outline-primary" size="lg" class="iuserinfo-btn">{{$t('page.deposit')}}</b-button>
                  <b-button variant="outline-primary" size="lg" class="iuserinfo-btn">{{$t('page.withdraw')}}</b-button>
                  <b-button variant="outline-primary" size="lg" class="iuserinfo-btn">{{$t('page.fundDetails')}}</b-button>
                  <b-button variant="outline-primary" size="lg" class="iuserinfo-btn">{{$t('page.income')}}</b-button>
                </div>
              </div>
            </b-card-text>
          </b-card-body>
        </b-card>
      </div> -->

    </div>
  </div>
</template>

<script>
  import api from '../../util/network.js'
  export default{
    name:'userinfov2',
    data() {
      return {
        userheader: '',
        username:'',
        address:'',
        balance:'0.00',
        ydayreward:'0.00',
        open:false,
      }
    }, created(){
      let u = api.getStore('user')
      if (!(u == undefined || u == null || u == '')) {
        let _jsonStr = JSON.parse(u)
        this.userheader = _jsonStr.headImgUrl
        if (this.userheader == 'default') {
          this.userheader = 'img/brand/userheader-mod.png'
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
              that.userheader = 'img/brand/userheader-mod.png'
            }
            api.setStore('user', JSON.stringify(res.result))
          } else {
            api.iToastServer(that, res.code, 'secondary')
          }
        })
      },
      editHeader() {
        this.$router.push({name:'set'})
      },
      showdata(v){
        this.open = !this.open
      },
      copytoken(){
        let that =  this
        this.$copyText(this.address).then(function(e) {
          api.iToastClient(that, '90008', 'secondary')
        }, function(e) {})
      }
    },
  }
</script>

<style scoped="scoped">
  @import url("../../assets/scss/com.css");
  .iuserinfo{
    width: 100%;
    height: 19.3888rem;
    padding: 3rem 1.3333rem;
    margin: 3.1111rem auto 0;
    border-radius: 0.8888rem;
    border: 0.1111rem solid #3C3C3C;
    display: flex;
    justify-content: space-between;
  }
  .iuserinfo .iuser-left{
    width: 21.8888rem;
  }
  .iuserinfo .iuser-mid{
    width: 0.1111rem;
    height: 12.8888rem;
    background: #3F4142;
  }
  .iuserinfo .iuser-right{
    width: 41.7777rem;
    padding-left: 1.3333rem;
    display: flex;
    justify-content: space-around;
  }
  .iuserinfo .iuser-right .iright-cell{
    width: 16.6666rem;
  }
  .iuserinfo .iuser-right .iright-cell .ititle{
    width: 100%;
    height: 2.1666rem;
    line-height: 2.1666rem;
    font-size: 1.5555rem;
    font-weight: 300;
    color: #979797;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .iright-cell .ititle .iuserinfo-eye{
    width: 1.7777rem;
    height: 1.1666rem;
    margin-left: 0.4444rem;
  }
  .iuserinfo .iuser-right .iright-cell .icell{
    width: 100%;
    height: 2.8333rem;
    line-height: 2.8333rem;
    margin: 0.8333rem 0 3.7777rem;
    font-size: 2rem;
    font-family: Poppins-Medium, Poppins;
    font-weight: 400;
    color: #FFFFFF;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .iuserinfo .iuser-right .iright-cell .icell .ivalue-dots{
    height: 1.3888rem;
    line-height: 1.3888rem;
    padding-top: 0.4444rem;
  }
  .iuserinfo .iuser-right .iright-cell .icell .iarr-img{
    width: 0.6666rem;
    height: 1.1666rem;
    margin-left: 0.4444rem;
  }
  .iuserinfo .iuser-right .iright-cell .icell .ivalue-unit{
    margin:0  0.4444rem;
  }
  .iuserinfo .iuser-right .iright-cell .ibtn-balance{
    width: 14.7777rem;
    height: 3.7777rem;
    line-height: 3.7777rem;
    border-radius: 1.8888rem;
    font-size: 1.5555rem;
    font-family: Poppins-SemiBold, Poppins;
    font-weight: 600;
  }


  .iuserinfo-left-with{
    width: 19.5625rem;
    height: 20.3125rem;
    padding: 0 1rem 0 0;
    margin-bottom: 0.5rem;
  }
  .iuserinfo-right-with{
    width: 45.9375rem;
    height: 20.3125rem;
    padding:0 0 0 1rem;
    margin-bottom: 0.5rem;
  }

  .userinfo-panel{
    width: 100%;
    /* margin:2rem auto 0; */
    /* margin-top: 2rem; */
    /* background-color: #acaedd; */
    overflow: hidden;
  }
  .userinfo-panel-left{
    background: url(../../assets/imgs/circle1.png) no-repeat;
    background-size: 14.375rem 12.5rem;
    background-position: 140% -140%;
  }
  .userinfo-panel .iuserinfos{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .userinfo-panel .iuserinfos .iheader{
    width: 5.8888rem;
    height: 5.8888rem;
    border-radius: 50%;
    border: 0.08rem solid #3C3C3C;
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
    width: 100%;
    margin: 1.8333rem 0 0.8333rem;
    line-height: 2.5rem;
    font-size: 1.7777rem;
    font-weight: 400;
    font-family: Poppins-Medium, Poppins;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .userinfo-panel .iuserinfos .inikename .iuseal{
    width: 1.7777rem;
    height: 2.1111rem;
    margin-left: 0.4444rem;
  }
  .userinfo-panel .iuserinfos .inikename .iname{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .userinfo-panel .iuserinfos .iaddress{
    padding: 0 0.6666rem;
    line-height: 1.7777rem;
    font-size: 1.3333rem;
    font-weight: 300;
    border-radius: 1.1666rem;
    border: 0.1111rem solid #979797;
    color: #979797;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .userinfo-panel .iuserinfos .iaddress .icurrtype{
    width: 0.6666rem;
    height: 1.1666rem;
    margin-right: 0.4444rem;
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
     /* background-color: #7955ff; */
  }

  .iuserinfos-right{
    width: 100%;
    height: 16rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .iuserinfo-top{
    width: 100%;
    line-height: 2.56rem;
    padding-bottom: 1.25rem;
    border-bottom: 2px solid #EEEEEE;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.4rem;
    font-weight: 500;
  }
  .iuserinfo-top .iuserinfo-top-img{
    width: 1.28rem;
    height: 0.68rem;
    margin: 0 1rem;
  }

  .iuserinfo-mid{
    width: 100%;
    margin: 1.2rem auto;
    font-size: 1.2rem;
    font-weight: 400;
  }

  .iuserinfo-bot{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .iuserinfo-btn{
    width: 22%;
    border-color: #313131;
    color: #313131;
    font-size: 1rem;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre;
  }
  .iuserinfo-btn:hover{
    background-color: #FFFFFF;
    border-color: #7955ff;
    color: #7955ff;
  }

</style>
