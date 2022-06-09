<template>
  <div>
    <b-button @click="makeToast()">Show Toast</b-button>
    <b-button @click="makeToast(true)">Show Toast (appended)</b-button>
    <b-button @click="toast('hhh', 'default')">Show Toast</b-button>
    <b-button @click="toast2()">Show Toast</b-button>

    <b-button @click="dateTest()"> dateTest </b-button>
  </div>
</template>

<script>
  import API from '../../util/network.js'

  import date from '../../util/date.js'

  export default{
    name:'test',
    data() {
      return {
        key: '',
        toastCount: 0
      }
    },
    methods: {
      makeToast() {
        this.toastCount++
        this.$bvToast.toast(`This is toast number ${this.toastCount}`, {
          title: 'hint',
          toaster:'b-toaster-bottom-right',
          autoHideDelay: 5000
        })
      },
      toast(content, variant) {
        this.$bvToast.toast(content, {
          title: 'hint',
          variant: variant,
          toaster:'b-toaster-bottom-right',
          autoHideDelay: 5000
        })
      },
      toast2(){
        API.iToast(this, 'hahha哈哈哈', 'default')
      },

      dateTest(){
        var s = '2020-10-09 09:10:01'
        var f = date.formatDate(new Date(s), 'MMMM d, yyyy<TZ>HH:mm:ss aaa');
        console.info(f)
        
        console.info(date.getUSDateString(s))
      }
    },
  }
</script>

<style>
</style>
