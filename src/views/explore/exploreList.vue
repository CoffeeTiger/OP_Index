<template>
  <div class="icontainer-subpage-v3">
    <div class="inftlist">

      <div class="inftlist-find bg_lightgray" :class="findPanelOpen?'inftlist-find-open':'ifind-header-close'" >
        <div class="ifind-header" @click="changPanel">
          <div class="ititle" v-if="findPanelOpen"><img src="../../assets/imgs/findfilters.svg" class="ifileter-img"/><span>{{$t('page.filters')}}</span></div>
          <img src="../../assets/imgs/findshou.svg" :class="findPanelOpen?'ishow-img':'iclose-img'" />
        </div>
        <div class="ifind-body" v-if="findPanelOpen">

          <div class="ifrom-group">
            <div class="ifrom-group-label ifrom-group-label-find">
              <div class="ilable ilable-find">{{$t('page.filters_state')}}</div>
            </div>
            <div class="iinput-area">
               <div class="icreate-input-outer">
                 <select class="iinput iinput-find" v-model="form.stat">
                   <option value="All">All</option>
                   <option value="All">All</option>
                 </select>
               </div>
            </div>
          </div>

          <div class="ifrom-group">
            <div class="ifrom-group-label ifrom-group-label-find">
              <div class="ilable ilable-find">{{$t('page.filters_price')}}</div>
            </div>
            <div class="iinput-area iinput-area-find">
               <div class="icreate-input-outer">
                 <input type="number" class="iinput iinput-find iinput-find-v2" v-model="form.min" placeholder="Min" min="0" max="999999"/>
               </div>
               <div class="ito">To</div>
               <div class="icreate-input-outer">
                 <input type="number" class="iinput iinput-find iinput-find-v2" v-model="form.max" placeholder="MAX" min="0" max="999999"/>
               </div>
            </div>
          </div>

          <div class="ifrom-group">
            <div class="ifrom-group-label ifrom-group-label-find">
              <div class="ilable ilable-find">{{$t('page.filters_reward')}}</div>
            </div>
            <div class="iinput-area">
               <div class="icreate-input-outer">
                 <select class="iinput iinput-find" v-model="form.reward">
                   <option value="All">All</option>
                   <option value="OPH">OPH</option>
                   <option value="NFT">NFT</option>
                 </select>
               </div>
            </div>
          </div>

        </div>
      </div>

      <div class="ilists" :class="findPanelOpen?'ilists-open':'ilists-close'">
        <exploreFindLists></exploreFindLists>
      </div>

    </div>
    
  </div>
</template>

<script>
  import exploreFindLists from '../../components/nfts/exploreFindLists.vue'
  export default{
    name:'explorelist',
    components: {
      exploreFindLists
    },
    data() {
      return {
        findPanelOpen: true,
        form: {
          min: '',
          max: '',
          reward: 'All',
          stat: 'All',
        },
        stats: [{ text: this.$t('page.filters_state_all'), value: 'All'},
        { text: this.$t('page.filters_state_completed'), value: 'Completed'},
        { text: this.$t('page.filters_state_inprogress'), value:'In progress'},
        { text: this.$t('page.filters_state_reward'), value:'Reward'}],
        rewards: [{ text: this.$t('page.filters_reward_all'), value: 'All' },
        { text: this.$t('page.filters_reward_nft'), value: 'NFT' },
        { text: this.$t('page.filters_reward_eth'), value: 'ETH' }],
      }
    },created(){

    },methods: {
      changPanel() {
        this.findPanelOpen = !this.findPanelOpen
      }
    },
  }
</script>

