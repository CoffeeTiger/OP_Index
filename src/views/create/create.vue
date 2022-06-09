<template>
  <div class="icontainer-subpage">
    <div class="">
      <div class="ipage-title">
        <div class="ititle color_yellow">{{$t('page.CreateNewItem')}}</div>
        <div class="irequire "><b-icon icon="asterisk" variant="danger" font-scale="0.6"></b-icon><div class="icreate-desc">{{$t('page.requriedfields')}}</div></div>
      </div>

      <!-- imgs -->
      <div class="ifrom-group">
        <div class="ifrom-group-label">
          <div class="ilable color_yellow">{{$t('page.uploadFilesType')}}<b-icon icon="asterisk" variant="danger" font-scale="0.4"></b-icon></div>
          <!-- <b-icon icon="question-circle" class="iquestion-circle" variant="secondary" v-b-popover.hover.top="'Learn more about Sale in our Help Center'"></b-icon> -->
        </div>
        <div class="ifrom-group-unitdesc icreate-desc">{{$t('page.uploadFilesTypeSupport')}}</div>
        <div class="iinput-area icreate-upload-area">
          <el-upload
            action="#"
            accept="image/*,webgl/*,.glb,.gltf"
            list-type="picture-card"
            :auto-upload="false"
            :limit="1"
            :on-success="handleSuccess"
            :on-change="handlechange"
            ref="uploadfiles">
              <!-- <i slot="default" class="el-icon-plus"></i> -->
              <img src="../../assets/imgs/upload-img.png" class="iupload-icon"/>
              <div slot="file" slot-scope="{file}">
                <!-- preview file -->
                <template v-if="update_file_type=='image'">
                  <img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
                </template>
                <template v-else-if="update_file_type=='video'">
                  <video class="el-upload-list__item-thumbnail" :src="file.url" autoplay="autoplay" controls="controls">Failed to generate thumbnail, but does not affect upload</video>
                </template>
                <template v-else-if="update_file_type=='audio'">
                  <audio class="el-upload-list__item-thumbnail" :src="file.url" autoplay="autoplay" controls="controls">Failed to generate thumbnail, but does not affect upload</audio>
                </template>
                <template v-else>
                  <img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
                </template>

                <span class="el-upload-list__item-actions">
                  <span
                    class="el-upload-list__item-preview"
                    @click="handlePictureCardPreview(file)"  >
                    <i class="el-icon-zoom-in"></i>
                  </span>
                  <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleRemove(file)" >
                    <i class="el-icon-delete"></i>
                  </span>
                </span>
              </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </div>
      </div>

      <!-- Name -->
      <div class="ifrom-group">
        <div class="ifrom-group-label">
          <div class="ilable color_yellow">{{$t('page.create_item_Name')}}<b-icon icon="asterisk" variant="danger" font-scale="0.4"></b-icon></div>
          <!-- <b-icon icon="question-circle" class="iquestion-circle" variant="secondary" v-b-popover.hover.top="'Learn more about Sale in our Help Center'"></b-icon> -->
        </div>
        <div class="iinput-area">
          <div class="icreate-input-outer bg_lightgray">
            <input type="text" class="iinput iinput-create" v-model="form.names" :placeholder="$t('page.create_item_name_placeholder')"/>
          </div>
        </div>
      </div>

      <!-- External link -->
      <div class="ifrom-group">
        <div class="ifrom-group-label">
          <div class="ilable color_yellow">{{$t('page.create_item_elink')}}</div>
          <!-- <b-icon icon="question-circle " class="iquestion-circle" variant="secondary" v-b-popover.hover.top="'Learn more about Sale in our Help Center'"></b-icon> -->
        </div>

        <div class="iinput-area">
          <div class="icreate-input-outer bg_lightgray">
            <input type="text" class="iinput iinput-create" v-model="form.externallink" placeholder="https://yoursite.io/item/123"/>
          </div>
        </div>
        <div class="ifrom-group-unitdesc icreate-desc">{{$t('page.create_item_elink_notes')}}</div>
      </div>

      <!-- Description -->
      <div class="ifrom-group">
        <div class="ifrom-group-label">
          <div class="ilable color_yellow">{{$t('page.create_item_decription')}}</div>
          <!-- <b-icon icon="question-circle" class="iquestion-circle" variant="secondary" v-b-popover.hover.top="'Learn more about Sale in our Help Center'"></b-icon> -->
        </div>
        <div class="iinput-area">
          <div class="icreate-input-outer bg_lightgray">
            <textarea v-model="form.descripton" :placeholder="$t('page.create_item_decription_placeholder')" rows="4" max-rows="8" class="iinput iinput-create itextarea"></textarea>
          </div>
        </div>
        <div class="ifrom-group-unitdesc icreate-desc">{{$t('page.create_item_decription_notes')}}</div>
      </div>

      <!-- Blockchain -->
      <div class="ifrom-group">
        <div class="ifrom-group-label">
          <div class="ilable color_yellow">{{$t('page.blockChain')}}</div>
          <!-- <b-icon icon="question-circle" class="iquestion-circle" variant="secondary" v-b-popover.hover.top="'Learn more about Sale in our Help Center'"></b-icon> -->
        </div>
        <div class="iinput-area">
           <div class="icreate-input-outer bg_lightgray">
             <select class="iinput iinput-create" v-model="form.blockchain">
               <option value="Ethereum">Ethereum</option>
               <option value="Ethereum">Ethereum</option>
             </select>
           </div>
        </div>
      </div>

      <div class="ifrom-btn">
        <div class="ibtn ibtn-create bg_yellow color_black">Create</div>
      </div>

     </div>
  </div>
