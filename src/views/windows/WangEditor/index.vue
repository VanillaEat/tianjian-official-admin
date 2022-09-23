<!--<template>
    <div>
        <el-button @click="$window.add({title: '新窗口', name: 'WindowExampleNewWindow'})">打开一个新窗口（该窗口非导航栏菜单）</el-button>
    </div>
</template>-->

<template>
    <div>


            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label="导航栏">
                    <el-select v-model="formInline.region" placeholder="导航栏">
                        <el-option label="首页" value="shanghai" />
                        <el-option label="关于天健" value="beijing" />
                    </el-select>
                </el-form-item>


                <el-form-item label="栏目">
                    <el-select v-model="formInline.region" placeholder="栏目">
                        <el-option label="天健简介" value="jianjie" />
                        <el-option label="人力资源" value="ziyuan" />
                    </el-select>
                </el-form-item>


                <el-form-item >
                    <el-button  type="primary" @click="onSubmit">Query</el-button>

                </el-form-item>

            </el-form>


        <div style="  border: 1px solid #ccc" class="editor">
            <Toolbar/>
            <Editor/>
        </div>
    </div>

</template>
<script lang="ts" setup>



   // <button>insertText</button>
// const insertText = () => {
//     const editor = editorRef.value // 获取 editor ，必须等待它渲染完之后
//     if (editor == null) return
//
//    return  editor.insertText('hello world') // 执行 editor API
// }




        //
        // <script lang="ts" setup>
           import { reactive } from 'vue'

           const formInline = reactive({
                user: '',
                region: '',
            })

            const onSubmit = () => {
                console.log('submit!')
            }



</script>
<style>
.editor{
    height: 500px;
}
</style>
