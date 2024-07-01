/*
 *@description:
 *@author: Chen.Ly
 *@date: 2024-06-30 20:38:51
 *@version: V1.0.5
*/
<template>
  <div id="ranking-board1">
    <div class="ranking-board-title">客户收款排行</div>
    <dv-scroll-ranking-board :config="config" color="#00c0ff" />
  </div>
</template>

<script setup>
import {reactive} from "vue"
import Api from "../../stores/index.ts"
const config = reactive(Api.BottomLeft1Config)
</script>

<style lang="less" scoped>
#ranking-board1 {
  width: 50%;
  box-shadow: 0 0 3px #00c0ff;
  display: flex;
  flex-direction: column;
  background-color: rgba(6, 30, 93, 0.5);
  border-top: 1px solid rgba(1, 153, 209, 0.5);
  box-sizing: border-box;
  padding: 0px 30px;

  .ranking-board-title {
    height: 37px;
    display: flex;
    align-items: center;
    font-size: 16px;
  }

  .dv-scroll-ranking-board {
    flex: 1;
  }
}
</style>
