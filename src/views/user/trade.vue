<template>
  <div class="icontainer-subpage">

    <div class="inftinfo-contain">
      <div class="inftinfo-left">
        <div class="inft-img">
          <img src="../../assets/imgs/nfts/nft000.jpg" class="iimg"/>
        </div>
        <div class="inft-details bg_lightgray">
          <div class="iheader">{{$t('page.description')}}</div>
          <div class="ibody">
            <div class="ibody-content">
              Stakers play an important role in the Openpublish ecosystem.
            </div>
          </div>
          <div class="iheader">{{$t('page.details')}}</div>
          <div class="ibody">
            <div class="ibody-content">
              <ul>
                <li class="ikv">
                  <div class="ikey">{{$t('page.contractAddress')}}</div>
                  <div class="ivalue">0x3e11…18fb</div>
                </li>
                <li class="ikv">
                  <div class="ikey">{{$t('page.tokenId')}}</div>
                  <div class="ivalue">0x883a***8887</div>
                </li>
                <li class="ikv">
                  <div class="ikey">{{$t('page.tokenStand')}}</div>
                  <div class="ivalue">ERC-721</div>
                </li>
                <li class="ikv">
                  <div class="ikey">{{$t('page.blockChain')}}</div>
                  <div class="ivalue">Ethereum</div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
      <div class="inftinfo-right">
        <div class="iheader">
          <div class="ititle color_yellow">OP-20220120-9901</div>
          <div class="ifuns">
            <b-button-group>

              <b-button v-b-popover.hover.top="'Publish'" @click="publish" variant="purple">
                <img src="../../assets/imgs/publish.svg" class="ipublish-img"/>
              </b-button>

              <b-button v-b-popover.hover.top="'Transfer'" v-b-modal.tranfer-dialog variant="purple">
                <img src="../../assets/imgs/transfer.svg" class="itransfer-img"/>
              </b-button>

              <b-dropdown v-b-popover.hover.top="'Share'" right no-caret variant="purple">
                <template #button-content>
                  <img src="../../assets/imgs/share.svg" class="ishare-img"/>
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
          </div>
        </div>

        <!-- <div class="ipanelv2 imargin-top-48">
          <div class="ipanelv2-header bg_lightgray">
            <div class="ititle">Price history</div>
            <div class="ifuns">ss</div>
          </div>
          <div class="ipanelv2-body bg_darkgray">
            <div class="ibody-content">

            </div>
          </div>
        </div> -->

        <div class="ipanelv2 imargin-top-48">
          <div class="ipanelv2-header bg_lightgray">
            <div class="ititle">{{$t('page.priceHistory')}}</div>
            <div class="ifuns"></div>
          </div>
          <div class="ipanelv2-body bg_darkgray">
            <div class="ibody-content">

              <div class="iform-public">
                <div class="ifrom-cell">
                  <div class="iinput-area">
                    <div class="iinput-outer bg_lightgray iinput-outer-v4">
                      <select class="iinput iinput-nfts-v4" v-model="form.stat" >
                        <option value="All">All time</option>
                        <option value="7">Last 7 Days</option>
                        <option value="14">Last 14 Days</option>
                        <option value="30">Last 30 Days</option>
                        <option value="60">Last 60 Days</option>
                        <option value="90">Last 90 Days</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <!-- history bar -->
              <div class="itrend-chart-contain">
                <bar-chart
                  :height="280"
                  ref="barChart"
                  :chart-data="redBarChart.chartData">
                </bar-chart>
              </div>

            </div>
          </div>
        </div>

        <div class="inft-history-lists">
          <!-- <tradePriceLists></tradePriceLists> -->
          <table class="itable itable-bond itable-bond-v2 innertable bg_darkgray">
            <thead>
              <tr class="bg_lightgray">
                <th class="ibond-th21">{{$t('page.event')}}</th>
                <th class="ibond-th18">{{$t('page.price')}}</th>
                <th class="ibond-th18">{{$t('page.eventFrom')}}</th>
                <th class="ibond-th18">{{$t('page.eventTo')}}</th>
                <th class="ibond-th25">{{$t('page.date')}}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="ibond-th21">minted</td>
                <td class="ibond-th18">
                  <div class="td-cell">
                    <img :src="require('../../assets/imgs/logo/eth3.png')" class="td-eth-img"/>
                    <span>0.01</span>
                  </div>
                </td>
                <td class="ibond-th18">
                  <div class="td-cell">
                    <img :src="require('../../assets/imgs/level/level01.svg')" class="td-level-img"/>
                    <span>David</span>
                  </div>
                </td>
                <td class="ibond-th18">you</td>
                <td class="ibond-th25">12 days ago</td>
              </tr>

              <tr>
                <td class="ibond-th21">minted</td>
                <td class="ibond-th18">
                  <div class="td-cell">
                    <img :src="require('../../assets/imgs/logo/eth3.png')" class="td-eth-img"/>
                    <span>0.02</span>
                  </div>
                </td>
                <td class="ibond-th18">
                  <div class="td-cell">
                    <img :src="require('../../assets/imgs/level/level02.svg')" class="td-level-img"/>
                    <span>David</span>
                  </div>
                </td>
                <td class="ibond-th18">you</td>
                <td class="ibond-th25">12 days ago</td>
              </tr>

              <tr>
                <td class="ibond-th21">minted</td>
                <td class="ibond-th18">
                  <div class="td-cell">
                    <img :src="require('../../assets/imgs/logo/eth3.png')" class="td-eth-img"/>
                    <span>0.03</span>
                  </div>
                </td>
                <td class="ibond-th18">
                  <div class="td-cell">
                    <img :src="require('../../assets/imgs/level/level03.svg')" class="td-level-img"/>
                    <span>David</span>
                  </div>
                </td>
                <td class="ibond-th18">you</td>
                <td class="ibond-th25">12 days ago</td>
              </tr>

              <tr>
                <td class="ibond-th21">minted</td>
                <td class="ibond-th18">
                  <div class="td-cell">
                    <img :src="require('../../assets/imgs/logo/eth3.png')" class="td-eth-img"/>
                    <span>0.04</span>
                  </div>
                </td>
                <td class="ibond-th18">
                  <div class="td-cell">
                    <img :src="require('../../assets/imgs/level/level04.svg')" class="td-level-img"/>
                    <span>David</span>
                  </div>
                </td>
                <td class="ibond-th18">you</td>
                <td class="ibond-th25">12 days ago</td>
              </tr>

              <tr>
                <td class="ibond-th21 ">minted</td>
                <td class="ibond-th18">
                  <div class="td-cell">
                    <img :src="require('../../assets/imgs/logo/eth3.png')" class="td-eth-img"/>
                    <span>0.05</span>
                  </div>
                </td>
                <td class="ibond-th18">
                  <div class="td-cell">
                    <img :src="require('../../assets/imgs/level/level05.svg')" class="td-level-img"/>
                    <span>David</span>
                  </div>
                </td>
                <td class="ibond-th18">you</td>
                <td class="ibond-th25">12 days ago</td>
              </tr>

              <tr>
                <td class="ibond-th21 ">minted</td>
                <td class="ibond-th18">
                  <div class="td-cell">
                    <img :src="require('../../assets/imgs/logo/eth3.png')" class="td-eth-img"/>
                    <span>0.06</span>
                  </div>
                </td>
                <td class="ibond-th18">
                  <div class="td-cell">
                    <img :src="require('../../assets/imgs/level/level06.svg')" class="td-level-img"/>
                    <span>David</span>
                  </div>
                </td>
                <td class="ibond-th18">you</td>
                <td class="ibond-th25">12 days ago</td>
              </tr>

              <!-- <tr>
                <td class="ibond-th20 ipadding_left32">minted</td>
                <td class="ibond-th20">$18.58</td>
                <td class="ibond-th20">-0.85%</td>
                <td class="ibond-th20">2days</td>
                <td class="ibond-th20">12 days ago</td>
              </tr> -->



            </tbody>
          </table>
        </div>

      </div>
    </div>




    <!-- <div class="btns-panel">
      <b-button variant="outline-primary" size="lg" v-b-modal.tranfer-dialog>&ensp;&ensp; {{$t('page.transfer')}} &ensp;&ensp;</b-button>
      <b-button variant="primary" size="lg" @click="publish">&ensp;&ensp; {{$t('page.publish')}} &ensp;&ensp;</b-button>
    </div> -->


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
  @import url("../../assets/scss/nfts.css");

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

  /* .inft-history-lists{
    width: 100%;
    max-height: 49.4444rem;
    min-height: 12rem;
    margin: 1.2rem auto;
    border-radius: 0.8888rem;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .inft-history-lists::-webkit-scrollbar{
    width: 0.2222rem;
    padding: 0.8888rem 0;
  }
  .inft-history-lists::-webkit-scrollbar-thumb{
    border-radius: 0.2222rem;
    background: #F7B62D;
  } */


  .share-img{
    width: 1.44rem;
    height: 1.44rem;
  }
</style>
