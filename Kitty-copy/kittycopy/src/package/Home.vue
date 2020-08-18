<template>
  <div class="container">
      <MenuBar></MenuBar>
      <HeadBar></HeadBar>
      <Main></Main>
  </div>
</template>

<script>
import HeadBar from "./HeadBar/HeadBar"
import MenuBar from "./MenuBar/MenuBar"
import Main from "./Main/Main"
export default {
  components:{
      HeadBar,
      MenuBar,
      Main
  }
};
</script>

<style scoped lang="scss">
  .container {
    position:absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    background: #4b5f6e;
  }
</style>