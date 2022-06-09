<template>
  <div class="icontainer-subpage">
    <div class="inftinfo-contain">
      <div class="inftinfo-left">
        <div class="inft-img">
          <img src="../../assets/imgs/nfts/nft000.jpg" class="iimg" />
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
                <li class="ikv">
                  <div class="ikey">{{$t('page.commodity')}}</div>
                  <div class="ivalue">#007</div>
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
              <b-dropdown v-b-popover.hover.top="'Share'" right no-caret variant="purple">
                <template #button-content>
                  <img src="../../assets/imgs/share.svg" class="ishare-img" />
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

        <a href="#">
          <div class="ioriginal-links imargin-bottom-48">
            <span>View original</span>
            <img src="../../assets/imgs/circle-arrow-right.svg" />
          </div>
        </a>

        <template v-if="!isopen">
          <div class="ipanelv2 imargin-bottom-24">
            <div class="ipanelv2-body bg_lightgray">
              <div class="ibody-content itrade">
                <div class="isubtitle">{{$t('page.prize')}}</div>
                <div class="icontent">

                  <!-- method 1 -->
                  <!-- <img src="../../assets/imgs/seal-nft.png" class="ireward-nft" v-if="prizetype=='1'" /> -->
                  <template v-if="prizetype=='1'">
                    <span class="inum">ETH</span>
                  </template>

                  <!-- method 2 -->
                  <template v-if="prizetype=='0'">
                    <img src="../../assets/imgs/oph.png" class="ilogo-oph" />
                    <span class="inum">20</span>
                    <span class="idesc">(Highest)</span>
                  </template>

                </div>

              </div>
            </div>
          </div>

          <div class="ipanelv2 imargin-bottom-24">
            <div class="ipanelv2-bodyv2 bg_lightgray">
              <div class="ibody-content">

                <template v-if="!isopen">
                <div class="ibody-content itrade itrade-v2">
                  <div class="isubtitle">{{$t('page.saleends')}} Match 5,2022 at 12:29an CST</div>
                  <div class="icontent">
                    <div class="iend-time color-gray">
                      <div class="iend-time-item">
                        <span class="inum color_yellow">5</span><br /> {{$t('page.hours')}}
                      </div>
                      <div class="iend-time-item">
                        <span class="inum color_yellow">32</span><br />{{$t('page.minutes')}}
                      </div>
                      <div class="iend-time-item">
                        <span class="inum color_yellow">45</span><br />{{$t('page.seconds')}}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="ihr"></div>
                </template>

                <template v-if="!isopen">
                <div class="ibody-content itrade itrade-v2">
                  <div class="isubtitle">{{$t('page.schedule')}}</div>
                  <div class="icontent icontent-v2">
                    <div class="iprogress">
                      <div class="iprogress-inner bg_yellow" :style="{width:progress+'%'}"></div>
                      <span class="iprogress-value"></span>
                    </div>
                    <div class="iprogress-valuev2 color_yellow">50/100</div>
                  </div>
                </div>
                <div class="ihr"></div>
                </template>

                <div class="ibody-content itrade itrade-v2">
                  <div class="isubtitle">{{$t('page.price')}}</div>
                  <div class="icontent">
                    <img src="../../assets/imgs/logo/eth3.png" class="ilogo-eth" />
                    <span class="inum">0.02</span>
                    <span class="idesc">($81.85)</span>
                  </div>
                </div>

                <div class="ibody-content itrade itrade-v2 ibuy-now ">
                  <div class="ibtn ibuy-now-btn color_black imargin-top-48" @click="buyAgain" v-if="!isopen">
                    {{$t('page.buyAgain')}}</div>
                  <div class="ibtn ibuy-now-btn color_black imargin-top-48" @click="getAward" v-if="islucky && !isrewarded">
                    {{$t('page.getAward')}}</div>
                  <div class="ibtn ibuy-now-btn irewarded-btn imargin-top-48" v-if="isrewarded">{{$t('page.rewarded')}}</div>
                </div>

              </div>
            </div>
          </div>

        </template>
        <template v-else>

          <div class="ipanelv2 imargin-bottom-24" v-if="islucky">
            <div class="ipanelv2-body bg_lightgray">
              <div class="ibody-content itrade">
                <div class="isubtitle">{{$t('page.prize')}}</div>
                <div class="icontent">

                  <!-- method 1 -->
                  <!-- <img src="../../assets/imgs/seal-nft.png" class="ireward-nft" v-if="prizetype=='1'" /> -->
                  <template v-if="prizetype=='1'">
                    <span class="inum">ETH</span>
                  </template>

                  <!-- method 2 -->
                  <template v-if="prizetype=='0'">
                    <img src="../../assets/imgs/oph.png" class="ilogo-oph" />
                    <span class="inum">20</span>
                    <span class="idesc">(Highest)</span>
                  </template>

                </div>

                <img src="../../assets/imgs/lucker.png" class="ilucky-img" />

              </div>
            </div>
          </div>

          <div class="ipanelv2 imargin-bottom-24" v-if="islucky">
            <div class="ipanelv2-bodyv2 bg_lightgray">
              <div class="ibody-content">

                <div class="ibody-content itrade itrade-v2">
                  <div class="isubtitle">{{$t('page.price')}}</div>
                  <div class="icontent">
                    <img src="../../assets/imgs/logo/eth3.png" class="ilogo-eth" />
                    <span class="inum">0.02</span>
                    <span class="idesc">($81.85)</span>
                  </div>
                </div>

                <div class="ibody-content itrade itrade-v2 ibuy-now ">
                  <div class="ibtn ibuy-now-btn color_black imargin-top-48" @click="buyAgain" v-if="!isopen">
                    {{$t('page.buyAgain')}}</div>
                  <div class="ibtn ibuy-now-btn color_black imargin-top-48" @click="getAward" v-if="islucky && !isrewarded">
                    {{$t('page.getAward')}}</div>
                  <div class="ibtn ibuy-now-btn irewarded-btn imargin-top-48" v-if="isrewarded">{{$t('page.rewarded')}}</div>
                </div>

              </div>
            </div>
          </div>

        </template>



        <div class="ipanelv2 imargin-top-24" v-if="isopen">
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
                      <select class="iinput iinput-nfts-v4" v-model="form.stat">
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
                <bar-chart :height="280" ref="barChart" :chart-data="redBarChart.chartData">
                </bar-chart>
              </div>

            </div>
          </div>
        </div>

        <div class="inft-history-lists">
          <table class="itable itable-bond itable-bond-v2 innertable bg_darkgray">
            <thead>
              <tr class="bg_lightgray">
                <th class="ibond-th25">{{$t('page.buyer')}}</th>
                <th class="ibond-th25">{{$t('page.date')}}</th>
                <th class="ibond-th25">{{$t('page.number')}}</th>
                <th class="ibond-th25">{{$t('page.commodity')}}</th>
              </tr>
            </thead>
            <tbody>

              <tr>
                <td class="ibond-th25">Grigo</td>
                <td class="ibond-th25">
                  <div class="td-cell">
                    Aug.29,2021<br /> 11h 22m 23s
                  </div>
                </td>
                <td class="ibond-th25">1</td>
                <td class="ibond-th25">
                  <div class="td-cell">
                    <div class="td-cell">
                      <span>#007</span>
                    </div>
                  </div>
                </td>
              </tr>

              <tr v-if="isopen">
                <td class="ibond-th25">Grigo</td>
                <td class="ibond-th25">
                  <div class="td-cell">
                    Aug.29,2021<br /> 11h 22m 23s
                  </div>
                </td>
                <td class="ibond-th25">1</td>
                <td class="ibond-th25">
                  <div class="td-cell">
                    <div class="td-cell">
                      <span class="iprize color_yellow">#007</span>
                      <!-- <img :src="require('../../assets/imgs/prize.png')" class="td-prize-img"/> -->
                    </div>
                  </div>
                </td>
              </tr>

              <tr>
                <td class="ibond-th25">Grigo</td>
                <td class="ibond-th25">
                  <div class="td-cell">
                    Aug.29,2021<br /> 11h 22m 23s
                  </div>
                </td>
                <td class="ibond-th25">1</td>
                <td class="ibond-th25">
                  <div class="td-cell">
                    <div class="td-cell">
                      <span>#007</span>
                    </div>
                  </div>
                </td>
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

    <div class="ialert-contain" :class="alertShow?'display_block':'display_none'">
      <div class="ialert-info" @click="close">
        <img src="../../assets/imgs/luckyalert.png" class="iluckyimg" />
      </div>
    </div>


  </div>
