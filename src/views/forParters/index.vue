<template>
  <div class="forparters">
    <div class="forparters-head">
      <div class="forparters-head-left">
        <div class="forparters-size">
          <p>What we </p>
          <p style="margin-bottom: 0rem;">can offer</p>
        </div>
        <div class="forparters-img">
          <img src="../../assets/imgs/home-logo.png" />
        </div>
      </div>
      <div class="forparters-head-right">
        <div class="forparters-head-content">
          <div class="forparters-head-title">Motivated user base</div>
          <p>An engaged audience that’s eager to earn money by completing microtasks, employing
            their nfts, or in
            other similar ways.</p>
          <p></p>
          <br>
          <p></p>
          <div class="forparters-head-title">Global coverage</div>
          <p>Users from 150+ countries all around the world, representing various age groups and
            market segments.</p>
          <p></p>
          <br>
          <p></p>
          <div class="forparters-head-title">Account management</div>
          <p>Custom service that’s personalized according to the individual needs of each
            business
            partner.</p>
          <p></p>
          <br>
          <p></p>
          <div class="forparters-head-title">Payment flexibility</div>
          <p>A chance to offer payments in cryptocurrency that provides extra benefits over
            opensea, including fast
            transactions with much lower fees.</p>
        </div>
      </div>
    </div>
    <div class="forparters-bottom">
      <div class="forparters-bottom-left">
        <p>Let's</p>
        <p>Work</p>
        <p>Together</p>
      </div>
      <div class="forparters-app">
        <p>Let's Work</p>
        <p>Together</p>
      </div>
      <div class="forparters-bottom-right">
        <div class="forparters-list">
          <div>
            <div class="forparters-list-name">First Name*</div>
            <div class="forparters-list-input">
              <input v-model="firstName" ref="firstName" maxlength="200" />
            </div>
          </div>
          <div class="forparters-list-l1">
            <div class="forparters-list-name">Last Name*</div>
            <div class="forparters-list-input">
              <input v-model="lastName" ref="lastName" maxlength="200" />
            </div>
          </div>
        </div>
        <div class="forparters-list" style="padding-top: 2.875rem;">
          <div>
            <div class="forparters-list-name">Email*</div>
            <div class="forparters-list-input">
              <input v-model="email" ref="email" maxlength="200" />
            </div>
          </div>
          <div class="forparters-list-l1">
            <div class="forparters-list-name">Company*</div>
            <div class="forparters-list-input">
              <input v-model="company" ref="company" max="200" />
            </div>
          </div>
        </div>
        <div class="forparters-list" style="padding-top: 2.875rem;">
          <div>
            <div class="forparters-list-name">Write a message*</div>
            <div class="forparters-list-textarea">
              <textarea class="textarea-hegiht" cols='270' rows="3" v-model="message" ref="message" maxlength="1000" />
            </div>
          </div>
        </div>
        <div class="forparters-btn">
          <!-- <div>Submit</div> -->
          <vue-recaptcha ref="recaptcha" @verify="onVerify" @expired="onExpired"
            sitekey="6Lc7i18gAAAAAHXDQiBsIzx7y1PG6YY1Fd9kd8ZG">
            <button class="ibutton-recaptha">Submit</button>
          </vue-recaptcha>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import api from '../../util/network.js'
  import {
    VueRecaptcha
  } from 'vue-recaptcha';
  export default {
    data() {
      return {
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        message: ''
      }
    },
    components: {
      'vue-recaptcha': VueRecaptcha
    },
    methods: {
      onEvent() {
        this.$refs.recaptcha.execute();
      },
      onSubmit: function() {
        this.$refs.invisibleRecaptcha.execute()
      },
      onVerify: function(response) {
        //add ajax send token to service

        if (api.empty(this.firstName)) {
          api.iToastClient(this, '90101', 'secondary')
          this.$refs.firstName.focus()
          return
        }
        if (api.empty(this.lastName)) {
          api.iToastClient(this, '90102', 'secondary')
          this.$refs.lastName.focus()
          return
        }
        if (api.empty(this.email)) {
          api.iToastClient(this, '90103', 'secondary')
          this.$refs.email.focus()
          return
        } else if (!api.isEmail(this.email)) {
          api.iToastClient(this, '90106', 'secondary')
          this.$refs.email.focus()
          return
        }
        if (api.empty(this.company)) {
          api.iToastClient(this, '90104', 'secondary')
          this.$refs.company.focus()
          return
        }
        if (api.empty(this.message)) {
          api.iToastClient(this, '90105', 'secondary')
          this.$refs.message.focus()
          return
        }

        let that = this
        let pars = JSON.stringify({
          response: response,
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          company: this.company,
          message: this.message
        })
        api.postAction('/unlogin/partner/add_info', pars, function(res) {
          if (res.code == 200) {
            api.iToastClient(that, '90107', 'secondary')
          } else {
            api.iToastServer(that, res.code, 'secondary')
          }
        })

      },
      onExpired: function() {
        console.log('Expired')
      },
      resetRecaptcha() {
        this.$refs.recaptcha.reset()
      },
      save() {
        console.info('11 save')
      }
    }
  }
</script>
<style>
  .grecaptcha-badge {
    display: none;
  }

  .ibutton-recaptha {
    background-color: #ffffff00;
    width: 11.0625rem;
    height: 3.125rem;
    border: 0;
    color: #000000;
  }
