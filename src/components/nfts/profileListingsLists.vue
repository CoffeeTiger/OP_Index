<template>
  <div>

    <b-table :items="items" :fields="fields" caption-top hover fixed @row-clicked="rowclicked" class="itable itable-mode-wide">
      <!-- <template #table-caption>
        <div class="ihome-list-caption">
          <div class="text-lg-left ihome-list-title">List</div>
          <div class="text-right">More <b-icon icon="chevron-right" variant="Secondary"></b-icon> </div>
        </div>
      </template> -->

      <template #cell(nikename)="data">
        <div class="itable-cell-type1">
          <span class="itable-index">{{data.item.index}}</span>
          <b-img class="itable-userheader" thumbnail rounded src="img/nft/header.png"></b-img>
          <span class="itable-nikename">{{data.item.nikename}}</span>
        </div>
      </template>

      <template #cell(price)="data">
        <div class="itable-cell-type2">
          <div class="icell-up">
            <img class="ieth_logo" src="../../assets/imgs/eth.png"/>
            <span class="itable-nikename">{{data.item.price}}</span>
          </div>
          <div class="icell-down"></div>
        </div>
      </template>

      <template #cell(progress)="data">
        <div class="itable-cell-type2">
          <div class="icell-up">
            <span class="itable-nikename">{{data.item.sell}}/{{data.item.total}}</span>
          </div>
          <div class="icell-down">
            <b-progress :value="data.item.progress" variant="primary" animated></b-progress>
          </div>
        </div>
      </template>

      <template #cell(saleend)="data">
        <div class="itable-cell-type2">
          <div class="icell-up">
            <span class="itable-nikename">{{data.item.saleend}}</span>
          </div>
          <div class="icell-down"></div>
        </div>
      </template>

      <template #cell(luckyfellow)="data">
        <div class="itable-cell-type2">
          <div class="icell-up">
            <span class="itable-nikename">{{data.item.luckyfellow}}</span>
          </div>
          <div class="icell-down">NFT</div>
        </div>
      </template>

      <template #cell(reword)="data">
        <div class="itable-cell-type2">
          <div class="icell-up">
            <span class="itable-nikename">{{data.item.reword}} </span>
          </div>
          <div class="icell-down">{{data.item.rewordcontent}}</div>
        </div>
      </template>

    </b-table>

    <b-table :items="items" :fields="fields" caption-top hover stacked fixed @row-clicked="rowclicked" class="itable itable-mode-narrow">
      <!-- <template #table-caption>
        <div class="ihome-list-caption">
          <div class="text-lg-left ihome-list-title">List</div>
          <div class="text-right">More <b-icon icon="chevron-right" variant="Secondary"></b-icon> </div>
        </div>
      </template> -->

      <template #cell(nikename)="data">
        <div class="itable-cell-type1">
          <span class="itable-index">{{data.item.index}}</span>
          <b-img class="itable-userheader" thumbnail rounded src="img/nft/header.jpg"></b-img>
          <span class="itable-nikename">{{data.item.nikename}}</span>
        </div>
      </template>

      <template #cell(price)="data">
        <div class="itable-cell-type2">
          <div class="icell-up">
            <img class="ieth_logo" src="../../assets/imgs/eth.png"/>
            <span class="itable-nikename">{{data.item.price}}</span>
          </div>
          <div class="icell-down"></div>
        </div>
      </template>

      <template #cell(progress)="data">
        <div class="itable-cell-type2">
          <div class="icell-up">
            <span class="itable-nikename">{{data.item.sell}}/{{data.item.total}}</span>
          </div>
          <div class="icell-down">
            <b-progress :value="data.item.progress" variant="primary" animated></b-progress>
          </div>
        </div>
      </template>

      <template #cell(saleend)="data">
        <div class="itable-cell-type2">
          <div class="icell-up">
            <span class="itable-nikename">{{data.item.saleend}}</span>
          </div>
          <div class="icell-down"></div>
        </div>
      </template>

      <template #cell(luckyfellow)="data">
        <div class="itable-cell-type2">
          <div class="icell-up">
            <span class="itable-nikename">{{data.item.luckyfellow}}</span>
          </div>
          <div class="icell-down">NFT</div>
        </div>
      </template>

      <template #cell(reword)="data">
        <div class="itable-cell-type2">
          <div class="icell-up">
            <span class="itable-nikename">{{data.item.reword}} </span>
          </div>
          <div class="icell-down">{{data.item.rewordcontent}}</div>
        </div>
      </template>

    </b-table>

    <template v-if="items.length == 0">
      <div class="inodata">
        <img src="../../assets/imgs/nodata.png" class="inodata-img" />
      </div>
    </template>

  </div>
