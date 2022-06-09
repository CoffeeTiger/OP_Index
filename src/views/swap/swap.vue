<template>
  <div class="icontainer-homepage">
    <div class="iswap-contain">
      <div class="iswap-title"></div>
      <div class="iswap-panel bg_lightgray">
        <div class="iswap-header">
          <div class="ititle color_yellow">{{$t('page.swap')}}</div>
          <img src="../../assets/imgs/set.svg" id="popover-target-set" class="iset"/>
          <b-popover target="popover-target-set" triggers="click" placement="bottom" custom-class="ipopover" >
              <div class="ipopover-info">
                <div class="ititle">{{$t('page.transactionSettings')}}</div>

                <div class="icell">
                  <label>{{$t('page.slippageTolerance')}}?</label>
                  <div class="iinput-contain">
                    <div class="ibtn ibtn-auto color_black">{{$t('page.auto')}}</div>
                    <div class="iinput-slip-outer">
                      <input type="text" class="iinput iinput-slip" v-model="slipValue"/>
                    </div>
                  </div>
                </div>

                <div class="icell">
                  <label>{{$t('page.transactionDeadline')}}?</label>
                  <div class="iinput-contain iinput-contain-v2">
                    <div class="iinput-deadline-outer">
                      <input type="text" class="iinput iinput-ideadline" v-model="deadline"/>
                    </div>
                    <span class="ideadline-unit">{{$t('page.minutes')}}</span>
                  </div>
                </div>

                <div class="ititle">{{$t('page.interfaceSettings')}}</div>
                <div class="iinterface-setting">
                  <div class="iset-name">{{$t('page.autoRouterAPI')}}?</div>
                  <div class="iset-value">
                    <div :class="autoRouterAPI?'iset-active':''" @click="set(1)">{{$t('page.on')}}</div>
                    <div :class="autoRouterAPI?'':'iset-inactive'" @click="set(2)">{{$t('page.off')}}</div>
                  </div>
                </div>
                <div class="iinterface-setting">
                  <div class="iset-name">{{$t('page.expertMode')}}?</div>
                  <div class="iset-value">
                    <div :class="expertMode?'iset-active':''" @click="set(3)">{{$t('page.on')}}</div>
                    <div :class="expertMode?'':'iset-inactive'" @click="set(4)">{{$t('page.off')}}</div>
                  </div>
                </div>

              </div>
            </b-popover>
        </div>

        <div class="iswap-body bg_darkgray">

          <div class="icell imargin-bottom-24">
            <div class="ivalue">
              <div class="ivalue-eth">0.001</div>
              <div class="ivalue-dol">$0.242306</div>
            </div>
            <div class="itype">
              <div class="ivalue-eth ivalue-eth-select">
                <div class="itype-select">
                  <select class="iinput ifrom-input ifrom-select" ref="blockchain">
                    <option value="Eth">OPH</option>
                    <option value="Eth">ETH</option>
                    <option value="Eth">BTC</option>
                  </select>
                </div>
              </div>
              <div class="ivalue-dol">{{$t('page.balance')}}: 0.00094</div>
            </div>
          </div>

          <div class="icell imargin-bottom-24">
            <div class="ivalue">
              <div class="ivalue-eth">0.001</div>
              <div class="ivalue-dol">$0.242306</div>
            </div>
            <div class="itype">
              <div class="ivalue-eth ivalue-eth-select">
                <div class="itype-select">
                  <div class="itype-name">OPH</div>
                </div>
              </div>
              <div class="ivalue-dol">{{$t('page.balance')}}: 0.00094</div>
            </div>
          </div>

          <div class="icell-equal">
            <img src="../../assets/imgs/swap-float.svg" class="iswap-float"/>
          </div>

          <div class="iswap-unit">
            <div class="iunit">
              <img src="../../assets/imgs/help-icon.svg" id="popover-target-help" class="ihelp"/>
              <b-popover target="popover-target-help" triggers="hover" placement="bottom" custom-class="ipopover" >
                  <!-- <template #title>Popover Title</template> -->
                  <div class="ipopover-info">
                    <ul>
                      <li>
                        <span>{{$t('page.expectedOutput')}}</span>
                        <span>0.217172 OPH</span>
                      </li>
                      <li>
                        <span>{{$t('page.priceImpact')}}</span>
                        <span>0.00%</span>
                      </li>
                      <li>
                        <div class="iline"></div>
                      </li>
                      <li>
                        <span>{{$t('page.minimumReceivedAfterSlippage')}}(25.00%)</span>
                        <span>0.173738 OPH</span>
                      </li>
                      <li>
                        <span>{{$t('page.networkFee')}}</span>
                        <span>~$17.80</span>
                      </li>
                    </ul>
                  </div>
                </b-popover>
              <span class="iunit-conversions color_yellow">1 OPH=0.0004601 ETH</span>
              <span class="inuit-dol">($1.0983)</span>
            </div>

            <div class="iunit-select">
              <div class="igas-value">
                <img src="../../assets/imgs/gas-logo.svg" class="igas-img" />
                <div class="ivalue">$0.0889</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>

    <div class="ibtn ibtn-swap color_black" v-if="ustat">{{$t('page.swap')}}</div>
    <div class="ibtn ibtn-swap color_black" v-if="!ustat" @click="connect">{{$t('page.connectwallet')}}</div>

  </div>
