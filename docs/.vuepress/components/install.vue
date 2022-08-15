<template>
  <div class="Installer" @click="toInstall">
    安装
  </div>
</template>

<script>
export default {
  name:"install",
  props: ["src"],
  data(){
    return {

    }
  },
  methods:{
    toInstall(){
      let prefix = "";
      if(this.src.endsWith("user.js")){
        prefix = "/scripts/"
      };
      if(this.src.endsWith("user.css")){
        prefix = "/styles/"
      }

      window.open(prefix+this.src);
    }
  }
}
</script>

<style lang="less">
  .Installer{
    margin: 20px 0;
    padding: 10px 30px;
    color: white;
    background-color: #137d00;
    display:inline-block;
    cursor:pointer;
    letter-spacing:1px;
    &:hover{
      background-color: #148400;
    }
  }
</style>