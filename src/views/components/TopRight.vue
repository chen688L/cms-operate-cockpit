<template>
  <div class="top-right">
    <dv-border-box-6>
      <div class="table-name">
        <img src="@/assets/img/icon1.png" />设备收益排行
      </div>

      <dv-scroll-board :config="config" />
    </dv-border-box-6>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
const config = reactive({
  data: [
    ["A90H081007090", "150万"],
    ["A90H081059031", "120万"],
    ["A7AH021008178", "80万"],
    ["CH3Z039295", "50万"],
    ["CH3Z041997", "28万"],
    ["A90H081007090", "150万"],
    ["A90H081059031", "120万"],
    ["A7AH021008178", "80万"],
    ["CH3Z039295", "50万"],
    ["CH3Z041997", "28万"],
  ],
  index: true,
  rowNum: 6,
  columnWidth: [50, 200],
  align: ["center"],
  // headerBGC: "rgba(9, 37, 50, 0.4)",
  oddRowBGC: "rgba(9, 37, 50, 0.4)",
  evenRowBGC: "rgba(10, 32, 50, 0.3)",
})
</script>

<style lang="less" scoped>
.top-right {
  width: calc(~"25% + 10px");
  height: 100%;
  margin: 0 -5px;
  margin-left: 20px;

  .border-box-content {
    padding: 20px;
    box-sizing: border-box;
  }

  .table-name {
    margin-top: 10px;
    height: 60px;
    line-height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 30px;
      height: 30px;
      margin-right: 5px;
    }
  }

  .dv-scroll-board {
    height: calc(~"100% - 60px");
  }
}
</style>
