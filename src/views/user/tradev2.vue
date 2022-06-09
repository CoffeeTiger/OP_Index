<template>
  <div class="irow">
    <div class="btns-panel">
      <b-button variant="outline-primary" size="lg" v-b-modal.tranfer-dialog>&ensp;&ensp; {{$t('page.transfer')}} &ensp;&ensp;</b-button>
      <b-button variant="primary" size="lg" @click="publish">&ensp;&ensp; {{$t('page.publish')}} &ensp;&ensp;</b-button>
    </div>
    <b-row>
      <!-- left -->
      <b-col xs="12" sm="6" lg="4">
        <tradeImg></tradeImg>
        <div class="inft-detail"></div>
          <b-card
              no-body
              style="max-width: 400px; margin: 1.2rem auto;border-radius: 0.64rem;">
              <template #header>
                <!-- <h5 class="mb-0"><b-icon icon="file-earmark-text"></b-icon> Descriptoin</h5> -->
                <h5 class="mb-0 ititle-img-contain"><img src="../../assets/imgs/description.png" class="ititle-img"/> {{$t('page.description')}}</h5>
              </template>

              <b-card-body class="itrade-card-body">
                <!-- <b-card-title>Card Title</b-card-title> -->
                <!-- <b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title> -->
                <b-card-text>Create by you</b-card-text>
              </b-card-body>


              <b-card-header header-tag="header" class="p-1 inft-detail-secondheader" role="tab">
                <!-- <h5 class="mb-0"><b-icon icon="list-stars"></b-icon> Details</h5> -->
                <h5 class="mb-0 ititle-img-contain"><img src="../../assets/imgs/details.png" class="ititle-img"/> {{$t('page.details')}}</h5>
                <!-- <div class="icons-container" v-b-toggle.accordion-2 variant="outline-primary" @click="expandedClick">
                  <b-icon v-if="expanded" icon="chevron-up" rotate="180"></b-icon>
                  <b-icon v-else icon="chevron-down" rotate="-180"></b-icon>
                </div> -->
              </b-card-header>
              <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel" visible>
                <b-card-body class="itrade-card-body itrade-card-body-bottom">
                  <b-card-text>

                    <b-row>
                      <b-col sm="12" md="6" lg="6" class="icontent-left">{{$t('page.contractAddress')}}</b-col>
                      <b-col sm="12" md="6" lg="6" class="icontent-right color-violet">0xa3f5***8881</b-col>
                    </b-row>
                    <b-row>
                      <b-col sm="12" md="6" lg="5" class="icontent-left">{{$t('page.tokenId')}}</b-col>
                      <b-col sm="12" md="6" lg="7" class="icontent-right">0x883a***8887</b-col>
                    </b-row>

                    <b-row>
                      <b-col sm="12" md="6" lg="6" class="icontent-left">{{$t('page.tokenStand')}}</b-col>
                      <b-col sm="12" md="6" lg="6" class="icontent-right">ERC-721</b-col>
                    </b-row>
                    <b-row>
                      <b-col sm="12" md="6" lg="5" class="icontent-left">{{$t('page.blockChain')}}</b-col>
                      <b-col sm="12" md="6" lg="7" class="icontent-right">Ethereum</b-col>
                    </b-row>

                  </b-card-text>
                </b-card-body>
              </b-collapse>


            </b-card>
      </b-col>

      <!-- right -->
      <b-col xs="12" sm="6" lg="8">

        <div class="inft-base">
          <div class="inft-base-share">
            <b-button-group>
              <b-button v-b-popover.hover.top="'Transfer'" v-b-modal.tranfer-dialog variant="purple">
                <img src="../../assets/imgs/transfer.png" class="share-img" />
              </b-button>
              <b-dropdown v-b-popover.hover.top="'Share'" right no-caret variant="purple">
                <template #button-content>
                  <img src="../../assets/imgs/share.png" class="share-img" />
                </template>
                <b-dropdown-item>
                  <b-icon icon="link45deg" variant="Secondary"></b-icon>
                  <span>{{$t('page.copyLink')}}</span>
                </b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>
                  <b-icon icon="facebook" variant="Secondary"></b-icon>
                  <span>{{$t('page.shareon')}} Facebook</span>
                </b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>
                  <b-icon icon="twitter" variant="Secondary"></b-icon>
                  <span>{{$t('page.shareon')}} Twitter</span>
                </b-dropdown-item>
              </b-dropdown>
            </b-button-group>
            <!-- <b-icon icon="share-fill" v-b-tooltip.hover title="share..." font-scale="1.2" variant="secondary" @click="share"></b-icon> -->
          </div>
          <div class="inft-base-name">OP-20220314-1</div>
          <div class="inft-base-owner"> {{$t('page.ownedby')}} <span class="color-violet">you</span> </div>
        </div>

        <div class="inft-history-price">
          <b-card no-body style="width: 100%; margin: 1.2rem auto;border-radius: 0.64rem;">
              <template #header>
                <h5 class="mb-0 ititle-img-contain"><img src="../../assets/imgs/price-history.png" class="ititle-img"/> {{$t('page.pricehistory')}}</h5>
              </template>

              <b-card-body class="itrade-card-body itrade-card-body-bottom">
                <b-card-text>

                  <div class="itimes-show-contain">
                    <b-row>
                      <b-col xs="12" sm="4">
                        <b-form>
                          <b-form-group>
                            <b-form-select
                              v-model="form.stat"
                              :options="stats"
                              required class="icustom-select"></b-form-select>
                          </b-form-group>
                        </b-form>
                      </b-col>
                    </b-row>
                  </div>

                  <!-- history bar -->
                  <div class="itrend-chart-contain">
                    <bar-chart
                      :height="280"
                      ref="barChart"
                      :chart-data="redBarChart.chartData">
                    </bar-chart>
                  </div>

                </b-card-text>
              </b-card-body>

            </b-card>
        </div>

        <div class="inft-history-lists">
          <tradePriceLists></tradePriceLists>
        </div>


      </b-col>
    </b-row>

    <!-- dialog -->
    <div>
      <b-modal
            id="tranfer-dialog"
            ref="modal"
            :title="$t('page.transferyouritem')"
            @ok="handleOk"
            no-close-on-backdrop
            no-stacking
            centered>
            <form ref="form" @submit.stop.prevent="handleSubmit">
              <b-form-group
                :label="$t('page.address')"
                label-for="name-input"
                invalid-feedback="Address is required">
                <b-form-input
                  id="name-input"
                  v-model="transferAddress"
                  required
                  placeholder="e.g. 0x1680hkl..."
                ></b-form-input>
              </b-form-group>
            </form>
          </b-modal>
    </div>

  </div>
