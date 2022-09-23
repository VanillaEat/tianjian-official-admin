<!--
<template>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="栏目名" width="300"/>
        <el-table-column prop="name" label="栏目位置" width="300"/>

        <el-table-column  label="操作" width="140">
            <template #default>
                <el-button link type="primary" size="small" @click="handleClick">修改</el-button>
                <el-button link type="primary" size="small" @click="deleteTab">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>


<script lang="ts" setup>
const handleClick = () => {
 window.alert("aaa")
}

const deleteRow = () => {

}

const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
/*        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Home',*/
    },
    {
        date: '2016-05-02',
        name: 'Tom',

    },
    {
        date: '2016-05-04',
        name: 'Tom',

    },
    {
        date: '2016-05-01',
        name: 'Tom',

    },
]
</script>


<style lang="scss" scoped>
:deep(.el-tabs) {
    .el-tabs__header .el-tabs__nav {
        .el-tabs__active-bar {
            z-index: 0;
            width: 100%;
            background-color: var(&#45;&#45;el-color-primary-light-9);
            border-right: 2px solid var(&#45;&#45;el-color-primary);
            transition: transform 0.3s, background-color 0.3s, var(&#45;&#45;el-transition-border);
        }

        .el-tabs__item {
            text-align: left;
            padding-right: 100px;
        }
    }

    .el-tab-pane {
        padding: 0 20px 0 30px;
    }
}

h2 {
    margin: 0;
    margin-bottom: 30px;
    font-weight: normal;
}

.basic {
    :deep(.headimg-upload) {
        text-align: center;

        .el-upload-dragger {
            border-radius: 50%;
        }
    }
}

.security {
    .setting-list {
        .item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 0;
            border-bottom: 1px solid var(&#45;&#45;el-border-color-lighter);
            transition: var(&#45;&#45;el-transition-border);

            .content {
                .title {
                    margin-bottom: 5px;
                    color: var(&#45;&#45;el-text-color-primary);
                    transition: var(&#45;&#45;el-transition-color);
                }

                .desc {
                    font-size: 14px;
                    color: var(&#45;&#45;el-text-color-secondary);
                    transition: var(&#45;&#45;el-transition-color);
                }
            }

            &:last-child {
                border-bottom: 0;
            }
        }
    }
}
</style>


-->




<template>
    <div class="box">
        <el-button class="new_btn" type="primary" @click="handleNew"
        >新增</el-button
        >
        <el-button class="new_btn" type="primary" @click="handleNew"
        >提交</el-button
        >
        <el-table :data="studentInfo" border style="width: 100%">
            <el-table-column prop="name" label="栏目" />
            <el-table-column prop="position" label="位置" />
            <el-table-column prop="fatherPosition" label="父导航位置" />
            <el-table-column>
                <template #default="{ row }">
                    <el-button type="text" size="small" @click="handleEdit(row)"
                    >编辑</el-button
                    >
                    <el-button type="text" size="small" @click="handleDel(row)"
                    >删除</el-button
                    >
                </template>
            </el-table-column>
        </el-table>
        <!-- 新建/编辑弹框 -->
        <Dialog
            v-if="dialogShow"
            v-model:dialogShow="dialogShow"
            :rowInfo="rowInfo"
            :title="title"
            :arrayNum="studentInfo.length"
            @addRow="addRow"
            @editRow="editRow"
        />
        <!-- 详情弹窗 -->
        <Detail v-if="detailShow" :rowInfo="rowInfo" @closeDetail="closeDetail" />
    </div>
</template>

<script>
import { reactive, ref, toRefs } from "vue";
import { ElMessageBox } from "element-plus";
import Dialog from "./dialog.vue";
import Detail from "./detail.vue";

export default {
    components: { Dialog, Detail },
    setup() {
        const data = reactive({
            dialogShow: false, // 新增/编辑弹框
            detailShow: false, // 详情弹窗
            rowInfo: {}, // 新增/编辑的数据
            title: "", // 是新建还是修改
            studentInfo: [
                {
                    id: 1,
                    name: "首页",
                    position: "1",
                    fatherPosition: "1",

                },
                {
                    id: 1,
                    name: "关于天健",
                    position: "2",
                    fatherPosition: "1",
                },
                {
                    id: 1,
                    name: "专业服务",
                    position: "3",
                    fatherPosition: "1",
                },
                {
                    id: 1,
                    name: "新闻中心",
                    position: "1",
                    fatherPosition: "1",
                },
                {
                    id: 1,
                    name: "加入天健",
                    position: "1",
                    fatherPosition: "1",
                },
                {
                    id: 1,
                    name: "专业研究",
                    position: "1",
                    fatherPosition: "1",
                },
                {
                    id: 1,
                    name: "执业信息",
                    position: "1",
                    fatherPosition: "1",
                },
                {
                    id: 1,
                    name: "联系我们",
                    position: "1",
                    fatherPosition: "1",
                },
            ],
        });
        const method = reactive({
            handleNew() {
                data.title = "新增";
                data.rowInfo = {};
                data.dialogShow = true;
            },
            handleDetail(val) {
                data.detailShow = true;
                data.rowInfo = val;
            },
            handleEdit(val) {
                data.title = "修改";
                data.dialogShow = true;
                data.rowInfo = val;
            },
            handleDel(val) {
                ElMessageBox.confirm("确定删除这个栏目的信息吗?", "提示", {
                    confirmButtonText: "确认",
                    cancelButtonText: "取消",
                    type: "warning",
                })
                    .then(() => {
                        method.handleSure(val);
                    })
                    .catch(() => {
                        // catch error
                    });
            },
            handleSure(val) {
                this.dialogVisible = false;
                const index = data.studentInfo.findIndex((item) => item.id === val.id);
                data.studentInfo.splice(index, 1);
            },
            // 添加行
            addRow(val) {
                data.studentInfo.push(val);
            },
            // 编辑行
            editRow(val) {
                let index = data.studentInfo.findIndex(
                    (item, index) => item.id === val.id
                );
                data.studentInfo.splice(index, 1, val);
            },
            // 关闭详情弹窗
            closeDetail() {
                data.detailShow = false;
            },
        });
        return { ...toRefs(data), ...method };
    },
};
</script>

<style lang="scss" scoped>
.box {
    padding: 20px;
    margin: 1px;
    .new_btn {
        margin-bottom: 10px;
    }
    ::v-deep .el-table__cell {
        text-align: center;
    }
}
</style>





