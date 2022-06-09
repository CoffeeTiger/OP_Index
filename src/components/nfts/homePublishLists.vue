<template>
  <div>

    <b-table responsive="sm"  :items="items" :fields="fields" caption-top @row-clicked="rowclicked" class="itable" empty-text="There are no records to show">

      <template #cell(nikename)="data">
        <div class="icell-height167 itable-cell-type1 ">
          <!-- <span class="itable-index">{{data.item.index}}</span> -->
          <img  class="itable-userheader" :src="data.item.header"/>
          <span class="itable-nikename">{{data.item.nikename}}</span>
        </div>
      </template>

      <template #cell(price)="data">
        <div class="icell-height167 itable-cell-type2 itable-cell-type3 ">
          <div class="icell-up">
            <img class="ieth-logo" src="../../assets/imgs/logo/eth.svg"/>
            <span class="itable-nikename">{{data.item.price}}</span>
          </div>
          <div class="icell-height167 icell-down"></div>
        </div>
      </template>

      <template #cell(progress)="data">
        <div class="icell-height167 itable-cell-type2 itable-cell-type3">
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
        <div class="icell-height167 itable-cell-type2 itable-cell-type3">
          <div class="icell-up">
            <span class="itable-nikename">{{data.item.saleenddate}}<br /> {{data.item.saleendtime}}</span>
          </div>
          <div class="icell-down"><!-- {{data.item.saleendtime}} --></div>
        </div>
      </template>

      <template #cell(prize)="data">

        <!-- <div class="icell-height167 itable-cell-type1" v-if="data.item.prizetype==1">
          <b-img class="itable-prize-img" src="img/nft/seal-nft.png"></b-img>
        </div>

        <div class="icell-height167 itable-cell-type1" v-if="data.item.prizetype==2">
          <b-img class="itable-prize-img" src="img/nft/eth-1.png"></b-img>
        </div>

        <div class="icell-height167 itable-cell-type1" v-if="data.item.prizetype==3">
          <b-img class="itable-prize-img" src="img/nft/eth-2.png"></b-img>
        </div> -->

        <div class="icell-height167 itable-cell-type2 itable-cell-type3 fright">
          <div class="icell-up">
            <img class="ieth-logo" src="../../assets/imgs/logo/eth.svg"/>
            <span class="itable-nikename">{{data.item.prize}}</span>
          </div>
          <div class="icell-down"><!-- (Income) --></div>
        </div>

      </template>

    </b-table>

  </div>
</template>

<script>
  import date from '../../util/date.js'
  export default {
    name:'homePublishLists',
    data() {
      return {
        fields: [
          { key: 'nikename', label: 'NFTs', thClass:'ith ith25 tleft'},
          { key: 'price', label: this.$t("page.table_th_price"), thClass:'ith ith15 tleft'},
          { key: 'progress', label: this.$t("page.table_th_progress"), thClass:'ith ith25 tleft'},
          { key: 'saleend', label: this.$t("page.table_th_saleend"), thClass:'ith ith25 tleft'},
          { key: 'prize', label: this.$t('page.table_th_prize'), thClass:'ith ith10 tright'}],
        items: [
          {index:1, id:'nft000.jpg', header:'img/user/7.png', nikename:'Doodless', price:'0.2', progress:'0', total:'500', sell:'90', saleend:'2022-03-10 16:01:21', saleenddate:'April 11, 2022', saleendtime:'16h 23m 02s', prize:'0.05', prizetype:'1'},
          {index:2, id:'nft001.jpg', header:'img/user/8.png', nikename:'David', price:'1.0', progress:'90', total:'100', sell:'90', saleend:'2022-03-09 13:16:29', saleenddate:'March 11, 2022', saleendtime:'13h 16m 29s', prize:'0.02', prizetype:'1'},
          {index:3, id:'nft002.jpg',header:'img/user/3.png', nikename:'Zombio', price:'0.5', progress:'60', total:'1200', sell:'500', saleend:'2022-03-09 13:46:02', saleenddate:'March 11, 2022', saleendtime:'13h 46m 02s', prize:'0.03', prizetype:'2'},

          {index:4, id:'nft004.jpg',header:'img/user/4.png', nikename:'Wow Women', price:'0.2', progress:'40', total:'200', sell:'90', saleend:'2022-03-08 12:10:52', saleenddate:'March 12, 2022', saleendtime:'12h 10m 52s', prize:'0.01', prizetype:'2'},
          {index:5, id:'nft005.jpg', header:'img/user/5.png', nikename:'badmanbadmanbadmanbadmanbadman', price:'1.8', progress:'90', total:'100', sell:'90', saleend:'2022-03-07 12:11:11', saleenddate:'March 13, 2022', saleendtime:'12h 11m 11s', prize:'0.003', prizetype:'3'},
          {index:6, id:'nft006.jpg', header:'img/user/6.png', nikename:'Bored...', price:'0.6', progress:'23', total:'500', sell:'190', saleend:'2022-03-07 12:01:16', saleenddate:'March 14, 2022', saleendtime:'12h 01m 16s', prize:'0.6', prizetype:'3'},
 
        ]
      }
    },created(){

    },methods: {
      rowclicked(item, index, event) {
        this.$router.push({name:'carouselTrade', params:{id: item.id}})
      },
      more(){
        this.$router.push({path:'/explorelist'})
      }
    },
  }
</script>

<style scoped="scoped">
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
  .iprogress .iprogress-value{
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
