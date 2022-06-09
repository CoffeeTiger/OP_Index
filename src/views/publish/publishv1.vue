<template>
  <div>
    <b-row class="irow">
      <b-col>
      <div class="ipage-title">
        <div class="ititle">Create New Items</div>
        <div class="irequire"> <b-icon icon="asterisk" variant="danger" font-scale="0.6"></b-icon> Requried fields</div>
      </div>

      <!-- imgs -->
      <div class="ifrom-group">
        <div class="ifrom-group-label">
        </div>
        <div class="iinput-area">
          <img src="../../assets/imgs/list-img.png" class="inft-publish"/> 
        </div>
      </div>

      <!-- Name -->
      <div class="ifrom-group">
        <div class="ifrom-group-label">
          <div class="ilable">Name<b-icon icon="asterisk" variant="danger" font-scale="0.4"></b-icon></div>
          <b-icon icon="question-circle" variant="secondary" v-b-popover.hover.top="'Learn more about Sale in our Help Center'"></b-icon>
        </div>
        <div class="iinput-area">
          <b-form-input v-model="form.names" placeholder="Item name"></b-form-input>
        </div>
      </div>

      <!-- Description -->
      <div class="ifrom-group">
        <div class="ifrom-group-label">
          <div class="ilable">Description</div>
          <b-icon icon="question-circle" variant="secondary" v-b-popover.hover.top="'Learn more about Sale in our Help Center'"></b-icon>
        </div>
        <div class="ifrom-group-unitdesc">The description will be included on the items detail page underneath.</div>
        <div class="iinput-area">
          <b-form-textarea  v-model="form.descripton"  placeholder="Provide a detailed description of your item." ></b-form-textarea>
        </div>
      </div>

      <!-- Blockchain -->
      <div class="ifrom-group">
        <div class="ifrom-group-label">
          <div class="ilable">Blockchain</div>
          <b-icon icon="question-circle" variant="secondary" v-b-popover.hover.top="'Learn more about Sale in our Help Center'"></b-icon>
        </div>
        <div class="iinput-area">
           <b-form-select v-model="form.blockchain" :options="blockchainoption"></b-form-select>
        </div>
      </div>

      <div class="ipage-title ipage-title-mid">
        <div class="ititle">Activity information </div>
      </div>

      <!-- Reward -->
      <div class="ifrom-group">
        <div class="ifrom-group-label">
          <div class="ilable">Reward</div>
          <b-icon icon="question-circle" variant="secondary" v-b-popover.hover.top="'Learn more about Sale in our Help Center'"></b-icon>
        </div>
        <div class="iinput-area">
          <b-form-input v-model="form.reward" placeholder="Enter reward"></b-form-input>
        </div>
      </div>

      <!-- Bonus pool rate -->
      <div class="ifrom-group">
        <div class="ifrom-group-label">
          <div class="ilable">Blockchain</div>
          <b-icon icon="question-circle" variant="secondary" v-b-popover.hover.top="'Learn more about Sale in our Help Center'"></b-icon>
        </div>
        <div class="iinput-area">
           <b-form-select v-model="form.rate" :options="rateoption"></b-form-select>
        </div>
      </div>

      <!-- Duration -->
      <div class="ifrom-group">
        <div class="ifrom-group-label">
          <div class="ilable">Duration</div>
          <b-icon icon="question-circle" variant="secondary" v-b-popover.hover.top="'Learn more about Sale in our Help Center'"></b-icon>
        </div>
        <div class="iinput-area">
          <b-form-input v-model="form.duration" placeholder="Enter days"></b-form-input>
        </div>
      </div>

      <!-- Total count -->
      <div class="ifrom-group">
        <div class="ifrom-group-label">
          <div class="ilable">Total count</div>
          <b-icon icon="question-circle" variant="secondary" v-b-popover.hover.top="'Learn more about Sale in our Help Center'"></b-icon>
        </div>
        <div class="iinput-area">
          <b-form-input type="number" v-model="form.totalcount" placeholder="Enter total count"></b-form-input>
        </div>
      </div>

      <!-- Min join count -->
      <div class="ifrom-group">
        <div class="ifrom-group-label">
          <div class="ilable">Min join count</div>
          <b-icon icon="question-circle" variant="secondary" v-b-popover.hover.top="'Learn more about Sale in our Help Center'"></b-icon>
        </div>
        <div class="iinput-area">
          <b-form-input type="number" v-model="form.minjoincount" placeholder="Enter min join count"></b-form-input>
        </div>
      </div>

      <!-- Price -->
      <div class="ifrom-group">
        <div class="ifrom-group-label">
          <div class="ilable">Price</div>
          <b-icon icon="question-circle" variant="secondary" v-b-popover.hover.top="'Learn more about Sale in our Help Center'"></b-icon>
        </div>
        <div class="iinput-area">
          <b-form-input v-model="form.price" placeholder="Enter price"></b-form-input>
        </div>
      </div>

      <div class="ifrom-btn">
        <b-button variant="primary" size="lg">&ensp;&ensp; Create &ensp;&ensp;</b-button>
      </div>

      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default{
    name:'publish',
    components: {},
    data() {
      return {
        form:{
          names: '',
          externallink:'',
          descripton:'',
          blockchain:'Ethereum',
          reward:'NFT',
          rate:'10%',
          duration:'7days',
          totalcount:'1',
          minjoincount:'1',
          price:'1'
        },
        blockchainoption:[
          {value:'Ethereum', text:'Ethereum'},
          {value:'Polygon', text:'Polygon'}
        ],
        rateoption:[
          {value:'10%', text:'10%'},
          {value:'20%', text:'20%'},
          {value:'30%', text:'30%'},
          {value:'40%', text:'40%'},
          {value:'50%', text:'50%'},
          {value:'60%', text:'60%'},
        ]

      }
    },create(){

    },methods: {

    },
  }
</script>

<style scoped="scoped">
  @import url("../../assets/scss/com.css");
  .ipage-title{
    width: 100%;
  }
  .ipage-title-mid{
    padding-top: 2rem;
  }
  .ipage-title .ititle{
    line-height: 5.12rem;
    font-size: 1.44rem;
    font-weight: bolder;
  }
  .ipage-title .irequire{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .ifrom-btn{
    width: 100%;
    padding: 3.84rem 0;
    text-align: center;
  }

  .inft-publish{
    width: 100%;
    max-width: 23.2rem;
    height: 14.4rem;
    border-radius: 0.4rem;
  }

</style>
