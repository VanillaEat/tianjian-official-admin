<template>
    <footer class="copyright">
        Copyright © {{ settingsStore.copyright.dates }}
        <a v-if="settingsStore.copyright.website" :href="settingsStore.copyright.website" target="_blank" rel="noopener">{{ settingsStore.copyright.company }},</a>
        <span v-else>{{ settingsStore.copyright.company }},</span>
        All Rights Reserved
    </footer>
</template>

<script setup>
import useSettingsStore from '@/store/modules/settings'
const settingsStore = useSettingsStore()
</script>

<style lang="scss" scoped>
footer {
    padding: 10px 0;
    line-height: 20px;
    text-align: center;
    color: var(--el-text-color-secondary);
    font-size: 14px;
    a {
        text-decoration: none;
        color: var(--el-text-color-secondary);
        transition: var(--el-transition-color);
        &:hover {
            color: var(--el-text-color-primary);
        }
    }
}
</style>
