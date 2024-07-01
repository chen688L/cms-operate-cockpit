<!-- *@description:
*@author: Chen.Ly
*@date: 2024-06-30 13:09:32
*@version: V1.0.5 -->
<template>
    <div class="data-view">
        <!-- Chen.Ly-开始加载数据之前的缓冲 -->
        <dv-loading v-if="loading">Loading...</dv-loading>
        <!-- Chen.Ly-驾驶舱内容 -->
        <dv-full-screen-container v-else>
            <!-- Chen.Ly-头部标题 -->
            <div id="top-header">
                <dv-decoration-8 class="header-left-decoration" />
                <dv-decoration-5 class="header-center-decoration" />
                <dv-decoration-8 class="header-right-decoration" :reverse="true" />
                <div class="center-title">CSM运营中心驾驶舱</div>
            </div>
            <!-- Chen.Ly-数据内容展示 -->
            <dv-border-box-1 class="main-container">
                <!-- 顶部三项 -->
                <div class="mc-top">
                    <Top-Left />
                    <Top-Center />
                    <Top-Right />
                </div>
                <div class="mc-bottom">
                    <!-- 左右两项 -->
                    <dv-border-box-6 class="bottom-left-container">
                        <dv-decoration-4 class="mcb-decoration-1" style="width: 5px; height: 45%" />
                        <dv-decoration-4 class="mcb-decoration-2" style="width: 5px; height: 45%" />
                        <Bottom-Left-1 />
                        <Bottom-Left-2 />
                    </dv-border-box-6>

                    <div class="bottom-right-container">
                        <Bottom-Right-2 />
                    </div>
                </div>
            </dv-border-box-1>
        </dv-full-screen-container>
    </div>
</template>

<script setup>
import TopLeft from "./components/TopLeft.vue";
import TopCenter from "./components/TopCenter/TopCenter.vue"
import TopRight from "./components/TopRight.vue";
import BottomLeft1 from "./components/BottomLeft1.vue";
import BottomLeft2 from "./components/BottomLeft2.vue";
import BottomRight2 from "./components/BottomRight2.vue";
import { ref, onMounted } from "vue";

let loading = ref(true);

const cancelLoading = () => {
    setTimeout(() => {
        loading.value = false;
    }, 500);
}

onMounted(() => {
    console.log('zjix', loading);
    cancelLoading()
})

</script>

<style lang="less">
#top-header {
    position: relative;
    width: 100%;
    height: 78px;
    display: flex;
    justify-content: space-between;
    flex-shrink: 0;

    .header-center-decoration {
        width: 40%;
        height: 60px;
        margin-top: 30px;
    }

    .header-left-decoration,
    .header-right-decoration {
        width: 25%;
        height: 60px;
    }

    .center-title {
        position: absolute;
        font-size: 30px;
        font-weight: bold;
        left: 50%;
        top: 15px;
        transform: translateX(-50%);
    }
}

.data-view {
    width: 100%;
    height: 100%;
    background-color: #030409;
    color: #fff;
    background: url("../assets/img/bg.png");
    background-size: 100% 100%;
    box-shadow: 0 0 3px blue;
    display: flex;
    flex-direction: column;

    .main-container {
        height: calc(~"100% - 200px");

        .mc-top,
        .mc-bottom {
            box-sizing: border-box;
            padding: 15px 20px;
            display: flex;
        }

        .mc-top {
            height: 40%;
        }

        .top-left-cmp {
            flex-grow: 2;
        }

        .top-center {
            flex-grow: 3;
            margin-left: 20px;
        }

        .top-right {
            flex-grow: 1;
        }


        .mc-bottom {
            height: 58%;
        }

        .bottom-left-container {
            width: 32%;
            position: relative;

            .border-box-content {
                display: flex;
            }

            .mcb-decoration-1,
            .mcb-decoration-2 {
                position: absolute;
                left: 50%;
                margin-left: -2px;
            }

            .mcb-decoration-1 {
                top: 5%;
                transform: rotate(180deg);
            }

            .mcb-decoration-2 {
                top: 50%;
            }

            .bottom-left-chart-1,
            .bottom-left-chart-2 {
                width: 50%;
                height: 100%;
            }
        }

        .bottom-right-container {
            width: 85%;
            padding-left: 10px;
            box-sizing: border-box;
            display: flex;
        }
    }

}
</style>