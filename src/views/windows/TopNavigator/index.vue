


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


                },
                {
                    id: 1,
                    name: "关于天健",
                    position: "2",

                },
                {
                    id: 1,
                    name: "专业服务",
                    position: "3",

                },
                {
                    id: 1,
                    name: "新闻中心",
                    position: "1",

                },
                {
                    id: 1,
                    name: "加入天健",
                    position: "1",

                },
                {
                    id: 1,
                    name: "专业研究",
                    position: "1",

                },
                {
                    id: 1,
                    name: "执业信息",
                    position: "1",

                },
                {
                    id: 1,
                    name: "联系我们",
                    position: "1",

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
    :deep(.el-table__cell) {
        text-align: center;
    }
}
</style>





