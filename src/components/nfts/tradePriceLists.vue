<template>
  <div class="activity-contaner iborder">

    <b-table responsive="sm" :items="items" :fields="fields" caption-top hover borderless sticky-header @row-clicked="rowclicked" class="itable itrade-card-body-bottom itable-v2 itable-v3">


      <template #cell(Buyer)="data">
        <div class="itable-cell-type2 itable-cell-type4">
          <div class="icell-up icell-up-v2">
            <span class="itable-nikename">{{data.item.Buyer}}</span>
            <img class="iprize" src="../../assets/imgs/prize.png"/>
          </div>
          <div class="icell-down"></div>
        </div>
      </template>

      <template #cell(Date)="data">
        <div class="itable-cell-type2 itable-cell-type4">
          <div class="icell-up icell-up-v2">
            <span class="itable-nikename">{{data.item.datey}}</span>
          </div>
          <div class="icell-down">
            <span class="itable-nikename">{{data.item.datet}}</span>
          </div>
        </div>
      </template>

      <template #cell(Number)="data">
        <div class="itable-cell-type2 itable-cell-type4">
          <div class="icell-up icell-up-v2">
            <!-- <img class="ieth_logo" src="../../assets/imgs/eth.png"/> -->
            <span class="itable-nikename">{{data.item.Number}}</span>
          </div>
          <div class="icell-down"></div>
        </div>
      </template>

      <template #cell(Commodity)="data">
        <div class="itable-cell-type2 itable-cell-type4">
          <div class="icell-up icell-up-v2">
            <span class="itable-nikename">{{data.item.Commodity}}</span>
          </div>
          <div class="icell-down"></div>
        </div>
      </template>

    </b-table>


  </div>
</template>

<script>
  export default {
    name:'tradePriceLists',
    data() {
      return {
        fields: [
          { key: 'Buyer', label: this.$t('page.table_th_Buyer'), thClass:'ith'},
          { key: 'Date', label: this.$t('page.table_th_Date'), thClass:'ith'},
          { key: 'Number', label: this.$t('page.table_th_Number'), thClass:'ith'},
          { key: 'Commodity', label: this.$t('page.table_th_Commodity'), thClass:'ith'},
        ],
        items: [
          {index:1, Buyer:'LIAO', datey:'August 01, 2022',datet:'16:23:29 PM', Number:'1', Commodity:'#001'},
          {index:1, Buyer:'TOTO', datey:'August 02, 2022',datet:'10:16:12 AM', Number:'1', Commodity:'#002'},
          {index:1, Buyer:'Joe', datey:'August 09, 2022',datet:'13:16:21 PM', Number:'1', Commodity:'#003'},
          {index:1, Buyer:'Kcol', datey:'August 21, 2022',datet:'16:23:29 PM', Number:'1', Commodity:'#001'},
          {index:1, Buyer:'Turggetz', datey:'August 23, 2022',datet:'10:16:12 AM', Number:'1', Commodity:'#002'},
          {index:1, Buyer:'craze', datey:'August 12, 2022',datet:'13:16:21 PM', Number:'1', Commodity:'#003'},

          {index:1, Buyer:'stace', datey:'August 23, 2022',datet:'16:23:29 PM', Number:'1', Commodity:'#001'},
          {index:1, Buyer:'Lex', datey:'August 09, 2022',datet:'10:16:12 AM', Number:'1', Commodity:'#002'},
          ],
      }
    },created(){

    },methods: {
      rowclicked() {
      }
    },
  }
</script>

<style scoped="scoped">
  @import url("../../assets/scss/com.css");
  .activity-contaner{
    /* border: 0.08rem solid #b6b6b8; */
    border-radius: 0.4rem;
    background-color: #f7f8fc;
  }
  .iprize{
    width: 1.44rem;
    height: 1.72rem;
    margin-left: 1rem;
  }
  .itrade-card-body-bottom{
    border-radius: 0.64rem;
  }
</style>