</template>

<script>
  import api from '../../util/network.js'
  import * as chartConfigs from '../../components/Charts/config';
  import BarChart from '../../components/Charts/BarChart';
  export default {
    name: 'bought',
    components: {
      BarChart
    },
    data() {
      return {
        id: '',
        transferAddress: '',
        progress: '50',
        nums: 1,
        isopen: false, /* Prize Opening */
        islucky: false, /* Be the lucky one */
        isrewarded: false, /* Already rewarded */
        prizetype: '0',
        sharelink: 'OpenPublish',
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
        form: {
          stat: 'All'
        },
        alertShow: false,
        prizeShow: true,
      }
    },created() {
      let _id = this.$route.params.id
      if (!api.empty(_id)) {
        this.id = _id
      }

      let _isopen = this.$route.params.isopen
      if (!api.empty(_isopen)) {
        this.isopen = _isopen
      }

      let _islucky = this.$route.params.islucky
      if(!api.empty(_islucky)){
        this.islucky = _islucky
      }

      let _isrewarded = this.$route.params.isrewarded
      if (!api.empty(_isrewarded)) {
        this.isrewarded = _isrewarded
      }

      let _prizetype = this.$route.params.prizetype
      if (!api.empty(_prizetype)) {
        this.prizetype = _prizetype
      }



    },
    methods: {
      buyAgain() {

      },
      getAward() {
        this.alertShow = true
      },
      close(){
        this.alertShow = false
      }
    }
  }
</script>

<style scoped>
  @import url("../../assets/scss/nfts.css");

  .ialert-contain {
    width: 100%;
    height: 100%;
    position: fixed;
    background: #121619CC;
    z-index: 9999;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .ialert-contain .ialert-info {
    width: 40.6666rem;
    height: 30.6666rem;
    margin: 0 auto;
  }

  .ialert-contain .ialert-info .iluckyimg {
    width: 100%;
  }
  .ialert-contain .ialert-info .iluckyimg:hover{
    opacity: 0.86;
    transition: all .2s ease-in-out;
  }

  .display_block{
    display: flex;
  }
  .display_none{
    display: none !important;
  }
</style>
