<template>
  <div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <input type="text" placeholder="Please enter data" />
    <!-- 这里就是显示人机的位置 -->
    <div id="grecaptcha"></div>


  </div>
</template>

<script>

  export default {
    name: 'testv2',
    data() {
      return {
        key: '',
        toastCount: 0,
        sitekey: "6LeHfl8gAAAAAFH26t3IKu6j9a6naZusSdAJQTOQ"
      }
    },
    methods: {

      submit: function(token) {
        console.log('这个是token='+token);
      },

      loaded() {
        setTimeout(() => {
          window.grecaptcha.render("grecaptcha", {
            sitekey: this.sitekey,
            callback: this.submit
          });
        }, 200);
      }
    },
    mounted() {
      this.loaded();
    },
  }
</script>

<style>
</style>
