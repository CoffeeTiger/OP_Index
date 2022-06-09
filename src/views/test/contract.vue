<template>
  <div>
    <b-row>
      <div>
        <!-- ERC721 -->
        <b-button variant="light" @click="contractTest1()">testContract1</b-button>
        <b-button variant="light" @click="contractTest2()">testContract2 本地测试网</b-button>
        <b-button variant="light" @click="contractTest3()">铸币</b-button>
        <b-button variant="light" @click="contractTest3_tokenid()">铸币->根据tokenid获取信息</b-button>
        <b-button variant="light" @click="contract5()" > 转移NFT </b-button>

        <br />
        <b-button variant="light" @click="contract4()" >1155</b-button><br />



      </div>
    </b-row>
  </div>
</template>

<script>
  import {ERC_20, ERC_721, ERC_1155} from '../../util/erc.js'
  export default{
    name:'contract',
    data() {
      return {
        acount: '', /* 当前钱包地址，测试网 */
        acount2:'0xB28bb0BA22ced9e83D284a894be5149f5A0d6f79', /* 另外一个账号 */
        address:'',
        rpcUrl:'HTTP://192.168.10.77:7545',/* ws://some.local-or-remote.node */
        contractAddress20:'',
        contractAddress721:'',
        contractAddress1155:'',
        contract_test_count1:'0x9a6d97dEdc6B5eee83Fd5578B5A8619e4eefB2e9',
        contract_test_count2:'0xB28bb0BA22ced9e83D284a894be5149f5A0d6f79',
        NFT_token1:'0xB28bb0BA22ced9e83D284a894be5149f5A0d6f79',
        ABI_721:'',
        ABI_1155:''
      }
    },
    created(){
      console.info('start..')

      let erc721 = JSON.parse(ERC_721);
      /* console.info(erc721[0].address)
      console.info(erc721[0]) */
      this.contractAddress721 = erc721[0].address
      this.ABI_721 = JSON.stringify(erc721[0].abi)

      //看看钱包有没有
      this.initWallet()

      var Web3 = require('web3');
      let web3 = new Web3(Web3.givenProvider || this.rpcUrl);
      // let web3 = new Web3(this.rpcUrl);
      /* console.info(web3)
      console.info(web3.version)
      console.info(web3.providers)
      console.info(web3.givenProvider) */
      console.info(web3.eth)

      /* 获取账户 */
      /* web3.eth.getAccounts().then(function(counts){
         console.info(counts)
      }) */

      /* 获取指定地址的余额 */
      /* web3.eth.getBalance(this.acount).then(function(d){
        console.info(d)
        console.info(web3.utils.fromWei(d))
      }) */

      /* 当前 gas 价格预言机 */
      /* web3.eth.getGasPrice().then(function(gas){
        console.info(gas)
        console.info(web3.utils.fromWei(gas))
      }) */

      /* 请求、启用账户 */
      web3.eth.requestAccounts().then(function(counts){
        console.info(counts)
      })

      console.info(JSON.parse(this.ABI_721))

      //初始化监听事件
      this.initEvent721()
    },
    methods: {
      async initWallet(){
        if (typeof window.ethereum !== 'undefined') {
          console.log('MetaMask is installed!');

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
              // EIP-1193 userRejectedRequest error
              // If this happens, the user rejected the connection request.
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
      contractTest1() {
        console.info('contractTest1...')
        let Web3 = require('web3');
        let web3 = new Web3(Web3.givenProvider || this.rpcUrl);

        var myContract = new web3.eth.Contract(JSON.parse(this.ABI_721), '0x23DbCf7c6926d411cD88ba5E610b61eEd4661F99', {
            from: '0xf842765b20B817D59c90e0faC013e3D37a66697b', // 默认交易发送地址
            gasPrice: '20000000000' // 以 wei 为单位的默认 gas 价格，当前价格为 20 gwei
        })

        console.info(myContract.options)
      },
      contractTest2(){
        console.info('链接测试Ganacha... 这里是Call ')
        var Web3 = require('web3');
        /* let web3 = new Web3(this.rpcUrl); */
        var web3 = new Web3(new Web3.providers.HttpProvider(this.rpcUrl));

        // let fs = require('fs');
        // let data = fs.readFileSyns( this.contractFileName, 'utf-8');
        // console.info(JSON.parse(data))
        let ABI_String = this.ABI_721
        console.info(JSON.parse(ABI_String))

        var contract721 = new web3.eth.Contract(JSON.parse(ABI_String), this.contractAddress721)
        /* console.info(contract721.defaultAccount) */

        //promise 方式
        contract721.methods.symbol().call({from: this.acount}).then(function(error, result){
          console.info(error)
          console.info(result)
        })
        //callback 回调方式
        contract721.methods.name().call({from: this.acount}, function(error, result){
          console.info(error)
          console.info(result)
        })

        contract721.methods.ownerOf(this.NFT_token1).call({from: this.acount}, function(error, result){
          console.info(error)
          console.info(result)
        })

      },
      contractTest3(){
        console.info('链接测试Ganacha... 这里是send,,, 铸币NFT ')
        var Web3 = require('web3');
        /* let web3 = new Web3(this.rpcUrl); */
        var web3 = new Web3(new Web3.providers.HttpProvider(this.rpcUrl));
        var contract721 = new web3.eth.Contract(JSON.parse(this.ABI_721), this.contractAddress721)

        var NFT_URI = "iamuri888888888899999999"
        //回调方式
        contract721.methods.add(NFT_URI).send({from: this.acount, gasPrice:200000000, gas:1000000}, function(error, result){
          console.info(error)
          /* console.info(result) */
        });
        /* contract721.methods.add(NFT_URI).send({from: this.acount, gasPrice:200000000, gas:1000000}).then(console.info) */


        /* contract721.methods.add(NFT_URI).send({from: this.acount, gasPrice:200000000, gas:1000000}, function(error, result){
          console.info(error)
          console.info(result)
        }).on('transactionHash', function(hash){
          console.info(hash)
        }).on('confirmation', function(confirmationNumber, receipt){
          console.info(confirmationNumber)
          console.info(receipt)
        }).on('ApprovalForAll', function(ApprovalForAll){
          console.info(ApprovalForAll)
        }).on('error', function(error, receipt) {
          // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
          console.info(error)
          console.info(receipt)
        }); */

        //多少个资产
        contract721.methods.balanceOf(this.acount).call({from: this.acount}).then(console.info)

        /* contract721.methods.balanceOf('0xB28bb0BA22ced9e83D284a894be5149f5A0d6f79').send({from: this.acount}, function(error, result){
          console.info(error)
          console.info(result)
        }); */

      },
      contractTest3_tokenid(){
        console.info('根据tokenid获取 信息 ')

        var Web3 = require('web3');
        var web3 = new Web3(new Web3.providers.HttpProvider(this.rpcUrl));
        var contract721 = new web3.eth.Contract(JSON.parse(this.ABI_721), this.contractAddress721)

        //这个tokenid是event获取的
        let tokenid = '61'
        contract721.methods.ownerOf(tokenid).call({from: this.acount}).then(console.info)

        //目前是授权给合约了[这里打印合约地址]
        contract721.methods.getApproved(tokenid).call({from: this.acount}).then(console.info)


      },
      contract5(){
        console.info('safeTransferFrom 安全转移NFT ')

        var Web3 = require('web3');
        var web3 = new Web3(new Web3.providers.HttpProvider(this.rpcUrl));
        var contract721 = new web3.eth.Contract(JSON.parse(this.ABI_721), this.contractAddress721)

        var tokenid = '61'
        /* contract721.methods.safeTransferFrom(this.acount, this.acount2, tokenid).send({from: this.acount, gasPrice:200000000, gas:1000000}, function(error, result){
          console.info(error)
        }); */

        contract721.methods.safeTransferFrom(this.acount, this.acount2, tokenid).send({from: this.acount}, function(error, result){
          console.info(error)
        });

      },
      contract4(){
        console.info('这里是1155 ')
        var Web3 = require('web3');
        var web3 = new Web3(new Web3.providers.HttpProvider(this.rpcUrl));
        var contract1155 = new web3.eth.Contract(JSON.parse(this.ABI_1155), this.contractAddress1155);

        console.info(JSON.parse(this.ABI_1155))
      },

      /* 监控部分 */
      initEvent721(){
        console.info('initEvent721...Transfer/Approval... ')
        var Web3 = require('web3');
        var web3 = new Web3(new Web3.providers.WebsocketProvider("ws://192.168.10.77:7545"));
        var contract721 = new web3.eth.Contract(JSON.parse(this.ABI_721), this.contractAddress721);

        //过滤条件：本钱包下的、最新的
        let options = {
            filter: {
                to: this.acount
            },
            fromBlock: 'latest'
        };

        contract721.events.Transfer(options, function(error, result){
          console.info("contract721.events：Transfer。。。" + (new Date()))
          console.info(error)
          console.info(result)
        }).on('data', function(event){
          console.info(event)
        })
        .on('changed', function(changed){
          console.info(changed)
        })
        .on('error', function(error){
          console.info(error)
        })
        .on('connected', function(str){
          console.info(str)
        })

        contract721.events.Approval(options, function(error, result){
          console.info("contract721.events：Approval。。。" + (new Date()))
          console.info(error)
          console.info(result)
        }).on('data', function(event){
          console.info(event)
        })
        .on('changed', function(changed){
          console.info(changed)
        })
        .on('error', function(error){
          console.info(error)
        })
        .on('connected', function(str){
          console.info(str)
        })


      }

    },
  }
</script>

<style>
</style>