</template>

<script>
  import {Upload, Dialog} from 'element-ui'
  export default{
    name:'create',
    components: {
      [Upload.name]: Upload,
      [Dialog.name]: Dialog,
    },
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        disabled: false,
        form:{
          names: '',
          externallink:'',
          descripton:'',
          blockchain:'Ethereum',
        },
        update_file_type:'image'
      }
    },create(){

    },methods: {
      handleRemove(file) {
        console.log(file);
        this.$refs.uploadfiles.clearFiles()
        this.elUploadShow()
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleSuccess(file){
        /* console.info('success') */
      },
      handlechange(file, fileList){
        /* console.info(file)
        console.info('handlechange, file.raw.type=' + file.raw.type) */

        //accept="image/*,video/*,audio/*,webgl/*,.glb,.gltf"
        let type = file.raw.type
        if (type.toLowerCase().indexOf('image') != -1) {
          this.update_file_type = 'image'
        } else if(type.toLowerCase().indexOf('ogg') != -1){
          this.update_file_type = 'video'
        } else if(type.toLowerCase().indexOf('mp3') != -1){
          this.update_file_type = 'audio'
        } else if(type.toLowerCase().indexOf('video') != -1){
          this.update_file_type = 'video'
        } else if(type.toLowerCase().indexOf('audio') != -1){
          this.update_file_type = 'audio'
        } else if(type.toLowerCase().indexOf('webgl') != -1){
          this.update_file_type = 'webgl'
        } else if(type.toLowerCase().indexOf('glb') != -1){
          this.update_file_type = 'glb'
        } else if(type.toLowerCase().indexOf('gltf') != -1){
          this.update_file_type = 'gltf'
        }

        /* console.info('handlechange, file.raw.type=' + file.raw.type)
        console.info('handlechange, update_file_type=' + this.update_file_type) */

        this.elUploadHidden()
      },
      elUploadShow(){
        let upobject = document.getElementsByClassName('el-upload--picture-card')[0]
        upobject.style.cssText+="visibility:visible"
      },
      elUploadHidden(){
        let upobject = document.getElementsByClassName('el-upload--picture-card')[0]
        upobject.style.cssText+="visibility:hidden"
      },
      upload(){
        this.$refs.uploadfiles.submit();
      }


    },
  }
</script>

<style scoped="scoped">
  @import url("../../assets/scss/com.css");
  .ipage-title{
    width: 100%;
    /* margin-top: 2.4rem; */
  }
  .ipage-title-mid{
    padding-top: 2rem;
  }
  .ipage-title .ititle{
    line-height: 3.5555rem;
    margin: 4.4444rem auto 1.3333rem;
    font-size: 2.5555rem;
    font-weight: 500;
    font-family: Poppins-Bold, Poppins;
  }
  .ilable{
    line-height: 2rem;
    margin-top: 1.3333rem;
    font-size: 1.4444rem !important;
    font-family: Poppins-Regular, Poppins;
    font-weight: 300;
    display: flex;
    align-items: center;
  }
  .form-control, .custom-select{
    height: 3.111111rem !important;
    font-size: 1.333333rem !important;
  }
  .form-control-textarea{
    height: 8.888888rem !important;
  }
  .icreate-desc{
    font-size: 1.333333rem;
    color: #757373;
    margin-top: 1.3333rem;
  }
  .ipage-title .irequire{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .ifrom-btn{
    width: 100%;
    margin: 6.6666rem auto;
    text-align: center;
  }
  .ifrom-btn .ibtn-create{
    width: 21.2777rem;
    height: 4.4444rem;
    line-height: 4.4444rem;
    border-radius: 2.2222rem;
    font-size: 1.5555rem;
    font-family: Poppins-SemiBold, Poppins;
    font-weight: 500;
    margin: 0 auto;
  }


  .upload_hidden{
    display: none;
  }
  .upload_show{
    display:block;
  }


  .icreate-upload-area{
    margin: 1.777777rem 0;
  }

  .icreate-input-outer{
    width: 100%;
    /* height: 4.8888rem; */
    border: 0.1111rem solid #3C3C3C;
    border-radius: 0.8888rem;
    padding: 0 1.6666rem;
  }
  .icreate-input-outer .iinput-create{
    width: 100%;
    height: 4.8888rem;
    line-height: 4.8888rem;
    font-size: 1.5555rem;
    font-family: Poppins-Regular, Poppins;
    font-weight: 300;
    color: #FFFFFF;
  }
  .icreate-input-outer .itextarea{
    width: 100%;
    height: 9.1111rem;
    padding: 1.3333rem 0;
    line-height: 2.3333rem;
    font-size: 1.5555rem;
    font-family: Poppins-Regular, Poppins;
    font-weight: 300;
    color: #FFFFFF;
  }

  /* upload depart css */
  .iupload-icon{
    width: 6.7222rem;
    height: 5.3888rem;
  }
</style>
<style>
  .el-upload--picture-card, .el-upload-list__item{
    width: 31.3888rem !important;
    height: 18.8888rem !important;
    line-height: 18.8888rem !important;
    background-color: #fbfdff00 !important;
    border: 0.1111rem solid #3C3C3C !important;
    display: -webkit-inline-box !important;
    justify-content: center !important;
  }
</style>
