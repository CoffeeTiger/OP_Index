<template>
  <div>

    <b-table responsive="sm" :items="items" :fields="fields" caption-top @row-clicked="rowclicked" class="itable" empty-text="There are no records to show">

      <template #cell(nikename)="data">
        <div class="icell-height119 itable-cell-type1 ">
          <!-- <span class="itable-index">{{data.item.index}}</span> -->
          <img  class="itable-userheader-v2" :src="data.item.header"/>
          <span class="itable-nikename itable-nikename-v2">{{data.item.nikename}}</span>
        </div>
      </template>

      <template #cell(price)="data">
        <div class="icell-height119 itable-cell-type2 itable-cell-type3 ">
          <div class="icell-up">
            <img class="ieth-logo" src="../../assets/imgs/logo/eth.svg"/>
            <span class="itable-nikename itable-nikename-v2">{{data.item.price}}</span>
          </div>
          <div class="icell-height119 icell-down"></div>
        </div>
      </template>

      <template #cell(progress)="data">
        <div class="icell-height119 itable-cell-type2 itable-cell-type3">
          <div class="icell-up">
            <!-- <span class="itable-nikename">{{data.item.sell}}/{{data.item.total}}</span> -->
            <div class="iprogress">
            	<div class="iprogress-inner bg_yellow" style="width: 50%;"></div>
              <span class="iprogress-value">{{data.item.sell}}/{{data.item.total}}</span>
            </div>
          </div>
          <div class="icell-down progress-width60">
            <!-- <b-progress :value="data.item.progress" variant="primary" class="iprogress" ></b-progress> -->
          </div>
        </div>
      </template>

      <template #cell(saleend)="data">
        <div class="icell-height119 itable-cell-type2 itable-cell-type3">
          <div class="icell-up">
            <span class="itable-nikename itable-nikename-v2">{{data.item.saleenddate}}<br /> {{data.item.saleendtime}}</span>
          </div>
          <div class="icell-down"><!-- {{data.item.saleendtime}} --></div>
        </div>
      </template>

      <template #cell(luckyfellow)="data">
        <div class="icell-height119 itable-cell-type2 itable-cell-type3">
          <div class="icell-up">
            <span class="itable-nikename itable-nikename-v2">{{data.item.luckyfellow}}</span>
          </div>
          <div class="icell-down"><!-- {{data.item.saleendtime}} --></div>
        </div>
      </template>


      <template #cell(reword)="data">



        <div class="icell-height119 itable-cell-type2 itable-cell-type3" >
          <template v-if="data.item.prizetype==1">
            <b-img class="itable-prize-img" src="img/nft/seal-nft.png"></b-img>
          </template>
          <template v-else>
            <div class="icell-up">
              <img class="ieth-logo" src="../../assets/imgs/logo/eth.svg"/>
              <span class="itable-nikename itable-nikename-v2">{{data.item.rewordcontent}} </span>
            </div>
            <div class="icell-down"></div>
          </template>

        </div>
      </template>

    </b-table>


    <template v-if="items.length == 0">
      <div class="inodata">
        <img src="../../assets/imgs/nodata.png" class="inodata-img" />
      </div>
    </template>

    <div class="ipages-contain">
      <b-button variant="outline-primary"  class="ipages-btn">
        <b-icon icon="chevron-left"></b-icon>
        <span>1-50 </span>
      </b-button>
      <b-button variant="outline-primary" class="ipages-btn" disabled>
        <span> 51-100</span>
        <b-icon icon="chevron-right"></b-icon>
      </b-button>
    </div>

  </div>
</template>

