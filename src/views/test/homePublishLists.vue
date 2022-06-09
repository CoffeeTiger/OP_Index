<template>
  <div>

    <b-table :items="items" :fields="fields" caption-top hover fixed @row-clicked="rowclicked" class="itable itable-mode-wide">
      <template #table-caption>
        <div class="ihome-list-caption">
          <div class="text-lg-left ihome-list-title">List</div>
          <div class="text-right">More <b-icon icon="chevron-right" variant="Secondary"></b-icon> </div>
        </div>
      </template>

      <template #cell(first_name)="data">
        <div class="itable-cell-type1">
          <span class="itable-index">{{data.item.index}}</span>
          <b-img class="itable-userheader" thumbnail rounded src="img/nft/icedd.jpg"></b-img>
          <span class="itable-nikename">{{data.item.first_name}}</span>
        </div>
      </template>

      <template #cell(last_name)="data">
        <div class="itable-cell-type1">
          <b-img class="itable-userheader" thumbnail rounded src="img/nft/icedd.jpg">100</b-img>
          <span class="itable-nikename">{{data.item.last_name}}</span>
        </div>
      </template>

      <template #cell(age1)="data">
        <b class="text-info"> {{data.item.age1}} </b>
      </template>

      <template #cell(age2)="data">
        <b class="text-info"> {{data.item.age2}} </b>
      </template>

      <template #cell(age3)="data">
        <b class="text-info"> {{data.item.age3}} </b>
      </template>

    </b-table>

    <b-table :items="items" :fields="fields" caption-top hover stacked fixed @row-clicked="rowclicked" class="itable itable-mode-narrow">
      <template #table-caption>
        <div class="ihome-list-caption">
          <div class="text-lg-left ihome-list-title">List</div>
          <div class="text-right">More <b-icon icon="chevron-right" variant="Secondary"></b-icon> </div>
        </div>
      </template>

    </b-table>


  </div>
</template>

<script>
  export default {
    name:'homePublishLists',
    data() {
      return {
        fields: [
          { key: 'first_name', label: 'first_name Full Name'},
          { key: 'last_name', label: 'last_name Full Name' },
          { key: 'age1', label: 'age1 Full Name' },
          { key: 'age2', label: 'age2 Full Name' },
          { key: 'age3', label: 'age3 Full Name' }],
        items: [
          {index:1, age1: 41, age2: 40,age3: 400000000000,first_name: 'DickersonDickerskerson1', last_name: 'Macdonald' },
          {index:2, age1: 41, age2: 40,age3: 409,first_name: 'Dickerson2', last_name: 'MacdowewfwfrfrfffffffffffffffffffffnaldDickersonD12324354657689789' },
          {index:3, age1: 41, age2: 42,age3: 40,first_name: 'Dickerson3', last_name: 'Macdonald' },
          {index:4, age1: 401, age2: 40,age3: 40,first_name: 'Dickerson4', last_name: 'Macdonald' },
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

  @media only screen and (min-width: 768px) {
    .itable-mode-wide{

    }
    .itable-mode-narrow{
      display: none !important;
    }
  }
  @media only screen and (min-width: 0px) and (max-width: 767px) {
    .itable-mode-wide{
      display: none !important;
    }
    .itable-mode-narrow{

    }
  }

  .itable .itable-cell-type1{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1rem;
    color: #313131;
    font-weight: bold;
  }
  .itable .itable-cell-type1 .itable-userheader{
    width: 2.56rem;
    height: 2.56rem;
    margin: 0 0.4rem;
  }
  .itable .itable-cell-type1 .itable-nikename{
    overflow: hidden;
    text-overflow: ellipsis;
  }

</style>
