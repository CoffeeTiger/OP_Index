<template>
  <div>
    <div class="icontainer-subpage">

      <div class="ireward-contain">

        <div class="ibond-infos imargin-top-80">
          <div class="ibond-infos-title color_yellow">{{$t('page.bond')}}</div>
          <div class="ibond-infos-lists color_yellow">
            <div class="ibond-infos-item">
              <div class="iitem-desc">{{$t('page.treasuryBalance')}}</div>
              <div class="iitem-value">$876,899,200</div>
            </div>
            <div class="ibond-infos-item">
              <div class="iitem-desc">OPH {{$t('page.price')}}</div>
              <div class="iitem-value">$28.58</div>
            </div>
          </div>
        </div>

        <div class="ibond-contain">
          <div class="ibondlists">
            <table class="itable itable-bond bg_darkgray">
              <thead>
                <tr class="bg_lightgray">
                  <th class="ibond-th30 ipadding_left32">{{$t('page.bond')}}</th>
                  <th class="ibond-th25">{{$t('page.price')}}</th>
                  <th class="ibond-th25">{{$t('page.discount')}}</th>
                  <th class="ibond-th20">{{$t('page.duration')}}</th>
                </tr>
              </thead>
              <tbody>


                <tr>
                  <td colspan="4">
                    <router-link :to="{name:'buybonds', params:{id:1}}">
                      <table class="itable itable-bond bg_darkgray">
                        <tr>
                          <td class="ibond-th30 ipadding_left32">OPH LP</td>
                          <td class="ibond-th25">$18.58</td>
                          <td class="ibond-th25">-0.85%</td>
                          <td class="ibond-th20">2days</td>
                        </tr>
                      </table>
                    </router-link>
                  </td>
                </tr>

                <tr>
                  <td colspan="4">
                    <router-link :to="{name:'buybonds', params:{id:2}}">
                      <table class="itable itable-bond bg_darkgray">
                        <tr>
                          <td class="ibond-th30 ipadding_left32">OPH LP</td>
                          <td class="ibond-th25">$16.58</td>
                          <td class="ibond-th25">-0.05%</td>
                          <td class="ibond-th20">3days</td>
                        </tr>
                      </table>
                    </router-link>
                  </td>
                </tr>

                <tr>
                  <td colspan="4">
                    <router-link :to="{name:'buybonds', params:{id:3}}">
                      <table class="itable itable-bond bg_darkgray">
                        <tr>
                          <td class="ibond-th30 ipadding_left32">OPH LP</td>
                          <td class="ibond-th25">$12.58</td>
                          <td class="ibond-th25">-0.35%</td>
                          <td class="ibond-th20">4days</td>
                        </tr>
                      </table>
                    </router-link>
                  </td>
                </tr>

                <!-- <tr><td class="ipadding_left32">OPH LP</td><td>$18.58</td><td>-0.85%</td><td>2days</td></tr>
                <tr><td class="ipadding_left32">OPH LP</td><td>$18.58</td><td>-0.85%</td><td>2days</td></tr>
                <tr><td class="ipadding_left32">OPH LP</td><td>$18.58</td><td>-0.85%</td><td>2days</td></tr>
                <tr><td class="ipadding_left32">OPH LP</td><td>$18.58</td><td>-0.85%</td><td>2days</td></tr> -->
              </tbody>
            </table>
          </div>
          <div class="ibuydesc"> {{$t('page.bond_buy_desc')}} </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  /* import bondlistd from '../../components/nfts/bondlists.vue' */
  export default{
    name:'bond',
    /* components: {
      bondlistd
    }, */
    methods: {
      bond() {
        this.$router.push({name:'buybonds', params:{}})
      }
    },
  }
</script>

<style scoped="scoped">
  @import url("../../assets/scss/com.css");
  .ibond-infos{
    width: 100%;
  }
  .ibond-infos .ibond-infos-title{
    line-height: 3.5555rem;
    font-size: 2.5555rem;
    font-family: Poppins-Bold, Poppins;
    font-weight: 500;
  }
  .ibond-infos .ibond-infos-lists{
    margin: 4.8888rem 0 5.9444rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .ibond-infos .ibond-infos-lists .ibond-infos-item{
    width: 26.111111rem;
  }
  .ibond-infos .ibond-infos-item{
    /* height: 6.4rem; */
    font-size: 1.2rem;
    margin: 0.5rem 0;
    font-size: 1.333333rem;
  }
  .ibond-infos .ibond-infos-item .iitem-value{
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    line-height: 3.1111rem;
    font-size: 2.2222rem;
    font-family: Poppins-Medium, Poppins;
    font-weight: 400;
    margin-top: 0.9444rem;
  }
  .ibond-infos .ibond-infos-item .iitem-desc{

    line-height: 2.1666rem;
    font-size: 1.5555rem;
    font-family: Poppins-Regular, Poppins;
    font-weight: 300;
    color: #979797;
  }

  .ibond-contain .ibuydesc{
    width: 39.2777rem;
    margin: 6.8333rem auto;
    line-height: 1.7777rem;
    font-size: 1.3333rem;
    font-family: Poppins-Regular, Poppins;
    font-weight: 300;
    color: #A0A0A0;
    text-align: center;
  }
  .ibond-contain .ibondlists{
    width: 100%;
    border-radius: 0.8888rem;
    overflow: hidden;
    border:0.1111rem solid #3C3C3C;
  }

  /* .itable-bond{
    width: 100%;
    font-size: 1.5555rem;
    font-family: Poppins-Regular, Poppins;
    font-weight: 400;
    color: #979797;
  }
  .itable-bond th, td{
    height: 4.8888rem;
    line-height: 4.8888rem;
    border: 1px solid #FFFFFF00;
    font-size: 1.5555rem;
    font-family: Poppins-Regular, Poppins;
    font-weight: 400;
  }
  .itable-bond th{
    color: #FFFFFF;
  }
  .itable-bond thead th{
    border: 0!important;
    text-align: left;
  }

  .itable-bond .ibond-th30{
    width: 30%;
  }
  .itable-bond .ibond-th25{
    width: 25%;
  }
  .itable-bond .ibond-th20{
    width: 20%;
  }
  .itable-bond tr:hover{
    background: #414242;
    color: #FFFFFF !important;
  }
  .itable-bond tr > .ipadding_left32{
    padding-left: 1.6666rem !important;
  } */



</style>
