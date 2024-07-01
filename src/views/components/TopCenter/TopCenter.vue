<template>
    <div class="operate">
        <dv-border-box-11 :color="['#3f96a5']" title="本月销售额">
            <div class="operate-top">
                <TopMiddlePay></TopMiddlePay>
                <dv-decoration-11 style="width:350px;height:100px;" class="dv-center">659,000,000</dv-decoration-11>
                <TopMiddleReceive></TopMiddleReceive>
            </div>
        </dv-border-box-11>
    </div>
</template>

<script setup>
import TopMiddleReceive from "./TopMiddleReceive.vue";
import TopMiddlePay from "./TopMiddlePay.vue";
</script>

<style lang="less" scoped>
.operate {
    width: 60%;

    .operate-top {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 70px 0;
        box-sizing: border-box;
    }
    .dv-center{
        font-size: 36px;
      font-weight: bold;
      color: #00c0ff;
      letter-spacing: 2px;
    }
    
}
</style>