</style>
<style scoped="scoped">
  .forparters-list-textarea {
    width: 36.25rem;
    margin-right: 0rem;
  }

  .forparters-list-textarea>textarea {
    width: 100%;
    margin-top: 3.75rem;
    border-bottom: 0.0625rem solid #D8D8D8;
    outline: none;
    border-radius: 0;
  }

  .forparters-btn {
    margin-top: 1.875rem;
    width: 11.0625rem;
    height: 3.125rem;
    background: #F7B62D;
    border-radius: 0.625rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3.75rem;
  }

  .forparters-btn>div {
    font-size: 1.25rem;
    font-family: Poppins-Bold, Poppins;
    font-weight: 600;
    color: #313131;
    line-height: 1.875rem;
  }



  .forparters-list-input {
    width: 16.875rem;
    margin-right: 2.5rem;
  }

  .forparters-list-input>input {
    width: 100%;
    margin-top: 3.75rem;
    border-bottom: 0.0625rem solid #D8D8D8;
    outline: none;
    border-radius: 0;
  }

  .forparters-list {
    padding-top: 6.625rem;
    display: flex;
  }

  .forparters-app {
    display: none;
  }

  .forparters-bottom-left>p {
    font-size: 4.375rem;
    font-family: Poppins-Bold, Poppins;
    font-weight: bold;
    color: #121619;
    line-height: 4.75rem;
    margin-right: 9.9375rem;
  }

  .forparters-bottom-right {
    width: 60%;
    display: flex;
    flex-direction: column;
    padding-left: 2.5rem;
    font-family: Poppins-Bold, Poppins;
    color: #313131;
  }

  .forparters-bottom-left {
    display: block;
    width: 40%;
    padding-left: 12.125rem;
    margin-top: 6.3125rem;
  }

  .forparters-bottom {
    margin: 2.875rem 2.875rem 0;
    background-color: #ffffff;
    width: calc(100% - 5.75rem);
    display: flex;
  }

  .forparters-head-title {
    font-size: 1.25rem;
    line-height: 1.875rem;
    font-weight: 600;
  }

  .forparters-head-content {
    margin-top: 5.1875rem;
    color: #313131;
  }

  .forparters-head-content>p {
    font-size: 1.125rem;
    line-height: 1.875rem;
    font-weight: 400;
  }

  .forparters-img>img {
    width: 100%;
    height: 100%;
    margin-left: 5rem;
    padding-bottom: 4.1875rem;
    padding-right: 7.5625rem;
  }

  .forparters-size {
    margin-bottom: 4.3125rem;
    margin-top: 4.3125rem;
  }

  .forparters-size>p {
    font-size: 4.375rem;
    font-family: Poppins-Bold, Poppins;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 4.75rem;
  }

  .forparters {
    background-color: #F7B62D;
    margin-top: 6.6rem;
    padding: 2.875rem 0;
  }

  .forparters-head {
    width: 100%;
    display: flex;
  }

  .forparters-head-left {
    width: 40%;
    background-color: #121619;
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: center;
    padding-left: 15rem;
  }

  .forparters-head-right {
    width: 60%;
    background-color: #ffffff;
    padding-left: 2.5rem;
    padding-right: 28.4375rem
  }

  @media only screen and (min-width: 0px) and (max-width: 750px) {
    .ibutton-recaptha {
      color: #000000;
      font-size: 1.625rem;
    }

    .textarea-hegiht {
      line-height: 3rem;
    }

    .forparters-list-input>input {
      margin-top: 2.75rem;
    }

    textarea {
      font-size: 1.75rem;
    }

    input {
      font-size: 1.75rem;
    }

    .forparters-list-input {
      width: 36.25rem;
      margin-right: 2.5rem;
    }

    .forparters-list-l1 {
      margin-top: 2.625rem;
    }

    .forparters-list {
      display: flex;
      flex-direction: column;
    }

    .forparters-list-name {
      font-size: 1.5rem;
    }

    .forparters-size {
      margin-bottom: 4.3125rem;
      margin-top: 0.8125rem;
    }

    .forparters-size>p {
      font-size: 4.375rem;
      font-family: Poppins-Bold, Poppins;
      font-weight: bold;
      color: #FFFFFF;
      line-height: 5.75rem;
      margin-bottom: 0rem;
    }

    .forparters-img>img {
      margin-left: 0rem;
      padding: 0rem 10.875rem 4.3125rem 10.875rem;
    }

    .forparters-head-title {
      font-size: 1.75rem;
      line-height: 2.625rem;
    }


    .forparters-head-content>p {
      font-size: 1.625rem;
      line-height: 2.625rem;
      font-weight: 400;
    }

    .forparters-p {
      font-size: 400;
    }

    .forparters {
      padding-top: 0;
    }

    .forparters-head {
      display: flex;
      flex-direction: column;
    }

    .forparters-head-left {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding-left: 0rem;
    }

    .forparters-head-right {
      width: 100%;
      background-color: #ffffff;
      padding-left: 1.875rem;
      padding-right: 1.875rem
    }

    .forparters-head-content {
      color: #313131;
      margin: 2.5rem 0rem;
    }



    .forparters-bottom {
      display: flex;
      flex-direction: column;
    }

    .forparters-app {
      display: block;
      justify-content: center;
      align-items: center;
      padding-left: 0rem;
      margin-top: 6.3125rem;
      text-align: center;
      font-size: 4.375rem;
      line-height: 5.75rem;
    }

    .forparters-app>p {
      font-size: 4.375rem;
      font-family: Poppins-Bold, Poppins;
      font-weight: bold;
      color: #121619;
      line-height: 4.75rem;
      margin-right: 0rem;
    }

    .forparters-bottom-left {
      display: none;
    }
  }
</style>
