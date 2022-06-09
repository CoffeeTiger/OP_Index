<template>
  <div>
    <b-button variant="light" @click="contract1()" > 获取币信息 </b-button>
    <b-button variant="light" @click="contract2()" > 转个比 </b-button>

    <br />
    <b-button variant="light" @click="contract3()" > 签个名 </b-button>
    <input type="text" placeholder="原文" value="" v-model="yuanwen"/><br />
    <textarea v-model="signValue" cols="60" rows="5"></textarea>


  </div>
</template>

<script>
  import {ERC_20, ERC_721, ERC_1155} from '../../util/erc.js'
  export default{
    name:'erc20',
    data() {
      return {
        acount: '', /* 当前钱包地址，测试网 */
        acount2:'0xB28bb0BA22ced9e83D284a894be5149f5A0d6f79', /* 另外一个账号 */
        address:'',
        rpcUrl:'HTTP://192.168.10.77:7545',/* ws://some.local-or-remote.node */
        contractAddress20:'',
        contractAddress721:'',
        contractAddress1155:'',
        ABI_20:'',
        web3:'',
        yuanwen:'',
        signValue:''
      }
    },
    created(){
      this.initWallet()

      var Web3 = require('web3');
      this.web3 = new Web3(Web3.givenProvider || this.rpcUrl);

      /* 请求、启用账户 */
      this.web3.eth.requestAccounts().then(function(counts){
        console.info(counts)
      })

      //
      let erc20 = JSON.parse(ERC_20);
      /* console.info(erc20[0].address)
      console.info(erc20[0]) */
      this.contractAddress20 = erc20[0].address
      this.ABI_20 = JSON.stringify(erc20[0].abi)

      console.info(JSON.parse(this.ABI_20))

    },methods: {
      async initWallet(){
        if (typeof window.ethereum !== 'undefined') {

          let accounts = await ethereum.request({
            method: 'eth_requestAccounts'
          }).then((accounts) =>{
            if (accounts.length === 0) {
              console.log('Please connect to MetaMask.');
            } else if (accounts[0] !== this.acount) {
              this.acount = accounts[0]
              // Do any other work!
              console.log('wallet address:' + this.acount);
            }
          }).catch((err) =>{
            if (err.code === 4001) {
              console.log(this, 'Please connect to MetaMask.', 'default')
            } else {
              console.log(err);
            }
          });

        } else {
          console.log(this, 'MetaMask is uninstalled!', 'warning')
          window.location.href = 'https://metamask.io/download/'
        }
      },
      contract1(){
        let that = this
        this.web3.eth.getBalance(this.acount).then( function(result){
          console.info(that.web3.utils.fromWei(result, 'ether'))
        } );
      },
      contract2(){
        //在私连上转账
        // 以太币转账
        this.web3.eth.sendTransaction({
            from: this.acount,
            to: this.acount2,
            value: this.web3.utils.toWei('0.01', 'ether')
        })
        .then(function(receipt){
            console.log(receipt);
        });
      },
      contract3(){
        /* this.web3.eth.personal.sign(this.web3.utils.utf8ToHex("Hello Dapp"), this.acount, "test password!").then(console.log); */
        console.info(this.yuanwen)
        this.web3.eth.personal.sign(this.web3.utils.utf8ToHex(this.yuanwen), this.acount).then((err)=>{
          console.info(err)
          this.signValue = err
        });

      },
      /* erc20转比监听事件 */
      transferEvent(){

      },

    },
  }
</script>

<style>
</style>
