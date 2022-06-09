<template>
  <div class="ibondlist-table-contain">

    <b-table :items="items" :fields="fields" borderless fixed  @row-clicked="rowclicked" class="itable ibond-table ">

      <template #cell(Bond)="data">
        <div class="ibond-table-cell">
          <!-- <div class="icell-left">
            <img src="../../assets/imgs/ethereum.png" class="icell-left-img" />
          </div> -->
          <div class="icell-right">
            <div>{{data.item.Bond}}</div>
            <div>{{data.item.Bond2}}</div>
          </div>
        </div>
      </template>

      <template #cell(Price)="data">
        <div class="ibond-table-cell">
          <div class="icell-center">$28.58</div>
        </div>
      </template>

      <template #cell(Discount)="data">
        <div class="ibond-table-cell">
          <div class="icell-center color-red">-0.85%</div>
        </div>
      </template>

      <template #cell(Duration)="data">
        <div class="ibond-table-cell">
          <div class="icell-center">2days</div>
        </div>
      </template>

      <!-- <template #cell(btn)="data">
        <div class="ibond-table-cell">
          <div class="icell-center">
            <b-button variant="outline-primary" class="icell-btn-font" @click="bond"> {{$t('page.buybond')}}  </b-button>
          </div>
        </div>
      </template> -->

    </b-table>


  </div>
</template>

<script>
  export default {
    name:'homePublishLists',
    data() {
      return {
        fields: [
          { key: 'Bond', label: this.$t('page.table_th_bond'), thClass:'ith ith30 tleft ipadding_left32'},
          { key: 'Price', label: this.$t('page.table_th_price'), thClass:'ith ith25 tleft'},
          { key: 'Discount', label: this.$t('page.table_th_discount'), thClass:'ith ith25 tleft'},
          { key: 'Duration', label: this.$t('page.table_th_Duration'), thClass:'ith ith20 tleft' }
          ],
        items: [
          {index:1, Bond:'OPH LP', Bond2:'', Price:'$18.58', Discount:'-0.85%', Duration:'2days'},
          {index:1, Bond:'OPH LP', Bond2:'', Price:'$18.58', Discount:'-0.85%', Duration:'2days'},
          {index:1, Bond:'OPH LP', Bond2:'', Price:'$18.58', Discount:'-0.85%', Duration:'2days'},
          {index:1, Bond:'OPH LP', Bond2:'', Price:'$18.58', Discount:'-0.85%', Duration:'2days'},
          {index:1, Bond:'OPH LP', Bond2:'', Price:'$18.58', Discount:'-0.85%', Duration:'2days'}
        ]
      }
    },created(){

    },methods: {
      rowclicked() {
        console.info('000')
      },
      bond() {
        this.$router.push({name:'buybonds', params:{}})
      }
    },
  }
</script>

<style scoped="scoped">
  @import url("../../assets/scss/com.css");

  .ibond-table{
    background-color: #f7f8fc;
  }
  .ibond-table .ibond-table-tr:hover{
    background-color: #ffffff63;
  }
  .ibond-table .ibond-table-cell{
    /* padding: 1rem 0; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.111111rem;
    font-weight: 400;
    color: #313131;
  }
  .ibond-table .ibond-table-cell .icell-left .icell-left-img{
    width: 1.6rem;
    height: 1.6rem;
    margin: 0 0.8rem;
  }
  .ibond-table .ibond-table-cell .icell-center{

  }
  .ibond-table .ibond-table-cell .icell-right{
     text-align: left;
     margin: 0 0.8rem;
  }
  .ibond-table .ibond-table-cell .icell-btn-font{
    font-weight: bold;
    border: 2px solid #6976fe !important;
    padding-left: 20px;
    padding-right: 20px;
  }

  .ibondlist-table-contain{
    /* border-radius: 0.4rem;
    border: 1px solid rgba(0, 0, 0, 0.125);
    background-color: #f7f8fc; */
  }

</style>
