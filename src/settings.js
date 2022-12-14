let globalSettings = {
    // 应用
    app: {
        // 颜色方案，可选值为 light、dark
        colorScheme: 'light',
        // Element 组件默认尺寸，支持：large、default、small
        elementSize: 'default',
        // 是否将 iconify 图标集中的 Element Plus 图标下载到本地，以便在离线环境下使用
        iconifyOfflineUse: false,
        /**
         * 是否开启权限功能，权限功能提供以下鉴权支持：
         * 1、鉴权组件：<Auth></Auth>、<AuthAll></AuthAll>
         * 2、鉴权指令：v-auth、v-auth-all
         * 3、鉴权函数：this.$auth()、this.$authAll()
         */
        enablePermission: false,
        // 是否开启后端返回导航数据
        enableBackendReturnMenu: false
    },
    // 导航栏
    menu: {
        /**
         * 导航栏模式
         * side 侧边栏模式（含主导航）
         * head 顶部模式
         * single 侧边栏模式（无主导航）
         */
        menuMode: 'head', // 定
        // 切换主导航同时打开窗口
        switchMainMenuAndOpenWindow: false,
        // 次导航只保持一个子项的展开
        subMenuUniqueOpened: false,
        // 侧边栏是否收起
        sidebarCollapse: false
    },
    // 顶栏
    topbar: {
        // 是否开启侧边栏展开收起按钮
        enableSidebarCollapse: true,
        // 是否开启导航搜索
        enableNavSearch: false,
        // 是否开启全屏
        enableFullscreen: false,
        // 是否开启颜色主题
        enableColorScheme: false,
        // 是否开启主题配置（建议在生产环境关闭）
        enableAppSetting: false
    },
    // 底部版权
    copyright: {
        // 是否开启
        enable: true,
        // 版权信息配置，格式为：Copyright © [dates] <company>, All Rights Reserved
        dates: '2021-2022',
        company: '数据共享总部',
        website: ''
    }
}

export default globalSettings
