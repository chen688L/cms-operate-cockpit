/*
 *@description:
 *@author: Chen.Ly
 *@date: 2024-06-30 23:58:34
 *@version: V1.0.5
*/
<template>
   <!-- Chen.Ly-问题反馈 -->
  <div id="scroll-board">
    <dv-scroll-board :config="config" />
  </div>
</template>

<script setup>
import { reactive } from "vue"
import Api from "../../stores/index.ts"
const config = reactive(Api.BottomRight2Config)
</script>

<style lang="less" scoped>
#scroll-board {
  width: 98%;
  box-sizing: border-box;
  margin-left: 10px;
  height: 100%;
  overflow: hidden;
}
</style>