<script>
  import date from '../../util/date.js'
  export default {
    name: 'exploreFindLists',
    data() {
      return {
        fields: [{
            key: 'nikename',
            label: 'NFTs',
            thClass: 'ith ith-lists ith25'
          },
          {
            key: 'price',
            label: this.$t("page.table_th_price"),
            thClass: 'ith ith-lists ith15'
          },
          {
            key: 'progress',
            label: this.$t("page.table_th_progress"),
            thClass: 'ith ith-lists ith15'
          },
          {
            key: 'saleend',
            label: this.$t("page.table_th_saleend"),
            formatter(value, item, index) {},
            thClass: 'ith ith-lists ith20'
          },
          {
            key: 'luckyfellow',
            label: this.$t("page.table_th_luckyfellow"),
            thClass: 'ith ith-lists ith25'
          },
          {
            key: 'reword',
            label: this.$t("page.table_th_prize"),
            thClass: 'ith ith-lists ith20'
          }
        ],
        items: [{
            index: 1,
            header: 'img/user/7.png',
            nikename: 'Meixi',
            price: '0.1',
            progress: '90',
            total: '100',
            sell: '90',
            saleend: '2022-03-18 12:01:31',
            saleenddate: 'April 11, 2022',
            saleendtime: '16:23:02',
            luckyfellow: '0x1e23***3179',
            reword: 'NFT',
            rewordcontent: '0.01',
            prizetype: '0'
          },
          {
            index: 1,
            header: 'img/user/8.png',
            nikename: 'Meixi',
            price: '0.28',
            progress: '10',
            total: '100',
            sell: '10',
            saleend: '2022-03-01 13:21:31',
            saleenddate: 'April 11, 2022',
            saleendtime: '16:23:02',
            luckyfellow: '0x3e21***1839',
            reword: 'NFT',
            rewordcontent: '0.02',
            prizetype: '1'
          },
          {
            index: 1,
            header: 'img/user/7.png',
            nikename: 'Meixi',
            price: '1.50',
            progress: '20',
            total: '100',
            sell: '20',
            saleend: '2022-03-01 11:43:11',
            saleenddate: 'April 11, 2022',
            saleendtime: '16:23:02',
            luckyfellow: '0x2a11***1009',
            reword: 'veOPH',
            rewordcontent: '0.03',
            prizetype: '0'
          },

          {
            index: 1,
            header: 'img/user/8.png',
            nikename: 'Meixi',
            price: '2.00',
            progress: '30',
            total: '100',
            sell: '30',
            saleend: '2022-03-01 09:10:11',
            saleenddate: 'April 11, 2022',
            saleendtime: '16:23:02',
            luckyfellow: '0x3e31***2871',
            reword: 'NFT',
            rewordcontent: '0.05',
             prizetype: '0'
          },
          {
            index: 1,
            header: 'img/user/7.jpg',
            nikename: 'Meixi',
            price: '1.28',
            progress: '50',
            total: '200',
            sell: '50',
            saleend: '2022-03-01 09:10:11',
            saleenddate: 'April 11, 2022',
            saleendtime: '16:23:02',
            luckyfellow: '0x4e11***2379',
            reword: 'veOPH',
            rewordcontent: '0.06',
            prizetype: '1'
          },
          {
            index: 1, header: 'img/user/8.jpg',nikename: 'Meixi',price: '1.08', progress: '90',total: '100',sell: '90', saleend: '2022-03-18  11:11:11',
            saleenddate: 'April 11, 2022',saleendtime: '16:23:02',luckyfellow: '0x31a1***1879',reword: 'veOPH',rewordcontent: '0.08', prizetype: '0'
          }, {
            index: 1, header: 'img/user/8.png',nikename: 'Meixi',price: '1.08', progress: '90',total: '100',sell: '90', saleend: '2022-03-18  11:11:11',
            saleenddate: 'April 11, 2022',saleendtime: '16:23:02',luckyfellow: '0x311b***1879',reword: 'veOPH',rewordcontent: '0.08', prizetype: '0'
          }, {
            index: 1, header: 'img/user/8.jpg',nikename: 'Meixi',price: '1.08', progress: '90',total: '100',sell: '90', saleend: '2022-03-18  11:11:11',
            saleenddate: 'April 11, 2022',saleendtime: '16:23:02',luckyfellow: '0x3a11***1879',reword: 'veOPH',rewordcontent: '0.08', prizetype: '0'
          },{
            index: 1, header: 'img/user/2.jpg',nikename: 'Meixi',price: '1.08', progress: '90',total: '100',sell: '90', saleend: '2022-03-18  11:11:11',
            saleenddate: 'April 11, 2022',saleendtime: '16:23:02',luckyfellow: '0x3111***1879',reword: 'veOPH',rewordcontent: '0.08', prizetype: '0'
          },{
            index: 1, header: 'img/user/8.jpg',nikename: 'Meixi',price: '1.08', progress: '90',total: '100',sell: '90', saleend: '2022-03-18  11:11:11',
            saleenddate: 'April 11, 2022',saleendtime: '16:23:02',luckyfellow: '0x319e***1879',reword: 'veOPH',rewordcontent: '0.08', prizetype: '0'
          },{
            index: 1, header: 'img/user/8.jpg',nikename: 'Meixi',price: '1.08', progress: '90',total: '100',sell: '90', saleend: '2022-03-18  11:11:11',
            saleenddate: 'April 11, 2022',saleendtime: '16:23:02',luckyfellow: '0x31a1***1879',reword: 'veOPH',rewordcontent: '0.08', prizetype: '0'
          },


        ]
      }
    },
    created() {

    },
    methods: {
      rowclicked(item, index, event) {
        this.$router.push({name:'carouselTrade', params:{id: item.id}})
      },
    },
  }
</script>

<style scoped>
  .iprogress {
    width: 8.3333rem;
    height: 1.6666rem;
    border-radius: 0.8333rem;
    background: #505050;
  }

  .iprogress .iprogress-inner {
    min-width: 1.6666rem;
    height: 1.6666rem;
    border-radius: 0.8333rem;
    text-align: center;
  }

  .iprogress .iprogress-value {
    width: 8.3333rem;
    height: 1.6666rem;
    line-height: 1.6666rem;
    position: absolute;
    font-size: 1.1111rem;
    /* font-family: OpenSans-Medium, OpenSans; */
    font-weight: 500;
    margin-top: -1.6666rem;
    margin-left: 0.4444rem;
    color: #1C212B;
  }
</style>