</template>

<script>
  import api from '../../util/network.js'
  import ebus from '../../util/ebus.js'
  export default{
    name:'swap',
    data() {
      return {
        ustat: false,
        slipValue:'0.01%',
        deadline:'30',
        autoRouterAPI:true,
        expertMode:false,
      }
    },created() {
      let t = api.getStore('token')
      if (api.empty(t)) {
        this.ustat = false
      } else {
        this.ustat = true
      }
    },methods:{
      connect() {
        if (!this.ustat) {
          ebus.$emit('emsg', 'relogin')
        }
      },
      set(v){
        if (v == 1) {
          this.autoRouterAPI = true
        } else if(v == 2){
          this.autoRouterAPI = false
        } else if(v == 3){
          this.expertMode = true
        } else if(v == 4){
          this.expertMode = false
        }
      }

    },mounted() {
      ebus.$on('emsgreturn', (res) => {
        if (res == 'ok') {
          this.$router.go(0)
        }
      })
    }
  }
</script>

<style scoped>
.iswap-contain{
  width: 66.6666rem;
  max-width: 1200px;
  margin:0 auto;
}

.iswap-title{
  width: 100%;
  height: 6.1111rem;
}

.iswap-panel{
  width: 46rem;
  border-radius: 0.8888rem;
  border: 0.1111rem solid #3C3C3C;
  margin: 0 auto;
  overflow: hidden;
}
.iswap-panel .iswap-header{
  width: 100%;
  height: 4.8888rem;
  padding: 0 1.7777rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.iswap-panel .iswap-header .ititle{
  height: 4.8888rem;
  line-height: 4.8888rem;
  font-size: 1.7777rem;
  font-family: Poppins-Regular, Poppins;
  font-weight: 300;
}
.iswap-panel .iswap-header .iset{
  width: 1.7777rem;
  height: 1.7777rem;
}
.iswap-panel .iswap-header .iset:hover{
  opacity: 0.6;
}

.iswap-panel .iswap-body{
  width: 100%;
  padding: 1.7777rem;
}

.iswap-panel .iswap-body .icell{
  width: 100%;
  height: 7.4444rem;
  padding: 1rem 1.6666rem;
  background: #414242;
  border-radius: 0.8888rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.iswap-panel .iswap-body .icell .ivalue{
  width: 19.4444rem;
}
.iswap-panel .iswap-body .icell .itype{
  width: 19.4444rem;
  text-align: right;
}
.iswap-panel .iswap-body .icell .ivalue-eth{
  width: 100%;
  height: 3.3333rem;
  line-height: 3.3333rem;
  font-size: 2rem;
  color: #FFFFFF;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.iswap-panel .iswap-body .icell .ivalue-eth-select{
  display: flex;
  justify-content: flex-end;
}
.iswap-panel .iswap-body .icell .itype-select{
  width: 9.1111rem;
  height: 3.3333rem;
  line-height: 2.8888rem;
  box-shadow: 0px 0.1111rem 0.2222rem 0px rgba(0, 0, 0, 0.2);
  background: #636464;
  border-radius: 1.6666rem;
}
.iswap-panel .iswap-body .icell .itype-select .itype-name{
  width: -webkit-calc(100% - 2.6666rem);
  line-height: 3.3333rem;
  margin: 0 auto;
  font-size: 1.3333rem;
  font-weight: 300;
  text-align: left;
}
.iswap-panel .iswap-body .icell .ivalue-dol {
  line-height: 1.8333rem;
  font-size: 1.3333rem;
  color: #979797;
  margin-top: 0.7777rem;
}
.iswap-panel .iswap-body .iswap-unit{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.3333rem;

  line-height: 1.9444rem;
  font-size: 1.3333rem;
  font-weight: 300;
}
.iswap-panel .iswap-body .iswap-unit .iunit{
  height: 1.8333rem;
  line-height: 1.8333rem;
  display: flex;
  align-items: center;
}
.iswap-panel .iswap-body .iswap-unit .ihelp{
  width: 1.1111rem;
  height: 1.1111rem;
  margin-right: 0.4444rem;
  margin-bottom: 0.1111rem;
}
.iswap-panel .iswap-body .iswap-unit .inuit-dol{
  color: #979797;
}

/* .iswap-panel .iswap-body .iswap-unit .iunit-select{

} */
.iswap-panel .iswap-body .iswap-unit .iunit-select .igas-value{
  min-width: 6.6666rem;
  height: 1.9444rem;
  line-height: 1.9444rem;
  border-radius: 0.8888rem;
  padding: 0 0.6666rem;
  background: #636464;
  display: flex;
  justify-content: center;
  align-items: center;
}
.iswap-panel .iswap-body .iswap-unit .iunit-select .igas-img{
  width: 1.1111rem;
  height: 1rem;
  margin-right: 0.4444rem;
}
.iswap-panel .iswap-body .iswap-unit .iunit-select .igas-value{
  height: 1.9444rem;
  line-height: 1.9444rem;
  font-size: 1.3333rem;
  font-weight: 300;
}

.icell-equal{
  width: 2.6666rem;
  height: 2.6666rem;
  overflow: hidden;
  position: absolute;
  margin-top: -10.7777rem;
  margin-left: 20.3333rem;
}
.icell-equal .iswap-float{
  width: 100%;
  height: 100%;
}

.ifrom-input {
	width: -webkit-calc(100% - 1.2rem);
	height: 2.8888rem;
	line-height: 2.8888rem;
	margin: 0 0.6rem;
	background-color: #FFFFFF00;
	border: 0;
	font-size: 1.3333rem;
	font-weight: 300;
	color: #FFFFFF;
	font-family: Poppins-Light, Poppins !important;
}

/* .ifrom-select {
	background: url("../../assets/imgs/arrow-down.png") no-repeat scroll right center transparent;
	background-size: 0.34rem 0.2rem;
} */
/* .ifrom-select{
  appearance:none;
  -moz-appearance:none;
  -webkit-appearance:none;
  -ms-appearance:none;
}
.ifrom-select::after{
  content: '';
  width: 0.7777rem;
  height: 0.4444rem;
  background: url("../../assets/imgs/arrow-right.svg") no-repeat scroll right center transparent;
  background-size: 0.7777rem 0.4444rem;
  pointer-events: auto;
} */


.ibtn-swap{
  width: 21.2777rem;
  height: 4.4444rem;
  line-height: 4.4444rem;
  border-radius: 2.2222rem;
  margin: 6rem auto;
  font-size: 1.5555rem;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
}

.ipopover-info{
  width: 23.3333rem;
  padding: 0.6111rem;
  font-size: 1.2222rem;
  font-family: Poppins-Regular, Poppins;
  color: #FFFFFF;
  font-weight: 300;
}
/* popover help depart */
.ipopover-info ul li{
  width: 100%;
  line-height: 1.7222rem;
  margin-bottom: 0.6666rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.ipopover-info ul li:last-child{
  margin-bottom: 0;
  margin-top: 0.8888rem;
}
.ipopover-info ul .iline{
  width: 100%;
  height: 0.1111rem;
  background: #3C3C3C;
}

/* popover set depart */
.ipopover-info .ititle{
  width: 100%;
  line-height: 1.9444rem;
  font-size: 1.3333rem;
  font-weight: 300;
}
.ipopover-info .icell{
  width: 100%;
  margin:0.6666rem auto;
  font-size: 1.3333rem;
  font-weight: 300;
}
.ipopover-info .icell label{
  width: 100%;
  line-height: 1.9444rem;
  color: #979797;
}
.ipopover-info .icell .iinput-contain{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.ipopover-info .icell .iinput-contain-v2{
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.ipopover-info .icell .iinput-contain .ibtn-auto{
  width: 4.8888rem;
  height: 2.6666rem;
  line-height: 2.6666rem;
  border-radius: 1.3333rem;
  margin-right: 0.7777rem;
}
.ipopover-info .icell .iinput-contain .iinput-slip-outer{
  width: 15.3333rem;
  height: 2.6666rem;
  background: #414242;
  border-radius: 1.3333rem;
  text-align: center;
}
.ipopover-info .icell .iinput-contain .iinput-slip-outer .iinput-slip{
  width: 13.1111rem;
  height: 2.6666rem;
  line-height: 2.6666rem;
  text-align: end;
}
.ipopover-info .icell .iinput-contain .iinput-deadline-outer{
  width: 6.1111rem;
  height: 2.6666rem;
  line-height: 2.6666rem;
  background: #414242;
  border-radius: 1.3333rem;
}
.ipopover-info .icell .iinput-contain .iinput-deadline-outer .iinput-ideadline{
  width: 5rem;
  height: 2.6666rem;
  line-height: 2.6666rem;
  text-align: right;
}
.ipopover-info .icell .iinput-contain .ideadline-unit{
  color: #F7B62D;
  margin-left: 0.6666rem;
}
.ipopover-info .iinterface-setting{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.6666rem auto;
  color: #979797;
}
.ipopover-info .iinterface-setting .iset-value{
 width: 5.4444rem;
 height: 1.7777rem;
 border-radius: 0.8888rem;
 background: #414242;
 display: flex;
 justify-content: space-between;
 align-items: center;
}
.ipopover-info .iinterface-setting .iset-value > div{
  width: 2.7222rem;
  height: 1.7777rem;
  line-height: 1.7777rem;
  border-radius: 1.7777rem;
  text-align: center;
}
.ipopover-info .iinterface-setting .iset-value .iset-active{
  background: #F7B62D;
  color: #313131;
  transition: all .3s ease .1s;
}
.ipopover-info .iinterface-setting .iset-value .iset-inactive{
  background: #727271;
  color: #FFFFFF;
  transition: all .3s ease .1s;
}

</style>
<style>
  .popover{
    max-width: 66.6666rem !important;
  }
  .ipopover{
    border-radius: 0.8888rem;
    background: #252525;
    border: 0.1111rem solid #3C3C3C;
  }
  /* .arrow::before{
    border-color: #3C3C3C !important;
  } */
  .arrow::after{
    /* border-width: 0 0.5rem 0.5rem 0.5rem; */
    border-bottom-color: #25252552 !important;
  }
.b-popover{
  /* background: #252525; */
}
</style>
