<template>
  <div class="activity-contaner">

    <b-table :items="items" :fields="fields" caption-top hover fixed @row-clicked="rowclicked" class="itable itable-mode-wide">
      <!-- <template #table-caption>
        <div class="ihome-list-caption">
          <div class="text-lg-left ihome-list-title">List</div>
          <div class="text-right">More <b-icon icon="chevron-right" variant="Secondary"></b-icon> </div>
        </div>
      </template> -->

      <template #cell(event)="data">
        <div class="itable-cell-type2">
          <div class="icell-up icell-up-v2">
            <span class="itable-nikename">{{data.item.event}}</span>
          </div>
          <div class="icell-down"></div>
        </div>
      </template>

      <template #cell(price)="data">
        <div class="itable-cell-type2">
          <div class="icell-up icell-up-v2">
            <img class="ieth_logo" src="../../assets/imgs/eth.png"/>
            <span class="itable-nikename">{{data.item.price}}</span>
          </div>
          <div class="icell-down"></div>
        </div>
      </template>

      <template #cell(from)="data">
        <div class="itable-cell-type2">
          <div class="icell-up icell-up-v2">
            <img class="ieth_logo" src="../../assets/imgs/useals.png"/>
            <span class="itable-nikename">{{data.item.from}}</span>
          </div>
          <div class="icell-down"></div>
        </div>
      </template>

      <template #cell(to)="data">
        <div class="itable-cell-type2">
          <div class="icell-up icell-up-v2">
            <span class="itable-nikename">{{data.item.to}}</span>
          </div>
          <div class="icell-down"></div>
        </div>
      </template>

      <template #cell(win)="data">
        <div class="itable-cell-type2">
          <div class="icell-up icell-up-v2">
            <span class="itable-nikename">{{data.item.win}}</span>
          </div>
          <div class="icell-down"></div>
        </div>
      </template>

      <template #cell(receive)="data">
        <div class="itable-cell-type2">
          <div class="icell-up icell-up-v2">
            <template v-if="data.item.receive=='no'">
              <b-button variant="outline-primary">To Receive <b-icon icon="chevron-double-right"></b-icon> </b-button>
            </template>
            <!-- <span class="itable-nikename">{{data.item.receive}}</span> -->
          </div>
          <div class="icell-down">
            {{data.item.receive}}
          </div>
        </div>
      </template>

      <template #cell(date)="data">
        <div class="itable-cell-type2">
          <div class="icell-up icell-up-v2">
            <span class="itable-nikename">{{data.item.date}}</span>
          </div>
          <div class="icell-down"></div>
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

      <template #cell(event)="data">
        <div class="itable-cell-type2">
          <div class="icell-up icell-up-v2">
            <span class="itable-nikename">{{data.item.event}}</span>
          </div>
          <div class="icell-down"></div>
        </div>
      </template>

      <template #cell(price)="data">
        <div class="itable-cell-type2">
          <div class="icell-up icell-up-v2">
            <img class="ieth_logo" src="../../assets/imgs/eth.png"/>
            <span class="itable-nikename">{{data.item.price}}</span>
          </div>
          <div class="icell-down"></div>
        </div>
      </template>

      <template #cell(from)="data">
        <div class="itable-cell-type2">
          <div class="icell-up icell-up-v2">
            <img class="ieth_logo" src="../../assets/imgs/useals.png"/>
            <span class="itable-nikename">{{data.item.from}}</span>
          </div>
          <div class="icell-down"></div>
        </div>
      </template>

      <template #cell(to)="data">
        <div class="itable-cell-type2">
          <div class="icell-up icell-up-v2">
            <span class="itable-nikename">{{data.item.to}}</span>
          </div>
          <div class="icell-down"></div>
        </div>
      </template>

      <template #cell(win)="data">
        <div class="itable-cell-type2">
          <div class="icell-up icell-up-v2">
            <span class="itable-nikename">{{data.item.win}}</span>
          </div>
          <div class="icell-down"></div>
        </div>
      </template>

      <template #cell(receive)="data">
        <div class="itable-cell-type2">
          <div class="icell-up icell-up-v2">
            <span class="itable-nikename">{{data.item.receive}}</span>
          </div>
          <div class="icell-down"></div>
        </div>
      </template>

      <template #cell(date)="data">
        <div class="itable-cell-type2">
          <div class="icell-up icell-up-v2">
            <span class="itable-nikename">{{data.item.date}}</span>
          </div>
          <div class="icell-down"></div>
        </div>
      </template>

    </b-table>

  </div>
</template>

<script>
  export default {
    name:'profileActivityLists',
    data() {
      return {
        fields: [
          { key: 'event', label: 'Event', thClass:'ith'},
          { key: 'price', label: 'Price', thClass:'ith'},
          { key: 'from', label: 'From', thClass:'ith'},
          { key: 'to', label: 'To', thClass:'ith'},
          { key: 'win', label: 'Win', thClass:'ith'},
          { key: 'receive', label: 'Receive', thClass:'ith'},
          { key: 'date', label: 'Date', thClass:'ith'}],
        items: [
          {index:1, event:'Minted', price:'108', from:'Dance', to:'you', date:'14 days ago', win:'yes', receive:'no'},
          {index:1, event:'Minted', price:'108', from:'Messi', to:'you', date:'12 days ago', win:'yes', receive:'yes'},
          {index:1, event:'Minted', price:'108', from:'Messi', to:'you', date:'5 days ago', win:'yes', receive:'yes'},
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
  .activity-contaner{
    border: 0.08rem solid #b6b6b8;
    border-radius: 0.4rem;
  }
</style>
