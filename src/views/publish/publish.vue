<template>
  <div>
    <div class="icontainer-subpage">
      <div class="inftinfo-contain">
        <div class="inftinfo-left">
          <div class="inft-img">
            <img src="../../assets/imgs/nfts/nft000.jpg" class="iimg"/>
          </div>
          <div class="inft-details bg_lightgray">
            <div class="iheader">{{$t('page.description')}}</div>
            <div class="ibody">
              <div class="ibody-content">
                Stakers play an important role in the Openpublish ecosystem.
              </div>
            </div>
            <div class="iheader">{{$t('page.details')}}</div>
            <div class="ibody">
              <div class="ibody-content">
                <ul>
                  <li class="ikv">
                    <div class="ikey">{{$t('page.contractAddress')}}</div>
                    <div class="ivalue">0x3e11…18fb</div>
                  </li>
                  <li class="ikv">
                    <div class="ikey">{{$t('page.tokenId')}}</div>
                    <div class="ivalue">3e112374923759jeij876</div>
                  </li>
                  <li class="ikv">
                    <div class="ikey">{{$t('page.tokenStand')}}</div>
                    <div class="ivalue">ERC-721</div>
                  </li>
                  <li class="ikv">
                    <div class="ikey">{{$t('page.blockChain')}}</div>
                    <div class="ivalue">Ethereum</div>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
        <div class="inftinfo-right">
          <div class="iheader">
            <div class="ititle color_yellow">OP-20220120-9901</div>
            <div class="ifunctions"></div>
          </div>

          <div class="iform-public">

            <div class="ifrom-cell">
              <label>{{$t('page.blockChain')}}</label>
              <div class="iinput-area">
                <div class="iinput-outer bg_lightgray">
                  <select class="iinput iinput-nfts" v-model="form.blockchain" >
                    <option value="Ethereum">Ethereum</option>
                    <option value="Ethereum">Ethereum</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="ifrom-cell">
              <label>{{$t('page.price')}}</label>
              <div class="iinput-area">
                <div class="iinput-outer iinput-outer-v2 bg_lightgray">
                  <input type="text" class="iinput iinput-nfts" v-model="form.price" :placeholder="$t('page.pleaseenterprice')" min="0" max="999999"/>
                </div>
                <div class="iinput-outer iinput-outer-v3 bg_lightgray">
                  <select class="iinput iinput-nfts" >
                    <option value="OPH">OPH</option>
                    <option value="ETH">ETH</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="ifrom-cell">
              <label>{{$t('page.totalcount')}}</label>
              <div class="iinput-area">
                <div class="iinput-outer bg_lightgray">
                  <input type="text" class="iinput iinput-nfts" v-model="form.totalcount" @input="changevalue" :placeholder="$t('page.pleaseentertotalcount')" min="0" max="999999" required/>
                </div>
              </div>
            </div>

            <div class="ifrom-cell">
              <label>{{$t('page.duration')}}</label>
              <div class="iinput-area">
                <div class="iinput-outer bg_lightgray">
                  <select class="iinput iinput-nfts" >
                    <option value="7days">7days</option>
                    <option value="10days">10days</option>
                    <option value="14days">14days</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="ifrom-subtitle color_yellow">{{$t('page.activityinformation')}}</div>

            <div class="ifrom-cell">
              <label>{{$t('page.prize')}}</label>
              <div class="iinput-area">
                <div class="iinput-outer bg_lightgray">
                  <select class="iinput iinput-nfts" v-model="form.reward" @change="rewardchange">
                    <option value="OPH">OPH</option>
                    <option value="NFT">NFT</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="ifrom-cell" v-if="form.rateShow">
              <label>{{$t('page.income')}}</label>
              <div class="iinput-area">
                <div class="iinput-outer iinput-outer-v2 bg_lightgray">
                  <input type="text" class="iinput iinput-nfts" v-model="form.income" :placeholder="$t('page.pleaseenterreward')" min="0" max="999999"/>
                </div>
                <div class="iinput-outer iinput-outer-v3 bg_lightgray">
                  <input type="text" class="iinput iinput-nfts" placeholder="OPH" disabled/>
                </div>
              </div>
            </div>

          </div>

          <div class="ibtn-contain">
            <div class="ibtn ibtn-publish bg_yellow color_black">Publish</div>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import api from '../../util/network.js'

  import tradeImg from '../../components/user/tradeImg.vue'
  export default{
    name:'trade',
    components: {
      tradeImg
    },data() {
      return {
        id:'',
        expanded: true,
        form:{
          totalcount:'100',
          blockchain:'Ethereum',
          pricetype:'veOPH',
          price:'',
          income: '',
          reward:'OPH',
          rate:'10%',
          rateShow: true,
          duration:'7days'
        },
      }
    },created(){
      let _id = this.$route.params.id
      if (!api.empty(_id)) {
        this.id = _id
      }

    }, methods: {
      publish(){
        this.$router.push({name:'publish', params:{id:'1243'}})
      },
      expandedClick() {
        this.expanded = !this.expanded
      },
      onSubmit(){

      },
      changevalue(){
        if (!api.empty(this.form.price) && !api.empty(this.form.totalcount)) {
          this.form.income = this.form.price * this.form.totalcount
        }
      },
      rewardchange(){
        if (this.form.reward =='OPH') {
          this.form.rateShow = true
        } else {
           this.form.rateShow = false
        }
      }
    },
  }
</script>

<style scoped="scoped">
  @import url("../../assets/scss/com.css");
  @import url("../../assets/scss/nfts.css");
</style>
