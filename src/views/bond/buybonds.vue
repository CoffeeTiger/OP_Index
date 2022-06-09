<template>
  <div>
    <div class="icontainer-subpage">
      <div class="ireward-contain">

        <div class="ibond-infos imargin-top-80">
          <div class="ibond-infos-title color_yellow">OPH LP</div>
          <div class="ibond-infos-lists color_yellow">
            <div class="ibond-infos-item">
              <div class="iitem-desc">{{$t('page.bondPrice')}}</div>
              <div class="iitem-value">$1.01</div>
            </div>
            <div class="ibond-infos-item">
              <div class="iitem-desc">{{$t('page.marketPrice')}}</div>
              <div class="iitem-value">$1.00</div>
            </div>
          </div>
        </div>

        <b-row v-if="false">
          <b-col>
            <b-card no-body style="max-width: 100%; margin: 0 auto;border-radius: 0.64rem;">

              <b-card-body class="ibond-card-body">
                <b-card-text>

                  <div class="ibuy-bonds-info">
                    <div class="ibbonds-cell">
                      <div class="ibbonds-cell-desc">{{$t('page.fixedTerm')}}</div>
                      <div class="ibbonds-cell-value">2 days</div>
                    </div>

                    <div class="ibbonds-cell">
                      <div class="ibbonds-cell-desc">{{$t('page.bondPrice')}}</div>
                      <div class="ibbonds-cell-value">$28.58</div>
                    </div>

                    <div class="ibbonds-cell">
                      <div class="ibbonds-cell-desc">{{$t('page.marketPrice')}}</div>
                      <div class="ibbonds-cell-value">$28.58</div>
                    </div>
                  </div>

                  <div class="ibuy-bonds-btns">
                    <b-button variant="primary" block size="lg" class="ibbond-btn" @click="connect" v-if="!ustat">{{$t('page.connectwallet')}} </b-button>
                    <b-button variant="primary" block size="lg" class="ibbond-btn" @click="Approve" v-if="ustat&&!approve">{{$t('page.approve')}} </b-button>
                    <b-button variant="primary" block size="lg" class="ibbond-btn" @click="buy" v-if="ustat&&approve">{{$t('page.buybond')}} </b-button>
                  </div>

                </b-card-text>
              </b-card-body>


            </b-card>
          </b-col>
        </b-row>

        <div class="ibondinfo bg_lightgray imargin-bottom-24">
          <div class="ibondinfo-body">
            <ul>

              <li>
                <div class="ikey">{{$t('page.bond_yourBalance')}}</div>
                <div class="ivalue">{{show.balance}} OPH</div>
              </li>

              <li>
                <div class="ikey">{{$t('page.bond_youWillGet')}}</div>
                <div class="ivalue">{{show.willget}} OPH</div>
              </li>

              <li>
                <div class="ikey">{{$t('page.bond_maxYouCanBuy')}}</div>
                <div class="ivalue">{{show.canbuy}} OPH</div>
              </li>

              <li>
                <div class="ikey">{{$t('page.bond_discount')}}</div>
                <div class="ivalue">{{show.discount}}</div>
              </li>

              <li>
                <div class="ikey">{{$t('page.bond_duration')}}</div>
                <div class="ivalue">{{show.duration}} days</div>
              </li>

            </ul>
          </div>
        </div>

        <div class="ibondinfo bg_lightgray" v-if="ustat&&approve">
          <div class="ibondinfo-body">
            <div class="istake-contain">
              <div class="iinput-contain">
                <input type="number" v-model="vmstakenum" min="1" max="99999999" size="lg" :placeholder="$t('page.enteryournumber')" class="iinput iinput-stake" />
                <span class="imax color_yellow" @click="maxset(0)">Max</span>
              </div>
              <div class="ibtn ibtn-stake color_black" @click="buy">{{$t('page.bond')}}</div>
            </div>
          </div>
        </div>

        <div class="ibtn-contain" v-if="!ustat">
          <div class="ibtn-desc">{{$t('page.bondConnWalletDesc')}}</div>
          <div class="ibtn ibtn-connnect color_black" @click="connect">{{$t('page.connectwallet')}}</div>
        </div>

        <div class="ibtn-contain" v-if="ustat&&!approve">
          <div class="ibtn-desc">{{$t('page.bondApproveDesc')}}</div>
          <div class="ibtn ibtn-connnect color_black" @click="Approve">{{$t('page.approve')}}</div>
        </div>

        <!-- <div class="ibtn-contain" v-if="ustat&&approve">
          <div class="ibtn-desc">Please connect your wallet to purchase stake</div>
          <div class="ibtn ibtn-connnect color_black" @click="buy">{{$t('page.buybond')}}</div>
        </div> -->

      </div>
    </div>
  </div>
</template>

<script>
  import api from '../../util/network.js'
  import ebus from '../../util/ebus.js'
  export default{
    name:'buybonds',
    data() {
      return {
        ustat: true,
        approve:true,
        show:{
          balance:'-',
          willget:'-',
          canbuy:'-',
          discount:'',
          duration:''
        },
        stakenum: 1000,
        vmstakenum: '',
      }
    },created(){
      let t = api.getStore('token')
      if (api.empty(t)) {
        this.ustat = false
      } else{
        this.ustat = true
      }

      /* only for test */
      let _id = this.$route.params.id
      if(_id==2){
        this.approve = false
      } else{
        this.approve = true
      }

      this.init()
    },methods: {
      init(){

        /* get approve status */
        /* this.approve = true */

        if (this.ustat) {
          this.show.balance = '0.000000'
          this.show.willget = '0.000'
          this.show.canbuy = '10000'
        }
        this.show.discount = '0.85%'
        this.show.duration = '2'
      },
      connect(){
        if (!this.ustat) {
          ebus.$emit('emsg', 'relogin')
        }
      },
      maxset(type) {
        if (this.vmstakenum == this.stakenum) {
          this.vmstakenum = ''
        } else{
          this.vmstakenum = this.stakenum
        }
      },
      /*first-time license*/
      Approve(){

      },
      buy(){
        api.log('buy')
      }
    },mounted(){
      let that = this
      ebus.$on('emsgreturn',(res)=>{
        if (res == 'ok') {
          that.ustat = true
          that.init()
        }
      })
    }
  }
