<template>
    <div class="header">
        <div>
            <div class="title">{{ title }}</div>
            <div class="content">
                <slot name="content">{{ content }}</slot>
            </div>
        </div>
        <div>
            <slot />
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        default: ''
    }
})
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    margin: calc(var(--g-window-container-padding) * -1) calc(var(--g-window-container-padding) * -1) 20px;
    border-bottom: 1px solid var(--el-border-color-lighter);
    background-color: var(--g-app-bg);
    transition: background-color 0.3s, var(--el-transition-border);
    .title {
        font-size: 22px;
        color: var(--el-text-color-primary);
        transition: var(--el-transition-color);
    }
    .content {
        margin-top: 10px;
        font-size: 14px;
        color: var(--el-text-color-secondary);
        transition: var(--el-transition-color);
        &:empty {
            display: none;
        }
    }
}
</style>