</template>

<script>
  export default {
    name:'profileListingsLists',
    data() {
      return {
        fields: [
          { key: 'nikename', label: ''},
          { key: 'price', label: 'Price', thClass:'ith'},
          { key: 'progress', label: 'Progress', thClass:'ith' },
          { key: 'saleend', label: 'Sale end', formatter(value, item, index){}, thClass:'ith'},
          { key: 'luckyfellow', label: 'Lucky fellow', thClass:'ith'},
          { key: 'reword', label: 'Reword', thClass:'ith'}],
        items: [
          {index:1, nikename:'Meixi', price:'108', progress:'90', total:'100', sell:'90', saleend:'2021-10-01 11:11:11', luckyfellow:'0x3e1197216238486jhd3d1879',reword:'NFT', rewordcontent:'Ethereum'},
          {index:2, nikename:'Kara#123', price:'108', progress:'20', total:'100', sell:'20', saleend:'2021-10-01 11:11:11', luckyfellow:'0x3e1197216238486jhd3d1869',reword:'income', rewordcontent:'Ethereum'},
          {index:3, nikename:'ENS#201', price:'108', progress:'50', total:'100', sell:'50',saleend:'2021-10-01 11:11:11', luckyfellow:'0x3e1197216238486jhd3d1859',reword:'ETH', rewordcontent:'Ethereum'},
          {index:4, nikename:'Meixi007', price:'108', progress:'100', total:'100', sell:'100',saleend:'2021-10-01 11:11:11', luckyfellow:'0x3e1197216238486jhd3d1849',reword:'Ethereum', rewordcontent:'ETH'},
          {index:5, nikename:'MeixiMeixiMeixiMeixiMeixiMeix', price:'108', progress:'90',total:'100', sell:'90', saleend:'2021-10-01 11:11:11', luckyfellow:'0x3e1197216238486jhd3d1859',reword:'10', rewordcontent:'income'},
          {index:1, nikename:'Meixi', price:'108', progress:'70',total:'100', sell:'70', saleend:'2021-10-01 11:11:11', luckyfellow:'0x3e1197216238486jhd3d1829',reword:'50', rewordcontent:'income'},
          {index:1, nikename:'Meixi', price:'108', progress:'9', total:'100', sell:'9',saleend:'2021-10-01 11:11:11', luckyfellow:'0x3e1197216238486jhd3d1819',reword:'ETH', rewordcontent:'Ethereum'},

          {index:1, nikename:'Meixi', price:'108', progress:'90',total:'100', sell:'90', saleend:'2021-10-01 11:11:11', luckyfellow:'0x3e1197216238486jhd3d1879',reword:'ETH', rewordcontent:'Ethereum'},
          {index:2, nikename:'Kara#123', price:'108', progress:'20',total:'100', sell:'20', saleend:'2021-10-01 11:11:11', luckyfellow:'0x3e1197216238486jhd3d1869',reword:'ETH', rewordcontent:'Ethereum'},
          {index:3, nikename:'ENS#201', price:'108', progress:'50', total:'100', sell:'50',saleend:'2021-10-01 11:11:11', luckyfellow:'0x3e1197216238486jhd3d1859',reword:'ETH', rewordcontent:'Ethereum'},
          {index:4, nikename:'Meixi007', price:'108', progress:'100',total:'100', sell:'100', saleend:'2021-10-01 11:11:11', luckyfellow:'0x3e1197216238486jhd3d1849',reword:'ETH', rewordcontent:'Ethereum'},
          {index:5, nikename:'MeixiMeixiMeixiMeixiMeixiMeix', price:'108', progress:'90',total:'100', sell:'90', saleend:'2021-10-01 11:11:11', luckyfellow:'0x3e1197216238486jhd3d1859',reword:'ETH', rewordcontent:'Ethereum'},
          {index:1, nikename:'Meixi', price:'108', progress:'1', total:'100', sell:'1', aleend:'2021-10-01 11:11:11', luckyfellow:'0x3e1197216238486jhd3d1829',reword:'ETH', rewordcontent:'Ethereum'},
          {index:1, nikename:'Meixi', price:'108', progress:'0', total:'100', sell:'0', saleend:'2021-10-01 11:11:11', luckyfellow:'0x3e1197216238486jhd3d1819',reword:'ETH', rewordcontent:'Ethereum'},
        ]
      }
    },created(){

    },methods: {
      rowclicked() {
        console.info('000')
      }
    },
  }
</script>

<style>
  @import url("../../assets/scss/com.css");


</style>
