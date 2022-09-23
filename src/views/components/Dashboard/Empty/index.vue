<template>
    <div class="empty-container">
        <!--   <h2 class="header">  {{ userStore.account }} {{ date }}</h2>-->
        <h3 class="header">{{ userStore.account }} {{ date }}</h3>
        <!--            <template #content>-->
        <!--                <div>-->
        <!--                    <div style="margin-bottom: 5px;">hahahahahahahhahahahahhhhhhhhhhhhhhhhhhhha</div>-->
        <!--                </div>-->
        <!--            </template>-->
        <!--            <el-button-group style="margin-right: 10px;">-->
        <!--                <el-button type="success" size="large" plain @click="open('https://hooray.gitee.io/one-step-admin/')">开发文档</el-button>-->
        <!--                <el-dropdown>-->
        <!--                    <el-button type="primary" size="large">-->
        <!--                        代码仓库-->
        <!--                        <el-icon class="el-icon&#45;&#45;right">-->
        <!--                            <svg-icon name="ep:arrow-down" />-->
        <!--                        </el-icon>-->
        <!--                    </el-button>-->
        <!--                    <template #dropdown>-->
        <!--                        <el-dropdown-menu>-->
        <!--                            <el-dropdown-item @click="open('https://gitee.com/hooray/one-step-admin')">Gitee</el-dropdown-item>-->
        <!--                            <el-dropdown-item @click="open('https://github.com/hooray/one-step-admin')">Github</el-dropdown-item>-->
        <!--                        </el-dropdown-menu>-->
        <!--                    </template>-->
        <!--                </el-dropdown>-->
        <!--            </el-button-group>-->
        <!--        </page-header>-->
    </div>
</template>

<script setup>
/* function open(url) {
    window.open(url, 'top')
}*/

// 获取当前时间

// 设置默认文字
let date = computed(() => {
    // 判断当前时间段
    let timeNow = new Date()
    // 获取当前小时
    let hours = timeNow.getHours()
    let state = ''
    if (hours >= 0 && hours <= 10) {
        state = ' 早上好!'
    } else if (hours > 10 && hours <= 11) {
        state = ' 上午好!'
    } else if (hours > 11 && hours <= 13) {
        state = ' 中午好!'
    } else if (hours > 13 && hours <= 18) {
        state = ' 下午好!'
    } else if (hours > 18 && hours <= 24) {
        state = ' 晚上好!'
    }
    return state
})

import useUserStore from '@/store/modules/user'
const userStore = useUserStore()

</script>

<style lang="scss" scoped>
.empty-container {
    height: 100%;
    overflow: auto;
    .header {
        margin: 20px;
        .text-emphasis {
            text-emphasis-style: "❤";
        }
        a {
            color: inherit;
            text-decoration: none;
            border-bottom: 1px solid #ccc;
            cursor: pointer;
        }
    }
}
</style>