</template>

<script>
  import API from '../../util/network.js'

  import * as chartConfigs from '../../components/Charts/config';
  import BarChart from '../../components/Charts/BarChart';

  import tradeImg from '../../components/user/tradeImg.vue'
  import tradePriceLists from '../../components/nfts/tradePriceLists.vue'
  export default{
    name:'trade',
    components: {
      tradeImg, tradePriceLists, BarChart
    },data() {
      return {
        expanded: true,
        form:{
          stat:'All'
        },
        stats: [{ text: 'All', value: 'All' },{ text: 'Last 7 Days', value: '7'}, { text: 'Last 14 Days', value: '14'}, { text: 'Last 30 Days', value: '30'},{ text: 'Last 30 Days', value: '60'}, { text: 'Last 90 Days', value: '90'}],
        transferAddress:'',
        redBarChart: {
          chartData: {
            labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
              label: 'Sales',
              data: [80, 200, 300, 122, 117, 129]
            }]
          },
          extraOptions: chartConfigs.blueChartOptions
        },
      }
    },methods: {
      publish(){
        this.$router.push({name:'publish', params:{id:'1243'}})
      },
      expandedClick() {
        this.expanded = !this.expanded
      },
      share(){
        API.iToast(this, 'share to....', 'default')
      },
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        return valid
      },
      handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }

        /* console.info(this.transferAddress) */

        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide('tranfer-dialog')
        })
      },

    },
  }
</script>

<style scoped="scoped">
  @import url("../../assets/scss/com.css");
  .btns-panel{
    width: 100%;
    padding: 1.2rem;
    background-color: #fbfbfb;
    text-align: right;
    border-bottom: 0.08rem solid #eeeeee;
  }
  .inft-detail-secondheader{
    width: 100%;
    padding: 0.75rem 1.25rem !important;
    border-top: 1px solid rgba(0, 0, 0, 0.125);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .icons-container{
    width: 4.8rem;
    max-width: 40%;
    text-align: right;
    font-size: 1rem;
  }
  .idetails-container > li{
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .itrade-card-body{
    background-color: #f7f8fc;
    font-weight: 400 !important;
    line-height: 2rem;
  }
  .itrade-card-body-bottom{
    border-bottom-left-radius: 0.64rem;
    border-bottom-right-radius: 0.64rem;
  }
  p{
    font-weight: 400 !important;
    line-height: 2rem;
  }

  /* right */
  .inft-base{
    width: 100%;
    margin: 1.2rem auto;
  }
  .inft-base .inft-base-share{
    text-align: right;
  }
  .inft-base .inft-base-name{
    line-height: 2.56rem;
    font-size: 1.6rem;
    font-weight: 500;
    color: #313131;
  }
  .inft-base .inft-base-owner{
    font-size: 1.28rem;
    color: #757373;
  }
  .ititle-img-contain{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .ititle-img-contain .ititle-img{
    width: 1.2rem;
    height: 1.2rem;
    margin: auto 0.4rem;
  }

  .inft-history-price .itimes-show-contain{
    width: 100%;
    height: 3.2rem;
    text-align: left;
  }
  .inft-history-price .itrend-chart-contain{
    width: 100%;
    min-height: 12rem;
    margin: 1.2rem auto;
  }

  .inft-history-lists{
    width: 100%;
    min-height: 12rem;
    margin: 1.2rem auto;
  }

  .share-img{
    width: 1.44rem;
    height: 1.44rem;
  }
</style>
