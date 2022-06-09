<template>
  <div>
    <div class="inft-contain bg_lightgray">

      <div class="inft-imgs">
      	<img :src="require('../../assets/imgs/nfts/' + src)" class="inft-img" />
      </div>

      <div class="inft-infos">
      	<div class="icell icell-title">
      		<div class="ititle color_yellow">Cryptomorie</div>
      		<div class="ivalue">
      			<div class="iprogress">
      				<div class="iprogress-inner bg_yellow" :style="{width:progress+'%'}"></div>
              <span class="iprogress-value">{{salenum}}/{{totalnum}}</span>
      			</div>
      		</div>
      	</div>

      	<div class="icell icell-values">
      		<div class="ivalue">
      			<img src="../../assets/imgs/logo/eth.svg" class="logo-eth" />
      			<div class="ivalue-eth">{{ethval}}<span class="ius-dol">(${{dolval}})</span> </div>
      		</div>
      	</div>
      </div>

    </div>
  </div>
</template>

<script>
  export default{
    name:'nftActivity',
    data() {
      return {
        id: 'nfts-if',
        progress:0,
      }
    },props:{
      nftid: {
        type: String,
        default:''
      },
      name: {
        type: String,
        default:'Cryptomorie'
      },
      src: {
        type: String,
        default:'../../assets/imgs/nfts/nfts-example001.png'
      },
      ethval: {
        type: String,
        default:'0.33'
      },
      dolval: {
        type: String,
        default:'881.8'
      },
      salenum: {
        type: String,
        default: ''
      },
      totalnum: {
        type: String,
        default: ''
      },
    },created() {
      if (this.salenum =='' || this.totalnum == '') {
        this.progress = 0
      } else{
         let sale_num = Number(this.salenum).valueOf()
         let total_num = Number(this.totalnum).valueOf()
         this.progress = (sale_num / total_num) *100
         console.info(this.progress)

      }
    }
  }
</script>

<style scoped>

.inft-contain{
  width: 21.2777rem;
  height: 28.1666rem;
  border: 0.1111rem solid #3C3C3C;
  border-radius: 1.1666rem;
  overflow: hidden;
}
.inft-contain:hover{
  transition: all .2s ease-in .1s;
  border: 0.1111rem solid #606060;
  filter: brightness(0.9);
}

.inft-contain .inft-imgs{
  width: 100%;
  height: 21.0555rem;
  overflow: hidden;
}
.inft-contain .inft-imgs .inft-img{
  width: 100%;
}
.inft-contain .inft-infos{
  width: 100%;
  padding: 1.3333rem 0.9444rem;
}
.inft-contain .inft-infos .icell {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.6111rem;
}

.inft-contain .inft-infos .icell-title .ititle{
  font-size: 1.5555rem;
  font-weight: 400;
  line-height: 2.1666rem;
  font-family: Poppins-Medium, Poppins;
}

.inft-contain .inft-infos .icell-title .ivalue {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.logo-eth {
  width: 0.8888rem;
  height: 1.4444rem;
  margin-right: 0.6666rem;
}

.inft-contain .inft-infos .icell-values {
  font-size: 1.5555rem;
  font-weight: 400;
  line-height: 2.0555rem;
  font-family: Poppins-Medium, Poppins;
}

.inft-contain .inft-infos .icell-values .ivalue {
  line-height: 2.0555rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.inft-contain .inft-infos .icell-values .ivalue .ius-dol {
  font-size: 1.2222rem;
  font-weight: 300;
  font-family: Poppins-Light, Poppins;
  color: #979797;
}
.inft-contain .inft-infos .icell-values .ivalue-eth {
  color: #FFFFFF;
}

.iprogress {
  width: 6.7777rem;
  height: 1.3888rem;
  border-radius: 0.7222rem;
  background: #505050;
}

.iprogress .iprogress-inner {
  min-width: 1.3888rem;
  height: 1.3888rem;
  border-radius: 0.7222rem;
  text-align: center;
}
.iprogress .iprogress-value{
  width: 6.7777rem;
  height: 1.3888rem;
  line-height: 1.3888rem;
  position: absolute;
  font-size: 1.1111rem;
  font-weight: 500;
  margin-top: -1.3888rem;
  margin-left: 0.4444rem;
  color: #1C212B;
}

</style>
