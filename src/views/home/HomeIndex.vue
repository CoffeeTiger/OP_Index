<template>
  <div class="icontainer-subpage">

    <b-container fluid class="iheader-banner iheader-banner-bg-img">
      <b-row class="irow">
        <b-col xl="8" md="8" sm="12" xs="12">
          <!-- <div class="ititle-leve-1">The NFT market that belongs to the public</div>
          <div class="ititle-leve-1">Just4N, just for NFT</div>
          <div class="ibtn-area">
            <b-button variant="primary">Explore</b-button>
            <b-button variant="outline-primary">White paper</b-button>
          </div>
          <div class="service h2 mb-0">
            <b-img center fluid rounded="circle"  src="img/icons/logo/face.png"></b-img>
            <b-img center fluid rounded="circle"  src="img/icons/logo/face.png"></b-img>
            <b-img center fluid rounded="circle"  src="img/icons/logo/face.png"></b-img>
          </div> -->

            <b-jumbotron>

              <template #header>The NFT market that belongs to the public</template>
              <hr class="my-4">
              <template #lead>Just4N, just for NFT</template>
              <b-button variant="primary">Explore</b-button>
              <b-button variant="outline-primary">White paper</b-button>
              <div class="iservice-area">
                <b-button class="ib-button"><b-img center fluid rounded="circle"  src="img/icons/logo/tg.png"></b-img></b-button>
                <b-button class="ib-button"><b-icon icon="facebook" variant="primary" aria-hidden="true"></b-icon></b-button>
                <b-button class="ib-button"><b-icon icon="twitter" variant="primary" aria-hidden="true"></b-icon></b-button>
              </div>
            </b-jumbotron>

        </b-col>
        <b-col xl="4" md="4" sm="12" xs="12">
          <b-card title="Dollar rush"
              img-src="img/nft/icedd.jpg"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem; "
              class="mb-2">
              <b-card-text>Some quick example ,80%</b-card-text>
              <b-progress value="80" animated></b-progress>
              <b-button href="#" variant="primary">Go </b-button>
            </b-card>
        </b-col>
      </b-row>
    </b-container>

    <!--Charts fluid class="mt--7" -->
    <div class="">

      <!--Tables-->
      <b-row class="mt-5">
        <b-col xl="12" class="mb-5 mb-xl-0">
          <page-visits-table></page-visits-table>
        </b-col>
      </b-row>

      <b-row class="mt-5">
        <b-col xl="12" class="mb-5 mb-xl-0">
          <social-traffic-table></social-traffic-table>
        </b-col>
      </b-row>

      <!--End tables-->
    </div>

  </div>
</template>
<script>
  // Charts
  import * as chartConfigs from '@/components/Charts/config';
  import LineChart from '@/components/Charts/LineChart';
  import BarChart from '@/components/Charts/BarChart';

  // Components
  import BaseProgress from '@/components/BaseProgress';
  import StatsCard from '@/components/Cards/StatsCard';

  // Tables
  import SocialTrafficTable from '../Dashboard/SocialTrafficTable';
  import PageVisitsTable from '../Dashboard/PageVisitsTable';

  export default {
    components: {
      LineChart,
      BarChart,
      BaseProgress,
      StatsCard,
      PageVisitsTable,
      SocialTrafficTable
    },
    data() {
      return {
        bigLineChart: {
          allData: [
            [0, 20, 10, 30, 15, 40, 20, 60, 60],
            [0, 20, 5, 25, 10, 30, 15, 40, 40]
          ],
          activeIndex: 0,
          chartData: {
            datasets: [
              {
                label: 'Performance',
                data: [0, 20, 10, 30, 15, 40, 20, 60, 60],
              }
            ],
            labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          },
          extraOptions: chartConfigs.blueChartOptions,
        },
        redBarChart: {
          chartData: {
            labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
              label: 'Sales',
              data: [25, 20, 30, 22, 17, 29]
            }]
          },
          extraOptions: chartConfigs.blueChartOptions
        }
      };
    },
    methods: {
      initBigChart(index) {
        let chartData = {
          datasets: [
            {
              label: 'Performance',
              data: this.bigLineChart.allData[index]
            }
          ],
          labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        };
        this.bigLineChart.chartData = chartData;
        this.bigLineChart.activeIndex = index;
      }
    },
    mounted() {
      this.initBigChart(0);
    }
  };
</script>
<style>
.el-table .cell{
  padding-left: 0px;
  padding-right: 0px;
}
.irow{
  padding: 2rem 0;
}
.iheader-banner{
  width: 100%;
  min-height: 20.24rem;
  background-color: #FFFFFF;
}
.iheader-banner-bg-img{
  background: url(../../assets/imgs/header-bg-img.png) center repeat;
  background-size: cover;
}
.card-img-top{
  width: 90% !important;
  margin: 0.6rem auto;
}
.jumbotron{
  background-color: #FFFFFF00 !important;
}
.ib-button{
  background-color: #FFFFFF00 !important;
  border: 0 !important;
  box-shadow: 0px 0px 0px rgb(50 50 93 / 0%), 0px 0px rgb(0 0 0 / 0%) !important;
}
.iservice-area{
  margin-top: 1.2rem;
}
</style>