<style scoped>

  .inftlist{
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .inftlist .inftlist-find{
    /* width: 16.6666rem; */
    height: 33.3333rem;
    border: 0.1111rem solid #3C3C3C;
    border-top: 0;
  }
  .inftlist .inftlist-find .ifind-header{
    width: 100%;
    height: 5.1111rem;
    line-height: 5.1111rem;
    padding: 0 1rem;
    border-bottom: 0.1111rem solid #3C3C3C;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
  }
  .inftlist .inftlist-find .ifind-header .ititle{
    font-size: 1.5555rem;
    font-weight: 300;
    color: #979797;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
  }
  .inftlist .inftlist-find .ifind-header .ifileter-img{
    width: 1.2222rem;
    height: 1.1111rem;
    margin-right: 1rem;
  }
  .inftlist .inftlist-find .ifind-header .ishow-img{
    width: 1.7777rem;
    height: 1.7777rem;
    padding: 0.2222rem;
    border: 0.1111rem solid #f6d99e00;
  }
  .inftlist .inftlist-find .ifind-header .iclose-img{
    width: 1.7777rem;
    height: 1.7777rem;
    padding: 0.2222rem;
    border: 0.1111rem solid #f6d99e00;
    /* transition: all .1s; */
    transform: rotate(180deg);
  }
  .inftlist .inftlist-find .ifind-header .ishow-img:hover{
    border: 0.1111rem solid #f6d99e50;
    border-radius: 0.2222rem;
  }
  .inftlist .inftlist-find-open{
    width: 16.6666rem;
    transition: all .5s ease-in-out;
  }
  .inftlist .ifind-header-close{
    width: 5.1111rem;
    border: 0.1111rem solid #3C3C3C;
    border-top: 0;
    transition: all .5s ease-in-out;
  }
  .inftlist .ifind-body{
    width: 100%;
    padding: 0 1rem;
  }

  .inftlist .ifind-body .ifrom-group-label-find{
    padding: 0;
  }
  .inftlist .ifind-body .ilable-find{
    line-height: 1.6666rem;
    font-size: 1.1111rem;
    font-weight: 300;
    color: #C2C2C2;
    margin: 1.3888rem 0 0.7222rem;
  }
  .inftlist .ifind-body .icreate-input-outer{
    width: 100%;
    border-radius: 0.4444rem;
    padding: 0 1rem;
    background: #414242;
  }
  .inftlist .ifind-body .iinput-area-find{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .inftlist .ifind-body .iinput-area-find .ito{
    padding: 0 0.2222rem;
    font-size: 1.2222rem;
    font-weight: 300;
    color: #979797;
  }
  .inftlist .ifind-body .icreate-input-outer .iinput-find{
    width: 100%;
    height: 2.6666rem;
    line-height: 2.6666rem;
    font-size: 1.3333rem;
    font-family: Poppins-Regular, Poppins;
    font-weight: 300;
    color: #FFFFFF;
  }
  .inftlist .ifind-body .icreate-input-outer .itextarea{
    width: 100%;
    height: 9.1111rem;
    padding: 1.3333rem 0;
    line-height: 2.3333rem;
    font-size: 1.5555rem;
    font-family: Poppins-Regular, Poppins;
    font-weight: 300;
    color: #FFFFFF;
  }

  .inftlist .ilists{
    margin: 5rem 0;
  }
  .inftlist .ilists-open{
    width: -webkit-calc(100% - 17.7777rem);
    width: calc(100% - 17.7777rem);
    transition: all .5s ease-in-out;
  }
  .inftlist .ilists-close{
    width: -webkit-calc(100% - 6.2222rem);
    width: calc(100% - 6.2222rem);
    transition: all .5s ease-in-out;
  }


  .iexplore-find-panel{
    width: 19.833333rem;
    height: 31.611111rem;
    background-color: #FBFBFB;
    border: 2px solid #EEEEEE;
    border-radius: 0.4rem;
  }
  .ifind-panel-header{
    width: 100%;
    height: 3.84rem;
    border-bottom: 1px solid #eeeeee;
  }
  .ifind-panel-header .iexpansion-img{
    width: 1.222222rem;
    height: 1.111111rem;
    margin: 1.111111rem;
  }
  .ifind-panel-header .iexpansion-img:hover{
    opacity: .6;
  }
  .ifind-panel-header .transform-180{
    transform: rotate(180deg);
    float: right;
  }
  .ifind-panel-header-title{
    height: 3.84rem;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1.555555rem;
    font-weight: bold;
  }
  .ifind-panel-header-flex{
    display: flex;
    justify-content: space-between;
  }
  .iform-find{
    width: -webkit-calc(100% - 2rem);
    margin: 1rem;
    color: #4e5c69;
  }
  .iform-find .iform-to{
    font-size: 1.222222rem;
    color: #DAD9D9;
  }

  .iform-find label, legend{
    font-size: 1.111111rem !important;
    color: #C2C2C2;
  }

  .idate-select-contain{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .idate-select-contain .idate-select{
    width: 7.333333rem;
    height: 2.666666rem;
    border: 2px solid #EEEEEE;
  }

  .custom-select, .form-control{
    font-size: 1.333333rem;
  }

  .iexplore-left{
    width: 20.055555rem;
  }

  .iexplore-right{
    width: -webkit-calc(100% - 23.388888rem);
    margin: 0 auto;
  }

  .iexplore-left2{
    width: 3.666666rem;
    height: 3.666666rem;
  }
  /* 2+20+22+20+2, 100%-(2+20+22+20+2)-30-30 */
  .iexplore-right2{
    width: -webkit-calc(100% - 7rem);
    margin: 0 auto;
  }

</style>
