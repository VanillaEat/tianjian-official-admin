<template>
    <el-config-provider :locale="zhCn" :size="settingsStore.app.elementSize" :button="{autoInsertSpace: true}">
        <RouterView
            :style="{
                '--g-main-sidebar-actual-width': mainSidebarActualWidth,
                '--g-sub-sidebar-actual-width': subSidebarActualWidth
            }"
        />
    </el-config-provider>
</template>

<script setup>
//此项目 vue3+vite+js+pinia(vuex)
import zhCn from 'element-plus/es/locale/lang/zh-cn'

import useSettingsStore from '@/store/modules/settings' //全局setting
const settingsStore = useSettingsStore()

//以下是管理index主界面布局.针对settings的配置做出响应

// 侧边栏主导航当前实际宽度
const mainSidebarActualWidth = computed(() => {
    let actualWidth = getComputedStyle(document.documentElement).getPropertyValue('--g-main-sidebar-width')
    actualWidth = parseInt(actualWidth)
    if (['head', 'single'].includes(settingsStore.menu.menuMode)) {
        actualWidth = 0
    }
    return `${actualWidth}px`
})

// 侧边栏次导航当前实际宽度.
const subSidebarActualWidth = computed(() => {
    let actualWidth = getComputedStyle(document.documentElement).getPropertyValue('--g-sub-sidebar-width')
    actualWidth = parseInt(actualWidth)
    if (settingsStore.menu.sidebarCollapse) { //settings中侧边栏折叠默认为false。如果折叠打开，侧边栏主导航被折叠 就把侧边栏次导航设为64 ，可以让dashboad的字更靠右。
        actualWidth = 64
    }
    return `${actualWidth}px`
})

/*
watch(() => settingsStore.app.colorScheme, () => {
    if (settingsStore.app.colorScheme === 'dark') {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
}, {
    immediate: true
})

watch(() => settingsStore.menu.menuMode, () => {
    document.body.setAttribute('data-menu-mode', settingsStore.menu.menuMode)
}, {
    immediate: true
})

watch(() => settingsStore.title, () => {
    document.title = import.meta.env.VITE_APP_TITLE
}, {
    immediate: true
})
*/

</script>
