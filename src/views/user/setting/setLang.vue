<template>
  <div>
    <div class="isetting-profile">
      <div class="title">{{$t('page.setting')}} <b-icon icon="chevron-compact-right"></b-icon> {{$t('page.language')}}</div>
      <div class="form-contain">
        <b-row>
          <b-col sx="12" sm="12">
            <b-list-group variant="primary">
              <b-list-group-item href="#" class="ilang-lists" @click="check('en')">
                <div>English</div>
                <div><b-icon icon="check2" font-scale="2" variant="primary" v-if="checklang=='en'" ></b-icon></div>
              </b-list-group-item>

              <b-list-group-item href="#" class="ilang-lists" @click="check('zh')">
                <div>简体中文</div>
                <div><b-icon icon="check2" font-scale="2" variant="primary" v-if="checklang=='zh'"></b-icon></div>
              </b-list-group-item>

            </b-list-group>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'setLang',
    data() {
      return {
        checklang: 'en',
      }
    },
    created() {
      let lang = localStorage.getItem("lang")
      if (!(lang == undefined || lang == '' || lang == null)) {
        this.checklang = lang
      }
    },
    methods: {
      check(v){
        this.checklang = v
        localStorage.setItem("lang", v)
        this.$router.go(0)
      }
    },
  }
</script>

<style scoped="scoped" lang="scss">
  @import url("../../../assets/scss/com.css");

  .isetting-profile .title {
    width: 100%;
    text-align: left;
    line-height: 3.84rem;
    background-color: #f7f8fc;
    padding: 0 1rem;
  }

  .isetting-profile .form-contain {
    width: 100%;
    padding: 3.84rem 1rem 0 1rem;
  }

  .ilang-lists{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }


</style>
