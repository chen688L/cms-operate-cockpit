<template>
  <div id="water-level-chart">
     <!-- Chen.Ly-环比：本月和上个月的数据变化 -->
    <div class="water-level-chart-details">
     环比：8%
    </div>
    <div class="chart-container">
      <dv-water-level-pond :config="config" />
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const config = reactive({
  data: [8],
  shape: "round",
  waveHeight: 18,
  waveNum: 2,
})
</script>

<style lang="less" scoped>
#water-level-chart {
  width: 25%;
  box-sizing: border-box;
  margin-left: 10px;
  display: flex;
  flex-direction: column;

  .water-level-chart-title {
    font-weight: bold;
    height: 100px;
    line-height: 100px;
    display: flex;
    align-items: center;
    font-size: 20px;
    justify-content: center;
    
  }

  .water-level-chart-details {
    height: 22%;
    display: flex;
    justify-content: center;
    font-size: 16px;
    align-items: flex-end;
    margin-bottom: 10px;
  }

  .chart-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .dv-water-pond-level {
    max-width: 90%;
    width: 180px;
    height: 180px;
    border: 3px solid #00c0ff;
    border-radius: 50%;

    ellipse {
      stroke: transparent !important;
    }
  }
}
</style>
