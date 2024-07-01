<!-- 无用组件 -->
<template>
    <div class="san">
        <div class="left"></div>
        <div class="center">
            <slot></slot>
        </div><div><div class="right"></div><div class="right-bot"></div></div>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
@svg-height: 60px;
@svg-left-height: 30px;
@svg-right-height: 15px;

.san {
    width: 200px;
    height: @svg-height;
    display: flex;
    justify-content: center;
    box-sizing: border-box;

    .left {
        font-size: 0;
        border-top: @svg-left-height solid transparent;
        border-left: @svg-left-height solid transparent;
        border-right: @svg-left-height solid #ffffff33;
        border-bottom: @svg-left-height solid transparent;
    }

    .center {
        width: 200px;
        height: @svg-height;
        background-color: #ffffff33;
    }

    .right {
        border-top: @svg-right-height solid #ffffff33;
        border-left: @svg-right-height solid #ffffff33;
        border-right: @svg-right-height solid transparent;
        border-bottom: @svg-right-height solid transparent;
    }

    .right-bot {
        border-top: @svg-right-height solid transparent;
        border-left: @svg-right-height solid #ffffff33;
        border-right: @svg-right-height solid transparent;
        border-bottom: @svg-right-height solid #ffffff33;
    }
}
</style>