<template>
  <div>
    <b-button variant="light" @click="contract1()"> 获取资产 </b-button>
    <b-button variant="light" @click="contract2()"> 创建活动 </b-button>
    <b-button variant="light" @click="contract2_001()"> 启动活动 </b-button>
    <b-button variant="light" @click="contract3()"> 参与活动 </b-button>

  </div>
</template>

<script>
  import {ERC_20, ERC_721, ERC_1155} from '../../util/erc.js'
  export default {
    name: 'ERC1155',
    data() {
      return {
        acount: '',
        /* 当前钱包地址，测试网 */
        acount2: '0xB28bb0BA22ced9e83D284a894be5149f5A0d6f79',
        /* 另外一个账号 */
        address: '',
        rpcUrl: 'HTTP://192.168.10.77:7545',
        /* ws://some.local-or-remote.node */
        contractAddress20: '',
        contractAddress721: '',
        contractAddress1155: '',
        ABI_1155: '',
        webs: '',
      }
    },
    created() {
      this.initWallet()

      let erc1155 = JSON.parse(ERC_1155);
      /* console.info(erc20[0].address)
      console.info(erc20[0]) */
      this.contractAddress1155 = erc1155[0].address
      this.ABI_1155 = JSON.stringify(erc1155[0].abi)

      var Web3 = require('web3');
      this.web3 = new Web3(Web3.givenProvider || this.rpcUrl);

      /* 请求、启用账户 */
      this.web3.eth.requestAccounts().then(function(counts) {
        console.info(counts)
      })

      console.info(JSON.parse(this.ABI_1155))

      this.initEvent1155()
    },
    methods: {
      async initWallet() {
        if (typeof window.ethereum !== 'undefined') {

          let accounts = await ethereum.request({
            method: 'eth_requestAccounts'
          }).then((accounts) => {
            if (accounts.length === 0) {
              console.log('Please connect to MetaMask.');
            } else if (accounts[0] !== this.acount) {
              this.acount = accounts[0]
              // Do any other work!
              console.log('wallet address:' + this.acount);
            }
          }).catch((err) => {
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
      async contract1() {
        var contract1155 = new this.web3.eth.Contract(JSON.parse(this.ABI_1155), this.contractAddress1155);

        var approval = '0x9a6d97dEdc6B5eee83Fd5578B5A8619e4eefB2e9'
        var indexid = 61
        /* contract1155.methods.balanceOf(this.acount, indexid).call({from: this.acount}, function(error, result){
          console.info(error)
          console.info(result)
        }) */

        //回调获取返回信息
        /* contract1155.methods.balanceOf(approval, indexid).call({
          from: this.acount
        }).then(console.info) */
        //等待返回信息
        var balance = await contract1155.methods.balanceOf(approval, indexid).call({
          from: this.acount
        })
        console.info(balance)

        var ar_address = ['0x9a6d97dEdc6B5eee83Fd5578B5A8619e4eefB2e9', '0x7a07D6d598fd23623B11A8DCe3539bcA6550e7AA']
        var ar_ids = [62, 62]
        await contract1155.methods.balanceOfBatch(ar_address, ar_ids).call({
          from: this.acount
        }).then(console.info)

      },
      contract2() {
        var contract1155 = new this.web3.eth.Contract(JSON.parse(this.ABI_1155), this.contractAddress1155);

        /* 要创建的活动属性信息，触发NewActivity事件 */
        var price = 1
        var description = 'description abc'
        var minJoinCount = 10
        var periodInMinutes = 100
        var maxJoinCount = 20
        var _uri = ''
        var bonusDescription = 'bonusDescription abc'
        var bonusUri = 'bonusUri abc'

        contract1155.methods.newActivity(price, description, minJoinCount, periodInMinutes, maxJoinCount, _uri,
          bonusDescription, bonusUri).send({
          from: this.acount,
          value: this.web3.utils.toWei('0.01', 'ether')
        }, function(error, result) {
          /* 在这里或者下面的NewActivity事件里获取活动编号activityId */
          console.info(error)
          console.info(result)
        });
        /* contract1155.methods.newActivity(price, description, minJoinCount, periodInMinutes, maxJoinCount, _uri,
          bonusDescription, bonusUri).send({
          from: this.acount,
          value: this.web3.utils.toWei('0.01', 'ether')
        }).then(console.info); */

      },
      contract2_001(){
        var contract1155 = new this.web3.eth.Contract(JSON.parse(this.ABI_1155), this.contractAddress1155);
        /* 启动活动 出发 jion事件*/
        var activityId = 1;
        contract1155.methods.start(activityId).send({
          from: this.acount,
          value: this.web3.utils.toWei('0.01', 'ether')
        }, function(error, result) {
          console.info(error)
          console.info(result)
        });
      },
      contract3(){
        var contract1155 = new this.web3.eth.Contract(JSON.parse(this.ABI_1155), this.contractAddress1155);
        /* 参与活动 出发 jion事件*/
        var activityId = 1;
        var joinCount = 1;
        contract1155.methods.join(activityId, joinCount).send({
          from: this.acount,
          value: this.web3.utils.toWei('0.01', 'ether')
        }, function(error, result) {
          console.info(error)
          console.info(result)
        });

      },
      initEvent1155() {
        console.info('...Transfer/Approval... ')
        var Web3 = require('web3');
        var web3 = new Web3(new Web3.providers.WebsocketProvider("ws://192.168.10.77:7545"));
        var contract1155 = new this.web3.eth.Contract(JSON.parse(this.ABI_1155), this.contractAddress1155);

        //过滤条件：本钱包下的、最新的
        let options = {
          filter: {
            to: this.acount
          },
          fromBlock: 'latest'
        };

        contract1155.events.NewActivity(options, function(error, result) {
            console.info("contract1155.events：NewActivity。。。" + (new Date()))
            console.info(error)
            console.info('-----')
            console.info(result)

          }).on('data', function(event) {
            console.info(event)
          })
          .on('changed', function(changed) {
            console.info(changed)
          })
          .on('error', function(error) {
            console.info(error)
          })
          .on('connected', function(str) {
            console.info(str)
          })

        contract1155.events.Join(options, function(error, result) {
            console.info("contract1155.events：Join。。。" + (new Date()))
            console.info(error)
            console.info(result)
          }).on('data', function(event) {
            console.info(event)
          })
          .on('changed', function(changed) {
            console.info(changed)
          })
          .on('error', function(error) {
            console.info(error)
          })
          .on('connected', function(str) {
            console.info(str)
          })


      }
    },
  }
</script>

<style>
</style>