</script>

<style scoped="scoped">
  @import url("../../assets/scss/com.css");

  .ibond-infos{
    width: 100%;
  }
  .ibond-infos .ibond-infos-title{
    line-height: 3.5555rem;
    font-size: 2.5555rem;
    font-family: Poppins-Bold, Poppins;
    font-weight: 500;
  }
  .ibond-infos .ibond-infos-lists{
    margin: 4.8888rem 0 5.9444rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .ibond-infos .ibond-infos-lists .ibond-infos-item{
    width: 26.111111rem;
  }
  .ibond-infos .ibond-infos-item{
    /* height: 6.4rem; */
    font-size: 1.2rem;
    margin: 0.5rem 0;
    font-size: 1.333333rem;
  }
  .ibond-infos .ibond-infos-item .iitem-value{
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    line-height: 3.1111rem;
    font-size: 2.2222rem;
    font-family: Poppins-Medium, Poppins;
    font-weight: 400;
    margin-top: 0.9444rem;
  }
  .ibond-infos .ibond-infos-item .iitem-desc{
    line-height: 2.1666rem;
    font-size: 1.5555rem;
    font-family: Poppins-Regular, Poppins;
    font-weight: 300;
    color: #979797;
  }

  .ibondinfo{
    width: 100%;
    padding: 1.6666rem 2.5555rem;
    border-radius: 0.8888rem;
    overflow: hidden;
    border:0.1111rem solid #3C3C3C;
  }
  .ibondinfo .ibondinfo-body{
    width: 100%;
    margin: 0 auto;
    line-height: 2.6666rem;
    font-size: 1.5555rem;
    font-family: Poppins-Regular, Poppins;
    font-weight: 300;
    color: #757373;
  }
  .ibondinfo .ibondinfo-body ul > li{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .ibtn-contain{
    width: 100%;
    margin: 3.5555rem auto;
    text-align: center;
  }
  .ibtn-contain .ibtn-desc{
    line-height: 1.7777rem;
    font-size: 1.4444rem;
    font-family: Poppins-Regular, Poppins;
    font-weight: 300;
    color: #A0A0A0;
    margin-bottom: 2.2222rem;
  }
  .ibtn-contain .ibtn-connnect{
    width: 21.2777rem;
    height: 4.4444rem;
    line-height: 4.4444rem;
    margin: 2.2222rem auto 0;
    font-size: 1.5555rem;
    font-family: Poppins-SemiBold, Poppins;
    font-weight: 600;
    border-radius: 2.2222rem;
  }

  .istake-contain{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .istake-contain .iinput-contain{
    width: 38.8888rem;
    height: 4.8888rem;
    padding: 0 1.6666rem;
    background: #414242;
    border-radius: 2.4444rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .istake-contain .ibtn-stake{
    width: 9.7222rem;
    height: 4.8888rem;
    line-height: 4.8888rem;
    border-radius: 2.4444rem;
    font-size: 1.7777rem;
    font-family: Poppins-SemiBold, Poppins;
    font-weight: 600;
  }
  .iinput-contain .iinput-stake{
    width: 33.3333rem;
    height: 4.8888rem;
    line-height: 4.8888rem;
    font-size: 1.5555rem;
    font-weight: 400;
    color: #979797;
  }
  .iinput-contain .imax{
    width: 3.6111rem;
    font-size: 1.5555rem;
    font-weight: 400;
  }
  .iinput-contain .imax:active{
    opacity: 0.6;
  }


  .ibond-card-footer{
      background-color: #f7f8fc;
      font-size: 0.777777rem;
      line-height: 1.277777rem;
      color: #A0A0A0;
      text-align: center;
      border-bottom-left-radius: 0.64rem;
      border-bottom-right-radius: 0.64rem;
      overflow: hidden;
  }
  .ibond-card-footer .ibuydesc{
    width: 28.888888rem;
    margin: 0 auto;
  }

  .ibuy-bonds-info{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .ibuy-bonds-info .ibbonds-cell{
    width: 100%;
    margin: 1.2rem 0;
    line-height: 2.56rem;
    font-size: 1.222222rem;
  }
  .ibbonds-cell .ibbonds-cell-desc{
    font-weight: 400;
    color: #7d7d7d;
  }
  .ibbonds-cell .ibbonds-cell-value{
    font-weight: 500;
  }
  .ibbond-btn{
    width: 12.166666rem;
    margin-top: 2rem;
    font-size: 1.333333rem;
    font-weight: 500;
  }


  .ibbond-info-lists{
    margin: 0.4rem auto;
    font-size: 1.12rem;
    font-weight: 400;
    color: #7d7d7d;
  }
  .ibbond-info-lists .iinfo-desc{

  }
  .ibbond-info-lists .iinfo-value{
    text-align: right;
  }
  @media only screen and (min-width: 0px) and (max-width: 767px) {
    .ibbond-info-lists .iinfo-value{
      text-align: start;
    }
  }

</style>
