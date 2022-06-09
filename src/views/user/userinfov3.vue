<template>
  <div>
    <div class="iuserinfo ">

      <div class="iuser-up">
        <div class="iheader" >
          <router-link :to="{name:'set', params:{}}">
          <img :src="userheader" class="iheader-img" />
          </router-link>
        </div>
        <div class="ibaseinfos">
          <div class="inikename">
            <div class="iname color_yellow">{{username==''?'nickname':username}}</div>
            <img src="../../assets/imgs/level/level01.svg" class="iuseal" />
          </div>
          <div class="iaddress" @click="copytoken">
            <img src="../../assets/imgs/logo/eth3.png" class="icurrtype" />
            <div class="iname">{{address.substr(0, 6) +'...'+ address.substr(-4)}}</div>
          </div>
        </div>
      </div>
      <div class="iuser-down bg_lightgray">
        <div class="icell-balance">
          <div class="ititle">
            <div>{{$t('page.balance')}}</div>
            <!-- <img src="../../assets/imgs/eye-close.svg" class="iuserinfo-eye" v-if="!open" @click="showdata()"/>
            <img src="../../assets/imgs/eye-open.svg" class="iuserinfo-eye" v-if="open" @click="showdata()"/> -->
          </div>
          <router-link :to="{name:'detail', params:{type:'all'}}">
          <div class="ivalue">
            <div :class="open?'ivalue-oph':'ivalue-dots'">
              <template v-if="open">318.19 </template>
              <template v-if="!open">***** </template>
            </div>
            <div class="inuit">OPH</div>
            <div class="ivalue-us">$1002.28</div>
            <img src="../../assets/imgs/arrow-right.svg" class="iarr-img"/>
          </div>
          </router-link>
        </div>

        <div class="ihr"></div>

        <div class="idetails">

          <div class="icell-balance icell-balance-v2">
            <div class="ititle">
              <div>OPH</div>
            </div>
            <router-link :to="{name:'detail', params:{type:'oph'}}">
            <div class="ivalue">
              <div class="inuit">$</div>
              <div :class="open?'ivalue-oph':'ivalue-dots'">
                <template v-if="open">1002.28 </template>
                <template v-if="!open">***** </template>
              </div>
              <img src="../../assets/imgs/arrow-right.svg" class="iarr-img"/>
            </div>
            </router-link>
            <div class="ivalue">
              <div class="ivalue-us ivalue-us-v2">1002.28 OPH</div>
            </div>
          </div>

          <div class="icell-balance icell-balance-v3">
            <div class="ititle">
              <div>veOPH</div>
            </div>
            <router-link :to="{name:'detail', params:{type:'veoph'}}">
            <div class="ivalue">
              <div class="inuit">$</div>
              <div :class="open?'ivalue-oph':'ivalue-dots'">
                <template v-if="open">1002.28 </template>
                <template v-if="!open">***** </template>
              </div>
              <img src="../../assets/imgs/arrow-right.svg" class="iarr-img"/>
            </div>
            </router-link>
            <div class="ivalue">
              <div class="ivalue-us ivalue-us-v2">1002.28 OPH</div>
            </div>
          </div>

          <div class="icell-balance icell-balance-v4">
            <div class="ititle">
              <div>cOPH</div>
            </div>
            <router-link :to="{name:'detail', params:{type:'coph'}}">
            <div class="ivalue">
              <div class="inuit">$</div>
              <div :class="open?'ivalue-oph':'ivalue-dots'">
                <template v-if="open">1002.28 </template>
                <template v-if="!open">***** </template>
              </div>
              <img src="../../assets/imgs/arrow-right.svg" class="iarr-img"/>
            </div>
            </router-link>
            <div class="ivalue">
              <div class="ivalue-us ivalue-us-v2">1002.28 OPH</div>
            </div>
          </div>

        </div>

      </div>

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
        open:true,
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
  .iuserinfo{
    width: 100%;
  }
  .iuserinfo .iuser-up{
    width: 100%;
    height: 5.9444rem;
    margin: 3.1111rem auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .iuserinfo .iuser-up .iheader{
    width: 5.8889rem;
    height: 5.9444rem;
    background: #979797;
    border-radius: 50%;
    overflow: hidden;
  }
  .iuserinfo .iuser-up .iheader .iheader-img{
    width: 100%;
  }
  .iuserinfo .iuser-up .ibaseinfos{
    margin-left: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .iuserinfo .iuser-up .ibaseinfos .inikename{
    height: 2.5rem;
    line-height: 2.5rem;
    font-size: 1.7778rem;
    font-family: Poppins-Medium, Poppins;
    font-weight: 500;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .iuserinfo .iuser-up .ibaseinfos .inikename .iuseal{
    width: 1.7778rem;
    height: 2.1111rem;
    margin-left: 0.4444rem;
  }
  .iuserinfo .iuser-up .ibaseinfos .iaddress{
    margin-top: 0.8889rem;
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
  .iuserinfo .iuser-up .ibaseinfos .iaddress:hover{
    transition: all .3s ease;
    border: 0.1111rem solid #e8d3a7;
    color: #e8d3a7;
  }
  .iuserinfo .iuser-up .ibaseinfos .iaddress .icurrtype{
    width: 0.6666rem;
    height: 1.1666rem;
    margin-right: 0.4444rem;
  }

  .iuserinfo .iuser-down{
    width: 100%;
    padding: 2rem;
    margin:0 auto;
    border-radius: 0.8888rem;
    border: 0.1111rem solid #3C3C3C;
  }
  .iuserinfo .iuser-down .icell-balance-v2{
    width: 33%;
    overflow: hidden;
  }
  .iuserinfo .iuser-down .icell-balance-v3{
    width: 33%;
    overflow: hidden;
    padding-left: 2rem;
  }
  .iuserinfo .iuser-down .icell-balance-v4{
    width: 33%;
    overflow: hidden;
    padding-left: 3.5556rem;
  }
  .iuserinfo .iuser-down .icell-balance .ititle{
    height: 2.1667rem;
    line-height: 2.1667rem;
    font-size: 1.5556rem;
    font-weight: 300;
    color: #979797;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .iuserinfo .iuser-down .icell-balance .ititle .iuserinfo-eye{
    width: 1.7777rem;
    height: 1.1666rem;
    margin-left: 0.4444rem;
  }
  .iuserinfo .iuser-down .icell-balance .ivalue{
    margin-top: 0.8333rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #FFFFFF;
  }
  .iuserinfo .iuser-down .icell-balance .ivalue:hover{
    opacity: 0.86;
  }
  .iuserinfo .iuser-down .icell-balance .ivalue .ivalue-oph{
    min-width: 5.5556rem;
    height: 2.8333rem;
    line-height: 2.8333rem;
    margin-right: 0.4444rem;
    font-size: 2rem;
    font-family: Poppins-Medium, Poppins;
    font-weight: 400;
  }
  .iuserinfo .iuser-down .icell-balance .ivalue .inuit{
    height: 2.8333rem;
    line-height: 2.8333rem;
    font-size: 2rem;
    font-family: Poppins-Medium, Poppins;
    font-weight: 400;
  }
  .iuserinfo .iuser-down .icell-balance .ivalue .ivalue-dots{
    min-width: 5.5556rem;
    height: 2.8333rem;
    line-height: 2.8333rem;
    padding-top: 0.2233rem;
  }
  .iuserinfo .iuser-down .icell-balance .ivalue .ivalue-us{
    font-size: 1.3333rem;
    font-weight: 300;
    margin: 0 0.4444rem;
    color: #979797;
  }
  .iuserinfo .iuser-down .icell-balance .ivalue .ivalue-us-v2{
    margin-left: 0;
  }
  .iuserinfo .iuser-down .icell-balance .ivalue .iarr-img{
    width: 0.6666rem;
    height: 1.1666rem;
    margin-left: 0.4444rem;
  }
  .iuserinfo .iuser-down .ihr{
    width: 100%;
    margin: 2.2222rem 0;
    height: 0.1111rem;
    background: #3F4142;
  }
  .iuserinfo .iuser-down .idetails{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }



</style>
